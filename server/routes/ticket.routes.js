import {
  addTicket,
  viewTicket,
  deleteTicket,
  viewTickets,
  updateTicketStatus,
} from "../controllers/ticket.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import express from "express";
import { param } from "express-validator";
const route = express.Router();

const validateTicketId = [
  param("ticketId").isMongoId().withMessage("Invalid Ticket ID"),
];

route.post("/", authMiddleware, addTicket);
route.get("/", authMiddleware, viewTickets);
route.get("/:ticketId", authMiddleware, validateTicketId, viewTicket);
route.patch(
  "/status/:ticketId",
  authMiddleware,
  validateTicketId,
  updateTicketStatus
);
route.delete("/:ticketId", authMiddleware, validateTicketId, deleteTicket);

export default route;
