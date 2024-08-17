import express from "express";
import { login } from "../controllers/auth";

const routes = express.Router();

routes.post("/login", login)

