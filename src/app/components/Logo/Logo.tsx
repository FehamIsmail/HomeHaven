"use client";
import React from 'react';
import classNames from "classnames";

interface LogoProps {
    color?: 'BLACK' | 'WHITE' | 'DEFAULT';
    clickable?: boolean;
}
function Logo(props: LogoProps) {

    const [color, setColor] = React.useState<string>('text-black');

    const colorClassName = classNames({
        'fill-black': props.color === 'BLACK',
        'fill-white': props.color === 'WHITE',
        'fill-indigo-600': props.color === 'DEFAULT',
    });

    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0" y="0" viewBox="0 0 1000 1000" xmlSpace="preserve" >
            <g>
                <g>
                {/*HOUSE*/}
                <path className="opacity-0" d="M692.6,378.8l-55.7-42.3v-58.2c0-4.6-3.7-8.2-8.2-8.2H595c-4.6,0-8.2,3.7-8.2,8.2v20.1l-71.4-54.2 c-4.2-3.2-9.1-4.8-14.1-4.8c-5,0-9.9,1.6-14.1,4.8L309.8,378.8c-5.8,4.4-9.2,11.3-9.2,18.6v272.4c0,12.9,10.5,23.4,23.4,23.4 h354.5c12.9,0,23.4-10.5,23.4-23.4V397.4C701.8,390.1,698.4,383.2,692.6,378.8z"/>
                {/*BG*/}
                <path className={colorClassName} d="M903.9,392.4c-9.8-36.8,0.4-82-18.3-114.2c-18.9-32.7-63.3-46.4-89.9-72.9c-26.5-26.5-40.2-70.9-72.9-89.9 c-32.2-18.7-77.4-8.5-114.2-18.3c-35.6-9.5-69.5-41.2-108.1-41.2c-38.6,0-72.5,31.7-108.1,41.2c-36.8,9.8-82-0.4-114.2,18.3 c-32.7,18.9-46.4,63.3-72.9,89.9c-26.5,26.5-70.9,40.2-89.9,72.9c-18.7,32.2-8.5,77.4-18.3,114.2c-9.5,35.6-41.2,69.5-41.2,108.1 c0,38.6,31.7,72.5,41.2,108.1c9.8,36.8-0.4,82,18.3,114.2c18.9,32.7,63.3,46.4,89.9,72.9c26.5,26.5,40.2,70.9,72.9,89.9 c32.2,18.7,77.4,8.5,114.2,18.3c35.6,9.5,69.5,41.2,108.1,41.2s72.5-31.7,108.1-41.2c36.8-9.8,82,0.4,114.2-18.3 c32.7-18.9,46.4-63.3,72.9-89.9c26.5-26.5,70.9-40.2,89.9-72.9c18.7-32.2,8.5-77.4,18.3-114.2c9.5-35.6,41.2-69.5,41.2-108.1 C945.1,461.9,913.5,428,903.9,392.4z M701.8,669.9c0,12.9-10.5,23.4-23.4,23.4H323.9c-12.9,0-23.4-10.5-23.4-23.4V397.4 c0-7.3,3.4-14.2,9.2-18.6l177.3-134.5c4.2-3.2,9.1-4.8,14.1-4.8c5,0,9.9,1.6,14.1,4.8l71.4,54.2v-20.1c0-4.6,3.7-8.2,8.2-8.2h33.7 c4.6,0,8.2,3.7,8.2,8.2v58.2l55.7,42.3c5.8,4.4,9.2,11.3,9.2,18.6V669.9z"/>
                </g>
                {/*HH*/}
                <path className={colorClassName}
                      d="M618.1,577.8c-5.1,6.3-12.9,15.5-21.5,16.8c-3.4,0.5-3.6-0.7-3.4-4.6c-0.1,1.4,0.6-2.1,0.8-2.7 c0.6-2.1,1.2-4.1,1.9-6.2c5-15.3,15.3-34.8,7.5-50.7c-8.3-16.9-32.7-13.3-46.1-5.3c-4.8,2.9-9.1,6.5-13,10.5c0.6-2.4,1.2-4.7,1.8-7 c7.8-10.1,15.3-20.5,22.5-31c10.3-14.9,20.7-30.3,28.3-46.8c2.4-5.2,5-10.9,5.3-16.7c0.7-12.7-7.2-25.3-20.7-26 c-25.8-1.4-30.1,38.1-34.7,56c-4.9,19.3-9.8,38.6-14.7,57.9c-6,7.8-12.2,15.5-18.5,23c-11.7,13.9-24,27.9-38.1,39.4 c-2.1,1.7-4,3.2-6.7,4.9c-1.1,0.7-2.2,1.3-3.4,1.9c-0.3,0.2-0.5,0.3-0.7,0.4c0,0-0.2,0-1.1,0.4c-0.3,0.1-0.7,0.2-1.1,0.3 c-1.8-1.1-2.8-2.7-3.2-5c-1.1-6.6,2.4-14.5,4.6-20.6c4.9-13.4,14.4-29.4,11-44.3c-4.1-18.2-24.7-21-39.1-13.3 c-7.6,4.1-13.8,10.7-19.6,16.9c-2.7,2.9-5.4,5.9-8,9c3.6-13.9,7.7-27.7,12.2-41.2c11.3-6,22-12.9,31.9-20.3 c10.1-7.7,20.7-16.5,26.8-27.9c5.8-10.8,6.4-26.5-3.4-35.3c-7.3-6.5-19-6.8-27-1.7c-7.7,4.9-13.1,13.1-17.6,20.9 c-9.7,16.7-16.7,35.2-22.8,53.7c-13.3,6.6-27.3,11.8-41.1,15.1c-9.5,2.3-5.5,16.9,4,14.6c10.5-2.5,20.9-6,31.1-10.4 c-0.3,1.1-0.7,2.2-1,3.3c-7.3,24.5-13.7,49.3-19.1,74.3c-1.9,6.2-3.2,12.5-3.9,19.1c-0.8,8.5,13.2,10.4,14.9,2c1.2-6,2.5-12,3.7-18 c3.6-11,9.6-21.1,16.5-30.4c5.4-7.2,11.5-14,17.8-20.4c5-5,10.6-10.7,17.9-12.1c18.4-3.5,8.7,20.5,5.5,28.8 c-5.3,13.4-14.6,30.9-8.9,45.6c14.5,37.5,61.1-17.5,77.3-37.3c-3.3,12.9-6.6,25.8-9.9,38.7c-0.2,0.9-0.5,1.8-0.7,2.7 c-2.4,9.5,11.9,13.4,14.6,4c6.7-22.7,16.2-51.6,37.8-64.4c5.8-3.4,12.6-5.2,19.3-4.3c9,1.2,7,12.1,5.3,18.6 c-2,7.7-5.1,15.1-7.6,22.6c-2.4,7.3-5,14.4-3.1,22.2c2.9,11.7,14.6,14.8,24.9,11.1c10-3.7,18.4-11.5,25-19.7 C634.9,581,624.3,570.2,618.1,577.8z M564.3,457.2c2.4-9.6,3.8-20.5,9.5-28.9c2.3-3.3,6-7.1,10.2-4.1c1.9,1.3,2.6,3.7,3,5.9 c0.1,0.9-0.1,4.9,0.2,3.8c-0.9,5.2-2.6,8-4.8,12.6c-7.4,14.9-16.6,28.9-26.1,42.6C558.9,478.4,561.6,467.8,564.3,457.2z M435,456 c4-9.1,8.3-18.3,14.1-26.4c1.7-2.3,3.5-4.6,5.7-6.6c1.9-1.8,3.2-2.8,5.2-3.1c0.1,0,0.2,0,0.3,0c0.8,0,1.6,0,2.4,0.1 c1.4,0.3,2.8,0.7,3.8,1.7c3.3,3.5,2.3,10.3,0.8,14c-3.7,9.2-12.6,16.7-20.2,22.7c-5.8,4.7-12,9.1-18.5,13.2 C430.6,466.4,432.7,461.2,435,456z"/>
            </g>
        </svg>
    );
}

export default Logo;