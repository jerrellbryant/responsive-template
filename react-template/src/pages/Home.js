import {useContext} from 'react';
import {ThemeContext} from '../components/themeContext';


const Home = () => {
const {data} = useContext(ThemeContext)

/* Checking if !data.homearticle1 exists (due to it being a nested object), this is a 
early return for component with a loading state. */
if(!data.homearticle1) {
    return <div>Loading...</div>
}
    return (
        <> 
         <main role="main">
            <article className="article-featured">
                <h2 className="article-title">{data.homearticle1.title}</h2>
                 <img className="article-image" src={data.homearticle1.image} alt={data.homearticle1.alt}/>
                <p className="article-info">{data.homearticle1.info}</p>

                <p className="article-body"><strong>{data.homearticle1.strong}</strong>{data.homearticle1.body}<a class='article-link' href='https://www.theminimalists.com/'>{data.homearticle1.link}</a>{data.homearticle1.bodycont}</p>
                <a className="article-read-more" href={ data.homearticle1.url}>{data.homearticle1.anchor}</a>
               
            </article>
            <hr>
            </hr>
        </main>
        
        </>
    )
}

export default Home