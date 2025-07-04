import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = axios.create({
    baseURL: "https://hobbynest-server.vercel.app",
    headers: {
      Authorization: user?.accessToken ? `Bearer ${user.accessToken}` : "",
    },
  });
  return axiosSecure;
};

export default useAxiosSecure;
