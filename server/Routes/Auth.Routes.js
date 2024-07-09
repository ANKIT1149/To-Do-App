import express from 'express';
import { Signup } from '../Controllers/Auth.controllers.js';

const Authrouter = express.Router();

Authrouter.post('/signup', Signup);

export default Authrouter;