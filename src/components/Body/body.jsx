import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
function Body() {
  return (
    <div className="app">
      <Container maxWidth="xl">
        <Box sx={{ my: 32 }}>
          <Button variant="contained" size="large" color="secondary">
            Create Account
          </Button>
        </Box>
      </Container>
    </div>
  );
}
export default Body;
