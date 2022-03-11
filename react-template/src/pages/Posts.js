import { ThemeContext } from "../components/themeContext"
import {useContext} from "react"

const Posts = () => {
    const {data} = useContext(ThemeContext)
    if(!data.homearticle1 && !data.homearticle2 && !data.homearticle3 && !data.homearticle4) {
        return <div>Loading...</div>
    }
    return (
        <>
          <main role="main">
            <article class="article-recent">
                <div class="article-recent-main">
                    <h2 class="article-title">{data.homearticle1.title}</h2>
                      <p className="article-body">{data.homearticle1.strong}{data.homearticle1.body}<a class='article-link' href='https://www.theminimalists.com/'>{data.homearticle1.link}</a>{data.homearticle1.bodycont}</p>
                    <a class="article-read-more" href={data.homearticle1.url}>Continue Reading</a>
                </div>

                <div class="article-recent-secondary">
                    <img class="article-image" src={data.homearticle1.image} alt={data.homearticle1.alt}/>
                    <p class="article-info">{data.homearticle1.info} | {data.homearticle1.comments}</p>
                </div>

            </article>

            <hr></hr>

            <article class="article-recent">
                <div class="article-recent-main">
                    <h2 class="article-title">{data.homearticle2.title}</h2>
                    <p class="article-body">{data.homearticle2.body}</p>
                    <a class="article-read-more" href={data.homearticle2.url}>Continue Reading</a>
                </div>

                <div class="article-recent-secondary">
                    <img class="article-image" src={data.homearticle2.image} alt={data.homearticle2.alt}/>
                    <p class="article-info">{data.homearticle2.info} | {data.homearticle2.comments}</p>
                </div>

            </article>

             <article class="article-recent">
                <div class="article-recent-main">
                    <h2 class="article-title">{data.homearticle3.title}</h2>
                    <p class="article-body">{data.homearticle3.body}</p>
                    <a class="article-read-more" href={data.homearticle3.url}>Continue Reading</a>
                </div>

                <div class="article-recent-secondary">
                    <img class="article-image" src={data.homearticle3.image} alt={data.homearticle3.alt}/>
                    <p class="article-info">{data.homearticle3.info} | {data.homearticle3.comments}</p>
                </div>

            </article>

            <article class="article-recent">
                <div class="article-recent-main">
                    <h2 class="article-title">{data.homearticle4.title}</h2>
                    <p class="article-body">{data.homearticle4.body}</p>
                    <a class="article-read-more" href={data.homearticle4.url}>Continue Reading</a>
                </div>

                <div class="article-recent-secondary">
                    <img class="article-image" src={data.homearticle4.image} alt={data.homearticle4.alt}/>
                    <p class="article-info">{data.homearticle4.info} | {data.homearticle4.comments}</p>
                </div>

            </article>
        </main> 
        
        </>
    )
}

export default Posts