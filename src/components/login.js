import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import React from "react"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const login = () => {

    const paperStyle={padding : 20, height:'70vh', width:280, margin: "20px auto"}  
    const avatarStyle={backgroundColor: '#1bbd7e'}
    const btnStyle={margin: '8px 0'}
    
      return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                <h2>Sign in</h2>
                </Grid>
                <TextField label='username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button type='submit' color='primary' variant= 'contained' style={btnStyle} fullWidth>Sign in</Button>
           <Typography>
               <Link href='#'>
               Forgot password ?
               </Link>
           </Typography>
           <Typography> Don't have an account?
               <Link href='#'>
               Sign-up
               </Link>
           </Typography>
            </Paper>

        </Grid>
    )
}

export default login;