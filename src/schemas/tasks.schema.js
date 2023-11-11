const { z } = require("zod");

const createTaskSchema = z.object({
  title: z
    .string({ required_error: "Title required" })
    .min(1, { message: "Title, must be 1 to 20 characters" })
    .max(20, { message: "Title, must be 1 to 20 characters" }),
  description: z
    .string({ required_error: "Descripton required" })
    .min(1, { message: "Description, must by 1 to 200 characters" })
    .max(200, { message: "Description, must by 1 to 200 characters" }),
  date: z.string().datetime().optional(),
});

/* const createTaskSchema = z.object({
  title: z
    .string({ required_error: "Title required" })
    .min(1, { message: "Title, must be 1 to 20 characters" })
    .max(20, { message: "Title, must be 1 to 20 characters" }),
  description: z
    .string({ required_error: "Descripton required" })
    .min(1, { message: "Description, must by 1 to 200 characters" })
    .max(200, { message: "Description, must by 1 to 200 characters" }),
}); */

module.exports = {
  createTaskSchema,
};
