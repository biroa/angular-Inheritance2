//this is the initialized global App
angular.module('myApp',[])
//We have a factory here ... this would be the place to get all the data through batchAPI
.factory('Data', function () {
  return { message: "I am going to be a data from the server", metadata: "I am a crucial data from the sever too." };
});