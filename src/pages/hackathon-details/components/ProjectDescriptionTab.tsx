import { TypographyStylesProvider } from "@mantine/core";
import React, { FC, memo } from "react";

interface IProjectDescriptionTab {
  html: string;
}

const ProjectDescriptionTab: FC<IProjectDescriptionTab> = ({ html }) => {
  return (
    <TypographyStylesProvider my={25}>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </TypographyStylesProvider>
  );
};

export default memo(ProjectDescriptionTab);
