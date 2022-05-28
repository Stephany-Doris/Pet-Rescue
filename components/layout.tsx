import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const PageLayout = ({ children }: any) => {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <Fragment>
      <nav className={styles.nav}>
        <div
          className={styles.signedInStatus}
          style={{ display: "inline-flex" }}
        >
          {session?.user ? (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small style={{ marginRight: "12px"}}>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <Link
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <button className={styles.signupBtn}>Sign out</button>
              </Link>
            </>
          ) : (
            <>
              <p>Not signed in </p>
              <button
                style={{
                  marginTop: "8px",
                  marginLeft: "20px",
                }}
                onClick={() => signIn()}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </Fragment>
  );
};

export default PageLayout;
