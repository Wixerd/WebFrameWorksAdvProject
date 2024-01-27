import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from "next";
import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
//import { Album as Albumprops} from '@/gql/graphql';
import { Album as Albumprops , Song} from '@/types';
import Navbar from '@/components/navbar'
import Logo from '@/components/logo'
import { log } from 'console';
import DiscographyAlbums from '@/components/album';


const GetAllPostsWithAuthors = graphql(`
query Albums {
    albums {
        data {
            attributes {
                title
                cover {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                songs {
                    data {
                        attributes {
                            title
                            length
                            feature
                            releasedate
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
      albums: data.albums?.data
    },
  };
};


export default function DiscographyPage({ albums }: { albums: Albumprops[] }) {
    const ColoredLine = () => (
        <hr
            style={{
                color: 'pink',
                backgroundColor: 'pink',
                height: 5
            }}
        />
    );
    
    
  return (
    <>
      <Head>
        <title>Bombaclat</title>
        <meta />
      </Head>
      <Logo/>
      <Navbar />
        
        {albums.map((album:Albumprops)=>{
            {console.log("ALBUM: "+album.attributes.title);}
            {album.attributes.songs.data.map((song :Song) =>{console.log("songs: "+song.attributes.title);
            })}
            //<DiscographyAlbums albumprops={album} />
            <div className='content'>
                <h1 className='title'>{album.attributes.title}</h1>
            
            </div>
        })}
      
    </>
  )
}
