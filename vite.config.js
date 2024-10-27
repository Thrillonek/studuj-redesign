import react from '@vitejs/plugin-react';
import fs from 'fs';
import { defineConfig } from 'vite';

const files = {};
fs.readdirSync('./odkazy').forEach((file) => {
	if (!file.includes('.')) {
		const dir = fs.readdirSync(`./odkazy/${file}`);
		files[file] = dir;
	}
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		__FILES__: files,
	},
});
