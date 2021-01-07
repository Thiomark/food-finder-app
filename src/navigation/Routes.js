import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import Home from '../screens/Home'

const Stack = createStackNavigator()

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} style={styles.header} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        color: 'red'
    },
});

export default Router;