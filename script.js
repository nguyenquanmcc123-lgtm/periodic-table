/* THREE ENGINE */

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
(window.innerWidth-300)/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({antialias:true})

renderer.setSize(window.innerWidth-300,window.innerHeight)

document.getElementById("three").appendChild(renderer.domElement)

camera.position.z=8

const light=new THREE.PointLight(0xffffff,1)

light.position.set(5,5,5)

scene.add(light)

/* ATOMS */

const atoms=[]
const bonds=[]

function addAtom(){

const type=document.getElementById("elementSelect").value

const atom=new THREE.Mesh(

new THREE.SphereGeometry(.4,32,32),

new THREE.MeshPhongMaterial({color:0xffffff})

)

atom.position.x=Math.random()*4-2
atom.position.y=Math.random()*4-2

scene.add(atom)

atoms.push(atom)

}

function clearMolecule(){

atoms.forEach(a=>scene.remove(a))

atoms.length=0

}

/* ORBITAL */

let orbital

function showOrbital(type){

if(orbital) scene.remove(orbital)

const mat=new THREE.MeshBasicMaterial({
color:0x00ffff,
wireframe:true
})

if(type=="s"){

orbital=new THREE.Mesh(
new THREE.SphereGeometry(2,32,32),
mat)

}

if(type=="p"){

const g=new THREE.Group()

const a=new THREE.Mesh(new THREE.SphereGeometry(1,32,32),mat)
const b=a.clone()

a.position.x=1
b.position.x=-1

g.add(a)
g.add(b)

orbital=g

}

scene.add(orbital)

}

/* CHART */

const data={

labels:["H","He","Li","Be","B","C","N","O","F","Ne"],

datasets:[{

label:"Ionization Energy",

data:[1312,2372,520,900,801,1086,1402,1314,1681,2080],

borderColor:"cyan"

}]

}

new Chart(

document.getElementById("chart"),

{

type:"line",

data:data

}

)

/* ANIMATE */

function animate(){

requestAnimationFrame(animate)

atoms.forEach(a=>a.rotation.y+=0.01)

renderer.render(scene,camera)

}

animate()
