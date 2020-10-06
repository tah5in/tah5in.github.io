var initialise = function(MATRIX, CHOICE, ARRAY){

         var sketchProc = function(processingInstance) {
          with (processingInstance) {
             size(document.getElementById("mycanvas").width, document.getElementById("mycanvas").height);
             frameRate(30);

             // ProgramCodeGoesHere
               var w = width;
               var h = height;

               var matrix = MATRIX;

               var SCALE = 20;

               //color shades
               var realStroke = color(4, 0, 255, 255);
               var realFill = color(4, 0, 255, 150);

               var imageStroke = color(0, 161, 67, 255);
               var imageFill = color(0, 161, 67, 150);





               //Functions for drawing

               var transformPoint = function(array){

                   //scaling the values for use
                   for(var i = 0; i < array.length; i++){

                       array[i] = array[i]*SCALE;

                   }

                   //draw real point
                    stroke(realStroke);
                    fill(realFill);
                    ellipse(array[0] + w/2, h/2 - array[1], 5, 5);


                    stroke(imageStroke);
                    fill(imageFill);
                    var newP = [0,0];

                    //calculate coordinates
                    newP[0] = matrix[0] * array[0] + matrix[1] * array[1];
                    newP[1] = matrix[2] * array[0] + matrix[3] * array[1];

                    //draw image point
                    ellipse(newP[0]+w/2, h/2 - newP[1], 5, 5);

               };


               var transformTriangle = function(array){

                   //scaling the values for use
                   for(var i = 0; i < array.length; i++){

                       array[i] = array[i]*SCALE;

                   }


                   stroke(realStroke);
                   fill(realFill);

                   //draw real triangle
                   triangle(array[0] + w/2, h/2 - array[1],
                            array[2] + w/2, h/2 - array[3],
                            array[4] + w/2, h/2 - array[5]);




                   //calculate new coordinates
                   var newP = [0,0,0,0,0,0];


                   for(var i = 0; i < newP.length ; i+=2){

                       newP[i] = matrix[0] * array[i] + matrix[1] * array[i+1];
                       newP[i+1] = matrix[2] * array[i] + matrix[3] * array[i+1];

                   }

                   //draw image
                   stroke(imageStroke);
                   fill(imageFill);

                    triangle(newP[0] + w/2, h/2 - newP[1],
                             newP[2] + w/2, h/2 - newP[3],
                             newP[4] + w/2, h/2 - newP[5]);

               };


               var transformQuad = function(array){

                   //scaling the values for use
                   for(var i = 0; i < array.length; i++){
                       array[i] = array[i]*SCALE;
                   }


                   stroke(realStroke);
                   fill(realFill);

                   //draw real triangle
                   quad(array[0] + w/2, h/2 - array[1],
                        array[2] + w/2, h/2 - array[3],
                        array[4] + w/2, h/2 - array[5],
                        array[6] + w/2, h/2 - array[7]);


                   //calculate new coordinates
                   var newP = [0, 0, 0, 0, 0, 0, 0, 0];

                   for(var i = 0; i < newP.length ; i+=2){
                       newP[i] = matrix[0] * array[i] + matrix[1] * array[i+1];
                       newP[i+1] = matrix[2] * array[i] + matrix[3] * array[i+1];
                   }

                   //draw image
                   stroke(imageStroke);
                   fill(imageFill);

                    quad(newP[0] + w/2, h/2 - newP[1],
                         newP[2] + w/2, h/2 - newP[3],
                         newP[4] + w/2, h/2 - newP[5],
                         newP[6] + w/2, h/2 - newP[7]);

               };








               var run = function() {

                    background(255, 255, 255);
                    stroke(0, 0, 0);


                    line(0, h/2, w, h/2); //x-axis
                    line(w/2, 0, w/2, h); //y-axis

                   //drawing and labelling vertical lines
                   for(var i = 0; i < w; i+=SCALE){

                       stroke(color(89, 87, 87, 50));
                       line(i, 0, i, h);

                       fill(color(255, 0, 0, 100));
                       textSize(10);

                        if(i !== w/2){
                           text((i/SCALE) - (w/(2*SCALE)), i-2.7, h/2 + 13);
                       }

                   }



                   //drawing and labelling horizontal lines
                   for(var i = 0; i < h; i+=SCALE){

                       stroke(color(89, 87, 87, 50));
                       line(0, i, w, i);

                       fill(color(255, 0, 0, 100));
                       textSize(10);

                       if(i !== h/2){
                           text((h/(2*SCALE)) - (i/SCALE), w/2-12, i+5);
                       }

                   }



                  if(CHOICE == "Point"){
                    transformPoint(ARRAY);
                  }else if(CHOICE == "Triangle"){
                    transformTriangle(ARRAY);
                  }else if(CHOICE == "Quadrilateral"){
                    transformQuad(ARRAY);
                  }




               };


               run();


         }};

         // Get the canvas that Processing-js will use
         var canvas = document.getElementById("mycanvas");
         // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
         var processingInstance = new Processing(canvas, sketchProc);

      };


    initialise([0,0,0,0], "Point", [0,0]);
