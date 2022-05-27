import { useSession, signIn, signOut } from "next-auth/react";
import PageLayout from "../components/layout";

const LoginForm = () => {
  const { data: session } = useSession();
  console.log({ session });

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <PageLayout session={session}>
      <form>
        <h1>Form title</h1>
        <p>You need to login to access this resource</p>
        <button onClick={() => signIn()}>Sign in</button>
      </form>
    </PageLayout>
  );
};

export default LoginForm;
