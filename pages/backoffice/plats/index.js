import Link from 'next/link';

const DishesPage = () => {
    return (
        <div>
            <h1>The clients page</h1>
            <ul>
                <li>
                    <Link href="/backoffice/plats/yassa">Yassa</Link>
                </li>
                <li>
                    <Link href="/backoffice/plats/thieb">Thieb</Link>
                </li>
            </ul>
        </div>
    )
}


export default DishesPage;