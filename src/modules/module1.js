define(function () {
    //Do setup work here

    return {
        color: "blue",
        size: "large",
        addToCart: function() { 
        	inventory.decrement(this);
        	cart.add(this);
        }
    }
});
/*
define(["./cart", "./inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);
*/