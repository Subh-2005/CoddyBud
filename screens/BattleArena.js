
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function BattleArena({ navigation }) {
  const categories = [
    {
      id: "dsa",
      name: "DSA",
      description: "Master coding patterns and problem solving.",
      emoji: "💻",
      questions: "20 Challenges",
    },
    {
      id: "aptitude",
      name: "Aptitude",
      description: "Sharpen your logical and quantitative skills.",
      emoji: "🧠",
      questions: "15 Challenges",
    },
    {
      id: "core-cs",
      name: "Core CS",
      description: "Test your DBMS, OS and networking knowledge.",
      emoji: "⚙️",
      questions: "25 Challenges",
    },
    {
      id: "technical",
      name: "Technical Interviews",
      description: "Prepare for real-world technical interviews.",
      emoji: "🎯",
      questions: "Practice Mode",
    },
    {
      id: "hr",
      name: "HR Interviews",
      description: "Build confidence and communication skills.",
      emoji: "🎤",
      questions: "Practice Mode",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Battle Arena ⚔️</Text>
          <Text style={styles.subtitle}>
            Choose your battlefield. Level up your skills.
          </Text>
        </View>

        {/* Category Cards */}
        <View style={styles.categoryContainer}>
          {categories.map((category) => (
            <TouchableOpacity
  key={category.id}
  style={styles.card}
  activeOpacity={0.8}
  onPress={() =>
    navigation.navigate("Difficulty", {
      category: category.name,
    })
  }
>
              <View style={styles.cardTop}>
                <Text style={styles.emoji}>{category.emoji}</Text>
                <Text style={styles.arrow}>›</Text>
              </View>

              <Text style={styles.categoryName}>
                {category.name}
              </Text>

              <Text style={styles.description}>
                {category.description}
              </Text>

              <Text style={styles.questions}>
                {category.questions}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Back to Home</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#111318",
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  header: {
    marginBottom: 30,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#A1A1AA",
    fontSize: 14,
    marginTop: 8,
  },

  categoryContainer: {
    gap: 16,
  },

  card: {
    backgroundColor: "#202632",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#303B4D",
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  emoji: {
    fontSize: 28,
  },

  arrow: {
    color: "#4285F4",
    fontSize: 28,
  },

  categoryName: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 7,
  },

  description: {
    color: "#A1A1AA",
    fontSize: 13,
    lineHeight: 20,
  },

  questions: {
    color: "#4285F4",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 14,
  },

  backButton: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    padding: 14,
  },

  backText: {
    color: "#4285F4",
    fontSize: 15,
    fontWeight: "bold",
  },
};
