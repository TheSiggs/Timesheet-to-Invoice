import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#222222'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#ffffff',
        backgroundColor: '#222222',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        color: 'white',
        width: '60%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        color: 'white',
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    rate: {
        color: 'white',
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        color: 'white',
        width: '15%'
    },
  });

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.description}>Item</Text>
        <Text style={styles.qty}>Quantity</Text>
        <Text style={styles.rate}>Rate</Text>
        <Text style={styles.amount}>Amount</Text>
    </View>
  );

  export default InvoiceTableHeader
