import { createAppContainer, NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SearchScreen } from './SearchScreen';
import ListScreen from './ListScreen';

export default class Navigation {
    static create(): NavigationContainer {
        const rootNavigationStack = createStackNavigator({ Search: SearchScreen, List: ListScreen });

        return createAppContainer(rootNavigationStack);
    }
}