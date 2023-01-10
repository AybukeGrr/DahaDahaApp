import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExploreIcon from "@mui/icons-material/Explore";
import StarIcon from "@mui/icons-material/Star";
import Container from "react-bootstrap/esm/Container";
import { Card } from "@mui/material";


export default function BottomNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Card style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height: 80, paddingTop: 10}}>
      <Box sx={{ width: 515, display: "flex", justifyContent: "center" }}>
        <BottomNavigation
          style={{ marginLeft: "-140px" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            style={{ color: "black" }}
            label="Keşfet"
            icon={<ExploreIcon />}
          />
          <img src="dahaButon.png" style={{ borderRadius: 20 }} />
          <BottomNavigationAction label="Daha Cüzdan" icon={<StarIcon />} />
        </BottomNavigation>
      </Box>
    </Card>
  );
}
