(() => {
  //ayuda a rabajar con valores que tengan sentido semantico al leerlo.

  enum AudioLevel {
    min, // el valor apunta a su position como si fuera un array
    mid,
    max,
  }

  let currentAudio = AudioLevel.mid;
  console.log(currentAudio);

  console.log(AudioLevel);

  enum AudioLevel2 {
    min = 1,
    mid, // toma el valor accendente del primero es decir 2
    max = 10,
  }
})();
