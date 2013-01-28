var app = Davis(function ()
{
    this.get('/about', function (req) {
        hijax('about');

    })
    this.get('/', function (req) {

        hijax('');
    })
})

function hijax(route){
    console.log(route);
    $('#navigation a').removeClass('active');
    $('#'+route).addClass('active');
    $('#content_container').fadeOut(100, function()
    {
        $('#content_container').load('./'+route+' #content_container').fadeIn(100);
    });
}
app.start()
console.log('start');


