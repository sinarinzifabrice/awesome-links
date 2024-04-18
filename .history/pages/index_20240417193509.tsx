import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { AwesomeLink } from '../components/AwesomeLink';


const AllLinkQuery = gql`
  query {
    links {
      id
      title
      url
      description 
      imageUrl
      category
    }
  }
`;

export default function Home() {
  const {data, error, loading} = useQuery(AllLinkQuery);

  if(loading) return <p>Loading ....</p>
  if(error) return <p>Ooops, something went wrong {error.message}</p>
  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.map((link) => (
            <AwesomeLink
              key = {link.id} 
              imageUrl = {link.imageUrl}
              category = {link.category}
              title = {link.title}
              description = {link.description}
              url = {link.url} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
