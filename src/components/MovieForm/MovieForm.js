import { useState } from 'react'

export default function MovieForm(props) {
     const [searchTerm, setSearchTerm] = useState("");
     const handleChange = (event)=> {
          setSearchTerm(event.target.value);
     };

     return(
          <div>
               <form 
               onSubmit={(event) => {
                    event.preventDefault();
                    props.movieSearch(searchTerm);
               }}>
                    <input type='text' onChange={handleChange} value={searchTerm} />
                    <input type='submit' value='submit' />
               </form>
          </div>
     )

}