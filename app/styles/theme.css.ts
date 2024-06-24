import { createTheme } from "@vanilla-extract/css";
import { colors } from "./colors.css";

export const [themeClass, vars] = createTheme({
  color: {
    text: colors.text,
    textLight: colors.textLight,
    textDark: colors.textDark,
    background: colors.background,
    backgroundLight: colors.backgroundLight,
    backgroundDark: colors.backgroundDark,
    primary: colors.primary,
    primaryLight: colors.primaryLight,
    primaryDark: colors.primaryDark,
    secondary: colors.secondary,
    secondaryLight: colors.secondaryLight,
    secondaryDark: colors.secondaryDark,
    success: colors.success,
    successLight: colors.successLight,
    successDark: colors.successDark,
    danger: colors.danger,
    dangerLight: colors.dangerLight,
    dangerDark: colors.dangerDark,
    warning: colors.warning,
    warningLight: colors.warningLight,
    warningDark: colors.warningDark,
    info: colors.info,
    infoLight: colors.infoLight,
    infoDark: colors.infoDark,
    border: colors.border,
    borderLight: colors.borderLight,
    borderDark: colors.borderDark,
  },
});
