import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  const filePath = './ir.csv';
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'application/csv',
    'Content-Length': stat.size,
    'Content-Disposition': 'attachment; filename=ir.csv',
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
