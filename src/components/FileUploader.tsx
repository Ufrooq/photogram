import React, { useCallback, useEffect, useRef, useState } from 'react';
import { OutputFileEntry } from '@uploadcare/blocks';
import { FileUploaderRegular, type UploadCtxProvider } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import { Label } from '@radix-ui/react-label';


type FileUploaderProps = {
    files: OutputFileEntry[];
    onChange: (files: OutputFileEntry[]) => void;
    previewUploadedImages: boolean
}


function FileUploader({ files, onChange, previewUploadedImages }: FileUploaderProps) {
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
        <div className='flex flex-col gap-4'>
            <div className='flex w-full items-center p-4 text-lg'>
                {previewUploadedImages && <Label className='text-md w-[16%] font-medium text-slate-700'>Upload a Picture : </Label>}                <FileUploaderRegular
                    imgOnly
                    multiple
                    removeCopyright
                    confirmUpload={false}
                    apiRef={ctxProviderRef}
                    onModalClose={handleModalCloseEvent}
                    onChange={handleChangeEvent}
                    pubkey="efda7de35f1db04b8da4"
                />
            </div>
            {previewUploadedImages &&
                <div className='w-full grid max-w-[400px]'>
                    {files.map((file) => (
                        <div key={file.uuid} className='relative'>
                            <img
                                key={file.uuid}
                                src={`${file.cdnUrl}/-/preview/-/resize/x200/`}
                                alt={file.fileInfo?.originalFilename || ''}
                                title={file.fileInfo?.originalFilename || ''}
                            />

                            <button
                                className='absolute top-0 right-0 text-2xl w-6 h-6 flex justify-center items-center rounded-[50%] bg-black text-white'
                                type="button"
                                onClick={() => handleRemoveClick(file.uuid)}
                            >×
                            </button>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}


export default FileUploader;