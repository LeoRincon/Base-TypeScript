"use strict";
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["mid"] = 1] = "mid";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.mid;
    console.log(currentAudio);
    console.log(AudioLevel);
    var AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["min"] = 1] = "min";
        AudioLevel2[AudioLevel2["mid"] = 2] = "mid";
        AudioLevel2[AudioLevel2["max"] = 10] = "max";
    })(AudioLevel2 || (AudioLevel2 = {}));
})();
//# sourceMappingURL=enums.js.map