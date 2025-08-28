// @ts-check

import { spawn } from 'node:child_process';
import puppeteer from 'puppeteer';

const SERVE_PORT = '5001';

/**
 * @return {import('node:child_process').ChildProcess}
 */
const startServer = () => {
  return spawn('yarn', ['serve', '--listen', SERVE_PORT], {
    detached: true,
    stdio: 'ignore',
  });
};

const generatePDF = async () => {
  if (process.env.CI) {
    throw new Error('This does not work yet!');
  }

  const server = startServer();

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
  await page.goto(`http://localhost:${SERVE_PORT}/resume/`, {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
    path: './dist/Trevor_Schmidt_resume.pdf',
    scale: 0.99,
  });
  await browser.close();

  server.kill();
  server.unref();

  console.log('PDF rendered: ./dist/Trevor_Schmidt_resume.pdf');
};

void generatePDF();
