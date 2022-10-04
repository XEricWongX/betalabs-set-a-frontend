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
import { Alert, AlertTitle } from '@mui/material';
import { UpdateProfile } from '../utils/profile';
import { ProfileDto } from '../type/profile.Dto';
import axiosInstance from '../utils/axios';

const theme = createTheme();

type Props = {
  Email: string;
  Name: string;
  Phone: number;
  ProfilePicture: string;
  Company: string;
  onProfile: () => void;
  onProfileObj: (obj: ProfileDto)=> void;
}

export default function ProfileForm(
  {
    Email,
    Name,
    Phone,
    ProfilePicture,
    Company,
    onProfile,
    onProfileObj,
  }
    : Props
) {
  console.log('thisis phone', Phone)
  const [checkFail, setCheck] = React.useState<boolean>(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') &&
      data.get('name') &&
      data.get('phone') &&
      data.get('company')
    ) {
      let phoneStr: string =  data.get('phone')?.toString() || '';
      let phone: number = +phoneStr;
      const profileObj: ProfileDto = {
        Email: data.get('email')?.toString() || '',
        Name: data.get('name')?.toString() || '',
        Phone: phone,
        ProfilePicture: 'https://www.google.com', //To-do add photo in firebase
        Company: data.get('company')?.toString() || '',
      }

      console.log('Sending request: ', JSON.stringify(profileObj))
      UpdateProfile({ body: profileObj, onProfile: onProfile, onProfileObj: onProfileObj })/*  */
    } else setCheck(true);
  };

  return (
    <ThemeProvider theme={theme}>
      {(checkFail) ? <>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Please enter all the input — <strong>check it out!</strong>
        </Alert>
      </> : <></>}
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
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  defaultValue={Email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="User Name"
                  name="name"
                  defaultValue={Name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  type="number"
                  name="phone"
                  defaultValue={Phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="company"
                  label="Company"
                  type="password"
                  id="company"
                  defaultValue={Company}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
