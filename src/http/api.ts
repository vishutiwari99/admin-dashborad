// Auth service

import { Credentials } from "../types";
import { api } from "./client";

export const login = (credentails: Credentials) =>
  api.post("/auth/login", credentails);
export const register = (credentails: Credentials) =>
  api.post("/auth/register", credentails);
export const self = () => api.get("/auth/self");
export const logout = () => api.post("/auth/logout");
