import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  tritle: string
  subTitle?: string
  rigthButton?: {
    icon: keyof typeof MaterialIcons.glyphMap
    onPress: () => void
  }
}

export function HeaderPage({ tritle, subTitle, rigthButton, ...rest }: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity {...rest} onPress={() => router.back()}>
          <MaterialIcons name="arrow-left" size={24}/>
        </TouchableOpacity>

        <Text style={styles.title}>
          {tritle}
        </Text>

        {
          subTitle && (
            <Text style={styles.subTitle}>
              {subTitle}
            </Text>
          )
        }
      </View>

      {
        rigthButton && (
          <TouchableOpacity {...rest} onPress={rigthButton.onPress}>
            <MaterialIcons name="edit" size={24}/>
          </TouchableOpacity>
        )
      }

    </View>
  )
}