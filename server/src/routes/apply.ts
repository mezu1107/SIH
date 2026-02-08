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
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'));
      // ↑ note: doosra argument (accept) nahi dena padta jab reject kar rahe ho
    }
  },
});

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      cover_letter,
      job_title,
    } = req.body;

    const resume = req.file;

    if (!first_name || !last_name || !email || !phone || !resume) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields (name, email, phone, resume)',
      });
    }

    const applicantName = `${first_name.trim()} ${last_name.trim()}`.trim();
    const resumePath = resume.path;

    const emailSent = await sendApplicationEmail(
      process.env.EMAIL_USER!,
      applicantName,
      job_title || 'Unknown Position',
      email,
      phone,
      cover_letter || 'No additional information provided',
      resumePath
    );

    if (emailSent) {
      // Optional: delete file after success
      // await fs.unlink(resumePath).catch(() => {});

      return res.status(200).json({
        success: true,
        message: 'Application submitted successfully',
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Failed to send application email',
      });
    }
  } catch (error: any) {
    console.error('Apply route error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
});

export default router;