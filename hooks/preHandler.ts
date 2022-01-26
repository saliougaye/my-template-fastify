import { FastifyReply, FastifyRequest, HookHandlerDoneFunction, preHandlerHookHandler } from "fastify";

const preHandler = (req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {

    const url = req.url;

    if(url.startsWith('/public')) {
        done();
        return;
    }

    done();
}


export default preHandler;