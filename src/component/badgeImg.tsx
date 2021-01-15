import React, { useEffect, useReducer, useState } from 'react';
import { IBadge } from '../model/badge';
import { Image } from 'antd';

const imageToBase64 = require('image-to-base64');

type BadgeImgProps = {
    badge: IBadge;
}

const BadgeImg: React.FC<BadgeImgProps> = ({ badge }) => {
    // start local data as locall data
    const [dataImage, setDataImage] = useState(localStorage.getItem(badge.webScraperOrder));
    // start badge as preview
    const [badgeSrc, setBadgeSrc] = useState(dataImage ? dataImage : badge.imageSrc);

    useEffect(() => {
        // if local data is empty, call requets
        //if (!dataImage) saveImgURL();
    }, []);
    
    const onLoaded = (e: any) => {
        return badge.imageSrc
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
        
        //console.log("saving to cookie!", badge.imageSrc);
        imageToBase64(badge.imageSrc) // Image URL
            .then(
                (response: string) => {
                    console.log(response); // "iVBORw0KGgoAAAANSwCAIA..."
                    storeImgURL("data:image/png;base64,"+response);
                    setBadgeSrc("data:image/png;base64,"+response);
                }
            )
            .catch(
                (error: any) => {
                    //console.log(error); // Logs an error if there was one
                }
            )


        // toDataURL(badge.imageSrc, (dataUrl: any) => {
        //     console.log('RESULT:', dataUrl)

        //     storeImgURL(dataUrl);
        //     setBadgeSrc(dataUrl)
        // });
    }

    // when downloaded
    const storeImgURL = (dataUrl: string) => {
        localStorage.setItem(badge.webScraperOrder, dataUrl)
    }


    return (
        <Image
            onLoad={onLoaded}
            loading="lazy"
            alt={badge.gameHref}
            src={badgeSrc}
        />
    );
}

export default BadgeImg;
