class animal{
    constructor(name,legCount,speaks){
        this.name = name
        this.legCount = legCount
        this.speaks = speaks
    }
    static description(){
        console.log("this is an animal")
    }
    describe(){
        console.log("This is a " +this.name+" it has number of legs "+this.legCount + " it speaks "+this.speaks)
    }
}
let dog = new animal("dog",4,"Bhow Bhow")
dog.describe()

animal.description()