import $ from 'jquery';
import css from '../css/style.css';

// Load jQurey
window.$ = $;

// Alert for dialog
const _alert = {
    forcible: function (opt = {}) {
        _common.warn();
        if (!checkBrowser()) { _common.info(); _common.rmcss(); return; };

        // If browser is IE...
        const _tm = setInterval(() => {
            _common.empty();
            let _title = "This webpage doesn't work at Internet Explorer";
            let _message = "This webpage doesn't support Internet Explorer anymore.<br>Please open the browser based on chromium such as Chrome or Firefox.";
            let _btnLabel = "Close";

            opt.title !== undefined && (_title = opt.title);
            opt.msg !== undefined && (_message = opt.msg);
            opt.btn !== undefined && (_btnLabel = opt.btn);

            const html =
            `<div class="alert forcible">
                <header><h2 class="alert-title">${_title}</h2></header>
                <div><p class="alert-message">${_message}</p></div>
                <footer><button class="btn negative close-window">${_btnLabel}</button></footer>
            </div>`;

            $(document.body).html(html);
            $(document).on("click", ".close-window", closeWindow);

            if($(document.body).length > 0) clearInterval(_tm); 
        }, 125);
    },
    
}

// Main functions objs.
window.deprecateIE = {
    alert: _alert
};

 /**
   * <b>Basic messages and common functions, etc.
   * @instance
   */
const _common = {
    warn: function() {
        console.warn("Deprecate IE is enabled!\n Watching the browser status...");
    },
    info: function() {
        console.info("This browser is passed!");
    },
    rmcss: function() {
        $('style').each((idx, e) => { 
            $(e).text().includes("/** Deprecate IE Style Sheet */") && $(e).detach();
        })
    },
    empty: function() {
        $(document.body).html('');
    }
};

 /**
   * <b>Check browser is IE
   * @instance
   */
const checkBrowser = function() {
    return /*@cc_on!@*/false || !!document.documentMode;
};

 /**
   * <b>Close the browser
   * @instance
   */
const closeWindow = function() {
    window.open('','_self').close();
};


