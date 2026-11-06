import { View, Text } from "react-native";

export default function ScoreCard({title,value}) {
  return (
    <View
      style={{
        backgroundColor:"#222",
        padding:15,
        borderRadius:15,
        margin:10,
        width:150
      }}
    >
      <Text style={{color:"gray"}}>
        {title}
      </Text>

      <Text
        style={{
          color:"white",
          fontSize:22,
          fontWeight:"bold",
          marginTop:5
        }}
      >
        {value}
      </Text>
    </View>
  )
}