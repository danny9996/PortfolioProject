var image1 = document.getElementById('1');
    var image2 = document.getElementById('2');
    var image3 = document.getElementById('3');  
    
    var count = 1;
    function change(id){
        var x = document.getElementById(id); 
        
        if(count==1){
            x.style.height = '500px';
            x.style.width = '500px';
            count++;
        }
        else if(count==2){
            x.style.height = '900px';
            x.style.width = '900px';
            count++;
        }
        else if(count==3){
            x.style.height = 'fit-content';
            x.style.width = 'fit-content';
            count=0;
        }
        else{
            x.style.height = '300px';
            x.style.width = '300px';
            count=1;
        }
    }

    function left(id, x){
        var temp1 = x - 1;
        var temp = document.getElementById(temp1);
        x = document.getElementById(x);
        if(temp1>50){            
            var newSRC = temp.src;
            temp.src = x.src;
            x.src = newSRC;
        }else{
            console.log(temp, x);            
        }         
    }

    function right(id, x){
        var temp1 = x + 1;
        var temp = document.getElementById(temp1);
        x = document.getElementById(x);
        if(temp1<81){            
            var newSRC = temp.src;
            temp.src = x.src;
            x.src = newSRC;
        }else{
            console.log(temp, x);            
        }         
    }

    function up(id, x){        
        var j = document.getElementById(x);
        var newSRC = j.src;            
        var temp = document.getElementById('51');
        j.src = temp.src;
        temp.src = newSRC;       
    }

    function down(id, x){        
        var j = document.getElementById(x);
        var newSRC = j.src;            
        var temp = document.getElementById('80');
        j.src = temp.src;
        temp.src = newSRC;       
    }