const router = require("express").Router();
const {
	addThought,
	removeThought,
	addReaction,
	removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/<userId>
router.route("/:thoughtId").post(addThought);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
