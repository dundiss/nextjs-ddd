import { useRouter } from 'next/router';

const CustomerOdersPage = () => {
    const router = useRouter();

    const loadOrderHandler = () => {
        //load data...
        //router.push('/backoffice/clients/samba1/o1');
        router.push({
            pathname: '/backoffice/clients/[id]/[clientoderid]',
            query: { id: router.query.id, clientoderid: 'order1' }
        });
    }

    return (
        <div>
            <h1>The orders of a Given client {router.query.id}</h1>
            <button onClick={loadOrderHandler}>Load Order 1</button>
        </div>
    )
}

export default CustomerOdersPage;
