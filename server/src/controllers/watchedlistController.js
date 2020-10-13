const { User } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const user = await User.findByPk(1);
    if (!user) {
      res.sendStatus(500);
    }
    const watchedMovies = await user.getWatched();
    res.status(200);
    res.send(watchedMovies);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.postOne = async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      res.sendStatus(500);
    }
    const watchedMovie = await user.addWatched(movieId);
    res.status(201);
    res.send(watchedMovie);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};

exports.removeOne = async (req, res) => {
  try {
    const user = await User.findByPk(1);
    if (!user) {
      res.sendStatus(500);
    }
    const { movieId } = req.params;
    await user.removeWatched(movieId);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};
