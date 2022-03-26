import { Container, Grid, AppBar, Toolbar, Typography } from "@mui/material";
import { useEffect } from 'react';
import AddTask from "./addTask/AddTask";
import ListTask from './listTask/ListTask'
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../redux/actions/a_task";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
function App() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.r_task);
  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const useStyle=makeStyles(theme=>(
    {
      content:{
      marginTop:theme.mixins.toolbar.minHeight*2
     }
    }
  ))
  const classes = useStyle()
  return (
    <Container className={classes.app}>
      <AppBar position="fixed" color="primary" >
        <Toolbar >
          <Box sx={{
            width:"5ch",
            height:"3ch",
            mx:2,
            backgroundColor:"white",      
          }}>
          </Box>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            TODO APP
          </Typography>
          <Box sx={{
            width:"3ch",
            height:"3ch",
            mx:2,
            borderRadius:"50%",
            backgroundColor:"white"
          }}>
          </Box>
          <Box sx={{
            width:"3ch",
            height:"3ch",
            mx:2,
            borderRadius:"50%",
            backgroundColor:"white"
          }}>
          </Box>
          <Box sx={{
            width:"3ch",
            height:"3ch",
            mx:2,
            borderRadius:"50%",
            backgroundColor:"white"
          }}>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.content} >
      <Grid container>
        <Grid item xs={12} sm={8} md={8}>
          <ListTask data={tasks}/>
        </Grid>
        <Grid item xs={12}  sm={4} md={4}>
          <AddTask />
        </Grid>
      </Grid>
      </div>
    </Container>
  );
}
export default App;
