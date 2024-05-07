// Auth service

import { Credentials } from "../types";
import { api } from "./client";

export const login = (credentails: Credentials) =>
  api.post("/auth/login", credentails);
export const register = (credentails: Credentials) =>
  api.post("/auth/register", credentails);
