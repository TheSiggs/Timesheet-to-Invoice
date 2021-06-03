import express from 'express';
import React, {Component} from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Invoice } from 'react-simple-invoice';


export default class Create_Invoice extends Component {


}

const app = express()

app.get('/', (req, res) => {
    const html = renderToStaticMarkup(
        <Invoice
            invoice={invoice}
            customer={customer}
            company={company}
        />
    );

    res.send(`<!doctype html>${html}`);
});