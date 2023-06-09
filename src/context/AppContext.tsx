import { ReactNode, createContext, useEffect, useState } from "react";

interface AppContextProps {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({
  isMobile: false,
  setIsMobile: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileMediaQuery = window.matchMedia("(max-width: 1023px)");
      setIsMobile(mobileMediaQuery.matches);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
