p1name=localStorage.getItem("player1_name");
p2name=localStorage.getItem("player2_name");
p1score=0;
p2score=0;
document.getElementById("player1_name").innerHTML=p1name+" : ";
document.getElementById("player2_name").innerHTML=p2name+" : ";
document.getElementById("player1_score").innerHTML=p1score;
document.getElementById("player2_score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="Question Turn - "+p1name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+p2name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    c1=word.charAt(1);
    l2=Math.floor(word.length/2);
    c2=word.charAt(l2);
    minus=word.length-1;
    c3=word.charAt(minus);
    r1=word.replace(c1,"_");
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");
    qword="<h4 id='word_display'> Q."+r3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=qword+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value = "";
}
qturn="player1";
aturn="player2";
function check(){
    getanswer=document.getElementById("input_check_box").value;
answer=getanswer.toLowerCase();
if(answer==word)
{
    if(aturn=="player1")
    {
        p1score=p1score+1;
        document.getElementById("player1_score").innerHTML=p1score;
    }
    else
    {
        p2score=p2score+1;
        document.getElementById("player2_score").innerHTML=p2score;
    }
}
if(qturn=="player1")
{
      qturn="player2"
      document.getElementById("player_question").innerHTML="question turn  ; "+p2name;
      }
      else
      {
          qturn="player1"
          document.getElementById("player_question").innerHTML="question turn  ; "+p1name;
      }
      if(aturn=="player1")
      {
            aturn="player2"
            document.getElementById("player_answer").innerHTML="answer turn  ; "+p2name;
            }
            else
            {
                aturn="player1"
                document.getElementById("player_answer").innerHTML="answer turn  ; "+p1name;
            }
}