function check(form)
{
 
 if(form.userid.value == "ajith" && form.pswrd.value == "12345")
  {
    alert('login successful')
  }
 else
 {
   alert("Wrong password")
  }
}
</script>
<script language="javascript">
function go(form)
{
document.write('Hello'+form.nickname.value);
}