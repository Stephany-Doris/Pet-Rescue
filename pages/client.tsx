const clientPage = ({ data: pageProps }: any) => {
  console.log({ pageProps });

  return <div>hello</div>;
};

export default clientPage;

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch("/api/hello");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
