module.exports =

    (function(){
        // console.log(app.get);
        global.app.get('/about',
            function(req, res)
            {

                res.locals.title="About";
                res.render('about');


            }
        );
    })();