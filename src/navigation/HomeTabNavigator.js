import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreNavigator from '../screens/ExploreNavigator';
import HomeScreen from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f15454',
            }}>
            <Tab.Screen
                name={'Explore'}
                component={ExploreNavigator}
            />
            <Tab.Screen
                name={'Saved'}
                component={HomeScreen}
            />
            <Tab.Screen
                name={'Favourites'}
                component={HomeScreen}
            />
            <Tab.Screen
                name={'Profile'}
                component={HomeScreen}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;