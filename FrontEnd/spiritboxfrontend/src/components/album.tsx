import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from "next";
import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
//import { Album as Albumprops, Song} from '@/gql/graphql';
import { log } from 'console';
import { Album as Albumprops, Song } from '@/types';



export default function DiscographyAlbums({ albumprops }: { albumprops: Albumprops }) {
    console.log(albumprops.attributes.title);

    return (

        <div className='content'>
            <h1> {albumprops.attributes.title}</h1>
            <ol>
               

            </ol>
        </div>


    )
}