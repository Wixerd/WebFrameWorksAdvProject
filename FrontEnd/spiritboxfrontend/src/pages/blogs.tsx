import { GetStaticProps } from "next";
import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import Navbar from '@/components/navbar'
import Logo from '@/components/logo'
import BlogCard from '@/components/blogCard'
import Head from 'next/head'
import { Post as PostProps } from "@/types";



const GetAllPostsWithAuthors = graphql(`
query PostsArchive {
  posts {
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
  const { data } = await client.query({ query: GetAllPostsWithAuthors, variables: {} })
    
  return {
    props: {
      posts: data.posts?.data,
    },
  };
};


export default function Blogs({ posts }: { posts: PostProps[] }) {
  return (
    <>
      <Head>
        <title>Bombaclat</title>
        <meta />
      </Head>



      <Logo/>
      <Navbar />
    <div className='archive'>
    {posts.map((post: PostProps) => ( 
        <BlogCard blogprops={post}/>        
      ))}
  
    </div>
      
    </>
  )
}
