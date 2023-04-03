import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const cartItem = this._items.find(cartItem => cartItem.id === item.id);

    if(!cartItem) {
      this._items.push(item);      
    } else if (cartItem.quantity) {      
      cartItem.quantity += item.quantity;
      cartItem.price = item.price * cartItem.quantity;
    }
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  calculateTotalAmount(): number {
    return this._items.reduce((acc, next) => acc + next.price, 0);
  }

  calculateDiscountedAmount(discount: number): number {
    return this.calculateTotalAmount() - this.calculateTotalAmount()*discount/100;
  }

  remove(id: number): void {
    const desiredItem = this._items.find(item => item.id === id);

    if (desiredItem === undefined) {
      throw new Error('Invalid ID');
    } 

    this._items.splice(this._items.indexOf(desiredItem), 1);
  }

  quantityReduce(id: number): void {
    const desiredItem = this._items.find(item => item.id === id);

    if (desiredItem === undefined) {
      throw new Error('Invalid ID');
    } else if (desiredItem.quantity > 1) {
      desiredItem.quantity -= 1;
    } else if (desiredItem.quantity = 1) {
      this.remove(id);
    }    
  }
}

