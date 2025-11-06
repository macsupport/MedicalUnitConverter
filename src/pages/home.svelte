<div id="home" name="home" class="page print:w-full" >
  <!-- Top Navbar -->
  

<Navbar center class="hidden-print">

<NavLeft><Link href="/about/" ><i class="fa-fw fad fa-info-circle fa-2x fa-fw"></i>
                                    </Link></NavLeft>

 <div center class="text-lg"><img class="inline-flex img-responsive mr-1" src="icon-500.png" style="width:55px; height:100%;"/> <span class="text-lg font-bold">Medical Unit Converter</span></div>
 
 
 <NavRight>
      
      <Button class="helpme" popupOpen=".help-popup"> <i class="fa-fw fad fa-question-circle fa-2x fa-fw"></i>
                                    </Button>
      <Link href="/human/" >test
                                    </Link>                              
                                    </NavRight>

                                  </Navbar> 
<Toolbar class="hidden-print" tabbar icons position="top">
    <Link class=""
      tabLink="#human1"
      tabLinkActive
      text="Human"
    ><i class="mb-1 fa-2x fad fa-user-md" style=" --fa-primary-color: teal; --fa-secondary-color: white;"></i></Link>
    <Link class="" tabLink="#vet1" text="Veterinary"><i class="mb-1 fa-2x fad fa-paw" style=" --fa-primary-color: black;--fa-secondary-color: white;"></i> 
</Link>
    <Link class=""
      tabLink="#metric1"
      text="Metric"
    ><i class="mb-1 fa-2x fad fa-pencil-ruler"  style=" --fa-primary-color: orange; --fa-secondary-color: gray;"></i></Link>
  </Toolbar>

<div class="mt-8 page-content py-0 hide-toolbar-on-scroll">

<Tabs>
    <Tab id="human1" class="page-content" tabActive>
        <div class="calc hidden-print"> 
        <!-- <form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTerm}/> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form> -->
        
         <Searchbar
        searchContainer=".unitsH"
        searchItem=".eachTest"
        searchIn=".name"
        disableButton={!theme.aurora}
      ></Searchbar>  
        </div>
<div class="w-full mx-auto mx-1 bg-color-white print:w-full">

<div class="flex md:w-3/4 mx-auto py-1 print:w-full"><div class="w-1/2 md:w-2/3 text-black font-semibold text-base">  Human Lab Values <div class="subtitle">SI <i class="fas fa-arrows-left-right-to-line hidden-print"></i> US Units</div></div>
<div class="w-1/2 md:w-1/3 flex" style="justify-content: space-around;"><Link class="ml-2 hidden-print" onClick={createSheet}> <i class="fad fa-calculator fa-2x fa-fw"></i>
<div class="text-sm"></div></Link>
  <a class="resetme hidden-print" href="#"  on:click={() =>{reset()}}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-2x fa-fw mt-2"></i></span></a>    <a class="printme hidden-print" data-print="human" href="#"><i class="fad fa-print fa-2x fa-fw mt-2"></i></a></div></div> 
<hr/><div id="human" class="divide-y divide-gray-300 w-full printthis px-1 holderx md:w-3/4 md:mx-auto print:w-full">
<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap md:mx-auto print:block bg-gray-300 dark:bg-gray-700">
<div class="md:w-1/2 font-bold text-lg inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">Name </div>
<div class="md:w-1/4 font-bold text-lg inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">US Units</div>
<div class="md:w-1/4 font-bold text-lg inline-flex print:inline-flex print:w-2/12  print:overflow-hidden print:text-black">SI Units</div></div>
 <div class="unitsH mb-4 divide-y divide-gray-300">

   {#each filteredUnitsH as item, i}
  <!-- this will be rendered for each currently visible item -->
 <div class="eachTest print:mb-0 print:py-0">
<div class="flex flex-wrap py-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2" >
            <div class="item-name font-bold text-black text-base name">{item.name}</div>
             <span class="text-gray-900 text-xs pt-1"><span class="font-semibold">Specimen:</span> {item.specimen} </span>
         <span class="pl-3 text-gray-900 text-xs"> <span class="font-semibold">Conversion Factor:</span> {item.factor} </span>
            </div>
  <div class="xs:w-1/2 sm:w-1/4 sm:px-1 print:w-1/4">
  <label class="text-gray-900 text-xs mb-1 pr-1" for="grid-first-name">
        US Range:{item.conventionalRange} {item.conventionalUnit}
      </label>
{#if item.alternate === "true"}<input class="input-us md:w-2/3 drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none"  data-original-value={item.originalusValue} bind:value={item.usValue} on:input={e => setBothFromUSH2(e.target.value, filteredUnitsH.indexOf(item))}  type=number placeholder=" US"/>{:else}<input class="input-us md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" data-original-value={item.originalusValue} bind:value={item.usValue} on:input={e => setBothFromUSH(e.target.value, i)}  type=number placeholder=" US"/>
{/if}</div>
<div class="xs:w-1/2 sm:w-1/4 sm:px-1 print:w-1/4">
 <label class="text-gray-900 text-xs mb-1" for="grid-first-name">
        SI Range: {@html item.siRange} {@html item.siUnit}
      </label>
      {#if item.alternate === "true"} <input class="input-si md:w-2/3 drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" data-original-value={item.originalsiValue} bind:value={item.siValue} on:input={e.target.value, filteredUnitsH.indexOf(item)}  type=number placeholder="SI"/>{:else}<input class="input-si md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none"  data-original-value={item.originalsiValue} bind:value={item.siValue} on:input={e => setBothFromSIH(e.target.value, i)} type=number placeholder="SI"/>{/if}
</div>
</div> 
</div>









{/each}
<SvelteInfiniteScroll
      hasMore={unitsH.length < unitsHuman.length}
      threshold={50}
      on:loadMore={() => page++} />
      </div>
</div>  
    </div>


  
         </Tab>
    <Tab id="vet1" class="page-content">
        <div class="calc hidden-print">
        
<form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTermV}/> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form> </div>
             <div class="w-full mx-auto mx-1 bg-color-white print:w-full"><div class="flex md:w-3/4 mx-auto py-1 print:w-full"><div class="w-1/2 md:w-2/3 text-black font-semibold text-base">  Veterinary Lab Values<div class="subtitle">SI <i class="fas fa-arrows-left-right-to-line hidden-print"></i> US Units</div></div>

<div class="w-1/2 md:w-1/3 flex" style="justify-content: space-around;"><Link class="ml-2 hidden-print" onClick={createSheet}> <i class="fad fa-calculator fa-2x fa-fw"></i>
                                    <div class="text-sm"></div></Link>
  <a class="resetme hidden-print" href="#"  on:click={() =>{reset()}}><span class="refresh-link refresh-home"> <i class="mt-2 fad fa-sync-alt fa-2x fa-fw"></i></span></a>    <a class="printme hidden-print" data-print="vet" href="#"><i class="mt-2 fad fa-print fa-2x fa-fw"></i></a></div></div> 

<hr/>
<div id="vet"  class="divide-y divide-gray-300 printthis px-1 holderx md:w-3/4 md:mx-auto print:w-full">
<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap md:mx-auto print:block bg-gray-300 dark:bg-gray-700">

                    <div class="md:w-1/2 font-bold text-lg inline-flex print:w-7/12  print:overflow-hidden print:text-black">
                        Name 
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex print:w-2/12   print:overflow-hidden print:text-black">
                       US Units
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex print:w-2/12  print:overflow-hidden print:text-black">
                     SI Units
                    </div>

                    
                </div>



   {#each filteredListV as item, i}
 <div class="print:mb-0 print:py-0">
<div class="flex flex-wrap py-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2" >
            <div class="font-bold text-black text-base">{@html item.name}</div>
             <span class="text-gray-900 text-xs pt-1"><span class="font-semibold">Specimen:</span> {item.specimen} </span>
         <span class="pl-3 text-gray-900 text-xs"> <span class="font-semibold">Conversion Factor:</span> {item.factor} </span></div>
  <div class="xs:w-1/2 sm:w-1/4 sm:px-1 print:w-1/4">
  <label class="text-gray-700 text-xs mb-1" for="grid-first-name">
        US Range:{@html item.conventionalRange} {@html item.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredListV.indexOf(item)}" data-original-value={item.originalusValue} value={item.usValue} on:input="{e => setBothFromUS(e.target.value, filteredListV.indexOf(item))}"  type=number placeholder=" US"/>
</div>
<div class="xs:w-1/2 sm:w-1/4 sm:px-1 print:w-1/4">
 <label class="text-gray-700 text-xs mb-1" for="grid-first-name">
        SI Range: {@html item.siRange} {@html item.siUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredListV.indexOf(item)}" data-original-value={item.originalsiValue} value={item.siValue} on:input="{e => setBothFromSI(e.target.value, filteredListV.indexOf(item))}" type=number placeholder="SI"/>
</div>
 </div> 
</div>
{/each}
</div>
         </Tab>




    <Tab id="metric1" class="page-content">
        <div class="calc hidden-print">
         
  <form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTermM}> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form>
  </div>

    <div class="w-full mx-auto mx-1 bg-color-white print:w-full"><div class="flex md:w-3/4 mx-auto py-1 print:w-full"><div class="w-1/2 md:w-2/3 text-black font-semibold text-base">  Metric Conversion<div class="subtitle">SI <i class="fas fa-arrows-left-right-to-line hidden-print"></i> US Units</div></div>
<div class="w-1/2 md:w-1/3 flex" style="justify-content: space-around;"><Link class="ml-2 hidden-print" onClick={createSheet}> <i class="fad fa-calculator fa-2x fa-fw"></i>
                                    <div class="text-sm"></div></Link>
  <a class="resetme mt-2 hidden-print" href="#"  on:click={() =>{reset()}}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-2x fa-fw"></i></span></a>    <a class="mt-2 printme hidden-print" data-print="metric" href="#"><i class="fad fa-print fa-2x fa-fw"></i></a></div></div> 

<hr/>




 <div class="hidden md:w-1/4 mb-3 xs:w-1/3 text-black p-1">Search Units <input placeholder="Unit" class="mt-1 block w-full  text-gray-700 border border-gray-300 rounded-lg py-2 px-2 leading-tight bg-white  focus:outline-none focus:bg-white focus:border-gray-500" type="search" bind:value={searchTermM}></div>

<div id="metric" class="divide-y divide-gray-300 printthis unitsMetric md:w-3/4  px-1 mx-auto print:w-full"> 
<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap mx-auto print:block bg-gray-300 dark:bg-gray-700">

                    <div class="md:w-1/2 font-bold text-base inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">
                        Name 
                    </div>

                    <div class="md:w-1/4 font-bold text-base inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">
                        US Units
                    </div>

                    <div class="md:w-1/4 font-bold text-base inline-flex print:inline-flex print:w-2/12  print:overflow-hidden print:text-black">
                      SI Units
                    </div>

                    
                </div>


 

    {#each filteredListM as item, i}
 <div class="units print:mb-0 print:py-0">
<div class="flex flex-wrap py-1">
 <div class="flex w-full md:w-2/3" >
            <div class="w-2/3 font-bold text-black text-base name md:mt-1">{item.conventionalUnit} <i class="fas fa-arrows-left-right-to-line hidden-print"></i> {item.siUnit} <span style="display:none;">{item.name}</span></div>
            
         <div class="w-1/3 text-gray-700 text-xs md:mt-2">  Conversion Factor: {item.factor} </div>
            
  </div>
<div class="flex w-full md:w-1/3" >
  <div class="w-1/2 sm:px-1">
  <label class="text-gray-700 text-xs" for="grid-first-name">
        US - {item.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredListM.indexOf(item)}" data-original-value={item.usValue} value={item.usValue} on:input="{e => setBothFromUSM(e.target.value, filteredListM.indexOf(item))}"  type=number placeholder=" ">            
           </div>

 <div class="w-1/2 sm:px-1">
 <label class="text-gray-700 text-xs" for="grid-first-name">SI - {item.siUnit}</label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredListM.indexOf(item)}" data-original-value={item.siValue} value={item.siValue} on:input="{e => setBothFromSIM(e.target.value, filteredListM.indexOf(item))}" type=number placeholder=" ">

             </div>

 </div>
 
 
 </div> 
</div>
{/each}


 </div> 
   
   
   

    



</div> 


 </Tab>
</Tabs>

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
import SvelteInfiniteScroll from "svelte-infinite-scroll";

// import '../js/framework7-keypad.min.js';
  import js from 'jquery';
// import VirtualList from '@sveltejs/svelte-virtual-list';
// import unitsH from "../js/unitsH.js";
// import unitsM from "../js/unitsM.js";
// import units from "../js/unitsV.js";
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
   let searchbar;
  let isBottom = true;
 let sheetOpened = false;
  let sheet;
  let sheet2;
let myCalculator;
let standalone;

  let popupOpened = false;


 let unitsH = [];
let unitsHuman = unitsH;
  async function fetchData() {
    try {
      const response = await fetch('https://medical-units.vetcalculators.workers.dev/');
      
      if (response.ok) {
        // If the response is successful (status code 200), parse the JSON data
        const data = await response.json();
        unitsH = data; // Assign the fetched data to the unitsH variable
      } else {
        // Handle error if the response is not successful
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error fetching data:', error);
    }
  }

  // Call the fetchData function to initiate the data fetching when needed
  fetchData();



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


// $: filteredList = unitsH.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

//  function setBothFromSIH(value, i) {
//     const {factor, siValue} = filteredList[i];
//     filteredList[i].siValue = +value;
//     filteredList[i].usValue = +(value / factor).toFixed(2);
//   }
//   function setBothFromUSH(value, i) {
//     const {factor, usValue} = filteredList[i];
//     filteredList[i].usValue = +value;
//     filteredList[i].siValue = +(value * factor).toFixed(2);
//   }




//   function setBothFromSIH2(value, i) {
//     const {factor, siValue} = filteredList[i];
//     filteredList[i].siValue = +value;
//     filteredList[i].usValue = +((2.15 + (value / 10.929))).toFixed(1);
//   }
//   function setBothFromUSH2(value, i) {
//     const {factor, usValue} = filteredList[i];
//     filteredList[i].usValue = +value;
//     filteredList[i].siValue = +( (10.929 * (value - 2.15))).toFixed(1);
//   }

function reset(){

js("input.drug").each(function(){
      js(this).val(js(this).data("original-value"));
      });
     
}






// End Human


// Veterinary

//  let searchTermV = "";
  
// $: filteredListV = units.filter(item => item.name.toLowerCase().indexOf(searchTermV.toLowerCase()) !== -1);

 
//     //let prefix = '';
//  // let i = 0;
//   let current = 'veterinary';
  
//   function setBothFromSI(value, i) {
//     const {factor, siValue} = filteredListV[i];
//     filteredListV[i].siValue = +value;
//     filteredListV[i].usValue = +(value / factor).toFixed(2);
//   }
//   function setBothFromUS(value, i) {
//     const {factor, usValue} = filteredListV[i];
//     filteredListV[i].usValue = +value;
//     filteredListV[i].siValue = +(value * factor).toFixed(2);
//   }
// End Veterinary
// Metric

        
        
      


  // let prefix = '';
  // let i = 0;
// let searchTermM = "";
//   // f7.on('tabShow','#metric1', (tabEl) => {
//     $: filteredListM = unitsM.filter(item => item.name.toLowerCase().indexOf(searchTermM.toLowerCase()) !== -1);

//   function setBothFromSIM(value, i) {
//     const {factor, siValue} = filteredListM[i];
//     filteredListM[i].siValue = +value;
//     filteredListM[i].usValue = +(value / factor).toFixed(2);
//   }
//   function setBothFromUSM(value, i) {
//     const {factor, usValue} = filteredListM[i];
//     filteredListM[i].usValue = +value;
//     filteredListM[i].siValue = +(value * factor).toFixed(2);;
//   }

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