import React, { Fragment } from "react";
import { Divider } from "@mantine/core";
import SubHistoryHeader from "./components/SubHistoryHeader";
import SubHistoryHero from "./components/SubHistoryHero";

const HistoryDetails = () => {
  return (
    <Fragment>
      <SubHistoryHeader />
      <Divider my="md" size={1} color="#959595" />
      <SubHistoryHero />
    </Fragment>
  );
};
export default HistoryDetails;
