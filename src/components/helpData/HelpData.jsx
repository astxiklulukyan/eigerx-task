import React, {useState, useCallback } from 'react';
import { debounce } from '../../helpers';

const helpItems = [
    {id: 1, name: 'In-game bonuses and free spins'},
    {id: 2, name: 'Crypto deposit still not credited?'},
    {id: 3, name: 'EigerX VIP program overview'},
    {id: 4, name: 'Achievements and awards'},
];

const HelpData = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = useCallback(
        debounce((searchTerm) => setSearchTerm(searchTerm), 100),
        []
    );

    const filteredItems = searchTerm.trim() === ""  ? helpItems : helpItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return (
        <section className='mt-3 bg-(--gray-dark) rounded-(--radius-large) p-2 border border-(--gray-border) shadow-(--box-shadow)'>
            <input
                type='text'
                placeholder='Search for help'
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className='w-full                      
                        rounded-(--radius-small) 
                        pl-3 pr-8 py-2.5 mb-2
                        text-(--text-color-primary) 
                        outline-0 
                        placeholder-(--text-color-primary)
                        font-semibold
                        bg-[url("../src/assets/search-icon.svg")]
                        bg-[position:calc(100%-0.5rem)_center]     
                        bg-[color:var(--gray-medium)]                                        
                        bg-no-repeat
                        border-0'
            />   
    
            {filteredItems.length > 0 ? 
                filteredItems.map((item) => (
                <details key={item.id} className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-2.5 px-3 rounded-(--radius-small)">
                        <p>{item.name}</p>
                        <img src="../src/assets/arrow-right.svg" alt="expand" className="transform group-open:rotate-90 transition-transform w-[5.2px]"/>
                    </summary>
                </details>
            )) : 
                <div className='px-3 py-2.5 italic'>No results found</div>
            }
        </section>
    );
};

export default HelpData;