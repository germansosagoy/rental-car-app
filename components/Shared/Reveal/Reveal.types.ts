import React from "react";

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  position: "right" | "bottom";
  delay?: number;
};
