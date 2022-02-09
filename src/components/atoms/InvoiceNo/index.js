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
    invoiceNumber: {
        fontSize: 13,
        fontStyle: 'bold',
    },
    date: {
        paddingRight: 23,
        fontSize: 13,
    },
    balance: {
        fontWeight: 'bold',
        paddingRight: 20,
        fontSize: 13,
    }

});


const InvoiceNo = ({invoice}) => {
    return(
    <Fragment>
        <View style={styles.invoiceNoContainer}>
            <Text style={{}}># </Text>
            <Text style={styles.invoiceNumber}>{invoice.invoice_no}</Text>
        </View>
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.date}>Date: </Text>
            <Text style={styles.date}>{invoice.trans_date}</Text>
        </View>
        <View style={styles.invoiceDueContainer}>
            <Text style={styles.balance}>Balance Due: </Text>
            <Text style={styles.balance}>{invoice.balance}</Text>
        </View>
    </Fragment>
)};

export default InvoiceNo
