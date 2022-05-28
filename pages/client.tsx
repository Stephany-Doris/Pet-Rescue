const clientPage = ({ data: pageProps }: any) => {
  console.log({ pageProps });

  return <div>hello</div>;
};

export default clientPage;

export async function getStaticProps() {
    const res = await fetch(`https://random-data-api.com/api/users/random_user`);
    const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
