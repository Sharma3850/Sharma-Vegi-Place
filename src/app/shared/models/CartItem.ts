import { Food } from "./Food";

export class CartItem{
 
  constructor(public food:Food){ 

  }
  quantity:number = 0 ;
  price: number = 0;
}
