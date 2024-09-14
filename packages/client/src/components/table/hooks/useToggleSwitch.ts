import { useState } from "react";
import { ToggleSwitch } from "../types";

export const useToggleSwitch = (initial: boolean): ToggleSwitch => {
  const [state, setState] = useState(initial);
  const toggle = () => setState((o) => !o);

  return [state, toggle];
};
