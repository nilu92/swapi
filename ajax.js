$(document).ready(function(){
    var urlBase = "https://swapi.dev/api/people/?"
    var characters = [];
    $('.btn').click(function()
{
    getCharacters();
});

getCharacters = function()
{
    $('.text').text('loading...');
    getCharactersData()
    .done(function(respons)
    {
     $('.text').html('');
     for(var i = 0; i < respons.results.length; i++ )
   {
       var char = respons.results[i].name + ", " + 
       respons.results[i].gender + ", " +
       respons.results[i].hair_color
       $('.text').append('<h4>' + char + '</h4>');
        const{name} = charName.toString();
    
    }
    })
    .fail(function()
    {
        alert("It did not work!");
    });

}
getCharactersData = function()
{
    return $.getJSON(urlBase);
}
});