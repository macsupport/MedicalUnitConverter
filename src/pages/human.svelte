

<Page class="print:w-full">

<Navbar sliding="{false}" class="print:hidden">
  <NavLeft backLink="Back"></NavLeft>
  <NavTitle center><i class='fad fa-user-md fa-fw fa-2x fadrop' style='--fa-secondary-opacity: 1.0; --fa-primary-color: teal; --fa-secondary-color: tan;' ></i> Human Units</NavTitle>
 
  <div class="subnavbar" data-f7-slot="fixed">
    <form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTerm}/> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form>
  </div>

</Navbar>

<FabBackdrop />

  <Fab position="right-bottom" class="print:hidden">
    <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
    <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
    <FabButtons position="top">
      <a class="fab-label-button resetme fab-close" href="#"  on:click={reset}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-lg fadrop" data-fa-transform="grow-6"></i></span><span class="fab-label">Reset</span></a>
      <a class="fab-label-button printme fab-close" data-print="human" href="#"><span>
  <i class="fad fa-print fa-lg" data-fa-transform="grow-6"></i>
</span><span class="fab-label">Print</span></a>
    

    </FabButtons>
  </Fab>



  <div class="w-full mt-8 mx-auto mx-1 bg-color-white print:w-full">
 
  
    
    <div class="text-center text-black text-lg mt-1 print:w-full" >
      <div class="font-semibold">  Human Lab Values</div>
  
    </div>
   
  
<div id="human" class="flex flex-wrap md:w-3/4 printthis px-1 holderx mx-auto print:w-full" style="overflow-x: scroll;">

<!-- Loading and Error States -->
<LoadingError
  {isLoading}
  error={apiError}
  onRetry={fetchData}
  loadingMessage="Loading human lab values..."
/>

{#if !isLoading && !apiError}
<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 flex mx-auto print:block print:w-full bg-gray-100 dark:bg-gray-700 mt-2">

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



<!-- <VirtualList itemHeight={72} bind:start bind:end items={filteredList}  let:item class=""> -->
   {#each filteredList as item, i}
  <!-- this will be rendered for each currently visible item -->
 <div class="py-1 border-b-2 border-gray-300 mb-1 print:mb-0 print:py-0">


 <div class="flex flex-wrap sm:px-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2" >
            
              <div class="font-bold text-black text-lg">{@html item.name}</div>
             <span class="text-gray-900 text-xs pt-1"><span class="font-semibold">Specimen:</span> {item.specimen} </span>
         <span class="pl-3 text-gray-900 text-xs"> <span class="font-semibold">Conversion Factor:</span> {item.factor} </span>
            
  </div>
  <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4">
  <label class="text-gray-900 text-xs mb-1 pr-1" for="grid-first-name">
        US Range:{@html item.conventionalRange} {@html item.conventionalUnit}
      </label>

      {#if item.alternate === "true"}  <input class="md:w-2/3 drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredList.indexOf(item)}" data-original-value={item.originalusValue} bind:value={item.usValue} on:input="{e => setBothFromUSH2(e.target.value, filteredList.indexOf(item))}"  type=number placeholder=" US"/>{:else}
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="us{filteredList.indexOf(item)}" data-original-value={item.originalusValue} bind:value={item.usValue} on:input="{e => setBothFromUSH(e.target.value, filteredList.indexOf(item))}"  type=number placeholder=" US"/>
{/if}
             </div>

 <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4">
 <label class="text-gray-900 text-xs mb-1" for="grid-first-name">
        SI Range: {@html item.siRange} {@html item.siUnit}
      </label>
      {#if item.alternate === "true"} <input class="md:w-2/3 drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredList.indexOf(item)}" data-original-value={item.originalsiValue} bind:value={item.siValue} on:input="{e => setBothFromSIH2(e.target.value, filteredList.indexOf(item))}" type=number placeholder="SI"/>{:else}
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-900 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" name="si{filteredList.indexOf(item)}" data-original-value={item.originalsiValue} bind:value={item.siValue} on:input="{e => setBothFromSIH(e.target.value, filteredList.indexOf(item))}" type=number placeholder="SI"/>
{/if}
</div>




 </div>
</div>
{/each}
{/if}

   
   
   

  </div>  

  
   </div>
  
</Page>

<!-- <style>
.holder {
    min-height: 250px;
    height: calc(100vh - 15em);
  } 

@media all and (max-width: 528px) {
  .holder {
  
    height: calc(100vh - 12em);
  } 
}

</style> -->
<script>

import js from 'jquery';
import VirtualList from '@sveltejs/svelte-virtual-list';
import LoadingError from '../components/LoadingError.svelte';


// import unitsH from "../js/unitsH.js";
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
   let unitsH = [];
  let isLoading = true;
  let apiError = null;

  async function fetchData() {
    isLoading = true;
    apiError = null;

    try {
      const { fetchMedicalUnits } = await import('../js/api.js');
      const result = await fetchMedicalUnits(10000); // 10 second timeout

      if (result.error) {
        apiError = result.error;
        unitsH = [];
      } else {
        unitsH = result.data || [];
        apiError = null;
      }
    } catch (error) {
      apiError = 'Unexpected error loading data. Please try again.';
      console.error('Error fetching data:', error);
      unitsH = [];
    } finally {
      isLoading = false;
    }
  }

  fetchData();
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


// function searchAll(query, items) {
//     const found = [];
//     for (let i = 0; i < unitsH.length; i += 1) {
//       if (unitsH[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
//     }
//     return found; // return array with mathced indexes
//   }
</script>