class HomeController {

    // [GET] home-page/
    index(req, res) {  
        res.render('homepage.ejs')
    }

    // [GET] home-page/login
    login(req, res) {
        res.render('login');
    }

}

module.exports = new HomeController();