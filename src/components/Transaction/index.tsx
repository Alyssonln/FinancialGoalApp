import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { InputStatus } from "@/utils/InputStatus";
import { styles } from "./styles";
import { colors } from "@/theme";

type TransactionProps = {
  id: string
  value: string
  date: string
  description?: string
  type: InputStatus
}

type Props = {
  data: TransactionProps
  onRemove: () => void
}

export function Transaction({ data, onRemove }: Props) {
  return (
    <View style={styles.container}>

      <MaterialIcons 
        name={
          data.type === InputStatus.Output ? "arrow-downward" : "arrow-upward"
        }
        size={24}
        color={
          data.type === InputStatus.Output ? colors.red[400] : colors.green[500]
        }
      />

      <View style={styles.info}>
        <Text style={styles.value}> {data.value} </Text>
        <Text style={styles.description} numberOfLines={1}>
          {data.date} {data.description && `• ${data.description}`}
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.6}>
        <MaterialIcons 
          name="close" 
          size={18} 
          color={colors.gray[500]}
        />
      </TouchableOpacity>

    </View>
  )
}