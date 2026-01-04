import React, { createContext, useContext, useState } from "react";

const DemoContext = createContext();

export function DemoProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <DemoContext.Provider value={{ isFormOpen, setIsFormOpen, isVideoOpen, setIsVideoOpen }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo must be used within DemoProvider");
  }
  return context;
}
