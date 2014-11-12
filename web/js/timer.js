

//formats numbers with a leading zero if they are less than 10
function pad(i)
{
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}
function mins(time)
{
    console.log('getting mins for: ' + time);
    var m = Math.floor(time/60);
    console.log('mins: ' + m);
    return m;
}

function secs(time)
{
    return time % 60;
}

//updates the timer UI with mins and secs
function updateTimer(timer_id,m, s)
{
    $(timer_id + " .mins").html(pad(m));
    $(timer_id + " .secs").html(pad(s));
}

//countdown calls itself until it is paused or reaches zero
function countdown(count)
{

    if (paused)
        return;

    var m = mins(count); ///Math.floor rounds down
    var s = secs(count);

    updateTimer(m, s)


    if (count==0)
        return;

    count-=1;

    setTimeout('countdown(' + count + ')', 1000);
    
}

// function countup(count)
// {
//     if (paused)
//         return;
//     var mins = Math.floor(count / 60); ///Math.floor rounds down
//     var secs = count % 60;

//     updateTimer(mins, secs)

//     if count(==0)
//         return;

//     count = +1
// }

function reset()
{
    $(".timerFormat").removeClass("disabled active");
    $("#timer-controls button").addClass("disabled").removeClass("active");
    updateTimer(0,0);
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



function showTimer(dt)
{
    console.log("showing the timer screen");
    $(".screen").hide();
    //read the template
    var tmpl = _.template($("#tmpl-debate_timer").html());
    var screen = $("#debate_timer");
    var context = {name: dt.name, code: dt.code, formats: dt.formats};
    screen.html(tmpl(context));
    //bind the buttons to our timer function
    $(".timerFormat").click(function(event){
        $("#timer-controls button").removeClass("disabled");  
        var time = $(event.target).data('time');
        $(event.target).addClass("active");
        $(event.target).siblings(".timerFormat").addClass("disabled").removeClass("active");
        updateTimer(mins(time), secs(time));
        
    });
    
    //before we show the timer, take format and put it into the template
    //$("#timer").removeClass("hidden");
    $("#timer").show();
}

function showDebateFormats(types)
{
    
    console.log("showing debate formats");
    console.log("types: " + types);
    
    //read the template
    var tmpl = $("#tmpl-debate_fmt").html();
    tmpl = _.template(tmpl);
    var listContainer = $("#debate_types");
    listContainer.html('');
    //loop through the formats, and add to the display
    for(var i=0;i<types.length;i++)
    {
        var dt = types[i];
        var formatHTML = tmpl(dt);
        var li = $(formatHTML);
        listContainer.append(li);
        //add a click event to get data for timer
        li.click( function(format) {
                showTimer(format);
            }.bind(this,dt)
        );
    }
        
}

$( document ).ready(function() 
{
    //pass in data defined in models
    showDebateFormats(debateTypes);
    //register the click events
    $('#start').click(startCount);
    $('#stop').click(stopCount);
    $('#reset').click(reset);
       
});


