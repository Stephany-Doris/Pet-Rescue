import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import PetData from "./pets.json";
import PageLayout from "../components/layout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steph&apos;s Pet Rescue</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pet-icon2.svg" />
      </Head>
      <PageLayout>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Pet Rescue!</a>
        </h1>

        <div className={styles.grid}>
          {PetData.pets?.map(({ url, id }: Record<string, any>, index: any) => (
            <Fragment key={id}>
              <Link
                key={id}
                href={`/${encodeURIComponent(id)}`}
                passHref
              >
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <Image
                    src={url}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                  <p>About Next.js.</p>
                </a>
              </Link>
            </Fragment>
          ))}
        </div>
        </PageLayout>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
