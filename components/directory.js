import React from 'react';
import navStyles from './directory.module.css';

export default function directory(props){

    return (
        <div class={navStyles.topNav}>
            {props.items.map((item) => {
                    return (<a onClick={() => props.data(item.ref)}>
                                {item.name}
                            </a>);
                }
            )}
        </div>
    );
}