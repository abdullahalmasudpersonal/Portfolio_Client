
export interface RouteType {
  path?: string;
  index?: true;
  element: React.ReactNode;
  children?: RouteType[];
}
