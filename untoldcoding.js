var i = 0;
var txt1 =
  "Hi ABI..👋!            <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get deep inside of my mind....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U...💙!                 ><<<And can i have you forever..?                                ><<<This is my promise to you...!              <<<I'm with you for a long term...!!              <<i'm not here to wast your time...🕰️                  <<<I want to spend the rest of my life with you....!!!                                     ><<<<Do you love ME  ❔                       ><<<If Answer is NO: just forget it.               <<<But,           If Answer is YES:text me on instagram...😊                    >I'm waiting for your answer...                          <<And    one more thing don't force yourself...";
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
