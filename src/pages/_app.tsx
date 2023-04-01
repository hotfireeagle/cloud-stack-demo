import { type AppType } from "next/app";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import AuthGuard from "./auth";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <AuthGuard Component={Component} pageProps={pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
