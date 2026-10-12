const wrapper = document.querySelector("#wrapper");

const pokemon = [
  {
    name: "Charmander",
    type: "fire",
    maxHp: 100,
    moves: ["Scratch", "Ember", "Flamethrower"]
  },

  {
    name: "Squirtle",
    type: "water",
    maxHp: 110,
    moves: ["Tackle", "Water Gun", "Bite"]
  },

  {
    name: "Pikachu",
    type: "electric",
    maxHp: 95,
    moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"]
  }

];

function display(){
    wrapper.innerHTML = "";
    pokemon.forEach((item) =>{
        const pokeDiv = document.createElement("div");
        const pokeName = document.createElement("h1");
        const pokeType = document.createElement("h2");
        const pokeHp = document.createElement("h3");
        const pokeMove = document.createElement("h4");

        pokeName.innerHTML = item.name;
        pokeType.innerHTML = item.type;
        pokeHp.innerHTML = item.maxHp;
        pokeMove.innerHTML = item.moves;

        pokeDiv.appendChild(pokeName);
        pokeDiv.appendChild(pokeType);
        pokeDiv.appendChild(pokeHp);
        pokeDiv.appendChild(pokeMove);
        wrapper.appendChild(pokeDiv);

        if (item.type === "electric"){
        pokeName.style.color = "gold";
        pokeType.style.color = "gold";
        pokeHp.style.color = "gold";
        pokeMove.style.color = "gold";
        } 

        if (item.type === "fire"){
            pokeName.style.color = "orange";
            pokeType.style.color = "orange";
            pokeHp.style.color = "orange";
            pokeMove.style.color = "orange";
        }

        if (item.type === "water"){
            pokeName.style.color = "blue";
            pokeType.style.color = "blue";
            pokeHp.style.color = "blue";
            pokeMove.style.color = "blue";
        }
    })
}

display();

function evol(){
    if (document.getElementById("evolution").value === "Blastoise"){
        pokemon.push(
            {
            name: "Blastoise",
            type: "water",
            maxHp: 362,
            moves: ["Hydro Pump", "Bubble Beam", "Aqua Jet"]
            }
        )
    }

    if (document.getElementById("evolution").value === "Charizard"){
        pokemon.push(
            {
            name: "Charizard",
            type: "fire",
            maxHp: 360,
            moves: ["Dragon Claw", "Flamethrower", "Fire Fang"]
            }
        )
    }

    if (document.getElementById("evolution").value === "Raichu"){
        pokemon.push(
            {
            name: "Raichu",
            type: "electric",
            maxHp: 324,
            moves: ["Iron Tail", "Thunderbolt", "Volt Tackle"]
            }
        )
    }
}

document.querySelector("#btn").addEventListener("click", ()=>{
    evol();
    display();
})