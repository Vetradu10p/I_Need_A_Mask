import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
import pharmacie from "../Helpers/pharmacieData";
import PharmacieItem from './PharmacieItem';
import { getPharmacies } from '../api/PHARMACIEApi'

class Search extends React.Component {

    _loadPharmacies() {
        getPharmacies("pharmacie").then(data => console.log(data))
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textInput} placeholder='Recherchez une pharmacie'/>
                <Button title='Rechercher' onPress={{} = this._loadPharmacies()}/>
                <FlatList
                    data={pharmacie}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <PharmacieItem pharmacie={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 35,
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