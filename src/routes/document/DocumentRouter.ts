import { Router } from "express";
import Paths from "../constants/Paths";

const DocumentRouter = Router();

DocumentRouter.get(Paths.Document.Get);

export default DocumentRouter;
