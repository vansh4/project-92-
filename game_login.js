function addUser(){
    Player_1name=document.getElementById("P1input").value;
    Player_2name=document.getElementById("P2input").value;
    localStorage.setItem("player1_name",Player_1name);
    localStorage.setItem("player2_name",Player_2name);
    window.location="game_page.html";
}