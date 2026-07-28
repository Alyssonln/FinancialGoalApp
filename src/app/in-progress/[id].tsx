import { Text, View, Button } from "react-native";
import { router, useGlobalSearchParams } from "expo-router";

export default function InProgress() {
  const params = useGlobalSearchParams<{id: string}>()

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
        Id de progresso: {params.id}
      </Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}