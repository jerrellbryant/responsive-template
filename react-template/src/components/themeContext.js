import {useState, useEffect, createContext} from 'react'
import axios from 'axios'
const ThemeContext = createContext()


const ThemeContextProvider = props => {
    
    const [data, setData] = useState({});

    useEffect(() => {
       axios.get('data.json')
        .then(res => setData(res.data))
        .catch(err =>console.log(err))
    },[])

    return (
        <ThemeContext.Provider value={{data}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}