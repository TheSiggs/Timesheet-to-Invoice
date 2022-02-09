import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
      paddingBottom: 30,
      marginLeft: -200,
    },
    text: {
        fontFamily: 'Helvetica-Oblique',
        fontSize: 13,
    },
  });


const InvoiceFrom = ({name}) => (
  <View style={styles.headerContainer}>
      <Text style={styles.text}>{name}</Text>
  </View>
);

export default InvoiceFrom
