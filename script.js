function showContent (contentId) {
    var contents = document.querySelectorAll('.container-left > div');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    var cont = document.getElementById(contentId);
     if(cont) {
        cont.style.display = 'block';
     }
};




