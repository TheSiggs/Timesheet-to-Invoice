import React from 'react';
import {Page, Document, StyleSheet, View} from '@react-pdf/renderer';
import InvoiceTitle from '../../atoms/InvoiceTitle';
import BillTo from '../../atoms/BillTo';
import InvoiceNo from '../../atoms/InvoiceNo';
import InvoiceItemsTable from '../../atoms/InvoiceItemsTable';
import InvoiceThankYouMsg from '../../atoms/InvoiceThankYouMsg';
import InvoiceFrom from "../../atoms/InvoiceFrom";


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        width: '100%',
    }
});

const Invoice = ({invoice}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <InvoiceTitle title='Tax Invoice'/>
                <InvoiceFrom name={invoice.from}/>
            </View>
            <InvoiceNo invoice={invoice}/>
            <BillTo invoice={invoice}/>
            <InvoiceItemsTable invoice={invoice}/>
            <InvoiceThankYouMsg invoice={invoice}/>
        </Page>
    </Document>
);

export default Invoice
