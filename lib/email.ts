import nodemailer from 'nodemailer';

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendConfirmationEmail(opts: {
  to: string; patientName: string; doctorName: string;
  date: string; time: string; meetingLink: string; amount: number;
}) {
  if (!process.env.SMTP_USER) return;
  const t = getTransporter();
  await t.sendMail({
    from: `"${opts.doctorName}" <${process.env.SMTP_USER}>`,
    to: opts.to,
    subject: `Appointment Confirmed — ${opts.doctorName}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0284c7;padding:24px;border-radius:12px 12px 0 0;text-align:center">
        <h1 style="color:white;margin:0">Appointment Confirmed ✓</h1>
      </div>
      <div style="background:white;padding:32px;border-radius:0 0 12px 12px">
        <p>Dear <strong>${opts.patientName}</strong>,</p>
        <p>Your appointment is confirmed and payment received.</p>
        <div style="background:#f0f9ff;border-left:4px solid #0284c7;padding:16px;margin:24px 0;border-radius:8px">
          <p style="margin:0 0 8px"><strong>Doctor:</strong> ${opts.doctorName}</p>
          <p style="margin:0 0 8px"><strong>Date:</strong> ${opts.date}</p>
          <p style="margin:0 0 8px"><strong>Time:</strong> ${opts.time} (Cairo Time)</p>
          <p style="margin:0"><strong>Paid:</strong> EGP ${opts.amount}</p>
        </div>
        <div style="text-align:center;margin:32px 0">
          <a href="${opts.meetingLink}" style="background:#0284c7;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold">Join Video Session</a>
        </div>
        <p style="color:#64748b;font-size:14px">Please join at your scheduled time. If you need to reschedule, reply to this email.</p>
      </div>
    </div>`,
  });
}

export async function sendDoctorNotification(opts: {
  doctorEmail: string; doctorName: string; patientName: string;
  patientEmail: string; date: string; time: string;
}) {
  if (!process.env.SMTP_USER) return;
  const t = getTransporter();
  await t.sendMail({
    from: `"Clinic System" <${process.env.SMTP_USER}>`,
    to: opts.doctorEmail,
    subject: `New Appointment — ${opts.patientName}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:600px">
      <h2 style="color:#0284c7">New Appointment Booked</h2>
      <p>A patient has booked and paid.</p>
      <div style="background:#f0f9ff;padding:16px;border-radius:8px">
        <p><strong>Patient:</strong> ${opts.patientName}</p>
        <p><strong>Email:</strong> ${opts.patientEmail}</p>
        <p><strong>Date:</strong> ${opts.date}</p>
        <p><strong>Time:</strong> ${opts.time}</p>
      </div>
    </div>`,
  });
}
