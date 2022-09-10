import fs from 'fs';
import path from 'path';
import { getSession } from "next-auth/react";
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
    if (req.method !== 'PUT') {
        res.status(404).json({ message: 'Page not found' });
        return;
    }

    //console.log("Request:", req.body);

    //const session = await getSession({ req: req });

    // if (!session) {
    //     res.status(401).json({ mesage: 'Not autheanticated!' });
    //     return;
    // }

    //const userEmail = session.user.email;
    const { categoryName, mealId, daySelection } = req.body;

    // const client = await connectToDatabase();
    // const usersCollection = client.db().collection('users');
    // const user = await usersCollection.findOne({ email: userEmail });

    // if (!user) {
    //     res.status(404).json({ message: 'User not found' });
    //     client.close();
    //     return;
    // }

    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    //console.log("file opened");

    //update data with received parameters
    const index = data.categories.findIndex(category => category.name === categoryName);
    if (index < 0) {
        res.status(404).json({ message: 'Meal category not found' });
        return;
    }

    const indexOfMeal = data.categories[index].meals.findIndex(meal => meal.id === mealId);
    if (indexOfMeal < 0) {
        res.status(404).json({ message: 'Meal Id not found' });
        return;
    }

    data.categories[index].meals[indexOfMeal].daySelection = daySelection;
    //console.log("Data Updated");

    const stringifiedData = JSON.stringify(data);

    //write file with updated data
    fs.writeFileSync(filePath, stringifiedData);
    //console.log("File Updated");

    //client.close();
    res.status(200).json(data);
}

export default handler;