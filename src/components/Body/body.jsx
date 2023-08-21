import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
function Body() {
  return (
    <div className="app">
      <Container maxWidth="xl">
        <Box sx={{ my: 32 }}>
          <Button
            sx={{ display: { xs: "block", md: "none" }, mb: 2, ml: 11, px: 8 }}
            variant="contained"
            size="large"
            color="white"
          >
            Log in
          </Button>
          <Button variant="contained" size="large" color="white">
            Create Account
          </Button>
        </Box>
      </Container>
    </div>
  );
}
export default Body;
