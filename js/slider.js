let i=0 ;
    
    $('.slide').click(function(){ //Para que al hacer Click sobre una imagen del slider la active 
       $('.active').addClass('nonActive').find('span').empty()
        $(this).removeClass('nonActive').addClass('active')
        i= $(this).index()
    })
    
    setItner = setInterval(go,4000); //ejecutar el código según el valor cada cierto tiempo
    
    function go(){
       $('.active').addClass('nonActive').find('span').empty()
        $($('.slide')[i%6]).removeClass('nonActive').addClass('active')
        i++;
    }