var arr = new Array();
var indextruedstore = 0;

showDataUser();

var input = document.getElementById("search_field_input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   search_table();
  }
});

function checkMob(){
  var mobnumm = document.getElementById("Mobnum").value;

  if (mobnumm.length == 10) {
    checkLand();
  } else {
    alert("Please enter a valid, 10 digit mobile number.");
  }
}

function checkLand(){
  var landnumm = document.getElementById("Landnum").value;

  if (landnumm.length == 11) {
    checkemail();
  } else {
    alert("Please enter a valid, 10 digit landline number.");
  }
}

function checkemail(){
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var emailidd = document.getElementById("Emailid").value;
  if (emailidd.match(mailformat)) {
    addData();
  } else {
    alert("Please enter a valid Email address.")
  }
} 

function checkMobs(){
  var mobnumm = document.getElementById("Mobnum").value;

  if (mobnumm.length == 10) {
    checkLands();
  } else {
    alert("Please enter a valid, 10 digit mobile number.");
  }
}

function checkLands(){
  var landnumm = document.getElementById("Landnum").value;

  if (landnumm.length == 10) {
    checkemails();
  } else {
    alert("Please enter a valid, 10 digit landline number.");
  }
}

function checkemails(){
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var emailidd = document.getElementById("Emailid").value;
  if (emailidd.match(mailformat)) {
    savechange();
  } else {
    alert("Please enter a valid Email address.")
  }
} 


function addData(){
       
  getData();
  arr.push({
    "Named":document.getElementById("Named").value,
    "Mobnum":document.getElementById("Mobnum").value,
    "Landnum":document.getElementById("Landnum").value,
    "Emailid":document.getElementById("Emailid").value
  });

  localStorage.setItem("localData",JSON.stringify(arr));
  showData();
}



   



function getData(){
  var str = localStorage.getItem("localData");
  if (str != null)
     arr = JSON.parse(str);
     
}

function showData(){
  getData();
  
  var tbl = document.getElementById("myTable");

  var x = tbl.rows.length;
  
  while (--x){
    tbl.deleteRow(x);
  }
  
  for (i = 0; i < arr.length; i++){
    r = tbl.insertRow();
    var cell1 = r.insertCell();
    var cell2 = r.insertCell();
    var cell3 = r.insertCell();
    var cell4 = r.insertCell();
    var cell5 = r.insertCell();
    var cell6 = r.insertCell();
    
    
    var tdabutton = document.createElement("BUTTON");
    tdabutton.innerHTML = "Delete";
    tdabutton.addEventListener("click",deleteRow);
    
    
    var tedbutton = document.createElement("BUTTON");
    tedbutton.innerHTML = "Edit";
    tedbutton.addEventListener("click",editit);
    
 
    cell1.innerHTML = arr[i].Named;
    cell2.innerHTML = arr[i].Mobnum;   
    cell3.innerHTML = arr[i].Landnum;
    cell4.innerHTML = arr[i].Emailid;
    cell5.appendChild(tedbutton);
    cell6.appendChild(tdabutton);
     
     
  }
}

function showDataUser(){
  getData();
  
  var tbl = document.getElementById("myTable");

  var x = tbl.rows.length;
  
  while (--x){
    tbl.deleteRow(x);
  }
  
  for (i = 0; i < arr.length; i++){
    r = tbl.insertRow();
    var cell1 = r.insertCell();
    var cell2 = r.insertCell();
    var cell3 = r.insertCell();
    var cell4 = r.insertCell();
    
    cell1.innerHTML = arr[i].Named;
    cell2.innerHTML = arr[i].Mobnum;   
    cell3.innerHTML = arr[i].Landnum;
    cell4.innerHTML = arr[i].Emailid;

     
  }
}

function editit(){
  getData();

  var indexed = this.parentNode.parentNode.rowIndex;
  var indextrued = indexed - 1;
  indextruedstore = indextrued;




  document.getElementById("editbtn").style.display = "block";
  document.getElementById("insertbtn").style.display = "none";

  var namededit = arr[indextrued].Named;
  var mobnumedit = arr[indextrued].Mobnum;
  var landnumedit = arr[indextrued].Landnum;
  var emailidedit = arr[indextrued].Emailid;

  document.getElementById("Named").value = namededit;
  document.getElementById("Mobnum").value = mobnumedit;
  document.getElementById("Landnum").value = landnumedit;
  document.getElementById("Emailid").value = emailidedit;
  
}  

function savechange(){
  
  document.getElementById("editbtn").style.display = "none";
  document.getElementById("insertbtn").style.display = "block";
      
  var namedEdited = document.getElementById("Named").value;
  var mobnumEdited = document.getElementById("Mobnum").value; 
  var landnumEdited = document.getElementById("Landnum").value;
  var EmailidEdited = document.getElementById("Emailid").value;
  
  arr[indextruedstore].Named = namedEdited;
  arr[indextruedstore].Mobnum = mobnumEdited;
  arr[indextruedstore].Landnum = landnumEdited;
  arr[indextruedstore].Emailid = EmailidEdited;
      
  localStorage.setItem("localData",JSON.stringify(arr));
  showData();

} 


function deleteRow() {
  getData();

  document.getElementById("editbtn").style.display = "none";
  document.getElementById("insertbtn").style.display = "block";

  var index = this.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(index);
  var indextrue = index - 1;
  arr.splice(indextrue, 1)

  localStorage.setItem("localData",JSON.stringify(arr));
  showData();
}




function search_table(){
  // Declare variables 
  var input, filter, tablee, tr, td, i;
  input = document.getElementById("search_field_input");
  filter = input.value.toUpperCase();
  tablee = document.getElementById("myTable");
  tr = tablee.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td") ; 
    for(j=0 ; j<td.length ; j++)
    {
      let tdata = td[j] ;
      if (tdata) {
        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "table-row";
          break ; 
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function checkadmin(){
  var adminusername = document.getElementById("Username").value;
  var adminpsw = document.getElementById("psw").value;

  if (adminusername == "Anshveer") {
    if (adminpsw == "1234") {
      showData();
      document.getElementById("adminview").style.display = "block";
      document.getElementById("adminask").style.display = "none";
      document.getElementById("logoutask").style.display = "block";
      document.getElementById("id01").style.display = "none";
      document.getElementById("editortools").style.display = "table-cell";
      adminusername.value = "";
      adminpsw.value = "";
      document.getElementById("success").innerHTML = "";
    } else {
      document.getElementById("success").innerHTML = "Please fill correct Username or Password";
    }
  } else {
    document.getElementById("success").innerHTML = "Please fill correct Username or Password";
  }
}

function logoutfunc(){
  showDataUser();
  document.getElementById("adminview").style.display = "none";
  document.getElementById("adminask").style.display = "block";
  document.getElementById("logoutask").style.display = "none";
  document.getElementById("id01").style.display = "none";
  document.getElementById("editortools").style.display = "none";
  adminusername.value = "";
  adminpsw.value = "";
  document.getElementById("success").innerHTML = "";
}