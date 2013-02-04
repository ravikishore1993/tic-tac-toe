
window.onload = function() {
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
context.fillStyle = "#725A6C";
context.fillRect(50, 25, 600, 600);
context.lineWidth = 1;
context.strokeStyle =	 "white";
context.strokeRect( 250 , 25 , 200 ,600 );
context.strokeRect( 50 , 225 , 600 , 200 );
sign = 0 ;
 $('#butt').attr( 'value' , 'Reset' );
function draw(x1,y1,x2,y2 , result ){ 
			//alert();
		context.lineWidth = 10 ;
		context.strokeStyle = 'blue';
		context.beginPath();
  context.moveTo(x1*200 + 50 +100, y1*200 + 25 +100 );
  context.lineTo(x2*200 + 50 +100, y2*200 + 25 +100);
  context.stroke();
  $('#canvas').unbind('click');
		
		if(result == 2) html = '<div id ="result" ><img src = "o.png"> Wins !<br></div>'; 	
		else html = '<div id ="result" ><img src = "x.png"> Wins !<br></div>';
 $('#result').html( html );
 $('#butt').attr( 'value' , 'Play Again' );

	} ;


a = [[ {  } , {} , {} ] , [ {} , {} , {} ] , [ {} , {} , {} ] ]
for( i =0 ; i<3 ; i++ )
	for( j =0 ; j<3 ; j++ )
	{
		a[i][j].value = 0 ;
		a[i][j].x =  j  ; 
		a[i][j].y =   i ;
	}

	context.fillStyle = "#fff";
	ex = new Image();
	ex.src = 'x.png';
	vo = new Image();
	vo.src = 'o.png';
//	

$("#canvas").click(function (e){
	
    var x = Math.floor((e.pageX-$("#canvas").offset().left) );
    var y = Math.floor((e.pageY-$("#canvas").offset().top) );
    
    console.log( " x is "+x+" y is "+y );

 

	x  = x - 50 ;
	y = y - 25 ;

	x = Math.floor( x / 200 );
	y = Math.floor( y / 200 );

if ( a[x][y].value == 0 ){
	
	sign++;
	a[x][y].value = sign%2 +1 ;
	
	if( sign%2 != 0 ){context.drawImage(vo , x*200 +100 + 50 - 64   , y*200 +100 + 25 -64  );}
	else {context.drawImage(ex , x*200 +100 + 50 - 64   , y*200 +100 + 25 -64  ) ; };


	
if( a[0][0].value==a[0][1].value && a[0][1].value==a[0][2].value && a[0][0].value != 0 ){ result = a[0][0].value;  draw( 0 , 0 , 0  , 2 , result ); }
if( a[1][0].value==a[1][1].value && a[1][1].value==a[1][2].value  && a[1][0].value !=0){ result = a[1][0].value; draw( 1 , 0 , 1  , 2 , result); }
if( a[2][0].value==a[2][1].value && a[2][1].value==a[2][2].value  && a[2][0].value !=0){result = a[2][0].value;draw( 2 , 0 , 2  , 2 , result);}
if( a[0][0].value==a[1][0].value && a[1][0].value==a[2][0].value && a[0][0].value !=0 ){result = a[0][0].value;draw( 0 , 0 , 2  , 0 , result);}
if( a[1][0].value==a[1][1].value && a[1][1].value==a[1][2].value && a[1][0].value !=0 ){result = a[1][0].value;draw( 1 , 0 , 1  , 2 , result);}
if( a[2][0].value==a[2][1].value && a[2][1].value==a[2][2].value  && a[2][0].value !=0){result = a[2][0].value;draw( 2 , 0 , 2  , 2 , result);}
if( a[0][0].value==a[1][1].value && a[1][1].value==a[2][2].value  && a[0][0].value !=0){result = a[0][0].value;draw( 0 , 0 , 2  , 2 , result);}
if( a[0][2].value==a[1][1].value && a[1][1].value==a[2][0].value  && a[0][2].value !=0){result = a[0][2].value;draw( 0 , 2 , 2 ,0 , result);}





}

});

$('#butt').click( function(){ 

	$('#result').html("");

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
context.fillStyle = "#725A6C";
context.fillRect(50, 25, 600, 600);
context.lineWidth = 1;
context.strokeStyle =	 "white";
context.strokeRect( 250 , 25 , 200 ,600 );
context.strokeRect( 50 , 225 , 600 , 200 );
sign = 0 ;
$('#butt').attr( 'value' , 'Reset' );
function draw(x1,y1,x2,y2 , result ){ 
			//alert();
		context.lineWidth = 10 ;
		context.strokeStyle = 'blue';
		context.beginPath();
  context.moveTo(x1*200 + 50 +100, y1*200 + 25 +100 );
  context.lineTo(x2*200 + 50 +100, y2*200 + 25 +100);
  context.stroke();
  $('#canvas').unbind('click');
		
		if(result == 2) html = '<img src = "o.png"> Wins !<br>'; 	
		else html = '<img src = "x.png"> Wins !<br>';
 $('#result').html( html );
 $('#butt').attr( 'value' , 'Play Again' );

	} ;


a = [[ {  } , {} , {} ] , [ {} , {} , {} ] , [ {} , {} , {} ] ]
for( i =0 ; i<3 ; i++ )
	for( j =0 ; j<3 ; j++ )
	{
		a[i][j].value = 0 ;
		a[i][j].x =  j  ; 
		a[i][j].y =   i ;
	}

	context.fillStyle = "#fff";
	ex = new Image();
	ex.src = 'x.png';
	vo = new Image();
	vo.src = 'o.png';

$('#canvas').click(function (e){
	
    var x = Math.floor((e.pageX-$("#canvas").offset().left) );
    var y = Math.floor((e.pageY-$("#canvas").offset().top) );
    
    console.log( " x is "+x+" y is "+y );

 

	x  = x - 50 ;
	y = y - 25 ;

	x = Math.floor( x / 200 );
	y = Math.floor( y / 200 );

if ( a[x][y].value == 0 ){
	
	sign++;
	a[x][y].value = sign%2 +1 ;
	
	if( sign%2 != 0 )context.drawImage(vo , x*200 +100 + 50 - 64   , y*200 +100 + 25 -64  );
	else context.drawImage(ex , x*200 +100 + 50 - 64   , y*200 +100 + 25 -64  );


	
if( a[0][0].value==a[0][1].value && a[0][1].value==a[0][2].value && a[0][0].value != 0 ){ result = a[0][0].value;  draw( 0 , 0 , 0  , 2 , result ); }
if( a[1][0].value==a[1][1].value && a[1][1].value==a[1][2].value  && a[1][0].value !=0){ result = a[1][0].value; draw( 1 , 0 , 1  , 2 , result); }
if( a[2][0].value==a[2][1].value && a[2][1].value==a[2][2].value  && a[2][0].value !=0){result = a[2][0].value;draw( 2 , 0 , 2  , 2 , result);}
if( a[0][0].value==a[1][0].value && a[1][0].value==a[2][0].value && a[0][0].value !=0 ){result = a[0][0].value;draw( 0 , 0 , 2  , 0 , result);}
if( a[1][0].value==a[1][1].value && a[1][1].value==a[1][2].value && a[1][0].value !=0 ){result = a[1][0].value;draw( 1 , 0 , 1  , 2 , result);}
if( a[2][0].value==a[2][1].value && a[2][1].value==a[2][2].value  && a[2][0].value !=0){result = a[2][0].value;draw( 2 , 0 , 2  , 2 , result);}
if( a[0][0].value==a[1][1].value && a[1][1].value==a[2][2].value  && a[0][0].value !=0){result = a[0][0].value;draw( 0 , 0 , 2  , 2 , result);}
if( a[0][2].value==a[1][1].value && a[1][1].value==a[2][0].value  && a[0][2].value !=0){result = a[0][2].value;draw( 0 , 2 , 2 ,0 , result);}






}

});
});

};


