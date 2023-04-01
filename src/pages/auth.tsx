import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser
} from "@clerk/nextjs";
import { type AppType } from "next/app";

const AuthGuard: AppType = ({ Component, pageProps }) => {
  const user = useUser();

  if (user.isSignedIn) {
    return <Component {...pageProps} />
  }

  return (
    <>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

export default AuthGuard