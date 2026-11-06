import { View, Text } from "react-native";

export default function CompanionCard() {
  return (
    <View
      style={{
        backgroundColor:"#1e1e1e",
        padding:20,
        borderRadius:20,
        marginTop:30
      }}
    >
      <Text
        style={{
          color:"white",
          fontSize:20,
          fontWeight:"bold"
        }}
      >
        🤖 Coddy Companion
      </Text>

      <Text
        style={{
          color:"lightgray",
          marginTop:10
        }}
      >
        "Hey Subhankar, I already completed 2 questions today 👀"
      </Text>

      <Text
        style={{
          color:"#00ff88",
          marginTop:10
        }}
      >
        Status: Online 🟢
      </Text>
    </View>
  );
}