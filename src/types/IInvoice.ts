export interface InvoiceDocument {
  documentName: string;
  uploadedDate: Date;
  uploadedBy: any;
  remarks: string;
}

export interface IInvoice {
  invoiceNo: number;
  invoiceDate: Date;
  invoiceAmount: number;
  poNo: number;
  poDate: Date;
  poValue: number;
  invoiceType: string;
  invoiceStatus: string;
  invoiceDocument: string;
}
