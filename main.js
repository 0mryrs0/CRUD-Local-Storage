
//Function to validate form before submiting them
function validateForm() {
    let name=document.getElementById("name").value;
    let age =document.getElementById("age").value;
    let birthday =document.getElementById("birthdate").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;

    if (name == "") {
        alert("Please input your");
        return false;
    }

    if (age < 0 || age =="") {
        alert("Input valid age");
        return false;
    }

    if (birthday == "") {
        alert("Please input your birthdate");
        return false;
    }

    if (address == "") {
        alert("Please input your address");
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
        html+=`<td>${element.birthday}</td>`;
        html+=`<td>${element.address}</td>`;
        html+=`<td>${element.email}</td>`;
        html += `
        <td>
            <button onclick="deleteData(${index})" class="btn btn-danger btn-sm">Delete</button>
            <button onclick="updateData(${index})" class="btn btn-warning btn-sm">Update</button>
        </td>`;
        html+=`</tr>`;
    });

    document.querySelector("#info-table tbody").innerHTML = html;
}


document.onload=showData();

//Add data 
function addData() {
    if(validateForm() == true) {
        console.log("you clicked me")
        let name=document.getElementById("name").value;
        let age =document.getElementById("age").value;
        let birthday =document.getElementById("birthdate").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;
        console.log(name)

        
        let peopleDataList = JSON.parse(localStorage.getItem("peopleDataList")) || [];


        peopleDataList.push({
            name: name,
            age: age,
            birthday: birthday,
            address: address,
            email: email
        });

        localStorage.setItem("peopleDataList", JSON.stringify(peopleDataList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("birthdate").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
        
        
    }
}