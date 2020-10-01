import React, {useState} from "react";
import Navbar from "../Navbar";
import Copyright from "./Copyright";
import useStyles from "./formStyle";
import axios from "axios"
import qs from "qs"

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Cookies from "js-cookie"
// import "../style.css"

export default function SignIn() {
  const classes = useStyles();
  // console.log(classes)

  document.title = "Authentication"
  const [authenticated,setAuthenticated] = useState(false)
  const [formState, setFormState] = useState({
    email:"",
    password:""
  })

  function handleFormInputChange(event){
    // console.log(formState)
        const name = event.target.name
        const value = event.target.value

        if (name==="email"){
          setFormState(prevState=>{
            return {
              email:value,
              password: prevState.password
            }
          })
        } else if (name==="password"){
          setFormState(prevState=>{
            return {
              email:prevState.email,
              password:value
            }
          })
        }
  }


  function handleSubmit(event){
    event.preventDefault()
    if(formState.email.length && formState.password.length) {
      console.log("Form Not Empty")
      const payload={
          "email":formState.email,
          "password":formState.password
      }
    axios.post("http://localhost:4000/employee/login",qs.stringify(payload), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(data=>{
      console.log(data)
    }).catch(err=>console.log(err))

  }
}


  return (
    <div>
    <Navbar />
    <div className="SignIn">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Employee Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formState.email}
              onChange={handleFormInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleFormInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
    </div>
  );
}
