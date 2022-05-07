import { contactEmail } from '../app.js'

export const send = async (req, res) => {
   try {
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;
      const mail = {
         from: name,
         to: "ongthothienbinh2@gmail.com",
         subject: "Contact Form Submission",
         html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
      };
      contactEmail.sendMail(mail, (error) => {
         if (error) {
            res.json({ status: "ERROR" });
         } else {
            res.json({ status: "Message Sent" });
         }
      });
   } catch (err) {
      res.status(500).json(err);
   }
};

