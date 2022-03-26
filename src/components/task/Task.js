import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Switch, Grid, Container,IconButton } from "@mui/material";
import { red} from "@mui/material/colors";
import {Delete} from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { updateTask , deleteTask} from "../../redux/actions/a_task";

export default function Task({ description, isDone, id }) {
  // Dispatch
  const dispatch = useDispatch();
  // End

  // State
  const [done, setDone] = useState(isDone);
  const handleChange = (e) => {
    e.preventDefault();
    setDone(e.target.checked);
    const task = { id, description, isDone: !done };
    dispatch(updateTask(id, task));
  };
  // End

  //  Styles
  const useStyle = makeStyles(theme=>(
    {
      task: {
        position: "relative",
        width: "100%",
        transition: "all .3s ",
      },
      delete:{
        color:"red",
      }
    }
  ));
  const classes = useStyle();
  // End

// handleDelete
const handleDelete = e=>{
  dispatch(deleteTask(id))
}
// End
  return (
    <Paper elevation={3} className={classes.task} sx={{backgroundColor:done?red[100]: "initial",borderBottom:"2px solid #A10046"}} >
      <Grid container>
        <Grid item xs={10} md={10}>
          <Container>
            <Typography variant="h6" color="primary">{description}</Typography>
          </Container>
        </Grid>
        <Grid item xs={2} md={2}>
          <Switch
            onChange={handleChange}
            color="primary"
            checked={done}
          />
           <IconButton aria-label="delete"  onClick={handleDelete}>
              <Delete className={classes.delete} />
      </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
