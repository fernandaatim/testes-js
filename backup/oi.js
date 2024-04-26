var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


document.addEventListener('click', function(event) {
    var popoverElement = document.querySelector('[data-bs-toggle="popover"]')
    var popover = bootstrap.Popover.getInstance(popoverElement)
    if (!popoverElement.contains(event.target)) {
        popover.hide()
}
})

document.querySelector('[data-bs-toggle="popover"]').addEventListener('click', function() {
    this.setAttribute('data-bs-content', 'This is the new content of the popover that is displayed when clicked.')
})