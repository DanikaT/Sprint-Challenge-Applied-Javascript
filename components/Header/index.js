// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(date,title, temp) {

    //HTML markup
    const header = document.createElement("div");
    const headerDate = document.createElement("span");
    const headerTitle = document.createElement("h1");
    const headerTemp = document.createElement("span")

    console.log(header);
    console.log(headerDate);
    console.log(headerTitle);
    console.log(headerTemp);

    //Define HTML structure
    header.append(headerDate);
    header.append(headerTitle);
    header.append(headerTemp);

    console.log(header);

    //Add CSS styles using classes
    header.classList.add("header");
    headerDate.classList.add("date");
    headerTitle.classList.add("title");
    headerTemp.classList.add("temp");

    console.log(header.classList);

    //Configure text/img content
    headerDate.textContent = "SMARCH 28, 2019";
    headerTitle.textContent = "Lambda Times";
    headerTemp.textContent = "temp">"98°";

    console.log(headerDate);
    console.log(headerTitle);
    console.log(headerTemp);

    //Add some dynamic functionality 
    header.addEventListener('mouseover', event => {
        header.style.backgroundColor = 'red';
      });

    return Header;

}

console.log(Header);

const headerContainer = document.getElementsByClassName("header-container");
headerContainer.append(Header(headerDate, headerTitle, headerTemp));
