import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../utils/context';
import './homecategory.css'

const Hcategory = () => {

    const { state } = useContext(Context);
   console.log("hjghfgj",state);
    const navigate = useNavigate();

   
    return (
        <div className='shop-by-category' >
            <div className='categories' >
            
            {state?.categories?.data?.map((item) => 
                   
                <div 
                    key={item.id} 
                    className='category'
                    onClick={() => navigate(`/category/${item.id}`)}
                    
                >
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                    <span className="headingggg">{item.attributes.title}</span>
                </div>
             
            )}
           </div>
        </div>
    )
};

export default Hcategory;
