import { Router } from "express";
import Paths from "../constants/Paths";
import InvoiceRepository from "@src/repos/InvoiceRepository";
import multer from "multer";

const uploadMiddleware = multer({
  dest: "/uploads",
  storage: multer.memoryStorage(),
});

const InvoiceRouter = Router();

InvoiceRouter.post(
  Paths.Invoice.Add,
  uploadMiddleware.single("file"),
  InvoiceRepository.createInvoiceRepository
);

InvoiceRouter.get(Paths.Invoice.Get, InvoiceRepository.getAllInvoices);

export default InvoiceRouter;
