
window.onload = function what(){

    
    let quote = ["Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.<br><p>Harriet Tubman</p>",
                "Yes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.<br><p> Oscar Wilde</p>",
                "A dream you dream alone is only a dream. A dream you dream together is reality.<br><p>John Lennon</p>",
                "Man, alone, has the power to transform his thoughts into physical reality; man, alone, can dream and make his dreams come true.<br><p>Napoleon Hill</p>",
                "When you stop having dreams and ideals -- well, you might as well stop altogether.<br> <p>Marian Anderson</p>",
                "Dreams are today's answers to tomorrow's questions.<br><p>Edgar Cayce</p>"]

    let random = Math.round(Math.random() * ((quote.length-1) - 0) + 0);
    document.getElementById('random-quote').innerHTML = `"${quote[random]}`;


    let dreamName;
    let startGame = document.getElementById("start-btn");
    startGame.addEventListener('click', function(){
        dreamName = document.getElementById("type-input").value;
        document.getElementById("name-place").innerHTML= `<h2>${dreamName}</h2>`;
        
        
        draw();
    })

    
    //gambar track
  
    let cvs = document.getElementById("track-line");
    let ctx = cvs.getContext('2d');
    
    let balokKiri = new Image();
    let balokKanan = new Image();
    let bgraound = new Image();
    let kursor = new Image();
    balokKiri.src = "img/trackKiri.png"
    balokKanan.src = "img/trackKiri.png"
    bgraound.src = "img/bg.png"
    kursor.src = "img/kursor5.png"


    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove',function(event){
       mouseX = event.clientX - cvs.offsetLeft;
       mouseY = event.clientY - cvs.offsetTop;
    })

    console.log(mouseX,mouseY);
    
        
    let tracks = [];
    tracks[0] = {
        x:0,
        y:0
    }

   function draw() {
        ctx.drawImage(bgraound,0,0);
        // ctx.drawImage(kursor,kursorX,kursorY);
        
       for(let i = 0; i < tracks.length; i++){
            ctx.drawImage(balokKiri,tracks[i].x+100,tracks[i].y);
            ctx.drawImage(balokKanan,tracks[i].x,tracks[i].y);
            tracks[i].y++;

            
            if(tracks[i].y == 50){
                tracks.push({
                    x:Math.floor(Math.random()*balokKiri.width)-balokKiri.width,
                    y:0
                }) 

            }

            // let x = tracks[i].x+100;
            // let y = tracks[i].y;
            // if(kursorX + kursor.width >= x && kursorX <= x + balokKanan.width
            //     && (kursorY <= y + balokKiri.height || kursorY + balokKiri.height >= y)) {
                    
            //     }

        }

         window.requestAnimationFrame(draw);
    }

    
    
   
    



}

