/********************************
 * models.js
 * author: Erin Flynn
 ********************************
*/

function DebateType(code, name, prepTime, formats)
{
    this.code = code;
    this.name = name;
    this.prepTime = prepTime;
    this.formats = formats;
}
/*function SpeechType(code, name, roundtime)
{
    this.code = code;
    this.name = name;
    this.roundtime = roundtime;
}
*/

var speechTypes = 
[
    new DebateType("dec", "Declamation", 0, {dec: .1 * 60}),
    new DebateType("di", "Dramatic Interpretation", 0, {di: 10 * 60}),
    new DebateType("duo", "Duo Interpretation", 0, {duo: 10 * 60}), 
    new DebateType("oi", "Oral Interpretation", 0, {oi: 10 * 60}), 
    new DebateType("oo", "Original Oratory", 0, {oo: 10 *60}),
    new DebateType("ex", "Extemporaneous", 0, {ex: 7 * 60}),
    new DebateType("cgs", "Student Congress", 0, {congress: 3 * 60}),
];

var speechLabels = {
    dec: "Declamation",
    di: "Dramatic Interpretation",
    duo: "Duo Interpretation",
    oi: "Oral Interpretation",
    oo: "Original Oratory",
    ex: "Extemporaneous",
    cgs: "Student Congress"
}

var debateTypes =
[
    new DebateType("ld", "Lincoln Douglas", 4, {ac: 6 * 60, negcx: 3 * 60, nc: 7 * 60, affcx: 3 * 60, ar1: 4 * 60, nr: 6 * 60, ar2: 3 * 60  }), 
    new DebateType("pf", "Public Forum", 2, 
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
    new DebateType("policy", "Team Policy Debate", 4, {constructive: 8 * 60, cross: 3 * 60, rebuttal: 4 * 60} ),

];

var debateLabels = {
 
    ac: "Aff Construct", 
    negcx: "Neg Cross-Ex",
    nc: "Neg Construct", 
    affcx: "Aff Cross-Ex", 
    ar1: "Aff Rebuttal One", 
    nr: "Neg Rebuttal", 
    ar2: "Aff Rebuttal 2",
    pro1: "1st Pro", 
    con1: "1st Con", 
    crossfire: "Crossfire", 
    pro2: "2nd Pro", 
    con2: "2nd Con", 
    crossfire: "Crossfire", 
    pro1sum: "1st Pro Summary", 
    con1sum: "1st Con Summary", 
    grandcross: "Grand Crossfire", 
    profocus: "Pro Focus", 
    confocus: "Con Focus",
    constructive: "Constructive", 
    cross: "Cross Exam",
    rebuttal: "Rebuttal",

};






