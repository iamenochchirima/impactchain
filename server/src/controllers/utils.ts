
import path from 'path';

import { Request, Response } from "express";
import puppeteer from "puppeteer";
import { pdfTemplate } from "../pdf/index"; 

const basePath = path.join(__dirname, '../pdfs'); 
const pdfPath = path.join(basePath, 'result.pdf');

export const createPdf = async (req: Request, res: Response) => {
  try {
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage(); 
    await page.setContent(pdfTemplate(req.body)); 

  
    const fs = require('fs');
    if (!fs.existsSync(basePath)) {
      fs.mkdirSync(basePath, { recursive: true });
    }

    await page.pdf({
      path: pdfPath,
      format: "A4"
    });

    await browser.close();
    console.log("PDF created successfully at", pdfPath)
    res.send("PDF created successfully!");
  } catch (error) {
    console.error("Error creating PDF:", error);
    res.status(500).send("Failed to create PDF"); 
  }
};

export const fetchPDF = async (req: Request, res: Response) => {
    const fs = require('fs');
  if (fs.existsSync(pdfPath)) {
    res.sendFile(pdfPath); 
  } else {
    console.error('PDF file not found at:', pdfPath);
    res.status(404).send("PDF file not found");
  }
}
