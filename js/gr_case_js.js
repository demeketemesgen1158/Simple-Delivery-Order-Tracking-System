function info_more() {
  document.getElementsByClassName("column_right")[0].style.display = "block";
  document.getElementsByClassName("column_right")[0].style.marginBottom =
    "100px";

  document.getElementsByClassName("tracking")[0].style.display = "none";
  document.getElementById("lang").style.display = "none";
  document.getElementById("ord_label").style.display = "none";
  document.getElementsByClassName("rate")[0].style.display = "none";
  document.getElementsByClassName("column_left")[0].style.display = "none";
  document.getElementsByClassName("home")[0].style.display = "block";
  document.getElementsByClassName("home")[0].style.backgroundColor = "#146db1";
  document.getElementsByClassName("about")[0].style.display = "none";
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("moveUp").style.display = "block";
  } else {
    document.getElementById("moveUp").style.display = "none";
  }
};

//case setup control starts here
function casesetup() {
  document.getElementById("ord_inputs").style.display = "block";
  document.getElementById("backRefresh").style.display = "grid";
  document.getElementById("ord_label").style.backgroundColor = "white";
  document.getElementById("ord_label").style.color = "#1A9CFF";
  document.getElementById("ord_label").style.fontWeight = "bold";

  document.getElementsByClassName("order")[0].style.boxShadow =
    "0px 0px 9px -4px #1A9CFF";

  document.getElementById("lang").style.display = "none";
  document.getElementsByClassName("tracking")[0].style.display = "none";
  document.getElementsByClassName("info")[0].style.display = "none";
  document.getElementsByClassName("rate")[0].style.display = "none";
  document.getElementsByClassName("confirmation")[0].style.display = "none";
  document.getElementsByClassName("confirmFinal")[0].style.display = "none";
  document.getElementById("check_inputs").style.display = "none";
}
document.getElementById("ord_label").addEventListener("click", casesetup);
document
  .getElementsByClassName("check_back")[0]
  .addEventListener("click", casesetup);

function caseNext() {
  document.getElementById("ord_inputs").style.display = "none";
  document.getElementById("ord_label").style.display = "none";
  document.getElementsByClassName("order")[0].style.boxShadow = "none";
  document.getElementsByClassName("tracking")[0].style.display = "none";
  document.getElementById("backRefresh").style.display = "none";

  document.getElementById("check_inputs").style.display = "block";

  document.getElementById("check_inputs").style.color = "black";
}

//form validation starts here
function formValidation() {
  let i = 0;
  let j = 0;
  let y = 0;
  var Validation = "invalid";
  for (i = 0; i < 15; i++) {
    document.getElementById("check_inputs").getElementsByClassName("p_input")[
      i
    ].style.boxShadow = "none";

    let inputValue = document
      .getElementById("ord_inputs")
      .getElementsByClassName("required_input")[i].value;
    document.getElementById("check_inputs").getElementsByClassName("p_input")[
      i
    ].innerHTML = inputValue;

    if (inputValue === "") {
      document
        .getElementById("ord_inputs")
        .getElementsByClassName("requiredAlert")[i].style.display = "block";
      y = i;
    } else {
      document
        .getElementById("ord_inputs")
        .getElementsByClassName("requiredAlert")[i].style.display = "none";
    }
  }

  for (j = 0; j < 15; j++) {
    if (
      document
        .getElementById("ord_inputs")
        .getElementsByClassName("required_input")[y].value === ""
    ) {
      Validation = "invalid";
    } else {
      Validation = "valid";
    }
  }
  if (Validation == "valid") {
    caseNext();
  } else {
    alert("Required valiues must be filled");
  }
}
document.getElementById("p_button").addEventListener("click", formValidation);

//form validation ends here

function caseConfirmation() {
  document.getElementById("check_inputs").style.display = "none";
  document.getElementById("ord_label").style.display = "none";
  document.getElementsByClassName("order")[0].style.boxShadow = "none";
  document.getElementsByClassName("tracking")[0].style.display = "none";
  document.getElementById("backRefresh").style.display = "none";

  document.getElementsByClassName("confirmation")[0].style.display = "block";
}
document
  .getElementsByClassName("check_continue")[0]
  .addEventListener("click", caseConfirmation);
//case setup control ends here

//controlling info content starts here

function addContent() {
  let updatedTitle = document
    .getElementsByClassName("addNew")[0]
    .getElementsByTagName("h4")[0].textContent;
  let updatedContent = document
    .getElementsByClassName("addNew")[0]
    .getElementsByTagName("p")[0].textContent;

  let addContObj = {
    title: updatedTitle,
    content: updatedContent,
  };
  const addCont = JSON.stringify(addContObj);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    document.getElementsByClassName("createCont")[0].style.color = "#1A9CFF";
    let responseTxt = xhttp.responseText;
    if (this.status == 200) {
      document.getElementsByClassName("createCont")[0].innerHTML = responseTxt;
    } else {
      document.getElementsByClassName("createCont")[0].innerHTML = "Saving...";
      document
        .getElementsByClassName("addNew")[0]
        .getElementsByTagName("p")[0].contentEditable = false;
      document
        .getElementsByClassName("addNew")[0]
        .getElementsByTagName("h4")[0].contentEditable = false;
      document
        .getElementsByClassName("addNew")[0]
        .getElementsByTagName("p")[0].style.boxShadow = "none";
      document
        .getElementsByClassName("addNew")[0]
        .getElementsByTagName("h4")[0].style.boxShadow = "none";
    }
  };
  xhttp.open("GET", "./api/addContent.php?q=" + addCont);
  xhttp.send();
}
//adding new content ends here

//updating content starts here
function updateContent(updateVal) {
  let updatedTitle = document
    .getElementsByClassName("column_right_btn")
    [updateVal].getElementsByTagName("h4")[0].textContent;

  let updatedContent = document
    .getElementsByClassName("column_right_body")
    [updateVal].getElementsByTagName("p")[0].textContent;

  let reCont = {
    id: updateVal,
    title: updatedTitle,
    content: updatedContent,
  };
  const newCont = JSON.stringify(reCont);
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    document
      .getElementsByClassName("column_right_body")
      [updateVal].getElementsByTagName("p")[0].contentEditable = false;
    document
      .getElementsByClassName("column_right_btn")
      [updateVal].getElementsByTagName("h4")[0].contentEditable = false;
    document
      .getElementsByClassName("column_right_body")
      [updateVal].getElementsByTagName("p")[0].style.boxShadow = "none";
    document
      .getElementsByClassName("column_right_btn")
      [updateVal].getElementsByTagName("h4")[0].style.boxShadow = "none";
    document.getElementsByClassName("saveDiv")[updateVal].style.color =
      "#1A9CFF";
    let responTxt = xhttp.responseText;
    if (this.status == 200) {
      document.getElementsByClassName("saveDiv")[updateVal].innerHTML =
        responTxt;
    } else {
      document.getElementsByClassName("saveDiv")[updateVal].innerHTML =
        "Processing...";
    }
  };

  xhttp.open("GET", "./api/contUpdate.php?q=" + newCont, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send();
}
//updating content ends here

function editContent(val) {
  document
    .getElementsByClassName("column_right_body")
    [val].getElementsByTagName("p")[0].contentEditable = true;
  document
    .getElementsByClassName("column_right_btn")
    [val].getElementsByTagName("h4")[0].contentEditable = true;
  document
    .getElementsByClassName("column_right_body")
    [val].getElementsByTagName("p")[0].style.boxShadow = "0px 0px 0px 1px grey";
  document
    .getElementsByClassName("column_right_btn")
    [val].getElementsByTagName("h4")[0].style.boxShadow =
    "0px 0px 0px 1px grey";
  document
    .getElementsByClassName("column_right_body")
    [val].getElementsByTagName("p")[0].style.padding = "5px";
  document
    .getElementsByClassName("column_right_btn")
    [val].getElementsByTagName("h4")[0].style.padding = "5px";
  document
    .getElementsByClassName("saveDiv")
    [val].getElementsByClassName("contBtn")[0].style.display = "block";
}

//deleting content starts here
function delContent(updateVal) {
  let updatedTitle = document
    .getElementsByClassName("column_right_btn")
    [updateVal].getElementsByTagName("h4")[0].textContent;
  let updatedContent = document
    .getElementsByClassName("column_right_body")
    [updateVal].getElementsByTagName("p")[0].textContent;

  document
    .getElementsByClassName("delEdit")
    [updateVal].getElementsByTagName("i")[0].style.display = "none";
  document
    .getElementsByClassName("delEdit")
    [updateVal].getElementsByTagName("i")[1].style.display = "none";
  document
    .getElementsByClassName("column_right_btn")
    [updateVal].getElementsByTagName("h4")[0].style.display = "none";
  document
    .getElementsByClassName("column_right_body")
    [updateVal].getElementsByTagName("p")[0].style.display = "none";
  document
    .getElementsByClassName("saveDiv")
    [updateVal].getElementsByClassName("contBtn")[0].style.display = "none";

  let delCont = {
    id: updateVal,
    title: updatedTitle,
    content: updatedContent,
    action: "remove",
  };
  const del = JSON.stringify(delCont);
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    document.getElementsByClassName("delEdit")[updateVal].style.color =
      "#1A9CFF";
    let responTxt = xhttp.responseText;
    if (this.status == 200) {
      document.getElementsByClassName("delEdit")[updateVal].innerHTML =
        responTxt;
      document
        .getElementsByClassName("delEdit")
        [updateVal].getElementsByTagName("i")[0].style.display = "none";
      document
        .getElementsByClassName("delEdit")
        [updateVal].getElementsByTagName("i")[1].style.display = "none";
      document
        .getElementsByClassName("column_right_btn")
        [updateVal].getElementsByTagName("h4")[0].style.display = "none";
      document
        .getElementsByClassName("column_right_body")
        [updateVal].getElementsByTagName("p")[0].style.display = "none";
      document
        .getElementsByClassName("saveDiv")
        [updateVal].getElementsByClassName("contBtn")[0].style.display = "none";
    } else {
      document.getElementsByClassName("delEdit")[updateVal].innerHTML =
        "Removing...";
    }
  };

  xhttp.open("GET", "./api/contDelete.php?q=" + del, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send();
}
//Deleting content ends here

//recovering content starts here
function recoverContent(updateVal) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    let responTxt = xhttp.responseText;
    if (this.status == 200) {
      document.getElementsByClassName("recoverCont")[0].innerHTML = responTxt;
    } else {
      document.getElementsByClassName("recoverCont")[0].innerHTML =
        "Recovering...";
    }
  };

  xhttp.open("GET", "./api/recoverContent.php", true);
  xhttp.send();
}
//recovering content ends here

function buildContent() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let jData = this.responseText;
    const data = JSON.parse(jData);

    for (let i = 0; i < 1000; i++) {
      let y = (i + 1).toString();
      let id = data[y][y]["id"];
      let content = data[y][y]["cont"];
      let title = data[y][y]["title"];
      let remark = data[y][y]["remark"];

      document
        .getElementsByClassName("column_right")[0]
        .appendChild(document.createElement("div"));
      document
        .getElementsByClassName("column_right")[0]
        .getElementsByTagName("div")[4 * i + 1].className = "delEdit";
      document
        .getElementsByClassName("delEdit")
        [i].appendChild(document.createElement("i"));
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[0].className = "material-icons";
      document.getElementsByClassName("delEdit")[i].style.marginTop = "51px";
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[0].id = i;
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[0].innerHTML = "edit";
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[0].style.padding = "0px 13%";
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[0]
        .addEventListener("click", function () {
          editContent(this.id);
        });

      document
        .getElementsByClassName("column_right")[0]
        .appendChild(document.createElement("div"));
      document
        .getElementsByClassName("column_right")[0]
        .getElementsByTagName("div")[4 * i + 1].className = "delEdit";
      document
        .getElementsByClassName("delEdit")
        [i].appendChild(document.createElement("i"));
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[1].className = "material-icons";
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[1].id = i;
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[1].innerHTML = "delete";
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[1].style.padding = "0px 13%";
      document
        .getElementsByClassName("delEdit")
        [i].getElementsByTagName("i")[1]
        .addEventListener("click", function () {
          delContent(this.id);
        });
      document
        .getElementsByClassName("column_right")[0]
        .appendChild(document.createElement("div"));
      document
        .getElementsByClassName("column_right")[0]
        .getElementsByTagName("div")[4 * i + 2].className = "column_right_btn";
      document
        .getElementsByClassName("column_right_btn")
        [i].appendChild(document.createElement("h4"));
      document
        .getElementsByClassName("column_right")[0]
        .appendChild(document.createElement("div"));
      document
        .getElementsByClassName("column_right")[0]
        .getElementsByTagName("div")[4 * i + 3].className = "column_right_body";
      document
        .getElementsByClassName("column_right_body")
        [i].appendChild(document.createElement("p"));
      document
        .getElementsByClassName("column_right_body")
        [i].getElementsByTagName("p")[0].style.boxShadow =
        "0px -1px 0px 0px #1A9CFF";

      document
        .getElementsByClassName("column_right_body")
        [i].getElementsByTagName("p")[0].style.textAlign = "justify";
      document
        .getElementsByClassName("column_right_body")
        [i].getElementsByTagName("p")[0].style.fontSize = "0.85em";

      document
        .getElementsByClassName("column_right")[0]
        .appendChild(document.createElement("div"));
      document
        .getElementsByClassName("column_right")[0]
        .getElementsByTagName("div")[4 * i + 4].className = "saveDiv";
      document
        .getElementsByClassName("saveDiv")
        [i].appendChild(document.createElement("button"));
      document
        .getElementsByClassName("saveDiv")
        [i].getElementsByTagName("button")[0].className = "contBtn saveBtn";
      document
        .getElementsByClassName("saveDiv")
        [i].getElementsByClassName("contBtn")[0].style.marginLeft = "10%";
      document.getElementsByClassName("saveBtn")[i].innerHTML = "Save";
      document.getElementsByClassName("saveBtn")[i].id = i;
      document
        .getElementsByClassName("saveBtn")
        [i].addEventListener("click", function () {
          updateContent(this.id);
        });

      document
        .getElementsByClassName("column_right_btn")
        [i].getElementsByTagName("h4")[0].innerHTML = title;
      document
        .getElementsByClassName("column_right_body")
        [i].getElementsByTagName("p")[0].innerHTML = content;

      if (remark != "active") {
        document.getElementsByClassName("delEdit")[i].style.display = "none";
        document.getElementsByClassName("column_right_btn")[i].style.display =
          "none";
        document.getElementsByClassName("column_right_body")[i].style.display =
          "none";
      }
    }
  };
  xhttp.open("GET", "./api/caseContent.php");
  xhttp.send();
}
buildContent();
//controlling info content ends here

//controlling rates content starts here
function rateLoader() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let rateData = this.responseText;
    const rData = JSON.parse(rateData);

    for (let j = 0; j < 100000; j++) {
      let y = (j + 1).toString();
      let id = rData[y][y]["id"];
      let user = rData[y][y]["user"];
      let dateR = rData[y][y]["rDate"];
      let starR = Number(rData[y][y]["starRate"]);
      let comment = rData[y][y]["comment"];

      document
        .getElementsByClassName("display_rates")[0]
        .appendChild(document.createElement("div"));
      document
        .getElementsByClassName("display_rates")[0]
        .getElementsByTagName("div")[j].className = "rate_body";

      document
        .getElementsByClassName("rate_body")
        [j].appendChild(document.createElement("span"));
      document
        .getElementsByClassName("rate_body")
        [j].getElementsByTagName("span")[0].className = "user";
      document
        .getElementsByClassName("rate_body")
        [j].getElementsByClassName("user")[0].innerHTML = user;

      document
        .getElementsByClassName("rate_body")
        [j].appendChild(document.createElement("span"));
      document
        .getElementsByClassName("rate_body")
        [j].getElementsByTagName("span")[1].className = "rate_date";
      document
        .getElementsByClassName("rate_body")
        [j].getElementsByClassName("rate_date")[0].innerHTML = dateR;

      document
        .getElementsByClassName("rate_body")
        [j].appendChild(document.createElement("br"));

      for (let i = 0; i < 5; i++) {
        document
          .getElementsByClassName("rate_body")
          [j].appendChild(document.createElement("i"));
        document
          .getElementsByClassName("rate_body")
          [j].getElementsByTagName("i")[i].className = "material-icons";
        document
          .getElementsByClassName("rate_body")
          [j].getElementsByClassName("material-icons")[i].innerHTML =
          "star_rate";
      }

      for (let r = 0; r < starR; r++) {
        document
          .getElementsByClassName("rate_body")
          [j].getElementsByTagName("i")[r].style.color = "orange";
      }

      document
        .getElementsByClassName("rate_body")
        [j].appendChild(document.createElement("p"));
      document
        .getElementsByClassName("rate_body")
        [j].getElementsByTagName("p")[0].className = "comment";
      document
        .getElementsByClassName("rate_body")
        [j].getElementsByClassName("comment")[0].innerHTML = comment;
    }
  };
  xhttp.open("GET", "./api/rateBuild.php");
  xhttp.send();
}
rateLoader();
//controlling rates content ends here

//rating control starts here
function myRate() {
  document.getElementsByClassName("rate_questions")[0].style.display = "block";
  document.getElementById("backRefresh").style.display = "grid";
  document.getElementById("rate_button").style.backgroundColor = "white";
  document.getElementById("rate_button").style.color = "#1A9CFF";
  document.getElementById("rate_button").style.fontWeight = "bold";

  document.getElementsByClassName("give_rate")[0].style.boxShadow =
    "0px 0px 9px -4px #1A9CFF";

  document.getElementsByClassName("tracking")[0].style.display = "none";
  document.getElementById("lang").style.display = "none";
  document.getElementsByClassName("info")[0].style.display = "none";
  document.getElementsByClassName("order")[0].style.display = "none";
}
document.getElementById("rate_button").addEventListener("click", myRate);
//rating control ends here

//Rate giving starts here
let rObj = {
  userName: "User name not mentioned",
  question1: 1,
  question2: 1,
  question3: 1,
  question4: 1,
  comment: "",
};

function giveRate(g, tId) {
  let inx = "";
  const cl = g.parentNode.getElementsByTagName("i")[tId];

  if (cl.className == "material-icons checked") {
    for (let x = Number(tId) + 1; tId <= 5; x++) {
      g.parentNode.getElementsByTagName("i")[x].classList.remove("checked");
      inx = g.parentNode.className;
      rObj[inx] = Number(tId) + 1;
      //alert(rObj["question_1"] + rObj["question_2"]+rObj["question_3"]+rObj["question_4"]);
    }
  }
  for (let y = 0; y <= tId; y++) {
    g.parentNode.getElementsByTagName("i")[y].classList.add("checked");
    inx = g.parentNode.className;
    rObj[inx] = Number(tId) + 1;
  }
  //alert(rObj["question_1"] + rObj["question_2"]+rObj["question_3"]+rObj["question_4"]);
}

function submRate() {
  let username = document.getElementsByClassName("uName")[0].value;
  rObj["userName"] = username;

  let comment = document.getElementsByClassName("rateComment")[0].value;
  rObj["comment"] = comment;

  const rateIn = JSON.stringify(rObj);
  //alert(rateIn);
  //alert(rObj["question1"] + rObj["question2"]+rObj["question3"]+rObj["question4"]);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    document.getElementsByClassName("rateSubmitDiv")[0].style.color = "#1A9CFF";
    let responTxt = xhttp.responseText;
    if (this.status == 200) {
      document.getElementsByClassName("rateSubmitDiv")[0].innerHTML = responTxt;
    } else {
      document.getElementsByClassName("rateSubmitDiv")[0].innerHTML =
        "Saving...";
    }
  };

  xhttp.open("GET", "./api/rateNew.php?q=" + rateIn);
  xhttp.send();
}
//Rating ends here
