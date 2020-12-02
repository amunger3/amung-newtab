(function() {
    // Theme switch
    var themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        initTheme(); // if user has already selected a specific theme -> apply it
        themeSwitch.addEventListener('change', function(event) {
            resetTheme(); // update color theme
        });

        function initTheme() {
            var darkThemeSelected = (localStorage.getItem('theme-switch') !== null && localStorage.getItem('theme-switch') === 'dark');
            // update checkbox
            themeSwitch.checked = darkThemeSelected;
            // update body data-theme attribute
            darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
        };

        function resetTheme() {
            if (themeSwitch.checked) { // dark theme has been selected
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme-switch', 'dark');
            } else {
                document.body.removeAttribute('data-theme');
                localStorage.removeItem('theme-switch');
            }
        };
    }


    // Main Header component JS
    var mainHeader = document.getElementsByClassName('js-main-header')[0];
    if (mainHeader) {
        var trigger = mainHeader.getElementsByClassName('js-main-header__nav-trigger')[0],
            nav = mainHeader.getElementsByClassName('js-main-header__nav')[0];
        //detect click on nav trigger
        trigger.addEventListener("click", function(event) {
            event.preventDefault();
            var ariaExpanded = !Util.hasClass(nav, 'main-header__nav--is-visible');
            //show nav and update button aria value
            Util.toggleClass(nav, 'main-header__nav--is-visible', ariaExpanded);
            trigger.setAttribute('aria-expanded', ariaExpanded);
            if (ariaExpanded) { //opening menu -> move focus to first element inside nav
                nav.querySelectorAll('[href], input:not([disabled]), button:not([disabled])')[0].focus();
            }
        });
    }
}());