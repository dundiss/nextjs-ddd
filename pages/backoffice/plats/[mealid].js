import path from 'path';
//import fs from 'fs/promises';

import { Fragment } from 'react';

function MealDetailPage(props) {
    const loadedMeal = props;

    // if (!loadedMeal) {
    //     return <p>Loading...</p>
    // }

    return (
        <Fragment>
            <h1>{loadedMeal.id}</h1>
            <img src={loadedMeal.image} alt={loadedMeal.name} />
            <p>{loadedMeal.description}</p>
        </Fragment>
    )
}

export const getData = async () => {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    //const jsonData = await fs.readFile(filePath);
    const parsedData = JSON.parse(jsonData);

    return parsedData;
}


export async function getStaticProps(context) {
    const { params } = context;
    const data = await getData();

    if (!data) {
        return {
            notFound: true
        }
    }

    const categorieData = data.categories.find(categorie => categorie.name === params.name);
    if (!categorieData) {
        return {
            notFound: true
        }
    }

    const mealData = categorieData.meals.find(meal => meal.id === params.id);

    if (!mealData) {
        return {
            notFound: true
        }
    }

    //TODO : Update meal
    //mealData

    //TODO : Update file

    return {
        props: {
            data: {
                ...mealData
            }
        },
        revalidate: 20
    };
}

export async function getStaticPaths(context) {
    const { params } = context;
    console.log(params);
    const data = await getData();

    const categorieData = data.categories.find(categorie => categorie.name === params.name);
    if (!categorieData) {
        return {
            notFound: true
        }
    }

    const ids = categorieData.meals.find(meal => meal.id);
    const pathWithParams = ids.map((id) => ({ params: { mealid: id } }));

    return {
        // paths: [
        //     { params: { mealId: '1519055545-00' } },

        // ],
        paths: pathWithParams,
        //fallback: true
        fallback: false
    }
}


export default MealDetailPage;