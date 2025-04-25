const admin = require("./../../service/FirebaseAdmin");

module.exports = async (req, res) => {
    const { verificationId, otp } = req.body;

    try {
        const credential = admin.auth.PhoneAuthProvider.credential(verificationId, otp);
        const userRecord = await admin.auth().signInWithCredential(credential);
        res.status(200).json({ message: 'OTP verified', uid: userRecord.user.uid });
    } catch (error) {
        console.error('OTP verification failed:', error);
        res.status(400).json({ error: error.message });
    }
};


//----------------------------------------------------------------------------------------------------


// const twilio = require('twilio');
// require('dotenv').config();

// console.log("Twilio Account SID:", process.env.TWILIO_ACCOUNT_SID);
// console.log("Twilio Auth Token:", process.env.TWILIO_AUTH_TOKEN);
// console.log("Twilio Phone Number:", process.env.TWILIO_PHONE_NUMBER);

// const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// module.exports = async (req, res) => {
//     const { phoneNo } = req.body;

//     if (!phoneNo) {
//         return res.status(400).json({ message: "Phone number is required" });
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     try {
//         const message = await client.messages.create({
//             body: `Your OTP is: ${otp}`,
//             from: process.env.TWILIO_PHONE_NUMBER,
//             to: `+91${phoneNo}`,
//         });

//         console.log(`OTP sent: ${otp}`);

//         res.status(200).json({ message: "OTP sent successfully", sid: message.sid });
//     } catch (error) {
//         console.error("OTP sending failed:", error);
//         res.status(500).json({ message: "Failed to send OTP", error: error.message });
//     }
// };
