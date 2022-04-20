const Movie = require("../models/Movie");
const genres = require("../Genres")

exports.getGenres = async (req, res) => {
  return res.send(genres.genres);
}

exports.getMovie = async (req, res) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findOne({ id: id });
  } catch (err) {
    return res.status(500).send(err);
  }
  return res.send(movie);
}

exports.getMovies = async (req, res) => {

  const genres = req.query.genres;
  const keyword = req.query.keyword;
  const limit = req.query.limit || 12;
  const skip = req.query.skip || 0;
  let movies;
  let count;

  if (genres && !keyword) {
    try {
      const data = await getMoviesByGenres(genres, limit, skip);
      return res.send(data);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
  if (!genres && keyword) {
    try {
      const data = await getMoviesByKeyword(keyword, limit, skip);
      return res.send(data);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
  if (genres && keyword) {
    try {
      const data = await getMoviesByKeywordAndGenres(keyword, genres, limit, skip);
      return res.send(data);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  try {
    movies = await Movie.find().sort('id').limit(limit).skip(skip);
    count = await Movie.countDocuments();

  } catch (err) {
    return res.status(500).send(err);
  }

  return res.send({ count, movies });
};

getMoviesByGenres = async (genres, limit, skip) => {
  let movies;
  let count;
  movies = await Movie.find({ genres: { $in: JSON.parse(genres) } }).sort('id').limit(limit).skip(skip);
  count = await Movie.countDocuments({ genres: { $in: JSON.parse(genres) } });
  return { count, movies };
}

getMoviesByKeyword = async (keyword, limit, skip) => {
  let movies;
  let count;
  movies = await Movie.find({ title: { $regex: keyword, $options: 'i' } }).sort('id').limit(limit).skip(skip);
  count = await Movie.countDocuments({ title: { $regex: keyword, $options: 'i' } });
  return { count, movies };
}

getMoviesByKeywordAndGenres = async (keyword, genres, limit, skip) => {
  let movies;
  let count;
  movies = await Movie.find({ $and: [{ title: { $regex: keyword, $options: 'i' } }, { genres: { $in: JSON.parse(genres) } }] }).sort('id').limit(limit).skip(skip);
  count = await Movie.countDocuments({ $and: [{ title: { $regex: keyword, $options: 'i' } }, { genres: { $in: JSON.parse(genres) } }] });
  return { count, movies };
}