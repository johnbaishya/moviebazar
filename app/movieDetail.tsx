import { View, Text, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import endpoints from 'services/api/endpoints'
import useAppStore from 'store/store';

export default function MovieDetail() {
    const {selectedMovie:sm} = useAppStore();
    const bgImguri = endpoints.movieImageUriHD(sm.backdrop_path);
    const posterImguri = endpoints.movieImageUri(sm.poster_path);
  return (
    <>
    <Stack.Screen options={{ title: 'Movie Detail', }} />
    <View style={styles.screenContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View  style={styles.topSection}>
                <ImageBackground source={{uri:bgImguri}} resizeMethod='auto' style={styles.backDroupImage}>
                {/* <Image 
                    source={{uri:bgImguri}} 
                    style={styles.backDroupImage}
                    /> */}
                    <View style={styles.mainInfoContainer}>
                        <View style={{ width: 150, height: 160, backgroundColor: '#ccc', borderRadius: 8, marginRight: 10 }} >
                            <Image 
                                source={{ uri: posterImguri }} 
                                style={{ width: '100%', height: '100%', borderRadius: 8 }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>{sm.title}</Text>
                            <Text style={{ fontSize: 12, color: '#fff', marginTop: 5 }}>Release Date: {sm.release_date}</Text>
                            <Text style={{ fontSize: 12, color: '#fff', marginTop: 5 }}>Rating: {sm.vote_average}</Text>
                            <Text style={{ fontSize: 12, color: '#fff', marginTop: 5 }}>Total Vote: {sm.vote_count}</Text>
                        </View>
                    </View>
                </ImageBackground>

            </View>
            
            <View style={{ padding: 20, backgroundColor: '#fff', flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Overview</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>
                    {sm.overview || "No overview available for this movie."}
                </Text>
            </View>
        </ScrollView>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    screenContainer:{
        height: '100%',
        width: '100%',
        flex: 1,
    },
    topSection:{
        height: 500,
        // backgroundColor: 'red',
    },
    backDroupImage: {
        width: '100%', 
        height: "100%"
    },
    mainInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        // backgroundColor: 'red',
        // height: 200,
        width: '100%',
        flexDirection: 'row',
    }

})
