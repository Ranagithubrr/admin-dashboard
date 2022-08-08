import React, { useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = (props) => { 
    
    const {Searchshow,OverlayFunc} = props;
    useEffect(()=>{
        console.log('value changed, the value is ', Searchshow);
        setSearchTrigger('')
    },[Searchshow]);
    
    

    

    const closebtnclicked =()=>{
        setSearchTrigger('hidesearchBarArea');
        OverlayFunc('');
    }
    const [searchTrigger,setSearchTrigger] = useState('hidesearchBarArea');

    
    return (
        <div className={`searchbarArea ${searchTrigger}`}>
            <form action="#" className='form'>
                <input type="text" placeholder='Type and hit enter to search' />
                <button type="submit"><i class="fas fa-search"></i></button>
                <button className='closeIcon'><i class="fas fa-times" onClick={()=> closebtnclicked()}></i></button>
            </form>
            <div className="recentSearchArea">
                <h6>RECENT SEARCHES</h6>
                <button class="firstbtn">modern dashboard</button>
                <button>calender app</button>
                <button>modal examples</button>
                <button>avatar</button>
            </div>
            <div className="recentSearchArea">
                <h6>SEARCH SUGGESTIONS</h6>
                <button className='firstbtn'>criptocurrency</button>
                <button>button groups</button>
                <button>form elements</button>
                <button>contact app</button>
            </div>
        </div>
    );
};

export default SearchBar;