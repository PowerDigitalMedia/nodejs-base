const APP_PATH = __dirname.split(process.env.APP_FOLDER)[0] + "" + process.env.APP_FOLDER + "/";
const RELEVANT_PATH = process.env.APP_FOLDER + "" + __dirname.split(process.env.APP_FOLDER)[1] +"/";
const LIBRARY_PATH = APP_PATH + "library/";
const PUBLIC_PATH = APP_PATH + "public/";


module.exports=function(app)
{


    app.get('/', (req, res) => {


        //req.headers.host : pull website database, bucket, cookie etc


	    if(req.secure 
		|| req.get('X-Forwarded-Proto') == 'https'
		) 
		{
			var http = "https://";
		}else{
			var http = "http://";
		}//#

			
		var domain = req.headers.host;
		var domArr = domain.split('.');
			 
		if(domArr.length > 2)
		{
			var main_domain = domArr[1] + "." + domArr[2];
			var sub_domain = domArr[0].split("-").join(" "); 

			var is_subdomain = true;
			var subname = domArr[0];
		}else{

			var main_domain = domain;
			var sub_domain = "NA";

			var is_subdomain = false;
			var subname = false;
		}//##
			

		var http_domain = http + domain + "/";




		var route = '';
        if(req.params[0] && req.params[0] != undefined) var route = req.params[0];
        
        /*
        //---------------------------------------------------

		var ip = req.headers['x-forwarded-for']
		|| req.connection.remoteAddress 
		|| req.socket.remoteAddress 
		|| req.connection.socket.remoteAddress;


		if(ip.match(/\,/g))
		{
			var arr = ip.split(",");

			var client_ip = arr[0].replace(/ /g, "");
			var internal_ip = arr[1].replace(/ /g, "");
		}else{
			var client_ip = ip;
			var internal_ip = 'na';
        }//##
        
        //---------------------------------------------------
        */



        var title_tag = "";

       if(route !== '') title_tag = route;
       else title_tag = "Base NodeJS (root)";


        //NOTE - variables sent here are passed to index page 
    
        res.render('index', {

            relative_public	    :"./public/",
            relative_dirname	:"",

            title_tag			:title_tag,

            meta_keywords		:"Express Base",
            meta_description	:"Sample Express App",
            meta_robots		    :"",

            favicon			    :"./public/grfx/favicon.ico"

        });


    
    })


}//modex