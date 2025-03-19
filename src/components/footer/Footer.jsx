import React, {useState} from 'react';

const Footer = () => {

    const [activeTab, setActiveTab] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home', icon: '../src/assets/home.svg', iconActive: '../src/assets/home-active.svg' },
        { id: 'messages', label: 'Messages', icon: '../src/assets/message.svg', iconActive: '../src/assets/message-active.svg' },
        { id: 'help', label: 'Help', icon: '../src/assets/help.svg', iconActive: '../src/assets/help-active.svg' },
    ];
    
    return (
        <footer>
            <div className='container mx-auto'> 
                <ul className='flex bg-(--gray-dark) rounded-(--radius-small) border border-(--gray-border) mt-4 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.05)]'>
                    {navItems.map((item) => (
                        <li key={item.id} className='w-1/3 text-center py-3.5 px-0.5'>
                            <a onClick={() => setActiveTab(item.id)} className='inline-block cursor-pointer'>
                                <img
                                    src={`${activeTab === item.id ? item.iconActive : item.icon}` }
                                    alt={item.label}
                                    className='w-[24px] h-[24px] mb-2 inline-block'
                                />
                                <p className={`${activeTab === item.id && "text-(--primary-color) font-semibold"} hover:text-(--primary-color)`}>{item.label}</p>
                            </a>                        
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;