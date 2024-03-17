import express from "express";
import nodemailer from "nodemailer";


export async function sendMail(recipient,name) {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: '22je0094@iitism.ac.in', // Update with your Gmail address
                pass: 'buqwgiffkdcxeait' // Update with your Gmail password
            }
        });

        const mailOptions = {
            from: 'EHR APP <22je0094@iitism.ac.in>',
            to: recipient,
            subject: 'Welcome to EHR (Electronic Health Records)',
            html: `
            Dear ${name},

            <p>Thank you for registering with EHR (Electronic Health Records)! Your Own Health E-buddy. Your account has been successfully created. With this successful registration you ought to keep a track on your medical vitals, track your health and lead a healthy life!! 
            
            Feel free to login to your account and start exploring our platform.Welcome to the world of healthy living.</p>
            <p>
            Best regards,</p>

            <p>The EHR Team</p>`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}