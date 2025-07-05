import { SafeAreaView, StyleSheet } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { SearchBar } from 'react-native-screens';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
  );
};

const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
    }

)
;
