import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DetailScreen = () => {
    return (
        <View>
            <Text style={styles.sectionContainer}>DetailScreen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        color: 'red'
    },

});

export default DetailScreen;