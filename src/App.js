import React, {Component, Fragment} from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './components/organsims/Invoice'

import './App.css';
import CSV_Reader from "./components/organsims/CSV Reader";

class App extends Component {

    state = {invoiceData: {}, isData: false}
    callbackFunction = (childData) => {
        this.setState({
            invoiceData: childData.invoiceData,
            isData: childData.isData
        })
    }

    render() {
        return (
            <div>
                <CSV_Reader callbackFunction={this.callbackFunction}/>
                {this.state.isData ? (
                    <Fragment>
                        <PDFViewer width="1000" height="600" className="app">
                            <Invoice invoice={this.state.invoiceData}/>
                        </PDFViewer>
                    </Fragment>
                ) : (
                    <div></div>
                )
                }

            </div>

        );
    }
}

export default App;
