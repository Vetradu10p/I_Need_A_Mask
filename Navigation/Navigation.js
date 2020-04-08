import { createStackNavigator } from 'react-navigation-stack'
import { NavigationContainer } from '@react-navigation/native';

import Search from '../Components/Search'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    }
});

export default NavigationContainer(SearchStackNavigator)


