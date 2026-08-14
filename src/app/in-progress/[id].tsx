import { View } from "react-native";
import { router, useGlobalSearchParams } from "expo-router";

import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { HeaderPage } from "@/components/HeaderPages";
import { Transaction } from "@/components/Transaction";

import { InputStatus } from "@/utils/InputStatus";

const details = {
  title: 'Valor Guardado',
  current: 'R$ 580,00',
  target: 'R$ 1.790,00',
  percentage: 25
}

const transactions = [
  {
    id: '1',
    value: 'R$ 300,00',
    date: '14/02/2026',
    description: 'CDB de 110% no banco XPTO',
    type: InputStatus.Input
  },
  {
    id: '2',
    value: 'R$ 20,00',
    date: '28/02/2026',
    type: InputStatus.Output
  },
]

export default function InProgress() {
  const params = useGlobalSearchParams<{id: string}>()

  return (
    <View style={{ flex: 1, padding: 24 }}>
      
      <HeaderPage 
        tritle="Apple Watch"
        rigthButton={{
          icon: 'edit',
          onPress: () => {}
        }}
      />

      <Progress data={details}/>

      <List 
        title="Transações"
        data={transactions}
        renderItem={({ item }) => <Transaction 
          data={item}
          onRemove={() => {}}
        />}
        emptyMessage="Nenhuma transação."
      />

      <Button 
        title="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />

    </View>
  )
}