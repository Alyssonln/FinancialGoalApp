import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/theme";

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
        <TouchableOpacity {...rest} activeOpacity={0.6} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32}/>
        </TouchableOpacity>
        
        {
          rigthButton && (
            <TouchableOpacity {...rest} activeOpacity={0.6} onPress={rigthButton.onPress}>
              <MaterialIcons name={rigthButton.icon} size={24} color={colors.gray[500]}/>
            </TouchableOpacity>
          )
        }
      </View>


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
  )
}