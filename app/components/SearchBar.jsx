import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar(){
    return <div 
        className="flex items-center bg-[#26303B] rounded-2xl h-[60px] sm:h-[72px] px-4 sm:px-8 w-full">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="mr-3 sm:mr-5 text-[#99ABBD] text-lg sm:text-xl"
            />
            <span className="text-[16px] sm:text-[19px] text-[#99ABBD]">
                Search for a city
            </span>
        </div>
}