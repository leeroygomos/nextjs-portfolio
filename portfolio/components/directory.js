import Link from 'next/link';
import React, { useRef } from 'react';
import navStyles from './directory.module.css';

export default function directory(props){

    return (
        <div class={navStyles.topNav}>
            {props.items.map((item) => {
                    const myRef = useRef(item.name);
                    const executeScroll = () => myRef.current.scrollIntoView();
                    return (<Link ref={myRef} href={item.ref} onClick={executeScroll}>
                                {item.name}
                            </Link>);
                }
            )}
        </div>
    );
}