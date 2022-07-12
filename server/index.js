import express from 'express';

const app = express();

app.get("/api/info", (req, res) => {
    res.json({ info: "API Server Endpoint" });
});

export const handler = app;