function submit(){

  var matrix = getMatrixArray();
  var selecedOption = "";
  var coordinateArray;

  var radioElements = document.getElementsByName("Choice");

  //finds out which radio is selected and assigns the value to selectedOption
  for(var i = 0; i < radioElements.length; i++){
    if(radioElements[i].checked){
      selectedOption = radioElements[i].value;
    }
  }


  //gets the coordinateArray depending on which option was selected
  if(selectedOption == "Point"){
    coordinateArray = getPointCoordinates();
  }else if(selectedOption == "Triangle"){
    coordinateArray = getTriangleCoordinates();
  }else if(selectedOption == "Quadrilateral"){
    coordinateArray = getQuadrilateralCoordinates();
  }

  var stringText = "";

  for(var i = 0; i < coordinateArray.length; i++){
    stringText = stringText + coordinateArray[i] + ", ";
  }

  initialise(matrix, selectedOption, coordinateArray);

}






function getPointCoordinates(){

  var array;

  var pointX = document.getElementById("pointX").value;
  if(pointX == ""){pointX = 0;}

  var pointY = document.getElementById("pointY").value;
  if(pointY == ""){pointY = 0;}

  array = [pointX, pointY];

  return array;

}





function getTriangleCoordinates(){

  var array;

  var triangleX1 = document.getElementById("triangleX1").value;
  if(triangleX1 == ""){triangleX1 = 0;}

  var triangleX2 = document.getElementById("triangleX2").value;
  if(triangleX2 == ""){triangleX2 = 0;}

  var triangleX3 = document.getElementById("triangleX3").value;
  if(triangleX3 == ""){triangleX3 = 0;}


  var triangleY1 = document.getElementById("triangleY1").value;
  if(triangleY1 == ""){triangleY1 = 0;}

  var triangleY2 = document.getElementById("triangleY2").value;
  if(triangleY2 == ""){triangleY2 = 0;}

  var triangleY3 = document.getElementById("triangleY3").value;
  if(triangleY3 == ""){triangleY3 = 0;}



  array = [triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3];


  return array;

}




function getQuadrilateralCoordinates(){
    var array;


    var quadX1 = document.getElementById("quadX1").value;
    if(quadX1 == ""){quadX1 = 0;}

    var quadX2 = document.getElementById("quadX2").value;
    if(quadX2 == ""){quadX2 = 0;}

    var quadX3 = document.getElementById("quadX3").value;
    if(quadX3 == ""){quadX3 = 0;}

    var quadX4 = document.getElementById("quadX4").value;
    if(quadX4 == ""){quadX4 = 0;}



    var quadY1 = document.getElementById("quadY1").value;
    if(quadY1 == ""){quadY1 = 0;}

    var quadY2 = document.getElementById("quadY2").value;
    if(quadY2 == ""){quadY2 = 0;}

    var quadY3 = document.getElementById("quadY3").value;
    if(quadY3 == ""){quadY3 = 0;}

    var quadY4 = document.getElementById("quadY4").value;
    if(quadY4 == ""){quadY4 = 0;}

    array = [quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4];

    return array;

}





function getMatrixArray(){

  var x1 = document.getElementById("matrixX1").value;
  if(x1 == ""){x1 = 0;}

  var x2 = document.getElementById("matrixX2").value;
  if(x2 == ""){x2 = 0;}

  var y1 = document.getElementById("matrixY1").value;
  if(y1 == ""){y1 = 0;}

  var y2 = document.getElementById("matrixY2").value;
  if(y2 == ""){y2 = 0;}

  var matrix = [x1, x2, y1, y2];

  return matrix;

}
