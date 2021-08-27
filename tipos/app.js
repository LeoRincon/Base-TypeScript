"use strict";
(function () {
    (function () {
        var batman = 'Bruce';
        var superman = 'Clark';
        var existe = false;
        var parejaHeroes = [batman, superman];
        var villano = ['Lex Lutor', 5, true];
        var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
        var powerHero;
        (function (powerHero) {
            powerHero[powerHero["aquaman"] = 0] = "aquaman";
            powerHero[powerHero["batman"] = 1] = "batman";
            powerHero[powerHero["flash"] = 5] = "flash";
            powerHero[powerHero["superMan"] = 100] = "superMan";
        })(powerHero || (powerHero = {}));
        var fuerzaFlash = powerHero.flash;
        var fuerzaSuperman = powerHero.superMan;
        var fuerzaBatman = powerHero.batman;
        var fuerzaAcuaman = powerHero.aquaman;
        function activar_batiseñal() {
            return 'activada';
        }
        function pedir_ayuda() {
            console.log('Auxilio!!!');
        }
        var poder = '100';
        var largoDelPoder = poder.length;
        console.log(largoDelPoder);
    })();
})();
//# sourceMappingURL=app.js.map