
const greetingController = {

    morning: (req, res) => {
        res.render('morning', { title: 'Good Morning' });
    },
    evening: (req, res) => {
        res.render('evening', { title: 'Good Evening' });
    },
    night: (req, res) => {
        res.render('night', { title: 'Good Night' });
    },
    makeEntry: (req, res) => {
        res.render('Entry', { title: 'Entry' });
    },
    entry: (req, res) => {
        res.redirect('morning');
        // Add entry to the database here
        // Example: db.collection('entries').insertOne({...req.body });
        // req.flash('success', 'Entry added successfully!');
        // res.redirect('/entry');
        // OR
        // res.redirect('back'); // Go back to the previous page
    }
}

module.exports = greetingController;