import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[500]
  },
  status: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8
  },
  current: {
    fontSize: 20,
    fontFamily: fontFamily.medium,
    color: colors.black
  },
  target: {
    fontSize: 14,
    color: colors.gray[500]
  },
  percentage: {
    color: colors.blue[500],
    fontSize: 14,
    fontFamily: fontFamily.bold
  },
  progress: {
    height: 8,
    width: '100%',
    backgroundColor: colors.gray[300],
    overflow: 'hidden',
    borderRadius: 8
  },
  inProgress: {
    backgroundColor: colors.blue[500],
    height: '100%'
  }
})