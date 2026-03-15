import { MultiStyleConfig } from "@chakra-ui/react";

export const MenuStyles: MultiStyleConfig = {
  parts: ["button", "list", "item"],
  baseStyle: {
    button: {
      color: "text.main",
      textStyle: "plRegular",
    },
    list: {
      bg: "transparent",
      py: 0,
      border: "none",
    },
    item: {
      py: { sPc: 1.5, base: 0.5 },
      bg: "transparent",
      textStyle: "plRegular",
      color: "text.main",
      justifyContent: "end",
      px: 0,
    },
  },
};
