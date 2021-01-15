import React from 'react';

export class Badge {
    webScraperOrder: string;
    gameId: string;
    step: string;
    gameHref: string;
    imageSrc: string;
    text: string;

    constructor(
        webScraperOrder: string,
        gameId: string,
        step: string,
        gameHref: string,
        imageSrc: string,
        text: string
    ) {
        this.webScraperOrder = webScraperOrder;
        this.gameId = gameId;
        this.step = step;
        this.gameHref = gameHref;
        this.imageSrc = imageSrc;
        this.text = text;
    }

    GetImageSrc() {
        return "Hello, " + this.imageSrc;
    }

    GetGameId() {
        return "Hello, " + this.gameId;
    }
}

export interface IBadge {
    webScraperOrder: string;
    gameId: string;
    step: string;
    gameHref: string;
    imageSrc: string;
    text: string;
}
