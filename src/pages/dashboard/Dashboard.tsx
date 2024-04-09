import React from "react";
import HackathonSection from "../../components/sections/hackathon/HackathonSection";
import { Box } from "@mantine/core";

import ExternshipsSection from "../../components/sections/externship/ExternshipsSection";

const Dashboard = () => {
  return (
    <Box>
      <HackathonSection />
      <ExternshipsSection />
    </Box>
  );
};

export default Dashboard;
