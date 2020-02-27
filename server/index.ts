import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();


app.use(async (ctx: any, next: any) => {
    // Log the request to the console
    console.log('Url:', ctx.url);
    // Pass the request to the next middleware function
    await next();
});

const router = new Router();
router.get('/api/donations', async (ctx: any) => { 
    ctx.body = '4000$';
});

app.use(router.routes());

app.listen(3000);

console.log('Running server on port 3000');