import React, { useState } from "react";
import { TextInput, View, Button, NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import { NavigationRoutes } from './NavigationRoutes';
import Client from "./Client";

interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const SearchScreen = (props: IProps) => {
    const [searchText, setSearchText] = useState('Search...');
    const [locationText, setLocationText] = useState('Location...');

    return (
        <View>
        <TextInput value={searchText} onChangeText={setSearchText} />
        <TextInput value={locationText} onChangeText={setLocationText}/>
        <Button title={'Search'} onPress={async (e: NativeSyntheticEvent<NativeTouchEvent>) => {
            const queryData = await Client.query(searchText, locationText);
            props.navigation.navigate(NavigationRoutes.List, {
                queryData
            });
        }} />
    </View>
    );
}