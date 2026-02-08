import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';
import { sendApplicationEmail } from '../utils/sendEmail';

const router = Router();

const uploadDir = path.join(__dirname, '../../uploads');

(async () => {
  try {
    await fs.mkdir(uploadDir, { recursive: true });
  } catch (err) {
    console.error('Failed to create uploads dir:', err);
  }
})();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDFs allowed'), false);
    }
  },
});

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { first_name, last_name, email, phone, cover_letter, job_title } = req.body;
    const resume = req.file;

    if (!first_name || !last_name || !email || !phone || !resume) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const applicantName = `${first_name} ${last_name}`;
    const resumePath = resume.path;

    const emailSent = await sendApplicationEmail(
      process.env.EMAIL_USER!,
      applicantName,
      job_title || 'Unknown',
      email,
      phone,
      cover_letter || 'No cover letter',
      resumePath
    );

    if (emailSent) {
      // Optional: fs.unlink(resumePath); // delete after send
      res.status(200).json({ success: true, message: 'Application submitted' });
    } else {
      res.status(500).json({ success: false, message: 'Email failed' });
    }
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;