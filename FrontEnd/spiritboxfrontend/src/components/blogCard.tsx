import Head from 'next/head'
import Image from 'next/image'
import { Post as PostProps} from '@/types'
import { log } from 'console'
import { marked } from 'marked'
//import { Post as PostProps} from '@/gql/graphql' 
//GEEFT ENKEL UNDEFINED TERUG, ALS JE DE GEHELE DATASET LAAD ZIE JE ALLE DATA. NOCH 'as string', NOCH variable!  HEEFT EEN EFFECT. VANDAAR MANUELE TYPES


export default function blogCard({blogprops}:{blogprops: PostProps}) {  
    
      
    return (
        <div className='container center' >
            <div className="card has-background-info">
                <div className='title is-2 center '>
                    {blogprops.attributes.title}
                </div>
                <div className="card-image">
                    <figure className="center">
                        
                     <Image src={blogprops.attributes.picture.data.attributes.url} alt="Placeholder image" width={600} height={600} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <Image src="/RuleOfNines.png" alt="Placeholder image" width={100} height={100} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{blogprops.attributes.author.data.attributes.firstname +" "+ blogprops.attributes.author.data.attributes.lastname}</p>
                            <p className="subtitle is-6">{"@" + blogprops.attributes.author.data?.attributes?.firstname + blogprops.attributes.author.data.attributes.lastname}</p>
                        </div>
                    </div>

                    <div className="content"  dangerouslySetInnerHTML={{ __html: marked.parse(blogprops.attributes.content)}}>
                    
                    
                    </div>
                </div>
            </div>
        </div>

    )
}