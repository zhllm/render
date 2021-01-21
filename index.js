import console from 'console';
import Koa from 'koa';
import Router from 'koa-router';
import process from 'process';

import schema from './schema';
import graphHTTP from 'koa-graphql';

const app = new Koa();
const router = new Router();

router.all('/graphql', graphHTTP({
    schema,
    graphiql: true,
}));

app.use(router.routes(), router.allowedMethods());

const POST = process.env.POST || 8081;


app.listen(POST, () => {
    console.log(`serve started at ${POST}`);
})