import React, { useEffect, useReducer, useState } from 'react';
import { IItem } from '../model/item';
import { Image } from 'antd';
import './itemImg.css';

const imageToBase64 = require('image-to-base64');

interface ItemImgProps {
    itemImageSrc: string;
    selectItemHandler?: (selectedItem: IItem, remove?: boolean) => void
}

const ItemImgSrc: React.FC<ItemImgProps> = React.forwardRef(({ itemImageSrc, selectItemHandler }): React.ReactElement => {
    // start item as preview
    const [itemSrc, setItemSrc] = useState(itemImageSrc);

    useEffect(() => {
        // if local data is empty, call requets
        //if (!dataImage) saveImgURL();
    }, []);

    const onLoaded = (e: any) => {
        return itemSrc
    }

    //call request 
    const toDataURL = (url: string, callback: any) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.onload = function () {
            const reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.responseType = 'blob';
        xhr.send();
    }


    return (
        <Image
            wrapperStyle={{ minHeight: 80 }}
            onLoad={onLoaded}
            loading="lazy"
            src={itemSrc}
            preview={false}
/>
    );
});

export default ItemImgSrc;
