<div id="home" name="home" class="page print:w-full" >
  <!-- Top Navbar -->
  

<Navbar center class="hidden-print">

<NavLeft><Link href="/about/" ><i class="fa-fw fad fa-info-circle fa-2x fa-fw"></i>
                                    </Link></NavLeft>

 <div center class="text-lg"><i class="fad fa-laptop-medical fa-fw fa-2x pr-2" style="--fa-secondary-opacity: 1.0; --fa-primary-color: white; --fa-secondary-color: silver;"></i> <span class="">Medical Unit Converter</span></div>
 
 
 <NavRight>
      
      <Button class="helpme" popupOpen=".help-popup"> <i class="fa-fw fad fa-question-circle fa-2x fa-fw"></i>
                                    </Button>
      <Link href="/human/" >test
                                    </Link>                              
                                    </NavRight>

                                  </Navbar> 
                                                             
<Toolbar class="hidden-print" tabbar icons position="top">
    <Link href="/"
      tabLinkActive
      text="Human"
      routeTabId="human"
    ><i class="mb-1 fa-2x fad fa-user-md" style=" --fa-primary-color: teal; --fa-secondary-color: white;"></i></Link>

    <Link href="/vet/" routeTabId="vet" text="Veterinary"><i class="mb-1 fa-2x fad fa-paw" style=" --fa-primary-color: black;--fa-secondary-color: white;"></i> 
</Link>
    <Link href="/metric/"
      routeTabId="metric"
      text="Metric"
    ><i class="mb-1 fa-2x fad fa-pencil-ruler"  style=" --fa-primary-color: orange; --fa-secondary-color: white;"></i></Link>
  </Toolbar>

<div class="page-content py-0 hide-toolbar-on-scroll">

<div class="tabs tabs-routable">
    <div class="tab page-content" id="human"></div>
    <div class="tab page-content" id="vet"></div>
    <div class="tab page-content" id="metric"></div>
  </div>






<Popup class="help-popup" opened={popupOpened} onPopupClosed={() => (popupOpened = false)}>
    <Page>
      <Navbar title="Help">
        <NavRight>
          <Link popupClose>Close</Link>
        </NavRight>
      </Navbar>
      <Block>
        <div class="help-background"></div>
        <!-- <p class="text-center">

         <img src="../static/help.png" class="img-responsive" />
        </p> -->
      </Block>
    </Page>
  </Popup>

<Sheet class="calc-sheet" data-close-by-backdrop-click="true" data-backdrop="true" opened={sheetOpened} onSheetClosed={() => test2()} onSheetOpened={() => test()}>
    <Toolbar>
      <div class="left">Calculator</div>
      <div class="right">
        <Link sheetClose>Close</Link>
      </div>
    </Toolbar>
    <!--  Scrollable sheet content -->
    <PageContent class="calculator">
      

        
                                
                                    <div class="pb-0 md:w-3/4 md:mx-auto">
                                        <input type="" name="calculator" value="" id="myCalc" class="text-xl font-bold appearance-none w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none">
                                    </div>
                                    <div class="w-full md:w-3/4 md:mx-auto">
                                        <div id="calc-container"></div>
                                    </div>
                                
                       
  
    </PageContent>
  </Sheet>

</div>
</div>

<style>
  .holder {
    min-height: 250px;
    height: calc(100vh - 15em);
  } 

@media all and (max-width: 528px) {
  .holder {
  
    height: calc(100vh - 12em);
  } 
}
  .theme-light > input[type=number]{background:white;}
.fadrop{filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3));}
.shepherd-cancel-icon{margin-left:80px;}
.ios { --f7-navbar-large-title-height: 40px;}
.tabbar-icons .tab-link .tabbar-label{font-size:1.0rem !important;}
.tabbar a, .tabbar-icons a {color:gray !important;}
a.tab-link.tab-link-active {color:black !important;}

.calc {
  position: sticky;
top: 0px;
z-index: 20;
}
@media print {
    body {
    width: 100%;
    margin: 0;
    padding: 0;
  }
    .page, .page-content, html, body, .framework7-root, .views, .view {
        height: auto !important;
        width: 100%;
    margin: 0;
    padding: 0;
    }

    html, body, .framework7-root, .views, .view {
        overflow: visible !important;
        overflow-x: visible !important;
    }

    .page.page-previous {
        display: none;
    }
}

</style>
<script>
import { onMount } from 'svelte';
// import '../js/framework7-keypad.min.js';
  import js from 'jquery';
  import html2pdf from "html2pdf.js";
  import Shepherd from 'shepherd.js';
import VirtualList from '@sveltejs/svelte-virtual-list';
import unitsH from "../js/unitsH.js";
import unitsM from "../../js/unitsM.js";
import unitsV from "../../js/unitsV.js";
  import {f7,
  theme,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListInput,
    ListItem,
    Card,Sheet,PageContent,Popup,
    Subnavbar,Searchbar, Segmented, Button, Tabs, Tab, Icon, Fab, FabBackdrop, FabButtons, FabButton,
PhotoBrowser
  } from 'framework7-svelte';

const j7 = f7.$;


// Human
let prefix = '';
  let i = 0;
  let page = 0;
  let size = 384;
   let current = 'human';
//  let unitsH = [];
  
  $: unitsH = [
    ...unitsH,
    ...unitsHuman.slice(size * page, size * (page + 1))
  ];
  function setBothFromSIH(value, i) {
    const {factor, siValue} = unitsH[i];
    unitsH[i].siValue = +value;
    unitsH[i].usValue = +(value / factor).toFixed(2);
  }
  function setBothFromUSH(value, i) {
    const {factor, usValue} = unitsH[i];
    unitsH[i].usValue = +value;
    unitsH[i].siValue = +(value * factor).toFixed(2);;
  }
 function setBothFromSIH2(value, i) {
    const {factor, siValue} = unitsH[i];
    unitsH[i].siValue = +value;
    unitsH[i].usValue = +((2.15 + (value / 10.929))).toFixed(1);
  }
  function setBothFromUSH2(value, i) {
    const {factor, usValue} = unitsH[i];
    unitsH[i].usValue = +value;
    unitsH[i].siValue = +( (10.929 * (value - 2.15))).toFixed(1);
  }


$: filteredUnitsH = prefix
    ? unitsH.filter(unitH => {
      const names = `${unitH.name}`;
      return names.toLowerCase().startsWith(prefix.toLowerCase());
    })
    : unitsH;
$: selected = filteredUnitsH[i];

 function searchAll(query, items) {
    const found = [];
    for (let i = 0; i < unitsH.length; i += 1) {
      if (unitsH[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
    }
    return found; // return array with mathced indexes
  }

 let searchTerm = "";
   let searchbar;
  let isBottom = true;
 let sheetOpened = false;
  let sheet;
  let sheet2;
let myCalculator;
let standalone;

  let popupOpened = false;







  function createSheet() {
    const $ = f7.$;
    // Create sheet modal
    if (!sheet2) {
      sheet2 = f7.sheet.create({
        content: `
          <div class="calc-sheet sheet-modal sheet-modal-bottom">
            <div class="toolbar">
              <div class="toolbar-inner">
                <div class="left">Calculator</div>
                <a  class="right link sheet-close">Close</a>
              </div>
            </div>
            <div class="sheet-modal-inner">
              <div class="page-content calc">
                
                  <div class="pb-0 md:w-1/3 md:mx-auto">
                                        <input type="" name="calculator" value="" id="myCalc" class="text-xl font-bold appearance-none w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none">
                                    </div>
                                    <div class="w-full md:w-1/3 md:mx-auto">
                                        <div id="calc-container"></div>
                                    </div>
                
              </div>
            </div>
          </div>
        `.trim(),
        on: {
    open: function () {
if (!myCalculator) {
         myCalculator = f7.keypad.create({
        inputEl: '#myCalc',
        containerEl: '#calc-container',
        toolbar: false,
        dotButton: true,
        type: 'calculator'
    });
     }
      console.log('Sheet opened')
    },
    close: function () {

        if (myCalculator) myCalculator.destroy();

  
      console.log('Sheet closed')
    }
  }
      });
    }
    sheet2.open();
}





function reset(){

js("input.drug").each(function(){
      js(this).val(js(this).data("original-value"));
      });
     
}




$: filteredUnitsH = prefix
    ? unitsH.filter(unitH => {
      const names = `${unitH.name}`;
      return names.toLowerCase().startsWith(prefix.toLowerCase());
    })
    : unitsH;
$: selected = filteredUnitsH[i];

// End Human


// Veterinary

 let searchTermV = "";
  
$: filteredListV = unitsV.filter(item => item.name.toLowerCase().indexOf(searchTermV.toLowerCase()) !== -1);

 
    //let prefix = '';
 // let i = 0;

  
  function setBothFromSIV(value, i) {
    const {factor, siValue} = filteredListV[i];
    filteredListV[i].siValue = +value;
    filteredListV[i].usValue = +(value / factor).toFixed(2);
  }
  function setBothFromUSV(value, i) {
    const {factor, usValue} = filteredListV[i];
    filteredListV[i].usValue = +value;
    filteredListV[i].siValue = +(value * factor).toFixed(2);
  }
// End Veterinary
// Metric

        
        
      


  // let prefix = '';
  // let i = 0;
let searchTermM = "";
  // f7.on('tabShow','#metric1', (tabEl) => {
    $: filteredListM = unitsM.filter(item => item.name.toLowerCase().indexOf(searchTermM.toLowerCase()) !== -1);

  function setBothFromSIM(value, i) {
    const {factor, siValue} = filteredListM[i];
    filteredListM[i].siValue = +value;
    filteredListM[i].usValue = +(value / factor).toFixed(2);
  }
  function setBothFromUSM(value, i) {
    const {factor, usValue} = filteredListM[i];
    filteredListM[i].usValue = +value;
    filteredListM[i].siValue = +(value * factor).toFixed(2);;
  }

 // });

// End Metric


const tabs = () => {
    // On tab show, save the active tab in local storage
    js(document).on("tabShow",".tab", function() {
        localStorage.setItem("activeTab", js(this).attr("id"));
        console.log('tab:show');
    });

    // If there is an active tab in local storage, show it
    const activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
        f7.tab.show(`#${activeTab}`);
        console.log(activeTab);
    }
}

tabs();

 setTimeout(function() {
        if (typeof Storage !== "undefined") {
            var n = Number(window.localStorage.getItem("counter15"));
            if (n === null) {
                n = 0;
            }
            n++;
            localStorage.setItem("counter15", n);
            if (n == 12) {
                Capacitor.Plugins.RateApp.requestReview();
            } else {
                console.log("Count=" + n);
            }
        }
       
    }, 500);

 // js(document).on("click", ".sharevet", function() {
 //                setTimeout(function() {
 //                     if (f7.device.ios) {
 //                    Capacitor.Plugins.Share.share({
 //                        title: "Medical Unit Calculator",
 //                        text: "Convert Medical US Units SI Units",
 //                        url: "https://apps.apple.com/us/app/medical-unit-converter/id1497170729",
 //                        dialogTitle: "Medical Unit Calculator App"
 //                    });
 //                     } else if (f7.device.android) {
 //                         Capacitor.Plugins.Share.share({
 //                           title: "Medical Unit Calculator",
 //                           text: "Convert Medical US Units SI Units",
 //                           url: "https://play.google.com/store/apps/details?id=com.vetcalculators.android",
 //                           dialogTitle: "Medical Unit Calculator App",
 //                         });
 //                     }
 //                }, 200);
 //            });

// HELP

//   const tour = new Shepherd.Tour({
//       defaultStepOptions: {
//         cancelIcon: {
//       enabled: true
//     },
//          scrollTo: false,
         
//       },
//        useModalOverlay: true
//     });



// tour.addStep({
//   title:'Unit Converter',
//   id: 'example-step',
//   text: 'Medical Unit Converter easily converts between US and International units. Enter a value in either the US or International input area and it will immediately be converted. Easily search for individual lab tests by typing in the name of the test.',
//   classes: 'mt-4',
//    buttons: [
//         {
//           action: tour.back,
//           classes: 'shepherd-button-secondary',
//           text: 'Back'
//         }, {
//           action: tour.next,
//           text: 'Next'
//         }
//       ]
// });
// tour.addStep({
//   title:'Search',
//   id: 'example-step0',
//   text: 'Search here to filter medical tests.',
//   classes: 'mt-4',
//   attachTo: { element: '.searchbar', on: 'bottom' },
//    buttons: [
//         {
//           action: tour.back,
//           classes: 'shepherd-button-secondary',
//           text: 'Back'
//         }, {
//           action: tour.next,
//           text: 'Next'
//         }
//       ]
// });
// tour.addStep({
//   title:'Numeric Calculator',
//   id: 'example-step00',
//   text: 'Click open a Numeric calculator',
//   classes: 'mt-4',
//   attachTo: { element: '.ml-2.link', on: 'bottom' },
//    buttons: [
//         {
//           action: tour.back,
//           classes: 'shepherd-button-secondary',
//           text: 'Back'
//         }, {
//           action: tour.next,
//           text: 'Next'
//         }
//       ]
// });
// tour.addStep({
//   title:'Reset Inputs',
//   id: 'example-step1',
//   text: 'Click to reset all inputs to default values',
//   classes: 'mt-4',
//   attachTo: { element: '.resetme', on: 'bottom' },
//    buttons: [
//         {
//           action: tour.back,
//           classes: 'shepherd-button-secondary',
//           text: 'Back'
//         }, {
//           action: tour.next,
//           text: 'Next'
//         }
//       ]
// });
// tour.addStep({
//   title:'Print Page',
//   id: 'example-step2',
//   text: 'Click to print Page',
//   classes: 'mt-4',
//   attachTo: { element: '.printme', on: 'bottom' },
//    buttons: [
//         {
//           action: tour.back,
//           classes: 'shepherd-button-secondary',
//           text: 'Back'
//         }, {
//           action: tour.next,
//           text: 'Next'
//         }
//       ]
// });
// tour.addStep({
//   title:'Drug Info',
//   id: 'example-step3',
//   text: 'Drug name, specimen required and conversion factor used.',
//   attachTo: { element: '.item-name', on: 'bottom' },
//   buttons: [
//   {
//           action: tour.back,
//           classes: 'shepherd-button-secondary',
//           text: 'Back'
//         },
//     {
//       text: 'Next',
//       action: tour.next
//     }
//   ]
// });
//  tour.addStep({
//   title:'US Units',
//   id: 'example-step4',
//   text: 'US results value and normal range. Enter a value to convert to IU result',
//   classes: 'mt-4',
//   attachTo: { element: '.input-us', on: 'bottom' },
//   buttons: [
//   {
//           action: tour.back,
//           classes: 'shepherd-button-secondary',
//           text: 'Back'
//         },
//     {
//       text: 'Next',
//       action: tour.next
//     }
//   ]
// });
//    tour.addStep({
//     title:'IU Units',
//   id: 'example-step5',
//   text: 'IU results value and normal range. Enter a value to convert to US result',
//   classes: 'mt-4',
//   attachTo: { element: '.input-si', on: 'bottom' },
//   buttons: [
//   {
//           action: tour.back,
//           classes: 'shepherd-button-secondary',
//           text: 'Back'
//         },
//     {
//       text: 'Done',
//       action: tour.next
//     }
//   ]
// });

// function showHelp() {tour.start();}


            setTimeout(function() {
// js('.page-content').addClass('bg-cover bg-opacity-75 bg-blue-400')
            }, 500);    

function iagree() {
    js(function(js) {
        var checked = localStorage.getItem("agree");
        if (checked) {
            js("#agree").prop("checked", true);
           
        } else {
            js("#agree").prop("checked", false);
            
           setTimeout(function() {
                f7.popup.open("#legal-popup");
            }, 4000);
        }
        // Toggle the visibility
        js("#agree").on("change", function() {
            this.checked ? localStorage.setItem(this.id, true) : localStorage.removeItem(this.id);
        });
    });
}
iagree();
    // function iagree() {
    //     const agreeCheckbox = js("#agree");
    //     const isAgreed = Boolean(localStorage.getItem("agree"));

    //     agreeCheckbox.prop("checked", isAgreed);

    //     if (!isAgreed) {
    //         setTimeout(function() {
    //             f7.popup.open("#legal-popup");
    //         }, 4000); // better readability
    //     }

    //     agreeCheckbox.on("change", function() {
    //         if (this.checked) {
    //             localStorage.setItem(this.id, true);
    //         } else {
    //             localStorage.removeItem(this.id);
    //         }
    //     });
    // }

  
  
js(document).on("click", ".printme", function(e) {
    e.preventDefault();

    const printLink = js(this).data("print");
    const gridElement = js(`#${printLink}`);
    const printableContent = js('<div>').attr('id', printLink).addClass('printthis')
        .append(gridElement.clone())
        .html();

    // Set value to each input.
    js("input").each(function() {
        js(this).attr("value", js(this).val());
    });

    const cssRules = `html.device-full-viewport, html.device-full-viewport body {
        height:100vh !important;
        width:100% !important;
    }

    .print\\:blocked {
        display: block;
    }

    /* Other CSS Rules here... */

    body {
        width: 21cm;
    }

    .hidden-print {
        display:none !important;
    }

    #${printLink} {
        width: 100%; 
        height: 100%; 
        margin: 0px !important; 
        padding: 0px !important;
    } 

    html, body {
        width: 100%; 
        height: 100%; 
        margin: 0px !important; 
        padding: 0px !important;
    }`;

    const htmlContent = `
        <style type="text/css">
            @media print {
                ${cssRules}
            }
        </style>
        <div style="height:100vh !important;width:100% !important;">
            ${printableContent}
        </div>
    `;

    setTimeout(function() {
        window.cordova.plugins.printer.print()
        // window.cordova.plugins.printer.print(printableContent, {
        //     header: {
        //         height: '7mm',
        //         labels: [{
        //             text: 'Medical Conversion'
        //         }]
        //     }
        // });
        // console.log(htmlContent)
    }, 600);
});



    

</script>