"use client";

import { useGetUsers } from "@/api";
import React from "react";

const TimeLine = () => {
  const { data, isLoading } = useGetUsers();

  console.log(data);

  return <div>TimeLine</div>;
};

export default TimeLine;
