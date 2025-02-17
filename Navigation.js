import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import CategoryList from "./components/pages/CategoryList";
import Cart from "./components/pages/Cart";
import ProductList from "./components/pages/ProductsList";
import DeliveryDetails from "./components/pages/DeliveryDetails";
import DeliveryDetailsCheck from "./components/pages/DeliveryDetailsCheck";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import Orders from "./components/pages/Orders";
import ProductInfo from "~/components/pages/ProductInfo";

const { Navigator, Screen } = createNativeStackNavigator();

/**
 * Стэк навигация
 */
const AppStackNavigator = () => {

    useEffect(()=> {
        StatusBar.setBarStyle("light-content", true);
    }, []);

    return (
        <Navigator
            initialRouteName="CategoryList"
            backBehavior="history"
            mode='modal'
            headerMode='screen'
            defaultNavigationOptions={{
                tabBarVisible: true,
                headerHideShadow: true,
            }}>
            <Screen 
                name="RegisterPage"
                component={RegisterPage}/>
            <Screen 
                name="LoginPage"
                component={LoginPage}/>
            <Screen 
                name="CategoryList"
                component={CategoryList}/>
            <Screen 
                name="Cart"
                component={Cart}/>
            <Screen 
                name="ProductList"
                component={ProductList}/>
            <Screen
                name="ProductInfo"
                component={ProductInfo}/>
            <Screen 
                name="DeliveryDetails"
                component={DeliveryDetails}/>
            <Screen 
                name="DeliveryDetailsCheck"
                component={DeliveryDetailsCheck}/>
            <Screen 
                name="Orders"
                component={Orders}/>
        </Navigator>
    );
};

export default AppStackNavigator;