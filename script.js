$(document).ready(function() {
    for (i = 0; i < 16; i++) {
        $("#container").append('<div class="unit empty"> </div>');       //generate the 16 boxes
    }

    addUnit();
    //addUnit();

    $(document).keyup(function(e) {
        var thisUnit = $(".unit");
        var dir = null;
        var num = null;
        if (e.keyCode == 38) {  //UP
            for (i = 0; i < 16; i++) {
                dir = findDirections(i);
                if (dir.u < 16) {
                    //check that the current unit has content and the one above does not
                    if ($(thisUnit[i]).hasClass("filled") && $(thisUnit[dir.u]).hasClass("empty")) {
                        console.log("Here: " + dir.h);
                        console.log("Up: " + dir.u);
                        console.log("Down: " + dir.d);
                        console.log("Left: " + dir.l);
                        console.log("Right: " + dir.r);
                        console.log(" ");
                        num = $(thisUnit[i]).text();                    //save value of current unit
                        $(thisUnit[dir.u]).toggleClass("empty filled"); //set unit above to filled
                        $(thisUnit[dir.u]).text(num);                   //set value of current to above

                        $(thisUnit[i]).toggleClass("filled empty");     //set current to empty
                        $(thisUnit[i]).text(" ");                       //clear value of current
                    }
                }
            }
        }
        if (e.keyCode == 40) {  //DOWN
            for (i = 0; i < 16; i++) {
                dir = findDirections(i);
                if (dir.d < 16) {
                    //check that the current unit has content and the one below does not
                    if ($(thisUnit[i]).hasClass("filled") && $(thisUnit[dir.d]).hasClass("empty")) {
                        console.log("Here: " + dir.h);
                        console.log("Up: " + dir.u);
                        console.log("Down: " + dir.d);
                        console.log("Left: " + dir.l);
                        console.log("Right: " + dir.r);
                        console.log(" ");
                        num = $(thisUnit[i]).text();                    //save value of current unit
                        $(thisUnit[dir.d]).toggleClass("empty filled"); //set unit below to filled
                        $(thisUnit[dir.d]).text(num);                   //set value of current to below

                        $(thisUnit[i]).toggleClass("filled empty");     //set current to empty
                        $(thisUnit[i]).text(" ");                       //clear value of current
                    }
                }
            }
        }
        if (e.keyCode == 37) {  //LEFT
            for (i = 0; i < 16; i++) {
                dir = findDirections(i);
                if (dir.l < 16) {
                    //check that the current unit has content and the one to the left does not
                    if ($(thisUnit[i]).hasClass("filled") && $(thisUnit[dir.l]).hasClass("empty")) {
                        console.log("Here: " + dir.h);
                        console.log("Up: " + dir.u);
                        console.log("Down: " + dir.d);
                        console.log("Left: " + dir.l);
                        console.log("Right: " + dir.r);
                        console.log(" ");
                        num = $(thisUnit[i]).text();                    //save value of current unit
                        $(thisUnit[dir.l]).toggleClass("empty filled"); //set unit to the left to filled
                        $(thisUnit[dir.l]).text(num);                   //set value of current to left

                        $(thisUnit[i]).toggleClass("filled empty");     //set current to empty
                        $(thisUnit[i]).text(" ");                       //clear value of current
                    }
                }
            }
        }
        if (e.keyCode == 39) {  //RIGHT
            for (i = 0; i < 16; i++) {
                dir = findDirections(i);
                if (dir.r < 16) {
                    //check that the current unit has content and the one to the right does not
                    if ($(thisUnit[i]).hasClass("filled") && $(thisUnit[dir.r]).hasClass("empty")) {
                        console.log("Here: " + dir.h);
                        console.log("Up: " + dir.u);
                        console.log("Down: " + dir.d);
                        console.log("Left: " + dir.l);
                        console.log("Right: " + dir.r);
                        console.log(" ");
                        num = $(thisUnit[i]).text();                    //save value of current unit
                        $(thisUnit[dir.r]).toggleClass("empty filled"); //set unit to the right to filled
                        $(thisUnit[dir.r]).text(num);                   //set value of current to right

                        $(thisUnit[i]).toggleClass("filled empty");     //set current to empty
                        $(thisUnit[i]).text(" ");                       //clear value of current
                    }
                }
            }
        }
    })

    function findDirections(gridNum) {
        var directions = {h: gridNum, u: 0, d: 0, l: 0, r: 0};

        //determine unit above
        if (gridNum > 3) {
            directions.u = gridNum - 4;
        }
        else {
            directions.u = 16;
        }

        //determine unit below
        if (gridNum < 12) {
            directions.d = gridNum + 4;
        }
        else {
            directions.d = 16;
        }

        //determine unit to the left
        if (gridNum == 0 || gridNum == 4 || gridNum == 8 || gridNum == 12) {
            directions.l = 16;
        }
        else {
            directions.l = gridNum - 1;
        }

        //determine unit to the right
        if (gridNum == 3 || gridNum == 7 || gridNum == 11 || gridNum == 15) {
            directions.r = 16;
        }
        else {
            directions.r = gridNum + 1;
        }
        return directions;
    }

    function addUnit() {
        var unitSelector = parseInt(Math.floor(Math.random() * 15));    //generate random number between 0-15 for unit selection
        var emptyUnit = $('.empty');
        var startingNumber = parseInt(Math.floor(Math.random() * 2));   //generate random number between 0-1 for starting number
        if (startingNumber == 1) {
            startingNumber = "2";
        }
        else {
            startingNumber = "4";
        }
        $(emptyUnit[unitSelector]).toggleClass('empty filled');         //add random number to random div
        $(emptyUnit[unitSelector]).text(startingNumber);
    }
})
