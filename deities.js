
const deity = {
    name: "Kurze płucko",
    character: "zły",
    food: "mięso, ludzie",
    description() {
        console.log(`${this.name} ma zazwyczaj ${this.character} charakter. Jego ulubione potrawy to: ${this.food}. `);
    }
}

for (const key in deity) {
    if (deity.hasOwnProperty(key)) {
        console.log(key);
    }
}

console.log(deity.description());

const show = deity.description.bind({name : "Bazyliszek",character:"dobry", food:"króliki i inne małe gryzonie"} );
show(); 

document.getElementById("imie").innerHTML = deity.name;
document.getElementById("charakter").innerHTML = deity.character;

function showdiv() {
      var x = document.getElementById("potwor1");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    } 