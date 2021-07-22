import { useState, useEffect  } from "react";
import SearchBox from "./components/SearchBox";
import './style.css'
import data from '../../data/users.json'
import SearchResults from "./components/SearchResults";
import axios from 'axios'

export default function Search() {

    // Nos dirá si el elemento debe estar arriba o abajo
    const [isAtTop, setIsAtTop] = useState(false)
    const [results, setResults] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            try{
                /* const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json() 
                setData(data) */
                const data = await axios.get("https://jsonplaceholder.typicode.com/users") 
                setData(data.data)
            } catch(error){
                console.log(error)
            }
            
        }
        getUsers().catch(null)
    }, [])
    
    const handleCloseSearch = () => {
        setIsAtTop(false)
        setResults([])
    }
    const handleSearchClick = (searchText) => {
        setIsAtTop(true)
        if( data?.length ) {
            const searchTextMinus = searchText === undefined ? searchText='empty' : searchText.toLowerCase()
            const filteredData = data.filter((value) => (
                    value.name.toLowerCase().includes( searchTextMinus ) ||
                    value.phone.toLowerCase().includes( searchTextMinus ) ||
                    value.email.toLowerCase().includes( searchTextMinus ) ||
                    value.username.toLowerCase().includes( searchTextMinus ) 
                )
            );
            setResults(filteredData)
        }
    }

    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`} >
            <SearchBox 
            onSearch={ handleSearchClick } 
            onClose={handleCloseSearch} 
            isSearching={ isAtTop } 
            />
            <SearchResults results={ results } isSearching={ isAtTop } />
        </div>
    );
} 