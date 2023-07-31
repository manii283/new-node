const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = await nodemailer.createTransport({
    // host: "smtp.forwardemail.net",
    host: "smtp.ethereal.email",
    port: 587,
    // secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "isobel.schulist97@ethereal.email",
      pass: "61YeBw11pYrqUUuGan",
    },
  });

  const info = await transporter.sendMail({
    from: '" manisha nayak 👻" <manisha@gmail.com>', // sender address
    to: "nayakmanisha515@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello manisha !!!!", // plain text body
    html: "<b>Hello manisha !!!!!</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info);
  //   res.send("i am sending mail");
};

module.exports = sendMail;
