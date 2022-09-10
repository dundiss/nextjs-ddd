import Link from 'next/link';

const BackofficePage = () => {
    return (
        <div>
            <h1>Page d'Administration</h1>
            <ul>
                <li>
                    <Link href="/backoffice/clients">Gérer les clients</Link>
                </li>
                <li>
                    <Link href="/backoffice/plats">Gérer les plats</Link>
                </li>
            </ul>
        </div>
    )
}

export default BackofficePage;