export interface ISnippet {
  markup: string;
  css: string;
  javascript: string;
}

export type IEditorTabs = "markup" | "css" | "javascript";
export type IResultTabs = "result" | "console";

export interface ITabConfig<T> {
  code?: string;
  name: string;
  value: T;
}

declare module "goober" {
  export interface DefaultTheme {
    container: {
      borderColor: string;
      minHeight: string;
      minWidth: string;
    };
    error: {
      background: string;
      color: string;
    };
    console: {
      background: string;
    };
    divider: {
      width: number;
      background: string;
      dividerBackground: string;
      containerWidth: number;
    };
    editor: {
      fontFamily: string;
      backgroundColor: string;
      color: string;
    };
    tabs: {
      tabHeader: {
        borderBottom: string;
        panelBackground: string;
        background: string;
        color: string;
      };
      tabPanel: {
        phoneHeight: string;
      };
      selectedTab: {
        background: string;
        borderBottom: string;
      };
    };
  }
}
