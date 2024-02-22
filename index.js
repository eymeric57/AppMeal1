let mid1 = "";
let soi1 = "";

let mid2 = "";
let soi2 = "";

let mid3 = "";
let soi3 = "";

let mid4 = "";
let soi4 = "";

let mid5 = "";
let soi5 = "";

let mid6 = "";
let soi6 = "";

let mid7 = "";
let soi7 = "";

////////////////////////Local Storage

function storeMeals() {
  window.localStorage.midi1 = menumidi1.innerHTML;
  window.localStorage.soi1 = menusoir1.innerHTML;

  window.localStorage.midi2 = menumidi2.innerHTML;
  window.localStorage.soi2 = menusoir2.innerHTML;

  window.localStorage.midi3 = menumidi3.innerHTML;
  window.localStorage.soi3 = menusoir3.innerHTML;

  window.localStorage.midi4 = menumidi4.innerHTML;
  window.localStorage.soi4 = menusoir4.innerHTML;

  window.localStorage.midi5 = menumidi5.innerHTML;
  window.localStorage.soi5 = menusoir5.innerHTML;

  window.localStorage.midi6 = menumidi6.innerHTML;
  window.localStorage.soi6 = menusoir6.innerHTML;

  window.localStorage.midi7 = menumidi7.innerHTML;
  window.localStorage.soi7 = menusoir7.innerHTML;
}

function getMeals() {
  menumidi1.innerHTML = window.localStorage.midi1 || "";
  menusoir1.innerHTML = window.localStorage.soi1 || "";

  menumidi2.innerHTML = window.localStorage.midi2 || "";
  menusoir2.innerHTML = window.localStorage.soi2 || "";

  menumidi3.innerHTML = window.localStorage.midi3 || "";
  menusoir3.innerHTML = window.localStorage.soi3 || "";

  menumidi4.innerHTML = window.localStorage.midi4 || "";
  menusoir4.innerHTML = window.localStorage.soi4 || "";

  menumidi5.innerHTML = window.localStorage.midi5 || "";
  menusoir5.innerHTML = window.localStorage.soi5 || "";

  menumidi6.innerHTML = window.localStorage.midi6 || "";
  menusoir6.innerHTML = window.localStorage.soi6 || "";

  menumidi7.innerHTML = window.localStorage.midi7 || "";
  menusoir7.innerHTML = window.localStorage.soi7 || "";
}

getMeals();

let lundiValue = localStorage.getItem("lundi");

let mardiValue = localStorage.getItem("mardi");

let mercrediValue = localStorage.getItem("mercredi");

let jeudiValue = localStorage.getItem("jeudi");

let vendrediValue = localStorage.getItem("vendredi");

let samediValue = localStorage.getItem("samedi");

let dimancheValue = localStorage.getItem("dimanche");

refreshArrow.addEventListener("click", () => {
  if (
    confirm("Êtes-vous sûr de vouloir supprimer les plats de la semaine ?") ==
    true
  ) {
    console.log("yes");
    localStorage.clear();
    location.reload();
  } else {
  }
});

//////////////////////////////////////////////////////////////////////////////

//////////////////////////InnerHTML /////////////////////////////////////////

function update1() {
  menumidi1.innerHTML = `<p> ${mid1} </p>`;
  menusoir1.innerHTML = `<p> ${soi1} </p>`;
}

function update2() {
  menumidi2.innerHTML = `<p> ${mid2} </p>`;
  menusoir2.innerHTML = `<p> ${soi2} </p>`;
}

function update3() {
  menumidi3.innerHTML = `<p> ${mid3} </p>`;
  menusoir3.innerHTML = `<p> ${soi3} </p>`;
}

function update4() {
  menumidi4.innerHTML = `<p> ${mid4} </p>`;
  menusoir4.innerHTML = `<p> ${soi4} </p>`;
}

function update5() {
  menumidi5.innerHTML = `<p> ${mid5} </p>`;
  menusoir5.innerHTML = `<p> ${soi5} </p>`;
}

function update6() {
  menumidi6.innerHTML = `<p> ${mid6} </p>`;
  menusoir6.innerHTML = `<p> ${soi6} </p>`;
}

function update7() {
  menumidi7.innerHTML = `<p> ${mid7} </p>`;
  menusoir7.innerHTML = `<p> ${soi7} </p>`;
}

Midi.addEventListener("input", (e) => {
  mid1 = e.target.value;
  mid2 = e.target.value;
  mid3 = e.target.value;
  mid4 = e.target.value;
  mid5 = e.target.value;
  mid6 = e.target.value;
  mid7 = e.target.value;
  storeList();
});

Soir.addEventListener("input", (e) => {
  soi1 = e.target.value;
  soi2 = e.target.value;
  soi3 = e.target.value;
  soi4 = e.target.value;
  soi5 = e.target.value;
  soi6 = e.target.value;
  soi7 = e.target.value;
  storeList();
});
//////////////////////////////////////////////////////////

///////////////////////////////////CheckBox //////////////////////////

function checkd1() {
  if (d1.checked) {
    d2.checked = false;
    d3.checked = false;
    d4.checked = false;
    d5.checked = false;
    d6.checked = false;
    d7.checked = false;
  }
}
function checkd2() {
  if (d2.checked) {
    d1.checked = false;
    d3.checked = false;
    d4.checked = false;
    d5.checked = false;
    d6.checked = false;
    d7.checked = false;
  }
}
function checkd3() {
  if (d3.checked) {
    d1.checked = false;
    d2.checked = false;
    d4.checked = false;
    d5.checked = false;
    d6.checked = false;
    d7.checked = false;
  }
}
function checkd4() {
  if (d4.checked) {
    d1.checked = false;
    d2.checked = false;
    d3.checked = false;
    d5.checked = false;
    d6.checked = false;
    d7.checked = false;
  }
}
function checkd5() {
  if (d5.checked) {
    d1.checked = false;
    d2.checked = false;
    d3.checked = false;
    d4.checked = false;
    d6.checked = false;
    d7.checked = false;
  }
}
function checkd6() {
  if (d6.checked) {
    d1.checked = false;
    d2.checked = false;
    d3.checked = false;
    d4.checked = false;
    d5.checked = false;
    d7.checked = false;
  }
}
function checkd7() {
  if (d7.checked) {
    d1.checked = false;
    d2.checked = false;
    d3.checked = false;
    d4.checked = false;
    d5.checked = false;
    d6.checked = false;
  }
}

d1.addEventListener("change", checkd1);
checkd1();
d2.addEventListener("change", checkd2);
checkd2();
d3.addEventListener("change", checkd3);
checkd3();
d4.addEventListener("change", checkd4);
checkd4();
d5.addEventListener("change", checkd5);
checkd5();
d6.addEventListener("change", checkd6);
checkd6();
d7.addEventListener("change", checkd7);
checkd7();

/////////////////////////////////////

///////////////////////////EventListener routine//////////////////////////////////

submit.addEventListener("click", () => {
  if (d1.checked) {
    update1();
    Midi.value = "";
    Soir.value = "";
    storeMeals();
    d1.checked = false;
    d2.checked = true;
    localStorage.setItem("lundi", "ok");
  } else if (d2.checked) {
    update2();
    Midi.value = "";
    Soir.value = "";
    storeMeals();
    d2.checked = false;
    d3.checked = true;
    localStorage.setItem("mardi", "ok");
  } else if (d3.checked) {
    update3();
    Midi.value = "";
    Soir.value = "";
    storeMeals();

    d3.checked = false;
    d4.checked = true;
    localStorage.setItem("mercredi", "ok");
  } else if (d4.checked) {
    update4();
    Midi.value = "";
    Soir.value = "";
    storeMeals();
    d4.checked = false;
    d5.checked = true;
    localStorage.setItem("jeudi", "ok");
  } else if (d5.checked) {
    update5();
    Midi.value = "";
    Soir.value = "";
    storeMeals();
    d5.checked = false;
    d6.checked = true;
    localStorage.setItem("vendredi", "ok");
  } else if (d6.checked) {
    update6();
    Midi.value = "";
    Soir.value = "";
    storeMeals();

    d6.checked = false;
    d7.checked = true;
    localStorage.setItem("samedi", "ok");
  } else if (d7.checked && !isExecuted7) {
    update7();
    Midi.value = "";
    Soir.value = "";
    storeMeals();
    localStorage.setItem("dimanche", "ok");
    submit.disabled = true;
  }
});

///////////////////////////////////////////////////////////

///////////////////////////////////////////Scroll///////////////////////////

menu.addEventListener("click", () => {
  FirstPage.style.display = "block";
  SecondPage.style.display = "none";
  SectionBottom.style.display = "none";
});

creation.addEventListener("click", () => {
  FirstPage.style.display = "none";
  SecondPage.style.display = "block";
  SectionBottom.style.display = "none";
});

liste.addEventListener("click", () => {
  FirstPage.style.display = "none";
  SecondPage.style.display = "none";
  SectionBottom.style.display = "block";
});
///////////////////////////////////////////

//////////////////////////////// Change Day////////////////////////////////////////
b1.addEventListener("click", (e) => {
  card2.style.display = "none";
  card3.style.display = "none";
  card4.style.display = "none";
  card5.style.display = "none";
  card6.style.display = "none";
  card7.style.display = "none";
  card0.style.display = "block";
  b1.style.background = " #B2B206 ";
  b2.style.background = "white";
  b4.style.background = "white";
  b5.style.background = "white";
  b6.style.background = "white";
  b7.style.background = "white";
});
b2.addEventListener("click", (e) => {
  card0.style.display = "none";
  card3.style.display = "none";
  card4.style.display = "none";
  card5.style.display = "none";
  card6.style.display = "none";
  card7.style.display = "none";
  card2.style.display = "block";
  b1.style.background = "white";
  b2.style.background = "#B2B206 ";
  b3.style.background = "white";
  b4.style.background = "white";
  b5.style.background = "white";
  b6.style.background = "white";
  b7.style.background = "white";
});
b3.addEventListener("click", (e) => {
  card0.style.display = "none";
  card2.style.display = "none";
  card4.style.display = "none";
  card5.style.display = "none";
  card6.style.display = "none";
  card7.style.display = "none";
  card3.style.display = "block";
  b1.style.background = "white";
  b2.style.background = "white";
  b3.style.background = "#B2B206 ";
  b4.style.background = "white";
  b5.style.background = "white";
  b6.style.background = "white";
  b7.style.background = "white";
});
b4.addEventListener("click", (e) => {
  card0.style.display = "none";
  card2.style.display = "none";
  card3.style.display = "none";
  card5.style.display = "none";
  card6.style.display = "none";
  card7.style.display = "none";
  card4.style.display = "block";
  b1.style.background = "white";
  b2.style.background = "white";
  b3.style.background = "white";
  b4.style.background = "#B2B206 ";
  b5.style.background = "white";
  b6.style.background = "white";
  b7.style.background = "white";
});
b5.addEventListener("click", (e) => {
  card0.style.display = "none";
  card2.style.display = "none";
  card3.style.display = "none";
  card4.style.display = "none";
  card6.style.display = "none";
  card7.style.display = "none";
  card5.style.display = "block";
  b1.style.background = "white";
  b2.style.background = "white";
  b3.style.background = "white";
  b4.style.background = "white";
  b5.style.background = "#B2B206 ";
  b6.style.background = "white";
  b7.style.background = "white";
});
b6.addEventListener("click", (e) => {
  card0.style.display = "none";
  card2.style.display = "none";
  card3.style.display = "none";
  card4.style.display = "none";
  card5.style.display = "none";
  card7.style.display = "none";
  card6.style.display = "block";
  b1.style.background = "white";
  b2.style.background = "white";
  b3.style.background = "white";
  b4.style.background = "white";
  b5.style.background = "white";
  b6.style.background = "#B2B206 ";
  b7.style.background = "white";
});
b7.addEventListener("click", (e) => {
  card0.style.display = "none";
  card2.style.display = "none";
  card3.style.display = "none";
  card4.style.display = "none";
  card5.style.display = "none";
  card6.style.display = "none";
  card7.style.display = "block";
  b1.style.background = "white";
  b2.style.background = "white";
  b3.style.background = "white";
  b4.style.background = "white";
  b5.style.background = "white";
  b6.style.background = "white";
  b7.style.background = "#B2B206 ";
});

//////////////////////////////////////////////List //////////////////////////////////////////

function storeList() {
  window.localStorage.ListLiF = ListLiF.innerHTML;
  window.localStorage.ListLiS = ListLiS.innerHTML;
  window.localStorage.ListLiA = ListLiA.innerHTML;
}

function getList() {
  ListLiF.innerHTML = window.localStorage.ListLiF || "";
  ListLiS.innerHTML = window.localStorage.ListLiS || "";
  ListLiA.innerHTML = window.localStorage.ListLiA || "";
}

getList();

////////////////* function checkbox List */////////////////////////////

function checkLi1() {
  if (cheli1.checked) {
    cheli2.checked = false;
    cheli3.checked = false;
  }
}
function checkLi2() {
  if (cheli2.checked) {
    cheli1.checked = false;
    cheli3.checked = false;
  }
}
function checkLi3() {
  if (cheli3.checked) {
    cheli1.checked = false;
    cheli2.checked = false;
  }
}

cheli1.addEventListener("change", checkLi1);
checkLi1();
cheli2.addEventListener("change", checkLi2);
checkLi2();
cheli3.addEventListener("change", checkLi3);
checkLi3();

inputList.addEventListener("input", (e) => {
  List = e.target.value;
});

addList.addEventListener("click", () => {
  if (cheli1.checked) {
    ListLiF.innerHTML += `<li class="Hoverable"> ${List}</li>`;
    inputList.value = "";
    inputList.focus();
    storeList();
  } else if (cheli2.checked) {
    ListLiS.innerHTML += `<li class="Hoverable"> ${List}</li>`;
    localStorage.getItem("l2");
    inputList.value = "";
    inputList.focus();
    storeList();
  } else if (cheli3.checked) {
    ListLiA.innerHTML += `<li class="Hoverable"> ${List}</li>`;
    localStorage.getItem("l3");
    inputList.value = "";
    inputList.focus();
    storeList();
  } else {
    alert("cocher une case");
  }
});

////////////////////////* Delete List item */////////////////////

ListLiF.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    storeList();
  } else {
    e.target.classList.add("checked");
  }
});

ListLiS.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    storeList();
  } else {
    e.target.classList.add("checked");
  }
});

ListLiA.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    storeList();
  } else {
    e.target.classList.add("checked");
  }
});
