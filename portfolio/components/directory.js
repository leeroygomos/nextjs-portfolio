import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function directory(props){

    return (
        <div class={utilStyles.topNav}>
            {props.items.map((item) => 
                <a key={item.name}>
                    <Link href={item.ref}>
                        {item.name}
                    </Link> 
                </a>
            )}
        </div>
    );
}