import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import './Search.css'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Search = ({setShowSearch}) => {

  const[query,setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

  if(!query.length){
    data = null
  };

  return (
    <div className='search-modal'>
        <div className="form-field">
            <input type="text"
                   autoFocus
                   placeholder='Search for products' 
                   value={query}
                   onChange={onChange}
            />
            <GrClose onClick={() => setShowSearch(false)} className='close-btnn'/>
        </div>

        <div className="search-result-content">
          <div className="search-resultss">
          
          {data?.data?.map((item)=>{
            return(
              <div key={item.id} className="search-result-item" onClick={() => {
                navigate("/product/" + item.id)
                setShowSearch(false)
              }}>
                <div className="imgg-container">
                  <img src={
                    item.attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="prodd-detail">
                  <span className="namee">{item.attributes.title}</span>
                  <span className="desce">{item.attributes.desc}</span>
                </div>
              </div>
            )
          })
          }
            
            
          </div>
        </div>
    </div>
  )
}

export default Search;
