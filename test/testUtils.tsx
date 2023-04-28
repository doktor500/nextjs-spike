import { render } from "@testing-library/react";
import React from "react";

export type Component<PROPS> = (props: PROPS) => Promise<JSX.Element | undefined>;

export const renderAsync = async <PROPS extends object>(component: Component<PROPS>, props?: PROPS) => {
  const LoadedComponent = await loadComponent(component, props);
  render(<LoadedComponent />);
};

const loadComponent = async <PROPS extends object>(Component: Component<PROPS>, props = {}) => {
  const LoadedComponent = await Component(props as PROPS);
  return (): JSX.Element => LoadedComponent as JSX.Element;
};
