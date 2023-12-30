function verifyFunc(){
    var date = new Date();
    var year = date.getFullYear();
    var userYear = document.getElementById("txtyear");
    var ans = document.getElementById("ans");

    if (userYear.value.length == 0 || parseFloat(userYear.value) > year){
        window.alert(`[ERROR] Verify the inserted data and try again.`);
    }
    else {
        var userGender = document.getElementsByName('radgender');
        var age = year - parseInt(userYear.value);
        var gender = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'picture');
        if (userGender[0].checked){
            gender = 'male';
            if (age >= 0 && age < 40){
                img.setAttribute('src', 'test/test.jpg');
            }
            if (age >= 40){
                img.setAttribute('src', 'test/test.jpg');
            }
        }
        else if (userGender[1].checked){
            gender = 'female';
            if (age >= 0 && age < 40){
                img.setAttribute('src', 'test/test.jpg');
            }
            if (age >= 40){
                img.setAttribute('src', 'test/test.jpg');
            }
        }

        ans.style.textAlign = 'center';
        ans.innerHTML = `Detected a ${age} years old ${gender}`;
        ans.appendChild(img);
    }
}