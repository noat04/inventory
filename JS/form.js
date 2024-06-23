$(document).ready(function(){
    function ktten(){
        let ten = $("#name").val();
        if(ten===""){
            $("#btname").html("Enter your name").css("color","Red");
            return false;
        }else{
            $("#btname").html("Verify correctly").css("color","Green");
            return true;
        }
    }
    $("#name").blur(ktten);

    function ktsdt(){
        let mausdt=/^0[0-9]{9}$/;
        let dt = $("#phone").val();
        let kq = mausdt.test(dt);
        if (!kq) {
            $("#btphone").html("Invalid phone number").css("color", "Red");
            return false;
        } else {
            $("#btphone").html("SVerify correctly").css("color", "Green");
            return true;
        }
    }
    $("#phone").blur(ktsdt);

    // function ktChon(){
    //     if(!$("#choose1").is(":checked") && !$("#choose2").is(":checked")){
    //         $("#btchon").html("Please choose").css("color", "Red");
    //         return false;
    //     }
    // }
    // $(".btn-success").click(function(){
    //     if(ktten && ktsdt){
    //         if(!$("#choose1").is(":checked") && !$("#choose2").is(":checked")){
    //             $("#btchon").html("Please choose").css("color", "Red");
    //             return false;
    //         }
    //     }
    // })
})