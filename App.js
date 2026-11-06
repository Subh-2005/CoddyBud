
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BattleScreen from "./screens/BattleScreen";
import HomeScreen from "./screens/HomeScreen";
import BattleArena from "./screens/BattleArena";
import DifficultyScreen from "./screens/DifficultyScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="BattleArena"
          component={BattleArena}
        />

        <Stack.Screen
          name="Difficulty"
          component={DifficultyScreen}
        />
        <Stack.Screen
  name="Battle"
  component={BattleScreen}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
