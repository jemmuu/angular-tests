class accessModifierTest{

    name = 'jemish';

    constructor(private a?:number, private b?:string)
    {

    }

    showData()
    {
        console.log(this.a);
        console.log(this.b);
    }
}


let test = new accessModifierTest(25,'private String');

console.log(test.name);
test.showData();

// test.a
// test.b   // both will throw error because both are private  