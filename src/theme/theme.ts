"use client";

import { extendTheme, ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react";

const semanticColors = {
  primaryText: "#000",
  buttonText: '#fff',
  bgButton: '#000',
  secondaryText: "rgba(255, 255, 255, 0.6)",
  background: "white",
  secondaryBackground: "#D8D8D8"
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: config.initialColorMode }),
  {
    styles: {
      global: {
        body: {
          backgroundColor: "background",
          height: "100vh",
        },
      },
    },
    colors: {
      ...semanticColors,
    },
    components: {
      Button: {
        baseStyle: {
          color: semanticColors.buttonText,
          bgColor: semanticColors.bgButton,
          padding: "5px 40px",
          borderRadius: "10px",
          fontWeight: 600,
          fontSize: "16px",
          boxShadow: "1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
        },
      },
    },
  }
);
