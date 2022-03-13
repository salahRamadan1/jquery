 
$("#open").click( () =>{
  $(".leftBar").animate({"margin-left":"0%" },500  , function(){

    $("#open").css({"display" : "none"} ,  )
  })
})
//  *******
$("#close").click(()=>{
    $(".leftBar").animate({"margin-left":"-80%"},500  ,  ()=>{


      $("#open").css({"display" : "block"} ,)
    })

})

// *****

$(".w-50  h4").click( function() {
      $(this).next().slideToggle(1000)
      
})
// *****

$("a").click(function(){
 let href = $(this).attr(`href`)
 let off = $(href).offset().top;
 $("body , html").animate({scrollTop:off}  , 1500)
})
// *****  
$("#cog").click(()=>{
let off = $(".color").css("right")
let width = $(".color_box ").outerWidth(true)
if(off =="0px"){
  $(".color").animate({right:`-${width}px` },1000)
}
else{
  $(".color").animate({right: `0px`},1000)
}
})
let color = $(".color_item")
color.eq(0).css("backgroundColor" , " teal");
color.eq(1).css("backgroundColor" , " white");
color.eq(2).css("backgroundColor" , " black");
color.eq(3).css("backgroundColor" , " green");
$(".color_item").click(function(){
  let colorItem = $(this).css("backgroundColor");
$("p").css("backgroundColor" ,colorItem )
})

// *********
var max = 100

$("textarea ").keyup(function(){
  let d =  $(this).val().length
  let number1 = max - d
if( d <= 100){

   $(".character").text(number1)
}
else{
  $(".character").text("your available character finished")
}
})

 
    
 

 
 

 


   
 
 