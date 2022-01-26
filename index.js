// import libraries
const Fastify = require('fastify');
const dotenv = require('dotenv');
const path = require('path')

// config dotenv
dotenv.config();

// import routes
const {
    hellowWorldRoute
} = require('./routes/index');

// import hooks
const {
    preHandler
} = require('./hooks/index');


const prefix = '/api';
const PORT = process.env.PORT || 5000;
const ADDRESS = process.env.ADDRESS || '127.0.0.1';
const config = {
    port: PORT,
    address: ADDRESS,
}

// initialize app
const app = Fastify({
    logger: true
});

//register plugin
app.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/'
});

//register hooks

app.addHook('preHandler', preHandler);

// register routes
app.register(hellowWorldRoute, {
    prefix: prefix
});




app.listen(config, (err, address) => {
    if (err) {
        console.error(err);

        process.exit(1);
    }

    console.log(`Server is running at: ${address}`);
})




