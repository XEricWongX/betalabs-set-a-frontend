import { Box, Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import Friend from "../component/friend";
import { Item } from "../component/item";
import Profile from "../component/profile";
import { useAppSelector } from '../hooks/reduxHooks'

const HomePage = () => {
  const email = useAppSelector((state) => state.auth.Email);
  return (
    <Box sx={{ padding: '40px' }}>
      {email === '' ? <Navigate to="/signin" /> : <></>}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{ backgroundColor: '#FAFAFA', padding: '10px', }}
          >
            <Profile />
          </Box>
        </Grid>
        <Grid item xs={4} >
          <Box
            sx={{ backgroundColor: '#FAFAFA', padding: '10px', }}
          >
            {/* <Friend /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage;
