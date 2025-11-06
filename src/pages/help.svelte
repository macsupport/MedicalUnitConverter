<Page>
  <Navbar>
     <NavLeft backLink="Back"></NavLeft>
  <NavTitle center><i class='fad fa-question-circle fa-fw fa-lg icon color-white' ></i> Help</NavTitle>
  </Navbar>

  


  <BlockTitle><span class="float-right"><Button raised fill col on:click={showHelp}>Start Help</Button> </span></BlockTitle>
  <Card>
<div class="calc hidden-print"> 
        <form class="searchbar searchbar-enabled" data-f7-slot="fixed"> <div class="searchbar-inner"> <div class="searchbar-input-wrap"> <input placeholder="Search" type="search" class="" bind:value={searchTerm}/> <i class="searchbar-icon"></i> <span class="input-clear-button"></span> </div>   </div> </form></div>
        
         <div class="w-full mx-auto mx-1 bg-color-white print:w-full">
<div class="flex py-4 print:w-full" style="justify-content: space-around;"><Link class="ml-2" onClick={createSheet}> <i class="fad fa-calculator fa-2x fa-fw"></i>
                                    <div class="text-sm"></div></Link>
  <a class="resetme hidden-print" href="#"  on:click={reset}><span class="refresh-link refresh-home"> <i class="fad fa-sync-alt fa-2x fa-fw"></i></span></a>   <span class="text-black font-semibold text-lg">  Human Lab Values</span> <a class="printme hidden-print" data-print="human" href="#"><i class="fad fa-print fa-2x fa-fw"></i></a></div> 
    <div class="hidden inline md:w-1/4 mb-3 xs:w-1/3 text-black p-3">Search <input placeholder="Search Units" class="bg-gray-200 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" bind:value={prefix}></div>

 <div class="px-1 name holder md:w-3/4 mx-auto"> 

<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap  print:block bg-gray-300 dark:bg-gray-700">

                    <div class="md:w-1/2 font-bold text-lg inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">
                        Name 
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">
                        US Units
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex print:inline-flex print:w-1/12  print:overflow-hidden print:text-black">
                     SI Units
                    </div>

                    
                </div>




  


<VirtualList items={filteredUnitsHH} let:item >
  <!-- this will be rendered for each currently visible item -->
 <div class="py-1 mb-1">


 <div class="flex flex-wrap md:flex-no-wrap lg:flex-no-wrap sm:px-1">
 <div class="xs:w-full sm:w-1/2 theDrug" >
            
              <div class="font-bold text-black text-lg ">{item.name}</div>
             <span class="text-gray-700 text-xs pt-1">Specimen: {item.specimen} </span>
         <span class="pl-3 text-gray-700 text-xs"> Conversion Factor: {item.factor} </span>
            
  </div>
  <div class="sm:w-1/4 xs:w-1/2 sm:px-1 resultsUS">
  <label class="text-gray-700 text-xs font-bold mb-1" for="grid-first-name">
        US Range:{item.conventionalRange} {item.conventionalUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" value={item.usValue} on:input="{e => setBothFromUSHH(e.target.value, i)}"  type=number placeholder=" US">

             </div>

 <div class="sm:w-1/4 xs:w-1/2 sm:px-1 resultsIU">
 <label class="text-gray-700 text-xs font-bold mb-1" for="grid-first-name">
        SI Range: {item.siRange} {item.siUnit}
      </label>
               <input class="md:w-2/3 md:inline drug appearance-none mt-2 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 print:inline print:px-1 print:py-1 print:mt-0 print:w-1/2 print:border-none" value={item.siValue} on:input="{e => setBothFromSIHH(e.target.value, i)}" type=number placeholder="SI">

             </div>

 
 
 
 </div> 
</div>
</VirtualList>



  </div>  

  
   </div>


        </Card>
        <div class="bg-color-white flex">
<p class="w-1/2 text-base mx-auto bg-color-white">© Vetcalculators LLC, 2023 - v1.4 <a class="external text-base link w-1/2" title="Privacy Policy" href="https://vetcalculators.com/privacy_policy.html" target="_system">Privacy Policy</a><a class="external link button button-raised bg-color-teal color-white w-1/2 mx-auto mt-4" href="mailto:info@vetcalculators.com?subject=Medical Unit Calculator v1.4 Contact" target="_system">Contact Us</a></p>
        </div>
</Page>

<style>
  
   .holder {
    height: 340px;
  }
.shepherd-element{
  min-width:360px !important;
  } 

</style>
<script>
  import { onMount } from 'svelte';
  // import '../js/shepherd.min.js';
  // import '../css/shepherd.css';
    import Shepherd from 'shepherd.js';
  import js from 'jquery';

  import VirtualList from '@sveltejs/svelte-virtual-list';
  
 

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
    Subnavbar,Searchbar, Segmented, Button, Tabs, Tab, Icon, Fab, FabBackdrop, FabButtons, FabButton

  } from 'framework7-svelte';


     
 
   import units from "../js/unitsV.js";

    onMount(() => {
    window.js = js;
   
  });
let searchTerm = "";
   let searchbar;
 const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
      enabled: true
    },
         scrollTo: false,
         
      },
       useModalOverlay: true
    });



tour.addStep({
  title:'Unit Converter',
  id: 'example-step',
  text: 'Medical Unit Converter easily converts between US and International units. Enter a value in either the US or International input area and it will immediately be converted. Easily search for individual lab tests by typing in the name of the test.',
  classes: 'mt-4',
   buttons: [
        {
          action: tour.back,
          classes: 'shepherd-button-secondary',
          text: 'Back'
        }, {
          action: tour.next,
          text: 'Next'
        }
      ]
});
tour.addStep({
  title:'Search',
  id: 'example-step0',
  text: 'Search here to filter medical tests.',
  classes: 'mt-4',
  attachTo: { element: '.searchit', on: 'bottom' },
   buttons: [
        {
          action: tour.back,
          classes: 'shepherd-button-secondary',
          text: 'Back'
        }, {
          action: tour.next,
          text: 'Next'
        }
      ]
});
tour.addStep({
  title:'Numeric Calculator',
  id: 'example-step00',
  text: 'Click open a Numeric calculator',
  classes: 'mt-4',
  attachTo: { element: '.ml-2.link', on: 'bottom' },
   buttons: [
        {
          action: tour.back,
          classes: 'shepherd-button-secondary',
          text: 'Back'
        }, {
          action: tour.next,
          text: 'Next'
        }
      ]
});
tour.addStep({
  title:'Reset Inputs',
  id: 'example-step1',
  text: 'Click to reset all inputs to default values',
  classes: 'mt-4',
  attachTo: { element: '.resetme', on: 'bottom' },
   buttons: [
        {
          action: tour.back,
          classes: 'shepherd-button-secondary',
          text: 'Back'
        }, {
          action: tour.next,
          text: 'Next'
        }
      ]
});
tour.addStep({
  title:'Print Page',
  id: 'example-step2',
  text: 'Click to print Page',
  classes: 'mt-4',
  attachTo: { element: '.printme', on: 'bottom' },
   buttons: [
        {
          action: tour.back,
          classes: 'shepherd-button-secondary',
          text: 'Back'
        }, {
          action: tour.next,
          text: 'Next'
        }
      ]
});
tour.addStep({
  title:'Drug Info',
  id: 'example-step3',
  text: 'Drug name, specimen required and conversion factor used.',
  attachTo: { element: '.theDrug', on: 'bottom' },
  buttons: [
  {
          action: tour.back,
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
    {
      text: 'Next',
      action: tour.next
    }
  ]
});
 tour.addStep({
  title:'US Units',
  id: 'example-step4',
  text: 'US results value and normal range. Enter a value to convert to IU result',
  classes: 'mt-4',
  attachTo: { element: '.resultsUS', on: 'bottom' },
  buttons: [
  {
          action: tour.back,
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
    {
      text: 'Next',
      action: tour.next
    }
  ]
});
   tour.addStep({
    title:'IU Units',
  id: 'example-step5',
  text: 'IU results value and normal range. Enter a value to convert to US result',
  classes: 'mt-4',
  attachTo: { element: '.resultsIU', on: 'bottom' },
  buttons: [
  {
          action: tour.back,
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
    {
      text: 'Done',
      action: tour.next
    }
  ]
});
   
   
setTimeout(function() {
  
     tour.start();   }, 1200); 
function showHelp() {tour.start();}

 let prefix = '';
  let i = 0;

let unitsH = [{"name":"Acetaminophen","specimen":"Serum, Plasma","conventionalRange":"10-30","conventionalUnit":"µg/mL","factor":"6.614","siRange":"66-200","siUnit":"µmol/L","siValue":"66","usValue":"10"},{"name":"Acetoacetate","specimen":"Serum, Plasma","conventionalRange":"<1","conventionalUnit":"mg/dL","factor":"97.95","siRange":"<100","siUnit":"µmol/L","siValue":"100","usValue":"1"},{"name":"Acetone","specimen":"Serum, Plasma","conventionalRange":"<1.0","conventionalUnit":"mg/dL","factor":"0.172","siRange":"<0.17","siUnit":"mmol/L","siValue":"0.17","usValue":"1.0"},{"name":"Acid phosphatase","specimen":"Serum","conventionalRange":"<5.5","conventionalUnit":"U/L","factor":"16.667","siRange":"<90","siUnit":"nkat/L","siValue":"90","usValue":"5.5"}];

function setBothFromSIHH(value, i) {
    const {factor, siValue} = unitsH[i];
    unitsH[i].siValue = +value;
    unitsH[i].usValue = +(value / factor).toFixed(2);
  }
  function setBothFromUSHH(value, i) {
    const {factor, usValue} = unitsH[i];
    unitsH[i].usValue = +value;
    unitsH[i].siValue = +(value * factor).toFixed(2);;
  }
$: filteredUnitsHH = prefix
    ? unitsH.filter(unitH => {
      const names = `${unitH.name}`;
      return names.toLowerCase().startsWith(prefix.toLowerCase());
    })
    : unitsH;
$: selected = filteredUnitsHH[i];


function reset(){


js("input.drug").each(function(){
        var t = js(this);
          t.val(t.data("original-value"));
      });

}


  
   


</script>
