function validation(){

    var name = document.getElementById('name').value;

    var valid_name_regexp = /^[A-Za-z]+$/;

    var age = document.getElementById('age').value;

    var valid_age_regexp = /^[0-9]+$/;

    var city = document.getElementById('city').value;

    if(!(name.match(valid_name_regexp)) || !(age.match(valid_age_regexp)) || !(city == "")){

        if(!(name.match(valid_name_regexp))){
            document.getElementById('name_error').style.visibility = "visible";
            document.getElementById('name').style.borderColor = "pink";
        }else{
            document.getElementById('name_error').style.visibility = "hidden";
            document.getElementById('name').style.borderColor = "blue";
        }

        if(!(age.match(valid_age_regexp))){
            document.getElementById('age_error').style.visibility = "visible";
            document.getElementById('age').style.borderColor = "pink";
        }else{
            document.getElementById('age_error').style.visibility = "hidden";
            document.getElementById('age').style.borderColor = "blue";
        }

        if(city == ""){
            document.getElementById('city_error').style.visibility = "visible";
            document.getElementById('city').style.borderColor = "pink";
        }else{
            document.getElementById('city_error').style.visibility = "hidden";
            document.getElementById('city').style.borderColor = "blue";
        }
        return false;
    }

}