import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDueContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        paddingRight: 20
    }

});


const InvoiceNo = ({invoice}) => {
    return(
    <Fragment>
        <View style={styles.invoiceNoContainer}>
            <Text style={{}}># </Text>
            <Text style={styles.invoiceDate}>{invoice.invoice_no}</Text>
        </View>
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Date: </Text>
            <Text>{invoice.trans_date}</Text>
        </View>
        <View style={styles.invoiceDueContainer}>
            <Text style={styles.label}>Balance Due: </Text>
            <Text>{invoice.balance}</Text>
        </View>
    </Fragment>
)};

export default InvoiceNo