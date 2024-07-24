import React, { useCallback, useEffect, useRef, useState } from 'react';
import { OutputFileEntry } from '@uploadcare/blocks';
import { FileUploaderRegular, type UploadCtxProvider } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';


type FileUploaderProps = {
    files: OutputFileEntry[];
    onChange: (files: OutputFileEntry[]) => void;
}


function FileUploader({ files, onChange }: FileUploaderProps) {
    const [uploadedFiles, setUploadedFiles] = useState<OutputFileEntry<'success'>[]>([]);
    const ctxProviderRef = useRef<InstanceType<UploadCtxProvider>>(null);


    const handleRemoveClick = useCallback(
        (uuid: OutputFileEntry['uuid']) => onChange(files.filter(f => f.uuid !== uuid)),
        [files, onChange],
    );

    const resetUploaderState = () => ctxProviderRef.current?.uploadCollection.clearAll();

    const handleModalCloseEvent = () => {
        resetUploaderState();

        onChange([...files, ...uploadedFiles])

        setUploadedFiles([]);
    };


    const handleChangeEvent = (files: any) => {
        setUploadedFiles([...files.allEntries.filter((f: any) => f.status === 'success')] as OutputFileEntry<'success'>[]);
    }

    return (
        <div>
            <FileUploaderRegular
                imgOnly
                multiple
                removeCopyright
                confirmUpload={false}
                apiRef={ctxProviderRef}
                onModalClose={handleModalCloseEvent}
                onChange={handleChangeEvent}
                pubkey="efda7de35f1db04b8da4"
            />
            <div>
                {files.map((file) => (
                    <div key={file.uuid}>
                        <img
                            className='w-44 h-444'
                            key={file.uuid}
                            src={`${file.cdnUrl}/-/preview/-/resize/x200/`}
                            width="100"
                            alt={file.fileInfo?.originalFilename || ''}
                            title={file.fileInfo?.originalFilename || ''}
                        />

                        <button
                            type="button"
                            onClick={() => handleRemoveClick(file.uuid)}
                        >×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default FileUploader;