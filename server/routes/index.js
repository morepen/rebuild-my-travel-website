module.exports = function (app) {
    app.get('/',function (req,res) {
        res.redirect('/home');
    });
    app.use('/signin',require('./../controllers/signin'));
    app.use('/signup',require('./../controllers/signup'));
    app.use('/signout',require('./../controllers/signout'));
    // app.use('/usercenter',require('./../controllers/usercenter'));
    // app.use('/community',require('./../controllers/community'));
    // app.use('/usercenter',require('./../controllers/usercenter'));
    // app.use('/information',require('./../controllers/information'));
    // app.use('/destination',require('./../controllers/destination'));
}