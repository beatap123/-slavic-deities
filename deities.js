
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

document.getElementById("bazyliszek").innerHTML = deity.food;
