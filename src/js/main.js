document.getElementById("refCards").addEventListener("load", generateCards);

/* References array */
var refCards = [
    { "text": "RealPython", "link": "https://realpython.com", "lang": "py", "topic": "sys" },
    { "text": "LaraCasts", "link": "https://laracasts.com", "lang": "php", "topic": "webdev" },
    { "text": "UIKit", "link": "https://getuikit.com/docs", "lang": "css", "topic": "webdev" },
    { "text": "Flask", "link": "https://flask.palletsprojects.com", "lang": "py", "topic": "webdev" },
    { "text": "Dash", "link": "https://dash.plotly.com", "lang": "py", "topic": "webdev" },
    { "text": "PS Gallery", "link": "https://powershellgallery.com", "lang": "pwsh", "topic": "pkg" },
    { "text": "NPM", "link": "https://npmjs.com", "lang": "node", "topic": "pkg" },
    { "text": "W3Schools – PHP", "link": "https://www.w3schools.com/php/php_ref_overview.asp", "lang": "php", "topic": "webdev" },
    { "text": "PyPi", "link": "https://pypi.org", "lang": "py", "topic": "pkg" },
    { "text": "PowerShell Core Docs", "link": "https://aka.ms/powershell", "lang": "pwsh", "topic": "sys" },
    { "text": "Composer – Packagist", "link": "https://packagist.org/", "lang": "php", "topic": "pkg" },
    { "text": "Bash – Mankier", "link": "https://www.mankier.com/", "lang": "bash", "topic": "sys" },
    { "text": "Cht.Sh", "link": "https://cht.sh", "lang": "bash", "topic": "sys" },
    { "text": "Wttr.In", "link": "https://wttr.in", "lang": "bash", "topic": "webdev" }
];


/* Generate reference cards */
function generateCards() {

    var noOfCards = refCards.length;

    if (noOfCards > 0) {

        var uList = document.getElementById("refCards");
        uList.innerHTML = "";

        for (var i = 0; i < noOfCards; i++) {

            var liCard = document.createElement("li");
            liCard.setAttribute('data-lang', refCards[i]['lang']);
            liCard.setAttribute('data-topic', refCards[i]['topic']);

            var aHref = document.createElement("a");
            aHref.setAttribute('href', refCards[i]['link']);
            aHref.setAttribute('class', 'uk-card uk-card-default uk-card-body uk-card-hover uk-box-shadow-medium uk-box-shadow-hover-large');

            liCard.appendChild(aHref);

            var txtCard = document.createElement("h4");
            txtCard.setAttribute('class', 'uk-link-heading');
            txtCard.innerHTML = refCards[i]['text']

            aHref.appendChild(txtCard)

            uList.appendChild(liCard);
        }
    }
}