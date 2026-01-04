import React, { createContext, useContext } from "react";

const DemoFormContext = createContext(null);

export function DemoFormProvider({ children, isOpen, onOpen }) {
  return (
    <DemoFormContext.Provider value={{ isOpen, onOpen }}>
      {children}
    </DemoFormContext.Provider>
  );
}

export function useDemoForm() {
  const context = useContext(DemoFormContext);
  if (!context) {
    return { isOpen: false, onOpen: () => {} };
  }
  return context;
}
