 document.addEventListener("deviceready", onDeviceReady, false);




            function onDeviceReady() {


// var admobid = {}
// if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
//   admobid = {
//     banner: 'ca-app-pub-4168315944025657/7432846587',
//     interstitial: 'ca-app-pub-4168315944025657/3685173268',
//   }
// } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
//   admobid = {
//     banner: 'ca-app-pub-4168315944025657/7432846587',
//     interstitial: 'ca-app-pub-4168315944025657/3685173268',
//   }
// }


//   admob.banner.config({
//     id: admobid.banner,
//     isTesting: true,
//     autoShow: true,
//   })
//   admob.banner.prepare()

//   admob.interstitial.config({
//     id: admobid.interstitial,
//     isTesting: true,
//     autoShow: false,
//   })
//   admob.interstitial.prepare()

//     admob.interstitial.show()
 

$(document).on("click", ".printme", function() {


        $('input').each(function() {
            var val = $(this).val();
            $(this).attr('value', val);
        });
        $(this).each(function(index) {

            var printLink = $(this).data("print");
            var gridElement = $("#" + printLink);
            var clonePrint = $(gridElement).clone();
            var printableContent = "";
            var printableContent = $("<div id=" + printLink + "'printthis'>").append(clonePrint).html();

            var found = $(printableContent).filter("#" + printLink);
            //console.log(found)
            //$(found).find("img.convert").attr("src", cordova.file.applicationDirectory + "www/" + $(this).attr("src"));

            //var printableContent = $(clonePrint).html().appendTo("<div id='print'>");
            var htmlContent = '<!DOCTYPE html><head><meta charset="utf-8" /><link rel="stylesheet" href="' + cordova.file.applicationDirectory + 'www/css/framework7.bundle.min.css"><link rel="stylesheet" href="' + cordova.file.applicationDirectory + 'www/css/app.css"><link rel="stylesheet" href="' + cordova.file.applicationDirectory + 'www/css/print.css"><link rel="stylesheet" media="all" href="' + cordova.file.applicationDirectory + 'www/css/output.css"><style>body{width: 21cm;height: calc(100% - 10px); } body {position: static;overflow: initial;}.hidden-print{display:none !important;}.dosage, .load, .total, .vol {background: #eeeeee !important;} #' + printLink + '{position: relative;overflow:visible!important;} html, body {width: 100%; height: 100%; margin: 0px; padding: 0px;}body { transform: scale(0.95); }.form-select {background-image:none;}#chart svg{width:100%;}.chart-container{width:640px; height:480px;}.bb svg {transform: scale(1.2,1.2);}.holder{height:100%}</style></head><body>' + printableContent + '</body></html>';

            setTimeout(() => {
                cordova.plugins.printer.print(htmlContent, { name: printLink, border: false }, function() {
console.log('Cordova Print');
                });
            }, 500);
            console.log(htmlContent);

        });
        //console.log('Print Clicked');
    });






                
            }