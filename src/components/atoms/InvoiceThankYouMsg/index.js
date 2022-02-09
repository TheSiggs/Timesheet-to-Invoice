import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    titleContainer:{
        marginTop: 12
    },
    reportTitle:{
        fontSize: 12,
        fontStyle: 'italic',
    },
    reportContent:{
        fontSize: 12,
    }
  });


  const InvoiceThankYouMsg = ({invoice}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Notes:</Text>
        <Text style={styles.reportContent}>{invoice.notes}</Text>
    </View>
  );

  export default InvoiceThankYouMsg
