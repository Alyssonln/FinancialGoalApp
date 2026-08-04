import { Text, View, Button } from "react-native";
import { router } from "expo-router";

export default function Target() {
  return (
    <View
      style={{
        flex: 1,
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>
        Page Meta
      </Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}