import { createContext } from "react";

export const ColorContext = createContext({
  color: "yellow",
  toggleColor: () => {},
});
