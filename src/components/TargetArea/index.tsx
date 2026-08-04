import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export type TargetProps = {
  id?: string
  name: string
  percentage: string
  current: string
  target: string
}

type Props = TouchableOpacityProps & {
  date: TargetProps
}

export function Target({ date, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.name}>
          {date.name}
        </Text>

        <Text style={styles.status}>
          {date.percentage} • {date.current} de {date.target}
        </Text>
      </View>

      <MaterialIcons name="chevron-right" size={20} />

    </TouchableOpacity>
  )
}