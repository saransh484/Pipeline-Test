import React from "react";
import HackathonSection from "../../components/sections/hackathon/HackathonSection";
import { Box } from "@mantine/core";

import ExternshipsSection from "../../components/sections/externship/ExternshipsSection";
import RegisteredSection from "../../components/sections/registered/RegisteredSection";

const Dashboard = () => {
  return (
    <Box>
      <RegisteredSection />
      <HackathonSection />
      <ExternshipsSection />
    </Box>
  );
};

export default Dashboard;
