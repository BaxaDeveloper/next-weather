import type { AppProps } from "next/app";
import { Layout } from "antd";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import "antd/dist/antd.css";
import "../styles/globals.scss";
import { Sidebar } from "components";

const { Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Sidebar />
          <Layout>
            <Content>
              <Component {...pageProps} />
            </Content>
          </Layout>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
