

function DebateType(code, name, prepTime, formats)
{
    this.code = code;
    this.name = name;
    this.prepTime = prepTime;
    this.formats = formats;
}

/*
Debate
--> Lincoln Douglas
    --> AC
    --> CX
    --> NC
    --> CX
    --> 1AR
    --> NR
    --> 2AR
    --> prep time
*/


var debateTypes =
[
    new DebateType("ld", "Lincoln Douglas", 4 * 60, {ac: 6*60, cx: 3*60, nc: 7*60 }), 
    new DebateType("pf", "Public Forum"),
    new DebateType("policy", "Team Policy Debate")
];
