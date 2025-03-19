import React from 'react';

const MessageBox = () => {
    
    return (
        <section className='bg-(--gray-medium) py-4 padding-x mt-4 rounded-(--radius-large) border border-(--primary-color) shadow-(--box-shadow) flex justify-between items-center'>
            <div className='pr-4'>
                <p className='font-semibold'>Send us a message</p>
                <p className='text-(--text-color-secondary)'>We typically reply within a day</p>
            </div>
            <img src='./src/assets/filled-arrow-right.svg' alt='arrow-right' className='w-[12.36px]' />
        </section>
    );
};

export default MessageBox;