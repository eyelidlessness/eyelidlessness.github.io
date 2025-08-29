// @ts-check

import { createServer } from 'node:http';
import { resolve as resolvePath } from 'node:path';
import { cwd } from 'node:process';
import puppeteer from 'puppeteer';
import handler from 'serve-handler';

const CWD = cwd();
const SERVE_PATH = resolvePath(CWD, './dist');

/**
 * @typedef {import('node:http').Server} Server
 */

/**
 * @return {Promise<{ server: Server, port: number }>}
 */
const startServer = () => {
  /** @type {Server} */
  const server = createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/vercel/serve-handler#options
    return handler(request, response, {
      public: SERVE_PATH,
    });
  });

  return new Promise((resolve, reject) => {
    server.once('listening', () => {
      const address = server.address();

      if (typeof address !== 'object' || address == null) {
        reject(new Error(`Unexpected server address: ${address}`));
        return;
      }

      resolve({ server, port: address.port });
    });

    server.listen();
  });
};

const generatePDF = async () => {
  const { server, port } = await startServer();

  console.log('Server listening on port:', port);

  /** @type {string[]} */
  const args = Array();

  if (process.env.CI) {
    args.push('--no-sandbox');
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args,
  });
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}/resume/`, {
    waitUntil: 'networkidle0',
  });

  await page.emulateMediaType('print');
  await page.waitForNetworkIdle({
    idleTime: 500,
  });

  await page.pdf({
    path: './dist/Trevor_Schmidt_resume.pdf',
    scale: 0.99,
  });
  await browser.close();

  await new Promise((resolve, reject) => {
    server.close((err) => {
      if (err == null) {
        resolve(null);
      } else {
        console.error(err);
        reject(err);
      }
    });
  });

  console.log('PDF rendered: ./dist/Trevor_Schmidt_resume.pdf');
};

void generatePDF();
