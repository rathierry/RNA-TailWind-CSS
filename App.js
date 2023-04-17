import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>TailWind CSS in React Native</Text>
      <Text>{`[ ${Platform.OS} ]`}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F6F3",
    alignItems: "center",
    justifyContent: "center"
  }
});
