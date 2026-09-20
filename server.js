import http from 'node:http';
import { readFile } from 'node:fs/promises';
const page = await readFile(new URL('./index.html', import.meta.url));
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', app: 'hello-world' }));
  }
  if (req.url !== '/') { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page);
}).listen(port, '0.0.0.0', () => console.log(`Hello World listening on ${port}`));
