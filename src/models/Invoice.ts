import { IInvoice } from "@src/types/IInvoice";
import mongoose, { Schema } from "mongoose";

// const Invoice = mongoose.

const InvoiceSchema = new Schema<IInvoice>(
  {
    invoiceNo: {
      type: Number,
      auto: true,
      unique: true,
    },
    invoiceAmount: {
      type: Number,
      required: [true, "InvoiceAmount is required"],
    },
    invoiceDate: {
      default: new Date(),
      type: Date,
    },
    invoiceDocument: {
      type: String,
      default: "",
    },
    invoiceStatus: {
      type: String,
      default: "Pending",
    },
    invoiceType: {
      type: String,
      default: "",
    },
    poDate: {
      default: new Date(),
      type: Date,
    },
    poNo: {
      default: 0,
      type: Number,
    },
    poValue: {
      default: 1,
      type: Number,
    },
  },
  { timestamps: true }
);

const InvoiceCollection = mongoose.model<IInvoice>(
  "Invoice",
  InvoiceSchema,
  "InvoiceDocument"
);

export default InvoiceCollection;
