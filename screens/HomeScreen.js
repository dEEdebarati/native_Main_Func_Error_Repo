import React from 'react';
import Constants from 'expo-constants';
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text>Home screen.!``~</Text>

            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
        //70
    }
})
export default HomeScreen;