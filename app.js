(function() {
    var app = angular.module('talk-list', []);

    app.controller("SourceController", function() {
        this.sources = sources;
    });

    var sources = {
        "Øredev Conference": "https://vimeo.com/user4280938",
        "GOTO Conferences": "https://www.youtube.com/channel/UCs_tLP3AiwYKwdUHpltJPuA",
        "Devoxx": "https://www.youtube.com/channel/UCCBVCTuk6uJrN3iFV_3vurg",
        "JavaOne": "https://www.youtube.com/channel/UCdDhYMT2USoLdh4SZIsu_1g",
        "Strange Loop": "https://www.youtube.com/channel/UC_QIfHvN9auy2CoOdSfMWDw",
        "GeeCON": "https://vimeo.com/geecon",
        "Yow!": "https://www.youtube.com/channel/UCAvGvvEemkeX8hurdPXr7hA",
        "JFokus": "https://www.youtube.com/user/javamattias",
        "JavaZone": "https://vimeo.com/javazone"
    };
})();
