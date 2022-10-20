import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import cors from "cors";
import { projects } from "../../../constants/Constants";

const getProject = (id: string) => projects.find((c) => c.id.toString() === id);

const handler = nc<NextApiRequest, NextApiResponse>({ onError, onNoMatch }).use(
  cors()
);

handler.get<NextApiRequest, NextApiResponse>(async (req, res) => {
  res.status(200).json({ data: projects });
});

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
