export interface testInterface
{
    a : any;
    b : number;
   
}


export class testClass implements testInterface{

    a= 'jemish';
    b = 25;
    showData()
    {
        // console.log(this.a);
        // console.log(this.b);
        return this.a,this.b;
    }
    
    
}


let test = new testClass;

test.showData();