import { Outlet } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/theme";

import { GlobalStyle } from "./styles/GlobalStyle";
// import { useRecoilState, useRecoilValue } from "recoil";

export const App = () => {
  const queryClient = new QueryClient(); // 생성
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Outlet />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
