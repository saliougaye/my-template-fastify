
const preHandler = (req, reply, done) => {

    const url = req.url;

    if(url.startsWith('/public')) {
        done();
        return;
    }

    done();
}

module.exports = preHandler;