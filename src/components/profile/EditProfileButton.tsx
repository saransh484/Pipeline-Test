import React, { memo } from "react";
import { Box } from "@mantine/core";
import FImage from "../../@ui/FImage";
import PROFILE_ROUTES from "../../enum/profile.routes";
import { useNavigate } from "react-router-dom";

const EditProfileButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(PROFILE_ROUTES.PERSONAL_DETAILS)}>
      <FImage
        name="pencilIcon"
        alt="Pencil Icon"
        style={{
          padding: "12px",
          gap: "10px",
          borderRadius: "50%",
          backgroundColor: "#DBE7FF",
          marginRight: "10px",
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export default memo(EditProfileButton);
