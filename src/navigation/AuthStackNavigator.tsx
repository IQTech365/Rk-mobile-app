import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackRoute } from "../utils/constants";
import SignInPageView from "../views/signin";
import SignUpPageView from "../views/signup";
import ForgotPasswordPageView from "../views/forgotPassword";
import IntroPageView from "../views/intro";
import ChangePasswordPageView from "../views/changePassword";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {

    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={AuthStackRoute.Intro} >
            <AuthStack.Screen name={AuthStackRoute.SignIn} component={SignInPageView} />
            <AuthStack.Screen name={AuthStackRoute.SignUp} component={SignUpPageView} />
            <AuthStack.Screen name={AuthStackRoute.ForgotPassword} component={ForgotPasswordPageView} />
            <AuthStack.Screen name={AuthStackRoute.ChangePassword} component={ChangePasswordPageView} />
            <AuthStack.Screen name={AuthStackRoute.Intro} component={IntroPageView} />
        </AuthStack.Navigator>
    );
}

export default AuthStackNavigator;