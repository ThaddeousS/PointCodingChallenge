import React, { Component, ReactElement } from "react";
import { View, Text, SectionListData } from "react-native";
import { NavigationScreenProp, NavigationState, NavigationParams, SafeAreaView } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";

interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IBusinessEntry {
    name: string;
    reviews: IBusinessReview[];
}

interface IBusinessReview {
    text: string;
    rating: number;
}

export default class ListScreen extends Component<IProps> {
   render() {
        const items = this.buildSectionData();

        return (
            <SafeAreaView>
                <FlatList 
                    data={this.buildSectionData()}
                    renderItem={this.renderITem}
                    keyExtractor={(item, key) => item.name + key}
                />
            </SafeAreaView>
        )
   }

    private renderITem = ({ item }): ReactElement<any> => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        );
    };

   private buildSectionData(): SectionListData<IBusinessEntry>[] {
        const queryData = this.props.navigation.getParam('queryData');
        return queryData.data.search.business;
   }
}