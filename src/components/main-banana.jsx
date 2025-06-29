'use client';
import React, {useState} from 'react';
import Image from "next/image";

export default function MainBanana() {
    const [image, setImage] = useState('/images/banana-ice-s.png');

    const handleMouseEnter = () => {
        setImage('/images/banana.png');
    };

    const handleMouseLeave = () => {
        setImage('/images/banana-ice-s.png');
    };

    return (
        <>
            {image === '/images/banana.png' ? (
                    <Image
                        src="/images/freeze-text.png"
                        alt="freeze text"
                        width={150}
                        height={150}
                    />
                )
                : <div className='w-[150px] h-[150px]' />}
            <Image className="mb-32"
                src={image}
                alt="main banana"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                width={150}
                height={150}
            />
        </>
    );
};
