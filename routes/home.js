module.exports =

    (function(){
        // console.log(app.get);
        global.app.get('/',
            function(req, res)
            {

                res.locals.title="Home";
                res.render('index');

            }
        );
    })();