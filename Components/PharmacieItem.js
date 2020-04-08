import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

class PharmacieItem extends React.Component {
    render() {
        const pharmacie = this.props.pharmacie
        console.log(this.props)
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.nom_text}>{pharmacie.nom}</Text>
                    </View>

                    <View style={styles.adresse_container}>
                        <Text style={styles.adresse_text}>{pharmacie.adresse} </Text>
                        <Text style={styles.latitude_text}>Lat: {pharmacie.latitude}</Text>
                        <Text style={styles.longitude_text}>Long: {pharmacie.longitude}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
        image: {
            width: 120,
            height: 180,
            margin: 5,
            backgroundColor: 'black'
        },
        content_container: {
            flex: 1,
            margin: 5
        },
        header_container: {
            flex: 3,
            margin: 5
        },
        nom_text: {
            fontWeight: 'bold',
            fontSize: 20,
            flex: 1,
            flexWrap: 'wrap',
            paddingRight: 5
        },
        adresse_container: {
            flex: 7
        },
        adresse_text: {
            fontStyle: 'italic',
            marginBottom: 20
        },
        latitude_text: {
            fontStyle: 'italic',
            color: '#666666'
        },
        longitude_text: {
            fontStyle: 'italic',
            color: '#666666'
        }
    });

export default PharmacieItem