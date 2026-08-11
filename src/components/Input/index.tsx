import { View, Text, TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";
import { colors } from "@/theme";

type Props = TextInputProps & {
  target: string
}

export function Input({ target, ...rest }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.label}> {target} </Text>
      <TextInput 
        style={styles.input}
        placeholder="Ex: Viagem para praia, Apple Watch"
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />

    </View>
  )
}