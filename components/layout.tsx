import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

const PageLayout = ({ children, session }: any) => {
  return (
    <Fragment>
      <nav className={styles.nav}>
        <Image alt="icon" src="/pet-icon2.svg" width={65} height={50} />
        {session ? (
          <div className={styles.btnWrapper}>
            <button className={styles.loginBtn}>Log in</button>
            <a href="/api/auth/signin">
              <button className={styles.signupBtn}>Sign up</button>
            </a>
          </div>
        ) : null}
      </nav>
      <main className={styles.main}>{children}</main>
    </Fragment>
  );
};

export default PageLayout;
