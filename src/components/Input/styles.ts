import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 24
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    paddingBottom: 4
  },
  input: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[400]
  },
})