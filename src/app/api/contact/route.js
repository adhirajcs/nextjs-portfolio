import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Extract data from the request
    const { name, email, message } = await req.json();

    // Create a transporter object using the SMTP transport
    const transporter = createTransport({
      port: 465,
      host: "smtp.gmail.com", // For Gmail SMTP
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.PASSWORD, // Your Gmail app password
      },
      secure: true, // Use SSL
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.EMAIL, // Sender address (Your email)
      to: process.env.EMAIL, // Receiver address (You)
      subject: "Feedback from Portfolio's Contact Form", // Email subject
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ error: false, message: "Feedback sent!" });
  } catch (error) {
    // Handle error in sending the email
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: true, message: "Failed to send feedback." },
      { status: 500 }
    );
  }
};
