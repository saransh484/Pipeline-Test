import React from "react";
import HackathonSection from "../../components/sections/hackathon/HackathonSection";
import { Box } from "@mantine/core";

const Hackathon = () => {
  return (
    <Box>
      <HackathonSection title="Registered Hackathon" type="registered" />
      <HackathonSection title="Upcoming Hackothon" type="upcoming" />
    </Box>
  );
};

export default Hackathon;
