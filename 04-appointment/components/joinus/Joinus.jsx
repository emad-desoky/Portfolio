import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Joinus() {
  const router = useRouter(); // Initialize useRouter
  return (
    <>
      <Button onClick={() => router.push("/login")}>JOIN US</Button>
    </>
  );
}
