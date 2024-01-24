$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#campo-tarefa').val();
        const novoItem = $(`<li style=display: none class="novo-item">${novaTarefa}</li>`)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#campo-tarefa').val('');
    })
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('tarefa-concluida');
    })
    $(function(){
        $('ul').sortable();
    })
})