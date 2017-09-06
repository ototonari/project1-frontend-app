var size = 5;
var clear = true;
var boxcount;
var starttime;
var score;
var locFixer = [-6, -5, -4, -1, 1, 4, 5, 6];
locFixer = [];
var name = "名無しさん"
var diff;

function start()
{
    convlevel();
    setlevel();
    setname();
    document.getElementById("start").style.visibility = "hidden";

    var parent_object = document.getElementById("stage");
    var counter = 0;
    var table_element = document.createElement("table");
    for (var i = 1; i <= size; i++){
        var tr_element = document.createElement("tr");
        
        for (var j = 1; j <= size; j++){
            var td_element = document.createElement("td");
            td_element.id = (i - 1) * size + j;

            var min = 1 ;
            var max = 4 ;
            var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
            if ((i == 1 || i == size) || (j == 1 || j == size)){
                td_element.classList = -1;
            }else if (a % 4 == 0){
                td_element.addEventListener('click', clicked);
                td_element.classList = 1;
            }else{
                td_element.addEventListener('click', clicked);
                td_element.classList = 0;
                counter++;
            }
            
            
            tr_element.appendChild(td_element);
        }
        table_element.appendChild(tr_element);
        boxcount = counter;
    }
    parent_object.appendChild(table_element);
    starttime = new Date;
}
function cll(event) 
{
    if (clear){
        var target = event.target
        var c = count(target.id, false);
        if ( c == 0 ){
            target.classList = 2;
            boxcount--;
            aroundopen(target.id)
        }else if ( target.classList == 0 ){
            target.classList = 2;
            boxcount--;
            count(target.id, true)
        }else if ( target.classList == 1 ){
            mime(target.id);
            clear = false;
        }
        check();
    }
    
}

function mime(loc){
    var target = document.getElementById(loc);
    target.innerText = "×";
    target.style.backgroundColor = "red";
}

function clicked(event) 
{
    if (clear){
        var target = event.target
        if(target.classList == null){
            target = document.getElementById(event)
        }
        if ( target.classList == 0 ){
            var c = count2(target.id);
            if(c >= 1){
                open(target.id, c);
            }else if(c == 0){
                open(target.id, c);
                
            }
            
        }else if ( target.classList == 1 ){
            clear = false;

            mime(target.id);
        }
        check();

    }
    
}

function aroundopen(loc)
{
    for (var i = 0; i <= 7; i++){
        var tmpLoc = locFixer[i] + parseInt(loc);
        if ( tmpLoc >= 1 && tmpLoc <= size*size && document.getElementById(tmpLoc).classList == 0 ){
            clicked(tmpLoc);
        };
        
    };
}    



function check(){
    if( clear && boxcount == 0 ){
        timecount();
        gameclear();
        clear = false;
        showall();
        setdata()
    }else if(clear == false){
        showall();
        gameover();
    }

    
}

function timecount(){
    var endtime = new Date;
    var diff = endtime - starttime;
    score = diff / 1000;
    var doc = document.createElement("p")
    var parent_object = document.getElementById("status");
    doc.innerText = score + "  seconds";
    parent_object.appendChild(doc);
}

function gameclear(){
    var doc = document.createElement("p")
    doc.classList = "clear";
    doc.innerText = "Mr." + name + "  congratulations!";
    var parent_object = document.getElementById("status");
    parent_object.appendChild(doc);
}

function gameover(){
    var doc = document.createElement("p")
    doc.innerText = "GAME OVER";
    var parent_object = document.getElementById("status");
    parent_object.appendChild(doc);
}

function senddata() {
    $.ajax({
        url: "new",
        type: "GET",
        data: {score : score, name : name},
        datatyape: "html",
        success: function(data){
            //成功時の処理
        },
        error: function(data){
            var doc = document.getElementById("status")
            doc.innerText = "senddata Failure."
        }
    });
}

function setdata() {
    var doc_name = document.getElementById("score_name")
    var doc_score = document.getElementById("score_score")
    var doc_difficulty = document.getElementById("score_difficulty")
    doc_name.value = name;
    doc_score.value = score;
    doc_difficulty.value = diff;
    var doc_submit = document.getElementById("submit")
    doc_submit.disabled = false;
}

function count(loc, flug)
{
    var counter = 0;
    if (flug == true)
    {
        for (var i = 0; i <= 7; i++){
            var tmpLoc = locFixer[i] + parseInt(loc);
            if ( tmpLoc >= 1 && tmpLoc <= size*size && document.getElementById(tmpLoc).classList == 1 ){
                counter++;
            }else if ( tmpLoc >= 1 && tmpLoc <= size*size && document.getElementById(tmpLoc).classList == 0 ){
                var c = count(tmpLoc, false)
                if ( c == 0 ){
                    var a = document.getElementById(tmpLoc);
                    a.click();
                    aroundopen(tmpLoc);
                };
            };
        };
    }else{

        for (var i = 0; i <= 7; i++){
            var tmpLoc = locFixer[i] + parseInt(loc);
            if ( tmpLoc >= 1 && tmpLoc <= size*size && document.getElementById(tmpLoc).classList == 1 ){
                counter++;
            };
        };
        return counter;
    }
    document.getElementById(loc).innerText = counter;
};

function showall()
{
    for (var i = 1; i <= size*size; i++){
        var target = document.getElementById(i);
        if(target.classList == 1){
            mime(target.id);
        }
    }
}

function count2(loc){
    var counter = 0;
    for (var i = 0; i <= 7; i++){
        var tmpLoc = locFixer[i] + parseInt(loc);
        if ( tmpLoc >= 1 && tmpLoc <= size*size && document.getElementById(tmpLoc).classList == 1 ){
            counter++;
        }else if ( tmpLoc >= 1 && tmpLoc <= size*size && document.getElementById(tmpLoc).classList == 0 ){
            
        };
    };

    return counter;
}

function open(loc, num_v){
    var num = num_v || 0;
    var target = document.getElementById(loc)
    target.classList = 2;
    boxcount--;
    if(num >= 0){
        target.innerText = num;
    }
}

function setlevel(){
    var target = document.getElementById("level")
    size = target.value;
    for (var i = -1; i<= 1; i++){
        for(var j = -1; j <= 1; j++){
            var tmp = i*size;
            tmp += j;
            if(tmp != 0){
                locFixer.push(tmp);
            }
        }
    }
}

function setname(){
    var target = document.getElementById("name");
    if (target.value != ""){
        name = target.value;
    }
}

function convlevel() {
    var tar = document.getElementById("level")
    switch (tar.value){
        case "5":
            diff = "easy"
            break;
        case "7":
            diff = "normal"
            break;
        case "9":
            diff = "impossible"
            break;
        default:
            diff = "unknown"
            break;
    }
}