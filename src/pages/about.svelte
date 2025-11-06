<Page>
<Navbar class="print:hidden">
  <NavLeft backLink="Back"></NavLeft>
  <NavTitle center><i class="fa-fw fad fa-info-circle fa-2x fa-fw"></i> About Medical Converter</NavTitle>
 
</Navbar>
        <div class="card mx-1">

<div class="w-full mx-auto">
        <div class="p-2">

<Link class="legal mb-2 border rounded p-2" popupOpen="#legal-popup"  > <i class="fa-fw fad fa-balance-scale fa-lg fa-fw"></i>
                                    <div class="text-lg"> Legal Information</div></Link>

                                    <Link class="mb-2 external border rounded p-2 text-lg" title="Privacy Policy" href="http://vetcalculators.com/privacy_policy.html">Privacy Policy</Link>

       
<p class="mb-2 text-base font-bold p-2">

🌐 Transform Medical Metrics on the Fly: Your Ultimate Conversion Companion for Both Human & Veterinary Medicine 🌐</p>
<p>Since the World Health Assembly's endorsement in 1977, the Système Internationale d’Unites (SI) has been universally embraced in healthcare settings around the globe. But while the SI system is becoming a standard in the United States, the transition isn't complete, causing headaches for medical professionals and researchers.</p>


Why You'll Love Medical Unit Converter:
<ul>
<li>🔄 Instant Conversions: Simply input a figure in either the US customary or SI unit format, and watch it transform instantly. No manual calculations required.</li>
<li>🐾 Human & Veterinary Medicine: Whether you're a physician treating humans or a veterinarian caring for animals, effortlessly toggle between both disciplines.</li>
<li>🔍 Smart Search: Save time with our intuitive search feature. Start typing the test or unit name to find it rapidly.</li>
<li>📊 Up-to-Date Database: Our unit database is meticulously maintained and constantly updated to reflect emerging changes in medical standards.</li>
<li>🛠 Built for Professionals, by Professionals: Designed with the needs of healthcare experts in mind, this tool aids in research, diagnoses, and treatments.</li>
<li>🌐 Global Reach: With support for both US and International medical units, you're equipped for practice or research, no matter where in the world you are.</li>
</ul>

<p class="mb-2"> The laboratory values and reference ranges are provided for illustration only and are not intended to be comprehensive or definitive. Each laboratory determines its own values, and reference ranges are highly method dependent.</p>
<strong>The conversion factors are derived from the current literature and have been applied as published. Therefore, we cannot take any responsibility for their validity.</strong>
<strong>Each calculation should be thoroughly researched and checked for accuracy. Please consult with a Medical Professional if indicated.</strong>.  <strong class="text-lg">Vetcalculators is not responsible for any errors in calculations based on this calculator.</strong>

 <div class="p-3">
 
 <p class="font-bold text-base">Human References</p> <ol class="p-2" style="list-style-type: decimal;">
   <li> Kratz A, Ferraro M, Sluss PM, Lewandrowski KB. Laboratory reference values. N Engl J Med. 2004;351(15):1548-1563</li>
   <li> Young DS, Huth EJ. SI Units for Clinical Measurement. Philadelphia, PA: American College of Physicians; 1998</li>
   <li> Henry JB, ed. Clinical Diagnosis and Management by Laboratory Methods. 20th ed. Philadelphia, PA: WB Saunders; 2001</li>
   <li>Kasper DL, Braunwald E, Fauci AS, et al, eds. Harrison's Principles of Internal Medicine, 16th ed. New York, NY: McGraw Hill; 2004</li>
   <li>Goldman L, Ausiello D. Cecil Textbook of Medicine. 22nd ed. Philadelphia, PA: WB Saunders; 2004</li>
 </ol>
 <p class="font-bold text-base">Veterinary References</p>
 <ol class="p-2" style="list-style-type: decimal;">
   <li>Latimer KS, Duncan & Prasse’s Veterinary Laboratory Medicine: Clinical Pathology, 5th Ed., Wiley-Blackwell, 2011</li>
   <li>Kaneko JJ, Harvey JW, Bruss ML, Clinical Biochemistry of Domestic Animals, 6th Ed., Academic Press, 2008</li>
  
 </ol>
 </div> 
 

        </div>

  <div class="text-base text-center font-bold mt-1">Share Medical Unit Calculator</div><div class="text-center">
  <a href="" class="link sharevet"><i class="fab fa-instagram-square fa-fw fa-3x color-red icon"></i><i class="fab fa-facebook-square fa-fw fa-3x color-blue icon"></i><i class="fab fa-twitter-square fa-fw fa-3x color-lightblue icon"></i></a>
  </div>
  

</div>

<p class="text-lg mt-2 text-center"> © Vetcalculators LLC, 2025 - v2.0.0</p> <p class="text-center"><a class="mx-auto w-1/2 md:w-1/4 if-ios external link button button-large button-raised" href="#" on:click|preventDefault={() => openUrl("mailto:info@vetcalculators.com?subject=Medical Unit Calculator App v2.0.0 iOS Contact")} target="_system">Contact</a><a class="w-1/2 md:w-1/4 if-md external link button button-large button-raised" href="#" on:click|preventDefault={() => openUrl("mailto:info@vetcalculators.com?subject=Medical Unit Calculator App v2.0.0 Android Contact")} target="_system">Contact</a></p>
        </div>
      
</Page>
<script>
 import js from 'jquery';
 import { Share } from '@capacitor/share';
import { Browser } from '@capacitor/browser';
import { AppLauncher } from '@capacitor/app-launcher';
  import {f7, Page,PageContent, Navbar,NavLeft,NavTitle, Block, BlockTitle, Link } from 'framework7-svelte';

   js(document).on("click", ".sharevet", function() {
                setTimeout(function() {
                     if (f7.device.ios) {
                    Share.share({
                        title: "Medical Unit Calculator",
                        text: "Convert Medical US to SI Units",
                        url: "https://apps.apple.com/us/app/medical-unit-converter/id1497170729",
                        dialogTitle: "Medical Unit Calculator App"
                    });
                     } else if (f7.device.android) {
                         Share.share({
                           title: "Medical Unit Calculator",
                           text: "Convert Medical US to SI Units",
                           url: "https://play.google.com/store/apps/details?id=com.vetcalculators.android",
                           dialogTitle: "Medical Unit Calculator App",
                         });
                     }
                }, 200);
            });

            async function openUrl(url) {
  try {
    // Check if it's a mailto link
    if (url.startsWith('mailto:')) {
      // For mailto links, we need to use a different approach
      if (Capacitor.isNativePlatform()) {
        // For native apps, use App plugin to open the mail app
        await AppLauncher.openUrl({ url });
      } else {
        // For web, we can use the standard window.open
        window.open(url);
      }
    } else {
      // For normal http/https links, use Browser plugin
      await Browser.open({ url });
    }
  } catch (error) {
    console.error('Error opening URL:', error);
    
    // Fallback for older versions or if other methods fail
    try {
      window.open(url, '_system');
    } catch (fallbackError) {
      console.error('Fallback error:', fallbackError);
      // Last resort - just try to navigate directly
      window.location.href = url;
    }
  }
}
</script>
