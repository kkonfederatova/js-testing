Write tests for the online store cart. Interface:

1. makeCart() – creates a new empty cart.
2. addItem(products, count) – adds products and their quantity to the cart. A product is an object obtained in two ways: by name and price. We consider each new product to be unique, so it is always added to the cart
3. getItems() – returns a list of products in the format [{product, count }, {product, count }, ...]
4. getCost() – returns the cost of the cart. The cost of the cart is calculated as the last of all added products, taking into account their quantity.
5. getCount() – returns the number of products in the cart.

```javascript
const cart = makeCart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35
cart.getCount(); // 7
cart.addItem({ name: 'house', price: 10 }, 1);
cart.getItems().length; // 3
cart.getCost(); // 45
```