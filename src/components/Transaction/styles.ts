import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  info: {
    flex: 1,
    gap: 6
  },
  value: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.black
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regulare,
    color: colors.gray[500]
  },
})