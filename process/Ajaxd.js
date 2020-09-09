

module.exports=function(app)
{


    app.post('/ajaxd', function (req, res) {


        console.log("============== Ajaxd ================");
        console.log("STATUS CODE: "+res.statusCode);
        console.log("BODY: "+req.body);
    
        var ajaxObj = {};
        var ajaxArr = req.body["ajaxArr"];
        for(var i=0; i < ajaxArr.length; i++)
        {
            var keyval = ajaxArr[i];
            var kv = keyval.split("-|AJXPST|-");
            var key = kv[0];
            var val = kv[1];
    
            ajaxObj[key]=val;
    
        }//==
    
        console.log("AJAX OBJ: "+JSON.stringify(ajaxObj, null, 2));
    

        var data = JSON.parse(ajaxObj['data']);//parses stringify data
        res.send(data);



    });//post
    
    
    

}//==modex

