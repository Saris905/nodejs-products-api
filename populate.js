require('dotenv').config()
// works with node populate
const connectDB = require('./db/connect'); 
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        process.exit(0); // it ends process in terminal
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();