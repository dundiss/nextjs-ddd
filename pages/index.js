import path from 'path';
import fs from 'fs/promises';

import StartingPageContent from '../components/starting-page/starting-page';

function HomePage(props) {
  return <StartingPageContent data={props.data} />;
}

export default HomePage;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const parsedData = JSON.parse(jsonData);

  if (!parsedData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: {
        ...parsedData
      }
    },
    revalidate: 20
  };
}