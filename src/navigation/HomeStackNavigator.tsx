import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from "./params/HomeStackParamList";
import Player from "../views/player";
import TabNavigator from "./TabNavigator";
import SearchView from "../views/search";
import SubscriptionView from "../views/subscription";
import NotificationView from "../views/notification";
import VideosView from "../views/videos";
import CMSPageView from "../views/cms";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

interface IHomeStackNavigatorProps {
    isSubscribed: boolean;
}

const HomeStackNavigator:React.FC<IHomeStackNavigatorProps> = ({isSubscribed}) => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}} initialRouteName={isSubscribed ? 'Home': 'Subscription'} >
            <HomeStack.Screen name="Subscription" component={SubscriptionView} />
            <HomeStack.Screen name="Home" component={TabNavigator} />
            <HomeStack.Screen name="Player" component={Player} />
            <HomeStack.Screen name="Search" component={SearchView} />
            <HomeStack.Screen name="Notification" component={NotificationView} />
            <HomeStack.Screen name="Videos" component={VideosView} />
            <HomeStack.Screen name="CMS" component={CMSPageView} />
        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;