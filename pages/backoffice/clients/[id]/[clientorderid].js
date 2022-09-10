import { useRouter } from 'next/router';

const SelectedClientOrderPage = () => {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>The order page for a Specific order {router.query.clientorderid} for a Selected customer {router.query.id}</h1>
        </div>
    )
}

export default SelectedClientOrderPage;