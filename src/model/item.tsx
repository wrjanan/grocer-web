import React from 'react';

export class Item {
    name: string;
    description: string;
    quantity: number;
    imageSrc: string;

    constructor(
        name: string,
        description: string,
        quantity: number,
        imageSrc: string,
    ) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.imageSrc = imageSrc;
    }

    GetImageSrc() {
        return "Hello, " + this.imageSrc;
    }

    Getdescription() {
        return "Hello, " + this.description;
    }
}

export interface IItem {
    id: string,
    description: string;
    imageSrc: string;
    quantity: number;
    name: string;
    createdAt: string,
    updatedAt: string,
}
