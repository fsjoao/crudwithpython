(function(win,doc){
    'use strict';

    
    //check if the user rly wants to delete the data
    if(doc.querySelector('.btnDel')){
        let btnDel = doc.querySelectorAll('.btnDel');
        for(let i=0; i < btnDel.length; i ++){
            btnDel[i].addEventListener('click', function(event){
                if(confirm('You really wish delete this data?')){
                    return true;
                }else{
                    event.preventDefault();
                }
            })
        }
    }
})(window,document);