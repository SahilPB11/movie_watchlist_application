import express from "express";
import {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
  toggleWatched,
  reviewMovie,
} from "../controller/movieController.js";

const router = express.Router();

router.route("/").get(getMovies).post(addMovie);
router.route("/:id").put(editMovie).delete(deleteMovie);
router.route("/:id/watched").patch(toggleWatched);
router.route("/:id/review").patch(reviewMovie);

export default router;
