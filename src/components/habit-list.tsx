import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Box, Grid, Paper, Typography } from "@mui/material";

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);

  return (
    <div className=""></div>
  );
};

export default HabitList;
