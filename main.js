
//Function to validate form before submiting them
function validateForm() {
    let name=document.getElementById("name").value;
    let age =document.getElementById("age").value;
    let birthdate =document.getElementById("birthdate").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;

    if (name == "") {
        alert("Please input your name");
        return false;
    }

    if (age < 0 || age =="") {
        alert("Input valid age");
        return false;
    }

    if (birthdate == "") {
        alert("Please input your birthdate");
        return false;
    }

    if (address == "") {
        alert("Please input your address");
        return false;
    }

    if (phoneNumber == "") {
        alert("Please input phone number");
        return false;
    }


    if (email == "" || !email.includes("@")) {
        alert("Please input valid email");
        return false;
    }

    return true;

}

//Functions to show data in the table
function showData() {
    let peopleDataList = JSON.parse(localStorage.getItem("peopleDataList")) || [];
    let html = "";

    peopleDataList.forEach(function (element,index){
        html+=`<tr>`;
        html+=`<td>${element.name}</td>`;
        html+=`<td>${element.age}</td>`;
        html+=`<td>${element.birthdate}</td>`;
        html+=`<td>${element.address}</td>`;
        html+=`<td>${element.phoneNumber}</td>`;
        html+=`<td>${element.email}</td>`;
        html += `
        <td>
            <button onclick="deleteData(${index})" class="btn btn-danger btn-sm">Delete</button>
            <button onclick="updateData(${index})" class="btn btn-warning btn-sm">Edit</button>
        </td>`;
        html+=`</tr>`;
    });

    document.querySelector("#info-table tbody").innerHTML = html;
}


document.onload=showData();

//Add data 
function addData() {
    if(validateForm() == true) {
        let name=document.getElementById("name").value;
        let age =document.getElementById("age").value;
        let birthdate =document.getElementById("birthdate").value;
        let address = document.getElementById("address").value;
        let phoneNumber= document.getElementById("phonenumber").value;
        let email = document.getElementById("email").value;    
        let peopleDataList = JSON.parse(localStorage.getItem("peopleDataList")) || [];


        peopleDataList.push({
            name: name,
            age: age,
            birthdate: birthdate,
            address: address,
            phoneNumber: phoneNumber,
            email: email
        });

        localStorage.setItem("peopleDataList", JSON.stringify(peopleDataList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("birthdate").value = "";
        document.getElementById("address").value = "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("email").value = "";
        
        
    }
}

function deleteData(index){
    let peopleDataList = JSON.parse(localStorage.getItem("peopleDataList")) || [];

    peopleDataList.splice(index, 1);
    localStorage.setItem("peopleDataList", JSON.stringify(peopleDataList));
    showData();

}

function updateData(index) {
    document.getElementById("add-btn").style.display = "none";
    document.getElementById("update-btn").style.display = "block";

    let peopleDataList = JSON.parse(localStorage.getItem("peopleDataList")) || [];


    document.getElementById("name").value = peopleDataList[index].name;
    document.getElementById("age").value = peopleDataList[index].age;
    document.getElementById("birthdate").value = peopleDataList[index].birthdate;
    document.getElementById("address").value = peopleDataList[index].address;
    document.getElementById("phonenumber").value = peopleDataList[index].phoneNumber;
    document.getElementById("email").value = peopleDataList[index].email;

    document.querySelector("#update-btn").onclick = function() {
        if(validateForm() == true) {
            peopleDataList[index].name =document.getElementById("name").value;
            peopleDataList[index].age = document.getElementById("age").value;
            peopleDataList[index].birthdate = document.getElementById("birthdate").value;
            peopleDataList[index].address = document.getElementById("address").value;
            peopleDataList[index].phoneNumber = document.getElementById("phonenumber").value;
            peopleDataList[index].email = document.getElementById("email").value;

            localStorage.setItem("peopleDataList", JSON.stringify(peopleDataList));
            showData();
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("birthdate").value = "";
            document.getElementById("address").value = "";
            document.getElementById("phonenumber").value = "";
            document.getElementById("email").value = "";

            document.getElementById("add-btn").style.display = "block";
            document.getElementById("update-btn").style.display = "none";
        }



    }

}