import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { ContactMessage } from "../../../types/contactMessage.type";
import { contacts } from "../../../data/contact";
import sgMail from "@sendgrid/mail";

const getContact = (id: string) => contacts.find((c) => c.id === id);

const handler = nc<NextApiRequest, NextApiResponse>({ onError, onNoMatch }).use(
  cors()
);

handler.get<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ data: contacts });
  }
);

handler.post<NextApiRequest, NextApiResponse>(
  async (req: NextApiRequest, res: NextApiResponse, next) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const { firstName, lastName, email, message } = req.body;

    const contact: ContactMessage = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      message,
    };

    const msg = {
      to: "nahuegallinoti@gmail.com",
      from: "nahuegallinoti@gmail.com",
      subject: `Portfolio: Contact from ${firstName} ${lastName}`,
      html: `<p>${message}</p><strong>Email: ${email}</strong>     
    `,
    };

    try {
      sgMail.send(msg).then(
        (response) => {
          console.log(response);
          contacts.push(contact);
          res.status(200).json({ data: contact });
        },
        (error) => {
          console.error(error);
          next(error);
        }
      );
    } catch (error: any) {
      res.status(500);
      next(new Error(`${error}`));
    }
  }
);

handler.patch<NextApiRequest, NextApiResponse>(async (req, res, next) => {
  const { id, ...data } = req.body;

  if (!id) {
    res.status(400);
    next(new Error("Id is required"));
    return;
  }

  const contact = getContact(id);

  if (contact === undefined) {
    res.status(404);
    next(new Error("Contact not found"));
    return;
  }

  const i = contacts.findIndex((n) => n.id === id);

  const updated = { ...contact, ...data };

  contacts[i] = updated;
  res.json({ data: updated });
});

handler.delete<NextApiRequest, NextApiResponse>(async (req, res, next) => {
  const { id } = req.body;

  if (!id) {
    res.status(400);
    next(new Error("Id is required"));
    return;
  }

  const contact = getContact(id);

  if (!contact) {
    res.status(404);
    next(new Error("Contact not found"));
    return;
  }

  const i = contacts.findIndex((n) => n.id === id);

  contacts.splice(i, 1);

  res.json({ data: contact });
});

//cuando se produce un error en el servidor se ejecuta este metodo
function onError(
  err: Error,
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  res.end(`Error: ${err.message}`);
}

//cuando se utiliza desde el cliente un metodo http que no esta definido en el servidor se ejecuta este metodo
function onNoMatch(req: NextApiRequest, res: NextApiResponse) {
  res.status(404).end(`No route matched`);
}

export default handler;
