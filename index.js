import console from 'console';
import cons from 'consolidate';
import koa from 'koa';
import Router from 'koa-router';
import process from 'process';
import { async } from 'regenerator-runtime';

const app = new koa();
const router = new Router();


router.get('/', async ctx => {
    ctx.body = `<h1> hello world </h1>`;
})

app.use(router.routes(), router.allowedMethods());

const POST = process.env.POST || 8080;


app.listen(POST, () => {
    console.log(`serve started at ${POST}`);
})