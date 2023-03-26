// // Examine the document object //

// //console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //console.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.URL);
// console.log(document.body);
// //console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textcontent = 'Hello';
// console.log(document.forms);
// //console.log(document.forms[0]);
// console.log(doucment.links);
// console.log(document.images);

//GET ELEMENT BY ID//
//console.log(document.getElementById('header-title');
var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3> Hello </h3>';
//header.style.borderBottom = 'solid 3px #900';

headerTitle.style.borderBottom = 'solid 3px #000';
headerTitle.style.fontWeight = 'bold';
headerTitle.style.color = "green";


//GET ELEMENT BY CLASS NAME//
//console.log(document.getElementsByClassName(''));