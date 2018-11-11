
function check(form)
{
 
 if(form.userid.value == "ajith" && form.pswrd.value == "ajith")
  {
    alert('login successful')
  }
 else
 {
   alert("Wrong password")
  }
}

function go(form)
{
	alert(nickname.value);

}
function lettersOnly(input)
{
	 var regex = /[^a-z]/gi;
	 input.value = input.value.replace(regex, "");
}
