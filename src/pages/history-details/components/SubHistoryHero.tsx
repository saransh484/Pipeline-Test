import React, { memo } from "react";
import { Avatar, Box, Flex, Grid, createStyles } from "@mantine/core";
import { FTypography } from "../../../@ui";
import { ICONS } from "../../../assets/icons";
import SubHistoryCard from "./SubHistoryCard";
import { COLORS } from "../../../assets/colors/colors";
const SubHistoryHero = () => {
  const { classes } = styles();
  return (
    <>
      <Flex direction={"column"}>
        <Flex justify={"space-between"} align={"center"}>
          <FTypography
            variant="regularText"
            text="Project Name"
            fontWeight={800}
            fontSize={18}
          />
          <Avatar.Group sx={{ alignItems: "center" }}>
            <Avatar size={35} radius={"lg"} src={ICONS.Avatar1} />
            <Avatar size={35} radius={"lg"} src={ICONS.Avatar2} />
            <Avatar size={35} radius={"lg"} src={ICONS.Avatar3} />
            <Avatar size={35} radius={"lg"} src={ICONS.Avatar4} />
          </Avatar.Group>
        </Flex>
        <FTypography
          variant="subTittle"
          color="grannySmith"
          fontWeight={300}
          text="Project Description Lorem ipsum dolor uiop jjfiio fhhfhvi ihfiow ioo hiho nnifhiohi. giugfi iegi uhfqohoqh bcqugvgqo uhgqoughvouqg ciugigq vucvys yicic igeivg siucgbcsg gug gq uqgiq uwqgi iacygi fvyigggggggg iuqqyqy ufqufqfh ysgacia iuifchac iuciau iuyqiq iuhiasb iuciugiua csacgiauc uahihcuicghia "
          fontSize={13}
        />
      </Flex>
      <Grid my={15}>
        <Grid.Col span={12} sm={6} md={4}>
          <SubHistoryCard
            title="ProjectName"
            shortDescription="Correct use of data structures lorem ipsum dolor mett jkwl"
            score={7}
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6} md={4}>
          <SubHistoryCard
            title="ProjectName"
            shortDescription="Correct use of data structures lorem ipsum dolor mett jkwl"
            score={7}
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6} md={4}>
          <SubHistoryCard
            title="ProjectName"
            shortDescription="Correct use of data structures lorem ipsum dolor mett jkwl"
            score={7}
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6} md={4}>
          <SubHistoryCard
            title="ProjectName"
            shortDescription="Correct use of data structures lorem ipsum dolor mett jkwl"
            score={7}
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6} md={4}>
          <SubHistoryCard
            title="ProjectName"
            shortDescription="Correct use of data structures lorem ipsum dolor mett jkwl"
            score={7}
          />
        </Grid.Col>
      </Grid>
      <Flex direction={"column"} gap={10}>
        <Box className={classes.root}>
          <FTypography
            variant="regularText"
            fontWeight={500}
            text="Mentor's Overall Comment"
          />
          <Box className={classes.bubblearrow} />
        </Box>
        <Box className={classes.inner}>
          <SubHistoryCard
            title="ProjectName"
            shortDescription="●  Correct use of data structures lorem ipsum dolor mett jkwl"
            score={7}
          />
        </Box>
      </Flex>
    </>
  );
};

export default memo(SubHistoryHero);

const styles = createStyles({
  root: {
    margin: "0 10",
    position: "relative",
    padding: "20px 16px",
    borderRadius: 15,
    width: "98.5%",
    height: "auto",
    background: COLORS.white,
    boxShadow: "2px 4px 30px 0px #9CA3AA33",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inner: {
    marginTop: 15,
    borderRadius: 10,
  },
  bubblearrow: {
    position: "absolute",
    right: "0px",
    bottom: "20px",
    left: "auto",
    "&:after": {
      content: '""',
      overflow: "auto",
      position: "absolute",
      border: "0 solid transparent",
      borderTop: "10px solid #fff",
      borderRadius: "0px 20px 0px",
      width: "15px",
      height: "20px",
      transform: "rotate(90deg) scaleY(-1.5)",
    },
  },
});
