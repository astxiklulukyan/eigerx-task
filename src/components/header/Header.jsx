import React from 'react';

const Header = () => {
    const users = [
        { id: 0, name: 'User 1', imageUrl: '../../src/assets/user1.png' },
        { id: 1, name: 'User 2', imageUrl: '../../src/assets/user2.png' },
        { id: 2, name: 'User 3', imageUrl: '../../src/assets/user3.png' }
    ];

    return (
        <header>
            <div className='container mx-auto flex justify-between items-end padding-x pt-5'> 
                <a href='#'>
                    <img src='../../src/assets/logo.svg' alt='Logo' className='w-auto h-[32px]' />
                </a>       

                <ul className='inline-flex'>
                    {users.map((user) =>  (
                        <li key={user.id} 
                            className='relative ml-[-8px]' 
                            style={{ zIndex: `${10 - user.id}` }}>
                                
                            <img src={user.imageUrl} 
                                alt={user.name} 
                                className='w-[40px] h-[40px] rounded-full border-2 border-(--gray-dark)'
                            />
                        </li>
                    ))}
                </ul>     
            </div>      
        </header>
    );
};

export default Header;