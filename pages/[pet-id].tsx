import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import PageLayout from "../components/layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import PetData from "./pets.json";

const Pet = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const data: Record<string, any> = router.query;
  const { url: imgUrl } =
    PetData?.pets?.find(({ id }) => id === data?.pet - id) || {};
  console.log({ session, router, imgUrl });

  return (
    <PageLayout>
      {session?.user ? (
        <>
          <Image
            src={"https://res.cloudinary.com/dng6fpscx/image/upload/v1653549134/pet-rescue/H_Hedgehog-Velda_p1n9wr.jpg"}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <h1>Pet Name</h1>
          <p>pet description</p>
        </>
      ) : (
        <>
          <h1>Access Denied</h1>
          <p>
            <a href="/api/auth/signin">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                You must be signed in to view this page
              </button>
            </a>
          </p>
        </>
      )}
    </PageLayout>
  );
};

export default Pet;
   