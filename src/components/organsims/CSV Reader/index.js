import React, {Component} from 'react'
import {CSVReader} from 'react-papaparse'
export default class CSV_Reader extends React.Component {
    invoice_data = {};

    jsonifyData = (data) => {
        this.invoice_data['trans_date'] = new Date().toDateString();
        for (let item of data) {
            if (item.data[0] === "Invoice #:") {
                this.invoice_data['id'] = "Invoice: " + item.data[1];
                this.invoice_data['invoice_no'] = item.data[1];
            } else if (item.data[0] === "Recpient:") {
                this.invoice_data['company'] = item.data[1];
            } else if (item.data[0] === "From:") {
                // this.invoice_data['from'] = item.data[1];
            } else if(item.data[0] === "Notes:"){
                this.invoice_data['notes'] = item.data[1];
            } else if (item.data[0] === "sno") {
                this.invoice_data['items'] = [];
            } else {
                if (this.invoice_data['items'] !== undefined) {
                    if(item.data[0] !== "") {
                        let lineItem = {
                            sno: item.data[0],
                            desc: item.data[1],
                            qty: item.data[2],
                            rate: item.data[3],
                        };
                        this.invoice_data['items'].push(lineItem);
                    }
                }
            }
        }
        let balance = 0;
        this.invoice_data['items'].forEach( item => {
            balance = balance + (item.qty * item.rate);
            });
        this.invoice_data['balance'] = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NZD' }).format(balance);
    }

    handleOnDrop = (data) => {
        this.jsonifyData(data);
        console.log("Invoice data: ",this.invoice_data);
        this.props.callbackFunction({invoiceData: this.invoice_data, isData: true});
    }

    handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }

    render() {
        return (
            <CSVReader
                onDrop={this.handleOnDrop}
                onError={this.handleOnError}
                noDrag
                addRemoveButton
                onRemoveFile={this.handleOnRemoveFile}
            >
                <span>Click to upload.</span>
            </CSVReader>
        )
    }
}
