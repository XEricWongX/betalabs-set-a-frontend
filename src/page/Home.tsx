import { Box, Grid } from "@mui/material";
import Friend from "../component/friend";
import { Item } from "../component/item";
import Profile from "../component/profile";

const HomePage = () => {
  return (
    <Box sx={{ padding: '40px' }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ backgroundColor: '#FAFAFA' }}>
          <Profile />
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: '#FAFAFA' }}>
          <Friend />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage;
