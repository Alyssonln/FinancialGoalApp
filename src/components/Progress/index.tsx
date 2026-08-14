import { View, Text } from "react-native";
import { styles } from "./styles";

type ProgressProps = {
  title: string
  current: string
  target: string
  percentage: number
}

type Props = {
  data: ProgressProps
}

export function Progress({ data }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}> {data.title} </Text>

      <View style={styles.status}>
        <Text style={styles.current}>
          {data.current} 
          <Text style={styles.target}> de {data.target} </Text>
        </Text>

        <Text style={styles.percentage}> {data.percentage}% </Text>
      </View>

      <View style={styles.progress}>
        <View style={[ styles.inProgress, { width: `${data.percentage}%` } ]}></View>
      </View>

    </View>
  )
}