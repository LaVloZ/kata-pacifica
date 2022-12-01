import {Product} from "./product";
import {Observable, of} from "rxjs";

export function allProducts(): Product[] {
  return [
    //foods
    {id: "1", name: "Delicious", price: 1.76, taxe: 0.00, priceWithTaxe: 1.85, quantity: 0, category: "Food"},
    {id: "14", name: "Apple - Fuji", price: 4.37, taxe: 0.00, priceWithTaxe: 4.60, quantity: 3, category: "Food"},
    {id: "17", name: "Muffin Batt - Carrot Spice", price: 3.84, taxe: 0.00, priceWithTaxe: 4.05, quantity: 5, category: "Food"},
    {id: "6", name: "Goldschalger", price: 9.71, taxe: 0.00, priceWithTaxe: 10.20, quantity: 5, category: "Food"},
    {id: "13", name: "Sponge Cake Mix - Chocolate", price: 1.4, taxe: 0.00, priceWithTaxe: 1.50, quantity: 10, category: "Food"},
    {id: "7", name: "Cheese - Goat", price: 3.81, taxe: 0.00, priceWithTaxe: 3.81, quantity: 1, category: "Food"},
    {id: "18", name: "Wine - Touraine Azay - Le - Rideau", price: 6.02, taxe: 0.00, priceWithTaxe: 6.35, quantity: 4, category: "Food"},
    {id: "2", name: "Soup Campbells - Italian Wedding", price: 9.1, taxe: 0.00, priceWithTaxe: 9.1, quantity: 4, category: "Food"},
    // medicine
    {id: "12", name: "codeine", price: 7.86, taxe: 0.00, priceWithTaxe: 8.25, quantity: 3, category: "Medecine"},
    {id: "5", name: "Asperin", price: 6.85, taxe: 0.00, priceWithTaxe: 6.85, quantity: 3, category: "Medecine"},
    {id: "15", name: "Paracetamol", price: 9.5, taxe: 0.00, priceWithTaxe: 10.00, quantity: 0, category: "Medecine"},
    // books
    {id: "3", name: "The Stranger in the Lifeboat", price: 16.38, taxe: 1.63, priceWithTaxe: 18.85, quantity: 7, category: "Books"},
    {id: "11", name: "The World of the End", price: 14.02, taxe: 1.40, priceWithTaxe: 15.45, quantity: 9, category: "Books"},
    {id: "19", name: "the power of habit", price: 11.84, taxe: 1.18, priceWithTaxe: 13.05, quantity: 4, category: "Books"},
    {id: "8", name: "Sapiens", price: 12.61, taxe: 1.26, priceWithTaxe: 13.90, quantity: 8, category: "Books"},
    // electronic devices
    {id: "16", name: "USB Flash Drive 64GB", price: 9.18, taxe: 1.83, priceWithTaxe: 11.50, quantity: 8, category: "Electric"},
    {id: "9", name: "Wireless Keyboard", price: 9.16, taxe: 1.83, priceWithTaxe: 11.00, quantity: 5, category: "Electric"},
    // parfums
    {id: "4", name: "Dior sauvage 100ml", price: 73.58, taxe: 14.71, priceWithTaxe: 88.30, quantity: 6, category: "Parfum"},
    {id: "10", name: "Giorgio Armani Acqua Di Gio 100ml", price: 76.32, taxe: 15.30, priceWithTaxe: 91.60, quantity: 8, category: "Parfum"}
  ];
}

export function products(): Observable<Product[]> {
  return of(allProducts());
}
