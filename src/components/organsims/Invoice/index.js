import React from 'react';
import {Page, Document, StyleSheet} from '@react-pdf/renderer';
import InvoiceTitle from '../../atoms/InvoiceTitle';
import BillTo from '../../atoms/BillTo';
import InvoiceNo from '../../atoms/InvoiceNo';
import InvoiceItemsTable from '../../atoms/InvoiceItemsTable';
import InvoiceThankYouMsg from '../../atoms/InvoiceThankYouMsg';


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
    }
});

const Invoice = ({invoice}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/*<Image style={styles.logo} src={logo} />*/}
            <InvoiceTitle title='Tax Invoice'/>
            <InvoiceNo invoice={invoice}/>
            <BillTo invoice={invoice}/>
            <InvoiceItemsTable invoice={invoice}/>
            <InvoiceThankYouMsg invoice={invoice}/>
        </Page>
    </Document>
);

export default Invoice
