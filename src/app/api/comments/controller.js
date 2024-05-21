// Previously declared controllers

// GET all
async function getComments(req, res) {
  try {
    const comments = await Comment.findAll();
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// POST
async function createComment(req, res) {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// PUT
async function updateComment(req, res) {
  try {
    await res.comment.update(req.body);
    res.json(res.comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// DELETE
async function deleteComment(req, res) {
  try {
    await res.comment.destroy();
    res.json({ message: "Deleted comments" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Middleware function

async function getComment(req, res, next) {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (comment == null) {
      return res.status(404).json({ message: "Cannot find comment" });
    }
    res.comment = comment;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
