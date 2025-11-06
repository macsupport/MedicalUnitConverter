<Page class="print:w-full">

<Navbar class="print:hidden">
  <NavLeft backLink="Back"></NavLeft>
  <NavTitle center><i class="mr-1 fa-lg fad fa-paw" style=" --fa-primary-color: black;--fa-secondary-color: white;"></i> Veterinary</NavTitle>
  
  <div class="subnavbar" data-f7-slot="fixed"><form class="searchbar searchbar-enabled w-full md:w-1/2 md:mx-auto" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTerm}/> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form></div>
</Navbar>


<div class="mt-2 print:w-full mx-1 bg-white">







<div id="vetHeader" class="my-2 bg-gray-100 border rounded flex md:w-11/12 mx-auto p-2 print:w-full"><div class="w-1/2 md:w-2/3 text-black font-semibold text-base">  Veterinary Lab Values<div class="subtitle">SI <i class="fas fa-lg mx-2 fa-arrows-left-right-to-line hidden-print"></i> US Units</div></div>
<div class="w-1/2 md:w-1/3 flex" style="justify-content: space-around;"><Link class="ml-2 hidden-print" on:click={() =>{createSheet()}}> <i class="fad fa-calculator fa-2x fa-fw"></i>
                                    <div class="text-sm"></div></Link>
  <a class="resetme mt-2 hidden-print" href="#"  on:click={() =>{reset()}}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-2x fa-fw"></i></span></a>    <a class="mt-2 hidden-print" data-print="vet" href="#" on:click={handlePrintButtonClick}><i class="fad fa-print fa-2x fa-fw"></i></a></div></div> 
<div class="xs:hidden inline w-full md:w-3/4 px-2 mb-2 shadow md:flex md:flex-no-wrap md:mx-auto print:block bg-gray-300 dark:bg-gray-700">
<div class="md:w-1/2 font-bold text-base inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">Name </div>
<div class="md:w-1/4 font-bold text-base inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">US Units</div>
<div class="md:w-1/4 font-bold text-base inline-flex print:inline-flex print:w-2/12  print:overflow-hidden print:text-black">SI Units</div></div>
<hr/>
 <div id="vet"  class="mt-2 divide-y divide-gray-300 px-1 holderx md:w-11/12 md:mx-auto print:w-full"> 

<!-- <VirtualList itemHeight={72} bind:start bind:end items={filteredList}  let:item class=""> -->
   {#each filteredList as item, i}
  <!-- this will be rendered for each currently visible item -->
 <div class="py-1 mb-1 print:mb-0 print:py-0">


 <div class="flex flex-wrap md:flex-no-wrap lg:flex-no-wrap sm:px-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2 print:w-full" >
            
              <div class="font-bold text-black text-lg">{@html item.name}</div>
             <span class="text-gray-700 text-sm pt-1">Specimen: {item.specimen} </span>
         <span class="pl-3 text-gray-700 text-sm"> Conversion Factor: {item.factor} </span>
            
  </div>
  <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4 print:inline-flex">
  <label class="text-gray-700 text-sm mb-1" for="grid-first-name">
        US Range:{@html item.conventionalRange} {@html item.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredList.indexOf(item)}" data-original-value={item.originalusValue} value={item.usValue} on:input="{e => setBothFromUS(e.target.value, filteredList.indexOf(item))}"  type=number placeholder=" US"/>

             </div>

 <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4 print:inline-flex">
 <label class="text-gray-700 text-sm mb-1" for="grid-first-name">
        SI Range: {@html item.siRange} {@html item.siUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredList.indexOf(item)}" data-original-value={item.originalsiValue} value={item.siValue} on:input="{e => setBothFromSI(e.target.value, filteredList.indexOf(item))}" type=number placeholder="SI"/>

             </div>

 
 
 
 </div> 
</div>
{/each}

<!-- <p class="text-base">showing items {start +1}-{end+1} of {filteredList.length}</p> -->
</div>
<label class="checkbox lbl4 hide" ><input type="checkbox"/></label>
</div>
<Sheet class="calc-sheet" data-close-by-backdrop-click="true" data-backdrop="true" opened={sheetOpened} >
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
#vetHeader{
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
}
</style> 
<script>
  import js from 'jquery';
  import VirtualList from '@sveltejs/svelte-virtual-list';
import { Printer } from '@capawesome-team/capacitor-printer';
 import units from "../js/unitsV.js";

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

let start;
let end;
  let name = '';
 let sheetOpened = false;

  let sheet2;
let myCalculator;
   let searchTerm = "";
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


$: filteredList = units.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

 
    //let prefix = '';
 // let i = 0;
  let current = 'veterinary';
  
  function setBothFromSI(value, i) {
    const {factor, siValue} = filteredList[i];
    filteredList[i].siValue = +value;
    filteredList[i].usValue = +(value / factor).toFixed(2);
  }
  function setBothFromUS(value, i) {
    const {factor, usValue} = filteredList[i];
    filteredList[i].usValue = +value;
    filteredList[i].siValue = +(value * factor).toFixed(2);
  }
function reset(){



 searchTerm = "";
js("input.drug").each(function(){
       
       js(this).val(js(this).data("original-value"));
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