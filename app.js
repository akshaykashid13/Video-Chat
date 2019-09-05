const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/front-end/index.html'));
});
app.use(express.static('front-end'), () => {
	console.log('Request Recived');
});
app.listen(port, () => {
	console.log('Listening on Port ', port);
});
