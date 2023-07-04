import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageView from "../views/home";
import { HomeStackParamList } from "./params/HomeStackParamList";
import Player from "../views/player";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {

    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}} >
            <HomeStack.Screen name="Home" component={HomePageView} />
            <HomeStack.Screen name="Player" component={Player} />

        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;