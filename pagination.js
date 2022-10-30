const app = require('express');
function paginatedResults(model) {
function results(x){
  let model = x
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
 
    // calculating the starting and ending index
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
 
    const results = {};
    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
 
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
 
    results.results = model.slice(startIndex, endIndex);
 
    res.paginatedResults = results;
    next();
  };
}
 
// const port = 3006;
// const url = "http://localhost:" + port;
// app.listen(port, () => {
//   console.log("Service endpoint= %s", url);
// });
