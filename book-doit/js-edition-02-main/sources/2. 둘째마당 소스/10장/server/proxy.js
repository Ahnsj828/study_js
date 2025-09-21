const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/proxy', function(req, res) {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL이 필요합니다.');
    }
    console.log(url);
    request(url).pipe(res);
});

app.listen(3000, function() {
    console.log('3000 포트 플록시 서버가 실행중입니다.');
});