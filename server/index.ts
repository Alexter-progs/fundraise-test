import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as serve from 'koa-static';
import * as bodyParser from 'koa-body';
import { MongoClient, Collection } from 'mongodb';

import * as path from 'path';

import config from './config';

const app = new Koa();
const client = new MongoClient(config.MONGODB_URL, { useUnifiedTopology: true });
const FRONTEND_APP_BUILD_PATH = path.resolve(__dirname, '../dist');



app.use(bodyParser());

app.use(serve(FRONTEND_APP_BUILD_PATH));

app.use(async (ctx: any, next: any) => {
    // Log the request to the console
    console.log('Url:', ctx.url);
    // Pass the request to the next middleware function
    await next();
});

const router = new Router();

router.post('/api/donate', async (ctx: any) => {
    const allowedCurrencies = ["USD", "EUR", "GBP", "RUB"];
    const {amount, currency} = ctx.request.body;

    if (amount > 0 && allowedCurrencies.some((allowedCurrency) => currency === allowedCurrency)) {
        const collection: Collection = ctx.db.collection('donations');

        await collection.insertOne({
            amount,
            currency
        });

        ctx.body = JSON.stringify({"ok": true});
    }
});

app.use(router.routes());

client.connect((err) => {
    if (!err) {
        const db = client.db(config.DB_NAME);
        app.context.db = db;
    }
});

app.listen(config.PORT);
console.log(`Running server on port ${config.PORT}`);
