// HIDE ALL DROPDOWN BOXES---------------------------------------------------------------------------------HIDE ALL DROPDOWN BOXES
function hideAll() {
    document.getElementById("dropdown-box-1").innerHTML = ""
    document.getElementById("dropdown-box-2").innerHTML = ""
    document.getElementById("dropdown-box-3").innerHTML = ""
    document.getElementById("dropdown-box-4").innerHTML = ""
    document.getElementById("show-pics").innerHTML = ""
};





// SHOW DROPDOWN BOXES-----------------------------------------------------------------------------------------SHOW DROPDOWN BOXES
function showGreen() {
    hideAll()
    document.getElementById('dropdown-box-1').innerHTML = /*HTML*/`
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
    </div>`
};

// SHOW BLUE DROPBOX---------------------------------------------------------------------------------------------SHOW BLUE DROPBOX
function showBlue() {
    hideAll()
    document.getElementById('dropdown-box-2').innerHTML = /*HTML*/`
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
        </div>`
};

// SHOW RED DROPBOX-----------------------------------------------------------------------------------------------SHOW RED DROPBOX
function showRed() {
    hideAll()
    document.getElementById('dropdown-box-3').innerHTML = /*HTML*/`
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
        </div>`
};

// SHOW YELLOW DROPBOX-----------------------------------------------------------------------------------------SHOW YELLOW DROPBOX
function showYellow() {
    hideAll()
    document.getElementById('dropdown-box-4').innerHTML = /*HTML*/`
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
        </div>`
};





// SHOW PICTURES-----------------------------------------------------------------------------------------------------SHOW PICTURES
function show_pics() {
        hideAll()
        document.getElementById('show-pics').innerHTML = /*HTML*/`
        <div id="change_head">
            <button  onclick="show_head4()">◀</button>
            <img src="img/head1.png">
            <button onclick="show_head2()">▶</button>
        </div>
        <div id="change_body">
            <button onclick="show_body4()">◀</button>
            <img src="img/body1.png">
            <button onclick="show_body2()">▶</button>
        </div>
        <div id="change_legs">
            <button  onclick="show_legs4()">◀</button>
            <img src="img/legs1.png">
            <button onclick="show_legs2()">▶</button>
        </div>`
}

// SHOW HEAD-------------------------------------------------------------------------------------------------------------SHOW HEAD
function show_head1() {
    document.getElementById('change_head').innerHTML = /*HTML*/`
    <button  onclick="show_head4()">◀</button>
    <img src="img/head1.png">
    <button onclick="show_head2()">▶</button>`
}
function show_head2() {
    document.getElementById('change_head').innerHTML = /*HTML*/`
    <button  onclick="show_head1()">◀</button>
    <img src="img/head2.png">
    <button onclick="show_head3()">▶</button>`
}
function show_head3() {
    document.getElementById('change_head').innerHTML = /*HTML*/`
    <button  onclick="show_head2()">◀</button>
    <img src="img/head3.png">
    <button onclick="show_head4()">▶</button>`
}
function show_head4() {
    document.getElementById('change_head').innerHTML = /*HTML*/`
    <button  onclick="show_head3()">◀</button>
    <img src="img/head4.png">
    <button onclick="show_head1()">▶</button>`
}

// SHOW BODY-------------------------------------------------------------------------------------------------------------SHOW BODY
function show_body1() {
    document.getElementById('change_body').innerHTML = /*HTML*/`
    <button  onclick="show_body4()">◀</button>
    <img src="img/body1.png">
    <button onclick="show_body2()">▶</button>`
}
function show_body2() {
    document.getElementById('change_body').innerHTML = /*HTML*/`
    <button  onclick="show_body1()">◀</button>
    <img src="img/body2.png">
    <button onclick="show_body3()">▶</button>`
}
function show_body3() {
    document.getElementById('change_body').innerHTML = /*HTML*/`
    <button  onclick="show_body2()">◀</button>
    <img src="img/body3.png">
    <button onclick="show_body4()">▶</button>`
}
function show_body4() {
    document.getElementById('change_body').innerHTML = /*HTML*/`
    <button  onclick="show_body3()">◀</button>
    <img src="img/body4.png">
    <button onclick="show_body1()">▶</button>`
}

// SHOW LEGS-------------------------------------------------------------------------------------------------------------SHOW LEGS
function show_legs1() {
    document.getElementById('change_legs').innerHTML = /*HTML*/`
    <button  onclick="show_legs4()">◀</button>
    <img src="img/legs1.png">
    <button onclick="show_legs2()">▶</button>`
}
function show_legs2() {
    document.getElementById('change_legs').innerHTML = /*HTML*/`
    <button  onclick="show_legs1()">◀</button>
    <img src="img/legs2.png">
    <button onclick="show_legs3()">▶</button>`
}
function show_legs3() {
    document.getElementById('change_legs').innerHTML = /*HTML*/`
    <button  onclick="show_legs2()">◀</button>
    <img src="img/legs3.png">
    <button onclick="show_legs4()">▶</button>`
}
function show_legs4() {
    document.getElementById('change_legs').innerHTML = /*HTML*/`
    <button  onclick="show_legs3()">◀</button>
    <img src="img/legs4.png">
    <button onclick="show_legs1()">▶</button>`
}