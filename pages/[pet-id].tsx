import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import PageLayout from "../components/layout";
import Image from "next/image";

const Pet = () => {
  const { data: session } = useSession();

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
            <Link href="/api/auth/signin">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                You must be signed in to view this page
              </button>
            </Link>
          </p>
        </>
      )}
    </PageLayout>
  );
};

export default Pet;
   