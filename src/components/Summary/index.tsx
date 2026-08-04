import { View, Text, ColorValue } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export type SummaryProps = {
  label: string
  value: string
}

type Props = {
  date: SummaryProps
  icon: {
    name: keyof typeof MaterialIcons.glyphMap
    color: ColorValue
  }
  isLeft?: boolean
}

export function Summary({date, icon, isLeft = false}: Props) {
  return (
    <View style={styles.container}>

      <View style={[styles.header, isLeft && {justifyContent: 'flex-end'}]}>
        <MaterialIcons name={icon.name} size={16} color={icon.color} />
        <Text style={styles.label}>{date.label}</Text>
      </View>

      <Text style={styles.value}>{date.value}</Text>

    </View>
  )
}