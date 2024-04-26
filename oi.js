var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

document.addEventListener('click', function(event) {
    var popoverElement = document.querySelector('[data-bs-toggle="popover"]');
    var popover = bootstrap.Popover.getInstance(popoverElement);

    if (!popoverElement.contains(event.target)) {
        popover.hide();
    }
});

var button = document.getElementById('button'); // Substitua 'seu-botao' pelo ID do seu botão

button.addEventListener('click', function() {
    var popoverElement = document.querySelector('[data-bs-toggle="popover"]');
    var popover = bootstrap.Popover.getInstance(popoverElement);
    popover.hide();
});

