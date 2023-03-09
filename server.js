const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const PORT = process.env.PORT || 3000;
const router = require('./routers/index');

// db konek


db.connect();



// middleware

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended:true,limit: "50mb"}));

app.use(express.json());


// headers
app.use((req,res,next)=> {
	res.header('Access-control-Allow-Origin','*');
	res.header('Access-control-Allow-Headers','*');
	next();
});


// API

app.use('/api',router);


// static resources

app.use('/upload',express.static(path.join(__dirname,'/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/dist')));

app.get("*", (req,res) => {
	try {
		res.sendFile(path.join(`${__dirname}/../frontend/dist/index.html`));
	} catch (e) {
		res.send('Ooops! error occurred');
	}
})


// cors
app.use(cors());


// server running

app.listen(PORT,()=> {
	console.log(`StackLovers is running on PORT ${PORT}`);
})
