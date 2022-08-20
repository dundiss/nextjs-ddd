import { getSession } from "next-auth/react";
import { hashPassword, isPasswordLengthValid, verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
    if (req.method !== 'PATCH') {
        return;
    }

    const session = await getSession({ req: req });

    if (!session) {
        res.status(401).json({ mesage: 'Not autheanticated!' });
        return;
    }

    const userEmail = session.user.email;
    const { oldPassword, newPassword } = req.body;
    
    const client = await connectToDatabase();
    const usersCollection = client.db().collection('users');
    const user = await usersCollection.findOne({ email: userEmail });

    if (!user) {       
        res.status(404).json({ message: 'User not found' });
        client.close();
        return;
    }

    const currenPassword = user.password;
    const arePasswordsEqual = await verifyPassword(oldPassword, currenPassword);
    
    if (!arePasswordsEqual) {
        res.status(403).json({ message: 'Invalid password.' });
        client.close();
        return;
    }

    if (!isPasswordLengthValid(newPassword)) {
        res.status(422).json({ message: 'Invalid input - password should also be at least 7 characters long.' });
        return;
    }

    const hashedPassword = await hashPassword(newPassword);
    usersCollection.updateOne(
        { email: userEmail },
        { $set: { password: hashedPassword } }
    );

    client.close();
    res.status(200).json({ message: 'Password update!' });
}

export default handler;