const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by CrazyDave');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work-experience', (req, res, next)=>{
	res.sendfile("assets/work-experience.json")
})

app.get('/Skills&Competencies', (req, res, next)=>{
	res.sendfile("assets/Skills&Competencies.json")
})

app.get('/Achievements&Certificates', (req, res, next)=>{
	res.sendfile("assets/achievements&certificates.json")
})

app.get('/Interests', (req, res, next)=>{
	res.sendfile("assets/interests.json")
})

app.get('/proxy', (req, res, next)=>{
	res.sendfile("assets/1a_proxy_size.json")
})

app.get('/hours', (req, res, next)=>{
	res.sendfile("assets/a1_dev_hours.json")
})

app.get('/a3-test1', (req, res, next)=>{
	res.sendfile("assets/a3_test1.json")
})

app.get('/a3-test2', (req, res, next)=>{
	res.sendfile("assets/a3_test2.json")
})

app.get('/a3-test3', (req, res, next)=>{
	res.sendfile("assets/a3_test3.json")
})

app.get('/a3-test4', (req, res, next)=>{
	res.sendfile("assets/a3_test4.json")
})


app.listen(port,  () => 
	console.log('listening on port ' + port
));


