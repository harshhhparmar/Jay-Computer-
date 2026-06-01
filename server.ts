import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { siteConfig, services } from "./src/data"; // Re-using data file

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API endpoints
  app.get("/api/config", (req, res) => {
    res.json(siteConfig);
  });

  app.get("/api/services", (req, res) => {
    res.json(services);
  });

  app.post("/api/enquiry", (req, res) => {
    const { name, phone, serviceId, message } = req.body;
    
    // In a real application, you would save this to a database,
    // Google Sheets, send an email, or notify via SMS/WhatsApp API.
    console.log("New Enquiry Received:");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service ID: ${serviceId}`);
    console.log(`Message: ${message}`);
    console.log("------------------------");

    // Returning success
    res.status(200).json({ success: true, message: "Enquiry received successfully." });
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
