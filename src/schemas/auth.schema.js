const { z } = require("zod");

const registerSchema = z.object({
  username: z
    .string({ required_error: "Username required" })
    .min(1, { message: "Username, must be 1 or more characters" })
    .max(25, { message: "Username, must be 25 or fewer characters" }),
  email: z
    .string({ required_error: "Email required" })
    .email({ message: "Email invalid" }),
  password: z
    .string({ required_error: "Pasword required" })
    .min(6, { message: "Password, must be 6 or 20 characters" })
    .max(12, { message: "Password, must be 6 or 20 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email required" })
    .email({ message: "Email invalid" }),
  password: z
    .string({ required_error: "Password required" })
    .min(6, { message: "Password, must be 6 or 20 characters" })
    .max(12, { message: "Password, must be 6 or 20 characters" }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
