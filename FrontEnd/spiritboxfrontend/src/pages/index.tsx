import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import { GetStaticProps } from "next";
import Navbar from '@/components/navbar'
import BlogCard from '@/components/blogCard'
import Logo from '@/components/logo'
import Head from 'next/head'
import { log } from "console";
import process from "process";
import { Post as PostProps } from "@/types";
//import { Post as PostProps} from "@/gql/graphql";
//GEEFT ENKEL UNDEFINED TERUG, ALS JE DE GEHELE DATASET LOGT ZIE JE ALLE DATA desondanks niet assignable. NOCH 'as string', NOCH variable!  HEEFT EEN EFFECT. VANDAAR MANUELE TYPES



const GetTwoLatestPostsWithAuthors = graphql(`
query Posts {
  posts (pagination: { limit: 2}){
      data {
          attributes {
              title
              content
              author {
                  data {
                      attributes {
                          firstname
                          lastname
                      }
                  }
              }
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
  const { data } = await client.query({ query: GetTwoLatestPostsWithAuthors, variables: {} })
    
  return {
    props: {
      posts: data.posts?.data,
    },
  };
};





export default function Home({ posts }: { posts: PostProps[] }) {


  return (
    <>
      <Head>
        <title>Bombaclat</title>
        <meta />
      </Head>

      <Logo />
      <Navbar />

      
      {posts.map((post: PostProps) => ( 
        <BlogCard blogprops={post}/>        
      ))}

      

    </>
  )
}
