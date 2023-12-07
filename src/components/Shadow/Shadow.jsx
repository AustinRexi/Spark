import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Middle from "./Middle";

function Shadow() {
  const boxes = [
    {
      name: "Rebecca",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
    },
    {
      name: "Shannon",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    },
    {
      name: "Precious",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even ",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",

        "& > :not(style)": {
          flexGrow: 1,

          width: 2500,
          height: 3000,
          mt: 18,
          pl: 7,
        },
      }}
    >
      <Paper elevation={24}>
        <Grid container spacing={0}>
          {boxes.map((text, index) => {
            return (
              <Grid item key={index} xs={10} md={4}>
                <Card sx={{ minWidth: 150, mb: 2, mt: 6, mx: 1 }}>
                  <CardContent key={index}>
                    <Typography
                      sx={{ fontSize: 16, flexWrap: "wrap", m: 1 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {text.name}
                    </Typography>
                    <hr />
                    <Typography variant="h6" component="div">
                      {text.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Middle />
      </Paper>
    </Box>
  );
}
export default Shadow;
