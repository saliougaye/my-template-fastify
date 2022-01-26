const { helloWorldSchema } = require('../schemas/index');

const get = (req, reply) => {

    return {
        message: "hello world"
    }
}

const helloWorldRoute = (fastify, opts, done) => {

    fastify.get(
        '/hello',
        helloWorldSchema,
        get
    );

    done();
}

module.exports = helloWorldRoute;