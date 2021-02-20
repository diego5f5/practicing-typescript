import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Diego", email: "diegoferreira777@hotmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        name: "Diego Ferreira",
        email: "diegoferreira777@hotmail.com",
      },
      message: {
        subject: "Welcome to the system",
        body: "Just a test",
      },
    });

    return res.send();
  },
};
