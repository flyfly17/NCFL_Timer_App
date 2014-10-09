//formats numbers with a leading zero if they are less than 10
function pad(i)
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//updates the timer UI with mins and secs
function updateTimer(mins, secs)
{
    $("#mins").html(pad(mins));
    $("#secs").html(pad(secs));
}

//countdown calls itself until it is paused or reaches zero
function countdown(count)
{

    var mins = Math.floor(count / 60); ///Math.floor rounds down
    var secs = count % 60;

    updateTimer(mins, secs)

    if (count == 0 || paused)
        return;

    count-=1;
    setTimeout('countdown(' + count + ')', 1000);
    
}

//get the current time from the UI
function readTimeLeft()
{
    var mins = parseInt($("#mins").html());
    var secs = parseInt($("#secs").html());
    return mins * 60 + secs;
}

function startCount()
{
    var count = readTimeLeft();
    paused = false;
    countdown(count);
}

function stopCount()
{
    console.log("stop button clicked");
    paused = true;
}

var paused = false;


$( document ).ready(function() 
{
    //register the click events
    $('#start').click(startCount);
    $('#stop').click(stopCount);
       
});


