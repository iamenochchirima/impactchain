import { createPdf, fetchPDF } from "../controllers/utils";
import { Router } from "express";

export default (router: Router) => {
  router.post("/create-pdf", createPdf );
  router.get("/fetch-pdf", fetchPDF);
};
