import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Box } from "@mui/material";

export default function IntroductionPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Title */}
      <Typography variant="h3" gutterBottom align="center">
        🍽 Welcome to Recipe Counter!
      </Typography>

      {/* Intro */}
      <Typography variant="body1" paragraph align="center">
        Discover a world of delicious recipes from different cuisines right at your fingertips.
        Search for your favorite dishes, explore new flavors, and get step-by-step instructions
        to make cooking easy and fun.
      </Typography>

      {/* How to Get Started */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          ✨ How to Get Started:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Use the search bar to find a recipe by name or ingredient." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Filter by cuisine category to explore regional flavors." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Click on a recipe to view its ingredients, cook time, and instructions." />
          </ListItem>
        </List>
      </Box>

      {/* Popular Cuisines */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Popular Cuisines You Can Explore:
        </Typography>
        <List>
          <ListItem><ListItemText primary="Italian 🍕" /></ListItem>
          <ListItem><ListItemText primary="Indian 🍛" /></ListItem>
          <ListItem><ListItemText primary="Chinese 🥢" /></ListItem>
          <ListItem><ListItemText primary="Mexican 🌮" /></ListItem>
          <ListItem><ListItemText primary="Japanese 🍣" /></ListItem>
          <ListItem><ListItemText primary="French 🥖" /></ListItem>
          <ListItem><ListItemText primary="Mediterranean 🫒" /></ListItem>
        </List>
      </Box>

      {/* Closing Text */}
      <Typography
        variant="body1"
        sx={{
          mt: 4,
          p: 2,
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        Ready to cook something amazing? <br /> Start your journey by searching your first recipe!
      </Typography>
    </Container>
  );
}
