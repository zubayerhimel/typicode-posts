import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("https://jsonplaceholder.typicode.com/users"),
    select: (data) => data?.data,
    retry: 0,
  });

export const useGetPosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: () => axios.get("https://jsonplaceholder.typicode.com/posts"),
    select: (data) => data?.data,
    retry: 0,
  });
