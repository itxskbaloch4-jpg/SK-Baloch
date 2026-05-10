const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendClientWelcome(email, name) {
    await resend.emails.send({
        from: 'SK Baloch <onboarding@yourdomain.com>',
        to: email,
        subject: 'Let\'s build your digital masterpiece',
        html: `<h1>Hello ${name},</h1><p>We've received your request. Our team is reviewing your requirements.</p>`
    });
}

module.exports = { sendClientWelcome };
