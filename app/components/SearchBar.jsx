"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import jsonData from '../JsonFiles/weatherTest.json'

export default function SearchBar({onCitySelect}){
    const json= jsonData;
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(json[0]); ///input from user // search bar input

    useEffect(() => {
        onCitySelect(result);
    }, []); ///to make amman the deafult value when the user first opens the page

    const searchData = () =>{
        const found= json.find(
            (item) => 
                item.city.toLowerCase() === query.toLowerCase()
            || item.country.toLowerCase() === query.toLowerCase()
        );
        onCitySelect(found);
    }
    
    return <div 
        className="flex items-center bg-[#26303B] rounded-2xl h-[60px] sm:h-[72px] px-4 sm:px-8 w-full">
            <button 
                className='cursor-pointer'
                onClick= {searchData}
            >
                <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="mr-3 sm:mr-5 text-[#99ABBD] text-lg sm:text-xl"
            />
            </button>
            <input 
            value={query}
            onChange = {(e) =>setQuery(e.target.value) } 
            className="text-[16px] sm:text-[19px] text-[#99ABBD] w-full p-3 rounded-2xl"  
            placeholder='Search for a city'
            />
        </div>

}