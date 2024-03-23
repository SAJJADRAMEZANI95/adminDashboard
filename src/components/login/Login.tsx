import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <p>wellcome {session?.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <h2>please log in</h2> <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
