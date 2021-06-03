import React, { Component } from 'react'

import { CSVReader } from 'react-papaparse'

const buttonRef = React.createRef()

export default class CSV_Reader extends Component {
    invoice_data = {};
    line_items = [];

    jsonifyData = (data) => {
        for (let item of data) {
            console.log(item.data[0]);
            if (item.data[0] == "Invoice #:") {
                this.invoice_data['invoice_number'] = item.data[1];
            }
            else if (item.data[0] == "Hourly Rate:") {
                this.invoice_data['rate'] = item.data[1];
            }
            else if (item.data[0] == "Recpient:") {
                this.invoice_data['recipient'] = item.data[1];
            }
            else if (item.data[0] == "From:") {
                this.invoice_data['from'] = item.data[1];
            }
            else if (item.data[0] == "Date") {
                // this.invoice_data['line_items'] = [];

            } else {
                if (item.data.length == 3) {
                    this.line_items.push(item.data);
                }
                // this.invoice_data['line_items'].push(item.data);
            }
        }
        this.line_items.shift();
        this.invoice_data["Items"] = this.line_items;
        console.log(this.invoice_data)
        // console.log(this.line_items)
    }

    handleOnDrop = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
        this.jsonifyData(data);
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