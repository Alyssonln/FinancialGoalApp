import { Text, View, Button } from "react-native";
import { router, useGlobalSearchParams } from "expo-router";

export default function Transaction() {
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
        Id da transação: {params.id}
      </Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}