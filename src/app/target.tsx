import { View } from "react-native";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { HeaderPage } from "@/components/HeaderPages";
import { InputCurrent } from "@/components/InputCurrent";

export default function Target() {
  return (
      <View style={{ flex: 1, padding: 24 }}>
        <HeaderPage 
          tritle="Meta"
          subTitle="Economize para alcançar sua meta financeira."
        />

        <Input 
          target="Nome da meta"
        />

        <InputCurrent 
          label="Valor alvo (R$)"
          value={0}
        />

        <Button 
          title="Salvar"
        />
      </View>
  )
}