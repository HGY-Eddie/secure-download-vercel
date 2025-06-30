const crypto = require("crypto");

module.exports = (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ success: false, message: "Missing email" });

  const secret = process.env.SECRET_KEY;
  const downloadUrl = process.env.FILE_URL;
  const expiryMinutes = parseInt(process.env.EXPIRES_MINUTES || "30");

  const expires = Math.floor(Date.now() / 1000) + expiryMinutes * 60;
  const payload = `${email}|${expires}`;
  const token = crypto.createHmac("sha256", secret).update(payload).digest("hex");

  const signedUrl = `${downloadUrl}?email=${encodeURIComponent(email)}&expires=${expires}&token=${token}`;
  return res.json({ success: true, url: signedUrl });
};