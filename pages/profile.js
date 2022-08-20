import { getSession } from 'next-auth/react';
import UserProfile from '../components/profile/user-profile';

function ProfilePage() {
  return <UserProfile />;
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      props: { session }
    };
  }
  else {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    };
  }
}

export default ProfilePage;
