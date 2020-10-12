function signUp()
{
    var fname, lname, email, phoneNo, comapanyCode, employerOrNot;

    fname = document.getElementById("fName");
    lname = document.getElementById("lName");
    email = document.getElementById("email");
    phoneNo = document.getElementById("phoneNo");
    comapanyCode = document.getElementById("companyCode");

    //to check if employer or not

    var z = document.getElementById("employer");

    if(z.checked)
    {
        employerOrNot == "yes";
    }
    else{
        employerOrNot == "no";
    }

    var newObject = new obj(fname, lname, email, phoneNo, comapanyCode, employerOrNot);

    var jsonNewObject = JSON.stringify(newObject);

    var jsonFile;

    fetch("http://127.0.0.1:5500/employeeLoginDetail.json")
    .then(res => res.json())
    .then(jsonFile => jsonFile )

    jsonFile.employers.push(jsonNewObject);
}