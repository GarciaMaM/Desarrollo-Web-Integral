window.addEventListener('scroll', function() {
    var image = document.getElementById('movingImage');
    var scrollPosition = window.scrollY;

   
    var movementFactor = 0.1; 

    image.style.transform = 'translateY(' + ((scrollPosition * movementFactor) - 50) + 'vh)';

    // Ocultar la imagen cuando está en la parte superior
    if (scrollPosition <= 0) {
        image.style.opacity = '0';
        image.style.visibility = 'hidden';
    } else {
        image.style.opacity = '1';
        image.style.visibility = 'visible';
    }
});

document.getElementById('movingImage').addEventListener('click', function() {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        
        if (event.key === 'O' || event.key === 'o') {
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Modal functionality
/*document.getElementById('openModalBtn').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();*/

    // video 
    document.getElementById('toggleVideoBtn').addEventListener('click', function() {
        var videoContainer = document.getElementById('videoContainer');
        if (videoContainer.classList.contains('hidden')) {
            videoContainer.classList.remove('hidden');
        } else {
            videoContainer.classList.add('hidden');
        }
    });

    document.querySelector('.btn-close-custom').addEventListener('click', function() {
        var videoContainer = document.getElementById('videoContainer');
        videoContainer.classList.add('hidden');
    });

    document.addEventListener("DOMContentLoaded", function() {
        const darkButton = document.getElementById('dark');
    
      
        function activateDarkButton() {
            darkButton.click();
        }
    
        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'n' || event.key === 'N') {
                activateDarkButton();
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        document.addEventListener('keydown', function(event) {
            
            if (event.key === 't' || event.key === 'T') {
                
                const videoButton = document.getElementById('videobutton');
               
                window.location.href = 'https://www.youtube.com/watch?v=YtJ9uwqY1M4';
            }
        });
    });

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });


