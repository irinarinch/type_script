import Buyable from './Buyable';

export default class Gadgets implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,        
    public price: number, 
    public quantity: number,     
  ) {  }
}