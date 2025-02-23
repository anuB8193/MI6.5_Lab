function nameGenerator() {
    return {
        names: ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah", "Ian", "Jack"],
        randomName: "Click the button to generate a name",
        
        generateName() {
            this.randomName = this.names[Math.floor(Math.random() * this.names.length)];
        }
    };
}
