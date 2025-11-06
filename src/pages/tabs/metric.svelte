<Page>


 
 <div class="calc hidden-print">
         
  <form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTermM}> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form></div>

    <div class="w-full mx-auto mx-1 bg-color-white print:w-full"><div class="flex md:w-3/4 mx-auto py-1 print:w-full"><div class="w-1/2 md:w-2/3 text-black font-semibold text-lg">  Metric Conversion<div class="subtitle">SI <i class="fad fa-arrows-alt-h fa-lg hidden-print"></i> US Units</div></div>
<div class="w-1/2 md:w-1/3 flex" style="justify-content: space-around;"><Link class="ml-2 hidden-print" onClick={createSheet}> <i class="fad fa-calculator fa-2x fa-fw"></i>
                                    <div class="text-sm"></div></Link>
  <a class="resetme hidden-print" href="#"  on:click={() =>{reset()}}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-2x fa-fw"></i></span></a>    <a class="printme hidden-print" data-print="metric" href="#"><i class="fad fa-print fa-2x fa-fw"></i></a></div></div> 

<hr/>




 <div class="hidden md:w-1/4 mb-3 xs:w-1/3 text-black p-1">Search Units <input placeholder="Unit" class="mt-1 block w-full  text-gray-700 border border-gray-300 rounded-lg py-2 px-2 leading-tight bg-white  focus:outline-none focus:bg-white focus:border-gray-500" type="search" bind:value={searchTermM}></div>

<div id="metric" class="divide-y divide-gray-300 printthis unitsMetric md:w-3/4  px-1 mx-auto print:w-full"> 
<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap mx-auto print:block bg-gray-300 dark:bg-gray-700">

                    <div class="md:w-1/2 font-bold text-lg inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">
                        Name 
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">
                        US Units
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex print:inline-flex print:w-2/12  print:overflow-hidden print:text-black">
                      SI Units
                    </div>

                    
                </div>


 
 <!-- <VirtualList bind:start bind:end items={filteredListM} let:item > -->
    {#each filteredListM as item, i}
 <div class="units py-1 mb-1 print:mb-0 print:py-0">
<div class="flex flex-wrap py-1">
 <div class="flex w-full md:w-2/3" >
            <div class="w-2/3 font-bold text-black text-base name md:mt-2">{item.conventionalUnit} <i class="fad fa-arrows-alt-h fa-lg color-green"></i> {item.siUnit} <span style="display:none;">{item.name}</span></div>
            
         <div class="w-1/3 text-gray-700 text-xs md:mt-2">  Conversion Factor: {item.factor} </div>
            
  </div>
<div class="flex w-full md:w-1/3" >
  <div class="w-1/2 sm:px-1">
  <label class="text-gray-700 text-xs font-bold" for="grid-first-name">
        US - {item.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredListM.indexOf(item)}" data-original-value={item.usValue} value={item.usValue} on:input="{e => setBothFromUSM(e.target.value, filteredListM.indexOf(item))}"  type=number placeholder=" ">            
           </div>

 <div class="w-1/2 sm:px-1">
 <label class="text-gray-700 text-xs font-bold" for="grid-first-name">SI - {item.siUnit}</label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredListM.indexOf(item)}" data-original-value={item.siValue} value={item.siValue} on:input="{e => setBothFromSIM(e.target.value, filteredListM.indexOf(item))}" type=number placeholder=" ">

             </div>

 </div>
 
 
 </div> 
</div>
{/each}
<!-- </VirtualList> -->
<!-- <p class="text-base">showing items {start +1}-{end+1} of {filteredListM.length}</p> -->
 </div> 
   
   
   

    



</div> 

</Page>
<style>
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

  import {
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
    Card,
    Subnavbar,Searchbar, Segmented, Button, Tabs, Tab,Icon, Fab, FabBackdrop, FabButtons, FabButton

  } from 'framework7-svelte';

let searchTermM = "";
let start;
let end;

 let unitsM = [{"name":"inches - centimeters","usAbbr":"in","conventionalUnit":"inches","factor":"2.54","siUnit":"centimeters","siAbbr":"cm"},{"name":"feet - centimeters","usAbbr":"ft","conventionalUnit":"feet","factor":"30","siUnit":"centimeters","siAbbr":"cm"},{"name":"feet - meters","usAbbr":"ft","conventionalUnit":"feet","factor":"0.3","siUnit":"meters","siAbbr":"m"},{"name":"yards - meters","usAbbr":"yd","conventionalUnit":"yards","factor":"0.9","siUnit":"meters","siAbbr":"m"},{"name":"miles - kilometers","usAbbr":"miles","conventionalUnit":"miles","factor":"1.6","siUnit":"kilometers","siAbbr":"km"},{"name":"square inches - square centimeters","usAbbr":"sq in","conventionalUnit":"square inches","factor":"6.5","siUnit":"square centimeters","siAbbr":"cm<sup>2</sup>"},{"name":"square feet - square meters","usAbbr":"sq ft","conventionalUnit":"square feet","factor":"0.09","siUnit":"square meters","siAbbr":"m<sup>2</sup>"},{"name":"square yard - square meters","usAbbr":"sq yd","conventionalUnit":"square yard","factor":"0.8","siUnit":"square meters","siAbbr":"m<sup>2</sup>"},{"name":"square miles - square kilometers","usAbbr":"sq miles","conventionalUnit":"square miles","factor":"2.6","siUnit":"square kilometers","siAbbr":"km<sup>2</sup>"},{"name":"ounces - grams","usAbbr":"oz","conventionalUnit":"ounces","factor":"28","siUnit":"grams","siAbbr":"g"},{"name":"pounds - kilograms","usAbbr":"lb","conventionalUnit":"pounds","factor":"0.45","siUnit":"kilograms","siAbbr":"kg"},{"name":"teaspoons - milliliters","usAbbr":"tsp","conventionalUnit":"teaspoons","factor":"5","siUnit":"milliliters","siAbbr":"mL"},{"name":"tablespoons - milliliters","usAbbr":"tbsp","conventionalUnit":"tablespoons","factor":"15","siUnit":"milliliters","siAbbr":"mL"},{"name":"fluid ounces - milliliters","usAbbr":"fl oz","conventionalUnit":"fluid ounces","factor":"30","siUnit":"milliliters","siAbbr":"mL"},{"name":"cups - liters","usAbbr":"c","conventionalUnit":"cups","factor":"0.24","siUnit":"liters","siAbbr":"L"},{"name":"US pints - liters","usAbbr":"pt","conventionalUnit":"US pints","factor":"0.47","siUnit":"liters","siAbbr":"L"},{"name":"US quarts - liters","usAbbr":"qt","conventionalUnit":"US quarts","factor":"0.95","siUnit":"liters","siAbbr":"L"},{"name":"US gallons - liters","usAbbr":"gal","conventionalUnit":"US gallons","factor":"3.8","siUnit":"liters","siAbbr":"L"},{"name":"cubic feet - cubic meters","usAbbr":"cu ft","conventionalUnit":"cubic feet","factor":"0.03","siUnit":"cubic meters","siAbbr":"m<sup>3</sup>"},{"name":"cubic yard - cubic meters","usAbbr":"cu yd","conventionalUnit":"cubic yard","factor":"0.76","siUnit":"cubic meters","siAbbr":"m<sup>3</sup>"}];
  
  let prefix = '';
  let i = 0;

  
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
 

//   $: filteredUnitsM = prefix
//     ? unitsM.filter(unitM => {
//       const names = `${unitM.conventionalUnit}`;
//       return names.toLowerCase().startsWith(prefix.toLowerCase());
      
//     })
//     : unitsM;
// $: selected = filteredUnitsM[i];

// function searchAll(query, items) {
//     const found = [];
//     for (let i = 0; i < unitsM.length; i += 1) {
//       if (unitsM[i].conventionalUnit.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
//     }
//     return found; // return array with mathced indexes
//   }

function reset(){


js("input.drug").each(function(){
        var t = js(this);
          t.val("");
      });

}


</script>