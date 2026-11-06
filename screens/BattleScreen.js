import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function BattleScreen({ route, navigation }) {
  const { category, difficulty } = route.params;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const questions = [
  {
    id: 1,
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Stack",
    explanation: "A Stack follows Last In, First Out (LIFO).",
  },
  {
    id: 2,
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Tree", "Queue", "Graph"],
    answer: "Queue",
    explanation: "A Queue follows First In, First Out (FIFO).",
  },
];
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

const question = questions[currentQuestionIndex];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚔️ Battle Arena</Text>

      <Text style={styles.info}>Category: {category}</Text>

      <Text style={styles.info}>Difficulty: {difficulty}</Text>

      <Text style={styles.subtitle}>
  Question {currentQuestionIndex + 1}
</Text>

<Text style={styles.question}>
  {question.question}
</Text>

{question.options.map((option) => (
  <TouchableOpacity
  key={option}
  disabled={isSubmitted}
  style={[
    styles.option,
    {
      borderColor: isSubmitted
        ? option === question.answer
          ? "#22C55E"
          : option === selectedAnswer
          ? "#EF4444"
          : "#303B4D"
        : selectedAnswer === option
        ? "#4285F4"
        : "#303B4D",

      backgroundColor: isSubmitted
        ? option === question.answer
          ? "#163A2A"
          : option === selectedAnswer
          ? "#451F25"
          : "#202632"
        : selectedAnswer === option
        ? "#1D3455"
        : "#202632",
    },
  ]}
  onPress={() => setSelectedAnswer(option)}
>
  <Text style={styles.optionText}>{option}</Text>
</TouchableOpacity>
))}
<TouchableOpacity
  style={[
    styles.button,
    {
      opacity:
        !isSubmitted ||
        currentQuestionIndex >= questions.length - 1
          ? 0.4
          : 1,
    },
  ]}
  disabled={
    !isSubmitted ||
    currentQuestionIndex >= questions.length - 1
  }
  onPress={() => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setIsSubmitted(false);
  }}
>
  <Text style={styles.buttonText}>Next Question</Text>
</TouchableOpacity>
<TouchableOpacity
  style={styles.button}
  disabled={selectedAnswer === null || isSubmitted}
  onPress={() => setIsSubmitted(true)}
>
  <Text style={styles.buttonText}>Submit Answer</Text>
</TouchableOpacity>

{isSubmitted && (
  <Text
    style={{
      color:
        selectedAnswer === question.answer
          ? "#22C55E"
          : "#EF4444",
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 15,
    }}
  >
    {selectedAnswer === question.answer
      ? "Correct Answer! 🎉"
      : "Incorrect Answer! ❌"}
  </Text>
)}
{isSubmitted && (
  <Text
    style={{
      color: "#A1A1AA",
      fontSize: 15,
      marginTop: 12,
      lineHeight: 22,
      textAlign: "center",
    }}
  >
    💡 {question.explanation}
  </Text>
)}

{selectedAnswer !== null && (
  <Text style={{ color: "#60A5FA", marginTop: 10 }}>
    Selected: {selectedAnswer}
  </Text>
)}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: "#111318",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },
  info: {
    color: "#4285F4",
    fontSize: 20,
    marginBottom: 12,
  },
  subtitle: {
    color: "#A1A1AA",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  question: {
  color: "#FFFFFF",
  fontSize: 20,
  fontWeight: "bold",
  marginVertical: 25,
  textAlign: "center",
},

option: {
  backgroundColor: "#202632",
  borderWidth: 1,
  borderColor: "#303B4D",
  padding: 16,
  borderRadius: 12,
  marginBottom: 12,
  width: "100%",
},

optionText: {
  color: "#FFFFFF",
  fontSize: 16,
  textAlign: "center",
},
};
