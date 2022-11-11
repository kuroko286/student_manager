import React, { useState } from 'react'

function Search({submit}) {

  const [msv,setMsv] = useState(0);

  const handleChange = (event) => {
    setMsv(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    submit(msv);
  }
  
  return (
    <form class="search-container" onSubmit={handleSubmit}>
        <input unselectable='true' onChange={handleChange} type="text" name="search" placeholder="Tìm mã sinh viên" class="search-input"></input>
        <button type='submit' class="search-btn">
                <i class="fas fa-search"></i>      
        </button>
    </form>
  )
}

export default Search;