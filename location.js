let display = document.getElementById("userlocation");
let getLocationbtn = document.querySelector(".getLocbtn")
let form_footer = document.querySelector('.form-footer');
let user_email = document.querySelector('#user-email');
let errormsg = document.querySelector('#errormsg');

function getLocation (){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        display.innerHTML = "Geolocation is not supported by this browser"
    }
}

function showPosition(position){

    if(user_email.value != '' && user_email.value.includes('@')){
    //form footer contains the button and we want to add some text before the button
    errormsg.textContent ='';
    form_footer.insertBefore(
        document.createTextNode('Location Fetched') , getLocationbtn
    )
    form_footer.removeChild(getLocationbtn)
    display.innerHTML = "Latitude is: "+ position.coords.latitude + " and the longitude is: "+position.coords.longitude           
    }else{
        errormsg.style.color='red';
        errormsg.textContent = 'Please enter your email to get your location';
    }
}

getLocationbtn.addEventListener('click', (e)=>{
    e.preventDefault();

    getLocation ()
})

