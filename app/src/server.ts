import { createServer } from 'node:http';
import { readFile } from 'node:fs';
import { join, extname } from 'node:path';

const server = createServer((req, res) => {
    const filePath = req.url === '/' ? '/app/index.html' : req.url;
    const fullPath = join(process.cwd(), filePath || '');

    // Determina il tipo di contenuto in base all'estensione del file
    const ext = extname(fullPath);
    let contentType = 'text/plain';
    if (ext === '.html') contentType = 'text/html';
    else if (ext === '.js') contentType = 'application/javascript';
    else if (ext === '.css') contentType = 'text/css';
    else if (ext === '.json') contentType = 'application/json';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';

    // Legge e invia il file richiesto
    readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File non trovato');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

// Avvia il server
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
