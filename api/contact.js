import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const { name, email, mobile, message } = req.body;

  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ ok: false, message: "Missing fields" });
  }

  // Configure your Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "justfridayai@gmail.com",
    subject: `New Contact from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true, message: "success" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ ok: false, message: "failed" });
  }
}
