import { View } from "react-native";

import { styles } from "./styles";
import { colors } from "@/theme";

import { Option } from "./option";

import { InputStatus } from "@/utils/InputStatus";

type Props = {
  selected: InputStatus
  onChange: (type: InputStatus) => void
}

export function TransactionType({ selected, onChange }: Props) {
  return (
    <View style={styles.container}>
      
      <Option 
        icon="arrow-upward"
        title="Guardar"
        isSelected={selected === InputStatus.Input}
        selectedColor={colors.blue[500]}
        onPress={() => onChange(InputStatus.Input)}
      />
      
      <Option 
        icon="arrow-downward"
        title="Resgatar"
        isSelected={selected === InputStatus.Output}
        selectedColor={colors.red[400]}
        onPress={() => onChange(InputStatus.Output)}
      />

    </View>
  )
}