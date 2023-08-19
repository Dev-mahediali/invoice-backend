import InvoiceCollection from "@src/models/Invoice";
import AffindaAPIs from "@src/services/AffindaAPIs";
import { IInvoice } from "@src/types/IInvoice";
import { CommonResponse } from "@src/util/CommonResponse";
import { Request, Response } from "express";

const createInvoiceRepository = async (
  request: Request,
  response: Response
) => {
  console.log("FIle ", request.file);

  let uploadLink = "";

  try {
    const {
      invoiceAmount,
      invoiceDate,
      invoiceNo,
      invoiceStatus,
      invoiceType,
      poDate,
      poNo,
      poValue,
    } = request.body;

    const invoice = await InvoiceCollection.create({
      invoiceAmount,
      invoiceDate,
      invoiceDocument: uploadLink,
      invoiceNo,
      invoiceStatus,
      invoiceType,
      poDate,
      poNo,
      poValue,
    });

    if (request.file) {
      const upload = await AffindaAPIs.uploadDocument(
        request.file,
        request.file.originalname
      );
      console.log("Uploaded Data From Ext API ", upload);

      uploadLink = upload.data.meta.file;
    }

    await InvoiceCollection.updateOne(
      { _id: invoice._id },
      { invoiceDocument: uploadLink }
    );

    invoice.invoiceDocument = uploadLink;

    return response
      .status(201)
      .json(
        new CommonResponse<IInvoice>(201, "Invoice created", false, invoice)
      );
  } catch (error) {
    console.log("Error ", error.response);

    return response
      .status(400)
      .json(new CommonResponse(400, error.message as string, true, null));
  }
};

const getAllInvoices = async (request: Request, response: Response) => {
  try {
    const invoices = await InvoiceCollection.find().lean();
    return response
      .status(201)
      .json(new CommonResponse(201, "List Of Invoices", false, invoices));
  } catch (error) {
    return response
      .status(400)
      .json(new CommonResponse(400, error.message as string, true, null));
  }
};

export default {
  createInvoiceRepository,
  getAllInvoices,
};
