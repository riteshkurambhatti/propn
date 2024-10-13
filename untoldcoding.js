var i = 0;
var txt1 =
  "Hi Bebyaaa.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...! please dont do the mistakes that you done in past and starting phase of our relationship i am giving last chance to you if you do same things again i'll leave you on next page there is surprise for you               << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << You are the only person from standard 6th  whom I love equally with my parents....!                                                             >I Love U <SweetHeart.....! |                  <<<< Give me One chance to Prove my Love ...!   by untoldcoding";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
