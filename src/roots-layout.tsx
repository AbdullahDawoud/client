import React from "react";
import Layout from "./components/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import "normalize.css";

export const client = new QueryClient();

type Props = {
  children: Node;
};
const RootLayout = ({ children }: Props) => {
  return (
    <QueryClientProvider client={client}>
      <Layout>{children}</Layout>
    </QueryClientProvider>
  );
};

export default RootLayout;
