import express, { Request, Response } from "express";

import { getProjectData, getProjectList } from "../Utils/FirebaseUtil";

const projectRouter = express.Router();

projectRouter.post("/getProjectData", async (req: Request, res: Response) => {
    const API_RESULT = await getProjectData("0001");
    res.send(API_RESULT);
});

projectRouter.post("/getProjectList", async (req: Request, res: Response) => {
    const API_RESULT = await getProjectList();
    res.send(API_RESULT);
});

export default projectRouter;