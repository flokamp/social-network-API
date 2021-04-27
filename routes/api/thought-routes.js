const router = require("express").Router();
const {
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
router
	.route("/thoughts/:thoughtId/reactions")
	.post(addReaction)
	.delete(removeReaction);

module.exports = router;
