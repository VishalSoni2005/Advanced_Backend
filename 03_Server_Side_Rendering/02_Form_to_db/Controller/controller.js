const User = require('../Model/userModel.js');

exports.home = async function (req, res) {
    const users = await User.find({});
    res.render('testHome');
}
exports.submit = async function (req, res) {
    try{
        const { name, email, password } = req.body; //* taken values from request body
        const user = new User({ name, email, password }); //* creating a new user
        await user.save(); //* saving the user in the database
    } catch(err){
        console.log(err);
    }
    res.redirect('/sucess');
}
exports.sucess = async function (req, res) {
    res.render('sucess', { User });
}