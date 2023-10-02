// First TypeScript project. 
let productName: string = "Ferrari F430 Spider";
let inventoryType: string = "sports car";
let trackingNumber: string = "AO8156-0001";
let createDate: Date = new Date();
let msrpCost: number = 249999;

function getInventoryItem(trackingNumber: string): {
    productName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    msrpCost: number;
} {
    return null as any;
}

function saveInventoryItem(item: any) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);