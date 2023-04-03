import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Gadgets from './domain/Gadgets';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Movie(1010, 'Мстители', 1000, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения ...', `137 мин. / 02:17`));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Gadgets(2000, 'Iphone', 50000, 1));

console.log(cart.calculateTotalAmount());
console.log(cart.calculateDiscountedAmount(30));

cart.remove(1010);

cart.add(new Gadgets(2000, 'Iphone', 50000, 1));
console.log(cart.items);

cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

cart.quantityReduce(2000);
cart.quantityReduce(2000);

cart.add(new Gadgets(2000, 'Iphone', 50000, 1));
cart.quantityReduce(2000);
console.log(cart.items);