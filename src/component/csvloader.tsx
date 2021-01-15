import React from 'react';
import CSVReader, { IFileInfo } from 'react-csv-reader';
import { IBadge } from '../model/badge';
import { addBadge, BadgeState } from '../state/badge/action';
import { useBadgeContext } from '../state/badge/context';

const CSVLoader: React.FC = () => { 

    const badgeContext = useBadgeContext();

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        delimiter: "\t"
    }

    const handleForce = (data: Array<IBadge>, fileInfo: IFileInfo) => {
        console.log("handleForce");
        console.log("data[0]", data[0]);
        data.forEach((badge) => {
            badgeContext.badges.push(badge);
        })
        console.log("fileInfo", fileInfo);
    }

    const handleDarkSideForce = (error: Error) => {
        console.log("handleDarkSideForce");
        console.log("error", error);
    }

    return (
        <CSVReader
            cssClass="csv-reader-input"
            label="Select CSV with secret Death Star statistics"
            onFileLoaded={handleForce}
            onError={handleDarkSideForce}
            parserOptions={papaparseOptions}
            inputId="ObiWan"
            inputStyle={{ color: 'red' }}
        />
    );
}

export default CSVLoader;
