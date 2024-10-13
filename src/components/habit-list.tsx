import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Box, Grid, Paper, Typography } from "@mui/material";

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit)=>{
        return <div className=""></div>
      })}
    </Box>
  );
};

export default HabitList;
