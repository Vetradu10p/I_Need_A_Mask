import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
import pharmacie from "../Helpers/pharmacieData";

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textInput} placeholder='Recherchez une pharmacie'/>
                <Button title='Rechercher' onPress={{} = {}}/>
                <FlatList
                    data={pharmacie}
                    renderItem={({item}) => <Text>{item.nom}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
},

    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search;