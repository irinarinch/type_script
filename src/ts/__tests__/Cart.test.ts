import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Gadgets from '../domain/Gadgets';

const cart = new Cart();

test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('testing adding items to cart', () => { 
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители', 1000, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения ...', `137 мин. / 02:17`));
  cart.add(new Gadgets(2000, 'Iphone', 50000, 1));

  expect(cart.items.length).toBe(4);
});

test('testing the calculation of the total amount', () => {
  expect(cart.calculateTotalAmount()).toBe(53900);
});

test('testing the calculation of the amount whith discount', () => {
  expect(cart.calculateDiscountedAmount(30)).toBe(37730); 
});

test('removal testing', () => {
  cart.remove(1010);
  expect(cart.items.length).toBe(3); 
}); 

test('testing the impossibility of removal', () => {
  expect(()=>{cart.remove(1)}).toThrowError();  
}); 

test('testing adding quantity of items to cart', () => {
  cart.add(new Gadgets(2000, 'Iphone', 50000, 1));

  const gadgetQuantity = cart.items.find(item => item.id === 2000).quantity;

  expect(gadgetQuantity).toBe(2);
});

test('testing reducing quantity', () => {
  cart.quantityReduce(2000);

  const gadgetQuantity = cart.items.find(item => item.id === 2000).quantity;

  expect(gadgetQuantity).toBe(1);
});

test('testing the impossibility of reducing quantity', () => {
  expect(()=>{cart.quantityReduce(5)}).toThrowError();  
});

test('testing for a decrease in quantity equal to one', () => {
  cart.quantityReduce(2000);

  const gadgetQuantity = cart.items.find(item => item.id === 2000);

  expect(gadgetQuantity).toBe(undefined);
});