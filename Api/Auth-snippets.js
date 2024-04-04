// JWT auth and set secure cookie
app.post('/login', (req, res) => {
    const user = { id: 1, username: 'exampleUser' }; // Example user

    // Generate a JWT (JSON Web Token)
    const token = jwt.sign({ user }, 'your_secret_key', { expiresIn: '1h' });

    // Set the JWT in a cookie
    res.cookie('jwt_token', token, {
        httpOnly: true, // Prevents client-side JS from reading the cookie
        secure: true,   // Ensures the cookie is only sent over HTTPS
        sameSite: 'strict' // Prevents the browser from sending this cookie along with cross-site requests
    });

    res.status(200).send('JWT set in cookie');
});
