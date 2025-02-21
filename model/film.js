var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cinemaDB",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Sucessfully connected to MySQL database cinemaDB`);
});

exports.getFilms = function (req, res) {
    connection.query("SELECT * FROM film", function (err, rows) {
      if (err) 
        {
        console.error(err);
        return res.status(500).send("Error getting films");
        }
      res.json(rows);
    });
  };

  exports.getFilm = function (req, res) {
    var filmID = req.params.filmID;
    const query = "SELECT * FROM film WHERE FilmID = ?";
    connection.query(query, [filmID], function (err, rows) 
    {
      if (err) 
        {
        console.error(err);
        return res.status(500).send("Error getting film");
        }
      if (rows.length === 0) 
        {
        return res.status(404).send({ message: "Film not found" });
        }
      res.json(rows[0]);
    });
  };

exports.createFilm = function (req, res) {
  var name = req.body.name;
  var category = req.body.category;
  var runningTime = req.body.runningTime;
  var genre = req.body.genre;
  var director = req.body.director;
  var coverImage = req.body.coverImage;
  var videoURL = req.body.videoURL;
  var ReleaseDate = req.body.ReleaseDate;
  const query = "INSERT INTO film (Name, Category, RunningTime, Genre, Director, CoverImage, VideoURL, ReleaseDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(query, [name, category, runningTime, genre, director, coverImage, videoURL, ReleaseDate], function (err, result) {
    if (err) 
        {
      console.error(err);
      return res.status(500).send("Error adding film");
        }
    res.send({ message: "Film added", filmID: result.insertId });
  });
};

exports.updateFilm = function (req, res) {
    var filmID = req.params.filmID;
    var name = req.body.name;
    var category = req.body.category;
    var runningTime = req.body.runningTime;
    var genre = req.body.genre;
    var director = req.body.director;
    var coverImage = req.body.coverImage;
    var videoURL = req.body.videoURL;
    var ReleaseDate = req.body.ReleaseDate;
    const query = "UPDATE film SET Name = ?, Category = ?, RunningTime = ?, Genre = ?, Director = ?, CoverImage = ?, VideoURL = ?, ReleaseDate = ? WHERE FilmID = ?";
    connection.query(query, [name, category, runningTime, genre, director, coverImage, videoURL, ReleaseDate, filmID], function (err, result) {
      if (err) 
        {
        console.error(err);
        return res.status(500).send("Error updating film");
        }
      if (result.affectedRows === 0) 
        {
        return res.status(404).send({ message: "Film not found" });
        }
      res.send({ message: "Film updated successfully" });
    });
};

exports.deleteFilm = function (req, res) {
  var filmID = req.params.filmID;
  
    const query = "DELETE FROM film WHERE FilmID = ?";
    connection.query(query, [filmID], function (err, result) {
      if (err) 
        {
        console.error(err);
        return res.status(500).send("Error deleting film");
        }
      if (result.affectedRows === 0)
        {
        return res.status(404).send({ message: "Film not found" });
        }
      res.send({ message: "Film deleted successfully" });
    });
};