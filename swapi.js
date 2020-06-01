window.onload=function(){
    //reference to HTML elements
    let button = document.querySelector('#button');
    let btn = this.document.querySelector('#btn');
    let name = document.querySelector('#name');
    let height = document.querySelector('#height');
    let mass = document.querySelector('#mass');
    let birthyear = document.querySelector('#birthyear');
    
    //Global variables
    var x = document.getElementById("list");
    var  characters = [];
    var favorite = [];
    button.addEventListener('click', getData);
    btn.addEventListener('click',addFavorite);
    show.addEventListener('click',showFavorites);
   
   
   //Functions
    function getData()
    {
        x.style.display = "none";
        name.textContent = 'loading...';
      let myRandomnumber = Math.floor((Math.random() * 83 ) + 1 );
      
    
      
        axios.get('https://swapi.dev/api/people/'+myRandomnumber+'/').then(response => {
         
            updateInfo(response.data)
     })
    }
    function showFavorites()
    {
      
       if(x.style.display === "none")
       {
           x.style.display = "block";
       } else 
       {
           x.style.display = "none";
       }
        name.textContent = ''
        mass.textContent = '';
        height.textContent = '';
        birthyear.textContent = '';
       
            for(var i = 0; i < favorite.length; i++)
            {
                
                var myList = document.createElement("li");
                myList.innerHTML = 'char' + favorite[i];
                document.getElementById('list').append(myList);
                favorite.splice(i,1);
            }
           /* var myList = document.createElement("li");
            myList.innerHTML = 'ch ' + favorite[0];
           
        */
        
        
    }

    function addFavorite()
    {
       for(var i = 0; i < characters.length; i++)
       {
           favorite.push(characters[i]);
           characters.splice(i,1)
           
           i++;
        }
        console.log(favorite)    
    } 
    
   
    function updateInfo(data)
    {
        name.textContent = data.name;
        height.textContent = 'Height: ' + data.height  + 'CM';
        mass.textContent = 'Mass: '      + data.mass + ' Kilograms';
        birthyear.textContent = 'Birthyear: ' + data.birth_year;
        var person = [data.name,data.height,data.mass,data.birth_year];
        var dataToPost = JSON.stringify(person);
        //console.log(dataToPost);
        characters.push(dataToPost);
       
    }
   }
