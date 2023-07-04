import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageView from "../views/home";
import { HomeStackParamList } from "./params/HomeStackParamList";
import Player from "../views/player";
import TabNavigator from "./TabNavigator";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {

    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}} >
            <HomeStack.Screen name="Home" component={TabNavigator} />
            <HomeStack.Screen name="Player" component={Player} />

        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;