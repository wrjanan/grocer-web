import React, { useEffect, useReducer, useState } from 'react';
import { IItem } from '../model/item';
import { Image } from 'antd';
import './itemImg.css';

const imageToBase64 = require('image-to-base64');

interface ItemImgProps {
    item: IItem;
    selectItemHandler?: (selectedItem: IItem, remove?: boolean) => void
}

const ItemImg: React.FC<ItemImgProps> = React.forwardRef(({ item, selectItemHandler }): React.ReactElement => {
    // start local data as locall data
    const [dataImage, setDataImage] = useState(localStorage.getItem(item.id));
    // start item as preview
    const [itemSrc, setItemSrc] = useState(dataImage ? dataImage : item.imageSrc);

    useEffect(() => {
        // if local data is empty, call requets
        //if (!dataImage) saveImgURL();
    }, []);

    const onLoaded = (e: any) => {
        return item.imageSrc
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

    // call request to download image and store
    const saveImgURL = () => {

        //console.log("saving to cookie!", item.imageSrc);
        imageToBase64(item.imageSrc) // Image URL
            .then(
                (response: string) => {
                    storeImgURL("data:image/png;base64," + response);
                    setItemSrc("data:image/png;base64," + response);
                }
            )
            .catch(
                (error: any) => {
                    //console.log(error); // Logs an error if there was one
                }
            )


        // toDataURL(item.imageSrc, (dataUrl: any) => {
        //     console.log('RESULT:', dataUrl)

        //     storeImgURL(dataUrl);
        //     setItemSrc(dataUrl)
        // });
    }

    // when downloaded
    const storeImgURL = (dataUrl: string) => {
        localStorage.setItem(item.id, dataUrl)
    }


    return (
        <Image
            wrapperStyle={{ minHeight: 80 }}
            onLoad={onLoaded}
            loading="lazy"
            alt={item.name}
            src={itemSrc}
            preview={false}
            onClick={(e) => {
                // check class
                if (selectItemHandler) {
                    if (e.currentTarget.classList.contains("selected")) {
                        e.currentTarget.classList.remove("selected");
                        selectItemHandler(item, true);
                    } else {
                        e.currentTarget.classList.add("selected");
                        selectItemHandler(item);
                    }
                }
                // add/remove class
                // set/remove item from list
            }}
/>
    );
});

export default ItemImg;
