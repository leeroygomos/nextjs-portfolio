import React from 'react';
import navStyles from './directory.module.css';

export default function directory(props){

    return (
        <div className={navStyles.topNav}>
            {props.items.map((item) => {
                    return (<a key={item.name} onClick={() => props.data(item.ref)}>
                                {item.name}
                            </a>);
                }
            )}
        </div>
    );
}