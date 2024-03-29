"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type InitialStateProps = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

interface ContextProps {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  isClicked: InitialStateProps;
  setIsClicked: Dispatch<SetStateAction<InitialStateProps>>;
  handleClick: (clicked: string) => void;
  screenSize: number | undefined;
  setScreenSize: Dispatch<SetStateAction<number | undefined>>;
  themeSettings: boolean;
  setThemeSettings: Dispatch<SetStateAction<boolean>>;
  currentColor: string;
  setCurrentColor: Dispatch<SetStateAction<string>>;
  setColor: (clicked: string) => void;
}

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const StateContext = createContext({} as ContextProps);

interface IStateProviderProps {
  children: React.ReactNode;
}

export const StateProvider: React.FC<IStateProviderProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: string) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        screenSize,
        setScreenSize,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        themeSettings,
        setThemeSettings,
        currentColor,
        setCurrentColor,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
