import { Product } from "./product.model";

export interface Shopping {
    id: number;
    name: string;
    url: string;
    price: number;
    count: number;
    total: number;
}


export interface Payment {
    totalPrice:number;
    userName: string;
    address: string;
    credit: number;
}