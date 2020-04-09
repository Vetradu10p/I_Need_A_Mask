import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import PharmacieItem from './PharmacieItem'
import { getPharmacies } from '../API/Pharmacie'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = {
            pharmacies: []
        }
    }

    _loadPharmacies() {
        if (this.searchedText.length > 0) {
            getPharmacies(this.searchedText).then(data => {
                this.setState({ pharmacies: data.results })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        console.log("RENDER")
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Nom de la pharmacie'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadPharmacies()}/>
                <FlatList
                    data={this.state.pharmacies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <PharmacieItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 35
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search