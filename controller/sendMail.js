const nodemailer = require("nodemailer");

const sendMail = async (req,res)=>{
    
    

    // connect with smtp server
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'maci.rice@ethereal.email',
            pass: '7fUYBGbtyzd8ePYN41'
        }
    });

    const info = await transporter.sendMail({
        from: '"Harshit Anand 👻" <maci.rice@ethereal.email>', // sender address
        to: "iamharshit101@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      res.send(info);

};

module.exports =sendMail;