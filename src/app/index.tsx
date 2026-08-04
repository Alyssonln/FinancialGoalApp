import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/TargetArea";
import { View } from "react-native";

const summary = {
  total: 'R$ 2.680,00',
  input: { label: 'Entradas', value: 'R$ 6.184,90' },
  output: { label: 'Entradas', value: 'R$ 6.184,90' }
}

const targets = [
  {
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '75%',
    target: '1.200,00'
  },
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary}/>

      <Target 
        date={targets[0]}
      />
    </View>
  )
}