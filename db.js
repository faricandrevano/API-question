const mongoose = require('mongoose');
const url = "mongodb://faric:fr260206@ac-ujteguk-shard-00-00.lxo2iqn.mongodb.net:27017,ac-ujteguk-shard-00-01.lxo2iqn.mongodb.net:27017,ac-ujteguk-shard-00-02.lxo2iqn.mongodb.net:27017/stackLovers?ssl=true&replicaSet=atlas-50s74k-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
module.exports.connect = () => {
	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then((res)=> {
		console.log("MongoDB is connected successfully")
	}).catch((err)=> console.log('Error: ', err));
}