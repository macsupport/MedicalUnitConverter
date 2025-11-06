
<script>
  import SvelteInfiniteScroll from "svelte-infinite-scroll";
 
  // import unitsHuman from "../js/unitsH.js";
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
    Subnavbar,Searchbar, Segmented, Button, Tabs, Tab

  } from 'framework7-svelte';
   let prefix = '';
  let i = 0;
  let page = 0;
  let size = 384;
   let current = 'human';
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
  <NavTitle center><i class='fad fa-user-md fa-fw fa-2x' style='--fa-secondary-opacity: 1.0; --fa-primary-color: teal; --fa-secondary-color: tan;' ></i> Human Medical Units</NavTitle>
  <NavRight>
  <a class="printme" data-print="human"> <i class="fad fa-print fa-fw fa-lg fadrop"></i> </a></NavRight>
  <!-- <div class="subnavbar" data-f7-slot="fixed"><form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={prefix}> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form></div> -->
  <Subnavbar inner={false}>
      <Searchbar
        searchContainer=".unitsH"
        searchItem=".eachTest"
        searchIn=".name"
        disableButton={!theme.aurora}
      ></Searchbar>
    </Subnavbar>
</Navbar>

 <div class="text-center text-black text-lg md:text-xl mt-1" >
      <div class="font-semibold">  Human Values</div>
  
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
<main class="unitsH p-2" style="overflow-x: scroll;">



<!-- <VirtualList itemHeight={70} bind:start bind:end items={filteredUnitsH} let:item > -->
   {#each filteredUnitsH as item, i}
  <!-- this will be rendered for each currently visible item -->
 <div class="eachTest py-1 mb-1 print:mb-0 print:py-0">
<div class="flex flex-wrap py-1">
 <div class="xs:w-full sm:w-1/2 print:w-1/2" >
            <div class="item-name font-bold text-black text-md name">{item.name}</div>
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
      threshold={100}
      on:loadMore={() => page++} />
      <h5>
    Loaded items: {unitsH.length}
  </h5>

</main>


</Page>
