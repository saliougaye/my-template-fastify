import Fastify from 'fastify';
import dotenv from 'dotenv';
import path from 'path';
import hooks from './hooks/index';
import routes from './routes/index';


// config dotenv
dotenv.config();

// import routes
const {
    helloWorldRoute
} = routes;


// import hooks
const {
    preHandler
} = hooks;


const prefix = '/api';
const PORT : number = process.env.PORT ? +process.env.PORT : 5000;
const ADDRESS = process.env.ADDRESS || '127.0.0.1';
const config = {
    port: PORT,
    address: ADDRESS,
    host: undefined,
    backlog: undefined
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
app.register(helloWorldRoute, { prefix: prefix} );


app.listen(config, (err, address) => {
    if (err) {
        console.error(err);

        process.exit(1);
    }

    console.log(`Server is running at: ${address}`);
})