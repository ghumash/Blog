import React from "react";

const Context = React.createContext(null);

export function ContextProvider({ children }) {
  const [mode, setMode] = React.useState("light");

  const value = { mode, setMode };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
