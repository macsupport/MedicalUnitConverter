<App { ...f7params }>




  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" animate={true}/>


 <!-- Popup -->
  <Popup id="legal-popup">
    <View>
      <Page>
        <Navbar title="Legal Notices and Disclaimer">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
         
                                    <p style="font-size: 11px;"> All information contained in and produced by Medical Unit Calculator is provided for educational purposes only. This information should not be used for the diagnosis or treatment of any health problem or disease. THIS INFORMATION
                                        IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE in any manner. It is solely a guide and <strong>each result should be thoroughly researched and checked for accuracy and the specific dose given should be based on the Doctor's or Veterinarian's current physical exam as well as the patients age, medical history and current health status</strong>.
                                        The User is hereby notified that the information contained herein may not meet the user's needs. The User is advised that, although the information is derived from medical research and literature we cannot guarantee
                                        its correctness, comprehensiveness or currency. The User of this software assumes sole responsibility for any decisions made or actions taken based on the information contained in Medical Unit Converter. Neither
                                        Vetcalculators LLC, the system's authors nor any other party involved in the preparation, publication or distribution of the Medical Unit Calculator APP shall be liable for any special, consequential, or exemplary
                                        damages resulting in whole or part from any User's use of or reliance upon this system and the information contained within. Vetcalculators LLC disclaims all warranties regarding such information whether
                                        express or implied, including any warranty as to the quality, accuracy, currency or suitability of this information for any particular purpose. Vetcalculators and the system's authors, developers
                                        and distributors assume no responsibility for any erroneous results due to defects in the system. ACCESS TO AND USE OF THE MEDICAL UNIT CALCULATORS IS PROVIDED WITHOUT WARRANTY OF MERCHANTABILITY OR FITNESS FOR
                                        ANY PARTICULAR PURPOSE OR ANY OTHER WARRANTY, EXPRESS OR IMPLIED. In no event shall the Vetcalculators LLC be liable for special, direct, indirect or consequential damages, charges, claims, costs,
                                        demands, losses fees or expenses of any nature or kind arising from use of the Medical Unit Calculator. By using the Medical Unit Calculator App, documentation and/or any software found therein, the User agrees to abide
                                        by United States and International copyright laws and all other applicable laws involving copyright.</p>
                                    <br>


                                    <Block strongIos outlineIos>
  
   
      <input class="h-6 w-6 mb-4" type="checkbox" id="agree"  name="agree" value="true" />
      I agree to Terms
  
 
    <p class="mt-2"><button id="agreeclose" class="link popup-close button button-fill" title="Close Window">Close this Window</button></p>
  </Block>
                                    
                   <p> © Vetcalculators LLC, 2025 - v2.0.0 <span class="right"><a class="external" title="Privacy Policy" href="http://vetcalculators.com/privacy_policy.html" target="_system">Privacy Policy</a></span></p>              
        </Block>
      </Page>
    </View>
  </Popup>


  <!-- Popup -->
  <Popup id="about-popup">
    <View>
      <Page>
        <Navbar title="About Unit Conversion">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block class="p-3">

<Link class="legal mb-2" popupOpen="#legal-popup"  > <i class="fa-fw fad fa-balance-scale fa-2x fa-fw"></i>
                                    <div class="text-lg">Legal Information</div></Link>

        <p class="mb-2 p-2">The Système Internationale d’Unites (SI), or the International System of Units was recommended for use in the health professions by the World Health Assembly in 1977. This system is slowly being adopted in the United States and many journals now require its use.</p>
<p class="mb-2">Medical Unit Converter easily converts between US and International Human and Veterinary Medical units and Metric values. Enter a value in either the US or International input area and it will immediately be converted. Easily search for individual lab tests by typing in the name of the test. </p>
<p class="mb-2"> The laboratory values and reference ranges are provided for illustration only and are not intended to be comprehensive or definitive. Each laboratory determines its own values, and reference ranges are highly method dependent.</p>
<strong>The conversion factors are derived from the current literature and have been applied as published. Therefore, we cannot take any responsibility for their validity.</strong>
<strong>Each calculation should be thoroughly researched and checked for accuracy.</strong>.  <strong>Vetcalculators is not responsible for any errors in calculations based on this calculator.</strong>
<p><a class="button external link button-raised bg-color-teal color-white" href="mailto:info@vetcalculators.com" target="_system">Contact</a></p>
 <p class="font-bold">Human References</p> 
 <div class="p-3"><ol class="p-2" style="list-style-type: decimal;">
   <li> Kratz A, Ferraro M, Sluss PM, Lewandrowski KB. Laboratory reference values. N Engl J Med. 2004;351(15):1548-1563</li>
   <li> Young DS, Huth EJ. SI Units for Clinical Measurement. Philadelphia, PA: American College of Physicians; 1998</li>
   <li> Henry JB, ed. Clinical Diagnosis and Management by Laboratory Methods. 20th ed. Philadelphia, PA: WB Saunders; 2001</li>
   <li>Kasper DL, Braunwald E, Fauci AS, et al, eds. Harrison's Principles of Internal Medicine, 16th ed. New York, NY: McGraw Hill; 2004</li>
   <li>Goldman L, Ausiello D. Cecil Textbook of Medicine. 22nd ed. Philadelphia, PA: WB Saunders; 2004</li>
 </ol>
 <p class="font-bold">Veterinary References</p>
 <ol style="list-style-type: decimal;">
   <li>Latimer KS, Duncan & Prasse’s Veterinary Laboratory Medicine: Clinical Pathology, 5th Ed., Wiley-Blackwell, 2011</li>
   <li>Kaneko JJ, Harvey JW, Bruss ML, Clinical Biochemistry of Domestic Animals, 6th Ed., Academic Press, 2008</li>
  
 </ol></div> 
 

  <p>© Vetcalculators LLC, 2025 - v2.2.0 <span class="right"><a class="external button" title="Privacy Policy" href="http://vetcalculators.com/privacy_policy.html">Privacy Policy</a></span></p>
        </Block>
      </Page>
    </View>
  </Popup>

  

</App>
<script>


  import { onMount } from 'svelte';
   import js from 'jquery';

    import { getDevice }  from 'framework7/lite-bundle';
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,Checkbox,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter, PageContent,Sheet
  } from 'framework7-svelte';
import '../static/html2pdf.bundle.min.js';
import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import store from '../js/store';

const device = getDevice();
// setTimeout(function() {
//   var myCalculator = f7.keypad.create({
//         inputEl: '#myCalc',
//         containerEl: '#calc-container',
//         toolbar: false,
//         dotButton: true,
//         type: 'calculator'
//     });

//  }, 400);
  // Framework7 Parameters
  let f7params = {
    // id: 'com.vetcalculators.medicalunitconverter', // App bundle ID
    name: 'Medical Unit Converter', // App name
    theme: 'auto', // Automatic theme detection
colors: {
    primary: '#5ac8fa'
  },
  sheet: {
    closeByBackdropClick: true,
  },

    // App routes
    routes: routes,
 iosDynamicNavbar: false,
// Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  // Login screen demo data

  onMount(() => {
    f7ready(() => {

      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
         capacitorApp.init(f7);
      }
    let checked = localStorage.getItem("agree");
            setTimeout(function() {
function iagree() {
    js(function(js) {
      
        if (checked === "true") {
       
            js("#agree").prop("checked", 'true');
           
        } else {
            // js("#agree").prop("checked", 'false');
            
           setTimeout(function() {
                f7.popup.open("#legal-popup");
            }, 20000);
        }
        // Toggle the visibility
        js("#agree").on("change", function() {
            this.checked ? localStorage.setItem('agree', 'true') : localStorage.removeItem('agree');
        });
    });
}
iagree();
  

js("#agreeclose").on("click", function() {
localStorage.setItem('agree', 'true');
});


            }, 1000);   

    });
  })


</script>