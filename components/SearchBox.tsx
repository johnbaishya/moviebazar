import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { searchMovies } from 'services/movieService';
import useAppStore from 'store/store';
import { resetStore, updateStore } from 'store/actions';

export default function SearchBox() {
    const [searchText, setSearchText] = React.useState("");
    const {searchKeyword} = useAppStore();

    const handleSearch = () => {
        if (searchText.trim() === "") {
            console.warn("Search text is empty");
            return; // Prevent search if input is empty
        }
        resetStore(); // Reset the store before a new search
        searchMovies(searchText,1,false);
    }

  return (
    <View>
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder='Search Movies Here...'
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
            <TouchableOpacity style={styles.searchButton}
                onPress={handleSearch}
                activeOpacity={0.7}
            >
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
        <Text style={{marginTop: 10, color: '#888'}}>Results for : {searchKeyword} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 0,
        height: 50,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
        overflow: 'hidden',
    },
    textInput:{
        width: '100%',
        // height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        fontSize: 16,
        color: '#000',
        flex:4,
        overflow: 'hidden',
        
    },
    searchButton:{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#007bff',
    }
})