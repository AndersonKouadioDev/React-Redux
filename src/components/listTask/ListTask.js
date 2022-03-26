import React, {useState} from "react";
import { makeStyles } from "@mui/styles";
import { Container, List, Typography,Paper ,Switch} from "@mui/material";
import Task from "../task/Task"

export default function ListTask({data}) {
// State
const [check, setCheck] = useState(false);
const handleChange = (e) => {
  e.preventDefault();
  setCheck(e.target.checked);
};
const newData = check?data.filter(d=>d.isDone===true):data.filter(d=>d)
// End
    // Makes Styles
    const useStyle = makeStyles(    {
        listTask:{
            position:"relative",
        }
    });
  const classes = useStyle();
//   End

  return (
    <Container className={classes.listTask}>
      <Paper sx={{display:"flex", alignItems:"center",justifyContent:"space-evenly",  borderTop:"2px solid #04023C"}}>   
        <Typography  variant="h5" color="primary"  sx={{ml:3, fontWeight:700, fontFamily:"Alina", fontSize:"40px", letterSpacing:"3px"}}>Les tâches déjà faites </Typography>
        <Switch
            color="primary"
            checked={check}
            onChange={handleChange}
          />
      </Paper>
      {
      data.length!==0?
        <List sx={{ width: '100%', minWidth: 360 }}>
        { newData.length!==0?newData.map(value=>  <Task   key={value.id}id={value.id}  description={value.description} isDone={value.isDone} />)
        :<Typography variant="h6" color="secondary"> Vous n'avez  aucune tâche faite</Typography>}
        </List>
: <Typography variant="h6" color="secondary"> Vous n'avez  enregistré aucune tâche</Typography>
      }
    </Container>
  );
}
