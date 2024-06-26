"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicIds, setPublicIds] = useState<string[]>([]);

  const addElement = (newElement: string) => {
    setPublicIds((prevPublicIds) => [...prevPublicIds, newElement]);
  };

  return (
    <>
      {publicIds.length > 0 &&
        publicIds.map((publicId, index) => (
          <CldImage
            key={index}
            src={publicId}
            width={270}
            height={180}
            alt={"Image"}
          />
        ))}
      <CldUploadWidget
        uploadPreset="rr2imcsl"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onSuccess={(result, widget) => {
          console.log(result);
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          addElement(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
