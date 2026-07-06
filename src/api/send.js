import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { name, email } = JSON.parse(req.body);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain later
      to: email,
      subject: 'Booking Received - NIKONTHEBEATS',
      html: `<p>Hi ${name}, thank you for your project briefing. I will be in touch shortly.</p>`
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}