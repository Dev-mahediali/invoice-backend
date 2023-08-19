import { Router } from "express";

import Paths from "./constants/Paths";
import DocumentRouter from "./document/DocumentRouter";
import InvoiceRouter from "./invoice/InvoiceRouter";

// **** Variables **** //

const apiRouter = Router();

apiRouter.get("/ping", (_, res) => res.send("Pong"));

// Add UserRouter
apiRouter.use(Paths.Document.Base, DocumentRouter);
apiRouter.use(Paths.Invoice.Base, InvoiceRouter);

// **** Export default **** //

export default apiRouter;
