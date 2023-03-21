import Link from 'next/link';

export default function directory(props){

    return (
        <ul>
            {props.items.map((item) => 
                <li key={item.name}>
                    <Link href={item.ref}>
                        {item.name}
                    </Link> 
                </li>
            )}
        </ul>
    );
}