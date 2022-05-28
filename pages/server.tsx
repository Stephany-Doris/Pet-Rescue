import Layout from "../components/layout";

export default function ServerSidePage({ data }: any) {
  const { first_name, last_name } = data || {};

  return (
    <Layout>
      <h1>Server Side Rendering</h1>
      <p>This page uses server side rendering to get user data</p>
      <p>First Name: {first_name}</p>
      <p>Last Name: {last_name}</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://random-data-api.com/api/users/random_user`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
