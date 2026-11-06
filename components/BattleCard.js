import { View, Text, TouchableOpacity } from "react-native";

export default function BattleCard({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#1e1e1e",
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        🎯 Today's Battle
      </Text>

      <Text
        style={{
          color: "lightgray",
          marginTop: 10,
        }}
      >
        📚 DSA : 3 Questions
      </Text>

      <Text
        style={{
          color: "lightgray",
          marginTop: 5,
        }}
      >
        🧠 Aptitude : 2 Questions
      </Text>

      <Text
        style={{
          color: "lightgray",
          marginTop: 5,
        }}
      >
        🎤 Interview : 1 Challenge
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("BattleArena")}
        style={{
          backgroundColor: "#00cc66",
          padding: 15,
          borderRadius: 15,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          ▶ Start Battle
        </Text>
      </TouchableOpacity>
    </View>
  );
}