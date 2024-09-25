import React from 'react'
import { useGlobalContext } from './context';

 const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const handleSubmit =(e)=>{
        e.preventDefault();
        const searchvalue = e.target.search.value;
        if(!searchvalue) return;
        console.log();
        setSearchTerm(searchvalue);
      
    };
  return (

<section>
    <h1 className="title">unSplash Images</h1>
<form  className ='search-form' onSubmit={handleSubmit}>
    <input type="text" className="form-input-search-input" name="search" placeholder='cat'/>
     <button  type="submit" className="btn">Submit</button>

</form>

</section>)
}
export default SearchForm;
