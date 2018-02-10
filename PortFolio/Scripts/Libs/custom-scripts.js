/// <reference path="../../Login.html" />
/// <reference path="../../Login.html" />
/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";

   
        
$(document).ready(function () {
    var Authenticated = AppCommon.Common.GetStorage('AuthenticationToken');
    if (Authenticated.length < 2) {
        location.href = "../default.html";
    } 
    else {
        //var MenuId = AppCommon.Common.GetStorage('MenuId');
        //if (MenuId.length > 0) {
        //    var url = window.location.href;
        //    var n = url.lastIndexOf('/');
        //    var routeParameter = url.substring(n + 1);
        //    if (routeParameter == "") {
        //        $('li').removeClass("active");
        //    } else {
        //        $('li').removeClass("active");
        //        $("#" + MenuId).addClass("active");
        //    }            
        //}
        GetSelection();
        //mainApp.initFunction();
    }

});

//Call When Header Button is pressed or Back Button is Pressed
$(window).on('popstate', function (event) {

    GetSelection();
   
});

$('#nav').affix({
    offset: {
        top: $('header').height()
    }
});


    //get headerMenuId based on index Present in array AppCommon.PortalMenus 
function GetMenuId (Index)
{
    var MenuId = "";
    switch(Index)
    {
        case 0:
            MenuId = "#2Q";
            break;
        case 1:
            MenuId = "#2R1";
            break;
        case 2:
            MenuId = "#2R2";
            break;
        case 3:
            MenuId = "#3F";
            break;
    }

    return MenuId;
}


//Enable and disable the header active class 
function GetSelection()
{
    var UrlVar = getUrlVars();
    var Page = UrlVar[0][0];
    if (UrlVar[0][1] != undefined && (Page=="2R"|| Page=="2U" ))
    {
        Page = Page+ UrlVar[0][1].split('=')[1];
    }
    $('#nav ul li').removeClass("active");
    $.each(AppCommon.PortalMenus, function (key, obj) {
        if ($.inArray(Page, obj) !== -1)
            $(GetMenuId(key)).addClass("active");

    });


}


//Get URL parameters
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        if (!i)
        {
            var val = hashes[i].replace('/', '').split('?');
            vars[i] = val;

        }
        else
        {

            hash = hashes[i].split('?');
            var Formattedval = hash[0].split('=');
            vars[i]= Formattedval[1];
 }
       
    }
    return vars;
}



//$('#nav ul li').click(function () {
//    $('li').removeClass("active");
//    AppCommon.Common.SetStorage(AppSetting.LocalStore.CurrentMenuId, this.id);
//    $(this).addClass("active");
//});

}(jQuery));

