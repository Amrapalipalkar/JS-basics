//step 1. create a request variable.
  var request = new XMLHttpRequest();

//step 2. create a connection.
  request.open('GET','https://restcountries.eu/rest/v2/all',true);

//spet 3. send the request.
  request.send();

//spet 4. process and load the response.
  request.onload = function (){
     var data = JSON.parse(this.response);
     for(var i in data)
     {
        console.log(data[i].name); 
     }
    };
