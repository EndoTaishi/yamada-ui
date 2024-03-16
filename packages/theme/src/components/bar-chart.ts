import type { ComponentMultiStyle } from "@yamada-ui/core"
import { getMemoizedObject as get } from "@yamada-ui/utils"

export const BarChart: ComponentMultiStyle = {
  baseStyle: {
    legend: {
      display: "flex",
      justifyContent: "flex-end",
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      rounded: "md",
      gap: "sm",
      transitionProperty: "common",
      transitionDuration: "slower",
      color: ["blackAlpha.800", "whiteAlpha.700"],
      _hover: {
        bg: ["blackAlpha.50", "whiteAlpha.100"],
      },
    },
    legendSwatch: {
      boxSize: "3",
      rounded: "full",
    },
    tooltip: {
      display: "flex",
      flexDirection: "column",
      minW: "48",
      gap: "sm",
      rounded: "md",
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      p: "3",
      fontWeight: "medium",
      fontSize: "sm",
      color: "inherit",
      boxShadow: ["md", "dark-md"],
      maxW: "xs",
      zIndex: "dodoria",
    },
    tooltipTitle: {
      fontSize: "md",
    },
    tooltipList: {
      display: "flex",
      flexDirection: "column",
      gap: "xs",
    },
    tooltipItem: {
      display: "flex",
      alignItems: "center",
      gap: "sm",
      fontSize: "sm",
    },
    tooltipSwatch: {
      boxSize: "3",
      rounded: "full",
    },
    tooltipLabel: {
      color: ["blackAlpha.800", "whiteAlpha.700"],
    },
    tooltipValue: {
      flex: 1,
      textAlign: "end",
    },
  },

  variants: {},

  sizes: {
    sm: ({ theme: t }) => ({
      container: {
        w: "xl",
        h: "xs",
      },
      legend: {
        gap: "xs",
        mb: "md",
      },
      legendItem: {
        minH: "6",
        minW: "6",
        fontSize: "xs",
        px: "2",
        lineHeight: get(t, "sizes.6"),
      },
    }),
    md: ({ theme: t }) => ({
      container: {
        w: "3xl",
        h: "sm",
      },
      legend: {
        gap: "xs",
        mb: "md",
      },
      legendItem: {
        minH: "7",
        minW: "7",
        fontSize: "sm",
        px: "3",
        lineHeight: get(t, "sizes.7"),
      },
    }),
    lg: ({ theme: t }) => ({
      container: {
        w: "5xl",
        h: "md",
      },
      legend: {
        gap: "sm",
        mb: "md",
      },
      legendItem: {
        minH: "8",
        minW: "8",
        fontSize: "md",
        px: "3",
        lineHeight: get(t, "sizes.8"),
      },
    }),
    full: ({ theme: t }) => ({
      container: {
        w: "full",
        h: "md",
      },
      legend: {
        gap: "sm",
        mb: "md",
      },
      legendItem: {
        minH: "8",
        minW: "8",
        fontSize: "md",
        px: "3",
        lineHeight: get(t, "sizes.8"),
      },
    }),
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}