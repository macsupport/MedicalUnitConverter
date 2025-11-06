<div id="home" name="home" class="page page-with-subnavbar print:w-full" >
  <!-- Top Navbar -->
  

<Navbar center class="hidden-print" sliding="{false}">

<NavLeft><Link class="icon-only" href="/about/" ><i class="fa-fw fad fa-info-circle fa-2x fa-fw"></i>
                                    </Link></NavLeft>

 <div center class="title text-lg"><img class="inline-flex img-responsive mr-1" src="icon-500.png" style="width:40px; height:100%;"/> <span class="text-lg font-bold">Medical Unit Converter</span></div>
 
 
 <NavRight>
      
      <Button class="helpme icon-only" popupOpen=".help-popup"> <i class="fa-fw fad fa-question-circle fa-2x fa-fw"></i>
                                    </Button>
      <!-- <Link href="/human/" >test
                                    </Link>                               -->
                                    </NavRight>

                                  <Subnavbar>
      <Searchbar class="w-full md:w-1/2 md:mx-auto"
        searchContainer=".unitsH"
        searchItem=".eachTest"
        searchIn=".name"
      ></Searchbar>
    </Subnavbar>


</Navbar>

<div class="toolbar md:justify-around toolbar-top hidden-print" style="margin-top: 2.85rem;">
  <div class="toolbar-inner">
    <a href="/vet/" class="link px-2"><i class="mr-1 fa-2x fad fa-paw" style=" --fa-primary-color: black;--fa-secondary-color: white;"></i> Veterinary Units</a>
    <a href="/metric/" class="link px-2"><i class="mr-1 fa-2x fad fa-pencil-ruler"  style=" --fa-primary-color: orange; --fa-secondary-color: white;"></i> Metric Units</a>
  </div>
</div>





<div class="page-content px-2">

<div class="w-full mx-auto bg-color-white print:w-full">

<div id="humanHeader" class="my-2 bg-gray-100 border rounded flex md:w-11/12 mx-auto p-2 print:w-full"><div class="w-1/2 md:w-2/3 text-black font-semibold text-lg">  Human Lab Values <div class="text-sm">SI <i class="fas fa-lg mx-2 fa-arrows-left-right-to-line hidden-print"></i> US Units</div></div>
<div class="w-1/2 md:w-1/3 flex" style="justify-content: space-around;"><Link class="hidden-print" onClick={createSheet}> <i class="fad fa-calculator fa-2x fa-fw"></i>
<div class="text-sm"></div></Link>
  <a class="resetme hidden-print" href="#"  on:click={() =>{reset()}}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-2x fa-fw mt-2"></i></span></a>    <a class="hidden-print" data-print="human" href="#" on:click={handlePrintButtonClick}><i class="fad fa-print fa-2x fa-fw mt-2"></i></a></div></div> 


<hr/><div id="human" class="w-full mt-2 printthis px-1 holderx md:w-11/12 md:mx-auto print:w-full">
<div class="xs:hidden inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap md:mx-auto print:block bg-gray-300 dark:bg-gray-700">
<div class="md:w-1/2 font-bold text-base inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">Name </div>
<div class="md:w-1/4 font-bold text-base inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">US Units</div>
<div class="md:w-1/4 font-bold text-base inline-flex print:inline-flex print:w-2/12  print:overflow-hidden print:text-black">SI Units</div></div>
 <div class="unitsH mb-4 divide-y divide-gray-300">



<!-- <VirtualList itemHeight={72} bind:start bind:end items={filteredList}  let:item class=""> -->
   {#each filteredList as item, i}
  <!-- this will be rendered for each currently visible item -->
 <div class="eachTest py-1 mb-1 print:mb-0 print:py-0">


 <div class="flex flex-wrap sm:px-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2" >
            
              <div class="font-bold text-black text-lg name">{@html item.name}</div>
             <span class="text-gray-900 text-sm pt-1"><span class="font-semibold">Specimen:</span> {item.specimen} </span>
         <span class="pl-3 text-gray-900 text-sm"> <span class="font-semibold">Conversion Factor:</span> {item.factor} </span>
            
  </div>
  <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4">
  <label class="text-gray-900 text-sm mb-1 pr-1" for="grid-first-name">
        US Range:{@html item.conventionalRange} {@html item.conventionalUnit}
      </label>

      {#if item.alternate === "true"}  <input class="md:w-2/3 drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredList.indexOf(item)}" data-original-value={item.originalusValue} bind:value={item.usValue} on:input="{e => setBothFromUSH2(e.target.value, filteredList.indexOf(item))}"  type=number placeholder=" US"/>{:else}
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredList.indexOf(item)}" data-original-value={item.originalusValue} bind:value={item.usValue} on:input="{e => setBothFromUSH(e.target.value, filteredList.indexOf(item))}"  type=number placeholder=" US"/>
{/if}
             </div>

 <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4">
 <label class="text-gray-900 text-sm mb-1" for="grid-first-name">
        SI Range: {@html item.siRange} {@html item.siUnit}
      </label>
      {#if item.alternate === "true"} <input class="md:w-2/3 drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredList.indexOf(item)}" data-original-value={item.originalsiValue} bind:value={item.siValue} on:input="{e => setBothFromSIH2(e.target.value, filteredList.indexOf(item))}" type=number placeholder="SI"/>{:else}
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredList.indexOf(item)}" data-original-value={item.originalsiValue} bind:value={item.siValue} on:input="{e => setBothFromSIH(e.target.value, filteredList.indexOf(item))}" type=number placeholder="SI"/>
{/if}
</div>

 
 
 
 </div> 
</div>
{/each}

   
   
   

  </div>  

  
   </div>
 <!-- Popup -->
  <!-- <Popup id="legal-popup">
  
      <Page>
        <Navbar title="Legal Notices and Disclaimer">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
         
                                    <p style="font-size: 11px;"> All information contained in and produced by Medical Unit Calculator is provided for educational purposes only. This information should not be used for the diagnosis or treatment of any health problem or disease. THIS INFORMATION
                                        IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE in any manner. It is solely a guide and <strong>each result should be thoroughly researched and checked for accuracy and the specific dose given should be based on the Doctor's or Veterinarian's current physical exam as well as the patients age, medical history and current health status</strong>.
                                        The User is hereby notified that the information contained herein may not meet the user's needs. The User is advised that, although the information is derived from medical research and literature we cannot guarantee
                                        its correctness, comprehensiveness or currency. The User of this software assumes sole responsibility for any decisions made or actions taken based on the information contained in Medical Unit Converter. Neither
                                        Vetcalculators LLC, the system's authors nor any other party involved in the preparation, publication or distribution of the Medical Unit Calculator APP shall be liable for any special, consequential, or exemplary
                                        damages resulting in whole or part from any User's use of or reliance upon this system and the information contained within. Vetcalculators LLC disclaims all warranties regarding such information whether
                                        express or implied, including any warranty as to the quality, accuracy, currency or suitability of this information for any particular purpose. Vetcalculators and the system's authors, developers
                                        and distributors assume no responsibility for any erroneous results due to defects in the system. ACCESS TO AND USE OF THE MEDICAL UNIT CALCULATORS IS PROVIDED WITHOUT WARRANTY OF MERCHANTABILITY OR FITNESS FOR
                                        ANY PARTICULAR PURPOSE OR ANY OTHER WARRANTY, EXPRESS OR IMPLIED. In no event shall the Vetcalculators LLC be liable for special, direct, indirect or consequential damages, charges, claims, costs,
                                        demands, losses fees or expenses of any nature or kind arising from use of the Medical Unit Calculator. By using the Medical Unit Calculator App, documentation and/or any software found therein, the User agrees to abide
                                        by United States and International copyright laws and all other applicable laws involving copyright.</p>
                                    <br>


                                    <Block strongIos outlineIos>
  
   
      <input class="h-6 w-6 mb-4" type="checkbox" id="agree"  name="agree" value="true" />
      I agree to Terms
  
 
    <p class="mt-2"><button id="agreeclose" class="link popup-close button button-fill" title="Close Window">Close this Window</button></p>
  </Block>
                                    
                   <p> © Vetcalculators LLC, 2023 - v1.6.1 <span class="right"><a class="external" title="Privacy Policy" href="http://vetcalculators.com/privacy_policy.html" target="_system">Privacy Policy</a></span></p>              
        </Block>
      </Page>
    
  </Popup> -->


  <!-- Popup -->
  <Popup id="about-popup">
  
      <Page>
        <Navbar title="About Unit Conversion">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block class="p-3">

<Link class="legal mb-2" popupOpen="#legal-popup"  > <i class="fa-fw fad fa-balance-scale fa-2x fa-fw"></i>
                                    <div class="text-lg">Legal Information</div></Link>

        <p class="mb-2 p-2">The Système Internationale d’Unites (SI), or the International System of Units was recommended for use in the health professions by the World Health Assembly in 1977. This system is slowly being adopted in the United States and many journals now require its use.</p>
<p class="mb-2">Medical Unit Converter easily converts between US and International Human and Veterinary Medical units and Metric values. Enter a value in either the US or International input area and it will immediately be converted. Easily search for individual lab tests by typing in the name of the test. </p>
<p class="mb-2"> The laboratory values and reference ranges are provided for illustration only and are not intended to be comprehensive or definitive. Each laboratory determines its own values, and reference ranges are highly method dependent.</p>
<strong>The conversion factors are derived from the current literature and have been applied as published. Therefore, we cannot take any responsibility for their validity.</strong>
<strong>Each calculation should be thoroughly researched and checked for accuracy.</strong>.  <strong>Vetcalculators LLC is not responsible for any errors in calculations based on this calculator.</strong>
<p><a class="button external link button-raised bg-color-teal color-white" href="mailto:info@vetcalculators.com" target="_system">Contact</a></p>
 <p class="font-bold">Human References</p> 
 <div class="p-3"><ol class="p-2" style="list-style-type: decimal;">
   <li> Kratz A, Ferraro M, Sluss PM, Lewandrowski KB. Laboratory reference values. N Engl J Med. 2004;351(15):1548-1563</li>
   <li> Young DS, Huth EJ. SI Units for Clinical Measurement. Philadelphia, PA: American College of Physicians; 1998</li>
   <li> Henry JB, ed. Clinical Diagnosis and Management by Laboratory Methods. 20th ed. Philadelphia, PA: WB Saunders; 2001</li>
   <li>Kasper DL, Braunwald E, Fauci AS, et al, eds. Harrison's Principles of Internal Medicine, 16th ed. New York, NY: McGraw Hill; 2004</li>
   <li>Goldman L, Ausiello D. Cecil Textbook of Medicine. 22nd ed. Philadelphia, PA: WB Saunders; 2004</li>
 </ol>
 <p class="font-bold">Veterinary References</p>
 <ol style="list-style-type: decimal;">
   <li>Latimer KS, Duncan & Prasse’s Veterinary Laboratory Medicine: Clinical Pathology, 5th Ed., Wiley-Blackwell, 2011</li>
   <li>Kaneko JJ, Harvey JW, Bruss ML, Clinical Biochemistry of Domestic Animals, 6th Ed., Academic Press, 2008</li>
  
 </ol></div> 
 

  <p>© Vetcalculators LLC, 2025 - v2.2.0<span class="right"><a class="external button" title="Privacy Policy" href="http://vetcalculators.com/privacy_policy.html">Privacy Policy</a></span></p>
        </Block>
      </Page>
   
  </Popup>
<Popup class="help-popup" opened={popupOpened} onPopupClosed={() => (popupOpened = false)}>
    <Page>
      <Navbar title="Help">
        <NavRight>
          <Link popupClose>Close</Link>
        </NavRight>
      </Navbar>
      <Block>
        <!-- <div class="help-background"></div> -->
        <p class="text-center">

         <img src="images/help.png" class="img-responsive" />
        </p>
      </Block>
    </Page>
  </Popup>

<Sheet class="calc-sheet" data-close-by-backdrop-click="true" data-backdrop="true" opened={sheetOpened}>
    <Toolbar>
      <div class="left">Calculator</div>
      <div class="right">
        <Link sheetClose>Close</Link>
      </div>
    </Toolbar>
    <!--  Scrollable sheet content -->
    <div class="calculator">                             
                                    <div class="pb-0 md:w-3/4 md:mx-auto">
                                        <input type="" name="calculator" value="" id="myCalc" class="text-xl font-bold appearance-none w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none">
                                    </div>
                                    <div class="w-full md:w-3/4 md:mx-auto">
                                        <div id="calc-container"></div>
                                    </div>                     
  
    </div>
  </Sheet>

</div>
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
#humanHeader{
 position: sticky;
top: 0px;
z-index: 20;
background-color: white;
}
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
import VirtualList from '@sveltejs/svelte-virtual-list';
  import js from 'jquery';
import unitsH from "../js/unitsH.js";
import { Printer } from '@capawesome-team/capacitor-printer';
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
let start;
  let end;
 let page = 0;
  let size = 384;
 let searchTerm = "";

 let sheetOpened = false;

  let sheet2;
let myCalculator;


  let popupOpened = false;
//    let unitsH = [];

// async function fetchData() {
//     try {
//       const response = await fetch('https://medical-units.vetcalculators.workers.dev/');
      
//       if (response.ok) {
//         // If the response is successful (status code 200), parse the JSON data
//         const data = await response.json();
//         unitsH = data; // Assign the fetched data to the unitsH variable
//       } else {
//         // Handle error if the response is not successful
//         console.error('Failed to fetch data:', response.statusText);
//       }
//     } catch (error) {
//       // Handle network or other errors
//       console.error('Error fetching data:', error);
//     }
//   }

//   fetchData();


// js("#searchInputH").on('keypress', function (e) {
//   if (e.key === 'Enter') {
//     Capacitor.Plugins.Keyboard.hide();
//   }
// });


$: filteredList = unitsH.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

 function setBothFromSIH(value, i) {
    const {factor, siValue} = filteredList[i];
    filteredList[i].siValue = +value;
    filteredList[i].usValue = +(value / factor).toFixed(2);
  }
  function setBothFromUSH(value, i) {
    const {factor, usValue} = filteredList[i];
    filteredList[i].usValue = +value;
    filteredList[i].siValue = +(value * factor).toFixed(2);
  }


  function setBothFromSIH2(value, i) {
    const {factor, siValue} = filteredList[i];
    filteredList[i].siValue = +value;
    filteredList[i].usValue = +((2.15 + (value / 10.929))).toFixed(1);
  }
  function setBothFromUSH2(value, i) {
    const {factor, usValue} = filteredList[i];
    filteredList[i].usValue = +value;
    filteredList[i].siValue = +( (10.929 * (value - 2.15))).toFixed(1);
  }

function reset(){
searchTerm = "";
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
              <div class="calc">
                
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
            var n = Number(window.localStorage.getItem("counter8"));
            if (n === null) {
                n = 0;
            }
            n++;
            localStorage.setItem("counter8", n);
            if (n == 8) {
                Capacitor.Plugins.RateApp.requestReview();
            } else {
                console.log("Count=" + n);
            }
        }
       
    }, 500);

 js(document).on("click", ".sharevet", function() {
                setTimeout(function() {
                     if (f7.device.ios) {
                    Capacitor.Plugins.Share.share({
                        title: "Medical Unit Calculator",
                        text: "Convert Medical US to SI Units",
                        url: "https://apps.apple.com/us/app/medical-unit-converter/id1497170729",
                        dialogTitle: "Medical Unit Calculator App"
                    });
                     } else if (f7.device.android) {
                         Capacitor.Plugins.Share.share({
                           title: "Medical Unit Calculator",
                           text: "Convert Medical US to SI Units",
                           url: "https://play.google.com/store/apps/details?id=com.vetcalculators.android",
                           dialogTitle: "Medical Unit Calculator App",
                         });
                     }
                }, 200);
            });



 

const handlePrintButtonClick = async (e) => {
  if (e) {
    e.preventDefault();
  }

  console.log("print clicked");

  try {

     await Printer.printWebView({
       name: "VetDrugs",
     });
  } catch (error) {
    console.error("Print error:", error);
  }
};
  
  
// js(document).on("click", ".printme", function(e) {
//     e.preventDefault();

//     const printLink = js(this).data("print");
//     const gridElement = js(`#${printLink}`);
//     const printableContent = js('<div>').attr('id', printLink).addClass('printthis')
//         .append(gridElement.clone())
//         .html();

//     // Set value to each input.
//     js("input").each(function() {
//         js(this).attr("value", js(this).val());
//     });

//     const cssRules = `html.device-full-viewport, html.device-full-viewport body {
//         height:100vh !important;
//         width:100% !important;
//     }

//     .print\\:blocked {
//         display: block;
//     }

//     /* Other CSS Rules here... */

//     body {
//         width: 21cm;
//     }

//     .hidden-print {
//         display:none !important;
//     }

//     #${printLink} {
//         width: 100%; 
//         height: 100%; 
//         margin: 0px !important; 
//         padding: 0px !important;
//     } 

//     html, body {
//         width: 100%; 
//         height: 100%; 
//         margin: 0px !important; 
//         padding: 0px !important;
//     }`;

//     const htmlContent = `
//         <style type="text/css">
//             @media print {
//                 ${cssRules}
//             }
//         </style>
//         <div style="height:100vh !important;width:100% !important;">
//             ${printableContent}
//         </div>
//     `;

//     setTimeout(function() {
//         window.cordova.plugins.printer.print()

//     }, 600);
// });



    

</script>