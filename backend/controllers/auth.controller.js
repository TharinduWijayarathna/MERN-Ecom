import User from "../models/user.modal.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Create a new user
        const user = await User.create({ name, email, password });
        // Respond with a success message and the created user (excluding password)
        res.status(201).json({user, message: "User created successfully" });
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const login = async (req, res) => {
    res.send("sign up route called");
}
export const logout = async (req, res) => {
    res.send("logout route called");
}