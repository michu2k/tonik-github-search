import React, {PropsWithChildren, useContext} from "react";

type ExampleContextProps = {
  foo: string;
};

type ExampleContextProviderProps = PropsWithChildren;

const ExampleContext = React.createContext({} as ExampleContextProps);

// This is a simple example of a context. It is not used anywhere in the project.
const ExampleContextProvider = ({children}: ExampleContextProviderProps) => {
  const value = {
    foo: "bar",
  };

  return <ExampleContext.Provider value={value}>{children}</ExampleContext.Provider>;
};

const useExampleContext = () => useContext(ExampleContext);

export type {ExampleContextProps};

export {ExampleContextProvider, useExampleContext};
