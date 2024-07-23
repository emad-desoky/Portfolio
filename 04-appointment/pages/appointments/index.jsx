import Form from "@/components/appointment/Form";
import axios from "axios";
import React, { useEffect } from "react";

export default function Appointments() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/appointments")
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Form />
      <div>Appointments</div>
    </>
  );
}
