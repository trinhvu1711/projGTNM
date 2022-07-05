//getting all required elements
const searchwrapper = document.querySelectorAll(".search-input");
// const inputBox = [];
// const suggBox = [];
// console.log(searchwrapper)
// for (let i = 0; i < searchwrapper.length; i++) {
//     inputBox.push(searchwrapper.querySelector("input"));
//     suggBox.push(searchwrapper.querySelector(".autocom-box"));
// }
const inputBox = document.querySelectorAll("input");
const suggBox = document.querySelectorAll(".autocom-box");

//if user press any key and release
for (let i = 0; i < searchwrapper.length; i++) {
    inputBox[i].onkeyup = (e) => {
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
                return data = '<li>' + data + '</li>';
            });
            console.log(emptyArr);
            searchwrapper[i].classList.add("active");
            showSuggestion(emptyArr);
            let allList = suggBox[i].querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                allList[i].setAttribute("onclick", "select(this)");
            }
        } else {
            searchwrapper[i].classList.remove("active"); //hide autocom-box

        }
    }



    function select(element) {
        let selectUserData = element.textContent;
        // console.log(selectUserData);
        inputBox.value = selectUserData;
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
        suggBox[i].innerHTML = listData;
        // }
    }
}