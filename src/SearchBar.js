import React, {useState, useEffect} from 'react'


const SearchBar = ({onSearchSubmitted}) => {
    const [searchTerm, setSearchTerm] = useState("");
        

      const onFormSubmit = (e)=>{
        e.preventDefault();
        onSearchSubmitted(searchTerm);
        setSearchTerm("") //clear input
    }

        return (
            <div>
                <form onSubmit = {onFormSubmit}>
                    <label>Search city: </label>
                    <input type="text" 
                    placeholder="City"
                    required
                    value={searchTerm}
                    onChange = {e=>(setSearchTerm(e.target.value))}
                    />
                    <button onClick={onFormSubmit}>find!</button>
                </form>
            </div>
        )
    }

export default SearchBar
