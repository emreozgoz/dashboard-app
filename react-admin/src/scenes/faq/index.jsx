import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="FAQ" subtitle="FAQ" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
