import { Avatar } from "@mantine/core";
import React, { memo } from "react";
import { IMAGES } from "../../assets/image";

const avatarsData = [
  { src: IMAGES.user_profileImg },
  { src: IMAGES.user_profileImg },
  { src: IMAGES.user_profileImg },
];

const FGroupAvatar = () => {
  return (
    <Avatar.Group spacing="sm">
      {avatarsData.map((avatarData, index) => (
        <Avatar key={index} src={avatarData.src} radius={"xl"} size={30} />
      ))}
    </Avatar.Group>
  );
};

export default memo(FGroupAvatar);
