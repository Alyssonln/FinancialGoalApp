import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 324,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    gap: 24
  },
  label: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fontFamily.regulare
  },
  total: {
    color: colors.white,
    fontSize: 32,
    fontFamily: fontFamily.medium
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12
  }
})