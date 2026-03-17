const table = document.getElementById("table");
const info = document.getElementById("info");

const elements = [
{symbol:"H",name:"Hydrogen",number:1},
{symbol:"He",name:"Helium",number:2},
{symbol:"Li",name:"Lithium",number:3},
{symbol:"Be",name:"Beryllium",number:4},
{symbol:"B",name:"Boron",number:5},
{symbol:"C",name:"Carbon",number:6},
{symbol:"N",name:"Nitrogen",number:7},
{symbol:"O",name:"Oxygen",number:8},
{symbol:"F",name:"Fluorine",number:9},
{symbol:"Ne",name:"Neon",number:10},
{symbol:"Na",name:"Sodium",number:11},
{symbol:"Mg",name:"Magnesium",number:12},
{symbol:"Al",name:"Aluminium",number:13},
{symbol:"Si",name:"Silicon",number:14},
{symbol:"P",name:"Phosphorus",number:15},
{symbol:"S",name:"Sulfur",number:16},
{symbol:"Cl",name:"Chlorine",number:17},
{symbol:"Ar",name:"Argon",number:18}
];

function createTable(){

elements.forEach(el=>{

const div=document.createElement("div");

div.className="element";

div.innerHTML=`
<span>${el.number}</span>
<b>${el.symbol}</b>
`;

div.onclick=()=>showInfo(el);

table.appendChild(div);

});

}

function showInfo(el){

info.innerHTML=`
<h2>${el.name}</h2>
<p>Symbol: ${el.symbol}</p>
<p>Atomic Number: ${el.number}</p>
`;

}

createTable();
