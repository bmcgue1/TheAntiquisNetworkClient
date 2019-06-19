import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));
const RedirectionCard = props => {
  const classes = useStyles();
  return (
    <Button color="primary" className={classes.button}>
      <Card body className="text-center redirectCard">
        <CardTitle>{props.page}</CardTitle>
        <div className={props.image} />
      </Card>
    </Button>
  );
};

export default RedirectionCard;
