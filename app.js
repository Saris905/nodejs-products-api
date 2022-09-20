require('dotenv').config()
require('express-async-errors') // async errors "throw new Error('text')""

const express = require('express');
const app = express(); // import app

const connectDB = require('./db/connect'); // connect our database
const productsRouter = require('./routes/products') // function for products routing

const notFoundMiddleware = require('./middleware/not-found'); // 404 catcher
const errorMiddleware = require('./middleware/error-handler'); // 500 catcher

// middleware
app.use(express.json()); // ???

// rootes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRouter); // request and func for working with req

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start();