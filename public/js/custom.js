// close menu on click
$(function () {
    $('.navbar-collapse ul li:not(.dropdown) a').click(function () {
        $('.navbar-toggle:visible').click();
    });
});

// contact modal
$(function () {
    var $contactModal = $('#contact-modal');
    var $sendMessage = $('#send-message');
    var $sendingMessage = $('#sending-message');

    $sendMessage.on('click', function () {

        // show loading
        $sendMessage.hide();
        $sendingMessage.removeClass('hidden');

        // "message sent"
        setTimeout(function () {
            $contactModal.modal('hide');
            $contactModal.find('form')[0].reset();
        }, 2500);
    });

    // show again send button
    $contactModal.on('hidden.bs.modal', function () {
        $sendMessage.show();
        $sendingMessage.addClass('hidden');
    });
});
