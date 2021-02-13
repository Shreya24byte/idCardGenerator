function generateCard(){
    const nameValue = document.getElementById("name").value;
    document.getElementById("cardName").innerHTML = nameValue;
    const collegeNameValue = document.getElementById("collegeName").value;
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;
    const locationValue = document.getElementById("location").value;
    document.getElementById("cardLocation").innerHTML = locationValue;
    document.querySelector(".card-container").style.display="flex";
};

var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById("picture");
      var output2 = document.getElementById("cardImage");
      document.getElementById("picture").style.display="block";
      output.src = reader.result;
      output2.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };