import AppointmentForm from "@/components/appointment/AppointmentForm";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { userAgent, userAgentFromString } from "next/server";
import React, { useEffect } from "react";

export default function Appointments() {
  const router = useRouter();
  useEffect(() => {
    axios
      .get("api/appointments")
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <AppointmentForm />
      <Footer />
    </>
  );
}
