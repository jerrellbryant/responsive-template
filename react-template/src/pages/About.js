import {ThemeContext} from '../components/themeContext'
import {useContext} from 'react'

const About = props => {
    const {data} = useContext(ThemeContext)

   /* Checking if !data.widget && !data.about && !data.abouttopic1 && !data.abouttopic2 exists 
      (due to it being a nested object), this is a early return for component with a loading state. */
    if(!data.widget && !data.about && !data.abouttopic1 && !data.abouttopic2) {
        return <div>Loading...</div>
    }
    return (
        <>
        <main role="main">
            <img className="image-full" src={data.widget.image}  alt={data.widget.alt}/>
            <h2>{data.about.title}</h2>
            <p><strong>{data.about.strong}</strong>{data.about.body}</p>

            <h3 class="about-subtitle">{data.abouttopic1.subtitle}</h3>
            <p><strong>{data.abouttopic1.strong}</strong>{data.abouttopic1.body}</p>

            <h3 class="about-subtitle">{data.abouttopic2.subtitle}</h3>
            <p>{data.abouttopic2.body}<strong>{data.abouttopic2.strong}</strong>{data.abouttopic2.bodycont}</p>


            {/* The code commented out below was a nightmare!
            
            <img className="image-full" src={data.widget && data.widget.image}  alt={data.widget && data.widget.alt}/>
            <h2>{data.about && data.about.title}</h2>
            <p><strong>{data.about && data.about.strong}</strong>{data.about && data.about.body}</p>

            <h3 class="about-subtitle">{data.abouttopic1 && data.abouttopic1.subtitle}</h3>
            <p><strong>{data.abouttopic1 && data.abouttopic1.strong}</strong>{data.abouttopic1 && data.abouttopic1.body}</p>

            <h3 class="about-subtitle">{data.abouttopic2 && data.abouttopic2.subtitle}</h3>
            <p>{data.abouttopic2 && data.abouttopic2.body}<strong>{data.abouttopic2 && data.abouttopic2.strong}</strong></p> */}
        </main>
        </>

    )
}

export default About