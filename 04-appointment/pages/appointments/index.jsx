import Form from "@/components/appointment/Form";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { userAgent, userAgentFromString } from "next/server";
import React, { useEffect } from "react";

export default function Appointments() {
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/appointments")
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Form />
      <Footer />
    </>
  );
}
