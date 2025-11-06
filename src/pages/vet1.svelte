
<script>
  import SvelteInfiniteScroll from "svelte-infinite-scroll";
 
  import unitsHuman from "../js/unitsV.js";
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
    Row,
    Col,Card,
    Subnavbar,Searchbar, Segmented, Button, Tabs, Tab

  } from 'framework7-svelte';
   let prefix = '';
  let i = 0;
  let page = 0;
  let size = 35;
   let current = 'veterinary';
  
 let unitsH = [];
  
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



$: filteredUnitsH = prefix
    ? unitsH.filter(unitH => {
      const names = `${unitH.name}`;
      return names.toLowerCase().startsWith(prefix.toLowerCase());
    })
    : unitsH;
$: selected = filteredUnitsH[i];
</script>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>

<Page>

<Navbar sliding="{false}">
  <NavLeft backLink="Back"></NavLeft>
  <NavTitle center><i class="fad fa-paw fa-2x fa-fw fadrop" style="--fa-secondary-opacity: 1.0; --fa-primary-color: gray; --fa-secondary-color: black;"></i> Veterinary Units</NavTitle>
  <NavRight>
    <a class="printme" data-print="vet" ><i class="fad fa-print fa-fw fa-lg fadrop"></i></a>  </NavRight>

  <div class="subnavbar" data-f7-slot="fixed"><form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={prefix}> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form></div>
</Navbar>


 <div class="text-center text-black text-lg md:text-xl mt-1" >
      <div class="font-semibold">  Veterinary Lab Values</div>
  
    </div>
   

  

<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap  print:block bg-gray-300 dark:bg-gray-700 mt-2">

                    <div class="md:w-1/2 font-bold text-lg inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">
                       <i class="fad fa-notes-medical fa-lg fa-fw fadrop  hidden-print" style=" --fa-primary-color: red; --fa-secondary-color: gray;"></i> Name 
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">
                      <i class="fad fa-flag-usa fa-lg fa-fw fadrop  hidden-print" style=" --fa-primary-color: blue; --fa-secondary-color: red;"></i>  US Units
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex print:inline-flex print:w-1/12  print:overflow-hidden print:text-black">
                    <i class="fad fa-globe-europe fa-lg fa-fw fadrop  hidden-print" style=" --fa-primary-color: green; --fa-secondary-color: aquamarine;"></i>  SI Units
                    </div>

                    
                </div>
<main class="p-2" style="overflow-x: scroll;">



<!-- <VirtualList itemHeight={70} bind:start bind:end items={filteredUnitsH} let:item > -->
   {#each filteredUnitsH as item, i}
  <!-- this will be rendered for each currently visible item -->
 <div class="py-1 border-l-4 border-gray-300 mb-1" >


 <div class="flex flex-wrap md:flex-no-wrap lg:flex-no-wrap sm:px-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2" >
            
              <div class="font-bold text-black text-lg">{item.name}</div>
             <span class="text-gray-700 text-xs pt-1">Specimen: {item.specimen} </span>
         <span class="pl-3 text-gray-700 text-xs"> Conversion Factor: {item.factor} </span>
            
  </div>
  <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4 print:inline-flex">
  <label class="text-gray-700 text-xs font-bold mb-1" for="grid-first-name">
        US Range:{item.conventionalRange} {item.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" value={item.usValue} on:input="{e => setBothFromUSH(e.target.value, i)}"  type=number placeholder=" US">

             </div>

 <div class="sm:w-1/4 xs:w-1/2 sm:px-1 print:w-1/4 print:inline-flex">
 <label class="text-gray-700 text-xs font-bold mb-1" for="grid-first-name">
        SI Range: {item.siRange} {item.siUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" value={item.siValue} on:input="{e => setBothFromSIH(e.target.value, i)}" type=number placeholder="SI">

             </div>

 
 
 
 </div> 
</div>
{/each}
<SvelteInfiniteScroll
      hasMore={unitsH.length < unitsHuman.length}
      threshold={100}
      on:loadMore={() => page++} />
      <h5>
    Loaded items: {unitsH.length}
  </h5>

</main>


</Page>
