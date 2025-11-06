<Page>
  <Navbar title="Medical Converter Help" backLink="Back" />
  <BlockTitle>Help</BlockTitle>
  <Block strong>

<div class="w-full m-auto  px-1">
 
  
    
    <div class="text-center text-black text-lg md:text-xl mt-1" >
      <div class="font-semibold">  Human Lab Values</div>
  
    </div>
    <div class="hidden inline md:w-1/4 mb-3 xs:w-1/3 text-black p-3">Search <input placeholder="Search Units" class="bg-gray-200 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" bind:value={prefix}></div>

  

<div class="xs:hidden sm:hidden md:inline w-full px-2 mb-2 shadow md:flex md:flex-no-wrap  print:block bg-gray-300 dark:bg-gray-700">

                    <div class="md:w-1/2 font-bold text-lg inline-flex  print:inline-flex print:w-7/12  print:overflow-hidden print:text-black">
                       <i class="fad fa-notes-medical fa-lg fa-fw" style=" --fa-primary-color: red; --fa-secondary-color: gray;"></i> Name 
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex  print:inline-flex print:w-2/12   print:overflow-hidden print:text-black">
                      <i class="fad fa-flag-usa fa-lg fa-fw" style=" --fa-primary-color: blue; --fa-secondary-color: red;"></i>  US Units
                    </div>

                    <div class="md:w-1/4 font-bold text-lg inline-flex print:inline-flex print:w-1/12  print:overflow-hidden print:text-black">
                    <i class="fad fa-globe-europe fa-lg fa-fw" style=" --fa-primary-color: green; --fa-secondary-color: aquamarine;"></i>  SI Units
                    </div>

                    
                </div>




  <div class="px-1 name holder">









  </div>  

  
   </div>


        </Block>
        <Block strong>
<p>© Vetcalculators LLC, 2020 - v1.0 <span class="right"><a class="external" title="Privacy Policy" href="http://vetcalculators.com/privacy_policy.html">Privacy Policy</a></span></p>
        </Block>
</Page>

<style>
  
   .holder {
    height: 200px;

  } 
</style>
<script>
  import { onMount } from 'svelte';
  

  
  onMount(() => {
    window.js = js;
    
  });


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


     
   import Shepherd from 'shepherd.js';
  

   
var tour = new Shepherd.Tour({
      defaultStepOptions: {
        showCancelLink: true,
         classes: 'shadow-md bg-purple-dark',
         scrollTo: false
      },
       useModalOverlay: true
    });

tour.addStep({
  id: 'example-step',
  text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
  classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

   tour.addStep({
  id: 'example-step2',
  text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
  classes: 'example-step-extra-class',
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
      

        
      
 
   
setTimeout(function() {
  
     tour.start();   }, 1500); 


 let prefix = '';
  let i = 0;

let unitsH = [{"name":"Acetaminophen","specimen":"Serum, Plasma","conventionalRange":"10-30","conventionalUnit":"µg/mL","factor":"6.614","siRange":"66-200","siUnit":"µmol/L","siValue":"66","usValue":"10"}];

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





  
   


</script>
