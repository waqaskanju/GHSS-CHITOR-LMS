 function FocusOnInput()
 	{ document.getElementById("rollno").focus(); }




function check_roll_no_student() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		document.getElementById("aj_result").innerHTML = this.responseText;
    }
  };
  var  rollno=document.getElementById('rollno').value;
  xhttp.open("GET", "check_roll_no.php?roll_no="+rollno+"&table=student", true);
  xhttp.send();
}

function check_roll_no_marks() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		document.getElementById("aj_result").innerHTML = this.responseText;
    }
  };
  var  rollno=document.getElementById('rollno').value;
  xhttp.open("GET", "check_roll_no.php?roll_no="+rollno+"&table=marks", true);
  xhttp.send();
}

function save_rollno(){
  let rollno= document.getElementById('rollno').value;
	localStorage.setItem('Roll_No',rollno);
}

function get_rollno(){
			document.getElementById('next_rollno').innerHTML= " Previous Entered = " + parseInt(localStorage.getItem('Roll_No'));
}
