import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined, Edit } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { deleteTask, updatedTask } from "../../actions/tasks";
import AppInput from "../AppInput";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
}));

function Tasks({ taskItem }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState(taskItem.task);

  const handleClick = () => {
    dispatch(deleteTask(taskItem._id));
  };

  const handleEdit = () => {
    dispatch(updatedTask(taskItem._id, { ...taskItem, task: task }));
    setShowModal(false);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal ? (
        <Card className={classes.card}>
          <CardActions>
            <AppInput value={task} onChange={(e) => setTask(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Done
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Grid container>
          <Grid item className={classes.cardContainer}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{taskItem.task}</Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={handleModal}>
                  <Edit color="primary" />
                </IconButton>
                <IconButton onClick={handleClick}>
                  <DeleteOutlined color="secondary" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Tasks;
