// MODEL ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');

let dropbox1 = document.getElementById("dropdown-box-1");
let dropbox2 = document.getElementById("dropdown-box-2");
let dropbox3 = document.getElementById("dropdown-box-3");
let dropbox4 = document.getElementById("dropdown-box-4");
let dropbox5 = document.getElementById("show-pics");

// VIEW /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
    let html = /*HTML*/ `
    <button>Ingen layout</button>
    <button>Vertikal layout</button>
    <button>Horisontal layout</button>
    <button>Grid layout</button>
    <h1>Eksempel 1</h1>
    <div class="container">
    <h2 class="header-green" onclick="showGreen()">Verktøy</h2>
    <div id="${dropbox1}"></div>
    <h2 class="header-blue" onclick="showBlue()">HTML</h2>
    <div id="${dropbox2}"></div>
    <h2 class="header-red" onclick="showRed()">CSS</h2>
    <div id="${dropbox3}"></div>
    <h2 class="header-yellow" onclick="showYellow()">JavaScript</h2>
    <div id="${dropbox4}"></div>
    <h2 class="header-dark" onclick="show_pics()">Hode, kropp og ben</h2>
    <div id="${dropbox5}" class="pic-slide-box"></div>
    </div>
    `
    app.innerHTML = html;
}

// SHOW GREEN DROPBOX---------------------------------------------------------------------------------SHOW GREEN DROPBOX
function showGreen() {
    app.innerHTML = ""
    app.innerHTML = /*HTML*/`
    <button>Ingen layout</button>
    <button>Vertikal layout</button>
    <button>Horisontal layout</button>
    <button>Grid layout</button>
    <h1>Eksempel 1</h1>
    <div class="container">
    <h2 class="header-green" onclick="showGreen()">Verktøy</h2>
    <div id="${dropbox1}">
    <div id="dropdown-box-1">
    <div class="dropdown-box">
    De to viktigste verktøyene vi skal bruke er disse:
    <ul>
    <li>
    Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
    <br>Vi skal bruke noen <i>extensions</i>:
    <ul>
    <li>JavaScript-booster</li>
    <li>es6-string-html</li>
    <li>live-server</li>
    <li>live-share</li>
    </ul>
    </li>
    <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
    </ul>
    </div>
    </div>
    </div>
    <h2 class="header-blue" onclick="showBlue()">HTML</h2>
    <div id="${dropbox2}"></div>
    <h2 class="header-red" onclick="showRed()">CSS</h2>
    <div id="${dropbox3}"></div>
    <h2 class="header-yellow" onclick="showYellow()">JacaScript</h2>
    <div id="${dropbox4}"></div>
    <h2 class="header-dark" onclick="show_pics()">Hode, kropp og ben</h2>
    <div id="${dropbox5}" class="pic-slide-box"></div>
    </div>
    
    
    
    `
};
// SHOW BLUE DROPBOX-----------------------------------------------------------------------------------SHOW BLUE DROPBOX
function showBlue() {
    app.innerHTML = "";
    app.innerHTML = /*HTML*/`
    <button>Ingen layout</button>
    <button>Vertikal layout</button>
    <button>Horisontal layout</button>
    <button>Grid layout</button>
    <h1>Eksempel 1</h1>
    <div class="container">
    <h2 class="header-green" onclick="showGreen()">Verktøy</h2>
    <div id="${dropbox1}"></div>
    <h2 class="header-blue" onclick="showBlue()">HTML</h2>
    <div id="${dropbox2}">
    <div id="dropdown-box-2">
    <div class="dropdown-box">
    Vi bruker HTML til å definere et dokument.
    <ul>
    <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
    <li>Tagger for grunnleggende formatering av tekst</li>
    <li><tt>&lt;div&gt;</tt></li>
    <li><tt>&lt;input type="text"&gt;</tt></li>
    <li><tt>&lt;button&gt;</tt></li>
    <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
    </li>
    <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <h2 class="header-red" onclick="showRed()">CSS</h2>
    <div id="${dropbox3}"></div>
    <h2 class="header-yellow" onclick="showYellow()">JacaScript</h2>
    <div id="${dropbox4}"></div>
    <h2 class="header-dark" onclick="show_pics()">Hode, kropp og ben</h2>
    <div id="${dropbox5}" class="pic-slide-box"></div>
    </div>
    `
};
// SHOW RED DROPBOX-------------------------------------------------------------------------------------SHOW RED DROPBOX
function showRed() {
    app.innerHTML = "";
    app.innerHTML = /*HTML*/`
    <button>Ingen layout</button>
    <button>Vertikal layout</button>
    <button>Horisontal layout</button>
    <button>Grid layout</button>
    <h1>Eksempel 1</h1>
    <div class="container">
    <h2 class="header-green" onclick="showGreen()">Verktøy</h2>
    <div id="${dropbox1}"></div>
    <h2 class="header-blue" onclick="showBlue()">HTML</h2>
    <div id="${dropbox2}"></div>
    <h2 class="header-red" onclick="showRed()">CSS</h2>
    <div id="${dropbox3}">
    <div id="dropdown-box-3">
    <div class="dropdown-box">
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
    <ul>
    <li><tt>background-color</tt></li>
    <li><tt>color</tt></li>
    <li><tt>padding</tt></li>
    <li><tt>margin</tt></li>
    <li><tt>border</tt></li>
    <li><tt>text-align</tt></li>
    <li><tt>font-size</tt></li>
    <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
    <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
    <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
    </li>
    <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <h2 class="header-yellow" onclick="showYellow()">JacaScript</h2>
    <div id="${dropbox4}"></div>
    <h2 class="header-dark" onclick="show_pics()">Hode, kropp og ben</h2>
    <div id="${dropbox5}" class="pic-slide-box"></div>
    </div>
    `
};
// SHOW YELLOW DROPBOX-------------------------------------------------------------------------------SHOW YELLOW DROPBOX
function showYellow() {
    app.innerHTML = "";
    app.innerHTML = /*HTML*/`
    <button>Ingen layout</button>
    <button>Vertikal layout</button>
    <button>Horisontal layout</button>
    <button>Grid layout</button>
    <h1>Eksempel 1</h1>
    <div class="container">
    <h2 class="header-green" onclick="showGreen()">Verktøy</h2>
    <div id="${dropbox1}"></div>
    <h2 class="header-blue" onclick="showBlue()">HTML</h2>
    <div id="${dropbox2}"></div>
    <h2 class="header-red" onclick="showRed()">CSS</h2>
    <div id="${dropbox3}"></div>
    <h2 class="header-yellow" onclick="showYellow()">JavaScript</h2>
    <div id="${dropbox4}">
    <div id="dropdown-box-4">
    <div class="dropdown-box">
    <div>
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
                    ved
                    å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
                    <ul>
                    <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                    Moodle.</li>
                    <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                    Reference</a></li>
                    
                    </ul>
                    </div>
                    </div>
                    </div>
                    </div>
                    <h2 class="header-dark" onclick="show_pics()">Hode, kropp og ben</h2>
                    <div id="${dropbox5}" class="pic-slide-box"></div>
                    </div>
                    `
};
// SHOW PICTURES-------------------------------------------------------------------------------------------SHOW PICTURES
function show_pics() {
    app.innerHTML = "";
    app.innerHTML = /*HTML*/`
                    <button>Ingen layout</button>
                    <button>Vertikal layout</button>
                    <button>Horisontal layout</button>
                    <button>Grid layout</button>
                    <h1>Eksempel 1</h1>
                    <div class="container">
                    <h2 class="header-green" onclick="showGreen()">Verktøy</h2>
                    <div id="${dropbox1}"></div>
                    <h2 class="header-blue" onclick="showBlue()">HTML</h2>
                    <div id="${dropbox2}"></div>
                    <h2 class="header-red" onclick="showRed()">CSS</h2>
                    <div id="${dropbox3}"></div>
                    <h2 class="header-yellow" onclick="showYellow()">JavaScript</h2>
                    <div id="${dropbox4}"></div>
                    <h2 class="header-dark" onclick="show_pics()">Hode, kropp og ben</h2>
                    <div id="${dropbox5}" class="pic-slide-box">
                    <div id="change_head">
                    <button  onclick="changeDownHead()">◀</button>
                    <img src="img/head${headImgIndex}.png">
                    <button onclick="changeUpHead()">▶</button>
                    </div>
                    <div id="change_body">
                    <button onclick="changeDownBody()">◀</button>
                    <img src="img/body${bodyImgIndex}.png">
                    <button onclick="changeUpBody()">▶</button>
                    </div>
                    <div id="change_legs">
                    <button  onclick="changeDownLegs()">◀</button>
                    <img src="img/legs${legsImgIndex}.png">
                    <button onclick="changeUpLegs()">▶</button>
                    </div>
                    </div>
                    </div>
                    `
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Changes head image <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let headImgIndex = 1;
function changeHead() {
    document.getElementById('change_head').innerHTML = /*HTML*/`
    <button  onclick="changeDown()">◀</button>
    <img src="img/head${headImgIndex}.png">
    <button onclick="changeUp()">▶</button>`
}
function changeUpHead() {
    if (headImgIndex < 4) {
        headImgIndex++
    } else { headImgIndex = 1 }
    console.log(headImgIndex)
    show_pics()
}
function changeDownHead() {
    if (headImgIndex > 1) {
        headImgIndex--
    } else (headImgIndex = 4)
    console.log(headImgIndex)
    show_pics()
}
// Changes body image <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let bodyImgIndex = 1;
function changeBody() {
    document.getElementById('change_body').innerHTML = /*HTML*/`
    <button  onclick="changeDownBody()">◀</button>
    <img src="img/body${bodyImgIndex}.png">
    <button onclick="changeUpBody()">▶</button>`
}
function changeUpBody() {
    if (bodyImgIndex < 4) {
        bodyImgIndex++
    } else { bodyImgIndex = 1 }
    console.log(bodyImgIndex)
    show_pics()
}
function changeDownBody() {
    if (bodyImgIndex > 1) {
        bodyImgIndex--
    } else (bodyImgIndex = 4)
    console.log(bodyImgIndex)
    show_pics()
}
// Changes legs image <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let legsImgIndex = 1;
function changeLegs() {
    document.getElementById('change_legs').innerHTML = /*HTML*/`
    <button  onclick="changeDownLegs()">◀</button>
    <img src="img/legs${legsImgIndex}.png">
    <button onclick="changeUpLegs()">▶</button>`
}
function changeUpLegs() {
    if (legsImgIndex < 4) {
        legsImgIndex++
    } else { legsImgIndex = 1 }
    console.log(legsImgIndex)
    show_pics()
}
function changeDownLegs() {
    if (legsImgIndex > 1) {
        legsImgIndex--
    } else (legsImgIndex = 4)
    console.log(legsImgIndex)
    show_pics()
}



