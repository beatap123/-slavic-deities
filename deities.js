const deity = {
    name: "Kurze płucko",
    character: "zły",
    showText() {
        return "Lubię jeść kurze płucka";
    }
}

for (const key in deity) {
    if (deity.hasOwnProperty(key)) {
        console.log(key);
    }
}