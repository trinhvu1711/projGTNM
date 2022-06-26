//getting all required elements
const searchwrapper = document.querySelector(".search-input");
const inputBox = searchwrapper.querySelector("input");
const suggBox = searchwrapper.querySelector(".autocom-box");

//if user press any key and release
inputBox.onkeyup = (e) => {
    // console.log(e.target.value);
    let userData = e.target.value; //user enter data
    let emptyArr = [];
    if (userData) {
        emptyArr = suggestion.filter((data) => {
            //filter arr val and char to lower case and 
            // return only those word/sent which are starts user entered word
            return data.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
        });
        emptyArr = emptyArr.map((data) => {
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArr);
        searchwrapper.classList.add("active");
        showSuggestion(emptyArr);
        let allList = suggBox.querySelectorAll("li");
        for(let i=0;i<allList.length;i++){
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchwrapper.classList.remove("active");//hide autocom-box
    }
}
function select(element){
    let selectUserData=element.textContent;
    // console.log(selectUserData);
    inputBox.value= selectUserData;
}
function showSuggestion(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    // if (suggBox) {
        suggBox.innerHTML = listData;
    // }
}