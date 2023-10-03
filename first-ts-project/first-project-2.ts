// First TypeScript project. Use interface to define custom types.
let productName: string = "Ferrari F430 Spider";
let inventoryType: string = "sports car";
let trackingNumber: string = "AO8156-0001";
let createDate: Date = new Date();
let msrpCost: number = 249999;

interface InventoryItem {
    productName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    msrpCost: number;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
