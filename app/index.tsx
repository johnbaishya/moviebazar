import { Container } from 'components/Container';
import MovieItem from 'components/MovieItem';
import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: 'Movies Bazar' }} />
      <View className="flex-1 items-center justify-center ">
        <Container>

      <SearchBox/>
       <MovieList/>
        </Container>
        
      </View>
    </>
  );
}
