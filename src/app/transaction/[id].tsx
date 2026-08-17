import { useState } from "react";
import { View} from "react-native";
import { useGlobalSearchParams } from "expo-router";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { HeaderPage } from "@/components/HeaderPages";
import { InputCurrent } from "@/components/InputCurrent";
import { TransactionType } from "@/components/TransactionTypes";
import { InputStatus } from "@/utils/InputStatus";

export default function Transaction() {
  const [type, setType] = useState(InputStatus.Input)

  const params = useGlobalSearchParams<{id: string}>()

  return (
    <View style={{ flex: 1, padding: 24 }}>
      
      <HeaderPage 
        tritle="Nova transação"
        subTitle="A cada valor guardado voce fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={type} onChange={setType} />

        <InputCurrent label="Valor (R$)" value={0} />

        <Input target="Motivo (opcional)" placeholder="Ex: Investir em CDB de 110% no banco XPTO" />

        <Button title="Salvar" />
      </View>

    </View>
  )
}