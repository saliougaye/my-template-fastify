import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import helloWorldSchema from "../schemas/hello-world-schema";


interface IGetResponse {
    message: string
}




const get = async (req: FastifyRequest, reply: FastifyReply) : Promise<IGetResponse> => {

    return {
        message: "hello world"
    }
}

const helloWorldRoute = (fastify: FastifyInstance,  opts: FastifyPluginOptions, done: HookHandlerDoneFunction) => {

    fastify.get(
        '/hello',
        helloWorldSchema,
        get
    );

    done();

}

export default helloWorldRoute;