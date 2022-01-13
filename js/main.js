var elCompetitionForm=document.querySelector('.competition__form');
var elCompetitionInput=document.querySelector('.competition__input');
var elCompetitionTime1=document.querySelector('.competition__time--first');
var elCompetitionTime2=document.querySelector('.competition__time--second');
var elCompetitionTime3=document.querySelector('.competition__time--third');
var elCompetitionTime4=document.querySelector('.competition__time--fourth');



var speed_on_foot=3.6;
var speed_bicycle=20.1;
var speed_car=70;
var speed_plane=800;



elCompetitionForm.addEventListener('submit', function(evt){

    evt.preventDefault();


    var acceptInput=Number(elCompetitionInput.value.trim());


    function time(speed){
        var hour = Math.floor(acceptInput / speed);
        var daqiqa = Math.floor(((acceptInput / speed - hour)*60));
        
        return hour + ' soat ' + daqiqa + ' daqiqa';
    }
    
    elCompetitionTime1.textContent=time(speed_on_foot);
    elCompetitionTime2.textContent=time(speed_bicycle);
    elCompetitionTime3.textContent=time(speed_car);
    elCompetitionTime4.textContent=time(speed_plane);


});




