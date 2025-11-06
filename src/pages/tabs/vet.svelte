<Page class="print:w-full">

<Navbar sliding="{false}" class="print:hidden">
  <NavLeft backLink="Back"></NavLeft>
  <NavTitle center><span class="fa-layers fa-fw fa-2x">
                                                
                                                <i class="fa-inverse fas fa-cat fadrop" data-fa-transform="shrink-4 down-1 left-6"></i>
                                                <i class="fa-inverse fad fa-dog fadrop" data-fa-transform="shrink-4 down-1 right-6 flip-h"></i>
                                                
                                            </span> Veterinary Units</NavTitle>
  
  <div class="subnavbar" data-f7-slot="fixed"><form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTermV}/> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form></div>
</Navbar>

 <FabBackdrop />

  <Fab position="right-bottom" class="print:hidden">
    <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
    <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
    <FabButtons position="top">
      <a class="fab-label-button resetme fab-close" href="#" on:click={reset}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-lg fadrop" data-fa-transform="grow-6"></i></span><span class="fab-label">Reset</span></a>
      <a class="fab-label-button printme fab-close" data-print="vet" href="#"><span>
  <i class="fad fa-print fa-lg" data-fa-transform="grow-6"></i>
</span><span class="fab-label">Print</span></a>
    

    </FabButtons>
  </Fab>

<Card class="print:w-full mx-1">
 <div class="text-center text-black text-lg md:text-xl mt-1" >
      <div class="font-semibold">Veterinary Lab Values</div>
  
    </div>






<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap md:w-3/4 md:mx-auto print:block bg-gray-300 dark:bg-gray-700 print:w-full">

                    <div class="md:w-1/2 font-bold text-lg inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">
                       <i class="fad fa-notes-medical fa-lg fa-fw fadrop hidden-print" style=" --fa-primary-color: red; --fa-secondary-color: gray;"></i> Name 
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">
                      <i class="fad fa-flag-usa fa-lg fa-fw fadrop hidden-print" style="--fa-secondary-opacity: 1.0; --fa-primary-color: blue; --fa-secondary-color: red;"></i>  US Units
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex print:inline-flex print:w-2/12  print:overflow-hidden print:text-black">
                    <i class="fad fa-globe-europe fa-lg fa-fw fadrop hidden-print" style="--fa-secondary-opacity: 1.0; --fa-primary-color: green; --fa-secondary-color: aquamarine;"></i>  SI Units
                    </div>

                    
                </div>


 <div id="vet"  class="px-1 holderx md:w-3/4 md:mx-auto print:w-full"> 


   {#each filteredListV as item, i}
  <!-- this will be rendered for each currently visible item -->
 <div class="py-1 border-b-2 border-gray-300 mb-1 print:mb-0 print:py-0">


 <div class="flex flex-wrap md:flex-no-wrap lg:flex-no-wrap sm:px-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2 print:w-full" >
            
              <div class="font-bold text-black text-md">{@html item.name}</div>
             <span class="text-gray-700 text-xs pt-1">Specimen: {item.specimen} </span>
         <span class="pl-3 text-gray-700 text-xs"> Conversion Factor: {item.factor} </span>
            
  </div>
  <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4 print:inline-flex">
  <label class="text-gray-700 text-xs mb-1" for="grid-first-name">
        US Range:{@html item.conventionalRange} {@html item.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredListV.indexOf(item)}" data-original-value={item.originalusValue} value={item.usValue} on:input="{e => setBothFromUS(e.target.value, filteredListV.indexOf(item))}"  type=number placeholder=" US"/>

             </div>

 <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4 print:inline-flex">
 <label class="text-gray-700 text-xs mb-1" for="grid-first-name">
        SI Range: {@html item.siRange} {@html item.siUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredListV.indexOf(item)}" data-original-value={item.originalsiValue} value={item.siValue} on:input="{e => setBothFromSI(e.target.value, filteredListV.indexOf(item))}" type=number placeholder="SI"/>

             </div>

 
 
 
 </div> 
</div>
{/each}

<!-- <p class="text-base">showing items {start +1}-{end+1} of {filteredList.length}</p> -->
</div>
<label class="checkbox lbl4 hide" ><input type="checkbox"/></label>
</Card>

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
}
</style> 
<script>
  import js from 'jquery';


 import units from "../../js/unitsV.js";

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

let start;
let end;
  let name = '';

   let searchTermV = "";
  
$: filteredListV = units.filter(item => item.name.toLowerCase().indexOf(searchTermV.toLowerCase()) !== -1);

 
    //let prefix = '';
 // let i = 0;
  let current = 'veterinary';
  
  function setBothFromSI(value, i) {
    const {factor, siValue} = filteredListV[i];
    filteredListV[i].siValue = +value;
    filteredListV[i].usValue = +(value / factor).toFixed(2);
  }
  function setBothFromUS(value, i) {
    const {factor, usValue} = filteredListV[i];
    filteredListV[i].usValue = +value;
    filteredListV[i].siValue = +(value * factor).toFixed(2);
  }
function reset(){


js("input.drug").each(function(){
       
       js(this).val(js(this).data("original-value"));
      });
    

}


</script>