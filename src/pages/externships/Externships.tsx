import React from "react";
import { Box } from "@mantine/core";
import ExternshipsSection from "../../components/sections/externship/ExternshipsSection";

const Dashboard = () => {
  return (
    <Box>
      <ExternshipsSection title="Registered Externship" type="registered" />
      <ExternshipsSection title="Upcoming Externship" type="upcoming" />
    </Box>
  );
};

export default Dashboard;
