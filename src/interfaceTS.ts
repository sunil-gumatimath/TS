type coffeeOrder = {
    type : string;
    sugar : number;
    strong : boolean;
}

function makeCoffee(order : coffeeOrder) {
    console.log(order);

}

function serveCoffee(order : coffeeOrder) {
    console.log(order);
    
}

type coffeeRecipe = {
    water : number;
    milk : number;

}

class cappuccinoCoffee implements coffeeRecipe{
    water: number = 100;
    milk: number = 40;
}

interface cupeSize {
    size : "small" | "large"
} 

class Coffee implements cupeSize{
    size: "small" | "large" = "large";
}

// type response = {ok : true}|{ok : false}

// class myRes implements response{
//     ok: boolean = true;
// }

type coffeeType = "Caramel" | "Butterscotch" | "Hazelnut"

function orderCoffee(c : coffeeType) {
    console.log(c);
    
}

type BaseCoffee = {}