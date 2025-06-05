// api/webhook.js
export default function handler(req, res) {
  const VERIFY_TOKEN = "vgokRz33DWVLIA3eo1OdqA";

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }

  if (req.method === "POST") {
    console.log("Incoming message:", JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
  }
}
