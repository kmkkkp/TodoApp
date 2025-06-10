import { useState } from "react";
import { ColorContext } from "./ColorContext";

export default function ColorProvider({ children }) {
  const [color, setColor] = useState("yellow");
}
