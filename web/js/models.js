
/*function SpeechType(code, name, prepTime, formats)
{
    this.code = code;
    this.name = name;
    this.prepTime = prepTime;
    this.formats = formats;
}
*/

function DebateType(code, name, prepTime, formats)
{
    this.code = code;
    this.name = name;
    this.prepTime = prepTime;
    this.formats = formats;
}

var speechTypes = 
[
    new speechType("dec", "Declamation", 10 * 60),
    new speechType("di", "Dramatic Interpretation", 10 * 60),
    new speechType("duo", "Duo Interpretation", 10 * 60),
    new speechType("oi", "Oral Interpretation", 10 * 60),
    new speechType("oo", "Original Oratory", 10 * 60),
    new speechType("ex", "Extemporaneous", 7 * 60),
};

var speechLabels = {
    dec: "Declamation",
    di: "Dramatic Interpretation",
    duo: "Duo Interpretation",
    oi: "Oral Interpretation",
    oo: "Original Oratory",
    ex: "Extemporaneous",
}


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

var debateLabels = {
 
    ac: "Aff Construct", 
    negcx: "Neg Cross-Ex",
    nc: "Neg Construct", 
    affcx: "Aff Cross-Ex", 
    ar1: "Affirmative Rebuttal One", 
    nr: "Negative Rebuttal", 
    ar2: "Affirmative Rebuttal 2",
    pro1: "First Pro", 
    con1: "First Con", 
    crossfire: "Crossfire", 
    pro2: "Second Pro", 
    con2: "Second Con", 
    crossfire: "Crossfire", 
    pro1sum: "First Pro Summary", 
    con1sum: "First Con Summary", 
    grandcross: "Grand Crossfire", 
    profocus: "Pro Focus", 
    confocus: "Con Focus",
    constructive: "Constructive", 
    cross: "Cross Examination",
    rebuttal: "Rebuttal",
};



