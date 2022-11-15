let ifRadiusChosen=false;
//let radius;
let array = new Array();



function getData() {
    const table = document.getElementById("table1");
    const rows = table.getElementsByTagName('td');
    for (let i = array.length*4;i<rows.length;i=i+4) {
        let array1 = new Array();
        for (let j=0;j<4;j++) {
            if (rows[i+j].innerHTML.match(/true|false|-?[0-9]\.?[0-9]*/) === null) continue;
            array1.push(rows[i+j].innerHTML.match(/true|false|-?[0-9]\.?[0-9]*/)[0]);
        }
        if (array1.length === 0) continue;
        let hit;
        if (array1[3] ==='true') hit = true
        else hit = false
        let obj = {
            x:array1[0],
            y:array1[1],
            r:array1[2],
            hit:hit
        };
        drawDot(array1[0],array1[1],hit);
        array.push(obj);
    }
}

function getCursorPosition(canvas,event) {
    if (document.getElementById("j_idt10:textR").value>0) {
        let pos = canvas.getBoundingClientRect();
        let x = ((event.clientX - pos.left -250)/50).toFixed(2);
        let y = ((150 - (event.clientY - pos.top))/50).toFixed(2);
        //send(x,y);
        document.getElementById("j_idt10:xVal_input").value=x
        document.getElementById("j_idt10:textY").value=y
        document.getElementById("j_idt10:button").click()
        //setHiddenValues(x,y)
        //drawDot(x,y,true);

    }
    else {
        alert("Select radius");
    }
}

function addEventListenerToCanvas() {
    const canvas = document.querySelector('canvas');
    canvas.addEventListener("mousedown", function (e) {
        getCursorPosition(canvas,e);
    })
}

function removeRow() {
    document.getElementById("table2").getElementsByTagName("tbody")[0].remove();
}