const http = require('http');

// サーバーの作成
const server = http.createServer((req, res) => {
  // レスポンスの設定
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// サーバーの起動
server.listen(3000, 'localhost', () => {
  console.log('Server started on port 3000');
});
