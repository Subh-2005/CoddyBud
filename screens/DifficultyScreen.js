
import { View, Text, TouchableOpacity } from "react-native";

export default function DifficultyScreen({ route, navigation }) {
  const { category } = route.params;

  const difficulties = [
    {
      id: "easy",
      name: "Easy",
      description: "Build your fundamentals",
      emoji: "🌱",
    },
    {
      id: "medium",
      name: "Medium",
      description: "Challenge your problem-solving",
      emoji: "⚡",
    },
    {
      id: "hard",
      name: "Hard",
      description: "Push your limits",
      emoji: "🔥",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Arena ⚔️</Text>

      <Text style={styles.subtitle}>
        Select your difficulty
      </Text>

      {difficulties.map((difficulty) => (
        <TouchableOpacity
          key={difficulty.id}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("Battle", {
              category: category,
              difficulty: difficulty.name,
            })
          }
        >
          <Text style={styles.emoji}>{difficulty.emoji}</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              {difficulty.name}
            </Text>

            <Text style={styles.description}>
              {difficulty.description}
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Back to Categories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#111318",
    paddingHorizontal: 20,
    paddingTop: 75,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#A1A1AA",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#202632",
    borderWidth: 1,
    borderColor: "#303B4D",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  emoji: {
    fontSize: 30,
    marginRight: 16,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },

  description: {
    color: "#A1A1AA",
    fontSize: 13,
    marginTop: 5,
  },

  arrow: {
    color: "#4285F4",
    fontSize: 28,
  },

  backButton: {
    alignItems: "center",
    padding: 15,
    marginTop: 15,
  },

  backText: {
    color: "#4285F4",
    fontSize: 15,
    fontWeight: "bold",
  },
};
