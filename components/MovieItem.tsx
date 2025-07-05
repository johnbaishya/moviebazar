import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import endpoints from 'services/api/endpoints'
import { router } from 'expo-router';
import { updateStore } from 'store/actions';

export default function MovieItem({data}:any) {
    const imageUri = endpoints.movieImageUri(data.poster_path);
  return (
    <TouchableOpacity onPress={()=>{
        updateStore({
            selectedMovie: data,
        });

        router.navigate("/movieDetail",{
        })
    }}>

        <View style={styles.container}>
            <View style={{ width: 130, height: 130, backgroundColor: '#ccc', borderRadius: 8, marginRight: 10 }} >
                <Image 
                    source={{ uri: imageUri }} 
                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                    />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.overview} numberOfLines={5} ellipsizeMode="tail">
                    {data.overview}
                
                    </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        height: 150,
        flexDirection:"row"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    overview: {
        fontSize: 14,
        color: '#666',
    },
})