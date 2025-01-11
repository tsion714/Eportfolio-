let isModalOpen = false;
let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
}
else {
    document.body.classList.remove("dark-theme")
}
}



function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
     loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_whp0hme',
        'template_cl2o3tu',
        event.target,
        'OqKevYAWgtX3DotXT'
    ).then(() => { 
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is tempoorarily unavilabe. please contact me directly on tsion714@gmail.com"
        );
    })
}

function toggleModal() {
    if (isModalOpen) {
    isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }

    isModalOpen = true;
    document.body.classList +=  " modal--open";
}