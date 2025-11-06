

<Page>

<Navbar sliding="{false}">
  <NavLeft backLink="Back"></NavLeft>
  <NavTitle center><i class='fad fa-user-md fa-fw fa-2x fadrop' style='--fa-secondary-opacity: 1.0; --fa-primary-color: teal; --fa-secondary-color: tan;' ></i> Human Medical Units</NavTitle>
 
  <div class="subnavbar" data-f7-slot="fixed">
    <form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTerm}> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form>
  </div>

</Navbar>

<FabBackdrop />

  <Fab position="right-bottom">
    <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
    <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
    <FabButtons position="top">
      <a class="fab-label-button resetme fab-close" href="#"  on:click={reset}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-lg fadrop" data-fa-transform="grow-6"></i></span><span class="fab-label">Reset</span></a>
      <a class="fab-label-button printme fab-close" data-print="human" href="#"><span>
  <i class="fad fa-print fa-lg" data-fa-transform="grow-6"></i>
</span><span class="fab-label">Print</span></a>
    

    </FabButtons>
  </Fab>



  <Card>
 
  
    
    <div class="text-center text-black text-lg md:text-xl mt-1" >
      <div class="font-semibold">  Human Lab Values</div>
  
    </div>
   
  

<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap  print:block bg-gray-300 dark:bg-gray-700 mt-2">

                    <div class="md:w-1/2 font-bold text-lg inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">
                       <i class="fad fa-notes-medical fa-lg fa-fw fadrop  hidden-print" style=" --fa-primary-color: red; --fa-secondary-color: gray;"></i> Name 
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">
                      <i class="fad fa-flag-usa fa-lg fa-fw fadrop  hidden-print" style=" --fa-primary-color: blue; --fa-secondary-color: red;"></i>  US Units
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex print:inline-flex print:w-2/12  print:overflow-hidden print:text-black">
                    <i class="fad fa-globe-europe fa-lg fa-fw fadrop  hidden-print" style=" --fa-primary-color: green; --fa-secondary-color: aquamarine;"></i>  SI Units
                    </div>

                    
                </div>




  <div id="human" class="px-1 holder">

  <VirtualList
    height={900}
    width="auto"
    itemCount={384}
        itemSize={72}>
    <div slot="item" items={filteredList} let:index let:item class="divide-y divide-gray-300" >
      <div class="py-1 border-l-4 border-gray-300 mb-1 print:mb-0 print:py-0">


 <div class="flex flex-wrap md:flex-no-wrap lg:flex-no-wrap sm:px-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2" >
            
              <div class="font-bold text-black text-lg">{@html filteredList[index].name}</div>
             <span class="text-gray-700 text-xs pt-1">Specimen: {filteredList[index].specimen} </span>
         <span class="pl-3 text-gray-700 text-xs"> Conversion Factor: {filteredList[index].factor} </span>
            
  </div>
  <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4 print:inline-flex">
  <label class="text-gray-700 text-xs mb-1" for="grid-first-name">
        US Range:{@html filteredList[index].conventionalRange} {@html filteredList[index].conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredList.indexOf(item)}" data-original-value={filteredList[index].usValue} value={filteredList[index].usValue} on:input="{e => setBothFromUSH(e.target.value, filteredList.indexOf(item))}"  type=number placeholder=" US">

             </div>

 <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4 print:inline-flex">
 <label class="text-gray-700 text-xs mb-1" for="grid-first-name">
        SI Range: {@html filteredList[index].siRange} {@html filteredList[index].siUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredList.indexOf(item)}" data-original-value={filteredList[index].siValue} value={filteredList[index].siValue} on:input="{e => setBothFromSIH(e.target.value, filteredList.indexOf(item))}" type=number placeholder="SI">

             </div>

 
 
 
 </div> 
</div>
    </div>
  </VirtualList>


<!-- <p class="text-base">showing items {start +1}-{end+1} of {filteredList.length}</p> -->

<!--   {#each filteredUnitsH as unitH, i}
 <div class="border border-l-4 border-gray-600 mb-4">


 <div class="flex flex-wrap md:flex-no-wrap lg:flex-no-wrap sm:px-1  mb-1">
 <div class="xs:w-full sm:w-1/2" >
            
              <div class="font-bold text-black text-lg">{unitH.name}</div>
             <span class="text-gray-700 text-xs pt-1">Specimen: {unitH.specimen} </span>
         <span class="pl-3 text-gray-700 text-xs"> Conversion Factor: {unitH.factor} </span>
            
  </div>
  <div class="sm:w-1/4 xs:w-1/2 sm:px-1">
  <label class="text-gray-700 text-xs font-bold mb-1" for="grid-first-name">
        US Range:{unitH.conventionalRange} {unitH.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" value={unitH.usValue} on:input="{e => setBothFromUSH(e.target.value, i)}"  type=number placeholder=" US">

             </div>

 <div class="sm:w-1/4 xs:w-1/2 sm:px-1">
 <label class="text-gray-700 text-xs font-bold mb-1" for="grid-first-name">
        SI Range: {unitH.siRange} {unitH.siUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" value={unitH.siValue} on:input="{e => setBothFromSIH(e.target.value, i)}" type=number placeholder="SI">

             </div>

 
 
 
 </div> 
</div>
{/each} -->
  
   
   
   

  </div>  

  
   </Card>
  
</Page>

<style>
/* .holder {
    min-height: 250px;
    height: calc(100vh - 15em);
  } 

@media all and (max-width: 528px) {
  .holder {
  
    height: calc(100vh - 12em);
  } 
} */

</style>
<script>

import js from 'jquery';
// import VirtualList from '@sveltejs/svelte-virtual-list';
import VirtualList from 'svelte-tiny-virtual-list';

import unitsH from "../js/unitsH.js";
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
    Card,
    Subnavbar,Searchbar, Segmented, Button, Tabs, Tab, Icon, Fab, FabBackdrop, FabButtons, FabButton

  } from 'framework7-svelte';
 const j7 = f7.$;

 let prefix = '';
  let i = 0;
let start;
  let end;

 let searchTerm = "";
   let searchbar;
  
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

function reset(){


js("input.drug").each(function(){
        var t = js(this);
          t.val(t.data("original-value"));
      });

}




$: filteredUnitsH = prefix
    ? unitsH.filter(unitH => {
      const names = `${unitH.name}`;
      return names.toLowerCase().startsWith(prefix.toLowerCase());
    })
    : unitsH;
$: selected = filteredUnitsH[i];


// function searchAll(query, items) {
//     const found = [];
//     for (let i = 0; i < unitsH.length; i += 1) {
//       if (unitsH[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
//     }
//     return found; // return array with mathced indexes
//   }
</script>