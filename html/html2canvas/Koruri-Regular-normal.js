﻿(function (jsPDFAPI) {
var callAddFont = function () {
this.addFileToVFS('Koruri-Regular-normal.ttf', font);
this.addFont('Koruri-Regular-normal.ttf', 'Koruri-Regular', 'normal');
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);