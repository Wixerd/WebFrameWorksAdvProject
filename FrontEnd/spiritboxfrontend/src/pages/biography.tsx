import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from "next";
import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
//import { Album as Albumprops} from '@/gql/graphql';
import { BandMember as Bandmemberprops } from '@/types';
import Navbar from '@/components/navbar'
import Logo from '@/components/logo'
import { log } from 'console';



const GetAllPostsWithAuthors = graphql(`
query Bandmembers {
    bandmembers {
        data {
            attributes {
                Name
                Bio
                picture {
                    data {
                        attributes {
                            url
                        }
                    }
                }
            }
        }
    }
}
`);


export const getStaticProps: GetStaticProps = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllPostsWithAuthors, variables: {} })
    
  
  
  return {
    props: {
        bandmembers: data.bandmembers?.data
    },
  };
};


export default function BiographyPage({ bandmembers }: { bandmembers: Bandmemberprops[] }) {

    
  return (
    <>
      <Head>
        <title>Bombaclat</title>
        <meta />
      </Head>
      <Logo/>
      <Navbar />
        
    {bandmembers.map((bandmember: Bandmemberprops) =>{
        {console.log(bandmember);
        }
        <div className='content'>
        <h1 className='title'>{bandmember.attributes.Name}</h1>
        <p>{bandmember.attributes.Bio}</p>
        <Image src={bandmember.attributes.picture.data.attributes.url} alt="Placeholder image" width={600} height={600} />
        </div>
    })}
      
    </>
  )
}
