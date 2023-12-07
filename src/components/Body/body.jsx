import Container from "@mui/material/Container";
import Google from "../Googleplay/Google";
import { Box, Button, Typography } from "@mui/material";

function Body() {
  return (
    <div className="app">
      <Container maxWidth="sm">
        <Box sx={{ my: 20 }}>
          <Button
            sx={{
              display: { md: "none" },
              mb: 2,
              mx: 11,
            }}
            variant="contained"
            size="large"
            color="white"
          >
            <Typography
              sx={{
                fontFamily: "Raleway",

                letterSpacing: ".2rem",
                color: "white",
              }}
              variant="h6"
            >
              Log in
            </Typography>
          </Button>
          <Button
            sx={{ ml: 11 }}
            variant="contained"
            size="small"
            color="white"
          >
            <Typography
              sx={{
                fontFamily: "Raleway",

                letterSpacing: ".2rem",
                color: "white",
              }}
              variant="h6"
            >
              Create Account
            </Typography>
          </Button>
          <Google />
        </Box>
      </Container>
    </div>
  );
}
export default Body;
