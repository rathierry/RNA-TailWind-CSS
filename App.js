import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Platform, Switch, Text, View } from "react-native";

const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 justify-center items-center bg-green-50 dark:bg-green-900">
      <Text className="text-2xl dark:text-white">
        TailWind CSS in React Native
      </Text>
      <View className="flex-row justify-center items-center">
        <Text className="font-semibold dark:text-gray-50">
          {`[${Platform.OS}]`} Dark theme{" "}
        </Text>
        <Switch
          value={colorScheme === "dark"}
          onChange={toggleColorScheme}
          // thumbColor="#D5D8DC"
          trackColor={{ true: "#ABEBC6" }}
        />
      </View>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
};

export default App;
