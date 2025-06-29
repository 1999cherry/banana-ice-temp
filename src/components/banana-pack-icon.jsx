'use client'
import { useState } from 'react';
import Image from "next/image";

export default function BananaPackIcon() {
    const [isBananaPackVisible, setBananaPackVisible] = useState(false);

    const handleMouseEnter = () => {
        setBananaPackVisible(true);
    };

    const handleMouseLeave = () => {
        setBananaPackVisible(false);
    };

    return (
        <div
            className={"absolute bottom-60 left-72"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src="/icons/banana-pack.png"
                alt={"banana pack"}
                width={200}
                height={200}
                className={`transition-opacity duration-500 ${isBananaPackVisible ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}