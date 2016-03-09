// Initialize your app
var myApp = new Framework7({});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

$$('a.menu').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

$$('a.sub-menu').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

myApp.onPageInit('map', function (page) {
    //Simple Map
    var myLatlng = new google.maps.LatLng(48.852873, 2.343627);
    var map;
    var mapOptions = {
        zoom: 12,
        center: myLatlng,
        disableDefaultUI: true //Disable UI
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
});

myApp.onPageInit('gallery', function (page) {
    var myPhotoBrowserDark = myApp.photoBrowser({
        photos: [
        'https://dl.dropboxusercontent.com/u/63088055/Arty/img/portfolio.jpg',  //Image
        'https://dl.dropboxusercontent.com/u/63088055/Arty/img/portfolio2.jpg', //Image
        'https://dl.dropboxusercontent.com/u/63088055/Arty/img/portfolio3.jpg', //Image
        'https://dl.dropboxusercontent.com/u/63088055/Arty/img/portfolio4.jpg', //Image
        'https://dl.dropboxusercontent.com/u/63088055/Arty/img/portfolio5.jpg', //Image
        'https://dl.dropboxusercontent.com/u/63088055/Arty/img/portfolio6.jpg', //Image
        'https://dl.dropboxusercontent.com/u/63088055/Arty/img/portfolio7.jpg', //Image
        'https://dl.dropboxusercontent.com/u/63088055/Arty/img/portfolio8.jpg', //Image
    ],
        toolbar: false,
        theme: 'dark',
        loop: true,
        navbarTemplate: '<div class="navbar">' +
            '<div class="navbar-inner">' +
            '<div class="left">' +
            '<a href="#" class="link photo-browser-close-link"><span class="lnr lnr-arrow-left album"></span></a>' +
            '</div>' +
            '<div class="center sliding">' +
            '<span class="photo-browser-current"></span> ' +
            '<span class="photo-browser-of">of</span> ' +
            '<span class="photo-browser-total"></span>' +
            '</div>' +
            '</div>' +
            '</div>'
    });
    $$('.pb-standalone-dark').on('click', function () {
        myPhotoBrowserDark.open();
    });
});


myApp.onPageInit('features', function (page) {
    $('<meta name="description" content="Description placeholder"/>').prependTo('head');
    var path = window.location,
        title = $(document).find('title').text(),
        desc = $('meta[name=description]').attr("content");
    $('a[class*="share-"]').each(function () {
        if ($(this).is('[class*="-facebook"]')) { // FACEBOOK
            $(this).attr('href', 'http://www.facebook.com/sharer/sharer.php?u=' + path).css('backgroundColor', '#3b5998');
        } else if ($(this).is('[class*="-twitter"]')) { // TWITTER
            $(this).attr('href', 'https://twitter.com/intent/tweet?text=' + title + ' - ' + desc + '&url=' + path).css('backgroundColor', '#55acee');
        } else if ($(this).is('[class*="-google"]')) { // GOOGLE
            $(this).attr('href', 'https://plus.google.com/share?url=' + path).css('backgroundColor', '#dd4b39');
        } else if ($(this).is('[class*="-linkedin"]')) { // LINKEDIN
            $(this).attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + path + '&title=' + title + '&summary=' + desc + '&source=' + path).css('backgroundColor', '#0976b4');
        } else if ($(this).is('[class*="-tumblr"]')) { // TUMBLR
            $(this).attr('href', 'http://www.tumblr.com/share/link?url=' + path + '&name=' + title + '&description=' + desc).css('backgroundColor', '#35465c');
        } else if ($(this).is('[class*="-pinterest"]')) { // PINTEREST
            $(this).attr('href', 'http://pinterest.com/pin/create/button/?url=' + path + '&description=' + title + ' - ' + desc + '&media=REPLACE-WITH-IMAGE-URL').css('backgroundColor', '#cc2127');
        } else if ($(this).is('[class*="-email"]')) { // EMAIL
            $(this).attr('href', 'mailto:?subject=' + title + '&body=' + path + ' - ' + desc).css('backgroundColor', '#ffc740');
        }
    }).click(function () {
        if ($(this).hasClass('popout')) {
            var url = this.href,
                w = 575,
                h = 525,
                y = ($(window).width() - w) / 2,
                x = ($(window).height() - h) / 2;
            window.open(url, '_blank', 'toolbar=0,scrollbars=1,resize=1,status=0,width=' + w + ',height=' + h + ',top=' + x + ',left=' + y);
            return false;
        }
    });
});

myApp.onPageInit('article', function (page) {
    var mySwiper2 = myApp.swiper('.swiper-2', {
        pagination: '.swiper-2 .swiper-pagination',
        spaceBetween: 0
    });
    $('<meta name="description" content="Description placeholder"/>').prependTo('head');
    var path = window.location,
        title = $(document).find('title').text(),
        desc = $('meta[name=description]').attr("content");
    $('a[class*="share-"]').each(function () {
        if ($(this).is('[class*="-facebook"]')) { // FACEBOOK
            $(this).attr('href', 'http://www.facebook.com/sharer/sharer.php?u=' + path).css('backgroundColor', '#3b5998');
        } else if ($(this).is('[class*="-twitter"]')) { // TWITTER
            $(this).attr('href', 'https://twitter.com/intent/tweet?text=' + title + ' - ' + desc + '&url=' + path).css('backgroundColor', '#55acee');
        } else if ($(this).is('[class*="-google"]')) { // GOOGLE
            $(this).attr('href', 'https://plus.google.com/share?url=' + path).css('backgroundColor', '#dd4b39');
        } else if ($(this).is('[class*="-linkedin"]')) { // LINKEDIN
            $(this).attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + path + '&title=' + title + '&summary=' + desc + '&source=' + path).css('backgroundColor', '#0976b4');
        } else if ($(this).is('[class*="-tumblr"]')) { // TUMBLR
            $(this).attr('href', 'http://www.tumblr.com/share/link?url=' + path + '&name=' + title + '&description=' + desc).css('backgroundColor', '#35465c');
        } else if ($(this).is('[class*="-pinterest"]')) { // PINTEREST
            $(this).attr('href', 'http://pinterest.com/pin/create/button/?url=' + path + '&description=' + title + ' - ' + desc + '&media=REPLACE-WITH-IMAGE-URL').css('backgroundColor', '#cc2127');
        } else if ($(this).is('[class*="-email"]')) { // EMAIL
            $(this).attr('href', 'mailto:?subject=' + title + '&body=' + path + ' - ' + desc).css('backgroundColor', '#ffc740');
        }
    }).click(function () {
        if ($(this).hasClass('popout')) {
            var url = this.href,
                w = 575,
                h = 525,
                y = ($(window).width() - w) / 2,
                x = ($(window).height() - h) / 2;
            window.open(url, '_blank', 'toolbar=0,scrollbars=1,resize=1,status=0,width=' + w + ',height=' + h + ',top=' + x + ',left=' + y);
            return false;
        }
    });
});

myApp.onPageInit('profile', function (page) {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 2000);
    });
});

myApp.onPageInit('chat', function (page) {
    // Conversation flag
    var conversationStarted = false;
    // Init Messages
    var myMessages = myApp.messages('.messages', {
        autoLayout: true
    });
    // Init Messagebar
    var myMessagebar = myApp.messagebar('.messagebar');
    // Handle message
    $$('.messagebar .link').on('click', function () {
        // Message text
        var messageText = myMessagebar.value().trim();
        // Exit if empy message
        if (messageText.length === 0) return;
        // Empty messagebar
        myMessagebar.clear()
            // Random message type
        var messageType = (['sent', 'received'])[Math.round(Math.random())];
        // Avatar for received message
        var avatar, name;
        if (messageType === 'received') {
            avatar = 'http://lorempixel.com/image_output/people-q-c-100-100-7.jpg';
        }
        // Add message
        myMessages.addMessage({
                // Message text
                text: messageText,
                // Random message type
                type: messageType,
                // Avatar:
                avatar: avatar,
                // Day
                day: !conversationStarted ? 'Today' : false,
                time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
            })
            // Update conversation flag
        conversationStarted = true;
    });
});

myApp.onPageInit('calendar', function (page) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var calendarInline = myApp.calendar({
        container: '#calendar-inline-container',
        value: [new Date()],
        weekHeader: false,
        toolbarTemplate: '<div class="toolbar calendar-custom-toolbar">' +
            '<div class="toolbar-inner">' +
            '<div class="left">' +
            '<a href="#" class="link icon-only"><i class="fa calendar fa-angle-left"></i></a>' +
            '</div>' +
            '<div class="center calendar"></div>' +
            '<div class="right">' +
            '<a href="#" class="link icon-only"><i class="fa calendar fa-angle-right"></i></a>' +
            '</div>' +
            '</div>' +
            '</div>',
        onOpen: function (p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] + ', ' + p.currentYear);
            $$('.calendar-custom-toolbar .left .link').on('click', function () {
                calendarInline.prevMonth();
            });
            $$('.calendar-custom-toolbar .right .link').on('click', function () {
                calendarInline.nextMonth();
            });
        },
        onMonthYearChangeStart: function (p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] + ', ' + p.currentYear);
        }
    });
});

myApp.onPageInit('shop', function (page) {
    var mySwiper4 = myApp.swiper('.swiper-4', {
        pagination: '.swiper-4 .swiper-pagination',
        spaceBetween: 10,
        slidesPerView: 2,
        speed: 600
    });
    var mySwiper5 = myApp.swiper('.swiper-5', {
        pagination: '.swiper-5 .swiper-pagination',
        spaceBetween: 10,
        slidesPerView: 2,
        speed: 600
    });
});
