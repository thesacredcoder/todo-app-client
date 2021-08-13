import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./sytles";
import AppInput from "../components/AppInput";
import Tasks from "../components/Tasks/Tasks";
import { createTask, getTasks } from "../actions/tasks";

function Main(props) {
  const [task, setTask] = useState("");
  const classes = useStyles();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  //   console.log(tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    dispatch(createTask({ task: task }));

    setTask("");
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={4} className={classes.inputContainer}>
          <Typography variant="h4">The-Todo-App</Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <AppInput
              onChange={(e) => setTask(e.target.value)}
              value={task}
              className={classes.input}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="medium"
              type="submit"
            >
              Add Task
            </Button>
          </form>
        </Grid>
        <Grid item xs={8}>
          {tasks.map((task) => (
            <Grid item key={task._id}>
              <Tasks taskItem={task} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
