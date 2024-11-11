import users from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Email and password are required" });
        }

        // Find the user by email
        const userDoc = await users.findOne({ email });
        if (!userDoc) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, userDoc.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: "Wrong password" });
        }

        // Create a token
        const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';
        const token = jwt.sign(
            { _id: userDoc._id, role: userDoc.role },
            jwtSecret,
            { expiresIn: "10d" }
        );

        // Send the response
        res.status(200).json({
            success: true,
            token,
            user: { _id: userDoc._id, name: userDoc.name, role: userDoc.role }
        });
    } catch (error) {
        console.error(error.message); // Log the error for debugging
        res.status(500).json({ success: false, error: "Server error" }); // Send server error response
    }
};

export { login };
