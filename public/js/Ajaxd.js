
function Ajaxd(){
    
    
    //var href = window.location.href;                //returns the href (URL) of the current page
    var hostname = window.location.hostname;        //returns the domain name of the web host
    //var pathname = window.location.pathname;        //returns the path and filename of the current page
    var protocol = window.location.protocol;        //returns the web protocol used (http: or https:)
    //var assign = window.location.assign; //loads a new document
    var port =  window.location.port;


    /*
    alert(
        "HREF         : "+href
        +"\nHOSTNAME  : "+hostname
        +"\nPATHNAME  : "+pathname
        +"\nPROTOCOL  : "+protocol
        +"\nASSIGN    : "+assign
    );
    */

    //====================================================

    //alert("PORT: "+port);

    if(hostname == 'localhost') var hostname = hostname+":"+port;

    var http_domain = protocol + "//" + hostname + "/";
    var url = http_domain + 'ajaxd';

    //====================================================

    var data = {

        "myVar":"Hello World!"

    };

    //====================================================
    //SET AJAX POST
    //====================================================
        
    var splitter = "-|AJXPST|-"
    var amp = "&";

    var ajaxPost = ""
    + "ajaxArr[]=call" + splitter + "A" + amp
    + "ajaxArr[]=callb" + splitter + "B" + amp
    + "ajaxArr[]=data" + splitter + JSON.stringify(data);


    //=====================================================
    //AJAX REQUEST
    //=====================================================
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, true);//asynchronous
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange=function(){
    
        if(xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var xrt = xmlhttp.responseText;
            //alert(xrt);

            var obj = JSON.parse(xrt);
            alert("RESULT: \n"+JSON.stringify(obj));

        
           
        }
    }
    xmlhttp.send(ajaxPost);

    
    
}//func
//=====








