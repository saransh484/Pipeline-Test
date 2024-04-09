import { Box, Group, rem } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import React, { FC } from "react";
import FImage from "../FImage";
import FTypography from "../typography/FTypography";

interface IFFileDropzone {
  label: string;
  onChange: (file: FileWithPath[]) => void;
  description?: string;
  multiple?: boolean;
  error?: string;
}

const FFileDropzone: FC<IFFileDropzone> = ({
  label,
  onChange,
  description = "Drop files here or click to upload",  
  error,
}) => {
  return (
    <Box>
      <FTypography
        text={label}
        variant="descriptionMedium"
        fontSize={14}
        fontWeight={500}
        color="gray_425466"
        fontFamily="'Inter', sans-serif"
      />
      <Dropzone
        styles={{ root: { border: "0.125rem dashed #C6C6C6" } }}
        my={8}
        radius={10}
        onDrop={(files) => {
          onChange(files);
        }}
        maxSize={1 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group
          position="center"
          spacing={12}
          style={{ minHeight: rem(72), pointerEvents: "none" }}
        >
          <FImage width={32} alt="upload icon" name="uploadIcon" />
          <FTypography
            text={description}
            variant="descriptionMedium"
            fontSize={14}
            fontWeight={400}
            color="gray_525252"
          />
        </Group>
      </Dropzone>

      {error && (
        <FTypography
          text={error}
          variant="lightText"
          fontSize={14}
          fontWeight={500}
          color="errorOpacityOne"
          fontFamily="'Inter', sans-serif"
        />
      )}
    </Box>
  );
};

export default FFileDropzone;
