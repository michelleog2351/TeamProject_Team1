var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cinemaDB",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Sucessfully connected to MySQL database cinemaDB`);
});

exports.getBooking = function (req, res) {
  connection.query("SELECT * FROM Booking", function (err, rows) {
	if (err) {
	  console.error(err);
	  return res.status(500).send("Error getting booking");
	}
	res.json(rows);
  });
};

exports.getBooking = function (req, res) {
  var bookingID = req.params.bookingID;
  const query = "SELECT * FROM Booking WHERE BookingID = ?";
  connection.query(query, [bookingID], function (err, rows) {
	if (err) {
	  console.error(err);
	  return res.status(500).send("Error getting booking");
	}
	if (rows.length === 0) {
	  return res.status(404).send({ message: "Booking not found" });
	}
	res.json(rows[0]);
  });
};

exports.createBooking = function (req, res) {
  //var id = req.params.id;
  var noOfSeats = req.body.noOfSeats;
  var cost = req.body.cost;
  var email = req.params.email;

  const query = "INSERT INTO Booking (NoOfSeats, Cost, Email) VALUES (?, ?, ?)";
  connection.query(query, [noOfSeats, cost, email], function (err, result) {
	if (err) {
	  console.error(err);
	  return res.status(500).send("Error adding new booking");
	}
	res.send({ message: "New booking created", BookingID: result.insertId });
  });
};

exports.updateBooking = function (req, res) {
  var bookingID = req.params.bookingID;
  var noOfSeats = req.body.noOfSeats;
  var cost = req.body.cost;
  var email = req.params.email;
  const query =
	"UPDATE Booking SET NoOfSeats = ?, Cost = ?, Email = ? WHERE bookingID = ?";
  connection.query(
	query,
	[noOfSeats, cost, email, bookingID],
	function (err, result) {
	  if (err) {
		console.error(err);
		return res.status(500).send("Error updating booking");
	  }
	  if (result.affectedRows === 0) {
		return res.status(404).send({ message: "Booking not found" });
	  }
	  res.send({ message: "Booking updated successfully" });
	}
  );
};

exports.deleteBooking = function (req, res) {
  var bookingID = req.params.bookingID;

  const query = "DELETE FROM Booking WHERE BookingID = ?";
  connection.query(query, [bookingID], function (err, result) {
	if (err) {
	  console.error(err);
	  return res.status(500).send("Error deleting booking");
	}
	if (result.affectedRows === 0) {
	  return res.status(404).send({ message: "Booking not found" });
	}
	res.send({ message: "Booking deleted successfully" });
  });
};
