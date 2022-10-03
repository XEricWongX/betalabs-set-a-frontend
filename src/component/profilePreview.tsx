import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ProfileDto } from '../type/profile.Dto';
import axiosInstance from '../utils/axios';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setterProfile } from '../redux/slices/profile';

const theme = createTheme();

type Props = {
  Email: string;
  Name: string;
  Phone: number;
  ProfilePicture: string;
  Company: string;
  onProfile: () => void;
}

export default function ProfilePreview({
  Email,
  Name,
  Phone,
  ProfilePicture,
  Company,
  onProfile
}: Props) {

  const dispatch = useAppDispatch();

  const handleRes = async (Email: string) => {
    const res = await axiosInstance.get(`/profile?email${Email}`);
    //dispatch(setterProfile(res.data))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('click')
    onProfile()
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                Email: {Email}
              </Grid>
              <Grid item xs={12}>
                Name: {Name}
              </Grid>
              <Grid item xs={12}>
                Phone: {Phone}
              </Grid>
              <Grid item xs={12}>
                Company: {Company}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}