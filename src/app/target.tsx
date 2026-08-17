import { useState } from "react";
import { View, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { HeaderPage } from "@/components/HeaderPages";
import { InputCurrent } from "@/components/InputCurrent";

import { useTargetDatabase } from "@/database/useTargetDatabase";

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [name, setName] = useState("")
  const [amount, setAmount] = useState<number | null>(0)

  const params = useLocalSearchParams<{id?: string}>()
  const targetDatabase = useTargetDatabase()

  function handleSave() {
    if(!name.trim() || !amount || amount <= 0) {
      return Alert.alert("Atenção", "Preencha nome e valor precisa ser maior que zero.")
    }

    setIsProcessing(true)

    if(params.id){
      //update
    } else {
      create(amount)
    }
  }

  async function create(amount: number) {
    try {
      await targetDatabase.create({ name, amount})
      Alert.alert("Nova meta", "Meta criada com sucesso!", [
        {
          text: "Ok",
          onPress: () => router.back()
        }
      ])
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel criar a meta.")
      console.log(error)
      setIsProcessing(false)
    }
  }

  return (
      <View style={{ flex: 1, padding: 24 }}>
        <HeaderPage 
          tritle="Meta"
          subTitle="Economize para alcançar sua meta financeira."
        />

        <Input 
          target="Nome da meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
          onChangeText={setName}
          value={name}
        />

        <InputCurrent 
          label="Valor alvo (R$)"
          value={amount}
          onChangeValue={setAmount}
        />

        <Button 
          title="Salvar"
          onPress={handleSave}
          isProcessing={isProcessing}
        />
      </View>
  )
}