$(() => {
    
    $("[data-toggle='tooltip']").tooltip();
    
    $("[data-toggle='popover']").popover();
    
    $("iframe").addClass("ifra");
    $(".vactext").addClass("items");
    
    $("#pop").css({
        "font-family": "Papyrus",
        "background-color": "lightskyblue",
        "color": "rgb(1, 85, 124)"
    });
    //----- doctors ------//
    
    $("#bellpage").addClass("docpage");
    $("#griffispage").addClass("docpage");
    $("#knightlypage").addClass("docpage");
    $("#harperpage").addClass("docpage");
    
    //-------  boarding validation --------//
    
    let $textInput = $("#ownername");
    let $ownphone = $("#ownerphone");
    let $emailInput = $("#owneremail");
    let $boInfo = $("#boardinfo");
    let $day = $("#dayrequest");
    let $pet = $("#petname");
    let $animal1 = $("#dog");
    let $animal2 = $("#cat");
    let $animal3 = $("#exotic");
    let $spay1 = $("#yes");
    let $spay2 = $("#no");
    let $reason = $("#reasonboard");
    let $verified = $("#verify");
    
    $boInfo.hide();
    $verified.hide();

    $("#submit2").on("click", function(e) {
        e.preventDefault();
        let validated = true;
        if ($('.please') != undefined){$('.please').hide()}
        for(let i = 0; i < 10; i++){
            if($($('input')[i]).val().length < 2){
                $("<div class='row'><div class='h4 col-12 text-center please' style='color: red'>Please complete form!</div></div>").insertAfter('#submit2');
                validated = false;
                break;
            }
        }
        if (validated){
            if ($($('input')[10])[0].checked == false){
                $("<div class='row'><div class='h3 col-12 text-center please' style='color: red'>Please accept terms!</div></div>").insertAfter('#submit2');
            } else {
                $('.please').hide();
                $("#boardform").hide();
                $verified.show();
                
                let formText = $textInput.val().toUpperCase();
                let phone = $ownphone.val();
                let emailText = $emailInput.val();
                let petsname = $pet.val().toUpperCase();
                let date = $day.val();
                let dog = $animal1.val();
                let cat = $animal2.val();
                let exotic = $animal3.val();
                let yes = $spay1.val();
                let no = $spay2.val();
                let visit = $reason.val();
        

                $("li:last").after("<li class='listinfo'>" + formText + "</li>").insertAfter("li:last");
                $("li:last").after("<li class='listinfo'>" + "number to reach you : " + phone + "</li>").insertAfter("li:last");
                $("li:last").after("<li class='listinfo'>" + "email address : " + emailText + "</li>").insertAfter("li:last");
                $("li:last").after("<li class='listinfo'>" + "pets name : " + petsname + "</li>").insertAfter("li:last");
                $("li:last").after("<li class='listinfo'>" + "boarding date requested : " + date + "</li>").insertAfter("li:last");
                if ($($("input")[5])[0].checked == true) {
                    $("li:last").after("<li class='listinfo'>" + "pet type : " + dog + "</li>").insertAfter("li:last");
                }else if ($($("input")[6])[0].checked == true) {
                    $("li:last").after("<li class='listinfo'>" + "pet type : " + cat + "</li>").insertAfter("li:last");
                }else if ($($("input")[7])[0].checked == true) {
                    $("li:last").after("<li class='listinfo'>" + "pet type : " + exotic + "</li>").insertAfter("li:last");
                }
                if ($($("input")[8])[0].checked == true) {
                    $("li:last").after("<li class='listinfo'>" + "spayed or neutered : " + yes + "</li>").insertAfter("li:last");
                }else if ($($("input")[9])[0].checked == true) {
                    $("li:last").after("<li class='listinfo'>" + "spayed or neutered : " + no + "</li>").insertAfter("li:last");
                }
                $("li:last").after("<li class='listinfo'>" + "reason for boarding : " + visit + "</li>").insertAfter("li:last");
            }
            
        }
        $("#noverify").on("click", function(e) {
        e.preventDefault();
        $verified.hide();
        $(".listinfo").hide();
        $("#boardform").show();
    });
    });
    
    $("#yesverify").on("click", function(e) {
        e.preventDefault();
        $("<div id='bluerib' class='row'><div class='h1 col-12 mt-3 text-center thank'>Your Reservation is being proccessed!!</div></div>").insertAfter('#verify');
        $("<div class='row'><div class='h1 col-12 mt-3 text-center blue'>Thank you for choosing Blue Ribbon Animal Care !!</div></div>").insertAfter("#bluerib");
        $verified.hide();
    });
    
    
    // ------- news letter validation ---------- //
    
    $("#subscribe").on("click", function(e) {
        e.preventDefault();
        let validated = true;
        if ($('.please') != undefined){$('.please').hide()}
        for(let i = 0; i < 5; i++){
            if($($('input')[i]).val().length < 2){
                $("<div class='row'><div class='h3 col-12 text-center please' style='color: red'>Please complete form!</div></div>").insertAfter('#topnav');
                validated = false;
                break;
            }
        }
        if (validated){
            if ($($('input')[6])[0].checked == false){
                $("<div class='row'><div class='h3 col-12 text-center please' style='color: red'>Please accept terms!</div></div>").insertAfter('#topnav');
            } else {
                $('.please').hide();
                $('.jumbotron').hide();
                $("<div class='row'><div class='h1 col-12 text-center'>Your order is being processed..THANK YOU! <br>for your subscription</div></div>").insertAfter('#topnav');
            }
            
        }
    });
    // ---------- pinterest -----------//
    
    $("#submit1").on("click", function(e) {
        e.preventDefault();
        let validated = true;
        if ($('.please') != undefined){$('.please').hide()}
        for(let i = 0; i < 3; i++){
            if($($('input')[i]).val().length < 2){
                $("<div class='row'><div class='h4 col-12 text-center please' style='color: red'>Please complete form!</div></div>").insertAfter('#pintop');
                validated = false;
                break;
            }
        }
        if (validated){
            if ($($('input')[3])[0].checked == false){
                $("<div class='row'><div class='h3 col-12 text-center please' style='color: red'>Please accept terms!</div></div>").insertAfter('#pintop');
            } else {
                $('.please').hide();
                $('.jumbotron').hide();
                $("<div id='browse' class='row'><div class='h1 col-12 mt-3 text-center info1'>You can now browse our Site!!</div></div>").insertAfter('#pintop');
                $("<div class='container'><div class='row jumbotron justify-content-center mt-5'><label class='text-warning h5' for='input1'>Choose A Topic :</label><input id='input1' type='text' placeholder='type subject here' size='50'></div></div>").insertAfter("#browse");
            }
            
        }
    });
    
    // ---------- facbook validation ---------- //
    
    $("#submitface").on("click", function(e) {
        e.preventDefault();
        let validated = true;
        if ($('.please') != undefined){$('.please').hide()}
        for(let i = 0; i < 3; i++){
            if($($('input')[i]).val().length < 2){
                $("<div class='row'><div class='h4 col-12 text-center please' style='color: red'>Please add your information!</div></div>").insertAfter('.jumbotron');
                validated = false;
                break;
            }
        }
        if (validated){
            if ($($('input')[3])[0].checked == false){
                $("<div class='row'><div class='h3 col-12 text-center please' style='color: red'>Please save password!</div></div>").insertAfter('.jumbotron');
            } else {
                $('.please').hide();
                $("form").hide();
                $("<div id='mail' class='row'><div class='h1 col-12 mt-3 text-center face'>You have Mail !! <img class='mb-2' src='assets/images/capstone-pics/mail-pic.png'></div></div>").insertAfter('.jumbotron');
                $("<div id='friend' class='row'><div class='col-12 mt-5 text-center friend'>You have '0' friend request's : <span style='color: red'>Nobody Likes You !!</span></div></div>").insertAfter("#mail");
                $("<div id='mail2' class='row'><div class='col-12 mt-3 text-center text-warning'>So your mail is most likely SPAM !</div></div>").insertAfter("#friend");
                
            }
            
        }
    });
    
    // adoption javascript //
    
    let a = 0;
    $("#chipbut").on("click", function() {
        if(a===0){
            a++   
            $("<div id='chip' class='adoptinfo mt-2'>Chip is a 8 month old Brittany Spaniel mix. He was third born in a litter of five. He has had all his shots up to date and is ready for immediate placement with a loving family. He is shy but a cuddler..</div>").insertAfter("#chipbut");
        }else if(a=1){
            a--
            $('#chip').remove()
        }
    });
    
    let b = 0;
    $("#bustbut").on("click", function() {
        if(b===0){
            b++
            $("<div id='bust' class='adoptinfo mt-2'>Buster is a rescue that has had an injury to his eye. He is approx. 4 months old and is very playful. He gets along with other animals including cats. He has had all shots up to date and is ready for immediate placement.</div>").insertAfter("#bustbut"); 
        }else if(b=1){
            b--
            $("#bust").remove();
        }
    });
    
    let c = 0;
    $("#shaybut").on("click", function() {
        if(c===0){
            c++
            $("<div id='shay' class='adoptinfo mt-2'>Shay is a one year old golden lab. She loves to run so needs a large yard for playing. She loves kids and other animals and is the perfect fit for a family with children. She is up to date with immunization and ready to come home with that special family..</div>").insertAfter("#shaybut");
        }else if(c=1){
            c--
            $("#shay").remove();
        }
    });
    
    let d = 0;
    $("#tabbut").on("click", function() {
        if(d===0){
            d++
            $("<div id='tabby' class='adoptinfo mt-2'>Tabby is a 1-2 year old tabby mix. she was found wandering the Traverse heights nieghborhood and was very friendly to people. She is perfect for a multi-animal home she loves to sleep and be cuddled. She is up to date on all her shots and ready to be adopted..</div>").insertAfter("#tabbut"); 
        }else if(d=1){
            d--
            $("#tabby").remove();
        }
    });
    
    let e = 0;
    $("#gingbut").on("click", function() {
        if(e===0){
            e++
            $("<div id='ginger' class='adoptinfo mt-2'>Ginger is mixed breed cat about 3 years old. She was pregnant when she came to us and all her kittens were adopted out when they were old enough. She is now looking for that special someone to share her life with. She is very calm and would be puurfect!! for an older couple to have.</div>").insertAfter("#gingbut");
        }else if(e=1){
            e--
            $("#ginger").remove();
        }
    });
    
    let f = 0;
    $("#tombut").on("click", function() {
        if(f===0){
            f++
            $("<div id='tom' class='adoptinfo mt-2 mb-4'>Tom is a four year old mixed cat who loves to hunt. He would definatly cure your home of any rodent problems you might have. He enjoys laying in the sun and relaxing. He is friendly with other animals and would be a great addition to any home..</div>").insertAfter("#tombut");
        }else if(f=1){
            f--
            $("#tom").remove();
        } 
    });
    
    
});