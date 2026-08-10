import { Text, View, Button } from "react-native";
import { router } from "expo-router";

import { HeaderPage } from "@/components/HeaderPages";

export default function Target() {
  return (
      <View style={{ flex: 1, padding: 24 }}>
        <HeaderPage 
          tritle="Meta"
          subTitle="Economize para alcançar sua meta financeira."
        />

        <Button title="Voltar" onPress={() => router.back()} />
      </View>
  )
}