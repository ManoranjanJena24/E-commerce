class HandleError extends Error{
  constructor(message,statusCode){
    super(message);
    this.statusCode=statusCode;
    Error.captureStackTrace(this,this.constructor)
  }  
}
export default HandleError;






// This is an Express error-handling middleware — Express automatically knows it's for errors because it has 4 parameters: (err, req, res, next).

// 💡 When does Express run this?
// ➡️ Express runs this middleware only if next(error) is called somewhere.

// So you don't call this middleware manually, Express does it whenever an error is passed.