import { createContext, useState } from "react";

const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  return (
    <CalcContext.Provider value={{ calc, setCalc }}>
      {children}
    </CalcContext.Provider>
  );
};

export { CalcProvider, CalcContext };
