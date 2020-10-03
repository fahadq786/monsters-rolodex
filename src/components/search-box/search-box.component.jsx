import React from 'react';

import './search-box.styles.css';

export const Searchbox = ({ placeHolder , handleChange}) => { 
    
    return(
        
            <input 
            className = 'search'
            type='search' 
            
            placeholder={placeHolder}
            
            onChange={handleChange}
          
                
              
              
            />
        
        
        );
    
    
    
}