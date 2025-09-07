'use client'
import { CustomImageProps } from '@/app/types';
import Image from 'next/image';
import React, { useState } from 'react';

const CustomImage: React.FC<CustomImageProps> = ({
    src,
    alt,
    width = 100,
    height = 100,
    className = '',
    priority = false,
}) => {
    const [loaded, setLoaded] = useState(false);
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            placeholder="blur"
            unoptimized
            blurDataURL="/assets/images/placeholder.png"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            onLoadingComplete={() => setLoaded(true)}
            onError={() => setImgSrc('/assets/images/placeholder.png')}
        />
    );
};

export default CustomImage;
