class Pizza {
    constructor(ingredients = ['cheese']) {
        this.ingredients = ingredients
    }

    toppingCost() {
        let toppingCost = 0;
    
        this.ingredients.forEach(function (ing) {
            if (ing != 'cheese') {
                toppingCost += 0.99;
            }
        })
        return (toppingCost);
    }

}


class smallPizza extends Pizza {
    constructor(ingredients) {
        super(ingredients)
        this.price = 8.99;
    }

    totalPrice() {
        return this.toppingCost() + this.price;
    }
}



class mediumPizza extends Pizza {
    constructor(ingredients) {
        super(ingredients)
        this.price = 10.99;
    }

    totalPrice() {
        return this.toppingCost() + this.price;
    }
}

class largePizza extends Pizza {
    constructor(ingredients) {
        super(ingredients)
        this.price = 12.99;
    }

    totalPrice() {
        return this.toppingCost() + this.price;
    }
}

class Order {
    constructor(pizzas) {
        this.pizzas = pizzas;
    }

    totalCost() {
        let total = 0;
        let largePizzaCount = 0;
        let mediumPizzaCount = 0;
        let mediumPizzaPrice = 0;
        let found = false;
        this.pizzas.forEach(function (pizza) {
            if (pizza instanceof largePizza) {
                largePizzaCount++;
            }

            console.log(largePizzaCount);
            

            if (pizza instanceof mediumPizza && found == false) {
                mediumPizzaCount = 1;
                found = true;
                mediumPizzaPrice = pizza.totalPrice();
                console.log(mediumPizzaPrice);
                
            }

            if (largePizzaCount >= 2 && mediumPizzaCount == 1) {
                total -= mediumPizzaPrice/ 2;
            }

            total += pizza.totalPrice();
        })
        return total;
    }
}

let pizza1 = new mediumPizza(['pepperoni', 'sausage']);
let pizza2 = new largePizza();
let pizza3 = new largePizza();

let Orders = new Order([pizza1, pizza2, pizza3]);

console.log(Orders.totalCost());