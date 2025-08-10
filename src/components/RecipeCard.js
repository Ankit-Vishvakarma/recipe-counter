import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";

const RecipeCard = ({ recipe }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Recipe Card */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px",
          margin: "10px",
          width: "250px",
          background: "#fff",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onClick={handleOpen}
      >
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "5px"
          }}
        />
        <h3>{recipe.name}</h3>
        <p>{recipe.cuisine}</p>
      </div>

      {/* Details Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{recipe.name}</DialogTitle>
        <DialogContent>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "5px",
              marginBottom: "15px"
            }}
          />
          <Typography variant="subtitle1"><strong>Cuisine:</strong> {recipe.cuisine}</Typography>
          <Typography variant="subtitle1"><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</Typography>
          <Typography variant="subtitle1"><strong>Ingredients:</strong></Typography>
          <ul>
            {recipe.ingredients?.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <Typography variant="subtitle1"><strong>Instructions:</strong></Typography>
          <Typography>{recipe.instructions}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RecipeCard;

