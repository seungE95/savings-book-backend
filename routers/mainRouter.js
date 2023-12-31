import express from "express";
import { 
    monthTotal,
    getGoal,
    postGoal,
    putGoal,
    category,
    dailylist,
    calendar,
    getDetails,
    postDetails,
    putDetails,
    deleteDetails,
    badge
} from "../controllers/mainController.js";
import { auth } from "../authMiddleware.js";    //token 유효성 검증

const mainRouter = express.Router();

mainRouter.get("/monthtotal", auth, monthTotal);
mainRouter.route("/goal").get(auth, getGoal).post(auth, postGoal).put(auth, putGoal);
mainRouter.get("/category", auth, category);
mainRouter.get("/dailylist", auth, dailylist);
mainRouter.get("/calendar", auth, calendar);
mainRouter.route("/details").get(auth, getDetails).post(auth, postDetails).put(auth, putDetails).delete(auth, deleteDetails);
mainRouter.get("/badge", auth, badge);

export default mainRouter;