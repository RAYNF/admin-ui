import { createContext, useState } from "react";

export const NotifContext = createContext();

export const NotifContextProvider = ({ children }) => {
  const [msg, setMsg] = useState();
  const [open, setOpen] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <NotifContext.Provider
      value={{ msg, setMsg, open, setOpen, isLoading, setIsLoading }}
    >
      {children}
    </NotifContext.Provider>
  );
};
