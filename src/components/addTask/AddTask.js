import React, { useReducer } from "react";
import Box from '@mui/material/Box';
import {TextField, Typography, Stack} from '@mui/material';
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/a_task";
import { makeStyles } from "@mui/styles";
export default function MultilineTextFields() {

      // State
    const dispatch = useDispatch();
  
      const initialState = {
        description: "",
        isDone:false
      };
    
      const [task, setTask] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        initialState
      );

      const handleChange = (event) => {
        setTask({ [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if( task.description){
          dispatch(addTask(task))
        task.description=""
        }
      };
      // End

      // Styles
const useStyle = makeStyles(theme=>(
    {
    btnSubmit:{
      backgroundColor:theme.palette.primary.main,
    },
    description:{
      backgroundColor:theme.palette.primary.main,
    }
  }
))
const classes = useStyle();
      // End
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%', display:"block",position:"relative"},
      }}
      noValidate
      autoComplete="off"
    >
       <Typography
          sx={{ mt: 0.5 }}
          color="primary"
          textAlign="center"
          fontFamily={"Roboto"}
          fontWeight={700}
          variant="h6"
        >Ajouter une tâche</Typography>
        <TextField
        name="description"
        value={task.description}
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          onChange ={handleChange}
          className={classes.description}
        />
        <TextField
          type="submit"
          variant="outlined"
          fullWidth
          onClick={handleSubmit}
          className={classes.btnSubmit}
        />
        <Box sx={{display:"flex", mt:'2ch'}} alignItems={"center"} justifyContent={"center"}>
        <Box sx={{
            width:"3ch",
            height:"3ch",
            mx:2,
            borderRadius:"50%",
            backgroundColor:"#04023C",
            display:"inline-block"
          }}>
            </Box>
        <Box sx={{
            width:"3ch",
            height:"3ch",
            mx:2,
            borderRadius:"50%",
            backgroundColor:"#A10046",
            display:"inline-block"
          }}>
            </Box>
        <Box sx={{
            width:"3ch",
            height:"3ch",
            mx:2,
            borderRadius:"50%",
            backgroundColor:"#04023C",
            display:"inline-block"
          }}>
            </Box>
        </Box>
    </Box>
  );
}
