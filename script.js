var reasons = [
    {
        image: "klenoty.jpg",
        text: "Protože tentokrát už ty korunovační klenoty konečně pobleje."
    },
    {
        image: "clanek.png",
        text: "Protože mluvčí Ovčáček potřebuje víc času na nalezení Peroutkova článku vlevo dole."
    },
    {
        image: "china.png",
        text: "Protože ještě zbývá trocha národní důstojnosti a slušnosti, kterou může obětovat při pochlebování Číně."
    },
    {
        image: "mynar.jpg",
        text: "Protože jak jinak se kancléř Mynář bez bezpečnostní prověrky dostane k utajovaným informacím?"
    },
    {
        image: "pravda-vitezi.jpg",
        text: "Protože který jiný stát má v čele soudem usvědčeného lháře?"
    },
    {
        image: "putin.jpg",
        text: "Protože Vladimir Putin potřebuje svého člověka v EU a NATO."
    },
    {
        image: "hulka.jpg",
        text: "Protože ještě zbývá pár kamarádů bez státního vyznamenání."
    }
];

function getReasonId() {
    match = window.location.href.match(/reason=(\d+)/);
    n = match ? parseInt(match[1]) : 0;
    n = (n < reasons.length) ? n : 0;
    return n;
}

function setReasonId(n) {
    history.pushState({}, "", "?reason=" + n);
}
function getImageUrl(r) {
    return r.image;
}

function loadCurrentReason() {
    var r = reasons[getReasonId()];
    $("#image").attr("src", getImageUrl(r));
    $("#text").text(r.text);
}

function showNextReason() {
    var i = getReasonId() + 1;
    if (i >= reasons.length) i = 0;
    var r = reasons[i];
    var img = $("#image");
    img.fadeOut( "fast", function() {
        setReasonId(i);
        loadCurrentReason();
        img.fadeIn("fast");
    });
}

function preloadImages() {
    reasons.forEach(function(r) {
        r.img = new Image();
        r.img.src = getImageUrl(r);
    });
}

$(document).ready(function() {
    preloadImages();
    $( "#button" ).click(showNextReason);
    $(window).on("popstate", loadCurrentReason);
    loadCurrentReason();
});
