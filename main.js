function check(form)
{
 
 if(form.userid.value == "subscribe" && form.pswrd.value == "dewclarke")
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