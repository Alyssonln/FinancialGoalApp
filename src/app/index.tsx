import { Button, Text, View } from "react-native";
import { router } from "expo-router";
import { fontFamily } from "@/theme/fontFamily";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontFamily: fontFamily.bold }}>
        Olá, expo router
      </Text>

      <Button title="Nova Meta" onPress={() => router.navigate("/goal")}/>
      
      <Button title="Transação" onPress={() => router.navigate("/transaction/125")}/>

      <Button title="Progresso" onPress={() => router.navigate("/in-progress/810")}/>
    </View>
  )
}