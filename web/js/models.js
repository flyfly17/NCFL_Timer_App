

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
    new DebateType("ld", "Lincoln Douglas", 4 * 60, {ac: 6 * 60, negcx: 3 * 60, nc: 7 * 60, affcx: 3 * 60, ar1: 4 * 60, nr: 6 * 60, ar2: 3 * 60  }), 
    new DebateType("pf", "Public Forum", 2 * 60, 
        {
            pro1: 4 * 60, 
            con1: 4 * 60, 
            crossfire: 3 * 60, 
            pro2: 4 * 60, 
            con2: 4 * 60, 
            crossfire: 3 * 60, 
            pro1sum: 2 * 60, 
            con1sum: 2 * 60, 
            grandcross: 3 * 60, 
            profocus: 2 * 60, 
            confocus: 2 * 60
         }),
    new DebateType("policy", "Team Policy Debate", 2 * 60, {constructive: 8 * 60, cross: 3 * 60, rebuttal: 4 * 60} )
];

