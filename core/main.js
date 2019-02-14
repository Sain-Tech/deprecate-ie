import $ from 'jquery';
import css from '../css/style.css';

// Load jQurey
window.$ = $;

// Alert for dialog
const _alert = {
    forcible: function(msg) {
        _common();
        if(checkBrowser()) return;

        // If browser is IE...
        emptyContent();
        
    },
    
}

// Main functions
window.deprecateIE = {
    alert: _alert
}

 /**
   * <b>Empty all contents
   * @instance
   */
const emptyContent = function() {
    $(document.body).html('');
}

 /**
   * <b>Basic warning message
   * @instance
   */
const _common = function() {
    console.warn("Deprecate IE is enabled!\n Watching the browser status...");
}

 /**
   * <b>Check browser is IE
   * @instance
   */
const checkBrowser = function() {
    return /*@cc_on!@*/false || !!document.documentMode;
}




