// First TypeScript project. Enhance interface definitions.
let productName: string = "Ferrari F430 Spider";
let inventoryType: string = "sports car";
let trackingNumber: string = "AO8156-0001";
let createDate: Date = new Date();
let msrpCost: number = 249999;

interface InventoryItem {
    display: string;
    inventoryType: string;
    readonly trackingNumber: string;
    createDate: Date;
    msrpCost: number;

    addNote?: (note: string) => string;
}


function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
    productName: "Ferrari F430 Spider",
    nventoryType: "sports car",
    trackingNumber: "AO8156-0001",
    createDate: new Date(),
    msrpCost: 249999
});
