import React, { memo } from 'react';
import { Box } from "@mantine/core";
import FImage from "../../@ui/FImage";

const EditProfileButton: React.FC = () => {
    return (
        <Box>
            <FImage name="pencilIcon" alt="Pencil Icon" style={{ padding: '12px',gap:"10px",  borderRadius: "50%", backgroundColor: '#DBE7FF', marginRight:'10px'}} />
        </Box>
    );
};

export default memo(EditProfileButton);
