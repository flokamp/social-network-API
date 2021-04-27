const router = require("express").Router();
const {
	getAllThought,
	getThoughtById,
	updateThought,
	addThought,
	removeThought,
	addReaction,
	removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThought).post(addThought);

// /api/thoughts/:id
router
	.route("/:id")
	.get(getThoughtById)
	.put(updateThought)
	.delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
