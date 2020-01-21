// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topics) {
    const tab =  document.createElement('div');
    console.log(tab);
    const tabContainer = document.querySelector(".topics");
    console.log(tab);

    tabContainer.append(tab);

    tabContainer.classList,add("topics");
    tab.classList.add("tabs");

    tab.textContent = topics;

    return Tab;

}


const tabs = document.querySelector(".tabs");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
      console.log(response);
    const topicsArray = response.data.topics;

    topicsArray.forEach((topic) => {
        const newTab = createTab(topics);
        tabs.append(newTab);
    });
})
    .catch(error => {
        console.log(error);
});
