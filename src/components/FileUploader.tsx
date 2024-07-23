import React, { useState } from 'react';
import { FileUploaderRegular } from "@uploadcare/react-uploader"
import '@uploadcare/react-uploader/core.css';


const FileUploader = () => {
    const [files, setFiles] = useState<any>();

    const handleChangeEvent = (items: any) => {
        setFiles([...items.allEntries.filter((file: any) => file.status === 'success')]);
    };

    return (
        <div>
            <FileUploaderRegular onChange={handleChangeEvent} pubkey="efda7de35f1db04b8da4" />

            <div>
                {/* {files.map((file: any) => (
                    <div key={file}>
                        <img
                            src={file.cdnUrl}
                            alt={file.fileInfo.originalFilename}
                        />
                    </div>
                ))} */}
            </div>
        </div>
    );
};
export default FileUploader;