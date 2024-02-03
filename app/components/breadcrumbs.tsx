import Link from 'next/link'

export default function Breadcrumbs () {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li>Add Document</li>
            </ul>
        </div>
    );
}