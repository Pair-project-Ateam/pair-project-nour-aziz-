// a variable to store our passwords and username
var student = [
	{ 
		 username: "nour",
		 password: "jerbi"
	 },
	{
	 username:"aziz",
	 password:"1234"  
  }]
 
//   the function that loops over the the student variable and checks wether the username and the password matches 
 $("#clickme").click(function(){
	 
 
	 var username = document.getElementById('username').value
	 var password = document.getElementById('password').value
 
	 for(var i = 0; i < student.length; i++) {
		 if(username == student[i].username && password == student[i].password) {
			 alert(username + " welcome!!") 
			 window.location.replace("./choose_field.html")
 
		 }
		 alert("incorrect username or password")
 
	 }
 })
 
 
//  the function that takes the value of the marks inputed and counts them depending on the Coef
 
 $("#m").on("click",function(){
	 var a=parseInt($("#s1").val())
	 var b=parseInt($("#s2").val())
	 var c=parseInt($("#s3").val())
	 var d=parseInt($("#s4").val())
	 var e=parseInt($("#s5").val())
	 var f=parseInt($("#s6").val())
	 
	 var total=(((a*4)+(b*3)+(c*3)+(d*2)+(e*4)+(f*4))/20)
 $('.res').append(`<p>${total}</p>`)
 
// the condition that gives the feedback to the student depending on the final mark 
 if (total<10){
	document.getElementById("message").innerHTML="I am afraid you need to work harder"
	console.log(total) 
}
else if (total>=10){
   document.getElementById("message").innerHTML="keep it up you can do better "
}

 })