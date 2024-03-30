import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";
import { styled } from "@mui/material";

const LoginButton = styled(Button)({
  textTransform:'none'
})

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <LoginButton variant="contained" color="error" onClick={() => signOut()}>
        sign out
      </LoginButton>
      </>
    );
  }
  return (
    <>
      <h2>please log in</h2> <br />
      <LoginButton variant="contained" color="success" onClick={() => signIn()}>
        sign In
      </LoginButton>
    </>
  );
}
