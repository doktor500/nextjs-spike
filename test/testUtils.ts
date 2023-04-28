type ComponentType = any;

export const loadComponent = async (Component: ComponentType, props = {}) => {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
};
