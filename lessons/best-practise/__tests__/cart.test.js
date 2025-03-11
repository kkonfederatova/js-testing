import getImpelementation from '../implementations/index.js';

const makeCart = getImpelementation();

test('Cart', () => {
    const cart = makeCart();
    expect(cart.getItems()).toHaveLength(0);
  
    const car = { name: 'car', price: 3 };
    cart.addItem(car, 5);
    expect(cart.getItems()).toEqual(expect.arrayContaining([{ product: car, count: 5 }]));
    expect(cart.getCost()).toBe(15);
    expect(cart.getCount()).toBe(5);
  
    const house = { name: 'house', price: 10 };
    cart.addItem(house, 2);
    expect(cart.getItems()).toEqual(
      expect.arrayContaining(
        [{ product: car, count: 5 }, { product: house, count: 2 }],
      ),
    );
    expect(cart.getCost()).toBe(35);
    expect(cart.getCount()).toBe(7);
  });
