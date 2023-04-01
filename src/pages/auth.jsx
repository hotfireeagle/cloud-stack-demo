import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser
} from "@clerk/nextjs";

const AuthGuard = ({ Component, pageProps }) => {
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