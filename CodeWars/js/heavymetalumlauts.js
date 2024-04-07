// Задача №75


function heavyMetalUmlauts(boringText) {

  let res = ''

  const voc = {
    A : \u00c4,
    O : \u00d6,
    a : \u00e4,
    o : \u00f6,
    E : \u00cb,
    U : \u00dc,
    e : \u00eb,
    u : \u00fc,
    I : \u00cf,
    Y : \u0178,
    i : \u00ef,
    y : \u00ff
  }


  // for (let i = 0; i < boringText.length; i++) {
  //   if (voc[boringText[i]]) {
  //     res += voc[boringText[i]]
  //   } else {
  //     res += boringText[i]
  //   }
  // }

  return boringText.split(' ').map(el => voc[el] ? voc[el] : el).join('');

  // return res;
}