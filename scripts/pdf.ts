import type { Server } from 'node:http';
import { createServer } from 'node:http';
import { resolve as resolvePath } from 'node:path';
import { cwd, env } from 'node:process';
import puppeteer from 'puppeteer';
import handler from 'serve-handler';

const CWD = cwd();
const SERVE_PATH = resolvePath(CWD, './dist');

interface StartServerResult {
	readonly server: Server;
	readonly port: number;
}

const startServer = (): Promise<StartServerResult> => {
	const server = createServer((request, response) => {
		void handler(request, response, {
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

	// eslint-disable-next-line no-console
	console.log('Server listening on port:', port);

	const args = Array<string>();

	if (env.CI) {
		args.push('--no-sandbox');
	}

	const browser = await puppeteer.launch({
		headless: 'new',
		args,
	});
	const page = await browser.newPage();

	await page.emulateMediaType('print');
	await page.goto(`http://localhost:${port}/resume/`, {
		waitUntil: 'networkidle0',
	});

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
				// eslint-disable-next-line no-console
				console.error(err);
				reject(err);
			}
		});
	});

	// eslint-disable-next-line no-console
	console.log('PDF rendered: ./dist/Trevor_Schmidt_resume.pdf');
};

void generatePDF();
