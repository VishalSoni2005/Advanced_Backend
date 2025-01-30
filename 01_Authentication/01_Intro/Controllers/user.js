const user = require('../Models/users.js');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        await user.create({ name, email, password });   
        return res.status(201).render('/signup');
    } catch(error){
        console.error(error);
        return res.status(500).send('Server Error');
    }
}