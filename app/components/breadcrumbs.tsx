import Link from 'next/link'
import transProductType from '../functions/trans-product-type';

export default function Breadcrumbs({ current, newBread }: { current: string, newBread?: string }) {

    const breadCurrentTH = transProductType(current)

    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link href="/">หน้าแรก</Link></li>
                <li>{breadCurrentTH}</li>
                {newBread ? <li>{newBread}</li> : null}
            </ul>
        </div>
        // <div>
        //     <Link to="/">Home</Link>
        //     {pathnames.map((name, index) => {
        //         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        //         const isLast = index === pathnames.length - 1;
        //         return (
        //             <span key={name}>
        //                 {isLast ? (
        //                     name
        //                 ) : (
        //                     <Link to={routeTo}>{name}</Link>
        //                 )}
        //                 {isLast ? null : ' / '}
        //             </span>
        //         );
        //     })}
        // </div>
    );
}