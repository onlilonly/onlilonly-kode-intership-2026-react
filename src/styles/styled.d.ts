import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    secondaryText: string;
    bg?: string;
    department?: string;
    card?: string;
    accent?: string;
    skeletonBase?: string;
    skeletonHighlight?: string;
  }
}