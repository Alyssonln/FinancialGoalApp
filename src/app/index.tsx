import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target } from "@/components/TargetArea";
import { View } from "react-native";

const summary = {
  total: 'R$ 2.680,00',
  input: { label: 'Entradas', value: 'R$ 6.184,90' },
  output: { label: 'Entradas', value: 'R$ 6.184,90' }
}

const targets = [
  {
    id: '1',
    name: 'Apple Watch',
    current: 'R$ 580,00',
    percentage: '50%',
    target: 'R$ 1.790,00'
  },
  {
    id: '2',
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '75%',
    target: 'R$ 1.200,00'
  },
  {
    id: '3',
    name: 'Fazer uma viagem para Natal-RN',
    current: 'R$ 1.200,00',
    percentage: '75%',
    target: 'R$ 3.000,00'
  },
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary}/>

      <List 
        title="Metas" 
        data={targets} 
        renderItem={({ item }) => <Target date={item} />} 
        keyExtractor={(item) => item.id}
        emptyMessage="Nenhuma meta. Clique em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  )
}