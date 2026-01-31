import React, { createContext, useState, type Dispatch, type SetStateAction } from "react";

export type CursorContextType = {
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
};

export const CursorContext = createContext<CursorContextType>({
  size: "small",
  setSize: () => { },
});
export default function CursorManager(props: { children: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) {
  const [size, setSize] = useState("small");
  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {props.children}
    </CursorContext.Provider>
  );
}
