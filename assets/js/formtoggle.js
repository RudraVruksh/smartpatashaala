$(document).ready(function(){
    $('#formButton').on('click', function(event) {        
        $('#goodleForm').toggle('show');
    });
    $('#formButton').on('click', function(event) {        
        $('#hideButton').toggle('show');
    });
    $('#hideButton').on('click', function(event) {        
        $('#goodleForm').toggle('show');
    });
    $('#hideButton').on('click', function(event) {        
        $('#hideButton').toggle('show');
    });
});