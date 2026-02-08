import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendApplicationEmail = async (
  to: string,
  applicantName: string,
  jobTitle: string,
  applicantEmail: string,
  applicantPhone: string,
  coverLetter: string,
  resumePath: string
): Promise<boolean> => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: `New Job Application - ${jobTitle}`,
    text: `
New Application Received

Job: ${jobTitle}
Name: ${applicantName}
Email: ${applicantEmail}
Phone: ${applicantPhone}
Cover Letter: ${coverLetter || 'Not provided'}

Resume attached.
    `,
    attachments: [
      {
        filename: `resume-${applicantName.replace(/\s+/g, '-')}.pdf`,
        path: resumePath,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email failed:', error);
    return false;
  }
};