import {ThemeContext} from '../components/themeContext'
import {useContext} from 'react'

const Footer = () => {
 const {data} = useContext(ThemeContext)

 if(!data.footer) {
     return <div>Loading...</div>
 }

    return (
        <footer>
            <p><strong>{data.footer.website}</strong></p>
            <p>{data.footer.copyright}</p>
        </footer>
    )
}

export default Footer