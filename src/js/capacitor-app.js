var capacitorApp = {
  f7: null,
  /*
  This method hides splashscreen after 2 seconds
  */
  handleSplashscreen: function () {
    var f7 = capacitorApp.f7;
    if (!window.Capacitor) return;
    setTimeout(() => {
      if (window.Capacitor.Plugins && window.Capacitor.Plugins.SplashScreen) {
        window.Capacitor.Plugins.SplashScreen.hide();
      }
    }, 5000);
  },
  /*
  This method prevents back button tap to exit from app on android.
  In case there is an opened modal it will close that modal instead.
  In case there is a current view with navigation history, it will go back instead.
  */
  handleAndroidBackButton: function () {
    var f7 = capacitorApp.f7;
    const $ = f7.$;
    if (!window.Capacitor || !window.Capacitor.Plugins.App) return;
    window.Capacitor.Plugins.App.addListener(
      'backButton',
      function () {
        if ($('.actions-modal.modal-in').length) {
          f7.actions.close('.actions-modal.modal-in');
          return;
        }
        if ($('.dialog.modal-in').length) {
          f7.dialog.close('.dialog.modal-in');
          return;
        }
        if ($('.sheet-modal.modal-in').length) {
          f7.sheet.close('.sheet-modal.modal-in');
          return;
        }
        if ($('.popover.modal-in').length) {
          f7.popover.close('.popover.modal-in');
          return;
        }
        if ($('.popup.modal-in').length) {
          if ($('.popup.modal-in>.view').length) {
            const currentView = f7.views.get('.popup.modal-in>.view');
            if (currentView && currentView.router && currentView.router.history.length > 1) {
              currentView.router.back();
              return;
            }
          }
          f7.popup.close('.popup.modal-in');
          return;
        }
        if ($('.login-screen.modal-in').length) {
          f7.loginScreen.close('.login-screen.modal-in');
          return;
        }

        if ($('.page-current .searchbar-enabled').length) {
          f7.searchbar.disable('.page-current .searchbar-enabled');
          return;
        }

        if ($('.page-current .card-expandable.card-opened').length) {
          f7.card.close('.page-current .card-expandable.card-opened');
          return;
        }

        const currentView = f7.views.current;
        if (currentView && currentView.router && currentView.router.history.length > 1) {
          currentView.router.back();
          return;
        }

        if ($('.panel.panel-in').length) {
          f7.panel.close('.panel.panel-in');
          return;
        }
      },
      false,
    );
  },
  /*
  This method does the following:
    - provides cross-platform view "shrinking" on keyboard open/close
    - hides keyboard accessory bar for all inputs except where it required
  */
printing: function () {
var f7 = capacitorApp.f7;
const $ = f7.$;

js(document).on("click", ".printme", function(e) {
        e.preventDefault();
        
        
        js("input").each(function() {
            var val = js(this).val();
            js(this).attr("value", val);
        });
        
        js(this).each(function(index) {
           
            var printLink = js(this).data("print");
            var gridElement = js("#" + printLink);
            var clonePrint = js(gridElement).clone();
            var printableContent = "";
            var printableContent = js("<div id=" + printLink + "'printthis'>").append(js(gridElement).clone()).html();
            var htmlContent = '<!DOCTYPE html><head><meta charset="utf-8" /><link rel="stylesheet" href="capacitor://localhost/static/framework7.bundle.min.css"><link rel="stylesheet" href="capacitor://localhost/tailwind.css"><link rel="stylesheet" href="capacitor://localhost/print.css"><style>body{width: 21cm; }.hidden-print{display:none !important;}.dosage, .load, .total, .vol {background: #eeeeee !important;} #' + printLink + '{position: relative;overflow:visible!important;} html, body {width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;}.form-select {background-image:none;}#chart svg{width:100%;}.bb svg {transform: scale(1.2,1.2);} img.chocolateimg{max-height:150px;}#breed_image{max-height:150px;}#breed_data_table td.breed-values{word-break:break-word;}img.grim-img{max-height:100px;}img.grim-img1{max-height:70px;}img.grim-img2{max-height:200px;}img, .page-content, #recoverPage, #fluidsPage {page-break-inside: avoid !important;}body { transform: scale(0.97);}input[type="radio"], input[type="checkbox"]{color-adjust: exact;-webkit-print-color-adjust: exact   !important;display: block;}</style></head><body>' + printableContent + "</body></html>";
var htmlContent1 = printableContent;
         // window.cordova.plugins.printer.print();
                window.cordova.plugins.printer.print(htmlContent1, {}, function() {
console.log('Print');
                });
           
            console.log(htmlContent1);

        });
        //console.log('Print Clicked');
    });

},

  handleKeyboard: function () {
    var f7 = capacitorApp.f7;
    if (!window.Capacitor || !window.Capacitor.Plugins.Keyboard) return;
    var $ = f7.$;
    var Keyboard = window.Capacitor.Plugins.Keyboard;
    if (!Keyboard) return;
    Keyboard.setResizeMode({ mode: 'native' });
    Keyboard.setScroll({ isDisabled: true });
    Keyboard.setAccessoryBarVisible({ isVisible: false });
    window.addEventListener('keyboardWillShow', () => {
      f7.input.scrollIntoView(document.activeElement, 0, true, true);
    });
    window.addEventListener('keyboardDidShow', () => {
      f7.input.scrollIntoView(document.activeElement, 0, true, true);
    });
    window.addEventListener('keyboardDidHide', () => {
      if (document.activeElement && $(document.activeElement).parents('.messagebar').length) {
        return;
      }
      Keyboard.setAccessoryBarVisible({ isVisible: true });
    });

    $(document).on(
      'touchstart',
      'input, textarea, select',
      function (e) {
        var nodeName = e.target.nodeName.toLowerCase();
        var type = e.target.type;
        var showForTypes = ['datetime-local', 'time', 'date', 'datetime'];
        if (nodeName === 'select' || showForTypes.indexOf(type) >= 0) {
          Keyboard.setAccessoryBarVisible({ isVisible: true });
        } else {
          Keyboard.setAccessoryBarVisible({ isVisible: false });
        }
      },
      true,
    );
  },
  myCalc: function () {
var f7 = capacitorApp.f7;

f7.keypad.create({
        inputEl: '#myCalc',
        containerEl: '#calc-container',
        toolbar: false,
        dotButton: true,
        type: 'calculator'
    });

  },
  init: function (f7) {
    // Save f7 instance
    capacitorApp.f7 = f7;

    // Handle Android back button
    // capacitorApp.handleAndroidBackButton();

    // Handle Splash Screen

    // capacitorApp.handleSplashscreen();

capacitorApp.myCalc();
    // Handle Keyboard
    // capacitorApp.handleKeyboard();
  },
};

export default capacitorApp;
