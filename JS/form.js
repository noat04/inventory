// $(document).ready(function(){
//     function ktten(){
//         let ten = $("#name").val();
//         if(ten===""){
//             $("#btname").html("Enter your name").css("color","Red");
//             return false;
//         }else{
//             $("#btname").html("Verify correctly").css("color","Green");
//             return true;
//         }
//     }
//     $("#name").blur(ktten);

//     function ktsdt(){
//         let mausdt=/^0[0-9]{9}$/;
//         let dt = $("#phone").val();
//         let kq = mausdt.test(dt);
//         if (!kq) {
//             $("#btphone").html("Invalid phone number").css("color", "Red");
//             return false;
//         } else {
//             $("#btphone").html("Verify correctly").css("color", "Green");
//             return true;
//         }
//     }
//     $("#phone").blur(ktsdt);
// })

// const form = document.querySelector("form");
// const fullname = document.getElementById("fullname");
// const phone = document.getElementById("phone");
// const choose = document.querySelectorAll('input[name="choose"]');

// function sendEmail() {
//     let selectedChoice;
//     choose.forEach((choice) => {
//         if (choice.checked) {
//             selectedChoice = choice.value;
//         }
//     });
//     const bodyMessage = `Name: ${fullname.value}\nPhone: ${phone.value}\nChoice: ${selectedChoice}`;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "toannguyen041214@gmail.com",
//         Password: "2F97CFF6D8D600709E9459928F87B8E41F60",
//         To: "toannguyen041214@gmail.com",
//         From: "toannguyen041214@gmail.com",
//         Subject: "RSVP Confirmation",
//         Body: bodyMessage,
//     })
//         .then((message) => {
//             // console.log(message);
//             alert("message");
//         })
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     sendEmail();
// });

// $(document).ready(function(){
//     // Form validation
//     $('form').on('submit', function(event){
//         event.preventDefault();
//         // Collect form data
//         var formData = {
//             name: $('#fullname').val(),
//             phone: $('#phone').val(),
//             choose: $('input[name="choose"]:checked').val(),
//             message: $('#message').val()
//         };
        
//         // Ajax call to submit form data
//         $.ajax({
//             url: 'https://formsubmit.co/el/jehoyu', // Replace with your form submission URL
//             method: 'POST',
//             data: formData,
//             dataType: 'json',
//             success: function(response) {
//                 alert('Thank you for your response!');
//                 // Clear form fields
//                 $('form')[0].reset();
//             },
//             error: function(response) {
//                 alert('An error occurred. Please try again.');
//             }
//         });
//     });
// });