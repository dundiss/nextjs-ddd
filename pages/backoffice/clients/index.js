import Link from 'next/link';

const ClientsPage = () => {
    const clients = [
        { id: 'samba1', name: 'Samba' },
        { id: 'mams1', name: 'Mamadou' }
    ]
    return (
        <div>
            <h1>The clients page</h1>
            <ul>
                {clients.map(client => <li key={client.id}>
                    {/* <Link href={`/backoffice/clients/${client.id}`}>{client.name}</Link> */}
                    <Link
                        href={{
                            pathname: "/backoffice/clients/[id]",
                            query: { id: client.id }
                        }}>
                        {client.name}
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}


export default ClientsPage;