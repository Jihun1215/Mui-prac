import { DefaultTheme, css } from "styled-components";

const colors: DefaultTheme["colors"] = {
  white: "#fff",
  black: "#000000",
  black2: "#13161B",
  blue: "#337ab7",
  purple: "#A341FF",
  pink: "#FF5D98",
  yellow: "#F8c707",
  gray: "#9A9A9A",
  greey: "#A0C49D",
  lightdark: "#13161B",
  lightgreey: "#3FCF8E",
};

const WH100 = css`
  width: 100%;
  height: 100%;
`;

const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;

const BoxCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  colors,
  WH100,
  FlexCol,
  FlexRow,
  FlexCenter,
  BoxCenter,
};

export const Theme: DefaultTheme = {
  ...theme,
  bgColor: "#f1f3f5",
  bgColor2: "#dee2e6",
  color: "#191A23",
  color2: "#E2E2E2",
};

export const DarkTheme: DefaultTheme = {
  ...theme,
  bgColor: "#212529",
  bgColor2: "#333",
  color: "#E2E2E2",
  color2: "#191A23",
};
