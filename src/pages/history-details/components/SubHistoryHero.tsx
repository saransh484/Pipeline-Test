import React, { memo } from "react";
import { Avatar, Box, Flex, Grid, createStyles } from "@mantine/core";
import { FTypography } from "../../../@ui";
import { ICONS } from "../../../assets/icons";
import SubHistoryCard from "./SubHistoryCard";
import { COLORS } from "../../../assets/colors/colors";
const data = [
  "Correct use of data structures lorem ipsum dolor mett jkwl",
  "hwqifhw ifhfoh iewhfiw iehwowi ifhwefoh",
];
const SubHistoryHero = () => {
  const { classes } = styles();
  return (
    <>
      <Flex direction={"column"} gap={6}>
        <Flex justify={"space-between"} align={"center"}>
          <FTypography
            variant="regularText"
            text="Project Name"
            fontWeight={700}
            fontSize={18}
          />
          <Avatar.Group sx={{ alignItems: "center" }}>
            <Avatar size={32} radius={"lg"} src={ICONS.Avatar1} />
            <Avatar size={32} radius={"lg"} src={ICONS.Avatar2} />
            <Avatar size={32} radius={"lg"} src={ICONS.Avatar3} />
            <Avatar size={32} radius={"lg"} src={ICONS.Avatar4} />
          </Avatar.Group>
        </Flex>
        <FTypography
          variant="subTittle"
          color="grannySmith"
          fontWeight={400}
          text="Project Description Lorem ipsum dolor uiop jjfiio fhhfhvi ihfiow ioo hiho nnifhiohi. giugfi iegi uhfqohoqh bcqugvgqo uhgqoughvouqg ciugigq vucvys yicic igeivg siucgbcsg gug gq uqgiq uwqgi iacygi fvyigggggggg iuqqyqy ufqufqfh ysgacia iuifchac iuciau iuyqiq iuhiasb iuciugiua csacgiauc uahihcuicghia "
          fontSize={13}
        />
      </Flex>
      <Grid my={22}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid.Col span={12} sm={6} md={4} key={item}>
            <SubHistoryCard
              title="ProjectName"
              shortDescription={data}
              score={7}
            />
          </Grid.Col>
        ))}
      </Grid>
      <Flex direction={"column"} gap={10} my={16}>
        <Box className={classes.root}>
          <FTypography
            variant="regularText"
            fontWeight={400}
            fontSize={17}
            text="Mentor's Overall Comment"
          />
          <Box className={classes.bubblearrow} />
        </Box>
        {[1, 2].map((item) => (
          <SubHistoryCard
            key={item}
            title="ProjectName"
            shortDescription={data}
            score={7}
          />
        ))}
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
