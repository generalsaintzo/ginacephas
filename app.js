/** JavaScript for sidebar functionality*/
function showsidebar(){
    const sidebar=document.querySelector('.side-bar')
    sidebar.style.display='flex'
}
function closesidebar(){
    const sidebar=document.querySelector('.side-bar')
    sidebar.style.display='none'
}


/** EmailJS integration for contact form */
function sendEmail(){
    var params={
        name:document.getElementById("form-name").value,
        email:document.getElementById("form-email").value,
        message:document.getElementById("form-message").value
    };
    const serviceID="service_onkedcb";
    const templateID="template_t51po0d";
    emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("form-name").value="";
            document.getElementById("form-email").value="";
            document.getElementById("form-message").value="";
            console.log(res);
            alert("Your message has been sent successfully!");
        })
        .catch(err=>console.log(err));
}