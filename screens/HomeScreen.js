import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex:1,
        backgroundColor:"#111",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Text
        style={{
          color:"white",
          fontSize:30,
          marginBottom:30
        }}
      >
        Welcome Subhankar ⚔️
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("BattleArena")}
        style={{
          backgroundColor:"#00cc66",
          padding:15,
          borderRadius:10
        }}
      >
        <Text
          style={{
            color:"white",
            fontWeight:"bold"
          }}
        >
          Start Battle
        </Text>
      </TouchableOpacity>
    </View>
  );
}