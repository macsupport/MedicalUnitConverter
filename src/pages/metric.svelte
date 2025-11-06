<Page>

<Navbar>
  <NavLeft backLink="Back"></NavLeft>
  <NavTitle center><i class="mr-1 fa-lg fad fa-pencil-ruler"  style=" --fa-primary-color: orange; --fa-secondary-color: gray;"></i> Metric</NavTitle>

  
  <div class="subnavbar" data-f7-slot="fixed"><form class="searchbar searchbar-enabled w-full md:w-1/2 md:mx-auto" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTerm}> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form></div>

 <!-- <Subnavbar inner={false}>
      <Searchbar
        searchContainer=".unitsMetric"
        searchItem=".units"
        searchIn=".name"
        disableButton={!theme.aurora}
      ></Searchbar>
    </Subnavbar> -->
</Navbar>





<div class="mt-2 print:w-full mx-1 bg-white">





<div id="metricHeader" class="my-2 bg-gray-100 border rounded flex md:w-11/12 mx-auto p-2 print:w-full"><div class="w-1/2 md:w-2/3 text-black font-semibold text-lg">  Metric Conversion<div class="text-sm">SI <i class="fas fa-lg mx-2 fa-arrows-left-right-to-line hidden-print"></i> US Units</div></div>
<div class="w-1/2 md:w-1/3 flex" style="justify-content: space-around;"><Link class="ml-2 hidden-print" on:click={() =>{createSheet()}}> <i class="fad fa-calculator fa-2x fa-fw"></i>
                                    <div class="text-sm"></div></Link>
  <a class="resetme mt-2 hidden-print" href="#"  on:click={() =>{reset()}}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-2x fa-fw"></i></span></a>    <a class="mt-2 hidden-print" data-print="metric" href="#" on:click={handlePrintButtonClick}><i class="fad fa-print fa-2x fa-fw"></i></a></div></div> 

<hr/>
 <div id="metric" class="bg-white mx-1 mt-2 unitsMetric px-1 holder md:w-11/12 md:mx-auto"> 
 <VirtualList bind:start bind:end items={filteredList} let:item >
 <div class="units py-1 border-b-2 border-gray-300 mb-1 print:mb-0 print:py-0">


 <div class="flex flex-wrap md:flex-no-wrap lg:flex-no-wrap sm:px-1">
 <div class="w-full sm:w-1/2" >
            
              <div class="font-bold text-black text-lg name">{item.conventionalUnit} <i class="fad fa-arrows-alt-h fa-lg color-green hidden-print"></i> {item.siUnit} <span style="display:none;">{item.name}</span></div>
            
         <div class="text-gray-700 text-sm">  Conversion Factor: {item.factor} </div>
            
  </div>
  <div class="sm:w-1/4 w-1/2 sm:px-1">
  <label class="text-gray-700 text-sm font-bold" for="grid-first-name">
        US - {item.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredList.indexOf(item)}" data-original-value={item.usValue} value={item.usValue} on:input="{e => setBothFromUSM(e.target.value, filteredList.indexOf(item))}"  type=number placeholder=" ">

             </div>

 <div class="sm:w-1/4 w-1/2 sm:px-1">
 <label class="text-gray-700 text-sm font-bold" for="grid-first-name">
         SI - {item.siUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredList.indexOf(item)}" data-original-value={item.siValue} value={item.siValue} on:input="{e => setBothFromSIM(e.target.value, filteredList.indexOf(item))}" type=number placeholder=" ">

             </div>

 
 
 
 </div> 
</div>
</VirtualList>
<!-- <p class="text-base">showing items {start +1}-{end+1} of {filteredList.length}</p> -->
 </div> 
   
   
  </div> 

    





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

</Page>
<style>
#metricHeader{
 position: sticky;
top: 0px;
z-index: 20;
background-color: white;
}

  .holder {
    min-height: 250px;
    height: calc(100vh - 15em);
  } 

@media all and (max-width: 528px) {
  .holder {
  
    height: calc(100vh - 12em);
  } 
}</style> 


<script>
  import js from 'jquery';
  import VirtualList from '@sveltejs/svelte-virtual-list';
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
    Subnavbar,Searchbar, Segmented, Button, Tabs, Tab,Icon, Fab, FabBackdrop, FabButtons, FabButton

  } from 'framework7-svelte';

 let sheetOpened = false;
  let sheet2;
let myCalculator;
let start;
let end;

let tempConversions = [
  {
    "name": "fahrenheit - celsius",
    "usAbbr": "°F",
    "conventionalUnit": "°F",
    "factor": "special",  // Special case for temperature
    "siUnit": "°C",
    "siAbbr": "°C",
    "usValue": "",
    "siValue": "",
    "originalusValue": "",
    "originalsiValue": ""
  },
  {
    "name": "celsius - kelvin",
    "usAbbr": "°C",
    "conventionalUnit": "°C",
    "factor": "special",  // Special case
    "siUnit": "K",
    "siAbbr": "K",
    "usValue": "",
    "siValue": "",
    "originalusValue": "",
    "originalsiValue": ""
  },{
  "name": "fahrenheit - kelvin",
  "usAbbr": "°F",
  "conventionalUnit": "°F",
  "factor": "special",  // Special case for temperature
  "siUnit": "K",
  "siAbbr": "K",
  "usValue": "",
  "siValue": "",
  "originalusValue": "",
  "originalsiValue": ""
}
];

 let unitsM = [{"name":"inches - centimeters","usAbbr":"in","conventionalUnit":"inches","factor":"2.54","siUnit":"centimeters","siAbbr":"cm"},{"name":"feet - centimeters","usAbbr":"ft","conventionalUnit":"feet","factor":"30","siUnit":"centimeters","siAbbr":"cm"},{"name":"feet - meters","usAbbr":"ft","conventionalUnit":"feet","factor":"0.3","siUnit":"meters","siAbbr":"m"},{"name":"yards - meters","usAbbr":"yd","conventionalUnit":"yards","factor":"0.9","siUnit":"meters","siAbbr":"m"},{"name":"miles - kilometers","usAbbr":"miles","conventionalUnit":"miles","factor":"1.6","siUnit":"kilometers","siAbbr":"km"},{"name":"square inches - square centimeters","usAbbr":"sq in","conventionalUnit":"square inches","factor":"6.5","siUnit":"square centimeters","siAbbr":"cm<sup>2</sup>"},{"name":"square feet - square meters","usAbbr":"sq ft","conventionalUnit":"square feet","factor":"0.09","siUnit":"square meters","siAbbr":"m<sup>2</sup>"},{"name":"square yard - square meters","usAbbr":"sq yd","conventionalUnit":"square yard","factor":"0.8","siUnit":"square meters","siAbbr":"m<sup>2</sup>"},{"name":"square miles - square kilometers","usAbbr":"sq miles","conventionalUnit":"square miles","factor":"2.6","siUnit":"square kilometers","siAbbr":"km<sup>2</sup>"},{"name":"ounces - grams","usAbbr":"oz","conventionalUnit":"ounces","factor":"28","siUnit":"grams","siAbbr":"g"},{"name":"pounds - kilograms","usAbbr":"lb","conventionalUnit":"pounds","factor":"0.45","siUnit":"kilograms","siAbbr":"kg"},{"name":"teaspoons - milliliters","usAbbr":"tsp","conventionalUnit":"teaspoons","factor":"5","siUnit":"milliliters","siAbbr":"mL"},{"name":"tablespoons - milliliters","usAbbr":"tbsp","conventionalUnit":"tablespoons","factor":"15","siUnit":"milliliters","siAbbr":"mL"},{"name":"fluid ounces - milliliters","usAbbr":"fl oz","conventionalUnit":"fluid ounces","factor":"30","siUnit":"milliliters","siAbbr":"mL"},{"name":"cups - liters","usAbbr":"c","conventionalUnit":"cups","factor":"0.24","siUnit":"liters","siAbbr":"L"},{"name":"US pints - liters","usAbbr":"pt","conventionalUnit":"US pints","factor":"0.47","siUnit":"liters","siAbbr":"L"},{"name":"US quarts - liters","usAbbr":"qt","conventionalUnit":"US quarts","factor":"0.95","siUnit":"liters","siAbbr":"L"},{"name":"US gallons - liters","usAbbr":"gal","conventionalUnit":"US gallons","factor":"3.8","siUnit":"liters","siAbbr":"L"},{"name":"cubic feet - cubic meters","usAbbr":"cu ft","conventionalUnit":"cubic feet","factor":"0.03","siUnit":"cubic meters","siAbbr":"m<sup>3</sup>"},{"name":"cubic yard - cubic meters","usAbbr":"cu yd","conventionalUnit":"cubic yard","factor":"0.76","siUnit":"cubic meters","siAbbr":"m<sup>3</sup>"}];
  

  unitsM = [...tempConversions, ...unitsM];


  let prefix = '';
  let i = 0;
let searchTerm = "";
  
    $: filteredList = unitsM.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

 function setBothFromSIM(value, i) {
  const {factor, siUnit, conventionalUnit} = filteredList[i];
  filteredList[i].siValue = +value;
  
  // Handle temperature conversions specially
  if (factor === "special") {
    if (siUnit === "°C" && conventionalUnit === "°F") {
      // Convert Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
      filteredList[i].usValue = +((value * 9/5) + 32).toFixed(2);
    } 
    else if (siUnit === "°K" && conventionalUnit === "°C") {
      // Convert Kelvin to Celsius: K - 273.15 = °C
      filteredList[i].usValue = +(value - 273.15).toFixed(2);
    }
    else if (siUnit === "°K" && conventionalUnit === "°F") {
      // Convert Kelvin to Fahrenheit: (K - 273.15) × 9/5 + 32 = °F
      filteredList[i].usValue = +(((value - 273.15) * 9/5) + 32).toFixed(2);
    }
    else {
      filteredList[i].usValue = +(value / factor).toFixed(2);
    }
  } 
  else {
    // Regular conversion
    filteredList[i].usValue = +(value / factor).toFixed(2);
  }
}

function setBothFromUSM(value, i) {
  const {factor, siUnit, conventionalUnit} = filteredList[i];
  filteredList[i].usValue = +value;
  
  // Handle temperature conversions specially
  if (factor === "special") {
    if (conventionalUnit === "°F" && siUnit === "°C") {
      // Convert Fahrenheit to Celsius: (°F - 32) × 5/9 = °C
      filteredList[i].siValue = +((value - 32) * 5/9).toFixed(2);
    }
    else if (conventionalUnit === "°C" && siUnit === "°K") {
      // Convert Celsius to Kelvin: °C + 273.15 = K
      filteredList[i].siValue = +(Number(value) + 273.15).toFixed(2);
    }
    else if (conventionalUnit === "°F" && siUnit === "°K") {
      // Convert Fahrenheit to Kelvin: (°F - 32) × 5/9 + 273.15 = K
      filteredList[i].siValue = +(((value - 32) * 5/9) + 273.15).toFixed(2);
    }
    else {
      filteredList[i].siValue = +(value * factor).toFixed(2);
    }
  }
  else {
    // Regular conversion
    filteredList[i].siValue = +(value * factor).toFixed(2);
  }
}

 
function createSheet() {

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
  searchTerm = "";
js("input.drug").each(function(){
        var t = js(this);
          t.val("");
      });

}

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


</script>