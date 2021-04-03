import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export const TrelloCard = ({ text }) => {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};
