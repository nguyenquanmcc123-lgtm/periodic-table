const elements = [
{symbol:"H",name:"Hydrogen",number:1,group:"nonmetal",shells:[1]},
{symbol:"He",name:"Helium",number:2,group:"noble",shells:[2]},
{symbol:"Li",name:"Lithium",number:3,group:"alkali",shells:[2,1]},
{symbol:"Be",name:"Beryllium",number:4,group:"alkaline",shells:[2,2]},
{symbol:"B",name:"Boron",number:5,group:"metalloid",shells:[2,3]},
{symbol:"C",name:"Carbon",number:6,group:"nonmetal",shells:[2,4]},
{symbol:"N",name:"Nitrogen",number:7,group:"nonmetal",shells:[2,5]},
{symbol:"O",name:"Oxygen",number:8,group:"nonmetal",shells:[2,6]},
{symbol:"F",name:"Fluorine",number:9,group:"halogen",shells:[2,7]},
{symbol:"Ne",name:"Neon",number:10,group:"noble",shells:[2,8]},
{symbol:"Na",name:"Sodium",number:11,group:"alkali",shells:[2,8,1]},
{symbol:"Mg",name:"Magnesium",number:12,group:"alkaline",shells:[2,8,2]},
{symbol:"Al",name:"Aluminium",number:13,group:"metal",shells:[2,8,3]},
{symbol:"Si",name:"Silicon",number:14,group:"metalloid",shells:[2,8,4]},
{symbol:"P",name:"Phosphorus",number:15,group:"nonmetal",shells:[2,8,5]},
{symbol:"S",name:"Sulfur",number:16,group:"nonmetal",shells:[2,8,6]},
{symbol:"Cl",name:"Chlorine",number:17,group:"halogen",shells:[2,8,7]},
{symbol:"Ar",name:"Argon",number:18,group:"noble",shells:[2,8,8]}
];

const table = document.getElementById("table");
const info = document.getElementById("info");
const atom = document.getElementById("atom");

function createTable(){
elements.forEach(el=>{
const div=document.createElement("div");
div.className="element "+el.group;
div.innerHTML=`<span>${el.number}</span><b>${el.symbol}</b>`;
div.onclick=()=>selectElement(el);
table.appendChild(div);
});
}

function selectElement(el){
info.innerHTML=
`<h2>${el.name} (${el.symbol})</h2>
<p>Atomic Number: ${el.number}</p>
<p>Group: ${el.group}</p>`;

highlightGroup(el.group);
drawAtom(el.shells);
}

function highlightGroup(group){
document.querySelectorAll(".element").forEach(e=>{
e.classList.remove("highlight");
});
document.querySelectorAll("."+group).forEach(e=>{
e.classList.add("highlight");
});
}

function drawAtom(shells){
atom.innerHTML="";
const center=document.createElement("div");
center.className="nucleus";
atom.appendChild(center);

shells.forEach((eCount,i)=>{
const orbit=document.createElement("div");
orbit.className="orbit";
orbit.style.width=(120+i*60)+"px";
orbit.style.height=(120+i*60)+"px";

for(let e=0;e<eCount;e++){
const electron=document.createElement("div");
electron.className="electron";

const angle=(360/eCount)*e;
electron.style.transform=
`rotate(${angle}deg) translate(${60+i*30}px) rotate(-${angle}deg)`;

orbit.appendChild(electron);
}

atom.appendChild(orbit);
});
}

createTable();
