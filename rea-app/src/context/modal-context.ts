import { createContext, useContext } from "react";
export type GlobalContent = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export const ModalContext = createContext<GlobalContent>({
  isVisible: false,
  setIsVisible: () => {},
});

export const useModalContext = () => useContext(ModalContext);
