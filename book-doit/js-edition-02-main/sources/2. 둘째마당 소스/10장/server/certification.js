const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

//토큰 생성 관리 키
const SECRET_KEY = 'a1234';

//회원 DB
const users = [
  { name: '홍길동', id: 'abcd1', password: '123456' },
  { name: '김갑수', id: 'abcd2', password: '568789' }
];

app.post('/login', (req, res) => {
  const { userid, password } = req.body;
  const user = users.find(u => u.id === userid && u.password === password);
  
  if (user) {
      // 회원 정보가 일치하면 JWT 발급
      const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1m' });
      res.json({ token });
  } else {
      res.status(401).json({ message: '일치하는 아이디 비밀번호가 없습니다.' });
  }
});

app.get('/token-valid', (req, res) => {
  console.log(req.headers['authorization']);
  const token = req.headers['authorization']?.split(' ')[1];

  try {
      const decoded = jwt.verify(token, SECRET_KEY);
      res.json({ message: '사용자 아이디 정보', userId: decoded.userId });
  } catch (error) {
      res.status(401).json({ message: '토큰이 유효하지 않습니다.' });
  }
});

app.listen(3000, () => {
  console.log('http://localhost:3000 서버 실행중');
});