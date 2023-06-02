const notFound = (req, res, ) => {
   return  res.status(404).send("404 Not Found");
};


module.exports = notFound;