import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import MovieItem from './MovieItem'
import useAppStore from 'store/store';
import { getMoreMoviesAfterScroll } from 'services/movieService';

export default function MovieList() {
  const { movies, pageMetaData,loading,searchKeyword } = useAppStore();
  const { total_pages, page } = pageMetaData;
  let searchEnabled = searchKeyword.length > 0; 
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#f0f0f0' }}>
      <FlatList
        data={movies}
        renderItem={({ item,index }) => {
          console.log("Rendering item: ", index.toString());
          return(
            <MovieItem data={item}/>
          )
          }
        }
        onEndReached={()=>{
          console.log("End Reached");
        getMoreMoviesAfterScroll();

        }}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={()=>(
            <View style={{ padding: 30, alignItems: 'center', justifyContent: 'center', height: 100 }}>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {!loading && page >= total_pages && searchEnabled && (
              <Text style={{ color: '#888' }}>No more movies to load</Text>
            )}
            </View>
        )}
      />   
    </View>
  )
}