/********************************
 * timer.js
 * author: Erin Flynn
 ********************************
*/

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
    var m = Math.floor(time/60);
    return m;
}

function secs(time)
{
    return time % 60;
}

//updates the timer UI with mins and secs
function updateTimer(timer_id, m, s)
{

    $(timer_id + " .mins").html(pad(m));
    $(timer_id + " .secs").html(pad(s));
}

function reset(timer_id)
{
    $(".timerFormat").removeClass("disabled active");
    $("#timer-controls button").addClass("disabled").removeClass("active");
    updateTimer(timer_id, 0,0);
}

function countdown(timer_id, count)
{

    console.log("counting down");

    var paused = $(timer_id).data("paused");
    if (paused)
        return;

    var m = mins(count); 
    var s = secs(count);

    updateTimer(timer_id, m, s);


    if (count==0)
        return;

    count-=1;

    // console.log('countdown(' + timer_id + ',' + count + ')');
    setTimeout('countdown("' + timer_id + '",' + count + ')', 1000);

}


//get the current time from the UI
function readTimeLeft(timer_id)
{ 
    var mins = parseInt($(timer_id + " .mins").html());
    var secs = parseInt($(timer_id + " .secs").html());
    return mins * 60 + secs;
}

function startCount(timer_id)
{
    var count = readTimeLeft(timer_id);
    $(timer_id).data("paused", false);
    countdown(timer_id, count);
}

function stopCount(timer_id)
{
    $(timer_id).data("paused", true);
}


function showTimer(dt)
{
    console.log("showing the timer screen");
    //read the template
    var tmpl = _.template($("#tmpl-debate_timer").html());
    var screen = $("#debate_timer");
    var context = {name: dt.name, code: dt.code, formats: dt.formats};
    screen.html(tmpl(context));
    
    //bind the buttons to our timer function
    $(".timerFormat").click(function(event) {
        $("#timer-controls button").removeClass("disabled");  
        var time = $(event.target).data('time');
        $(event.target).addClass("active");
        $(event.target).siblings(".timerFormat").addClass("disabled").removeClass("active");
        updateTimer('#main_timer', mins(time), secs(time));
        
    });
    //click event for prep time
    if($('#prep_timer').length)
    {

        console.log("found a timer");
        $('#prep_timer').click(function() {
            var paused = $('#prep_timer').data("paused");
            console.log("paused:" + paused == true);
            if(paused) //play the prep timer
            {
                $('#prep_timer').data("paused", false);
                $('#prep_timer .glyphicon-play').hide();
                $('#prep_timer .glyphicon-pause').show().removeClass("collapse");
                startCount("#prep_timer"); 
            }
            else  //pause the prep timer
            {
                $('#prep_timer .glyphicon-pause').hide();
                $('#prep_timer .glyphicon-play').show();
                $('#prep_timer').data("paused", true);
            }

        });
    }

    showScreen("#timer");
}


function showSpeechFormats(types)
{
    
    console.log("showing speech formats");
    console.log("types: " + types);
    
    //read the template
    var tmpl = $("#tmpl-speech_fmt").html();
    tmpl = _.template(tmpl);
    var listContainer = $("#speech_types");
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
      
    showScreen("#speech_menu");    
}
       

function showScreen(screenId)
{
    $('.screen').hide();
    $(screenId).show();
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

    showScreen("#debate-menu");
}

$( document ).ready(function() 
{
    //pass in data defined in models
    
    
    //register home screen buttons
    $('#show-speech').click(function(e){ showSpeechFormats(speechTypes); });
    $('#show-debate').click(function(e){ showDebateFormats(debateTypes); });


    //register the timer buttons for main timer
    $('#start').click(function(){ startCount("#main_timer"); } );
    $('#stop').click(function(){ stopCount("#main_timer"); } );
    $('#reset').click(function(){ reset("#main_timer"); } );

       
});


