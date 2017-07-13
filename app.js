var index = 1;

showImage(index);

function showImage(ind){

    var slides = document.getElementsByClassName('slides');

    if(ind > slides.length)
    {
        index = 1;

    }

    if(ind < 1){
        index = slides.length;
    }

    for(var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = 'none';
    }

    slides[index - 1].style.display='block';
}


function incrIndex(){
    index++;
    showImage(index);
}

setInterval(incrIndex , 2000); 


function next()
{
    index++;
    showImage(index);
}

function previous()
{
    index--;
    showImage(index);
}