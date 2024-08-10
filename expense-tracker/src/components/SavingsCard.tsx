import React from "react";
import { Typography } from "@mui/material";

interface SavingsCardProps {
  amount: number;
  description: string;
}

const SavingsCard: React.FC<SavingsCardProps> = ({ amount, description }) => (
    <div style={{ border: "1px solid gray", borderRadius: 5, padding: 20, width: 200 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        ${amount?.toLocaleString()}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {description}
      </Typography>
    </div>
  );


export default SavingsCard;