(function (e, t) {
	"use strict";
	if (typeof define === "function" && define.amd) {
		define("pdfjs-dist/build/pdf.worker", ["exports"], t)
	} else if (typeof exports !== "undefined") {
		t(exports)
	} else {
		t(e["pdfjsDistBuildPdfWorker"] = {})
	}
})(this, function (e) {
	"use strict";
	var t = "1.7.225";
	var r = "17d135f";
	var a = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : null;
	var i = {};
	(function e() {
		(function (e, t) {
			t(e.pdfjsCoreArithmeticDecoder = {})
		})(this, function (e) {
			var t = function e() {
				var t = [{
					qe: 22017,
					nmps: 1,
					nlps: 1,
					switchFlag: 1
				}, {
					qe: 13313,
					nmps: 2,
					nlps: 6,
					switchFlag: 0
				}, {
					qe: 6145,
					nmps: 3,
					nlps: 9,
					switchFlag: 0
				}, {
					qe: 2753,
					nmps: 4,
					nlps: 12,
					switchFlag: 0
				}, {
					qe: 1313,
					nmps: 5,
					nlps: 29,
					switchFlag: 0
				}, {
					qe: 545,
					nmps: 38,
					nlps: 33,
					switchFlag: 0
				}, {
					qe: 22017,
					nmps: 7,
					nlps: 6,
					switchFlag: 1
				}, {
					qe: 21505,
					nmps: 8,
					nlps: 14,
					switchFlag: 0
				}, {
					qe: 18433,
					nmps: 9,
					nlps: 14,
					switchFlag: 0
				}, {
					qe: 14337,
					nmps: 10,
					nlps: 14,
					switchFlag: 0
				}, {
					qe: 12289,
					nmps: 11,
					nlps: 17,
					switchFlag: 0
				}, {
					qe: 9217,
					nmps: 12,
					nlps: 18,
					switchFlag: 0
				}, {
					qe: 7169,
					nmps: 13,
					nlps: 20,
					switchFlag: 0
				}, {
					qe: 5633,
					nmps: 29,
					nlps: 21,
					switchFlag: 0
				}, {
					qe: 22017,
					nmps: 15,
					nlps: 14,
					switchFlag: 1
				}, {
					qe: 21505,
					nmps: 16,
					nlps: 14,
					switchFlag: 0
				}, {
					qe: 20737,
					nmps: 17,
					nlps: 15,
					switchFlag: 0
				}, {
					qe: 18433,
					nmps: 18,
					nlps: 16,
					switchFlag: 0
				}, {
					qe: 14337,
					nmps: 19,
					nlps: 17,
					switchFlag: 0
				}, {
					qe: 13313,
					nmps: 20,
					nlps: 18,
					switchFlag: 0
				}, {
					qe: 12289,
					nmps: 21,
					nlps: 19,
					switchFlag: 0
				}, {
					qe: 10241,
					nmps: 22,
					nlps: 19,
					switchFlag: 0
				}, {
					qe: 9217,
					nmps: 23,
					nlps: 20,
					switchFlag: 0
				}, {
					qe: 8705,
					nmps: 24,
					nlps: 21,
					switchFlag: 0
				}, {
					qe: 7169,
					nmps: 25,
					nlps: 22,
					switchFlag: 0
				}, {
					qe: 6145,
					nmps: 26,
					nlps: 23,
					switchFlag: 0
				}, {
					qe: 5633,
					nmps: 27,
					nlps: 24,
					switchFlag: 0
				}, {
					qe: 5121,
					nmps: 28,
					nlps: 25,
					switchFlag: 0
				}, {
					qe: 4609,
					nmps: 29,
					nlps: 26,
					switchFlag: 0
				}, {
					qe: 4353,
					nmps: 30,
					nlps: 27,
					switchFlag: 0
				}, {
					qe: 2753,
					nmps: 31,
					nlps: 28,
					switchFlag: 0
				}, {
					qe: 2497,
					nmps: 32,
					nlps: 29,
					switchFlag: 0
				}, {
					qe: 2209,
					nmps: 33,
					nlps: 30,
					switchFlag: 0
				}, {
					qe: 1313,
					nmps: 34,
					nlps: 31,
					switchFlag: 0
				}, {
					qe: 1089,
					nmps: 35,
					nlps: 32,
					switchFlag: 0
				}, {
					qe: 673,
					nmps: 36,
					nlps: 33,
					switchFlag: 0
				}, {
					qe: 545,
					nmps: 37,
					nlps: 34,
					switchFlag: 0
				}, {
					qe: 321,
					nmps: 38,
					nlps: 35,
					switchFlag: 0
				}, {
					qe: 273,
					nmps: 39,
					nlps: 36,
					switchFlag: 0
				}, {
					qe: 133,
					nmps: 40,
					nlps: 37,
					switchFlag: 0
				}, {
					qe: 73,
					nmps: 41,
					nlps: 38,
					switchFlag: 0
				}, {
					qe: 37,
					nmps: 42,
					nlps: 39,
					switchFlag: 0
				}, {
					qe: 21,
					nmps: 43,
					nlps: 40,
					switchFlag: 0
				}, {
					qe: 9,
					nmps: 44,
					nlps: 41,
					switchFlag: 0
				}, {
					qe: 5,
					nmps: 45,
					nlps: 42,
					switchFlag: 0
				}, {
					qe: 1,
					nmps: 45,
					nlps: 43,
					switchFlag: 0
				}, {
					qe: 22017,
					nmps: 46,
					nlps: 46,
					switchFlag: 0
				}];

				function r(e, t, r) {
					this.data = e;
					this.bp = t;
					this.dataEnd = r;
					this.chigh = e[t];
					this.clow = 0;
					this.byteIn();
					this.chigh = this.chigh << 7 & 65535 | this.clow >> 9 & 127;
					this.clow = this.clow << 7 & 65535;
					this.ct -= 7;
					this.a = 32768
				}
				r.prototype = {
					byteIn: function e() {
						var t = this.data;
						var r = this.bp;
						if (t[r] === 255) {
							var a = t[r + 1];
							if (a > 143) {
								this.clow += 65280;
								this.ct = 8
							} else {
								r++;
								this.clow += t[r] << 9;
								this.ct = 7;
								this.bp = r
							}
						} else {
							r++;
							this.clow += r < this.dataEnd ? t[r] << 8 : 65280;
							this.ct = 8;
							this.bp = r
						}
						if (this.clow > 65535) {
							this.chigh += this.clow >> 16;
							this.clow &= 65535
						}
					},
					readBit: function e(r, a) {
						var i = r[a] >> 1,
							n = r[a] & 1;
						var s = t[i];
						var o = s.qe;
						var l;
						var c = this.a - o;
						if (this.chigh < o) {
							if (c < o) {
								c = o;
								l = n;
								i = s.nmps
							} else {
								c = o;
								l = 1 ^ n;
								if (s.switchFlag === 1) {
									n = l
								}
								i = s.nlps
							}
						} else {
							this.chigh -= o;
							if ((c & 32768) !== 0) {
								this.a = c;
								return n
							}
							if (c < o) {
								l = 1 ^ n;
								if (s.switchFlag === 1) {
									n = l
								}
								i = s.nlps
							} else {
								l = n;
								i = s.nmps
							}
						}
						do {
							if (this.ct === 0) {
								this.byteIn()
							}
							c <<= 1;
							this.chigh = this.chigh << 1 & 65535 | this.clow >> 15 & 1;
							this.clow = this.clow << 1 & 65535;
							this.ct--
						} while ((c & 32768) === 0);
						this.a = c;
						r[a] = i << 1 | n;
						return l
					}
				};
				return r
			}();
			e.ArithmeticDecoder = t
		});
		(function (e, t) {
			t(e.pdfjsCoreCharsets = {})
		})(this, function (e) {
			var t = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron"];
			var r = [".notdef", "space", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"];
			var a = [".notdef", "space", "dollaroldstyle", "dollarsuperior", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "hyphensuperior", "colonmonetary", "onefitted", "rupiah", "centoldstyle", "figuredash", "hypheninferior", "onequarter", "onehalf", "threequarters", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior"];
			e.ISOAdobeCharset = t;
			e.ExpertCharset = r;
			e.ExpertSubsetCharset = a
		});
		(function (e, t) {
			t(e.pdfjsCoreEncodings = {})
		})(this, function (e) {
			var t = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"];
			var r = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "centoldstyle", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "", "threequartersemdash", "", "questionsmall", "", "", "", "", "Ethsmall", "", "", "onequarter", "onehalf", "threequarters", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "", "", "", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hypheninferior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "asuperior", "centsuperior", "", "", "", "", "Aacutesmall", "Agravesmall", "Acircumflexsmall", "Adieresissmall", "Atildesmall", "Aringsmall", "Ccedillasmall", "Eacutesmall", "Egravesmall", "Ecircumflexsmall", "Edieresissmall", "Iacutesmall", "Igravesmall", "Icircumflexsmall", "Idieresissmall", "Ntildesmall", "Oacutesmall", "Ogravesmall", "Ocircumflexsmall", "Odieresissmall", "Otildesmall", "Uacutesmall", "Ugravesmall", "Ucircumflexsmall", "Udieresissmall", "", "eightsuperior", "fourinferior", "threeinferior", "sixinferior", "eightinferior", "seveninferior", "Scaronsmall", "", "centinferior", "twoinferior", "", "Dieresissmall", "", "Caronsmall", "osuperior", "fiveinferior", "", "commainferior", "periodinferior", "Yacutesmall", "", "dollarinferior", "", "Thornsmall", "", "nineinferior", "zeroinferior", "Zcaronsmall", "AEsmall", "Oslashsmall", "questiondownsmall", "oneinferior", "Lslashsmall", "", "", "", "", "", "", "Cedillasmall", "", "", "", "", "", "OEsmall", "figuredash", "hyphensuperior", "", "", "", "", "exclamdownsmall", "", "Ydieresissmall", "", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "ninesuperior", "zerosuperior", "", "esuperior", "rsuperior", "tsuperior", "", "", "isuperior", "ssuperior", "dsuperior", "", "", "", "", "", "lsuperior", "Ogoneksmall", "Brevesmall", "Macronsmall", "bsuperior", "nsuperior", "msuperior", "commasuperior", "periodsuperior", "Dotaccentsmall", "Ringsmall"];
			var a = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "space", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron"];
			var i = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"];
			var n = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "bullet", "Euro", "bullet", "quotesinglbase", "florin", "quotedblbase", "ellipsis", "dagger", "daggerdbl", "circumflex", "perthousand", "Scaron", "guilsinglleft", "OE", "bullet", "Zcaron", "bullet", "bullet", "quoteleft", "quoteright", "quotedblleft", "quotedblright", "bullet", "endash", "emdash", "tilde", "trademark", "scaron", "guilsinglright", "oe", "bullet", "zcaron", "Ydieresis", "space", "exclamdown", "cent", "sterling", "currency", "yen", "brokenbar", "section", "dieresis", "copyright", "ordfeminine", "guillemotleft", "logicalnot", "hyphen", "registered", "macron", "degree", "plusminus", "twosuperior", "threesuperior", "acute", "mu", "paragraph", "periodcentered", "cedilla", "onesuperior", "ordmasculine", "guillemotright", "onequarter", "onehalf", "threequarters", "questiondown", "Agrave", "Aacute", "Acircumflex", "Atilde", "Adieresis", "Aring", "AE", "Ccedilla", "Egrave", "Eacute", "Ecircumflex", "Edieresis", "Igrave", "Iacute", "Icircumflex", "Idieresis", "Eth", "Ntilde", "Ograve", "Oacute", "Ocircumflex", "Otilde", "Odieresis", "multiply", "Oslash", "Ugrave", "Uacute", "Ucircumflex", "Udieresis", "Yacute", "Thorn", "germandbls", "agrave", "aacute", "acircumflex", "atilde", "adieresis", "aring", "ae", "ccedilla", "egrave", "eacute", "ecircumflex", "edieresis", "igrave", "iacute", "icircumflex", "idieresis", "eth", "ntilde", "ograve", "oacute", "ocircumflex", "otilde", "odieresis", "divide", "oslash", "ugrave", "uacute", "ucircumflex", "udieresis", "yacute", "thorn", "ydieresis"];
			var s = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "universal", "numbersign", "existential", "percent", "ampersand", "suchthat", "parenleft", "parenright", "asteriskmath", "plus", "comma", "minus", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "congruent", "Alpha", "Beta", "Chi", "Delta", "Epsilon", "Phi", "Gamma", "Eta", "Iota", "theta1", "Kappa", "Lambda", "Mu", "Nu", "Omicron", "Pi", "Theta", "Rho", "Sigma", "Tau", "Upsilon", "sigma1", "Omega", "Xi", "Psi", "Zeta", "bracketleft", "therefore", "bracketright", "perpendicular", "underscore", "radicalex", "alpha", "beta", "chi", "delta", "epsilon", "phi", "gamma", "eta", "iota", "phi1", "kappa", "lambda", "mu", "nu", "omicron", "pi", "theta", "rho", "sigma", "tau", "upsilon", "omega1", "omega", "xi", "psi", "zeta", "braceleft", "bar", "braceright", "similar", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Euro", "Upsilon1", "minute", "lessequal", "fraction", "infinity", "florin", "club", "diamond", "heart", "spade", "arrowboth", "arrowleft", "arrowup", "arrowright", "arrowdown", "degree", "plusminus", "second", "greaterequal", "multiply", "proportional", "partialdiff", "bullet", "divide", "notequal", "equivalence", "approxequal", "ellipsis", "arrowvertex", "arrowhorizex", "carriagereturn", "aleph", "Ifraktur", "Rfraktur", "weierstrass", "circlemultiply", "circleplus", "emptyset", "intersection", "union", "propersuperset", "reflexsuperset", "notsubset", "propersubset", "reflexsubset", "element", "notelement", "angle", "gradient", "registerserif", "copyrightserif", "trademarkserif", "product", "radical", "dotmath", "logicalnot", "logicaland", "logicalor", "arrowdblboth", "arrowdblleft", "arrowdblup", "arrowdblright", "arrowdbldown", "lozenge", "angleleft", "registersans", "copyrightsans", "trademarksans", "summation", "parenlefttp", "parenleftex", "parenleftbt", "bracketlefttp", "bracketleftex", "bracketleftbt", "bracelefttp", "braceleftmid", "braceleftbt", "braceex", "", "angleright", "integral", "integraltp", "integralex", "integralbt", "parenrighttp", "parenrightex", "parenrightbt", "bracketrighttp", "bracketrightex", "bracketrightbt", "bracerighttp", "bracerightmid", "bracerightbt"];
			var o = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "a1", "a2", "a202", "a3", "a4", "a5", "a119", "a118", "a117", "a11", "a12", "a13", "a14", "a15", "a16", "a105", "a17", "a18", "a19", "a20", "a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a6", "a7", "a8", "a9", "a10", "a29", "a30", "a31", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39", "a40", "a41", "a42", "a43", "a44", "a45", "a46", "a47", "a48", "a49", "a50", "a51", "a52", "a53", "a54", "a55", "a56", "a57", "a58", "a59", "a60", "a61", "a62", "a63", "a64", "a65", "a66", "a67", "a68", "a69", "a70", "a71", "a72", "a73", "a74", "a203", "a75", "a204", "a76", "a77", "a78", "a79", "a81", "a82", "a83", "a84", "a97", "a98", "a99", "a100", "", "a89", "a90", "a93", "a94", "a91", "a92", "a205", "a85", "a206", "a86", "a87", "a88", "a95", "a96", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "a101", "a102", "a103", "a104", "a106", "a107", "a108", "a112", "a111", "a110", "a109", "a120", "a121", "a122", "a123", "a124", "a125", "a126", "a127", "a128", "a129", "a130", "a131", "a132", "a133", "a134", "a135", "a136", "a137", "a138", "a139", "a140", "a141", "a142", "a143", "a144", "a145", "a146", "a147", "a148", "a149", "a150", "a151", "a152", "a153", "a154", "a155", "a156", "a157", "a158", "a159", "a160", "a161", "a163", "a164", "a196", "a165", "a192", "a166", "a167", "a168", "a169", "a170", "a171", "a172", "a173", "a162", "a174", "a175", "a176", "a177", "a178", "a179", "a193", "a180", "a199", "a181", "a200", "a182", "", "a201", "a183", "a184", "a197", "a185", "a194", "a198", "a186", "a195", "a187", "a188", "a189", "a190", "a191"];

			function l(e) {
				switch (e) {
					case "WinAnsiEncoding":
						return n;
					case "StandardEncoding":
						return i;
					case "MacRomanEncoding":
						return a;
					case "SymbolSetEncoding":
						return s;
					case "ZapfDingbatsEncoding":
						return o;
					case "ExpertEncoding":
						return t;
					case "MacExpertEncoding":
						return r;
					default:
						return null
				}
			}
			e.WinAnsiEncoding = n;
			e.StandardEncoding = i;
			e.MacRomanEncoding = a;
			e.SymbolSetEncoding = s;
			e.ZapfDingbatsEncoding = o;
			e.ExpertEncoding = t;
			e.getEncoding = l
		});
		(function (e, t) {
			t(e.pdfjsSharedUtil = {})
		})(this, function (e) {
			var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : this;
			var r = [.001, 0, 0, .001, 0, 0];
			var a = {
				FILL: 0,
				STROKE: 1,
				FILL_STROKE: 2,
				INVISIBLE: 3,
				FILL_ADD_TO_PATH: 4,
				STROKE_ADD_TO_PATH: 5,
				FILL_STROKE_ADD_TO_PATH: 6,
				ADD_TO_PATH: 7,
				FILL_STROKE_MASK: 3,
				ADD_TO_PATH_FLAG: 4
			};
			var i = {
				GRAYSCALE_1BPP: 1,
				RGB_24BPP: 2,
				RGBA_32BPP: 3
			};
			var n = {
				TEXT: 1,
				LINK: 2,
				FREETEXT: 3,
				LINE: 4,
				SQUARE: 5,
				CIRCLE: 6,
				POLYGON: 7,
				POLYLINE: 8,
				HIGHLIGHT: 9,
				UNDERLINE: 10,
				SQUIGGLY: 11,
				STRIKEOUT: 12,
				STAMP: 13,
				CARET: 14,
				INK: 15,
				POPUP: 16,
				FILEATTACHMENT: 17,
				SOUND: 18,
				MOVIE: 19,
				WIDGET: 20,
				SCREEN: 21,
				PRINTERMARK: 22,
				TRAPNET: 23,
				WATERMARK: 24,
				THREED: 25,
				REDACT: 26
			};
			var s = {
				INVISIBLE: 1,
				HIDDEN: 2,
				PRINT: 4,
				NOZOOM: 8,
				NOROTATE: 16,
				NOVIEW: 32,
				READONLY: 64,
				LOCKED: 128,
				TOGGLENOVIEW: 256,
				LOCKEDCONTENTS: 512
			};
			var o = {
				READONLY: 1,
				REQUIRED: 2,
				NOEXPORT: 4,
				MULTILINE: 4096,
				PASSWORD: 8192,
				NOTOGGLETOOFF: 16384,
				RADIO: 32768,
				PUSHBUTTON: 65536,
				COMBO: 131072,
				EDIT: 262144,
				SORT: 524288,
				FILESELECT: 1048576,
				MULTISELECT: 2097152,
				DONOTSPELLCHECK: 4194304,
				DONOTSCROLL: 8388608,
				COMB: 16777216,
				RICHTEXT: 33554432,
				RADIOSINUNISON: 33554432,
				COMMITONSELCHANGE: 67108864
			};
			var l = {
				SOLID: 1,
				DASHED: 2,
				BEVELED: 3,
				INSET: 4,
				UNDERLINE: 5
			};
			var c = {
				UNKNOWN: 0,
				FLATE: 1,
				LZW: 2,
				DCT: 3,
				JPX: 4,
				JBIG: 5,
				A85: 6,
				AHX: 7,
				CCF: 8,
				RL: 9
			};
			var h = {
				UNKNOWN: 0,
				TYPE1: 1,
				TYPE1C: 2,
				CIDFONTTYPE0: 3,
				CIDFONTTYPE0C: 4,
				TRUETYPE: 5,
				CIDFONTTYPE2: 6,
				TYPE3: 7,
				OPENTYPE: 8,
				TYPE0: 9,
				MMTYPE1: 10
			};
			var u = {
				errors: 0,
				warnings: 1,
				infos: 5
			};
			var f = {
				dependency: 1,
				setLineWidth: 2,
				setLineCap: 3,
				setLineJoin: 4,
				setMiterLimit: 5,
				setDash: 6,
				setRenderingIntent: 7,
				setFlatness: 8,
				setGState: 9,
				save: 10,
				restore: 11,
				transform: 12,
				moveTo: 13,
				lineTo: 14,
				curveTo: 15,
				curveTo2: 16,
				curveTo3: 17,
				closePath: 18,
				rectangle: 19,
				stroke: 20,
				closeStroke: 21,
				fill: 22,
				eoFill: 23,
				fillStroke: 24,
				eoFillStroke: 25,
				closeFillStroke: 26,
				closeEOFillStroke: 27,
				endPath: 28,
				clip: 29,
				eoClip: 30,
				beginText: 31,
				endText: 32,
				setCharSpacing: 33,
				setWordSpacing: 34,
				setHScale: 35,
				setLeading: 36,
				setFont: 37,
				setTextRenderingMode: 38,
				setTextRise: 39,
				moveText: 40,
				setLeadingMoveText: 41,
				setTextMatrix: 42,
				nextLine: 43,
				showText: 44,
				showSpacedText: 45,
				nextLineShowText: 46,
				nextLineSetSpacingShowText: 47,
				setCharWidth: 48,
				setCharWidthAndBounds: 49,
				setStrokeColorSpace: 50,
				setFillColorSpace: 51,
				setStrokeColor: 52,
				setStrokeColorN: 53,
				setFillColor: 54,
				setFillColorN: 55,
				setStrokeGray: 56,
				setFillGray: 57,
				setStrokeRGBColor: 58,
				setFillRGBColor: 59,
				setStrokeCMYKColor: 60,
				setFillCMYKColor: 61,
				shadingFill: 62,
				beginInlineImage: 63,
				beginImageData: 64,
				endInlineImage: 65,
				paintXObject: 66,
				markPoint: 67,
				markPointProps: 68,
				beginMarkedContent: 69,
				beginMarkedContentProps: 70,
				endMarkedContent: 71,
				beginCompat: 72,
				endCompat: 73,
				paintFormXObjectBegin: 74,
				paintFormXObjectEnd: 75,
				beginGroup: 76,
				endGroup: 77,
				beginAnnotations: 78,
				endAnnotations: 79,
				beginAnnotation: 80,
				endAnnotation: 81,
				paintJpegXObject: 82,
				paintImageMaskXObject: 83,
				paintImageMaskXObjectGroup: 84,
				paintImageXObject: 85,
				paintInlineImageXObject: 86,
				paintInlineImageXObjectGroup: 87,
				paintImageXObjectRepeat: 88,
				paintImageMaskXObjectRepeat: 89,
				paintSolidColorImageMask: 90,
				constructPath: 91
			};
			var d = u.warnings;

			function g(e) {
				d = e
			}

			function v() {
				return d
			}

			function p(e) {
				if (d >= u.infos) {
					console.log("Info: " + e)
				}
			}

			function m(e) {
				if (d >= u.warnings) {
					console.log("Warning: " + e)
				}
			}

			function b(e) {
				console.log("Deprecated API usage: " + e)
			}

			function y(e) {
				if (d >= u.errors) {
					console.log("Error: " + e);
					console.log(k())
				}
				throw new Error(e)
			}

			function k() {
				try {
					throw new Error
				} catch (e) {
					return e.stack ? e.stack.split("\n").slice(2).join("\n") : ""
				}
			}

			function w(e, t) {
				if (!e) {
					y(t)
				}
			}
			var C = {
				unknown: "unknown",
				forms: "forms",
				javaScript: "javaScript",
				smask: "smask",
				shadingPattern: "shadingPattern",
				font: "font"
			};

			function x(e, t) {
				try {
					var r = new URL(e);
					if (!r.origin || r.origin === "null") {
						return false
					}
				} catch (e) {
					return false
				}
				var a = new URL(t, r);
				return r.origin === a.origin
			}

			function S(e) {
				if (!e) {
					return false
				}
				switch (e.protocol) {
					case "http:":
					case "https:":
					case "ftp:":
					case "mailto:":
					case "tel:":
						return true;
					default:
						return false
				}
			}

			function A(e, t) {
				if (!e) {
					return null
				}
				try {
					var r = t ? new URL(e, t) : new URL(e);
					if (S(r)) {
						return r
					}
				} catch (e) {}
				return null
			}

			function I(e, t, r) {
				Object.defineProperty(e, t, {
					value: r,
					enumerable: true,
					configurable: true,
					writable: false
				});
				return r
			}

			function B(e) {
				var t;
				return function () {
					if (e) {
						t = Object.create(null);
						e(t);
						e = null
					}
					return t
				}
			}
			var R = {
				NEED_PASSWORD: 1,
				INCORRECT_PASSWORD: 2
			};
			var T = function e() {
				function t(e, t) {
					this.name = "PasswordException";
					this.message = e;
					this.code = t
				}
				t.prototype = new Error;
				t.constructor = t;
				return t
			}();
			var O = function e() {
				function t(e, t) {
					this.name = "UnknownErrorException";
					this.message = e;
					this.details = t
				}
				t.prototype = new Error;
				t.constructor = t;
				return t
			}();
			var P = function e() {
				function t(e) {
					this.name = "InvalidPDFException";
					this.message = e
				}
				t.prototype = new Error;
				t.constructor = t;
				return t
			}();
			var E = function e() {
				function t(e) {
					this.name = "MissingPDFException";
					this.message = e
				}
				t.prototype = new Error;
				t.constructor = t;
				return t
			}();
			var M = function e() {
				function t(e, t) {
					this.name = "UnexpectedResponseException";
					this.message = e;
					this.status = t
				}
				t.prototype = new Error;
				t.constructor = t;
				return t
			}();
			var L = function e() {
				function t(e) {
					this.message = e
				}
				t.prototype = new Error;
				t.prototype.name = "NotImplementedException";
				t.constructor = t;
				return t
			}();
			var D = function e() {
				function t(e, t) {
					this.begin = e;
					this.end = t;
					this.message = "Missing data [" + e + ", " + t + ")"
				}
				t.prototype = new Error;
				t.prototype.name = "MissingDataException";
				t.constructor = t;
				return t
			}();
			var F = function e() {
				function t(e) {
					this.message = e
				}
				t.prototype = new Error;
				t.prototype.name = "XRefParseException";
				t.constructor = t;
				return t
			}();
			var U = /\x00/g;

			function j(e) {
				if (typeof e !== "string") {
					m("The argument for removeNullCharacters must be a string.");
					return e
				}
				return e.replace(U, "")
			}

			function q(e) {
				w(e !== null && typeof e === "object" && e.length !== undefined, "Invalid argument for bytesToString");
				var t = e.length;
				var r = 8192;
				if (t < r) {
					return String.fromCharCode.apply(null, e)
				}
				var a = [];
				for (var i = 0; i < t; i += r) {
					var n = Math.min(i + r, t);
					var s = e.subarray(i, n);
					a.push(String.fromCharCode.apply(null, s))
				}
				return a.join("")
			}

			function N(e) {
				w(typeof e === "string", "Invalid argument for stringToBytes");
				var t = e.length;
				var r = new Uint8Array(t);
				for (var a = 0; a < t; ++a) {
					r[a] = e.charCodeAt(a) & 255
				}
				return r
			}

			function _(e) {
				if (e.length !== undefined) {
					return e.length
				}
				w(e.byteLength !== undefined);
				return e.byteLength
			}

			function z(e) {
				if (e.length === 1 && e[0] instanceof Uint8Array) {
					return e[0]
				}
				var t = 0;
				var r, a = e.length;
				var i, n;
				for (r = 0; r < a; r++) {
					i = e[r];
					n = _(i);
					t += n
				}
				var s = 0;
				var o = new Uint8Array(t);
				for (r = 0; r < a; r++) {
					i = e[r];
					if (!(i instanceof Uint8Array)) {
						if (typeof i === "string") {
							i = N(i)
						} else {
							i = new Uint8Array(i)
						}
					}
					n = i.byteLength;
					o.set(i, s);
					s += n
				}
				return o
			}

			function H(e) {
				return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255)
			}

			function G(e) {
				var t = 1,
					r = 0;
				while (e > t) {
					t <<= 1;
					r++
				}
				return r
			}

			function X(e, t) {
				return e[t] << 24 >> 24
			}

			function W(e, t) {
				return e[t] << 8 | e[t + 1]
			}

			function V(e, t) {
				return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
			}

			function K() {
				var e = new Uint8Array(2);
				e[0] = 1;
				var t = new Uint16Array(e.buffer);
				return t[0] === 1
			}

			function Y() {
				try {
					new Function("");
					return true
				} catch (e) {
					return false
				}
			}
			var J = function e() {
				function t(e, t) {
					this.buffer = e;
					this.byteLength = e.length;
					this.length = t === undefined ? this.byteLength >> 2 : t;
					i(this.length)
				}
				t.prototype = Object.create(null);
				var r = 0;

				function a(e) {
					return {
						get: function () {
							var t = this.buffer,
								r = e << 2;
							return (t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24) >>> 0
						},
						set: function (t) {
							var r = this.buffer,
								a = e << 2;
							r[a] = t & 255;
							r[a + 1] = t >> 8 & 255;
							r[a + 2] = t >> 16 & 255;
							r[a + 3] = t >>> 24 & 255
						}
					}
				}

				function i(e) {
					while (r < e) {
						Object.defineProperty(t.prototype, r, a(r));
						r++
					}
				}
				return t
			}();
			e.Uint32ArrayView = J;
			var Z = [1, 0, 0, 1, 0, 0];
			var Q = function e() {
				function t() {}
				var r = ["rgb(", 0, ",", 0, ",", 0, ")"];
				t.makeCssRgb = function e(t, a, i) {
					r[1] = t;
					r[3] = a;
					r[5] = i;
					return r.join("")
				};
				t.transform = function e(t, r) {
					return [t[0] * r[0] + t[2] * r[1], t[1] * r[0] + t[3] * r[1], t[0] * r[2] + t[2] * r[3], t[1] * r[2] + t[3] * r[3], t[0] * r[4] + t[2] * r[5] + t[4], t[1] * r[4] + t[3] * r[5] + t[5]]
				};
				t.applyTransform = function e(t, r) {
					var a = t[0] * r[0] + t[1] * r[2] + r[4];
					var i = t[0] * r[1] + t[1] * r[3] + r[5];
					return [a, i]
				};
				t.applyInverseTransform = function e(t, r) {
					var a = r[0] * r[3] - r[1] * r[2];
					var i = (t[0] * r[3] - t[1] * r[2] + r[2] * r[5] - r[4] * r[3]) / a;
					var n = (-t[0] * r[1] + t[1] * r[0] + r[4] * r[1] - r[5] * r[0]) / a;
					return [i, n]
				};
				t.getAxialAlignedBoundingBox = function e(r, a) {
					var i = t.applyTransform(r, a);
					var n = t.applyTransform(r.slice(2, 4), a);
					var s = t.applyTransform([r[0], r[3]], a);
					var o = t.applyTransform([r[2], r[1]], a);
					return [Math.min(i[0], n[0], s[0], o[0]), Math.min(i[1], n[1], s[1], o[1]), Math.max(i[0], n[0], s[0], o[0]), Math.max(i[1], n[1], s[1], o[1])]
				};
				t.inverseTransform = function e(t) {
					var r = t[0] * t[3] - t[1] * t[2];
					return [t[3] / r, -t[1] / r, -t[2] / r, t[0] / r, (t[2] * t[5] - t[4] * t[3]) / r, (t[4] * t[1] - t[5] * t[0]) / r]
				};
				t.apply3dTransform = function e(t, r) {
					return [t[0] * r[0] + t[1] * r[1] + t[2] * r[2], t[3] * r[0] + t[4] * r[1] + t[5] * r[2], t[6] * r[0] + t[7] * r[1] + t[8] * r[2]]
				};
				t.singularValueDecompose2dScale = function e(t) {
					var r = [t[0], t[2], t[1], t[3]];
					var a = t[0] * r[0] + t[1] * r[2];
					var i = t[0] * r[1] + t[1] * r[3];
					var n = t[2] * r[0] + t[3] * r[2];
					var s = t[2] * r[1] + t[3] * r[3];
					var o = (a + s) / 2;
					var l = Math.sqrt((a + s) * (a + s) - 4 * (a * s - n * i)) / 2;
					var c = o + l || 1;
					var h = o - l || 1;
					return [Math.sqrt(c), Math.sqrt(h)]
				};
				t.normalizeRect = function e(t) {
					var r = t.slice(0);
					if (t[0] > t[2]) {
						r[0] = t[2];
						r[2] = t[0]
					}
					if (t[1] > t[3]) {
						r[1] = t[3];
						r[3] = t[1]
					}
					return r
				};
				t.intersect = function e(r, a) {
					function i(e, t) {
						return e - t
					}
					var n = [r[0], r[2], a[0], a[2]].sort(i),
						s = [r[1], r[3], a[1], a[3]].sort(i),
						o = [];
					r = t.normalizeRect(r);
					a = t.normalizeRect(a);
					if (n[0] === r[0] && n[1] === a[0] || n[0] === a[0] && n[1] === r[0]) {
						o[0] = n[1];
						o[2] = n[2]
					} else {
						return false
					}
					if (s[0] === r[1] && s[1] === a[1] || s[0] === a[1] && s[1] === r[1]) {
						o[1] = s[1];
						o[3] = s[2]
					} else {
						return false
					}
					return o
				};
				t.sign = function e(t) {
					return t < 0 ? -1 : 1
				};
				var a = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
				t.toRoman = function e(t, r) {
					w(se(t) && t > 0, "The number should be a positive integer.");
					var i, n = [];
					while (t >= 1e3) {
						t -= 1e3;
						n.push("M")
					}
					i = t / 100 | 0;
					t %= 100;
					n.push(a[i]);
					i = t / 10 | 0;
					t %= 10;
					n.push(a[10 + i]);
					n.push(a[20 + t]);
					var s = n.join("");
					return r ? s.toLowerCase() : s
				};
				t.appendToArray = function e(t, r) {
					Array.prototype.push.apply(t, r)
				};
				t.prependToArray = function e(t, r) {
					Array.prototype.unshift.apply(t, r)
				};
				t.extendObj = function e(t, r) {
					for (var a in r) {
						t[a] = r[a]
					}
				};
				t.getInheritableProperty = function e(t, r, a) {
					while (t && !t.has(r)) {
						t = t.get("Parent")
					}
					if (!t) {
						return null
					}
					return a ? t.getArray(r) : t.get(r)
				};
				t.inherit = function e(t, r, a) {
					t.prototype = Object.create(r.prototype);
					t.prototype.constructor = t;
					for (var i in a) {
						t.prototype[i] = a[i]
					}
				};
				t.loadScript = function e(t, r) {
					var a = document.createElement("script");
					var i = false;
					a.setAttribute("src", t);
					if (r) {
						a.onload = function () {
							if (!i) {
								r()
							}
							i = true
						}
					}
					document.getElementsByTagName("head")[0].appendChild(a)
				};
				return t
			}();
			var $ = function e() {
				function t(e, t, r, a, i, n) {
					this.viewBox = e;
					this.scale = t;
					this.rotation = r;
					this.offsetX = a;
					this.offsetY = i;
					var s = (e[2] + e[0]) / 2;
					var o = (e[3] + e[1]) / 2;
					var l, c, h, u;
					r = r % 360;
					r = r < 0 ? r + 360 : r;
					switch (r) {
						case 180:
							l = -1;
							c = 0;
							h = 0;
							u = 1;
							break;
						case 90:
							l = 0;
							c = 1;
							h = 1;
							u = 0;
							break;
						case 270:
							l = 0;
							c = -1;
							h = -1;
							u = 0;
							break;
						default:
							l = 1;
							c = 0;
							h = 0;
							u = -1;
							break
					}
					if (n) {
						h = -h;
						u = -u
					}
					var f, d;
					var g, v;
					if (l === 0) {
						f = Math.abs(o - e[1]) * t + a;
						d = Math.abs(s - e[0]) * t + i;
						g = Math.abs(e[3] - e[1]) * t;
						v = Math.abs(e[2] - e[0]) * t
					} else {
						f = Math.abs(s - e[0]) * t + a;
						d = Math.abs(o - e[1]) * t + i;
						g = Math.abs(e[2] - e[0]) * t;
						v = Math.abs(e[3] - e[1]) * t
					}
					this.transform = [l * t, c * t, h * t, u * t, f - l * t * s - h * t * o, d - c * t * s - u * t * o];
					this.width = g;
					this.height = v;
					this.fontScale = t
				}
				t.prototype = {
					clone: function e(r) {
						r = r || {};
						var a = "scale" in r ? r.scale : this.scale;
						var i = "rotation" in r ? r.rotation : this.rotation;
						return new t(this.viewBox.slice(), a, i, this.offsetX, this.offsetY, r.dontFlip)
					},
					convertToViewportPoint: function e(t, r) {
						return Q.applyTransform([t, r], this.transform)
					},
					convertToViewportRectangle: function e(t) {
						var r = Q.applyTransform([t[0], t[1]], this.transform);
						var a = Q.applyTransform([t[2], t[3]], this.transform);
						return [r[0], r[1], a[0], a[1]]
					},
					convertToPdfPoint: function e(t, r) {
						return Q.applyInverseTransform([t, r], this.transform)
					}
				};
				return t
			}();
			var ee = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];

			function te(e) {
				var t, r = e.length,
					a = [];
				if (e[0] === "þ" && e[1] === "ÿ") {
					for (t = 2; t < r; t += 2) {
						a.push(String.fromCharCode(e.charCodeAt(t) << 8 | e.charCodeAt(t + 1)))
					}
				} else {
					for (t = 0; t < r; ++t) {
						var i = ee[e.charCodeAt(t)];
						a.push(i ? String.fromCharCode(i) : e.charAt(t))
					}
				}
				return a.join("")
			}

			function re(e) {
				return decodeURIComponent(escape(e))
			}

			function ae(e) {
				return unescape(encodeURIComponent(e))
			}

			function ie(e) {
				for (var t in e) {
					return false
				}
				return true
			}

			function ne(e) {
				return typeof e === "boolean"
			}

			function se(e) {
				return typeof e === "number" && (e | 0) === e
			}

			function oe(e) {
				return typeof e === "number"
			}

			function le(e) {
				return typeof e === "string"
			}

			function ce(e) {
				return e instanceof Array
			}

			function he(e) {
				return typeof e === "object" && e !== null && e.byteLength !== undefined
			}

			function ue(e) {
				return e === 32 || e === 9 || e === 13 || e === 10
			}

			function fe() {
				var e = {};
				e.promise = new Promise(function (t, r) {
					e.resolve = t;
					e.reject = r
				});
				return e
			}(function e() {
				if (t.Promise) {
					if (typeof t.Promise.all !== "function") {
						t.Promise.all = function (e) {
							var r = 0,
								a = [],
								i, n;
							var s = new t.Promise(function (e, t) {
								i = e;
								n = t
							});
							e.forEach(function (e, t) {
								r++;
								e.then(function (e) {
									a[t] = e;
									r--;
									if (r === 0) {
										i(a)
									}
								}, n)
							});
							if (r === 0) {
								i(a)
							}
							return s
						}
					}
					if (typeof t.Promise.resolve !== "function") {
						t.Promise.resolve = function (e) {
							return new t.Promise(function (t) {
								t(e)
							})
						}
					}
					if (typeof t.Promise.reject !== "function") {
						t.Promise.reject = function (e) {
							return new t.Promise(function (t, r) {
								r(e)
							})
						}
					}
					if (typeof t.Promise.prototype.catch !== "function") {
						t.Promise.prototype.catch = function (e) {
							return t.Promise.prototype.then(undefined, e)
						}
					}
					return
				}
				var r = 0;
				var a = 1;
				var i = 2;
				var n = 500;
				var s = {
					handlers: [],
					running: false,
					unhandledRejections: [],
					pendingRejectionCheck: false,
					scheduleHandlers: function e(t) {
						if (t._status === r) {
							return
						}
						this.handlers = this.handlers.concat(t._handlers);
						t._handlers = [];
						if (this.running) {
							return
						}
						this.running = true;
						setTimeout(this.runHandlers.bind(this), 0)
					},
					runHandlers: function e() {
						var t = 1;
						var r = Date.now() + t;
						while (this.handlers.length > 0) {
							var n = this.handlers.shift();
							var s = n.thisPromise._status;
							var o = n.thisPromise._value;
							try {
								if (s === a) {
									if (typeof n.onResolve === "function") {
										o = n.onResolve(o)
									}
								} else if (typeof n.onReject === "function") {
									o = n.onReject(o);
									s = a;
									if (n.thisPromise._unhandledRejection) {
										this.removeUnhandeledRejection(n.thisPromise)
									}
								}
							} catch (e) {
								s = i;
								o = e
							}
							n.nextPromise._updateStatus(s, o);
							if (Date.now() >= r) {
								break
							}
						}
						if (this.handlers.length > 0) {
							setTimeout(this.runHandlers.bind(this), 0);
							return
						}
						this.running = false
					},
					addUnhandledRejection: function e(t) {
						this.unhandledRejections.push({
							promise: t,
							time: Date.now()
						});
						this.scheduleRejectionCheck()
					},
					removeUnhandeledRejection: function e(t) {
						t._unhandledRejection = false;
						for (var r = 0; r < this.unhandledRejections.length; r++) {
							if (this.unhandledRejections[r].promise === t) {
								this.unhandledRejections.splice(r);
								r--
							}
						}
					},
					scheduleRejectionCheck: function e() {
						if (this.pendingRejectionCheck) {
							return
						}
						this.pendingRejectionCheck = true;
						setTimeout(function e() {
							this.pendingRejectionCheck = false;
							var t = Date.now();
							for (var r = 0; r < this.unhandledRejections.length; r++) {
								if (t - this.unhandledRejections[r].time > n) {
									var a = this.unhandledRejections[r].promise._value;
									var i = "Unhandled rejection: " + a;
									if (a.stack) {
										i += "\n" + a.stack
									}
									m(i);
									this.unhandledRejections.splice(r);
									r--
								}
							}
							if (this.unhandledRejections.length) {
								this.scheduleRejectionCheck()
							}
						}.bind(this), n)
					}
				};
				var o = function e(t) {
					this._status = r;
					this._handlers = [];
					try {
						t.call(this, this._resolve.bind(this), this._reject.bind(this))
					} catch (e) {
						this._reject(e)
					}
				};
				o.all = function e(t) {
					var r, a;
					var n = new o(function (e, t) {
						r = e;
						a = t
					});
					var s = t.length;
					var l = [];
					if (s === 0) {
						r(l);
						return n
					}

					function c(e) {
						if (n._status === i) {
							return
						}
						l = [];
						a(e)
					}
					for (var h = 0, u = t.length; h < u; ++h) {
						var f = t[h];
						var d = function (e) {
							return function (t) {
								if (n._status === i) {
									return
								}
								l[e] = t;
								s--;
								if (s === 0) {
									r(l)
								}
							}
						}(h);
						if (o.isPromise(f)) {
							f.then(d, c)
						} else {
							d(f)
						}
					}
					return n
				};
				o.isPromise = function e(t) {
					return t && typeof t.then === "function"
				};
				o.resolve = function e(t) {
					return new o(function (e) {
						e(t)
					})
				};
				o.reject = function e(t) {
					return new o(function (e, r) {
						r(t)
					})
				};
				o.prototype = {
					_status: null,
					_value: null,
					_handlers: null,
					_unhandledRejection: null,
					_updateStatus: function e(t, r) {
						if (this._status === a || this._status === i) {
							return
						}
						if (t === a && o.isPromise(r)) {
							r.then(this._updateStatus.bind(this, a), this._updateStatus.bind(this, i));
							return
						}
						this._status = t;
						this._value = r;
						if (t === i && this._handlers.length === 0) {
							this._unhandledRejection = true;
							s.addUnhandledRejection(this)
						}
						s.scheduleHandlers(this)
					},
					_resolve: function e(t) {
						this._updateStatus(a, t)
					},
					_reject: function e(t) {
						this._updateStatus(i, t)
					},
					then: function e(t, r) {
						var a = new o(function (e, t) {
							this.resolve = e;
							this.reject = t
						});
						this._handlers.push({
							thisPromise: this,
							onResolve: t,
							onReject: r,
							nextPromise: a
						});
						s.scheduleHandlers(this);
						return a
					},
					catch: function e(t) {
						return this.then(undefined, t)
					}
				};
				t.Promise = o
			})();
			(function e() {
				if (t.WeakMap) {
					return
				}
				var r = 0;

				function a() {
					this.id = "$weakmap" + r++
				}
				a.prototype = {
					has: function (e) {
						return !!Object.getOwnPropertyDescriptor(e, this.id)
					},
					get: function (e, t) {
						return this.has(e) ? e[this.id] : t
					},
					set: function (e, t) {
						Object.defineProperty(e, this.id, {
							value: t,
							enumerable: false,
							configurable: true
						})
					},
					delete: function (e) {
						delete e[this.id]
					}
				};
				t.WeakMap = a
			})();
			var de = function e() {
				function t(e, t, r) {
					while (e.length < r) {
						e += t
					}
					return e
				}

				function r() {
					this.started = Object.create(null);
					this.times = [];
					this.enabled = true
				}
				r.prototype = {
					time: function e(t) {
						if (!this.enabled) {
							return
						}
						if (t in this.started) {
							m("Timer is already running for " + t)
						}
						this.started[t] = Date.now()
					},
					timeEnd: function e(t) {
						if (!this.enabled) {
							return
						}
						if (!(t in this.started)) {
							m("Timer has not been started for " + t)
						}
						this.times.push({
							name: t,
							start: this.started[t],
							end: Date.now()
						});
						delete this.started[t]
					},
					toString: function e() {
						var r, a;
						var i = this.times;
						var n = "";
						var s = 0;
						for (r = 0, a = i.length; r < a; ++r) {
							var o = i[r]["name"];
							if (o.length > s) {
								s = o.length
							}
						}
						for (r = 0, a = i.length; r < a; ++r) {
							var l = i[r];
							var c = l.end - l.start;
							n += t(l["name"], " ", s) + " " + c + "ms\n"
						}
						return n
					}
				};
				return r
			}();
			var ge = function e(t, r) {
				if (typeof Blob !== "undefined") {
					return new Blob([t], {
						type: r
					})
				}
				m('The "Blob" constructor is not supported.')
			};
			var ve = function e() {
				var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				return function e(r, a, i) {
					if (!i && typeof URL !== "undefined" && URL.createObjectURL) {
						var n = ge(r, a);
						return URL.createObjectURL(n)
					}
					var s = "data:" + a + ";base64,";
					for (var o = 0, l = r.length; o < l; o += 3) {
						var c = r[o] & 255;
						var h = r[o + 1] & 255;
						var u = r[o + 2] & 255;
						var f = c >> 2,
							d = (c & 3) << 4 | h >> 4;
						var g = o + 1 < l ? (h & 15) << 2 | u >> 6 : 64;
						var v = o + 2 < l ? u & 63 : 64;
						s += t[f] + t[d] + t[g] + t[v]
					}
					return s
				}
			}();

			function pe(e, t, r) {
				this.sourceName = e;
				this.targetName = t;
				this.comObj = r;
				this.callbackIndex = 1;
				this.postMessageTransfers = true;
				var a = this.callbacksCapabilities = Object.create(null);
				var i = this.actionHandler = Object.create(null);
				this._onComObjOnMessage = function e(t) {
					var n = t.data;
					if (n.targetName !== this.sourceName) {
						return
					}
					if (n.isReply) {
						var s = n.callbackId;
						if (n.callbackId in a) {
							var o = a[s];
							delete a[s];
							if ("error" in n) {
								o.reject(n.error)
							} else {
								o.resolve(n.data)
							}
						} else {
							y("Cannot resolve callback " + s)
						}
					} else if (n.action in i) {
						var l = i[n.action];
						if (n.callbackId) {
							var c = this.sourceName;
							var h = n.sourceName;
							Promise.resolve().then(function () {
								return l[0].call(l[1], n.data)
							}).then(function (e) {
								r.postMessage({
									sourceName: c,
									targetName: h,
									isReply: true,
									callbackId: n.callbackId,
									data: e
								})
							}, function (e) {
								if (e instanceof Error) {
									e = e + ""
								}
								r.postMessage({
									sourceName: c,
									targetName: h,
									isReply: true,
									callbackId: n.callbackId,
									error: e
								})
							})
						} else {
							l[0].call(l[1], n.data)
						}
					} else {
						y("Unknown action from worker: " + n.action)
					}
				}.bind(this);
				r.addEventListener("message", this._onComObjOnMessage)
			}
			pe.prototype = {
				on: function e(t, r, a) {
					var i = this.actionHandler;
					if (i[t]) {
						y('There is already an actionName called "' + t + '"')
					}
					i[t] = [r, a]
				},
				send: function e(t, r, a) {
					var i = {
						sourceName: this.sourceName,
						targetName: this.targetName,
						action: t,
						data: r
					};
					this.postMessage(i, a)
				},
				sendWithPromise: function e(t, r, a) {
					var i = this.callbackIndex++;
					var n = {
						sourceName: this.sourceName,
						targetName: this.targetName,
						action: t,
						data: r,
						callbackId: i
					};
					var s = fe();
					this.callbacksCapabilities[i] = s;
					try {
						this.postMessage(n, a)
					} catch (e) {
						s.reject(e)
					}
					return s.promise
				},
				postMessage: function (e, t) {
					if (t && this.postMessageTransfers) {
						this.comObj.postMessage(e, t)
					} else {
						this.comObj.postMessage(e)
					}
				},
				destroy: function () {
					this.comObj.removeEventListener("message", this._onComObjOnMessage)
				}
			};

			function me(e, t, r) {
				var a = new Image;
				a.onload = function t() {
					r.resolve(e, a)
				};
				a.onerror = function t() {
					r.resolve(e, null);
					m("Error during JPEG image loading")
				};
				a.src = t
			}(function e(t) {
				var r = false;
				try {
					if (typeof URL === "function" && typeof URL.prototype === "object" && "origin" in URL.prototype) {
						var a = new URL("b", "http://a");
						a.pathname = "c%20d";
						r = a.href === "http://a/c%20d"
					}
				} catch (e) {}
				if (r) {
					return
				}
				var i = Object.create(null);
				i["ftp"] = 21;
				i["file"] = 0;
				i["gopher"] = 70;
				i["http"] = 80;
				i["https"] = 443;
				i["ws"] = 80;
				i["wss"] = 443;
				var n = Object.create(null);
				n["%2e"] = ".";
				n[".%2e"] = "..";
				n["%2e."] = "..";
				n["%2e%2e"] = "..";

				function s(e) {
					return i[e] !== undefined
				}

				function o() {
					v.call(this);
					this._isInvalid = true
				}

				function l(e) {
					if (e === "") {
						o.call(this)
					}
					return e.toLowerCase()
				}

				function c(e) {
					var t = e.charCodeAt(0);
					if (t > 32 && t < 127 && [34, 35, 60, 62, 63, 96].indexOf(t) === -1) {
						return e
					}
					return encodeURIComponent(e)
				}

				function h(e) {
					var t = e.charCodeAt(0);
					if (t > 32 && t < 127 && [34, 35, 60, 62, 96].indexOf(t) === -1) {
						return e
					}
					return encodeURIComponent(e)
				}
				var u, f = /[a-zA-Z]/,
					d = /[a-zA-Z0-9\+\-\.]/;

				function g(e, t, r) {
					function a(e) {
						y.push(e)
					}
					var g = t || "scheme start",
						v = 0,
						p = "",
						m = false,
						b = false,
						y = [];
					e: while ((e[v - 1] !== u || v === 0) && !this._isInvalid) {
						var k = e[v];
						switch (g) {
							case "scheme start":
								if (k && f.test(k)) {
									p += k.toLowerCase();
									g = "scheme"
								} else if (!t) {
									p = "";
									g = "no scheme";
									continue
								} else {
									a("Invalid scheme.");
									break e
								}
								break;
							case "scheme":
								if (k && d.test(k)) {
									p += k.toLowerCase()
								} else if (k === ":") {
									this._scheme = p;
									p = "";
									if (t) {
										break e
									}
									if (s(this._scheme)) {
										this._isRelative = true
									}
									if (this._scheme === "file") {
										g = "relative"
									} else if (this._isRelative && r && r._scheme === this._scheme) {
										g = "relative or authority"
									} else if (this._isRelative) {
										g = "authority first slash"
									} else {
										g = "scheme data"
									}
								} else if (!t) {
									p = "";
									v = 0;
									g = "no scheme";
									continue
								} else if (u === k) {
									break e
								} else {
									a("Code point not allowed in scheme: " + k);
									break e
								}
								break;
							case "scheme data":
								if (k === "?") {
									this._query = "?";
									g = "query"
								} else if (k === "#") {
									this._fragment = "#";
									g = "fragment"
								} else {
									if (u !== k && "\t" !== k && "\n" !== k && "\r" !== k) {
										this._schemeData += c(k)
									}
								}
								break;
							case "no scheme":
								if (!r || !s(r._scheme)) {
									a("Missing scheme.");
									o.call(this)
								} else {
									g = "relative";
									continue
								}
								break;
							case "relative or authority":
								if (k === "/" && e[v + 1] === "/") {
									g = "authority ignore slashes"
								} else {
									a("Expected /, got: " + k);
									g = "relative";
									continue
								}
								break;
							case "relative":
								this._isRelative = true;
								if ("file" !== this._scheme) {
									this._scheme = r._scheme
								}
								if (u === k) {
									this._host = r._host;
									this._port = r._port;
									this._path = r._path.slice();
									this._query = r._query;
									this._username = r._username;
									this._password = r._password;
									break e
								} else if (k === "/" || k === "\\") {
									if (k === "\\") {
										a("\\ is an invalid code point.")
									}
									g = "relative slash"
								} else if (k === "?") {
									this._host = r._host;
									this._port = r._port;
									this._path = r._path.slice();
									this._query = "?";
									this._username = r._username;
									this._password = r._password;
									g = "query"
								} else if (k === "#") {
									this._host = r._host;
									this._port = r._port;
									this._path = r._path.slice();
									this._query = r._query;
									this._fragment = "#";
									this._username = r._username;
									this._password = r._password;
									g = "fragment"
								} else {
									var w = e[v + 1];
									var C = e[v + 2];
									if ("file" !== this._scheme || !f.test(k) || w !== ":" && w !== "|" || u !== C && "/" !== C && "\\" !== C && "?" !== C && "#" !== C) {
										this._host = r._host;
										this._port = r._port;
										this._username = r._username;
										this._password = r._password;
										this._path = r._path.slice();
										this._path.pop()
									}
									g = "relative path";
									continue
								}
								break;
							case "relative slash":
								if (k === "/" || k === "\\") {
									if (k === "\\") {
										a("\\ is an invalid code point.")
									}
									if (this._scheme === "file") {
										g = "file host"
									} else {
										g = "authority ignore slashes"
									}
								} else {
									if ("file" !== this._scheme) {
										this._host = r._host;
										this._port = r._port;
										this._username = r._username;
										this._password = r._password
									}
									g = "relative path";
									continue
								}
								break;
							case "authority first slash":
								if (k === "/") {
									g = "authority second slash"
								} else {
									a("Expected '/', got: " + k);
									g = "authority ignore slashes";
									continue
								}
								break;
							case "authority second slash":
								g = "authority ignore slashes";
								if ("/" !== k) {
									a("Expected '/', got: " + k);
									continue
								}
								break;
							case "authority ignore slashes":
								if ("/" !== k && "\\" !== k) {
									g = "authority";
									continue
								} else {
									a("Expected authority, got: " + k)
								}
								break;
							case "authority":
								if (k === "@") {
									if (m) {
										a("@ already seen.");
										p += "%40"
									}
									m = true;
									for (var x = 0; x < p.length; x++) {
										var S = p[x];
										if (S === "\t" || S === "\n" || S === "\r") {
											a("Invalid whitespace in authority.");
											continue
										}
										if (S === ":" && this._password === null) {
											this._password = "";
											continue
										}
										var A = c(S);
										if (null !== this._password) {
											this._password += A
										} else {
											this._username += A
										}
									}
									p = ""
								} else if (k === u || k === "/" || k === "\\" || k === "?" || k === "#") {
									v -= p.length;
									p = "";
									g = "host";
									continue
								} else {
									p += k
								}
								break;
							case "file host":
								if (k === u || k === "/" || k === "\\" || k === "?" || k === "#") {
									if (p.length === 2 && f.test(p[0]) && (p[1] === ":" || p[1] === "|")) {
										g = "relative path"
									} else if (p.length === 0) {
										g = "relative path start"
									} else {
										this._host = l.call(this, p);
										p = "";
										g = "relative path start"
									}
									continue
								} else if (k === "\t" || k === "\n" || k === "\r") {
									a("Invalid whitespace in file host.")
								} else {
									p += k
								}
								break;
							case "host":
							case "hostname":
								if (k === ":" && !b) {
									this._host = l.call(this, p);
									p = "";
									g = "port";
									if (t === "hostname") {
										break e
									}
								} else if (k === u || k === "/" || k === "\\" || k === "?" || k === "#") {
									this._host = l.call(this, p);
									p = "";
									g = "relative path start";
									if (t) {
										break e
									}
									continue
								} else if ("\t" !== k && "\n" !== k && "\r" !== k) {
									if (k === "[") {
										b = true
									} else if (k === "]") {
										b = false
									}
									p += k
								} else {
									a("Invalid code point in host/hostname: " + k)
								}
								break;
							case "port":
								if (/[0-9]/.test(k)) {
									p += k
								} else if (k === u || k === "/" || k === "\\" || k === "?" || k === "#" || t) {
									if ("" !== p) {
										var I = parseInt(p, 10);
										if (I !== i[this._scheme]) {
											this._port = I + ""
										}
										p = ""
									}
									if (t) {
										break e
									}
									g = "relative path start";
									continue
								} else if (k === "\t" || k === "\n" || k === "\r") {
									a("Invalid code point in port: " + k)
								} else {
									o.call(this)
								}
								break;
							case "relative path start":
								if (k === "\\") {
									a("'\\' not allowed in path.")
								}
								g = "relative path";
								if ("/" !== k && "\\" !== k) {
									continue
								}
								break;
							case "relative path":
								if (k === u || k === "/" || k === "\\" || !t && (k === "?" || k === "#")) {
									if (k === "\\") {
										a("\\ not allowed in relative path.")
									}
									var B;
									if (B = n[p.toLowerCase()]) {
										p = B
									}
									if (p === "..") {
										this._path.pop();
										if ("/" !== k && "\\" !== k) {
											this._path.push("")
										}
									} else if (p === "." && "/" !== k && "\\" !== k) {
										this._path.push("")
									} else if ("." !== p) {
										if (this._scheme === "file" && this._path.length === 0 && p.length === 2 && f.test(p[0]) && p[1] === "|") {
											p = p[0] + ":"
										}
										this._path.push(p)
									}
									p = "";
									if (k === "?") {
										this._query = "?";
										g = "query"
									} else if (k === "#") {
										this._fragment = "#";
										g = "fragment"
									}
								} else if ("\t" !== k && "\n" !== k && "\r" !== k) {
									p += c(k)
								}
								break;
							case "query":
								if (!t && k === "#") {
									this._fragment = "#";
									g = "fragment"
								} else if (u !== k && "\t" !== k && "\n" !== k && "\r" !== k) {
									this._query += h(k)
								}
								break;
							case "fragment":
								if (u !== k && "\t" !== k && "\n" !== k && "\r" !== k) {
									this._fragment += k
								}
								break
						}
						v++
					}
				}

				function v() {
					this._scheme = "";
					this._schemeData = "";
					this._username = "";
					this._password = null;
					this._host = "";
					this._port = "";
					this._path = [];
					this._query = "";
					this._fragment = "";
					this._isInvalid = false;
					this._isRelative = false
				}

				function p(e, t) {
					if (t !== undefined && !(t instanceof p)) {
						t = new p(String(t))
					}
					this._url = e;
					v.call(this);
					var r = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
					g.call(this, r, null, t)
				}
				p.prototype = {
					toString: function () {
						return this.href
					},
					get href() {
						if (this._isInvalid) {
							return this._url
						}
						var e = "";
						if ("" !== this._username || null !== this._password) {
							e = this._username + (null !== this._password ? ":" + this._password : "") + "@"
						}
						return this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
					},
					set href(e) {
						v.call(this);
						g.call(this, e)
					},
					get protocol() {
						return this._scheme + ":"
					},
					set protocol(e) {
						if (this._isInvalid) {
							return
						}
						g.call(this, e + ":", "scheme start")
					},
					get host() {
						return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
					},
					set host(e) {
						if (this._isInvalid || !this._isRelative) {
							return
						}
						g.call(this, e, "host")
					},
					get hostname() {
						return this._host
					},
					set hostname(e) {
						if (this._isInvalid || !this._isRelative) {
							return
						}
						g.call(this, e, "hostname")
					},
					get port() {
						return this._port
					},
					set port(e) {
						if (this._isInvalid || !this._isRelative) {
							return
						}
						g.call(this, e, "port")
					},
					get pathname() {
						return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
					},
					set pathname(e) {
						if (this._isInvalid || !this._isRelative) {
							return
						}
						this._path = [];
						g.call(this, e, "relative path start")
					},
					get search() {
						return this._isInvalid || !this._query || this._query === "?" ? "" : this._query
					},
					set search(e) {
						if (this._isInvalid || !this._isRelative) {
							return
						}
						this._query = "?";
						if (e[0] === "?") {
							e = e.slice(1)
						}
						g.call(this, e, "query")
					},
					get hash() {
						return this._isInvalid || !this._fragment || this._fragment === "#" ? "" : this._fragment
					},
					set hash(e) {
						if (this._isInvalid) {
							return
						}
						this._fragment = "#";
						if (e[0] === "#") {
							e = e.slice(1)
						}
						g.call(this, e, "fragment")
					},
					get origin() {
						var e;
						if (this._isInvalid || !this._scheme) {
							return ""
						}
						switch (this._scheme) {
							case "data":
							case "file":
							case "javascript":
							case "mailto":
								return "null"
						}
						e = this.host;
						if (!e) {
							return ""
						}
						return this._scheme + "://" + e
					}
				};
				var m = t.URL;
				if (m) {
					p.createObjectURL = function (e) {
						return m.createObjectURL.apply(m, arguments)
					};
					p.revokeObjectURL = function (e) {
						m.revokeObjectURL(e)
					}
				}
				t.URL = p
			})(t);
			e.FONT_IDENTITY_MATRIX = r;
			e.IDENTITY_MATRIX = Z;
			e.OPS = f;
			e.VERBOSITY_LEVELS = u;
			e.UNSUPPORTED_FEATURES = C;
			e.AnnotationBorderStyleType = l;
			e.AnnotationFieldFlag = o;
			e.AnnotationFlag = s;
			e.AnnotationType = n;
			e.FontType = h;
			e.ImageKind = i;
			e.InvalidPDFException = P;
			e.MessageHandler = pe;
			e.MissingDataException = D;
			e.MissingPDFException = E;
			e.NotImplementedException = L;
			e.PageViewport = $;
			e.PasswordException = T;
			e.PasswordResponses = R;
			e.StatTimer = de;
			e.StreamType = c;
			e.TextRenderingMode = a;
			e.UnexpectedResponseException = M;
			e.UnknownErrorException = O;
			e.Util = Q;
			e.XRefParseException = F;
			e.arrayByteLength = _;
			e.arraysToBytes = z;
			e.assert = w;
			e.bytesToString = q;
			e.createBlob = ge;
			e.createPromiseCapability = fe;
			e.createObjectURL = ve;
			e.deprecated = b;
			e.error = y;
			e.getLookupTableFactory = B;
			e.getVerbosityLevel = v;
			e.globalScope = t;
			e.info = p;
			e.isArray = ce;
			e.isArrayBuffer = he;
			e.isBool = ne;
			e.isEmptyObj = ie;
			e.isInt = se;
			e.isNum = oe;
			e.isString = le;
			e.isSpace = ue;
			e.isSameOrigin = x;
			e.createValidAbsoluteUrl = A;
			e.isLittleEndian = K;
			e.isEvalSupported = Y;
			e.loadJpegStream = me;
			e.log2 = G;
			e.readInt8 = X;
			e.readUint16 = W;
			e.readUint32 = V;
			e.removeNullCharacters = j;
			e.setVerbosityLevel = g;
			e.shadow = I;
			e.string32 = H;
			e.stringToBytes = N;
			e.stringToPDFString = te;
			e.stringToUTF8String = re;
			e.utf8StringToString = ae;
			e.warn = m
		});
		(function (e, t) {
			t(e.pdfjsCoreBidi = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.warn;
			var a = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "ON", "ON", "ET", "ET", "ET", "ON", "ON", "ON", "ON", "ON", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "ON", "ON", "ON", "ON", "ON", "ON", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "ON", "ON", "ON", "ON", "ON", "ON", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "ON", "ON", "ON", "ON", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "ON", "ET", "ET", "ET", "ET", "ON", "ON", "ON", "ON", "L", "ON", "ON", "BN", "ON", "ON", "ET", "ET", "EN", "EN", "ON", "L", "ON", "ON", "ON", "EN", "L", "ON", "ON", "ON", "ON", "ON", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "ON", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "ON", "L", "L", "L", "L", "L", "L", "L", "L"];
			var i = ["AN", "AN", "AN", "AN", "AN", "AN", "ON", "ON", "AL", "ET", "ET", "AL", "CS", "AL", "ON", "ON", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "ON", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "ON", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL"];

			function n(e) {
				return (e & 1) !== 0
			}

			function s(e) {
				return (e & 1) === 0
			}

			function o(e, t, r) {
				for (var a = t, i = e.length; a < i; ++a) {
					if (e[a] !== r) {
						return a
					}
				}
				return a
			}

			function l(e, t, r, a) {
				for (var i = t; i < r; ++i) {
					e[i] = a
				}
			}

			function c(e, t, r) {
				for (var a = t, i = r - 1; a < i; ++a, --i) {
					var n = e[a];
					e[a] = e[i];
					e[i] = n
				}
			}

			function h(e, t, r) {
				return {
					str: e,
					dir: r ? "ttb" : t ? "ltr" : "rtl"
				}
			}
			var u = [];
			var f = [];

			function d(e, t, d) {
				var g = true;
				var v = e.length;
				if (v === 0 || d) {
					return h(e, g, d)
				}
				u.length = v;
				f.length = v;
				var p = 0;
				var m, b;
				for (m = 0; m < v; ++m) {
					u[m] = e.charAt(m);
					var y = e.charCodeAt(m);
					var k = "L";
					if (y <= 255) {
						k = a[y]
					} else if (1424 <= y && y <= 1524) {
						k = "R"
					} else if (1536 <= y && y <= 1791) {
						k = i[y & 255];
						if (!k) {
							r("Bidi: invalid Unicode character " + y.toString(16))
						}
					} else if (1792 <= y && y <= 2220) {
						k = "AL"
					}
					if (k === "R" || k === "AL" || k === "AN") {
						p++
					}
					f[m] = k
				}
				if (p === 0) {
					g = true;
					return h(e, g)
				}
				if (t === -1) {
					if (p / v < .3) {
						g = true;
						t = 0
					} else {
						g = false;
						t = 1
					}
				}
				var w = [];
				for (m = 0; m < v; ++m) {
					w[m] = t
				}
				var C = n(t) ? "R" : "L";
				var x = C;
				var S = x;
				var A = x;
				for (m = 0; m < v; ++m) {
					if (f[m] === "NSM") {
						f[m] = A
					} else {
						A = f[m]
					}
				}
				A = x;
				var I;
				for (m = 0; m < v; ++m) {
					I = f[m];
					if (I === "EN") {
						f[m] = A === "AL" ? "AN" : "EN"
					} else if (I === "R" || I === "L" || I === "AL") {
						A = I
					}
				}
				for (m = 0; m < v; ++m) {
					I = f[m];
					if (I === "AL") {
						f[m] = "R"
					}
				}
				for (m = 1; m < v - 1; ++m) {
					if (f[m] === "ES" && f[m - 1] === "EN" && f[m + 1] === "EN") {
						f[m] = "EN"
					}
					if (f[m] === "CS" && (f[m - 1] === "EN" || f[m - 1] === "AN") && f[m + 1] === f[m - 1]) {
						f[m] = f[m - 1]
					}
				}
				for (m = 0; m < v; ++m) {
					if (f[m] === "EN") {
						var B;
						for (B = m - 1; B >= 0; --B) {
							if (f[B] !== "ET") {
								break
							}
							f[B] = "EN"
						}
						for (B = m + 1; B < v; ++B) {
							if (f[B] !== "ET") {
								break
							}
							f[B] = "EN"
						}
					}
				}
				for (m = 0; m < v; ++m) {
					I = f[m];
					if (I === "WS" || I === "ES" || I === "ET" || I === "CS") {
						f[m] = "ON"
					}
				}
				A = x;
				for (m = 0; m < v; ++m) {
					I = f[m];
					if (I === "EN") {
						f[m] = A === "L" ? "L" : "EN"
					} else if (I === "R" || I === "L") {
						A = I
					}
				}
				for (m = 0; m < v; ++m) {
					if (f[m] === "ON") {
						var R = o(f, m + 1, "ON");
						var T = x;
						if (m > 0) {
							T = f[m - 1]
						}
						var O = S;
						if (R + 1 < v) {
							O = f[R + 1]
						}
						if (T !== "L") {
							T = "R"
						}
						if (O !== "L") {
							O = "R"
						}
						if (T === O) {
							l(f, m, R, T)
						}
						m = R - 1
					}
				}
				for (m = 0; m < v; ++m) {
					if (f[m] === "ON") {
						f[m] = C
					}
				}
				for (m = 0; m < v; ++m) {
					I = f[m];
					if (s(w[m])) {
						if (I === "R") {
							w[m] += 1
						} else if (I === "AN" || I === "EN") {
							w[m] += 2
						}
					} else {
						if (I === "L" || I === "AN" || I === "EN") {
							w[m] += 1
						}
					}
				}
				var P = -1;
				var E = 99;
				var M;
				for (m = 0, b = w.length; m < b; ++m) {
					M = w[m];
					if (P < M) {
						P = M
					}
					if (E > M && n(M)) {
						E = M
					}
				}
				for (M = P; M >= E; --M) {
					var L = -1;
					for (m = 0, b = w.length; m < b; ++m) {
						if (w[m] < M) {
							if (L >= 0) {
								c(u, L, m);
								L = -1
							}
						} else if (L < 0) {
							L = m
						}
					}
					if (L >= 0) {
						c(u, L, w.length)
					}
				}
				for (m = 0, b = u.length; m < b; ++m) {
					var D = u[m];
					if (D === "<" || D === ">") {
						u[m] = ""
					}
				}
				return h(u.join(""), g)
			}
			e.bidi = d
		});
		(function (e, t) {
			t(e.pdfjsCoreCFFParser = {}, e.pdfjsSharedUtil, e.pdfjsCoreCharsets, e.pdfjsCoreEncodings)
		})(this, function (e, t, r, a) {
			var i = t.error;
			var n = t.info;
			var s = t.bytesToString;
			var o = t.warn;
			var l = t.isArray;
			var c = t.Util;
			var h = t.stringToBytes;
			var u = t.assert;
			var f = r.ISOAdobeCharset;
			var d = r.ExpertCharset;
			var g = r.ExpertSubsetCharset;
			var v = a.StandardEncoding;
			var p = a.ExpertEncoding;
			var m = 10;
			var b = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"];
			var y = function e() {
				var t = [null, {
					id: "hstem",
					min: 2,
					stackClearing: true,
					stem: true
				}, null, {
					id: "vstem",
					min: 2,
					stackClearing: true,
					stem: true
				}, {
					id: "vmoveto",
					min: 1,
					stackClearing: true
				}, {
					id: "rlineto",
					min: 2,
					resetStack: true
				}, {
					id: "hlineto",
					min: 1,
					resetStack: true
				}, {
					id: "vlineto",
					min: 1,
					resetStack: true
				}, {
					id: "rrcurveto",
					min: 6,
					resetStack: true
				}, null, {
					id: "callsubr",
					min: 1,
					undefStack: true
				}, {
					id: "return",
					min: 0,
					undefStack: true
				}, null, null, {
					id: "endchar",
					min: 0,
					stackClearing: true
				}, null, null, null, {
					id: "hstemhm",
					min: 2,
					stackClearing: true,
					stem: true
				}, {
					id: "hintmask",
					min: 0,
					stackClearing: true
				}, {
					id: "cntrmask",
					min: 0,
					stackClearing: true
				}, {
					id: "rmoveto",
					min: 2,
					stackClearing: true
				}, {
					id: "hmoveto",
					min: 1,
					stackClearing: true
				}, {
					id: "vstemhm",
					min: 2,
					stackClearing: true,
					stem: true
				}, {
					id: "rcurveline",
					min: 8,
					resetStack: true
				}, {
					id: "rlinecurve",
					min: 8,
					resetStack: true
				}, {
					id: "vvcurveto",
					min: 4,
					resetStack: true
				}, {
					id: "hhcurveto",
					min: 4,
					resetStack: true
				}, null, {
					id: "callgsubr",
					min: 1,
					undefStack: true
				}, {
					id: "vhcurveto",
					min: 4,
					resetStack: true
				}, {
					id: "hvcurveto",
					min: 4,
					resetStack: true
				}];
				var r = [null, null, null, {
					id: "and",
					min: 2,
					stackDelta: -1
				}, {
					id: "or",
					min: 2,
					stackDelta: -1
				}, {
					id: "not",
					min: 1,
					stackDelta: 0
				}, null, null, null, {
					id: "abs",
					min: 1,
					stackDelta: 0
				}, {
					id: "add",
					min: 2,
					stackDelta: -1,
					stackFn: function e(t, r) {
						t[r - 2] = t[r - 2] + t[r - 1]
					}
				}, {
					id: "sub",
					min: 2,
					stackDelta: -1,
					stackFn: function e(t, r) {
						t[r - 2] = t[r - 2] - t[r - 1]
					}
				}, {
					id: "div",
					min: 2,
					stackDelta: -1,
					stackFn: function e(t, r) {
						t[r - 2] = t[r - 2] / t[r - 1]
					}
				}, null, {
					id: "neg",
					min: 1,
					stackDelta: 0,
					stackFn: function e(t, r) {
						t[r - 1] = -t[r - 1]
					}
				}, {
					id: "eq",
					min: 2,
					stackDelta: -1
				}, null, null, {
					id: "drop",
					min: 1,
					stackDelta: -1
				}, null, {
					id: "put",
					min: 2,
					stackDelta: -2
				}, {
					id: "get",
					min: 1,
					stackDelta: 0
				}, {
					id: "ifelse",
					min: 4,
					stackDelta: -3
				}, {
					id: "random",
					min: 0,
					stackDelta: 1
				}, {
					id: "mul",
					min: 2,
					stackDelta: -1,
					stackFn: function e(t, r) {
						t[r - 2] = t[r - 2] * t[r - 1]
					}
				}, null, {
					id: "sqrt",
					min: 1,
					stackDelta: 0
				}, {
					id: "dup",
					min: 1,
					stackDelta: 1
				}, {
					id: "exch",
					min: 2,
					stackDelta: 0
				}, {
					id: "index",
					min: 2,
					stackDelta: 0
				}, {
					id: "roll",
					min: 3,
					stackDelta: -2
				}, null, null, null, {
					id: "hflex",
					min: 7,
					resetStack: true
				}, {
					id: "flex",
					min: 13,
					resetStack: true
				}, {
					id: "hflex1",
					min: 9,
					resetStack: true
				}, {
					id: "flex1",
					min: 11,
					resetStack: true
				}];

				function a(e, t, r) {
					this.bytes = e.getBytes();
					this.properties = t;
					this.seacAnalysisEnabled = !!r
				}
				a.prototype = {
					parse: function e() {
						var t = this.properties;
						var r = new k;
						this.cff = r;
						var a = this.parseHeader();
						var i = this.parseIndex(a.endPos);
						var n = this.parseIndex(i.endPos);
						var s = this.parseIndex(n.endPos);
						var o = this.parseIndex(s.endPos);
						var l = this.parseDict(n.obj.get(0));
						var c = this.createDict(A, l, r.strings);
						r.header = a.obj;
						r.names = this.parseNameIndex(i.obj);
						r.strings = this.parseStringIndex(s.obj);
						r.topDict = c;
						r.globalSubrIndex = o.obj;
						this.parsePrivateDict(r.topDict);
						r.isCIDFont = c.hasName("ROS");
						var h = c.getByName("CharStrings");
						var u = this.parseIndex(h).obj;
						var f = c.getByName("FontMatrix");
						if (f) {
							t.fontMatrix = f
						}
						var d = c.getByName("FontBBox");
						if (d) {
							t.ascent = d[3];
							t.descent = d[1];
							t.ascentScaled = true
						}
						var g, v;
						if (r.isCIDFont) {
							var p = this.parseIndex(c.getByName("FDArray")).obj;
							for (var m = 0, b = p.count; m < b; ++m) {
								var y = p.get(m);
								var w = this.createDict(A, this.parseDict(y), r.strings);
								this.parsePrivateDict(w);
								r.fdArray.push(w)
							}
							v = null;
							g = this.parseCharsets(c.getByName("charset"), u.count, r.strings, true);
							r.fdSelect = this.parseFDSelect(c.getByName("FDSelect"), u.count)
						} else {
							g = this.parseCharsets(c.getByName("charset"), u.count, r.strings, false);
							v = this.parseEncoding(c.getByName("Encoding"), t, r.strings, g.charset)
						}
						r.charset = g;
						r.encoding = v;
						var C = this.parseCharStrings(u, c.privateDict.subrsIndex, o.obj, r.fdSelect, r.fdArray);
						r.charStrings = C.charStrings;
						r.seacs = C.seacs;
						r.widths = C.widths;
						return r
					},
					parseHeader: function e() {
						var t = this.bytes;
						var r = t.length;
						var a = 0;
						while (a < r && t[a] !== 1) {
							++a
						}
						if (a >= r) {
							i("Invalid CFF header")
						} else if (a !== 0) {
							n("cff data is shifted");
							t = t.subarray(a);
							this.bytes = t
						}
						var s = t[0];
						var o = t[1];
						var l = t[2];
						var c = t[3];
						var h = new w(s, o, l, c);
						return {
							obj: h,
							endPos: l
						}
					},
					parseDict: function e(t) {
						var r = 0;

						function a() {
							var e = t[r++];
							if (e === 30) {
								return i()
							} else if (e === 28) {
								e = t[r++];
								e = (e << 24 | t[r++] << 16) >> 16;
								return e
							} else if (e === 29) {
								e = t[r++];
								e = e << 8 | t[r++];
								e = e << 8 | t[r++];
								e = e << 8 | t[r++];
								return e
							} else if (e >= 32 && e <= 246) {
								return e - 139
							} else if (e >= 247 && e <= 250) {
								return (e - 247) * 256 + t[r++] + 108
							} else if (e >= 251 && e <= 254) {
								return -((e - 251) * 256) - t[r++] - 108
							}
							o('CFFParser_parseDict: "' + e + '" is a reserved command.');
							return NaN
						}

						function i() {
							var e = "";
							var a = 15;
							var i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];
							var n = t.length;
							while (r < n) {
								var s = t[r++];
								var o = s >> 4;
								var l = s & 15;
								if (o === a) {
									break
								}
								e += i[o];
								if (l === a) {
									break
								}
								e += i[l]
							}
							return parseFloat(e)
						}
						var n = [];
						var s = [];
						r = 0;
						var l = t.length;
						while (r < l) {
							var c = t[r];
							if (c <= 21) {
								if (c === 12) {
									c = c << 8 | t[++r]
								}
								s.push([c, n]);
								n = [];
								++r
							} else {
								n.push(a())
							}
						}
						return s
					},
					parseIndex: function e(t) {
						var r = new x;
						var a = this.bytes;
						var i = a[t++] << 8 | a[t++];
						var n = [];
						var s = t;
						var o, l;
						if (i !== 0) {
							var c = a[t++];
							var h = t + (i + 1) * c - 1;
							for (o = 0, l = i + 1; o < l; ++o) {
								var u = 0;
								for (var f = 0; f < c; ++f) {
									u <<= 8;
									u += a[t++]
								}
								n.push(h + u)
							}
							s = n[i]
						}
						for (o = 0, l = n.length - 1; o < l; ++o) {
							var d = n[o];
							var g = n[o + 1];
							r.add(a.subarray(d, g))
						}
						return {
							obj: r,
							endPos: s
						}
					},
					parseNameIndex: function e(t) {
						var r = [];
						for (var a = 0, i = t.count; a < i; ++a) {
							var n = t.get(a);
							var o = Math.min(n.length, 127);
							var l = [];
							for (var c = 0; c < o; ++c) {
								var h = n[c];
								if (c === 0 && h === 0) {
									l[c] = h;
									continue
								}
								if (h < 33 || h > 126 || h === 91 || h === 93 || h === 40 || h === 41 || h === 123 || h === 125 || h === 60 || h === 62 || h === 47 || h === 37 || h === 35) {
									l[c] = 95;
									continue
								}
								l[c] = h
							}
							r.push(s(l))
						}
						return r
					},
					parseStringIndex: function e(t) {
						var r = new C;
						for (var a = 0, i = t.count; a < i; ++a) {
							var n = t.get(a);
							r.add(s(n))
						}
						return r
					},
					createDict: function e(t, r, a) {
						var i = new t(a);
						for (var n = 0, s = r.length; n < s; ++n) {
							var o = r[n];
							var l = o[0];
							var c = o[1];
							i.setByKey(l, c)
						}
						return i
					},
					parseCharString: function e(a, i, n, s) {
						if (a.callDepth > m) {
							return false
						}
						var l = a.stackSize;
						var c = a.stack;
						var h = i.length;
						for (var u = 0; u < h;) {
							var f = i[u++];
							var d = null;
							if (f === 12) {
								var g = i[u++];
								if (g === 0) {
									i[u - 2] = 139;
									i[u - 1] = 22;
									l = 0
								} else {
									d = r[g]
								}
							} else if (f === 28) {
								c[l] = (i[u] << 24 | i[u + 1] << 16) >> 16;
								u += 2;
								l++
							} else if (f === 14) {
								if (l >= 4) {
									l -= 4;
									if (this.seacAnalysisEnabled) {
										a.seac = c.slice(l, l + 4);
										return false
									}
								}
								d = t[f]
							} else if (f >= 32 && f <= 246) {
								c[l] = f - 139;
								l++
							} else if (f >= 247 && f <= 254) {
								c[l] = f < 251 ? (f - 247 << 8) + i[u] + 108 : -(f - 251 << 8) - i[u] - 108;
								u++;
								l++
							} else if (f === 255) {
								c[l] = (i[u] << 24 | i[u + 1] << 16 | i[u + 2] << 8 | i[u + 3]) / 65536;
								u += 4;
								l++
							} else if (f === 19 || f === 20) {
								a.hints += l >> 1;
								u += a.hints + 7 >> 3;
								l %= 2;
								d = t[f]
							} else if (f === 10 || f === 29) {
								var v;
								if (f === 10) {
									v = n
								} else {
									v = s
								}
								if (!v) {
									d = t[f];
									o("Missing subrsIndex for " + d.id);
									return false
								}
								var p = 32768;
								if (v.count < 1240) {
									p = 107
								} else if (v.count < 33900) {
									p = 1131
								}
								var b = c[--l] + p;
								if (b < 0 || b >= v.count) {
									d = t[f];
									o("Out of bounds subrIndex for " + d.id);
									return false
								}
								a.stackSize = l;
								a.callDepth++;
								var y = this.parseCharString(a, v.get(b), n, s);
								if (!y) {
									return false
								}
								a.callDepth--;
								l = a.stackSize;
								continue
							} else if (f === 11) {
								a.stackSize = l;
								return true
							} else {
								d = t[f]
							}
							if (d) {
								if (d.stem) {
									a.hints += l >> 1
								}
								if ("min" in d) {
									if (!a.undefStack && l < d.min) {
										o("Not enough parameters for " + d.id + "; actual: " + l + ", expected: " + d.min);
										return false
									}
								}
								if (a.firstStackClearing && d.stackClearing) {
									a.firstStackClearing = false;
									l -= d.min;
									if (l >= 2 && d.stem) {
										l %= 2
									} else if (l > 1) {
										o("Found too many parameters for stack-clearing command")
									}
									if (l > 0 && c[l - 1] >= 0) {
										a.width = c[l - 1]
									}
								}
								if ("stackDelta" in d) {
									if ("stackFn" in d) {
										d.stackFn(c, l)
									}
									l += d.stackDelta
								} else if (d.stackClearing) {
									l = 0
								} else if (d.resetStack) {
									l = 0;
									a.undefStack = false
								} else if (d.undefStack) {
									l = 0;
									a.undefStack = true;
									a.firstStackClearing = false
								}
							}
						}
						a.stackSize = l;
						return true
					},
					parseCharStrings: function e(t, r, a, i, n) {
						var s = [];
						var l = [];
						var c = t.count;
						for (var h = 0; h < c; h++) {
							var u = t.get(h);
							var f = {
								callDepth: 0,
								stackSize: 0,
								stack: [],
								undefStack: true,
								hints: 0,
								firstStackClearing: true,
								seac: null,
								width: null
							};
							var d = true;
							var g = null;
							if (i && n.length) {
								var v = i.getFDIndex(h);
								if (v === -1) {
									o("Glyph index is not in fd select.");
									d = false
								}
								if (v >= n.length) {
									o("Invalid fd index for glyph index.");
									d = false
								}
								if (d) {
									g = n[v].privateDict.subrsIndex
								}
							} else if (r) {
								g = r
							}
							if (d) {
								d = this.parseCharString(f, u, g, a)
							}
							if (f.width !== null) {
								l[h] = f.width
							}
							if (f.seac !== null) {
								s[h] = f.seac
							}
							if (!d) {
								t.set(h, new Uint8Array([14]))
							}
						}
						return {
							charStrings: t,
							seacs: s,
							widths: l
						}
					},
					emptyPrivateDictionary: function e(t) {
						var r = this.createDict(I, [], t.strings);
						t.setByKey(18, [0, 0]);
						t.privateDict = r
					},
					parsePrivateDict: function e(t) {
						if (!t.hasName("Private")) {
							this.emptyPrivateDictionary(t);
							return
						}
						var r = t.getByName("Private");
						if (!l(r) || r.length !== 2) {
							t.removeByName("Private");
							return
						}
						var a = r[0];
						var i = r[1];
						if (a === 0 || i >= this.bytes.length) {
							this.emptyPrivateDictionary(t);
							return
						}
						var n = i + a;
						var s = this.bytes.subarray(i, n);
						var o = this.parseDict(s);
						var c = this.createDict(I, o, t.strings);
						t.privateDict = c;
						if (!c.getByName("Subrs")) {
							return
						}
						var h = c.getByName("Subrs");
						var u = i + h;
						if (h === 0 || u >= this.bytes.length) {
							this.emptyPrivateDictionary(t);
							return
						}
						var f = this.parseIndex(u);
						c.subrsIndex = f.obj
					},
					parseCharsets: function e(t, r, a, n) {
						if (t === 0) {
							return new R(true, B.ISO_ADOBE, f)
						} else if (t === 1) {
							return new R(true, B.EXPERT, d)
						} else if (t === 2) {
							return new R(true, B.EXPERT_SUBSET, g)
						}
						var s = this.bytes;
						var o = t;
						var l = s[t++];
						var c = [".notdef"];
						var h, u, v;
						r -= 1;
						switch (l) {
							case 0:
								for (v = 0; v < r; v++) {
									h = s[t++] << 8 | s[t++];
									c.push(n ? h : a.get(h))
								}
								break;
							case 1:
								while (c.length <= r) {
									h = s[t++] << 8 | s[t++];
									u = s[t++];
									for (v = 0; v <= u; v++) {
										c.push(n ? h++ : a.get(h++))
									}
								}
								break;
							case 2:
								while (c.length <= r) {
									h = s[t++] << 8 | s[t++];
									u = s[t++] << 8 | s[t++];
									for (v = 0; v <= u; v++) {
										c.push(n ? h++ : a.get(h++))
									}
								}
								break;
							default:
								i("Unknown charset format")
						}
						var p = t;
						var m = s.subarray(o, p);
						return new R(false, l, c, m)
					},
					parseEncoding: function e(t, r, a, n) {
						var s = Object.create(null);
						var o = this.bytes;
						var l = false;
						var c = false;
						var h, u, f;
						var d = null;

						function g() {
							var e = o[t++];
							for (u = 0; u < e; u++) {
								var r = o[t++];
								var i = (o[t++] << 8) + (o[t++] & 255);
								s[r] = n.indexOf(a.get(i))
							}
						}
						if (t === 0 || t === 1) {
							l = true;
							h = t;
							var m = t ? p : v;
							for (u = 0, f = n.length; u < f; u++) {
								var b = m.indexOf(n[u]);
								if (b !== -1) {
									s[b] = u
								}
							}
						} else {
							var y = t;
							h = o[t++];
							switch (h & 127) {
								case 0:
									var k = o[t++];
									for (u = 1; u <= k; u++) {
										s[o[t++]] = u
									}
									break;
								case 1:
									var w = o[t++];
									var C = 1;
									for (u = 0; u < w; u++) {
										var x = o[t++];
										var S = o[t++];
										for (var A = x; A <= x + S; A++) {
											s[A] = C++
										}
									}
									break;
								default:
									i("Unknown encoding format: " + h + " in CFF");
									break
							}
							var I = t;
							if (h & 128) {
								o[y] &= 127;
								g();
								c = true
							}
							d = o.subarray(y, I)
						}
						h = h & 127;
						return new T(l, h, s, d)
					},
					parseFDSelect: function e(t, r) {
						var a = t;
						var n = this.bytes;
						var s = n[t++];
						var l = [],
							c;
						var h, f = false;
						switch (s) {
							case 0:
								for (h = 0; h < r; ++h) {
									var d = n[t++];
									l.push(d)
								}
								c = n.subarray(a, t);
								break;
							case 3:
								var g = n[t++] << 8 | n[t++];
								for (h = 0; h < g; ++h) {
									var v = n[t++] << 8 | n[t++];
									if (h === 0 && v !== 0) {
										o("parseFDSelect: The first range must have a first GID of 0" + " -- trying to recover.");
										f = true;
										v = 0
									}
									var p = n[t++];
									var m = n[t] << 8 | n[t + 1];
									for (var b = v; b < m; ++b) {
										l.push(p)
									}
								}
								t += 2;
								c = n.subarray(a, t);
								if (f) {
									c[3] = c[4] = 0
								}
								break;
							default:
								i('parseFDSelect: Unknown format "' + s + '".');
								break
						}
						u(l.length === r, "parseFDSelect: Invalid font data.");
						return new O(l, c)
					}
				};
				return a
			}();
			var k = function e() {
				function t() {
					this.header = null;
					this.names = [];
					this.topDict = null;
					this.strings = new C;
					this.globalSubrIndex = null;
					this.encoding = null;
					this.charset = null;
					this.charStrings = null;
					this.fdArray = [];
					this.fdSelect = null;
					this.isCIDFont = false
				}
				return t
			}();
			var w = function e() {
				function t(e, t, r, a) {
					this.major = e;
					this.minor = t;
					this.hdrSize = r;
					this.offSize = a
				}
				return t
			}();
			var C = function e() {
				function t() {
					this.strings = []
				}
				t.prototype = {
					get: function e(t) {
						if (t >= 0 && t <= 390) {
							return b[t]
						}
						if (t - 391 <= this.strings.length) {
							return this.strings[t - 391]
						}
						return b[0]
					},
					add: function e(t) {
						this.strings.push(t)
					},
					get count() {
						return this.strings.length
					}
				};
				return t
			}();
			var x = function e() {
				function t() {
					this.objects = [];
					this.length = 0
				}
				t.prototype = {
					add: function e(t) {
						this.length += t.length;
						this.objects.push(t)
					},
					set: function e(t, r) {
						this.length += r.length - this.objects[t].length;
						this.objects[t] = r
					},
					get: function e(t) {
						return this.objects[t]
					},
					get count() {
						return this.objects.length
					}
				};
				return t
			}();
			var S = function e() {
				function t(e, t) {
					this.keyToNameMap = e.keyToNameMap;
					this.nameToKeyMap = e.nameToKeyMap;
					this.defaults = e.defaults;
					this.types = e.types;
					this.opcodes = e.opcodes;
					this.order = e.order;
					this.strings = t;
					this.values = Object.create(null)
				}
				t.prototype = {
					setByKey: function e(t, r) {
						if (!(t in this.keyToNameMap)) {
							return false
						}
						var a = r.length;
						if (a === 0) {
							return true
						}
						for (var i = 0; i < a; i++) {
							if (isNaN(r[i])) {
								o('Invalid CFFDict value: "' + r + '" for key "' + t + '".');
								return true
							}
						}
						var n = this.types[t];
						if (n === "num" || n === "sid" || n === "offset") {
							r = r[0]
						}
						this.values[t] = r;
						return true
					},
					setByName: function e(t, r) {
						if (!(t in this.nameToKeyMap)) {
							i('Invalid dictionary name "' + t + '"')
						}
						this.values[this.nameToKeyMap[t]] = r
					},
					hasName: function e(t) {
						return this.nameToKeyMap[t] in this.values
					},
					getByName: function e(t) {
						if (!(t in this.nameToKeyMap)) {
							i('Invalid dictionary name "' + t + '"')
						}
						var r = this.nameToKeyMap[t];
						if (!(r in this.values)) {
							return this.defaults[r]
						}
						return this.values[r]
					},
					removeByName: function e(t) {
						delete this.values[this.nameToKeyMap[t]]
					}
				};
				t.createTables = function e(t) {
					var r = {
						keyToNameMap: {},
						nameToKeyMap: {},
						defaults: {},
						types: {},
						opcodes: {},
						order: []
					};
					for (var a = 0, i = t.length; a < i; ++a) {
						var n = t[a];
						var s = l(n[0]) ? (n[0][0] << 8) + n[0][1] : n[0];
						r.keyToNameMap[s] = n[1];
						r.nameToKeyMap[n[1]] = s;
						r.types[s] = n[2];
						r.defaults[s] = n[3];
						r.opcodes[s] = l(n[0]) ? n[0] : [n[0]];
						r.order.push(s)
					}
					return r
				};
				return t
			}();
			var A = function e() {
				var t = [
					[
						[12, 30], "ROS", ["sid", "sid", "num"], null
					],
					[
						[12, 20], "SyntheticBase", "num", null
					],
					[0, "version", "sid", null],
					[1, "Notice", "sid", null],
					[
						[12, 0], "Copyright", "sid", null
					],
					[2, "FullName", "sid", null],
					[3, "FamilyName", "sid", null],
					[4, "Weight", "sid", null],
					[
						[12, 1], "isFixedPitch", "num", 0
					],
					[
						[12, 2], "ItalicAngle", "num", 0
					],
					[
						[12, 3], "UnderlinePosition", "num", -100
					],
					[
						[12, 4], "UnderlineThickness", "num", 50
					],
					[
						[12, 5], "PaintType", "num", 0
					],
					[
						[12, 6], "CharstringType", "num", 2
					],
					[
						[12, 7], "FontMatrix", ["num", "num", "num", "num", "num", "num"],
						[.001, 0, 0, .001, 0, 0]
					],
					[13, "UniqueID", "num", null],
					[5, "FontBBox", ["num", "num", "num", "num"],
						[0, 0, 0, 0]
					],
					[
						[12, 8], "StrokeWidth", "num", 0
					],
					[14, "XUID", "array", null],
					[15, "charset", "offset", 0],
					[16, "Encoding", "offset", 0],
					[17, "CharStrings", "offset", 0],
					[18, "Private", ["offset", "offset"], null],
					[
						[12, 21], "PostScript", "sid", null
					],
					[
						[12, 22], "BaseFontName", "sid", null
					],
					[
						[12, 23], "BaseFontBlend", "delta", null
					],
					[
						[12, 31], "CIDFontVersion", "num", 0
					],
					[
						[12, 32], "CIDFontRevision", "num", 0
					],
					[
						[12, 33], "CIDFontType", "num", 0
					],
					[
						[12, 34], "CIDCount", "num", 8720
					],
					[
						[12, 35], "UIDBase", "num", null
					],
					[
						[12, 37], "FDSelect", "offset", null
					],
					[
						[12, 36], "FDArray", "offset", null
					],
					[
						[12, 38], "FontName", "sid", null
					]
				];
				var r = null;

				function a(e) {
					if (r === null) {
						r = S.createTables(t)
					}
					S.call(this, r, e);
					this.privateDict = null
				}
				a.prototype = Object.create(S.prototype);
				return a
			}();
			var I = function e() {
				var t = [
					[6, "BlueValues", "delta", null],
					[7, "OtherBlues", "delta", null],
					[8, "FamilyBlues", "delta", null],
					[9, "FamilyOtherBlues", "delta", null],
					[
						[12, 9], "BlueScale", "num", .039625
					],
					[
						[12, 10], "BlueShift", "num", 7
					],
					[
						[12, 11], "BlueFuzz", "num", 1
					],
					[10, "StdHW", "num", null],
					[11, "StdVW", "num", null],
					[
						[12, 12], "StemSnapH", "delta", null
					],
					[
						[12, 13], "StemSnapV", "delta", null
					],
					[
						[12, 14], "ForceBold", "num", 0
					],
					[
						[12, 17], "LanguageGroup", "num", 0
					],
					[
						[12, 18], "ExpansionFactor", "num", .06
					],
					[
						[12, 19], "initialRandomSeed", "num", 0
					],
					[20, "defaultWidthX", "num", 0],
					[21, "nominalWidthX", "num", 0],
					[19, "Subrs", "offset", null]
				];
				var r = null;

				function a(e) {
					if (r === null) {
						r = S.createTables(t)
					}
					S.call(this, r, e);
					this.subrsIndex = null
				}
				a.prototype = Object.create(S.prototype);
				return a
			}();
			var B = {
				ISO_ADOBE: 0,
				EXPERT: 1,
				EXPERT_SUBSET: 2
			};
			var R = function e() {
				function t(e, t, r, a) {
					this.predefined = e;
					this.format = t;
					this.charset = r;
					this.raw = a
				}
				return t
			}();
			var T = function e() {
				function t(e, t, r, a) {
					this.predefined = e;
					this.format = t;
					this.encoding = r;
					this.raw = a
				}
				return t
			}();
			var O = function e() {
				function t(e, t) {
					this.fdSelect = e;
					this.raw = t
				}
				t.prototype = {
					getFDIndex: function e(t) {
						if (t < 0 || t >= this.fdSelect.length) {
							return -1
						}
						return this.fdSelect[t]
					}
				};
				return t
			}();
			var P = function e() {
				function t() {
					this.offsets = Object.create(null)
				}
				t.prototype = {
					isTracking: function e(t) {
						return t in this.offsets
					},
					track: function e(t, r) {
						if (t in this.offsets) {
							i("Already tracking location of " + t)
						}
						this.offsets[t] = r
					},
					offset: function e(t) {
						for (var r in this.offsets) {
							this.offsets[r] += t
						}
					},
					setEntryLocation: function e(t, r, a) {
						if (!(t in this.offsets)) {
							i("Not tracking location of " + t)
						}
						var n = a.data;
						var s = this.offsets[t];
						var o = 5;
						for (var l = 0, c = r.length; l < c; ++l) {
							var h = l * o + s;
							var u = h + 1;
							var f = h + 2;
							var d = h + 3;
							var g = h + 4;
							if (n[h] !== 29 || n[u] !== 0 || n[f] !== 0 || n[d] !== 0 || n[g] !== 0) {
								i("writing to an offset that is not empty")
							}
							var v = r[l];
							n[h] = 29;
							n[u] = v >> 24 & 255;
							n[f] = v >> 16 & 255;
							n[d] = v >> 8 & 255;
							n[g] = v & 255
						}
					}
				};
				return t
			}();
			var E = function e() {
				function t(e) {
					this.cff = e
				}
				t.prototype = {
					compile: function e() {
						var t = this.cff;
						var r = {
							data: [],
							length: 0,
							add: function e(t) {
								this.data = this.data.concat(t);
								this.length = this.data.length
							}
						};
						var a = this.compileHeader(t.header);
						r.add(a);
						var i = this.compileNameIndex(t.names);
						r.add(i);
						if (t.isCIDFont) {
							if (t.topDict.hasName("FontMatrix")) {
								var n = t.topDict.getByName("FontMatrix");
								t.topDict.removeByName("FontMatrix");
								for (var s = 0, o = t.fdArray.length; s < o; s++) {
									var l = t.fdArray[s];
									var h = n.slice(0);
									if (l.hasName("FontMatrix")) {
										h = c.transform(h, l.getByName("FontMatrix"))
									}
									l.setByName("FontMatrix", h)
								}
							}
						}
						var u = this.compileTopDicts([t.topDict], r.length, t.isCIDFont);
						r.add(u.output);
						var f = u.trackers[0];
						var d = this.compileStringIndex(t.strings.strings);
						r.add(d);
						var g = this.compileIndex(t.globalSubrIndex);
						r.add(g);
						if (t.encoding && t.topDict.hasName("Encoding")) {
							if (t.encoding.predefined) {
								f.setEntryLocation("Encoding", [t.encoding.format], r)
							} else {
								var v = this.compileEncoding(t.encoding);
								f.setEntryLocation("Encoding", [r.length], r);
								r.add(v)
							}
						}
						if (t.charset && t.topDict.hasName("charset")) {
							if (t.charset.predefined) {
								f.setEntryLocation("charset", [t.charset.format], r)
							} else {
								var p = this.compileCharset(t.charset);
								f.setEntryLocation("charset", [r.length], r);
								r.add(p)
							}
						}
						var m = this.compileCharStrings(t.charStrings);
						f.setEntryLocation("CharStrings", [r.length], r);
						r.add(m);
						if (t.isCIDFont) {
							f.setEntryLocation("FDSelect", [r.length], r);
							var b = this.compileFDSelect(t.fdSelect.raw);
							r.add(b);
							u = this.compileTopDicts(t.fdArray, r.length, true);
							f.setEntryLocation("FDArray", [r.length], r);
							r.add(u.output);
							var y = u.trackers;
							this.compilePrivateDicts(t.fdArray, y, r)
						}
						this.compilePrivateDicts([t.topDict], [f], r);
						r.add([0]);
						return r.data
					},
					encodeNumber: function e(t) {
						if (parseFloat(t) === parseInt(t, 10) && !isNaN(t)) {
							return this.encodeInteger(t)
						}
						return this.encodeFloat(t)
					},
					encodeFloat: function e(t) {
						var r = t.toString();
						var a = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(r);
						if (a) {
							var i = parseFloat("1e" + ((a[2] ? +a[2] : 0) + a[1].length));
							r = (Math.round(t * i) / i).toString()
						}
						var n = "";
						var s, o;
						for (s = 0, o = r.length; s < o; ++s) {
							var l = r[s];
							if (l === "e") {
								n += r[++s] === "-" ? "c" : "b"
							} else if (l === ".") {
								n += "a"
							} else if (l === "-") {
								n += "e"
							} else {
								n += l
							}
						}
						n += n.length & 1 ? "f" : "ff";
						var c = [30];
						for (s = 0, o = n.length; s < o; s += 2) {
							c.push(parseInt(n.substr(s, 2), 16))
						}
						return c
					},
					encodeInteger: function e(t) {
						var r;
						if (t >= -107 && t <= 107) {
							r = [t + 139]
						} else if (t >= 108 && t <= 1131) {
							t = t - 108;
							r = [(t >> 8) + 247, t & 255]
						} else if (t >= -1131 && t <= -108) {
							t = -t - 108;
							r = [(t >> 8) + 251, t & 255]
						} else if (t >= -32768 && t <= 32767) {
							r = [28, t >> 8 & 255, t & 255]
						} else {
							r = [29, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255]
						}
						return r
					},
					compileHeader: function e(t) {
						return [t.major, t.minor, t.hdrSize, t.offSize]
					},
					compileNameIndex: function e(t) {
						var r = new x;
						for (var a = 0, i = t.length; a < i; ++a) {
							r.add(h(t[a]))
						}
						return this.compileIndex(r)
					},
					compileTopDicts: function e(t, r, a) {
						var i = [];
						var n = new x;
						for (var s = 0, o = t.length; s < o; ++s) {
							var l = t[s];
							if (a) {
								l.removeByName("CIDFontVersion");
								l.removeByName("CIDFontRevision");
								l.removeByName("CIDFontType");
								l.removeByName("CIDCount");
								l.removeByName("UIDBase")
							}
							var c = new P;
							var h = this.compileDict(l, c);
							i.push(c);
							n.add(h);
							c.offset(r)
						}
						n = this.compileIndex(n, i);
						return {
							trackers: i,
							output: n
						}
					},
					compilePrivateDicts: function e(t, r, a) {
						for (var i = 0, n = t.length; i < n; ++i) {
							var s = t[i];
							u(s.privateDict && s.hasName("Private"), "There must be an private dictionary.");
							var o = s.privateDict;
							var l = new P;
							var c = this.compileDict(o, l);
							var h = a.length;
							l.offset(h);
							if (!c.length) {
								h = 0
							}
							r[i].setEntryLocation("Private", [c.length, h], a);
							a.add(c);
							if (o.subrsIndex && o.hasName("Subrs")) {
								var f = this.compileIndex(o.subrsIndex);
								l.setEntryLocation("Subrs", [c.length], a);
								a.add(f)
							}
						}
					},
					compileDict: function e(t, r) {
						var a = [];
						var n = t.order;
						for (var s = 0; s < n.length; ++s) {
							var o = n[s];
							if (!(o in t.values)) {
								continue
							}
							var c = t.values[o];
							var h = t.types[o];
							if (!l(h)) {
								h = [h]
							}
							if (!l(c)) {
								c = [c]
							}
							if (c.length === 0) {
								continue
							}
							for (var u = 0, f = h.length; u < f; ++u) {
								var d = h[u];
								var g = c[u];
								switch (d) {
									case "num":
									case "sid":
										a = a.concat(this.encodeNumber(g));
										break;
									case "offset":
										var v = t.keyToNameMap[o];
										if (!r.isTracking(v)) {
											r.track(v, a.length)
										}
										a = a.concat([29, 0, 0, 0, 0]);
										break;
									case "array":
									case "delta":
										a = a.concat(this.encodeNumber(g));
										for (var p = 1, m = c.length; p < m; ++p) {
											a = a.concat(this.encodeNumber(c[p]))
										}
										break;
									default:
										i("Unknown data type of " + d);
										break
								}
							}
							a = a.concat(t.opcodes[o])
						}
						return a
					},
					compileStringIndex: function e(t) {
						var r = new x;
						for (var a = 0, i = t.length; a < i; ++a) {
							r.add(h(t[a]))
						}
						return this.compileIndex(r)
					},
					compileGlobalSubrIndex: function e() {
						var t = this.cff.globalSubrIndex;
						this.out.writeByteArray(this.compileIndex(t))
					},
					compileCharStrings: function e(t) {
						return this.compileIndex(t)
					},
					compileCharset: function e(t) {
						return this.compileTypedArray(t.raw)
					},
					compileEncoding: function e(t) {
						return this.compileTypedArray(t.raw)
					},
					compileFDSelect: function e(t) {
						return this.compileTypedArray(t)
					},
					compileTypedArray: function e(t) {
						var r = [];
						for (var a = 0, i = t.length; a < i; ++a) {
							r[a] = t[a]
						}
						return r
					},
					compileIndex: function e(t, r) {
						r = r || [];
						var a = t.objects;
						var i = a.length;
						if (i === 0) {
							return [0, 0, 0]
						}
						var n = [i >> 8 & 255, i & 255];
						var s = 1,
							o;
						for (o = 0; o < i; ++o) {
							s += a[o].length
						}
						var l;
						if (s < 256) {
							l = 1
						} else if (s < 65536) {
							l = 2
						} else if (s < 16777216) {
							l = 3
						} else {
							l = 4
						}
						n.push(l);
						var c = 1;
						for (o = 0; o < i + 1; o++) {
							if (l === 1) {
								n.push(c & 255)
							} else if (l === 2) {
								n.push(c >> 8 & 255, c & 255)
							} else if (l === 3) {
								n.push(c >> 16 & 255, c >> 8 & 255, c & 255)
							} else {
								n.push(c >>> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255)
							}
							if (a[o]) {
								c += a[o].length
							}
						}
						for (o = 0; o < i; o++) {
							if (r[o]) {
								r[o].offset(n.length)
							}
							for (var h = 0, u = a[o].length; h < u; h++) {
								n.push(a[o][h])
							}
						}
						return n
					}
				};
				return t
			}();
			e.CFFStandardStrings = b;
			e.CFFParser = y;
			e.CFF = k;
			e.CFFHeader = w;
			e.CFFStrings = C;
			e.CFFIndex = x;
			e.CFFCharset = R;
			e.CFFTopDict = A;
			e.CFFPrivateDict = I;
			e.CFFCompiler = E
		});
		(function (e, t) {
			t(e.pdfjsCoreChunkedStream = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.MissingDataException;
			var a = t.arrayByteLength;
			var i = t.arraysToBytes;
			var n = t.assert;
			var s = t.createPromiseCapability;
			var o = t.isInt;
			var l = t.isEmptyObj;
			var c = function e() {
				function t(e, t, r) {
					this.bytes = new Uint8Array(e);
					this.start = 0;
					this.pos = 0;
					this.end = e;
					this.chunkSize = t;
					this.loadedChunks = [];
					this.numChunksLoaded = 0;
					this.numChunks = Math.ceil(e / t);
					this.manager = r;
					this.progressiveDataLength = 0;
					this.lastSuccessfulEnsureByteChunk = -1
				}
				t.prototype = {
					getMissingChunks: function e() {
						var t = [];
						for (var r = 0, a = this.numChunks; r < a; ++r) {
							if (!this.loadedChunks[r]) {
								t.push(r)
							}
						}
						return t
					},
					getBaseStreams: function e() {
						return [this]
					},
					allChunksLoaded: function e() {
						return this.numChunksLoaded === this.numChunks
					},
					onReceiveData: function e(t, r) {
						var a = t + r.byteLength;
						n(t % this.chunkSize === 0, "Bad begin offset: " + t);
						var i = this.bytes.length;
						n(a % this.chunkSize === 0 || a === i, "Bad end offset: " + a);
						this.bytes.set(new Uint8Array(r), t);
						var s = this.chunkSize;
						var o = Math.floor(t / s);
						var l = Math.floor((a - 1) / s) + 1;
						var c;
						for (c = o; c < l; ++c) {
							if (!this.loadedChunks[c]) {
								this.loadedChunks[c] = true;
								++this.numChunksLoaded
							}
						}
					},
					onReceiveProgressiveData: function e(t) {
						var r = this.progressiveDataLength;
						var a = Math.floor(r / this.chunkSize);
						this.bytes.set(new Uint8Array(t), r);
						r += t.byteLength;
						this.progressiveDataLength = r;
						var i = r >= this.end ? this.numChunks : Math.floor(r / this.chunkSize);
						var n;
						for (n = a; n < i; ++n) {
							if (!this.loadedChunks[n]) {
								this.loadedChunks[n] = true;
								++this.numChunksLoaded
							}
						}
					},
					ensureByte: function e(t) {
						var a = Math.floor(t / this.chunkSize);
						if (a === this.lastSuccessfulEnsureByteChunk) {
							return
						}
						if (!this.loadedChunks[a]) {
							throw new r(t, t + 1)
						}
						this.lastSuccessfulEnsureByteChunk = a
					},
					ensureRange: function e(t, a) {
						if (t >= a) {
							return
						}
						if (a <= this.progressiveDataLength) {
							return
						}
						var i = this.chunkSize;
						var n = Math.floor(t / i);
						var s = Math.floor((a - 1) / i) + 1;
						for (var o = n; o < s; ++o) {
							if (!this.loadedChunks[o]) {
								throw new r(t, a)
							}
						}
					},
					nextEmptyChunk: function e(t) {
						var r, a = this.numChunks;
						for (var i = 0; i < a; ++i) {
							r = (t + i) % a;
							if (!this.loadedChunks[r]) {
								return r
							}
						}
						return null
					},
					hasChunk: function e(t) {
						return !!this.loadedChunks[t]
					},
					get length() {
						return this.end - this.start
					},
					get isEmpty() {
						return this.length === 0
					},
					getByte: function e() {
						var t = this.pos;
						if (t >= this.end) {
							return -1
						}
						this.ensureByte(t);
						return this.bytes[this.pos++]
					},
					getUint16: function e() {
						var t = this.getByte();
						var r = this.getByte();
						if (t === -1 || r === -1) {
							return -1
						}
						return (t << 8) + r
					},
					getInt32: function e() {
						var t = this.getByte();
						var r = this.getByte();
						var a = this.getByte();
						var i = this.getByte();
						return (t << 24) + (r << 16) + (a << 8) + i
					},
					getBytes: function e(t) {
						var r = this.bytes;
						var a = this.pos;
						var i = this.end;
						if (!t) {
							this.ensureRange(a, i);
							return r.subarray(a, i)
						}
						var n = a + t;
						if (n > i) {
							n = i
						}
						this.ensureRange(a, n);
						this.pos = n;
						return r.subarray(a, n)
					},
					peekByte: function e() {
						var t = this.getByte();
						this.pos--;
						return t
					},
					peekBytes: function e(t) {
						var r = this.getBytes(t);
						this.pos -= r.length;
						return r
					},
					getByteRange: function e(t, r) {
						this.ensureRange(t, r);
						return this.bytes.subarray(t, r)
					},
					skip: function e(t) {
						if (!t) {
							t = 1
						}
						this.pos += t
					},
					reset: function e() {
						this.pos = this.start
					},
					moveStart: function e() {
						this.start = this.pos
					},
					makeSubStream: function e(t, r, a) {
						this.ensureRange(t, t + r);

						function i() {}
						i.prototype = Object.create(this);
						i.prototype.getMissingChunks = function () {
							var e = this.chunkSize;
							var t = Math.floor(this.start / e);
							var r = Math.floor((this.end - 1) / e) + 1;
							var a = [];
							for (var i = t; i < r; ++i) {
								if (!this.loadedChunks[i]) {
									a.push(i)
								}
							}
							return a
						};
						var n = new i;
						n.pos = n.start = t;
						n.end = t + r || this.end;
						n.dict = a;
						return n
					},
					isStream: true
				};
				return t
			}();
			var h = function e() {
				function t(e, t) {
					var r = t.rangeChunkSize;
					var a = t.length;
					this.stream = new c(a, r, this);
					this.length = a;
					this.chunkSize = r;
					this.pdfNetworkStream = e;
					this.url = t.url;
					this.disableAutoFetch = t.disableAutoFetch;
					this.msgHandler = t.msgHandler;
					this.currRequestId = 0;
					this.chunksNeededByRequest = Object.create(null);
					this.requestsByChunk = Object.create(null);
					this.promisesByRequest = Object.create(null);
					this.progressiveDataLength = 0;
					this.aborted = false;
					this._loadedStreamCapability = s()
				}
				t.prototype = {
					onLoadedStream: function e() {
						return this._loadedStreamCapability.promise
					},
					sendRequest: function e(t, r) {
						var n = this.pdfNetworkStream.getRangeReader(t, r);
						if (!n.isStreamingSupported) {
							n.onProgress = this.onProgress.bind(this)
						}
						var s = [],
							o = 0;
						var l = this;
						var c = new Promise(function (e, t) {
							var r = function (c) {
								try {
									if (!c.done) {
										var h = c.value;
										s.push(h);
										o += a(h);
										if (n.isStreamingSupported) {
											l.onProgress({
												loaded: o
											})
										}
										n.read().then(r, t);
										return
									}
									var u = i(s);
									s = null;
									e(u)
								} catch (e) {
									t(e)
								}
							};
							n.read().then(r, t)
						});
						c.then(function (e) {
							if (this.aborted) {
								return
							}
							this.onReceiveData({
								chunk: e,
								begin: t
							})
						}.bind(this))
					},
					requestAllChunks: function e() {
						var t = this.stream.getMissingChunks();
						this._requestChunks(t);
						return this._loadedStreamCapability.promise
					},
					_requestChunks: function e(t) {
						var r = this.currRequestId++;
						var a, i;
						var n = Object.create(null);
						this.chunksNeededByRequest[r] = n;
						for (a = 0, i = t.length; a < i; a++) {
							if (!this.stream.hasChunk(t[a])) {
								n[t[a]] = true
							}
						}
						if (l(n)) {
							return Promise.resolve()
						}
						var o = s();
						this.promisesByRequest[r] = o;
						var c = [];
						for (var h in n) {
							h = h | 0;
							if (!(h in this.requestsByChunk)) {
								this.requestsByChunk[h] = [];
								c.push(h)
							}
							this.requestsByChunk[h].push(r)
						}
						if (!c.length) {
							return o.promise
						}
						var u = this.groupChunks(c);
						for (a = 0; a < u.length; ++a) {
							var f = u[a];
							var d = f.beginChunk * this.chunkSize;
							var g = Math.min(f.endChunk * this.chunkSize, this.length);
							this.sendRequest(d, g)
						}
						return o.promise
					},
					getStream: function e() {
						return this.stream
					},
					requestRange: function e(t, r) {
						r = Math.min(r, this.length);
						var a = this.getBeginChunk(t);
						var i = this.getEndChunk(r);
						var n = [];
						for (var s = a; s < i; ++s) {
							n.push(s)
						}
						return this._requestChunks(n)
					},
					requestRanges: function e(t) {
						t = t || [];
						var r = [];
						for (var a = 0; a < t.length; a++) {
							var i = this.getBeginChunk(t[a].begin);
							var n = this.getEndChunk(t[a].end);
							for (var s = i; s < n; ++s) {
								if (r.indexOf(s) < 0) {
									r.push(s)
								}
							}
						}
						r.sort(function (e, t) {
							return e - t
						});
						return this._requestChunks(r)
					},
					groupChunks: function e(t) {
						var r = [];
						var a = -1;
						var i = -1;
						for (var n = 0; n < t.length; ++n) {
							var s = t[n];
							if (a < 0) {
								a = s
							}
							if (i >= 0 && i + 1 !== s) {
								r.push({
									beginChunk: a,
									endChunk: i + 1
								});
								a = s
							}
							if (n + 1 === t.length) {
								r.push({
									beginChunk: a,
									endChunk: s + 1
								})
							}
							i = s
						}
						return r
					},
					onProgress: function e(t) {
						var r = this.stream.numChunksLoaded * this.chunkSize + t.loaded;
						this.msgHandler.send("DocProgress", {
							loaded: r,
							total: this.length
						})
					},
					onReceiveData: function e(t) {
						var r = t.chunk;
						var a = t.begin === undefined;
						var i = a ? this.progressiveDataLength : t.begin;
						var n = i + r.byteLength;
						var s = Math.floor(i / this.chunkSize);
						var c = n < this.length ? Math.floor(n / this.chunkSize) : Math.ceil(n / this.chunkSize);
						if (a) {
							this.stream.onReceiveProgressiveData(r);
							this.progressiveDataLength = n
						} else {
							this.stream.onReceiveData(i, r)
						}
						if (this.stream.allChunksLoaded()) {
							this._loadedStreamCapability.resolve(this.stream)
						}
						var h = [];
						var u, f;
						for (r = s; r < c; ++r) {
							var d = this.requestsByChunk[r] || [];
							delete this.requestsByChunk[r];
							for (u = 0; u < d.length; ++u) {
								f = d[u];
								var g = this.chunksNeededByRequest[f];
								if (r in g) {
									delete g[r]
								}
								if (!l(g)) {
									continue
								}
								h.push(f)
							}
						}
						if (!this.disableAutoFetch && l(this.requestsByChunk)) {
							var v;
							if (this.stream.numChunksLoaded === 1) {
								var p = this.stream.numChunks - 1;
								if (!this.stream.hasChunk(p)) {
									v = p
								}
							} else {
								v = this.stream.nextEmptyChunk(c)
							}
							if (o(v)) {
								this._requestChunks([v])
							}
						}
						for (u = 0; u < h.length; ++u) {
							f = h[u];
							var m = this.promisesByRequest[f];
							delete this.promisesByRequest[f];
							m.resolve()
						}
						this.msgHandler.send("DocProgress", {
							loaded: this.stream.numChunksLoaded * this.chunkSize,
							total: this.length
						})
					},
					onError: function e(t) {
						this._loadedStreamCapability.reject(t)
					},
					getBeginChunk: function e(t) {
						var r = Math.floor(t / this.chunkSize);
						return r
					},
					getEndChunk: function e(t) {
						var r = Math.floor((t - 1) / this.chunkSize) + 1;
						return r
					},
					abort: function e() {
						this.aborted = true;
						if (this.pdfNetworkStream) {
							this.pdfNetworkStream.cancelAllRequests("abort")
						}
						for (var t in this.promisesByRequest) {
							var r = this.promisesByRequest[t];
							r.reject(new Error("Request was aborted"))
						}
					}
				};
				return t
			}();
			e.ChunkedStream = c;
			e.ChunkedStreamManager = h
		});
		(function (e, t) {
			t(e.pdfjsCoreGlyphList = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.getLookupTableFactory;
			var a = r(function (e) {
				e["A"] = 65;
				e["AE"] = 198;
				e["AEacute"] = 508;
				e["AEmacron"] = 482;
				e["AEsmall"] = 63462;
				e["Aacute"] = 193;
				e["Aacutesmall"] = 63457;
				e["Abreve"] = 258;
				e["Abreveacute"] = 7854;
				e["Abrevecyrillic"] = 1232;
				e["Abrevedotbelow"] = 7862;
				e["Abrevegrave"] = 7856;
				e["Abrevehookabove"] = 7858;
				e["Abrevetilde"] = 7860;
				e["Acaron"] = 461;
				e["Acircle"] = 9398;
				e["Acircumflex"] = 194;
				e["Acircumflexacute"] = 7844;
				e["Acircumflexdotbelow"] = 7852;
				e["Acircumflexgrave"] = 7846;
				e["Acircumflexhookabove"] = 7848;
				e["Acircumflexsmall"] = 63458;
				e["Acircumflextilde"] = 7850;
				e["Acute"] = 63177;
				e["Acutesmall"] = 63412;
				e["Acyrillic"] = 1040;
				e["Adblgrave"] = 512;
				e["Adieresis"] = 196;
				e["Adieresiscyrillic"] = 1234;
				e["Adieresismacron"] = 478;
				e["Adieresissmall"] = 63460;
				e["Adotbelow"] = 7840;
				e["Adotmacron"] = 480;
				e["Agrave"] = 192;
				e["Agravesmall"] = 63456;
				e["Ahookabove"] = 7842;
				e["Aiecyrillic"] = 1236;
				e["Ainvertedbreve"] = 514;
				e["Alpha"] = 913;
				e["Alphatonos"] = 902;
				e["Amacron"] = 256;
				e["Amonospace"] = 65313;
				e["Aogonek"] = 260;
				e["Aring"] = 197;
				e["Aringacute"] = 506;
				e["Aringbelow"] = 7680;
				e["Aringsmall"] = 63461;
				e["Asmall"] = 63329;
				e["Atilde"] = 195;
				e["Atildesmall"] = 63459;
				e["Aybarmenian"] = 1329;
				e["B"] = 66;
				e["Bcircle"] = 9399;
				e["Bdotaccent"] = 7682;
				e["Bdotbelow"] = 7684;
				e["Becyrillic"] = 1041;
				e["Benarmenian"] = 1330;
				e["Beta"] = 914;
				e["Bhook"] = 385;
				e["Blinebelow"] = 7686;
				e["Bmonospace"] = 65314;
				e["Brevesmall"] = 63220;
				e["Bsmall"] = 63330;
				e["Btopbar"] = 386;
				e["C"] = 67;
				e["Caarmenian"] = 1342;
				e["Cacute"] = 262;
				e["Caron"] = 63178;
				e["Caronsmall"] = 63221;
				e["Ccaron"] = 268;
				e["Ccedilla"] = 199;
				e["Ccedillaacute"] = 7688;
				e["Ccedillasmall"] = 63463;
				e["Ccircle"] = 9400;
				e["Ccircumflex"] = 264;
				e["Cdot"] = 266;
				e["Cdotaccent"] = 266;
				e["Cedillasmall"] = 63416;
				e["Chaarmenian"] = 1353;
				e["Cheabkhasiancyrillic"] = 1212;
				e["Checyrillic"] = 1063;
				e["Chedescenderabkhasiancyrillic"] = 1214;
				e["Chedescendercyrillic"] = 1206;
				e["Chedieresiscyrillic"] = 1268;
				e["Cheharmenian"] = 1347;
				e["Chekhakassiancyrillic"] = 1227;
				e["Cheverticalstrokecyrillic"] = 1208;
				e["Chi"] = 935;
				e["Chook"] = 391;
				e["Circumflexsmall"] = 63222;
				e["Cmonospace"] = 65315;
				e["Coarmenian"] = 1361;
				e["Csmall"] = 63331;
				e["D"] = 68;
				e["DZ"] = 497;
				e["DZcaron"] = 452;
				e["Daarmenian"] = 1332;
				e["Dafrican"] = 393;
				e["Dcaron"] = 270;
				e["Dcedilla"] = 7696;
				e["Dcircle"] = 9401;
				e["Dcircumflexbelow"] = 7698;
				e["Dcroat"] = 272;
				e["Ddotaccent"] = 7690;
				e["Ddotbelow"] = 7692;
				e["Decyrillic"] = 1044;
				e["Deicoptic"] = 1006;
				e["Delta"] = 8710;
				e["Deltagreek"] = 916;
				e["Dhook"] = 394;
				e["Dieresis"] = 63179;
				e["DieresisAcute"] = 63180;
				e["DieresisGrave"] = 63181;
				e["Dieresissmall"] = 63400;
				e["Digammagreek"] = 988;
				e["Djecyrillic"] = 1026;
				e["Dlinebelow"] = 7694;
				e["Dmonospace"] = 65316;
				e["Dotaccentsmall"] = 63223;
				e["Dslash"] = 272;
				e["Dsmall"] = 63332;
				e["Dtopbar"] = 395;
				e["Dz"] = 498;
				e["Dzcaron"] = 453;
				e["Dzeabkhasiancyrillic"] = 1248;
				e["Dzecyrillic"] = 1029;
				e["Dzhecyrillic"] = 1039;
				e["E"] = 69;
				e["Eacute"] = 201;
				e["Eacutesmall"] = 63465;
				e["Ebreve"] = 276;
				e["Ecaron"] = 282;
				e["Ecedillabreve"] = 7708;
				e["Echarmenian"] = 1333;
				e["Ecircle"] = 9402;
				e["Ecircumflex"] = 202;
				e["Ecircumflexacute"] = 7870;
				e["Ecircumflexbelow"] = 7704;
				e["Ecircumflexdotbelow"] = 7878;
				e["Ecircumflexgrave"] = 7872;
				e["Ecircumflexhookabove"] = 7874;
				e["Ecircumflexsmall"] = 63466;
				e["Ecircumflextilde"] = 7876;
				e["Ecyrillic"] = 1028;
				e["Edblgrave"] = 516;
				e["Edieresis"] = 203;
				e["Edieresissmall"] = 63467;
				e["Edot"] = 278;
				e["Edotaccent"] = 278;
				e["Edotbelow"] = 7864;
				e["Efcyrillic"] = 1060;
				e["Egrave"] = 200;
				e["Egravesmall"] = 63464;
				e["Eharmenian"] = 1335;
				e["Ehookabove"] = 7866;
				e["Eightroman"] = 8551;
				e["Einvertedbreve"] = 518;
				e["Eiotifiedcyrillic"] = 1124;
				e["Elcyrillic"] = 1051;
				e["Elevenroman"] = 8554;
				e["Emacron"] = 274;
				e["Emacronacute"] = 7702;
				e["Emacrongrave"] = 7700;
				e["Emcyrillic"] = 1052;
				e["Emonospace"] = 65317;
				e["Encyrillic"] = 1053;
				e["Endescendercyrillic"] = 1186;
				e["Eng"] = 330;
				e["Enghecyrillic"] = 1188;
				e["Enhookcyrillic"] = 1223;
				e["Eogonek"] = 280;
				e["Eopen"] = 400;
				e["Epsilon"] = 917;
				e["Epsilontonos"] = 904;
				e["Ercyrillic"] = 1056;
				e["Ereversed"] = 398;
				e["Ereversedcyrillic"] = 1069;
				e["Escyrillic"] = 1057;
				e["Esdescendercyrillic"] = 1194;
				e["Esh"] = 425;
				e["Esmall"] = 63333;
				e["Eta"] = 919;
				e["Etarmenian"] = 1336;
				e["Etatonos"] = 905;
				e["Eth"] = 208;
				e["Ethsmall"] = 63472;
				e["Etilde"] = 7868;
				e["Etildebelow"] = 7706;
				e["Euro"] = 8364;
				e["Ezh"] = 439;
				e["Ezhcaron"] = 494;
				e["Ezhreversed"] = 440;
				e["F"] = 70;
				e["Fcircle"] = 9403;
				e["Fdotaccent"] = 7710;
				e["Feharmenian"] = 1366;
				e["Feicoptic"] = 996;
				e["Fhook"] = 401;
				e["Fitacyrillic"] = 1138;
				e["Fiveroman"] = 8548;
				e["Fmonospace"] = 65318;
				e["Fourroman"] = 8547;
				e["Fsmall"] = 63334;
				e["G"] = 71;
				e["GBsquare"] = 13191;
				e["Gacute"] = 500;
				e["Gamma"] = 915;
				e["Gammaafrican"] = 404;
				e["Gangiacoptic"] = 1002;
				e["Gbreve"] = 286;
				e["Gcaron"] = 486;
				e["Gcedilla"] = 290;
				e["Gcircle"] = 9404;
				e["Gcircumflex"] = 284;
				e["Gcommaaccent"] = 290;
				e["Gdot"] = 288;
				e["Gdotaccent"] = 288;
				e["Gecyrillic"] = 1043;
				e["Ghadarmenian"] = 1346;
				e["Ghemiddlehookcyrillic"] = 1172;
				e["Ghestrokecyrillic"] = 1170;
				e["Gheupturncyrillic"] = 1168;
				e["Ghook"] = 403;
				e["Gimarmenian"] = 1331;
				e["Gjecyrillic"] = 1027;
				e["Gmacron"] = 7712;
				e["Gmonospace"] = 65319;
				e["Grave"] = 63182;
				e["Gravesmall"] = 63328;
				e["Gsmall"] = 63335;
				e["Gsmallhook"] = 667;
				e["Gstroke"] = 484;
				e["H"] = 72;
				e["H18533"] = 9679;
				e["H18543"] = 9642;
				e["H18551"] = 9643;
				e["H22073"] = 9633;
				e["HPsquare"] = 13259;
				e["Haabkhasiancyrillic"] = 1192;
				e["Hadescendercyrillic"] = 1202;
				e["Hardsigncyrillic"] = 1066;
				e["Hbar"] = 294;
				e["Hbrevebelow"] = 7722;
				e["Hcedilla"] = 7720;
				e["Hcircle"] = 9405;
				e["Hcircumflex"] = 292;
				e["Hdieresis"] = 7718;
				e["Hdotaccent"] = 7714;
				e["Hdotbelow"] = 7716;
				e["Hmonospace"] = 65320;
				e["Hoarmenian"] = 1344;
				e["Horicoptic"] = 1e3;
				e["Hsmall"] = 63336;
				e["Hungarumlaut"] = 63183;
				e["Hungarumlautsmall"] = 63224;
				e["Hzsquare"] = 13200;
				e["I"] = 73;
				e["IAcyrillic"] = 1071;
				e["IJ"] = 306;
				e["IUcyrillic"] = 1070;
				e["Iacute"] = 205;
				e["Iacutesmall"] = 63469;
				e["Ibreve"] = 300;
				e["Icaron"] = 463;
				e["Icircle"] = 9406;
				e["Icircumflex"] = 206;
				e["Icircumflexsmall"] = 63470;
				e["Icyrillic"] = 1030;
				e["Idblgrave"] = 520;
				e["Idieresis"] = 207;
				e["Idieresisacute"] = 7726;
				e["Idieresiscyrillic"] = 1252;
				e["Idieresissmall"] = 63471;
				e["Idot"] = 304;
				e["Idotaccent"] = 304;
				e["Idotbelow"] = 7882;
				e["Iebrevecyrillic"] = 1238;
				e["Iecyrillic"] = 1045;
				e["Ifraktur"] = 8465;
				e["Igrave"] = 204;
				e["Igravesmall"] = 63468;
				e["Ihookabove"] = 7880;
				e["Iicyrillic"] = 1048;
				e["Iinvertedbreve"] = 522;
				e["Iishortcyrillic"] = 1049;
				e["Imacron"] = 298;
				e["Imacroncyrillic"] = 1250;
				e["Imonospace"] = 65321;
				e["Iniarmenian"] = 1339;
				e["Iocyrillic"] = 1025;
				e["Iogonek"] = 302;
				e["Iota"] = 921;
				e["Iotaafrican"] = 406;
				e["Iotadieresis"] = 938;
				e["Iotatonos"] = 906;
				e["Ismall"] = 63337;
				e["Istroke"] = 407;
				e["Itilde"] = 296;
				e["Itildebelow"] = 7724;
				e["Izhitsacyrillic"] = 1140;
				e["Izhitsadblgravecyrillic"] = 1142;
				e["J"] = 74;
				e["Jaarmenian"] = 1345;
				e["Jcircle"] = 9407;
				e["Jcircumflex"] = 308;
				e["Jecyrillic"] = 1032;
				e["Jheharmenian"] = 1355;
				e["Jmonospace"] = 65322;
				e["Jsmall"] = 63338;
				e["K"] = 75;
				e["KBsquare"] = 13189;
				e["KKsquare"] = 13261;
				e["Kabashkircyrillic"] = 1184;
				e["Kacute"] = 7728;
				e["Kacyrillic"] = 1050;
				e["Kadescendercyrillic"] = 1178;
				e["Kahookcyrillic"] = 1219;
				e["Kappa"] = 922;
				e["Kastrokecyrillic"] = 1182;
				e["Kaverticalstrokecyrillic"] = 1180;
				e["Kcaron"] = 488;
				e["Kcedilla"] = 310;
				e["Kcircle"] = 9408;
				e["Kcommaaccent"] = 310;
				e["Kdotbelow"] = 7730;
				e["Keharmenian"] = 1364;
				e["Kenarmenian"] = 1343;
				e["Khacyrillic"] = 1061;
				e["Kheicoptic"] = 998;
				e["Khook"] = 408;
				e["Kjecyrillic"] = 1036;
				e["Klinebelow"] = 7732;
				e["Kmonospace"] = 65323;
				e["Koppacyrillic"] = 1152;
				e["Koppagreek"] = 990;
				e["Ksicyrillic"] = 1134;
				e["Ksmall"] = 63339;
				e["L"] = 76;
				e["LJ"] = 455;
				e["LL"] = 63167;
				e["Lacute"] = 313;
				e["Lambda"] = 923;
				e["Lcaron"] = 317;
				e["Lcedilla"] = 315;
				e["Lcircle"] = 9409;
				e["Lcircumflexbelow"] = 7740;
				e["Lcommaaccent"] = 315;
				e["Ldot"] = 319;
				e["Ldotaccent"] = 319;
				e["Ldotbelow"] = 7734;
				e["Ldotbelowmacron"] = 7736;
				e["Liwnarmenian"] = 1340;
				e["Lj"] = 456;
				e["Ljecyrillic"] = 1033;
				e["Llinebelow"] = 7738;
				e["Lmonospace"] = 65324;
				e["Lslash"] = 321;
				e["Lslashsmall"] = 63225;
				e["Lsmall"] = 63340;
				e["M"] = 77;
				e["MBsquare"] = 13190;
				e["Macron"] = 63184;
				e["Macronsmall"] = 63407;
				e["Macute"] = 7742;
				e["Mcircle"] = 9410;
				e["Mdotaccent"] = 7744;
				e["Mdotbelow"] = 7746;
				e["Menarmenian"] = 1348;
				e["Mmonospace"] = 65325;
				e["Msmall"] = 63341;
				e["Mturned"] = 412;
				e["Mu"] = 924;
				e["N"] = 78;
				e["NJ"] = 458;
				e["Nacute"] = 323;
				e["Ncaron"] = 327;
				e["Ncedilla"] = 325;
				e["Ncircle"] = 9411;
				e["Ncircumflexbelow"] = 7754;
				e["Ncommaaccent"] = 325;
				e["Ndotaccent"] = 7748;
				e["Ndotbelow"] = 7750;
				e["Nhookleft"] = 413;
				e["Nineroman"] = 8552;
				e["Nj"] = 459;
				e["Njecyrillic"] = 1034;
				e["Nlinebelow"] = 7752;
				e["Nmonospace"] = 65326;
				e["Nowarmenian"] = 1350;
				e["Nsmall"] = 63342;
				e["Ntilde"] = 209;
				e["Ntildesmall"] = 63473;
				e["Nu"] = 925;
				e["O"] = 79;
				e["OE"] = 338;
				e["OEsmall"] = 63226;
				e["Oacute"] = 211;
				e["Oacutesmall"] = 63475;
				e["Obarredcyrillic"] = 1256;
				e["Obarreddieresiscyrillic"] = 1258;
				e["Obreve"] = 334;
				e["Ocaron"] = 465;
				e["Ocenteredtilde"] = 415;
				e["Ocircle"] = 9412;
				e["Ocircumflex"] = 212;
				e["Ocircumflexacute"] = 7888;
				e["Ocircumflexdotbelow"] = 7896;
				e["Ocircumflexgrave"] = 7890;
				e["Ocircumflexhookabove"] = 7892;
				e["Ocircumflexsmall"] = 63476;
				e["Ocircumflextilde"] = 7894;
				e["Ocyrillic"] = 1054;
				e["Odblacute"] = 336;
				e["Odblgrave"] = 524;
				e["Odieresis"] = 214;
				e["Odieresiscyrillic"] = 1254;
				e["Odieresissmall"] = 63478;
				e["Odotbelow"] = 7884;
				e["Ogoneksmall"] = 63227;
				e["Ograve"] = 210;
				e["Ogravesmall"] = 63474;
				e["Oharmenian"] = 1365;
				e["Ohm"] = 8486;
				e["Ohookabove"] = 7886;
				e["Ohorn"] = 416;
				e["Ohornacute"] = 7898;
				e["Ohorndotbelow"] = 7906;
				e["Ohorngrave"] = 7900;
				e["Ohornhookabove"] = 7902;
				e["Ohorntilde"] = 7904;
				e["Ohungarumlaut"] = 336;
				e["Oi"] = 418;
				e["Oinvertedbreve"] = 526;
				e["Omacron"] = 332;
				e["Omacronacute"] = 7762;
				e["Omacrongrave"] = 7760;
				e["Omega"] = 8486;
				e["Omegacyrillic"] = 1120;
				e["Omegagreek"] = 937;
				e["Omegaroundcyrillic"] = 1146;
				e["Omegatitlocyrillic"] = 1148;
				e["Omegatonos"] = 911;
				e["Omicron"] = 927;
				e["Omicrontonos"] = 908;
				e["Omonospace"] = 65327;
				e["Oneroman"] = 8544;
				e["Oogonek"] = 490;
				e["Oogonekmacron"] = 492;
				e["Oopen"] = 390;
				e["Oslash"] = 216;
				e["Oslashacute"] = 510;
				e["Oslashsmall"] = 63480;
				e["Osmall"] = 63343;
				e["Ostrokeacute"] = 510;
				e["Otcyrillic"] = 1150;
				e["Otilde"] = 213;
				e["Otildeacute"] = 7756;
				e["Otildedieresis"] = 7758;
				e["Otildesmall"] = 63477;
				e["P"] = 80;
				e["Pacute"] = 7764;
				e["Pcircle"] = 9413;
				e["Pdotaccent"] = 7766;
				e["Pecyrillic"] = 1055;
				e["Peharmenian"] = 1354;
				e["Pemiddlehookcyrillic"] = 1190;
				e["Phi"] = 934;
				e["Phook"] = 420;
				e["Pi"] = 928;
				e["Piwrarmenian"] = 1363;
				e["Pmonospace"] = 65328;
				e["Psi"] = 936;
				e["Psicyrillic"] = 1136;
				e["Psmall"] = 63344;
				e["Q"] = 81;
				e["Qcircle"] = 9414;
				e["Qmonospace"] = 65329;
				e["Qsmall"] = 63345;
				e["R"] = 82;
				e["Raarmenian"] = 1356;
				e["Racute"] = 340;
				e["Rcaron"] = 344;
				e["Rcedilla"] = 342;
				e["Rcircle"] = 9415;
				e["Rcommaaccent"] = 342;
				e["Rdblgrave"] = 528;
				e["Rdotaccent"] = 7768;
				e["Rdotbelow"] = 7770;
				e["Rdotbelowmacron"] = 7772;
				e["Reharmenian"] = 1360;
				e["Rfraktur"] = 8476;
				e["Rho"] = 929;
				e["Ringsmall"] = 63228;
				e["Rinvertedbreve"] = 530;
				e["Rlinebelow"] = 7774;
				e["Rmonospace"] = 65330;
				e["Rsmall"] = 63346;
				e["Rsmallinverted"] = 641;
				e["Rsmallinvertedsuperior"] = 694;
				e["S"] = 83;
				e["SF010000"] = 9484;
				e["SF020000"] = 9492;
				e["SF030000"] = 9488;
				e["SF040000"] = 9496;
				e["SF050000"] = 9532;
				e["SF060000"] = 9516;
				e["SF070000"] = 9524;
				e["SF080000"] = 9500;
				e["SF090000"] = 9508;
				e["SF100000"] = 9472;
				e["SF110000"] = 9474;
				e["SF190000"] = 9569;
				e["SF200000"] = 9570;
				e["SF210000"] = 9558;
				e["SF220000"] = 9557;
				e["SF230000"] = 9571;
				e["SF240000"] = 9553;
				e["SF250000"] = 9559;
				e["SF260000"] = 9565;
				e["SF270000"] = 9564;
				e["SF280000"] = 9563;
				e["SF360000"] = 9566;
				e["SF370000"] = 9567;
				e["SF380000"] = 9562;
				e["SF390000"] = 9556;
				e["SF400000"] = 9577;
				e["SF410000"] = 9574;
				e["SF420000"] = 9568;
				e["SF430000"] = 9552;
				e["SF440000"] = 9580;
				e["SF450000"] = 9575;
				e["SF460000"] = 9576;
				e["SF470000"] = 9572;
				e["SF480000"] = 9573;
				e["SF490000"] = 9561;
				e["SF500000"] = 9560;
				e["SF510000"] = 9554;
				e["SF520000"] = 9555;
				e["SF530000"] = 9579;
				e["SF540000"] = 9578;
				e["Sacute"] = 346;
				e["Sacutedotaccent"] = 7780;
				e["Sampigreek"] = 992;
				e["Scaron"] = 352;
				e["Scarondotaccent"] = 7782;
				e["Scaronsmall"] = 63229;
				e["Scedilla"] = 350;
				e["Schwa"] = 399;
				e["Schwacyrillic"] = 1240;
				e["Schwadieresiscyrillic"] = 1242;
				e["Scircle"] = 9416;
				e["Scircumflex"] = 348;
				e["Scommaaccent"] = 536;
				e["Sdotaccent"] = 7776;
				e["Sdotbelow"] = 7778;
				e["Sdotbelowdotaccent"] = 7784;
				e["Seharmenian"] = 1357;
				e["Sevenroman"] = 8550;
				e["Shaarmenian"] = 1351;
				e["Shacyrillic"] = 1064;
				e["Shchacyrillic"] = 1065;
				e["Sheicoptic"] = 994;
				e["Shhacyrillic"] = 1210;
				e["Shimacoptic"] = 1004;
				e["Sigma"] = 931;
				e["Sixroman"] = 8549;
				e["Smonospace"] = 65331;
				e["Softsigncyrillic"] = 1068;
				e["Ssmall"] = 63347;
				e["Stigmagreek"] = 986;
				e["T"] = 84;
				e["Tau"] = 932;
				e["Tbar"] = 358;
				e["Tcaron"] = 356;
				e["Tcedilla"] = 354;
				e["Tcircle"] = 9417;
				e["Tcircumflexbelow"] = 7792;
				e["Tcommaaccent"] = 354;
				e["Tdotaccent"] = 7786;
				e["Tdotbelow"] = 7788;
				e["Tecyrillic"] = 1058;
				e["Tedescendercyrillic"] = 1196;
				e["Tenroman"] = 8553;
				e["Tetsecyrillic"] = 1204;
				e["Theta"] = 920;
				e["Thook"] = 428;
				e["Thorn"] = 222;
				e["Thornsmall"] = 63486;
				e["Threeroman"] = 8546;
				e["Tildesmall"] = 63230;
				e["Tiwnarmenian"] = 1359;
				e["Tlinebelow"] = 7790;
				e["Tmonospace"] = 65332;
				e["Toarmenian"] = 1337;
				e["Tonefive"] = 444;
				e["Tonesix"] = 388;
				e["Tonetwo"] = 423;
				e["Tretroflexhook"] = 430;
				e["Tsecyrillic"] = 1062;
				e["Tshecyrillic"] = 1035;
				e["Tsmall"] = 63348;
				e["Twelveroman"] = 8555;
				e["Tworoman"] = 8545;
				e["U"] = 85;
				e["Uacute"] = 218;
				e["Uacutesmall"] = 63482;
				e["Ubreve"] = 364;
				e["Ucaron"] = 467;
				e["Ucircle"] = 9418;
				e["Ucircumflex"] = 219;
				e["Ucircumflexbelow"] = 7798;
				e["Ucircumflexsmall"] = 63483;
				e["Ucyrillic"] = 1059;
				e["Udblacute"] = 368;
				e["Udblgrave"] = 532;
				e["Udieresis"] = 220;
				e["Udieresisacute"] = 471;
				e["Udieresisbelow"] = 7794;
				e["Udieresiscaron"] = 473;
				e["Udieresiscyrillic"] = 1264;
				e["Udieresisgrave"] = 475;
				e["Udieresismacron"] = 469;
				e["Udieresissmall"] = 63484;
				e["Udotbelow"] = 7908;
				e["Ugrave"] = 217;
				e["Ugravesmall"] = 63481;
				e["Uhookabove"] = 7910;
				e["Uhorn"] = 431;
				e["Uhornacute"] = 7912;
				e["Uhorndotbelow"] = 7920;
				e["Uhorngrave"] = 7914;
				e["Uhornhookabove"] = 7916;
				e["Uhorntilde"] = 7918;
				e["Uhungarumlaut"] = 368;
				e["Uhungarumlautcyrillic"] = 1266;
				e["Uinvertedbreve"] = 534;
				e["Ukcyrillic"] = 1144;
				e["Umacron"] = 362;
				e["Umacroncyrillic"] = 1262;
				e["Umacrondieresis"] = 7802;
				e["Umonospace"] = 65333;
				e["Uogonek"] = 370;
				e["Upsilon"] = 933;
				e["Upsilon1"] = 978;
				e["Upsilonacutehooksymbolgreek"] = 979;
				e["Upsilonafrican"] = 433;
				e["Upsilondieresis"] = 939;
				e["Upsilondieresishooksymbolgreek"] = 980;
				e["Upsilonhooksymbol"] = 978;
				e["Upsilontonos"] = 910;
				e["Uring"] = 366;
				e["Ushortcyrillic"] = 1038;
				e["Usmall"] = 63349;
				e["Ustraightcyrillic"] = 1198;
				e["Ustraightstrokecyrillic"] = 1200;
				e["Utilde"] = 360;
				e["Utildeacute"] = 7800;
				e["Utildebelow"] = 7796;
				e["V"] = 86;
				e["Vcircle"] = 9419;
				e["Vdotbelow"] = 7806;
				e["Vecyrillic"] = 1042;
				e["Vewarmenian"] = 1358;
				e["Vhook"] = 434;
				e["Vmonospace"] = 65334;
				e["Voarmenian"] = 1352;
				e["Vsmall"] = 63350;
				e["Vtilde"] = 7804;
				e["W"] = 87;
				e["Wacute"] = 7810;
				e["Wcircle"] = 9420;
				e["Wcircumflex"] = 372;
				e["Wdieresis"] = 7812;
				e["Wdotaccent"] = 7814;
				e["Wdotbelow"] = 7816;
				e["Wgrave"] = 7808;
				e["Wmonospace"] = 65335;
				e["Wsmall"] = 63351;
				e["X"] = 88;
				e["Xcircle"] = 9421;
				e["Xdieresis"] = 7820;
				e["Xdotaccent"] = 7818;
				e["Xeharmenian"] = 1341;
				e["Xi"] = 926;
				e["Xmonospace"] = 65336;
				e["Xsmall"] = 63352;
				e["Y"] = 89;
				e["Yacute"] = 221;
				e["Yacutesmall"] = 63485;
				e["Yatcyrillic"] = 1122;
				e["Ycircle"] = 9422;
				e["Ycircumflex"] = 374;
				e["Ydieresis"] = 376;
				e["Ydieresissmall"] = 63487;
				e["Ydotaccent"] = 7822;
				e["Ydotbelow"] = 7924;
				e["Yericyrillic"] = 1067;
				e["Yerudieresiscyrillic"] = 1272;
				e["Ygrave"] = 7922;
				e["Yhook"] = 435;
				e["Yhookabove"] = 7926;
				e["Yiarmenian"] = 1349;
				e["Yicyrillic"] = 1031;
				e["Yiwnarmenian"] = 1362;
				e["Ymonospace"] = 65337;
				e["Ysmall"] = 63353;
				e["Ytilde"] = 7928;
				e["Yusbigcyrillic"] = 1130;
				e["Yusbigiotifiedcyrillic"] = 1132;
				e["Yuslittlecyrillic"] = 1126;
				e["Yuslittleiotifiedcyrillic"] = 1128;
				e["Z"] = 90;
				e["Zaarmenian"] = 1334;
				e["Zacute"] = 377;
				e["Zcaron"] = 381;
				e["Zcaronsmall"] = 63231;
				e["Zcircle"] = 9423;
				e["Zcircumflex"] = 7824;
				e["Zdot"] = 379;
				e["Zdotaccent"] = 379;
				e["Zdotbelow"] = 7826;
				e["Zecyrillic"] = 1047;
				e["Zedescendercyrillic"] = 1176;
				e["Zedieresiscyrillic"] = 1246;
				e["Zeta"] = 918;
				e["Zhearmenian"] = 1338;
				e["Zhebrevecyrillic"] = 1217;
				e["Zhecyrillic"] = 1046;
				e["Zhedescendercyrillic"] = 1174;
				e["Zhedieresiscyrillic"] = 1244;
				e["Zlinebelow"] = 7828;
				e["Zmonospace"] = 65338;
				e["Zsmall"] = 63354;
				e["Zstroke"] = 437;
				e["a"] = 97;
				e["aabengali"] = 2438;
				e["aacute"] = 225;
				e["aadeva"] = 2310;
				e["aagujarati"] = 2694;
				e["aagurmukhi"] = 2566;
				e["aamatragurmukhi"] = 2622;
				e["aarusquare"] = 13059;
				e["aavowelsignbengali"] = 2494;
				e["aavowelsigndeva"] = 2366;
				e["aavowelsigngujarati"] = 2750;
				e["abbreviationmarkarmenian"] = 1375;
				e["abbreviationsigndeva"] = 2416;
				e["abengali"] = 2437;
				e["abopomofo"] = 12570;
				e["abreve"] = 259;
				e["abreveacute"] = 7855;
				e["abrevecyrillic"] = 1233;
				e["abrevedotbelow"] = 7863;
				e["abrevegrave"] = 7857;
				e["abrevehookabove"] = 7859;
				e["abrevetilde"] = 7861;
				e["acaron"] = 462;
				e["acircle"] = 9424;
				e["acircumflex"] = 226;
				e["acircumflexacute"] = 7845;
				e["acircumflexdotbelow"] = 7853;
				e["acircumflexgrave"] = 7847;
				e["acircumflexhookabove"] = 7849;
				e["acircumflextilde"] = 7851;
				e["acute"] = 180;
				e["acutebelowcmb"] = 791;
				e["acutecmb"] = 769;
				e["acutecomb"] = 769;
				e["acutedeva"] = 2388;
				e["acutelowmod"] = 719;
				e["acutetonecmb"] = 833;
				e["acyrillic"] = 1072;
				e["adblgrave"] = 513;
				e["addakgurmukhi"] = 2673;
				e["adeva"] = 2309;
				e["adieresis"] = 228;
				e["adieresiscyrillic"] = 1235;
				e["adieresismacron"] = 479;
				e["adotbelow"] = 7841;
				e["adotmacron"] = 481;
				e["ae"] = 230;
				e["aeacute"] = 509;
				e["aekorean"] = 12624;
				e["aemacron"] = 483;
				e["afii00208"] = 8213;
				e["afii08941"] = 8356;
				e["afii10017"] = 1040;
				e["afii10018"] = 1041;
				e["afii10019"] = 1042;
				e["afii10020"] = 1043;
				e["afii10021"] = 1044;
				e["afii10022"] = 1045;
				e["afii10023"] = 1025;
				e["afii10024"] = 1046;
				e["afii10025"] = 1047;
				e["afii10026"] = 1048;
				e["afii10027"] = 1049;
				e["afii10028"] = 1050;
				e["afii10029"] = 1051;
				e["afii10030"] = 1052;
				e["afii10031"] = 1053;
				e["afii10032"] = 1054;
				e["afii10033"] = 1055;
				e["afii10034"] = 1056;
				e["afii10035"] = 1057;
				e["afii10036"] = 1058;
				e["afii10037"] = 1059;
				e["afii10038"] = 1060;
				e["afii10039"] = 1061;
				e["afii10040"] = 1062;
				e["afii10041"] = 1063;
				e["afii10042"] = 1064;
				e["afii10043"] = 1065;
				e["afii10044"] = 1066;
				e["afii10045"] = 1067;
				e["afii10046"] = 1068;
				e["afii10047"] = 1069;
				e["afii10048"] = 1070;
				e["afii10049"] = 1071;
				e["afii10050"] = 1168;
				e["afii10051"] = 1026;
				e["afii10052"] = 1027;
				e["afii10053"] = 1028;
				e["afii10054"] = 1029;
				e["afii10055"] = 1030;
				e["afii10056"] = 1031;
				e["afii10057"] = 1032;
				e["afii10058"] = 1033;
				e["afii10059"] = 1034;
				e["afii10060"] = 1035;
				e["afii10061"] = 1036;
				e["afii10062"] = 1038;
				e["afii10063"] = 63172;
				e["afii10064"] = 63173;
				e["afii10065"] = 1072;
				e["afii10066"] = 1073;
				e["afii10067"] = 1074;
				e["afii10068"] = 1075;
				e["afii10069"] = 1076;
				e["afii10070"] = 1077;
				e["afii10071"] = 1105;
				e["afii10072"] = 1078;
				e["afii10073"] = 1079;
				e["afii10074"] = 1080;
				e["afii10075"] = 1081;
				e["afii10076"] = 1082;
				e["afii10077"] = 1083;
				e["afii10078"] = 1084;
				e["afii10079"] = 1085;
				e["afii10080"] = 1086;
				e["afii10081"] = 1087;
				e["afii10082"] = 1088;
				e["afii10083"] = 1089;
				e["afii10084"] = 1090;
				e["afii10085"] = 1091;
				e["afii10086"] = 1092;
				e["afii10087"] = 1093;
				e["afii10088"] = 1094;
				e["afii10089"] = 1095;
				e["afii10090"] = 1096;
				e["afii10091"] = 1097;
				e["afii10092"] = 1098;
				e["afii10093"] = 1099;
				e["afii10094"] = 1100;
				e["afii10095"] = 1101;
				e["afii10096"] = 1102;
				e["afii10097"] = 1103;
				e["afii10098"] = 1169;
				e["afii10099"] = 1106;
				e["afii10100"] = 1107;
				e["afii10101"] = 1108;
				e["afii10102"] = 1109;
				e["afii10103"] = 1110;
				e["afii10104"] = 1111;
				e["afii10105"] = 1112;
				e["afii10106"] = 1113;
				e["afii10107"] = 1114;
				e["afii10108"] = 1115;
				e["afii10109"] = 1116;
				e["afii10110"] = 1118;
				e["afii10145"] = 1039;
				e["afii10146"] = 1122;
				e["afii10147"] = 1138;
				e["afii10148"] = 1140;
				e["afii10192"] = 63174;
				e["afii10193"] = 1119;
				e["afii10194"] = 1123;
				e["afii10195"] = 1139;
				e["afii10196"] = 1141;
				e["afii10831"] = 63175;
				e["afii10832"] = 63176;
				e["afii10846"] = 1241;
				e["afii299"] = 8206;
				e["afii300"] = 8207;
				e["afii301"] = 8205;
				e["afii57381"] = 1642;
				e["afii57388"] = 1548;
				e["afii57392"] = 1632;
				e["afii57393"] = 1633;
				e["afii57394"] = 1634;
				e["afii57395"] = 1635;
				e["afii57396"] = 1636;
				e["afii57397"] = 1637;
				e["afii57398"] = 1638;
				e["afii57399"] = 1639;
				e["afii57400"] = 1640;
				e["afii57401"] = 1641;
				e["afii57403"] = 1563;
				e["afii57407"] = 1567;
				e["afii57409"] = 1569;
				e["afii57410"] = 1570;
				e["afii57411"] = 1571;
				e["afii57412"] = 1572;
				e["afii57413"] = 1573;
				e["afii57414"] = 1574;
				e["afii57415"] = 1575;
				e["afii57416"] = 1576;
				e["afii57417"] = 1577;
				e["afii57418"] = 1578;
				e["afii57419"] = 1579;
				e["afii57420"] = 1580;
				e["afii57421"] = 1581;
				e["afii57422"] = 1582;
				e["afii57423"] = 1583;
				e["afii57424"] = 1584;
				e["afii57425"] = 1585;
				e["afii57426"] = 1586;
				e["afii57427"] = 1587;
				e["afii57428"] = 1588;
				e["afii57429"] = 1589;
				e["afii57430"] = 1590;
				e["afii57431"] = 1591;
				e["afii57432"] = 1592;
				e["afii57433"] = 1593;
				e["afii57434"] = 1594;
				e["afii57440"] = 1600;
				e["afii57441"] = 1601;
				e["afii57442"] = 1602;
				e["afii57443"] = 1603;
				e["afii57444"] = 1604;
				e["afii57445"] = 1605;
				e["afii57446"] = 1606;
				e["afii57448"] = 1608;
				e["afii57449"] = 1609;
				e["afii57450"] = 1610;
				e["afii57451"] = 1611;
				e["afii57452"] = 1612;
				e["afii57453"] = 1613;
				e["afii57454"] = 1614;
				e["afii57455"] = 1615;
				e["afii57456"] = 1616;
				e["afii57457"] = 1617;
				e["afii57458"] = 1618;
				e["afii57470"] = 1607;
				e["afii57505"] = 1700;
				e["afii57506"] = 1662;
				e["afii57507"] = 1670;
				e["afii57508"] = 1688;
				e["afii57509"] = 1711;
				e["afii57511"] = 1657;
				e["afii57512"] = 1672;
				e["afii57513"] = 1681;
				e["afii57514"] = 1722;
				e["afii57519"] = 1746;
				e["afii57534"] = 1749;
				e["afii57636"] = 8362;
				e["afii57645"] = 1470;
				e["afii57658"] = 1475;
				e["afii57664"] = 1488;
				e["afii57665"] = 1489;
				e["afii57666"] = 1490;
				e["afii57667"] = 1491;
				e["afii57668"] = 1492;
				e["afii57669"] = 1493;
				e["afii57670"] = 1494;
				e["afii57671"] = 1495;
				e["afii57672"] = 1496;
				e["afii57673"] = 1497;
				e["afii57674"] = 1498;
				e["afii57675"] = 1499;
				e["afii57676"] = 1500;
				e["afii57677"] = 1501;
				e["afii57678"] = 1502;
				e["afii57679"] = 1503;
				e["afii57680"] = 1504;
				e["afii57681"] = 1505;
				e["afii57682"] = 1506;
				e["afii57683"] = 1507;
				e["afii57684"] = 1508;
				e["afii57685"] = 1509;
				e["afii57686"] = 1510;
				e["afii57687"] = 1511;
				e["afii57688"] = 1512;
				e["afii57689"] = 1513;
				e["afii57690"] = 1514;
				e["afii57694"] = 64298;
				e["afii57695"] = 64299;
				e["afii57700"] = 64331;
				e["afii57705"] = 64287;
				e["afii57716"] = 1520;
				e["afii57717"] = 1521;
				e["afii57718"] = 1522;
				e["afii57723"] = 64309;
				e["afii57793"] = 1460;
				e["afii57794"] = 1461;
				e["afii57795"] = 1462;
				e["afii57796"] = 1467;
				e["afii57797"] = 1464;
				e["afii57798"] = 1463;
				e["afii57799"] = 1456;
				e["afii57800"] = 1458;
				e["afii57801"] = 1457;
				e["afii57802"] = 1459;
				e["afii57803"] = 1474;
				e["afii57804"] = 1473;
				e["afii57806"] = 1465;
				e["afii57807"] = 1468;
				e["afii57839"] = 1469;
				e["afii57841"] = 1471;
				e["afii57842"] = 1472;
				e["afii57929"] = 700;
				e["afii61248"] = 8453;
				e["afii61289"] = 8467;
				e["afii61352"] = 8470;
				e["afii61573"] = 8236;
				e["afii61574"] = 8237;
				e["afii61575"] = 8238;
				e["afii61664"] = 8204;
				e["afii63167"] = 1645;
				e["afii64937"] = 701;
				e["agrave"] = 224;
				e["agujarati"] = 2693;
				e["agurmukhi"] = 2565;
				e["ahiragana"] = 12354;
				e["ahookabove"] = 7843;
				e["aibengali"] = 2448;
				e["aibopomofo"] = 12574;
				e["aideva"] = 2320;
				e["aiecyrillic"] = 1237;
				e["aigujarati"] = 2704;
				e["aigurmukhi"] = 2576;
				e["aimatragurmukhi"] = 2632;
				e["ainarabic"] = 1593;
				e["ainfinalarabic"] = 65226;
				e["aininitialarabic"] = 65227;
				e["ainmedialarabic"] = 65228;
				e["ainvertedbreve"] = 515;
				e["aivowelsignbengali"] = 2504;
				e["aivowelsigndeva"] = 2376;
				e["aivowelsigngujarati"] = 2760;
				e["akatakana"] = 12450;
				e["akatakanahalfwidth"] = 65393;
				e["akorean"] = 12623;
				e["alef"] = 1488;
				e["alefarabic"] = 1575;
				e["alefdageshhebrew"] = 64304;
				e["aleffinalarabic"] = 65166;
				e["alefhamzaabovearabic"] = 1571;
				e["alefhamzaabovefinalarabic"] = 65156;
				e["alefhamzabelowarabic"] = 1573;
				e["alefhamzabelowfinalarabic"] = 65160;
				e["alefhebrew"] = 1488;
				e["aleflamedhebrew"] = 64335;
				e["alefmaddaabovearabic"] = 1570;
				e["alefmaddaabovefinalarabic"] = 65154;
				e["alefmaksuraarabic"] = 1609;
				e["alefmaksurafinalarabic"] = 65264;
				e["alefmaksurainitialarabic"] = 65267;
				e["alefmaksuramedialarabic"] = 65268;
				e["alefpatahhebrew"] = 64302;
				e["alefqamatshebrew"] = 64303;
				e["aleph"] = 8501;
				e["allequal"] = 8780;
				e["alpha"] = 945;
				e["alphatonos"] = 940;
				e["amacron"] = 257;
				e["amonospace"] = 65345;
				e["ampersand"] = 38;
				e["ampersandmonospace"] = 65286;
				e["ampersandsmall"] = 63270;
				e["amsquare"] = 13250;
				e["anbopomofo"] = 12578;
				e["angbopomofo"] = 12580;
				e["angbracketleft"] = 12296;
				e["angbracketright"] = 12297;
				e["angkhankhuthai"] = 3674;
				e["angle"] = 8736;
				e["anglebracketleft"] = 12296;
				e["anglebracketleftvertical"] = 65087;
				e["anglebracketright"] = 12297;
				e["anglebracketrightvertical"] = 65088;
				e["angleleft"] = 9001;
				e["angleright"] = 9002;
				e["angstrom"] = 8491;
				e["anoteleia"] = 903;
				e["anudattadeva"] = 2386;
				e["anusvarabengali"] = 2434;
				e["anusvaradeva"] = 2306;
				e["anusvaragujarati"] = 2690;
				e["aogonek"] = 261;
				e["apaatosquare"] = 13056;
				e["aparen"] = 9372;
				e["apostrophearmenian"] = 1370;
				e["apostrophemod"] = 700;
				e["apple"] = 63743;
				e["approaches"] = 8784;
				e["approxequal"] = 8776;
				e["approxequalorimage"] = 8786;
				e["approximatelyequal"] = 8773;
				e["araeaekorean"] = 12686;
				e["araeakorean"] = 12685;
				e["arc"] = 8978;
				e["arighthalfring"] = 7834;
				e["aring"] = 229;
				e["aringacute"] = 507;
				e["aringbelow"] = 7681;
				e["arrowboth"] = 8596;
				e["arrowdashdown"] = 8675;
				e["arrowdashleft"] = 8672;
				e["arrowdashright"] = 8674;
				e["arrowdashup"] = 8673;
				e["arrowdblboth"] = 8660;
				e["arrowdbldown"] = 8659;
				e["arrowdblleft"] = 8656;
				e["arrowdblright"] = 8658;
				e["arrowdblup"] = 8657;
				e["arrowdown"] = 8595;
				e["arrowdownleft"] = 8601;
				e["arrowdownright"] = 8600;
				e["arrowdownwhite"] = 8681;
				e["arrowheaddownmod"] = 709;
				e["arrowheadleftmod"] = 706;
				e["arrowheadrightmod"] = 707;
				e["arrowheadupmod"] = 708;
				e["arrowhorizex"] = 63719;
				e["arrowleft"] = 8592;
				e["arrowleftdbl"] = 8656;
				e["arrowleftdblstroke"] = 8653;
				e["arrowleftoverright"] = 8646;
				e["arrowleftwhite"] = 8678;
				e["arrowright"] = 8594;
				e["arrowrightdblstroke"] = 8655;
				e["arrowrightheavy"] = 10142;
				e["arrowrightoverleft"] = 8644;
				e["arrowrightwhite"] = 8680;
				e["arrowtableft"] = 8676;
				e["arrowtabright"] = 8677;
				e["arrowup"] = 8593;
				e["arrowupdn"] = 8597;
				e["arrowupdnbse"] = 8616;
				e["arrowupdownbase"] = 8616;
				e["arrowupleft"] = 8598;
				e["arrowupleftofdown"] = 8645;
				e["arrowupright"] = 8599;
				e["arrowupwhite"] = 8679;
				e["arrowvertex"] = 63718;
				e["asciicircum"] = 94;
				e["asciicircummonospace"] = 65342;
				e["asciitilde"] = 126;
				e["asciitildemonospace"] = 65374;
				e["ascript"] = 593;
				e["ascriptturned"] = 594;
				e["asmallhiragana"] = 12353;
				e["asmallkatakana"] = 12449;
				e["asmallkatakanahalfwidth"] = 65383;
				e["asterisk"] = 42;
				e["asteriskaltonearabic"] = 1645;
				e["asteriskarabic"] = 1645;
				e["asteriskmath"] = 8727;
				e["asteriskmonospace"] = 65290;
				e["asterisksmall"] = 65121;
				e["asterism"] = 8258;
				e["asuperior"] = 63209;
				e["asymptoticallyequal"] = 8771;
				e["at"] = 64;
				e["atilde"] = 227;
				e["atmonospace"] = 65312;
				e["atsmall"] = 65131;
				e["aturned"] = 592;
				e["aubengali"] = 2452;
				e["aubopomofo"] = 12576;
				e["audeva"] = 2324;
				e["augujarati"] = 2708;
				e["augurmukhi"] = 2580;
				e["aulengthmarkbengali"] = 2519;
				e["aumatragurmukhi"] = 2636;
				e["auvowelsignbengali"] = 2508;
				e["auvowelsigndeva"] = 2380;
				e["auvowelsigngujarati"] = 2764;
				e["avagrahadeva"] = 2365;
				e["aybarmenian"] = 1377;
				e["ayin"] = 1506;
				e["ayinaltonehebrew"] = 64288;
				e["ayinhebrew"] = 1506;
				e["b"] = 98;
				e["babengali"] = 2476;
				e["backslash"] = 92;
				e["backslashmonospace"] = 65340;
				e["badeva"] = 2348;
				e["bagujarati"] = 2732;
				e["bagurmukhi"] = 2604;
				e["bahiragana"] = 12400;
				e["bahtthai"] = 3647;
				e["bakatakana"] = 12496;
				e["bar"] = 124;
				e["barmonospace"] = 65372;
				e["bbopomofo"] = 12549;
				e["bcircle"] = 9425;
				e["bdotaccent"] = 7683;
				e["bdotbelow"] = 7685;
				e["beamedsixteenthnotes"] = 9836;
				e["because"] = 8757;
				e["becyrillic"] = 1073;
				e["beharabic"] = 1576;
				e["behfinalarabic"] = 65168;
				e["behinitialarabic"] = 65169;
				e["behiragana"] = 12409;
				e["behmedialarabic"] = 65170;
				e["behmeeminitialarabic"] = 64671;
				e["behmeemisolatedarabic"] = 64520;
				e["behnoonfinalarabic"] = 64621;
				e["bekatakana"] = 12505;
				e["benarmenian"] = 1378;
				e["bet"] = 1489;
				e["beta"] = 946;
				e["betasymbolgreek"] = 976;
				e["betdagesh"] = 64305;
				e["betdageshhebrew"] = 64305;
				e["bethebrew"] = 1489;
				e["betrafehebrew"] = 64332;
				e["bhabengali"] = 2477;
				e["bhadeva"] = 2349;
				e["bhagujarati"] = 2733;
				e["bhagurmukhi"] = 2605;
				e["bhook"] = 595;
				e["bihiragana"] = 12403;
				e["bikatakana"] = 12499;
				e["bilabialclick"] = 664;
				e["bindigurmukhi"] = 2562;
				e["birusquare"] = 13105;
				e["blackcircle"] = 9679;
				e["blackdiamond"] = 9670;
				e["blackdownpointingtriangle"] = 9660;
				e["blackleftpointingpointer"] = 9668;
				e["blackleftpointingtriangle"] = 9664;
				e["blacklenticularbracketleft"] = 12304;
				e["blacklenticularbracketleftvertical"] = 65083;
				e["blacklenticularbracketright"] = 12305;
				e["blacklenticularbracketrightvertical"] = 65084;
				e["blacklowerlefttriangle"] = 9699;
				e["blacklowerrighttriangle"] = 9698;
				e["blackrectangle"] = 9644;
				e["blackrightpointingpointer"] = 9658;
				e["blackrightpointingtriangle"] = 9654;
				e["blacksmallsquare"] = 9642;
				e["blacksmilingface"] = 9787;
				e["blacksquare"] = 9632;
				e["blackstar"] = 9733;
				e["blackupperlefttriangle"] = 9700;
				e["blackupperrighttriangle"] = 9701;
				e["blackuppointingsmalltriangle"] = 9652;
				e["blackuppointingtriangle"] = 9650;
				e["blank"] = 9251;
				e["blinebelow"] = 7687;
				e["block"] = 9608;
				e["bmonospace"] = 65346;
				e["bobaimaithai"] = 3610;
				e["bohiragana"] = 12412;
				e["bokatakana"] = 12508;
				e["bparen"] = 9373;
				e["bqsquare"] = 13251;
				e["braceex"] = 63732;
				e["braceleft"] = 123;
				e["braceleftbt"] = 63731;
				e["braceleftmid"] = 63730;
				e["braceleftmonospace"] = 65371;
				e["braceleftsmall"] = 65115;
				e["bracelefttp"] = 63729;
				e["braceleftvertical"] = 65079;
				e["braceright"] = 125;
				e["bracerightbt"] = 63742;
				e["bracerightmid"] = 63741;
				e["bracerightmonospace"] = 65373;
				e["bracerightsmall"] = 65116;
				e["bracerighttp"] = 63740;
				e["bracerightvertical"] = 65080;
				e["bracketleft"] = 91;
				e["bracketleftbt"] = 63728;
				e["bracketleftex"] = 63727;
				e["bracketleftmonospace"] = 65339;
				e["bracketlefttp"] = 63726;
				e["bracketright"] = 93;
				e["bracketrightbt"] = 63739;
				e["bracketrightex"] = 63738;
				e["bracketrightmonospace"] = 65341;
				e["bracketrighttp"] = 63737;
				e["breve"] = 728;
				e["brevebelowcmb"] = 814;
				e["brevecmb"] = 774;
				e["breveinvertedbelowcmb"] = 815;
				e["breveinvertedcmb"] = 785;
				e["breveinverteddoublecmb"] = 865;
				e["bridgebelowcmb"] = 810;
				e["bridgeinvertedbelowcmb"] = 826;
				e["brokenbar"] = 166;
				e["bstroke"] = 384;
				e["bsuperior"] = 63210;
				e["btopbar"] = 387;
				e["buhiragana"] = 12406;
				e["bukatakana"] = 12502;
				e["bullet"] = 8226;
				e["bulletinverse"] = 9688;
				e["bulletoperator"] = 8729;
				e["bullseye"] = 9678;
				e["c"] = 99;
				e["caarmenian"] = 1390;
				e["cabengali"] = 2458;
				e["cacute"] = 263;
				e["cadeva"] = 2330;
				e["cagujarati"] = 2714;
				e["cagurmukhi"] = 2586;
				e["calsquare"] = 13192;
				e["candrabindubengali"] = 2433;
				e["candrabinducmb"] = 784;
				e["candrabindudeva"] = 2305;
				e["candrabindugujarati"] = 2689;
				e["capslock"] = 8682;
				e["careof"] = 8453;
				e["caron"] = 711;
				e["caronbelowcmb"] = 812;
				e["caroncmb"] = 780;
				e["carriagereturn"] = 8629;
				e["cbopomofo"] = 12568;
				e["ccaron"] = 269;
				e["ccedilla"] = 231;
				e["ccedillaacute"] = 7689;
				e["ccircle"] = 9426;
				e["ccircumflex"] = 265;
				e["ccurl"] = 597;
				e["cdot"] = 267;
				e["cdotaccent"] = 267;
				e["cdsquare"] = 13253;
				e["cedilla"] = 184;
				e["cedillacmb"] = 807;
				e["cent"] = 162;
				e["centigrade"] = 8451;
				e["centinferior"] = 63199;
				e["centmonospace"] = 65504;
				e["centoldstyle"] = 63394;
				e["centsuperior"] = 63200;
				e["chaarmenian"] = 1401;
				e["chabengali"] = 2459;
				e["chadeva"] = 2331;
				e["chagujarati"] = 2715;
				e["chagurmukhi"] = 2587;
				e["chbopomofo"] = 12564;
				e["cheabkhasiancyrillic"] = 1213;
				e["checkmark"] = 10003;
				e["checyrillic"] = 1095;
				e["chedescenderabkhasiancyrillic"] = 1215;
				e["chedescendercyrillic"] = 1207;
				e["chedieresiscyrillic"] = 1269;
				e["cheharmenian"] = 1395;
				e["chekhakassiancyrillic"] = 1228;
				e["cheverticalstrokecyrillic"] = 1209;
				e["chi"] = 967;
				e["chieuchacirclekorean"] = 12919;
				e["chieuchaparenkorean"] = 12823;
				e["chieuchcirclekorean"] = 12905;
				e["chieuchkorean"] = 12618;
				e["chieuchparenkorean"] = 12809;
				e["chochangthai"] = 3594;
				e["chochanthai"] = 3592;
				e["chochingthai"] = 3593;
				e["chochoethai"] = 3596;
				e["chook"] = 392;
				e["cieucacirclekorean"] = 12918;
				e["cieucaparenkorean"] = 12822;
				e["cieuccirclekorean"] = 12904;
				e["cieuckorean"] = 12616;
				e["cieucparenkorean"] = 12808;
				e["cieucuparenkorean"] = 12828;
				e["circle"] = 9675;
				e["circlecopyrt"] = 169;
				e["circlemultiply"] = 8855;
				e["circleot"] = 8857;
				e["circleplus"] = 8853;
				e["circlepostalmark"] = 12342;
				e["circlewithlefthalfblack"] = 9680;
				e["circlewithrighthalfblack"] = 9681;
				e["circumflex"] = 710;
				e["circumflexbelowcmb"] = 813;
				e["circumflexcmb"] = 770;
				e["clear"] = 8999;
				e["clickalveolar"] = 450;
				e["clickdental"] = 448;
				e["clicklateral"] = 449;
				e["clickretroflex"] = 451;
				e["club"] = 9827;
				e["clubsuitblack"] = 9827;
				e["clubsuitwhite"] = 9831;
				e["cmcubedsquare"] = 13220;
				e["cmonospace"] = 65347;
				e["cmsquaredsquare"] = 13216;
				e["coarmenian"] = 1409;
				e["colon"] = 58;
				e["colonmonetary"] = 8353;
				e["colonmonospace"] = 65306;
				e["colonsign"] = 8353;
				e["colonsmall"] = 65109;
				e["colontriangularhalfmod"] = 721;
				e["colontriangularmod"] = 720;
				e["comma"] = 44;
				e["commaabovecmb"] = 787;
				e["commaaboverightcmb"] = 789;
				e["commaaccent"] = 63171;
				e["commaarabic"] = 1548;
				e["commaarmenian"] = 1373;
				e["commainferior"] = 63201;
				e["commamonospace"] = 65292;
				e["commareversedabovecmb"] = 788;
				e["commareversedmod"] = 701;
				e["commasmall"] = 65104;
				e["commasuperior"] = 63202;
				e["commaturnedabovecmb"] = 786;
				e["commaturnedmod"] = 699;
				e["compass"] = 9788;
				e["congruent"] = 8773;
				e["contourintegral"] = 8750;
				e["control"] = 8963;
				e["controlACK"] = 6;
				e["controlBEL"] = 7;
				e["controlBS"] = 8;
				e["controlCAN"] = 24;
				e["controlCR"] = 13;
				e["controlDC1"] = 17;
				e["controlDC2"] = 18;
				e["controlDC3"] = 19;
				e["controlDC4"] = 20;
				e["controlDEL"] = 127;
				e["controlDLE"] = 16;
				e["controlEM"] = 25;
				e["controlENQ"] = 5;
				e["controlEOT"] = 4;
				e["controlESC"] = 27;
				e["controlETB"] = 23;
				e["controlETX"] = 3;
				e["controlFF"] = 12;
				e["controlFS"] = 28;
				e["controlGS"] = 29;
				e["controlHT"] = 9;
				e["controlLF"] = 10;
				e["controlNAK"] = 21;
				e["controlNULL"] = 0;
				e["controlRS"] = 30;
				e["controlSI"] = 15;
				e["controlSO"] = 14;
				e["controlSOT"] = 2;
				e["controlSTX"] = 1;
				e["controlSUB"] = 26;
				e["controlSYN"] = 22;
				e["controlUS"] = 31;
				e["controlVT"] = 11;
				e["copyright"] = 169;
				e["copyrightsans"] = 63721;
				e["copyrightserif"] = 63193;
				e["cornerbracketleft"] = 12300;
				e["cornerbracketlefthalfwidth"] = 65378;
				e["cornerbracketleftvertical"] = 65089;
				e["cornerbracketright"] = 12301;
				e["cornerbracketrighthalfwidth"] = 65379;
				e["cornerbracketrightvertical"] = 65090;
				e["corporationsquare"] = 13183;
				e["cosquare"] = 13255;
				e["coverkgsquare"] = 13254;
				e["cparen"] = 9374;
				e["cruzeiro"] = 8354;
				e["cstretched"] = 663;
				e["curlyand"] = 8911;
				e["curlyor"] = 8910;
				e["currency"] = 164;
				e["cyrBreve"] = 63185;
				e["cyrFlex"] = 63186;
				e["cyrbreve"] = 63188;
				e["cyrflex"] = 63189;
				e["d"] = 100;
				e["daarmenian"] = 1380;
				e["dabengali"] = 2470;
				e["dadarabic"] = 1590;
				e["dadeva"] = 2342;
				e["dadfinalarabic"] = 65214;
				e["dadinitialarabic"] = 65215;
				e["dadmedialarabic"] = 65216;
				e["dagesh"] = 1468;
				e["dageshhebrew"] = 1468;
				e["dagger"] = 8224;
				e["daggerdbl"] = 8225;
				e["dagujarati"] = 2726;
				e["dagurmukhi"] = 2598;
				e["dahiragana"] = 12384;
				e["dakatakana"] = 12480;
				e["dalarabic"] = 1583;
				e["dalet"] = 1491;
				e["daletdagesh"] = 64307;
				e["daletdageshhebrew"] = 64307;
				e["dalethebrew"] = 1491;
				e["dalfinalarabic"] = 65194;
				e["dammaarabic"] = 1615;
				e["dammalowarabic"] = 1615;
				e["dammatanaltonearabic"] = 1612;
				e["dammatanarabic"] = 1612;
				e["danda"] = 2404;
				e["dargahebrew"] = 1447;
				e["dargalefthebrew"] = 1447;
				e["dasiapneumatacyrilliccmb"] = 1157;
				e["dblGrave"] = 63187;
				e["dblanglebracketleft"] = 12298;
				e["dblanglebracketleftvertical"] = 65085;
				e["dblanglebracketright"] = 12299;
				e["dblanglebracketrightvertical"] = 65086;
				e["dblarchinvertedbelowcmb"] = 811;
				e["dblarrowleft"] = 8660;
				e["dblarrowright"] = 8658;
				e["dbldanda"] = 2405;
				e["dblgrave"] = 63190;
				e["dblgravecmb"] = 783;
				e["dblintegral"] = 8748;
				e["dbllowline"] = 8215;
				e["dbllowlinecmb"] = 819;
				e["dbloverlinecmb"] = 831;
				e["dblprimemod"] = 698;
				e["dblverticalbar"] = 8214;
				e["dblverticallineabovecmb"] = 782;
				e["dbopomofo"] = 12553;
				e["dbsquare"] = 13256;
				e["dcaron"] = 271;
				e["dcedilla"] = 7697;
				e["dcircle"] = 9427;
				e["dcircumflexbelow"] = 7699;
				e["dcroat"] = 273;
				e["ddabengali"] = 2465;
				e["ddadeva"] = 2337;
				e["ddagujarati"] = 2721;
				e["ddagurmukhi"] = 2593;
				e["ddalarabic"] = 1672;
				e["ddalfinalarabic"] = 64393;
				e["dddhadeva"] = 2396;
				e["ddhabengali"] = 2466;
				e["ddhadeva"] = 2338;
				e["ddhagujarati"] = 2722;
				e["ddhagurmukhi"] = 2594;
				e["ddotaccent"] = 7691;
				e["ddotbelow"] = 7693;
				e["decimalseparatorarabic"] = 1643;
				e["decimalseparatorpersian"] = 1643;
				e["decyrillic"] = 1076;
				e["degree"] = 176;
				e["dehihebrew"] = 1453;
				e["dehiragana"] = 12391;
				e["deicoptic"] = 1007;
				e["dekatakana"] = 12487;
				e["deleteleft"] = 9003;
				e["deleteright"] = 8998;
				e["delta"] = 948;
				e["deltaturned"] = 397;
				e["denominatorminusonenumeratorbengali"] = 2552;
				e["dezh"] = 676;
				e["dhabengali"] = 2471;
				e["dhadeva"] = 2343;
				e["dhagujarati"] = 2727;
				e["dhagurmukhi"] = 2599;
				e["dhook"] = 599;
				e["dialytikatonos"] = 901;
				e["dialytikatonoscmb"] = 836;
				e["diamond"] = 9830;
				e["diamondsuitwhite"] = 9826;
				e["dieresis"] = 168;
				e["dieresisacute"] = 63191;
				e["dieresisbelowcmb"] = 804;
				e["dieresiscmb"] = 776;
				e["dieresisgrave"] = 63192;
				e["dieresistonos"] = 901;
				e["dihiragana"] = 12386;
				e["dikatakana"] = 12482;
				e["dittomark"] = 12291;
				e["divide"] = 247;
				e["divides"] = 8739;
				e["divisionslash"] = 8725;
				e["djecyrillic"] = 1106;
				e["dkshade"] = 9619;
				e["dlinebelow"] = 7695;
				e["dlsquare"] = 13207;
				e["dmacron"] = 273;
				e["dmonospace"] = 65348;
				e["dnblock"] = 9604;
				e["dochadathai"] = 3598;
				e["dodekthai"] = 3604;
				e["dohiragana"] = 12393;
				e["dokatakana"] = 12489;
				e["dollar"] = 36;
				e["dollarinferior"] = 63203;
				e["dollarmonospace"] = 65284;
				e["dollaroldstyle"] = 63268;
				e["dollarsmall"] = 65129;
				e["dollarsuperior"] = 63204;
				e["dong"] = 8363;
				e["dorusquare"] = 13094;
				e["dotaccent"] = 729;
				e["dotaccentcmb"] = 775;
				e["dotbelowcmb"] = 803;
				e["dotbelowcomb"] = 803;
				e["dotkatakana"] = 12539;
				e["dotlessi"] = 305;
				e["dotlessj"] = 63166;
				e["dotlessjstrokehook"] = 644;
				e["dotmath"] = 8901;
				e["dottedcircle"] = 9676;
				e["doubleyodpatah"] = 64287;
				e["doubleyodpatahhebrew"] = 64287;
				e["downtackbelowcmb"] = 798;
				e["downtackmod"] = 725;
				e["dparen"] = 9375;
				e["dsuperior"] = 63211;
				e["dtail"] = 598;
				e["dtopbar"] = 396;
				e["duhiragana"] = 12389;
				e["dukatakana"] = 12485;
				e["dz"] = 499;
				e["dzaltone"] = 675;
				e["dzcaron"] = 454;
				e["dzcurl"] = 677;
				e["dzeabkhasiancyrillic"] = 1249;
				e["dzecyrillic"] = 1109;
				e["dzhecyrillic"] = 1119;
				e["e"] = 101;
				e["eacute"] = 233;
				e["earth"] = 9793;
				e["ebengali"] = 2447;
				e["ebopomofo"] = 12572;
				e["ebreve"] = 277;
				e["ecandradeva"] = 2317;
				e["ecandragujarati"] = 2701;
				e["ecandravowelsigndeva"] = 2373;
				e["ecandravowelsigngujarati"] = 2757;
				e["ecaron"] = 283;
				e["ecedillabreve"] = 7709;
				e["echarmenian"] = 1381;
				e["echyiwnarmenian"] = 1415;
				e["ecircle"] = 9428;
				e["ecircumflex"] = 234;
				e["ecircumflexacute"] = 7871;
				e["ecircumflexbelow"] = 7705;
				e["ecircumflexdotbelow"] = 7879;
				e["ecircumflexgrave"] = 7873;
				e["ecircumflexhookabove"] = 7875;
				e["ecircumflextilde"] = 7877;
				e["ecyrillic"] = 1108;
				e["edblgrave"] = 517;
				e["edeva"] = 2319;
				e["edieresis"] = 235;
				e["edot"] = 279;
				e["edotaccent"] = 279;
				e["edotbelow"] = 7865;
				e["eegurmukhi"] = 2575;
				e["eematragurmukhi"] = 2631;
				e["efcyrillic"] = 1092;
				e["egrave"] = 232;
				e["egujarati"] = 2703;
				e["eharmenian"] = 1383;
				e["ehbopomofo"] = 12573;
				e["ehiragana"] = 12360;
				e["ehookabove"] = 7867;
				e["eibopomofo"] = 12575;
				e["eight"] = 56;
				e["eightarabic"] = 1640;
				e["eightbengali"] = 2542;
				e["eightcircle"] = 9319;
				e["eightcircleinversesansserif"] = 10129;
				e["eightdeva"] = 2414;
				e["eighteencircle"] = 9329;
				e["eighteenparen"] = 9349;
				e["eighteenperiod"] = 9369;
				e["eightgujarati"] = 2798;
				e["eightgurmukhi"] = 2670;
				e["eighthackarabic"] = 1640;
				e["eighthangzhou"] = 12328;
				e["eighthnotebeamed"] = 9835;
				e["eightideographicparen"] = 12839;
				e["eightinferior"] = 8328;
				e["eightmonospace"] = 65304;
				e["eightoldstyle"] = 63288;
				e["eightparen"] = 9339;
				e["eightperiod"] = 9359;
				e["eightpersian"] = 1784;
				e["eightroman"] = 8567;
				e["eightsuperior"] = 8312;
				e["eightthai"] = 3672;
				e["einvertedbreve"] = 519;
				e["eiotifiedcyrillic"] = 1125;
				e["ekatakana"] = 12456;
				e["ekatakanahalfwidth"] = 65396;
				e["ekonkargurmukhi"] = 2676;
				e["ekorean"] = 12628;
				e["elcyrillic"] = 1083;
				e["element"] = 8712;
				e["elevencircle"] = 9322;
				e["elevenparen"] = 9342;
				e["elevenperiod"] = 9362;
				e["elevenroman"] = 8570;
				e["ellipsis"] = 8230;
				e["ellipsisvertical"] = 8942;
				e["emacron"] = 275;
				e["emacronacute"] = 7703;
				e["emacrongrave"] = 7701;
				e["emcyrillic"] = 1084;
				e["emdash"] = 8212;
				e["emdashvertical"] = 65073;
				e["emonospace"] = 65349;
				e["emphasismarkarmenian"] = 1371;
				e["emptyset"] = 8709;
				e["enbopomofo"] = 12579;
				e["encyrillic"] = 1085;
				e["endash"] = 8211;
				e["endashvertical"] = 65074;
				e["endescendercyrillic"] = 1187;
				e["eng"] = 331;
				e["engbopomofo"] = 12581;
				e["enghecyrillic"] = 1189;
				e["enhookcyrillic"] = 1224;
				e["enspace"] = 8194;
				e["eogonek"] = 281;
				e["eokorean"] = 12627;
				e["eopen"] = 603;
				e["eopenclosed"] = 666;
				e["eopenreversed"] = 604;
				e["eopenreversedclosed"] = 606;
				e["eopenreversedhook"] = 605;
				e["eparen"] = 9376;
				e["epsilon"] = 949;
				e["epsilontonos"] = 941;
				e["equal"] = 61;
				e["equalmonospace"] = 65309;
				e["equalsmall"] = 65126;
				e["equalsuperior"] = 8316;
				e["equivalence"] = 8801;
				e["erbopomofo"] = 12582;
				e["ercyrillic"] = 1088;
				e["ereversed"] = 600;
				e["ereversedcyrillic"] = 1101;
				e["escyrillic"] = 1089;
				e["esdescendercyrillic"] = 1195;
				e["esh"] = 643;
				e["eshcurl"] = 646;
				e["eshortdeva"] = 2318;
				e["eshortvowelsigndeva"] = 2374;
				e["eshreversedloop"] = 426;
				e["eshsquatreversed"] = 645;
				e["esmallhiragana"] = 12359;
				e["esmallkatakana"] = 12455;
				e["esmallkatakanahalfwidth"] = 65386;
				e["estimated"] = 8494;
				e["esuperior"] = 63212;
				e["eta"] = 951;
				e["etarmenian"] = 1384;
				e["etatonos"] = 942;
				e["eth"] = 240;
				e["etilde"] = 7869;
				e["etildebelow"] = 7707;
				e["etnahtafoukhhebrew"] = 1425;
				e["etnahtafoukhlefthebrew"] = 1425;
				e["etnahtahebrew"] = 1425;
				e["etnahtalefthebrew"] = 1425;
				e["eturned"] = 477;
				e["eukorean"] = 12641;
				e["euro"] = 8364;
				e["evowelsignbengali"] = 2503;
				e["evowelsigndeva"] = 2375;
				e["evowelsigngujarati"] = 2759;
				e["exclam"] = 33;
				e["exclamarmenian"] = 1372;
				e["exclamdbl"] = 8252;
				e["exclamdown"] = 161;
				e["exclamdownsmall"] = 63393;
				e["exclammonospace"] = 65281;
				e["exclamsmall"] = 63265;
				e["existential"] = 8707;
				e["ezh"] = 658;
				e["ezhcaron"] = 495;
				e["ezhcurl"] = 659;
				e["ezhreversed"] = 441;
				e["ezhtail"] = 442;
				e["f"] = 102;
				e["fadeva"] = 2398;
				e["fagurmukhi"] = 2654;
				e["fahrenheit"] = 8457;
				e["fathaarabic"] = 1614;
				e["fathalowarabic"] = 1614;
				e["fathatanarabic"] = 1611;
				e["fbopomofo"] = 12552;
				e["fcircle"] = 9429;
				e["fdotaccent"] = 7711;
				e["feharabic"] = 1601;
				e["feharmenian"] = 1414;
				e["fehfinalarabic"] = 65234;
				e["fehinitialarabic"] = 65235;
				e["fehmedialarabic"] = 65236;
				e["feicoptic"] = 997;
				e["female"] = 9792;
				e["ff"] = 64256;
				e["ffi"] = 64259;
				e["ffl"] = 64260;
				e["fi"] = 64257;
				e["fifteencircle"] = 9326;
				e["fifteenparen"] = 9346;
				e["fifteenperiod"] = 9366;
				e["figuredash"] = 8210;
				e["filledbox"] = 9632;
				e["filledrect"] = 9644;
				e["finalkaf"] = 1498;
				e["finalkafdagesh"] = 64314;
				e["finalkafdageshhebrew"] = 64314;
				e["finalkafhebrew"] = 1498;
				e["finalmem"] = 1501;
				e["finalmemhebrew"] = 1501;
				e["finalnun"] = 1503;
				e["finalnunhebrew"] = 1503;
				e["finalpe"] = 1507;
				e["finalpehebrew"] = 1507;
				e["finaltsadi"] = 1509;
				e["finaltsadihebrew"] = 1509;
				e["firsttonechinese"] = 713;
				e["fisheye"] = 9673;
				e["fitacyrillic"] = 1139;
				e["five"] = 53;
				e["fivearabic"] = 1637;
				e["fivebengali"] = 2539;
				e["fivecircle"] = 9316;
				e["fivecircleinversesansserif"] = 10126;
				e["fivedeva"] = 2411;
				e["fiveeighths"] = 8541;
				e["fivegujarati"] = 2795;
				e["fivegurmukhi"] = 2667;
				e["fivehackarabic"] = 1637;
				e["fivehangzhou"] = 12325;
				e["fiveideographicparen"] = 12836;
				e["fiveinferior"] = 8325;
				e["fivemonospace"] = 65301;
				e["fiveoldstyle"] = 63285;
				e["fiveparen"] = 9336;
				e["fiveperiod"] = 9356;
				e["fivepersian"] = 1781;
				e["fiveroman"] = 8564;
				e["fivesuperior"] = 8309;
				e["fivethai"] = 3669;
				e["fl"] = 64258;
				e["florin"] = 402;
				e["fmonospace"] = 65350;
				e["fmsquare"] = 13209;
				e["fofanthai"] = 3615;
				e["fofathai"] = 3613;
				e["fongmanthai"] = 3663;
				e["forall"] = 8704;
				e["four"] = 52;
				e["fourarabic"] = 1636;
				e["fourbengali"] = 2538;
				e["fourcircle"] = 9315;
				e["fourcircleinversesansserif"] = 10125;
				e["fourdeva"] = 2410;
				e["fourgujarati"] = 2794;
				e["fourgurmukhi"] = 2666;
				e["fourhackarabic"] = 1636;
				e["fourhangzhou"] = 12324;
				e["fourideographicparen"] = 12835;
				e["fourinferior"] = 8324;
				e["fourmonospace"] = 65300;
				e["fournumeratorbengali"] = 2551;
				e["fouroldstyle"] = 63284;
				e["fourparen"] = 9335;
				e["fourperiod"] = 9355;
				e["fourpersian"] = 1780;
				e["fourroman"] = 8563;
				e["foursuperior"] = 8308;
				e["fourteencircle"] = 9325;
				e["fourteenparen"] = 9345;
				e["fourteenperiod"] = 9365;
				e["fourthai"] = 3668;
				e["fourthtonechinese"] = 715;
				e["fparen"] = 9377;
				e["fraction"] = 8260;
				e["franc"] = 8355;
				e["g"] = 103;
				e["gabengali"] = 2455;
				e["gacute"] = 501;
				e["gadeva"] = 2327;
				e["gafarabic"] = 1711;
				e["gaffinalarabic"] = 64403;
				e["gafinitialarabic"] = 64404;
				e["gafmedialarabic"] = 64405;
				e["gagujarati"] = 2711;
				e["gagurmukhi"] = 2583;
				e["gahiragana"] = 12364;
				e["gakatakana"] = 12460;
				e["gamma"] = 947;
				e["gammalatinsmall"] = 611;
				e["gammasuperior"] = 736;
				e["gangiacoptic"] = 1003;
				e["gbopomofo"] = 12557;
				e["gbreve"] = 287;
				e["gcaron"] = 487;
				e["gcedilla"] = 291;
				e["gcircle"] = 9430;
				e["gcircumflex"] = 285;
				e["gcommaaccent"] = 291;
				e["gdot"] = 289;
				e["gdotaccent"] = 289;
				e["gecyrillic"] = 1075;
				e["gehiragana"] = 12370;
				e["gekatakana"] = 12466;
				e["geometricallyequal"] = 8785;
				e["gereshaccenthebrew"] = 1436;
				e["gereshhebrew"] = 1523;
				e["gereshmuqdamhebrew"] = 1437;
				e["germandbls"] = 223;
				e["gershayimaccenthebrew"] = 1438;
				e["gershayimhebrew"] = 1524;
				e["getamark"] = 12307;
				e["ghabengali"] = 2456;
				e["ghadarmenian"] = 1394;
				e["ghadeva"] = 2328;
				e["ghagujarati"] = 2712;
				e["ghagurmukhi"] = 2584;
				e["ghainarabic"] = 1594;
				e["ghainfinalarabic"] = 65230;
				e["ghaininitialarabic"] = 65231;
				e["ghainmedialarabic"] = 65232;
				e["ghemiddlehookcyrillic"] = 1173;
				e["ghestrokecyrillic"] = 1171;
				e["gheupturncyrillic"] = 1169;
				e["ghhadeva"] = 2394;
				e["ghhagurmukhi"] = 2650;
				e["ghook"] = 608;
				e["ghzsquare"] = 13203;
				e["gihiragana"] = 12366;
				e["gikatakana"] = 12462;
				e["gimarmenian"] = 1379;
				e["gimel"] = 1490;
				e["gimeldagesh"] = 64306;
				e["gimeldageshhebrew"] = 64306;
				e["gimelhebrew"] = 1490;
				e["gjecyrillic"] = 1107;
				e["glottalinvertedstroke"] = 446;
				e["glottalstop"] = 660;
				e["glottalstopinverted"] = 662;
				e["glottalstopmod"] = 704;
				e["glottalstopreversed"] = 661;
				e["glottalstopreversedmod"] = 705;
				e["glottalstopreversedsuperior"] = 740;
				e["glottalstopstroke"] = 673;
				e["glottalstopstrokereversed"] = 674;
				e["gmacron"] = 7713;
				e["gmonospace"] = 65351;
				e["gohiragana"] = 12372;
				e["gokatakana"] = 12468;
				e["gparen"] = 9378;
				e["gpasquare"] = 13228;
				e["gradient"] = 8711;
				e["grave"] = 96;
				e["gravebelowcmb"] = 790;
				e["gravecmb"] = 768;
				e["gravecomb"] = 768;
				e["gravedeva"] = 2387;
				e["gravelowmod"] = 718;
				e["gravemonospace"] = 65344;
				e["gravetonecmb"] = 832;
				e["greater"] = 62;
				e["greaterequal"] = 8805;
				e["greaterequalorless"] = 8923;
				e["greatermonospace"] = 65310;
				e["greaterorequivalent"] = 8819;
				e["greaterorless"] = 8823;
				e["greateroverequal"] = 8807;
				e["greatersmall"] = 65125;
				e["gscript"] = 609;
				e["gstroke"] = 485;
				e["guhiragana"] = 12368;
				e["guillemotleft"] = 171;
				e["guillemotright"] = 187;
				e["guilsinglleft"] = 8249;
				e["guilsinglright"] = 8250;
				e["gukatakana"] = 12464;
				e["guramusquare"] = 13080;
				e["gysquare"] = 13257;
				e["h"] = 104;
				e["haabkhasiancyrillic"] = 1193;
				e["haaltonearabic"] = 1729;
				e["habengali"] = 2489;
				e["hadescendercyrillic"] = 1203;
				e["hadeva"] = 2361;
				e["hagujarati"] = 2745;
				e["hagurmukhi"] = 2617;
				e["haharabic"] = 1581;
				e["hahfinalarabic"] = 65186;
				e["hahinitialarabic"] = 65187;
				e["hahiragana"] = 12399;
				e["hahmedialarabic"] = 65188;
				e["haitusquare"] = 13098;
				e["hakatakana"] = 12495;
				e["hakatakanahalfwidth"] = 65418;
				e["halantgurmukhi"] = 2637;
				e["hamzaarabic"] = 1569;
				e["hamzalowarabic"] = 1569;
				e["hangulfiller"] = 12644;
				e["hardsigncyrillic"] = 1098;
				e["harpoonleftbarbup"] = 8636;
				e["harpoonrightbarbup"] = 8640;
				e["hasquare"] = 13258;
				e["hatafpatah"] = 1458;
				e["hatafpatah16"] = 1458;
				e["hatafpatah23"] = 1458;
				e["hatafpatah2f"] = 1458;
				e["hatafpatahhebrew"] = 1458;
				e["hatafpatahnarrowhebrew"] = 1458;
				e["hatafpatahquarterhebrew"] = 1458;
				e["hatafpatahwidehebrew"] = 1458;
				e["hatafqamats"] = 1459;
				e["hatafqamats1b"] = 1459;
				e["hatafqamats28"] = 1459;
				e["hatafqamats34"] = 1459;
				e["hatafqamatshebrew"] = 1459;
				e["hatafqamatsnarrowhebrew"] = 1459;
				e["hatafqamatsquarterhebrew"] = 1459;
				e["hatafqamatswidehebrew"] = 1459;
				e["hatafsegol"] = 1457;
				e["hatafsegol17"] = 1457;
				e["hatafsegol24"] = 1457;
				e["hatafsegol30"] = 1457;
				e["hatafsegolhebrew"] = 1457;
				e["hatafsegolnarrowhebrew"] = 1457;
				e["hatafsegolquarterhebrew"] = 1457;
				e["hatafsegolwidehebrew"] = 1457;
				e["hbar"] = 295;
				e["hbopomofo"] = 12559;
				e["hbrevebelow"] = 7723;
				e["hcedilla"] = 7721;
				e["hcircle"] = 9431;
				e["hcircumflex"] = 293;
				e["hdieresis"] = 7719;
				e["hdotaccent"] = 7715;
				e["hdotbelow"] = 7717;
				e["he"] = 1492;
				e["heart"] = 9829;
				e["heartsuitblack"] = 9829;
				e["heartsuitwhite"] = 9825;
				e["hedagesh"] = 64308;
				e["hedageshhebrew"] = 64308;
				e["hehaltonearabic"] = 1729;
				e["heharabic"] = 1607;
				e["hehebrew"] = 1492;
				e["hehfinalaltonearabic"] = 64423;
				e["hehfinalalttwoarabic"] = 65258;
				e["hehfinalarabic"] = 65258;
				e["hehhamzaabovefinalarabic"] = 64421;
				e["hehhamzaaboveisolatedarabic"] = 64420;
				e["hehinitialaltonearabic"] = 64424;
				e["hehinitialarabic"] = 65259;
				e["hehiragana"] = 12408;
				e["hehmedialaltonearabic"] = 64425;
				e["hehmedialarabic"] = 65260;
				e["heiseierasquare"] = 13179;
				e["hekatakana"] = 12504;
				e["hekatakanahalfwidth"] = 65421;
				e["hekutaarusquare"] = 13110;
				e["henghook"] = 615;
				e["herutusquare"] = 13113;
				e["het"] = 1495;
				e["hethebrew"] = 1495;
				e["hhook"] = 614;
				e["hhooksuperior"] = 689;
				e["hieuhacirclekorean"] = 12923;
				e["hieuhaparenkorean"] = 12827;
				e["hieuhcirclekorean"] = 12909;
				e["hieuhkorean"] = 12622;
				e["hieuhparenkorean"] = 12813;
				e["hihiragana"] = 12402;
				e["hikatakana"] = 12498;
				e["hikatakanahalfwidth"] = 65419;
				e["hiriq"] = 1460;
				e["hiriq14"] = 1460;
				e["hiriq21"] = 1460;
				e["hiriq2d"] = 1460;
				e["hiriqhebrew"] = 1460;
				e["hiriqnarrowhebrew"] = 1460;
				e["hiriqquarterhebrew"] = 1460;
				e["hiriqwidehebrew"] = 1460;
				e["hlinebelow"] = 7830;
				e["hmonospace"] = 65352;
				e["hoarmenian"] = 1392;
				e["hohipthai"] = 3627;
				e["hohiragana"] = 12411;
				e["hokatakana"] = 12507;
				e["hokatakanahalfwidth"] = 65422;
				e["holam"] = 1465;
				e["holam19"] = 1465;
				e["holam26"] = 1465;
				e["holam32"] = 1465;
				e["holamhebrew"] = 1465;
				e["holamnarrowhebrew"] = 1465;
				e["holamquarterhebrew"] = 1465;
				e["holamwidehebrew"] = 1465;
				e["honokhukthai"] = 3630;
				e["hookabovecomb"] = 777;
				e["hookcmb"] = 777;
				e["hookpalatalizedbelowcmb"] = 801;
				e["hookretroflexbelowcmb"] = 802;
				e["hoonsquare"] = 13122;
				e["horicoptic"] = 1001;
				e["horizontalbar"] = 8213;
				e["horncmb"] = 795;
				e["hotsprings"] = 9832;
				e["house"] = 8962;
				e["hparen"] = 9379;
				e["hsuperior"] = 688;
				e["hturned"] = 613;
				e["huhiragana"] = 12405;
				e["huiitosquare"] = 13107;
				e["hukatakana"] = 12501;
				e["hukatakanahalfwidth"] = 65420;
				e["hungarumlaut"] = 733;
				e["hungarumlautcmb"] = 779;
				e["hv"] = 405;
				e["hyphen"] = 45;
				e["hypheninferior"] = 63205;
				e["hyphenmonospace"] = 65293;
				e["hyphensmall"] = 65123;
				e["hyphensuperior"] = 63206;
				e["hyphentwo"] = 8208;
				e["i"] = 105;
				e["iacute"] = 237;
				e["iacyrillic"] = 1103;
				e["ibengali"] = 2439;
				e["ibopomofo"] = 12583;
				e["ibreve"] = 301;
				e["icaron"] = 464;
				e["icircle"] = 9432;
				e["icircumflex"] = 238;
				e["icyrillic"] = 1110;
				e["idblgrave"] = 521;
				e["ideographearthcircle"] = 12943;
				e["ideographfirecircle"] = 12939;
				e["ideographicallianceparen"] = 12863;
				e["ideographiccallparen"] = 12858;
				e["ideographiccentrecircle"] = 12965;
				e["ideographicclose"] = 12294;
				e["ideographiccomma"] = 12289;
				e["ideographiccommaleft"] = 65380;
				e["ideographiccongratulationparen"] = 12855;
				e["ideographiccorrectcircle"] = 12963;
				e["ideographicearthparen"] = 12847;
				e["ideographicenterpriseparen"] = 12861;
				e["ideographicexcellentcircle"] = 12957;
				e["ideographicfestivalparen"] = 12864;
				e["ideographicfinancialcircle"] = 12950;
				e["ideographicfinancialparen"] = 12854;
				e["ideographicfireparen"] = 12843;
				e["ideographichaveparen"] = 12850;
				e["ideographichighcircle"] = 12964;
				e["ideographiciterationmark"] = 12293;
				e["ideographiclaborcircle"] = 12952;
				e["ideographiclaborparen"] = 12856;
				e["ideographicleftcircle"] = 12967;
				e["ideographiclowcircle"] = 12966;
				e["ideographicmedicinecircle"] = 12969;
				e["ideographicmetalparen"] = 12846;
				e["ideographicmoonparen"] = 12842;
				e["ideographicnameparen"] = 12852;
				e["ideographicperiod"] = 12290;
				e["ideographicprintcircle"] = 12958;
				e["ideographicreachparen"] = 12867;
				e["ideographicrepresentparen"] = 12857;
				e["ideographicresourceparen"] = 12862;
				e["ideographicrightcircle"] = 12968;
				e["ideographicsecretcircle"] = 12953;
				e["ideographicselfparen"] = 12866;
				e["ideographicsocietyparen"] = 12851;
				e["ideographicspace"] = 12288;
				e["ideographicspecialparen"] = 12853;
				e["ideographicstockparen"] = 12849;
				e["ideographicstudyparen"] = 12859;
				e["ideographicsunparen"] = 12848;
				e["ideographicsuperviseparen"] = 12860;
				e["ideographicwaterparen"] = 12844;
				e["ideographicwoodparen"] = 12845;
				e["ideographiczero"] = 12295;
				e["ideographmetalcircle"] = 12942;
				e["ideographmooncircle"] = 12938;
				e["ideographnamecircle"] = 12948;
				e["ideographsuncircle"] = 12944;
				e["ideographwatercircle"] = 12940;
				e["ideographwoodcircle"] = 12941;
				e["ideva"] = 2311;
				e["idieresis"] = 239;
				e["idieresisacute"] = 7727;
				e["idieresiscyrillic"] = 1253;
				e["idotbelow"] = 7883;
				e["iebrevecyrillic"] = 1239;
				e["iecyrillic"] = 1077;
				e["ieungacirclekorean"] = 12917;
				e["ieungaparenkorean"] = 12821;
				e["ieungcirclekorean"] = 12903;
				e["ieungkorean"] = 12615;
				e["ieungparenkorean"] = 12807;
				e["igrave"] = 236;
				e["igujarati"] = 2695;
				e["igurmukhi"] = 2567;
				e["ihiragana"] = 12356;
				e["ihookabove"] = 7881;
				e["iibengali"] = 2440;
				e["iicyrillic"] = 1080;
				e["iideva"] = 2312;
				e["iigujarati"] = 2696;
				e["iigurmukhi"] = 2568;
				e["iimatragurmukhi"] = 2624;
				e["iinvertedbreve"] = 523;
				e["iishortcyrillic"] = 1081;
				e["iivowelsignbengali"] = 2496;
				e["iivowelsigndeva"] = 2368;
				e["iivowelsigngujarati"] = 2752;
				e["ij"] = 307;
				e["ikatakana"] = 12452;
				e["ikatakanahalfwidth"] = 65394;
				e["ikorean"] = 12643;
				e["ilde"] = 732;
				e["iluyhebrew"] = 1452;
				e["imacron"] = 299;
				e["imacroncyrillic"] = 1251;
				e["imageorapproximatelyequal"] = 8787;
				e["imatragurmukhi"] = 2623;
				e["imonospace"] = 65353;
				e["increment"] = 8710;
				e["infinity"] = 8734;
				e["iniarmenian"] = 1387;
				e["integral"] = 8747;
				e["integralbottom"] = 8993;
				e["integralbt"] = 8993;
				e["integralex"] = 63733;
				e["integraltop"] = 8992;
				e["integraltp"] = 8992;
				e["intersection"] = 8745;
				e["intisquare"] = 13061;
				e["invbullet"] = 9688;
				e["invcircle"] = 9689;
				e["invsmileface"] = 9787;
				e["iocyrillic"] = 1105;
				e["iogonek"] = 303;
				e["iota"] = 953;
				e["iotadieresis"] = 970;
				e["iotadieresistonos"] = 912;
				e["iotalatin"] = 617;
				e["iotatonos"] = 943;
				e["iparen"] = 9380;
				e["irigurmukhi"] = 2674;
				e["ismallhiragana"] = 12355;
				e["ismallkatakana"] = 12451;
				e["ismallkatakanahalfwidth"] = 65384;
				e["issharbengali"] = 2554;
				e["istroke"] = 616;
				e["isuperior"] = 63213;
				e["iterationhiragana"] = 12445;
				e["iterationkatakana"] = 12541;
				e["itilde"] = 297;
				e["itildebelow"] = 7725;
				e["iubopomofo"] = 12585;
				e["iucyrillic"] = 1102;
				e["ivowelsignbengali"] = 2495;
				e["ivowelsigndeva"] = 2367;
				e["ivowelsigngujarati"] = 2751;
				e["izhitsacyrillic"] = 1141;
				e["izhitsadblgravecyrillic"] = 1143;
				e["j"] = 106;
				e["jaarmenian"] = 1393;
				e["jabengali"] = 2460;
				e["jadeva"] = 2332;
				e["jagujarati"] = 2716;
				e["jagurmukhi"] = 2588;
				e["jbopomofo"] = 12560;
				e["jcaron"] = 496;
				e["jcircle"] = 9433;
				e["jcircumflex"] = 309;
				e["jcrossedtail"] = 669;
				e["jdotlessstroke"] = 607;
				e["jecyrillic"] = 1112;
				e["jeemarabic"] = 1580;
				e["jeemfinalarabic"] = 65182;
				e["jeeminitialarabic"] = 65183;
				e["jeemmedialarabic"] = 65184;
				e["jeharabic"] = 1688;
				e["jehfinalarabic"] = 64395;
				e["jhabengali"] = 2461;
				e["jhadeva"] = 2333;
				e["jhagujarati"] = 2717;
				e["jhagurmukhi"] = 2589;
				e["jheharmenian"] = 1403;
				e["jis"] = 12292;
				e["jmonospace"] = 65354;
				e["jparen"] = 9381;
				e["jsuperior"] = 690;
				e["k"] = 107;
				e["kabashkircyrillic"] = 1185;
				e["kabengali"] = 2453;
				e["kacute"] = 7729;
				e["kacyrillic"] = 1082;
				e["kadescendercyrillic"] = 1179;
				e["kadeva"] = 2325;
				e["kaf"] = 1499;
				e["kafarabic"] = 1603;
				e["kafdagesh"] = 64315;
				e["kafdageshhebrew"] = 64315;
				e["kaffinalarabic"] = 65242;
				e["kafhebrew"] = 1499;
				e["kafinitialarabic"] = 65243;
				e["kafmedialarabic"] = 65244;
				e["kafrafehebrew"] = 64333;
				e["kagujarati"] = 2709;
				e["kagurmukhi"] = 2581;
				e["kahiragana"] = 12363;
				e["kahookcyrillic"] = 1220;
				e["kakatakana"] = 12459;
				e["kakatakanahalfwidth"] = 65398;
				e["kappa"] = 954;
				e["kappasymbolgreek"] = 1008;
				e["kapyeounmieumkorean"] = 12657;
				e["kapyeounphieuphkorean"] = 12676;
				e["kapyeounpieupkorean"] = 12664;
				e["kapyeounssangpieupkorean"] = 12665;
				e["karoriisquare"] = 13069;
				e["kashidaautoarabic"] = 1600;
				e["kashidaautonosidebearingarabic"] = 1600;
				e["kasmallkatakana"] = 12533;
				e["kasquare"] = 13188;
				e["kasraarabic"] = 1616;
				e["kasratanarabic"] = 1613;
				e["kastrokecyrillic"] = 1183;
				e["katahiraprolongmarkhalfwidth"] = 65392;
				e["kaverticalstrokecyrillic"] = 1181;
				e["kbopomofo"] = 12558;
				e["kcalsquare"] = 13193;
				e["kcaron"] = 489;
				e["kcedilla"] = 311;
				e["kcircle"] = 9434;
				e["kcommaaccent"] = 311;
				e["kdotbelow"] = 7731;
				e["keharmenian"] = 1412;
				e["kehiragana"] = 12369;
				e["kekatakana"] = 12465;
				e["kekatakanahalfwidth"] = 65401;
				e["kenarmenian"] = 1391;
				e["kesmallkatakana"] = 12534;
				e["kgreenlandic"] = 312;
				e["khabengali"] = 2454;
				e["khacyrillic"] = 1093;
				e["khadeva"] = 2326;
				e["khagujarati"] = 2710;
				e["khagurmukhi"] = 2582;
				e["khaharabic"] = 1582;
				e["khahfinalarabic"] = 65190;
				e["khahinitialarabic"] = 65191;
				e["khahmedialarabic"] = 65192;
				e["kheicoptic"] = 999;
				e["khhadeva"] = 2393;
				e["khhagurmukhi"] = 2649;
				e["khieukhacirclekorean"] = 12920;
				e["khieukhaparenkorean"] = 12824;
				e["khieukhcirclekorean"] = 12906;
				e["khieukhkorean"] = 12619;
				e["khieukhparenkorean"] = 12810;
				e["khokhaithai"] = 3586;
				e["khokhonthai"] = 3589;
				e["khokhuatthai"] = 3587;
				e["khokhwaithai"] = 3588;
				e["khomutthai"] = 3675;
				e["khook"] = 409;
				e["khorakhangthai"] = 3590;
				e["khzsquare"] = 13201;
				e["kihiragana"] = 12365;
				e["kikatakana"] = 12461;
				e["kikatakanahalfwidth"] = 65399;
				e["kiroguramusquare"] = 13077;
				e["kiromeetorusquare"] = 13078;
				e["kirosquare"] = 13076;
				e["kiyeokacirclekorean"] = 12910;
				e["kiyeokaparenkorean"] = 12814;
				e["kiyeokcirclekorean"] = 12896;
				e["kiyeokkorean"] = 12593;
				e["kiyeokparenkorean"] = 12800;
				e["kiyeoksioskorean"] = 12595;
				e["kjecyrillic"] = 1116;
				e["klinebelow"] = 7733;
				e["klsquare"] = 13208;
				e["kmcubedsquare"] = 13222;
				e["kmonospace"] = 65355;
				e["kmsquaredsquare"] = 13218;
				e["kohiragana"] = 12371;
				e["kohmsquare"] = 13248;
				e["kokaithai"] = 3585;
				e["kokatakana"] = 12467;
				e["kokatakanahalfwidth"] = 65402;
				e["kooposquare"] = 13086;
				e["koppacyrillic"] = 1153;
				e["koreanstandardsymbol"] = 12927;
				e["koroniscmb"] = 835;
				e["kparen"] = 9382;
				e["kpasquare"] = 13226;
				e["ksicyrillic"] = 1135;
				e["ktsquare"] = 13263;
				e["kturned"] = 670;
				e["kuhiragana"] = 12367;
				e["kukatakana"] = 12463;
				e["kukatakanahalfwidth"] = 65400;
				e["kvsquare"] = 13240;
				e["kwsquare"] = 13246;
				e["l"] = 108;
				e["labengali"] = 2482;
				e["lacute"] = 314;
				e["ladeva"] = 2354;
				e["lagujarati"] = 2738;
				e["lagurmukhi"] = 2610;
				e["lakkhangyaothai"] = 3653;
				e["lamaleffinalarabic"] = 65276;
				e["lamalefhamzaabovefinalarabic"] = 65272;
				e["lamalefhamzaaboveisolatedarabic"] = 65271;
				e["lamalefhamzabelowfinalarabic"] = 65274;
				e["lamalefhamzabelowisolatedarabic"] = 65273;
				e["lamalefisolatedarabic"] = 65275;
				e["lamalefmaddaabovefinalarabic"] = 65270;
				e["lamalefmaddaaboveisolatedarabic"] = 65269;
				e["lamarabic"] = 1604;
				e["lambda"] = 955;
				e["lambdastroke"] = 411;
				e["lamed"] = 1500;
				e["lameddagesh"] = 64316;
				e["lameddageshhebrew"] = 64316;
				e["lamedhebrew"] = 1500;
				e["lamfinalarabic"] = 65246;
				e["lamhahinitialarabic"] = 64714;
				e["laminitialarabic"] = 65247;
				e["lamjeeminitialarabic"] = 64713;
				e["lamkhahinitialarabic"] = 64715;
				e["lamlamhehisolatedarabic"] = 65010;
				e["lammedialarabic"] = 65248;
				e["lammeemhahinitialarabic"] = 64904;
				e["lammeeminitialarabic"] = 64716;
				e["largecircle"] = 9711;
				e["lbar"] = 410;
				e["lbelt"] = 620;
				e["lbopomofo"] = 12556;
				e["lcaron"] = 318;
				e["lcedilla"] = 316;
				e["lcircle"] = 9435;
				e["lcircumflexbelow"] = 7741;
				e["lcommaaccent"] = 316;
				e["ldot"] = 320;
				e["ldotaccent"] = 320;
				e["ldotbelow"] = 7735;
				e["ldotbelowmacron"] = 7737;
				e["leftangleabovecmb"] = 794;
				e["lefttackbelowcmb"] = 792;
				e["less"] = 60;
				e["lessequal"] = 8804;
				e["lessequalorgreater"] = 8922;
				e["lessmonospace"] = 65308;
				e["lessorequivalent"] = 8818;
				e["lessorgreater"] = 8822;
				e["lessoverequal"] = 8806;
				e["lesssmall"] = 65124;
				e["lezh"] = 622;
				e["lfblock"] = 9612;
				e["lhookretroflex"] = 621;
				e["lira"] = 8356;
				e["liwnarmenian"] = 1388;
				e["lj"] = 457;
				e["ljecyrillic"] = 1113;
				e["ll"] = 63168;
				e["lladeva"] = 2355;
				e["llagujarati"] = 2739;
				e["llinebelow"] = 7739;
				e["llladeva"] = 2356;
				e["llvocalicbengali"] = 2529;
				e["llvocalicdeva"] = 2401;
				e["llvocalicvowelsignbengali"] = 2531;
				e["llvocalicvowelsigndeva"] = 2403;
				e["lmiddletilde"] = 619;
				e["lmonospace"] = 65356;
				e["lmsquare"] = 13264;
				e["lochulathai"] = 3628;
				e["logicaland"] = 8743;
				e["logicalnot"] = 172;
				e["logicalnotreversed"] = 8976;
				e["logicalor"] = 8744;
				e["lolingthai"] = 3621;
				e["longs"] = 383;
				e["lowlinecenterline"] = 65102;
				e["lowlinecmb"] = 818;
				e["lowlinedashed"] = 65101;
				e["lozenge"] = 9674;
				e["lparen"] = 9383;
				e["lslash"] = 322;
				e["lsquare"] = 8467;
				e["lsuperior"] = 63214;
				e["ltshade"] = 9617;
				e["luthai"] = 3622;
				e["lvocalicbengali"] = 2444;
				e["lvocalicdeva"] = 2316;
				e["lvocalicvowelsignbengali"] = 2530;
				e["lvocalicvowelsigndeva"] = 2402;
				e["lxsquare"] = 13267;
				e["m"] = 109;
				e["mabengali"] = 2478;
				e["macron"] = 175;
				e["macronbelowcmb"] = 817;
				e["macroncmb"] = 772;
				e["macronlowmod"] = 717;
				e["macronmonospace"] = 65507;
				e["macute"] = 7743;
				e["madeva"] = 2350;
				e["magujarati"] = 2734;
				e["magurmukhi"] = 2606;
				e["mahapakhhebrew"] = 1444;
				e["mahapakhlefthebrew"] = 1444;
				e["mahiragana"] = 12414;
				e["maichattawalowleftthai"] = 63637;
				e["maichattawalowrightthai"] = 63636;
				e["maichattawathai"] = 3659;
				e["maichattawaupperleftthai"] = 63635;
				e["maieklowleftthai"] = 63628;
				e["maieklowrightthai"] = 63627;
				e["maiekthai"] = 3656;
				e["maiekupperleftthai"] = 63626;
				e["maihanakatleftthai"] = 63620;
				e["maihanakatthai"] = 3633;
				e["maitaikhuleftthai"] = 63625;
				e["maitaikhuthai"] = 3655;
				e["maitholowleftthai"] = 63631;
				e["maitholowrightthai"] = 63630;
				e["maithothai"] = 3657;
				e["maithoupperleftthai"] = 63629;
				e["maitrilowleftthai"] = 63634;
				e["maitrilowrightthai"] = 63633;
				e["maitrithai"] = 3658;
				e["maitriupperleftthai"] = 63632;
				e["maiyamokthai"] = 3654;
				e["makatakana"] = 12510;
				e["makatakanahalfwidth"] = 65423;
				e["male"] = 9794;
				e["mansyonsquare"] = 13127;
				e["maqafhebrew"] = 1470;
				e["mars"] = 9794;
				e["masoracirclehebrew"] = 1455;
				e["masquare"] = 13187;
				e["mbopomofo"] = 12551;
				e["mbsquare"] = 13268;
				e["mcircle"] = 9436;
				e["mcubedsquare"] = 13221;
				e["mdotaccent"] = 7745;
				e["mdotbelow"] = 7747;
				e["meemarabic"] = 1605;
				e["meemfinalarabic"] = 65250;
				e["meeminitialarabic"] = 65251;
				e["meemmedialarabic"] = 65252;
				e["meemmeeminitialarabic"] = 64721;
				e["meemmeemisolatedarabic"] = 64584;
				e["meetorusquare"] = 13133;
				e["mehiragana"] = 12417;
				e["meizierasquare"] = 13182;
				e["mekatakana"] = 12513;
				e["mekatakanahalfwidth"] = 65426;
				e["mem"] = 1502;
				e["memdagesh"] = 64318;
				e["memdageshhebrew"] = 64318;
				e["memhebrew"] = 1502;
				e["menarmenian"] = 1396;
				e["merkhahebrew"] = 1445;
				e["merkhakefulahebrew"] = 1446;
				e["merkhakefulalefthebrew"] = 1446;
				e["merkhalefthebrew"] = 1445;
				e["mhook"] = 625;
				e["mhzsquare"] = 13202;
				e["middledotkatakanahalfwidth"] = 65381;
				e["middot"] = 183;
				e["mieumacirclekorean"] = 12914;
				e["mieumaparenkorean"] = 12818;
				e["mieumcirclekorean"] = 12900;
				e["mieumkorean"] = 12609;
				e["mieumpansioskorean"] = 12656;
				e["mieumparenkorean"] = 12804;
				e["mieumpieupkorean"] = 12654;
				e["mieumsioskorean"] = 12655;
				e["mihiragana"] = 12415;
				e["mikatakana"] = 12511;
				e["mikatakanahalfwidth"] = 65424;
				e["minus"] = 8722;
				e["minusbelowcmb"] = 800;
				e["minuscircle"] = 8854;
				e["minusmod"] = 727;
				e["minusplus"] = 8723;
				e["minute"] = 8242;
				e["miribaarusquare"] = 13130;
				e["mirisquare"] = 13129;
				e["mlonglegturned"] = 624;
				e["mlsquare"] = 13206;
				e["mmcubedsquare"] = 13219;
				e["mmonospace"] = 65357;
				e["mmsquaredsquare"] = 13215;
				e["mohiragana"] = 12418;
				e["mohmsquare"] = 13249;
				e["mokatakana"] = 12514;
				e["mokatakanahalfwidth"] = 65427;
				e["molsquare"] = 13270;
				e["momathai"] = 3617;
				e["moverssquare"] = 13223;
				e["moverssquaredsquare"] = 13224;
				e["mparen"] = 9384;
				e["mpasquare"] = 13227;
				e["mssquare"] = 13235;
				e["msuperior"] = 63215;
				e["mturned"] = 623;
				e["mu"] = 181;
				e["mu1"] = 181;
				e["muasquare"] = 13186;
				e["muchgreater"] = 8811;
				e["muchless"] = 8810;
				e["mufsquare"] = 13196;
				e["mugreek"] = 956;
				e["mugsquare"] = 13197;
				e["muhiragana"] = 12416;
				e["mukatakana"] = 12512;
				e["mukatakanahalfwidth"] = 65425;
				e["mulsquare"] = 13205;
				e["multiply"] = 215;
				e["mumsquare"] = 13211;
				e["munahhebrew"] = 1443;
				e["munahlefthebrew"] = 1443;
				e["musicalnote"] = 9834;
				e["musicalnotedbl"] = 9835;
				e["musicflatsign"] = 9837;
				e["musicsharpsign"] = 9839;
				e["mussquare"] = 13234;
				e["muvsquare"] = 13238;
				e["muwsquare"] = 13244;
				e["mvmegasquare"] = 13241;
				e["mvsquare"] = 13239;
				e["mwmegasquare"] = 13247;
				e["mwsquare"] = 13245;
				e["n"] = 110;
				e["nabengali"] = 2472;
				e["nabla"] = 8711;
				e["nacute"] = 324;
				e["nadeva"] = 2344;
				e["nagujarati"] = 2728;
				e["nagurmukhi"] = 2600;
				e["nahiragana"] = 12394;
				e["nakatakana"] = 12490;
				e["nakatakanahalfwidth"] = 65413;
				e["napostrophe"] = 329;
				e["nasquare"] = 13185;
				e["nbopomofo"] = 12555;
				e["nbspace"] = 160;
				e["ncaron"] = 328;
				e["ncedilla"] = 326;
				e["ncircle"] = 9437;
				e["ncircumflexbelow"] = 7755;
				e["ncommaaccent"] = 326;
				e["ndotaccent"] = 7749;
				e["ndotbelow"] = 7751;
				e["nehiragana"] = 12397;
				e["nekatakana"] = 12493;
				e["nekatakanahalfwidth"] = 65416;
				e["newsheqelsign"] = 8362;
				e["nfsquare"] = 13195;
				e["ngabengali"] = 2457;
				e["ngadeva"] = 2329;
				e["ngagujarati"] = 2713;
				e["ngagurmukhi"] = 2585;
				e["ngonguthai"] = 3591;
				e["nhiragana"] = 12435;
				e["nhookleft"] = 626;
				e["nhookretroflex"] = 627;
				e["nieunacirclekorean"] = 12911;
				e["nieunaparenkorean"] = 12815;
				e["nieuncieuckorean"] = 12597;
				e["nieuncirclekorean"] = 12897;
				e["nieunhieuhkorean"] = 12598;
				e["nieunkorean"] = 12596;
				e["nieunpansioskorean"] = 12648;
				e["nieunparenkorean"] = 12801;
				e["nieunsioskorean"] = 12647;
				e["nieuntikeutkorean"] = 12646;
				e["nihiragana"] = 12395;
				e["nikatakana"] = 12491;
				e["nikatakanahalfwidth"] = 65414;
				e["nikhahitleftthai"] = 63641;
				e["nikhahitthai"] = 3661;
				e["nine"] = 57;
				e["ninearabic"] = 1641;
				e["ninebengali"] = 2543;
				e["ninecircle"] = 9320;
				e["ninecircleinversesansserif"] = 10130;
				e["ninedeva"] = 2415;
				e["ninegujarati"] = 2799;
				e["ninegurmukhi"] = 2671;
				e["ninehackarabic"] = 1641;
				e["ninehangzhou"] = 12329;
				e["nineideographicparen"] = 12840;
				e["nineinferior"] = 8329;
				e["ninemonospace"] = 65305;
				e["nineoldstyle"] = 63289;
				e["nineparen"] = 9340;
				e["nineperiod"] = 9360;
				e["ninepersian"] = 1785;
				e["nineroman"] = 8568;
				e["ninesuperior"] = 8313;
				e["nineteencircle"] = 9330;
				e["nineteenparen"] = 9350;
				e["nineteenperiod"] = 9370;
				e["ninethai"] = 3673;
				e["nj"] = 460;
				e["njecyrillic"] = 1114;
				e["nkatakana"] = 12531;
				e["nkatakanahalfwidth"] = 65437;
				e["nlegrightlong"] = 414;
				e["nlinebelow"] = 7753;
				e["nmonospace"] = 65358;
				e["nmsquare"] = 13210;
				e["nnabengali"] = 2467;
				e["nnadeva"] = 2339;
				e["nnagujarati"] = 2723;
				e["nnagurmukhi"] = 2595;
				e["nnnadeva"] = 2345;
				e["nohiragana"] = 12398;
				e["nokatakana"] = 12494;
				e["nokatakanahalfwidth"] = 65417;
				e["nonbreakingspace"] = 160;
				e["nonenthai"] = 3603;
				e["nonuthai"] = 3609;
				e["noonarabic"] = 1606;
				e["noonfinalarabic"] = 65254;
				e["noonghunnaarabic"] = 1722;
				e["noonghunnafinalarabic"] = 64415;
				e["nooninitialarabic"] = 65255;
				e["noonjeeminitialarabic"] = 64722;
				e["noonjeemisolatedarabic"] = 64587;
				e["noonmedialarabic"] = 65256;
				e["noonmeeminitialarabic"] = 64725;
				e["noonmeemisolatedarabic"] = 64590;
				e["noonnoonfinalarabic"] = 64653;
				e["notcontains"] = 8716;
				e["notelement"] = 8713;
				e["notelementof"] = 8713;
				e["notequal"] = 8800;
				e["notgreater"] = 8815;
				e["notgreaternorequal"] = 8817;
				e["notgreaternorless"] = 8825;
				e["notidentical"] = 8802;
				e["notless"] = 8814;
				e["notlessnorequal"] = 8816;
				e["notparallel"] = 8742;
				e["notprecedes"] = 8832;
				e["notsubset"] = 8836;
				e["notsucceeds"] = 8833;
				e["notsuperset"] = 8837;
				e["nowarmenian"] = 1398;
				e["nparen"] = 9385;
				e["nssquare"] = 13233;
				e["nsuperior"] = 8319;
				e["ntilde"] = 241;
				e["nu"] = 957;
				e["nuhiragana"] = 12396;
				e["nukatakana"] = 12492;
				e["nukatakanahalfwidth"] = 65415;
				e["nuktabengali"] = 2492;
				e["nuktadeva"] = 2364;
				e["nuktagujarati"] = 2748;
				e["nuktagurmukhi"] = 2620;
				e["numbersign"] = 35;
				e["numbersignmonospace"] = 65283;
				e["numbersignsmall"] = 65119;
				e["numeralsigngreek"] = 884;
				e["numeralsignlowergreek"] = 885;
				e["numero"] = 8470;
				e["nun"] = 1504;
				e["nundagesh"] = 64320;
				e["nundageshhebrew"] = 64320;
				e["nunhebrew"] = 1504;
				e["nvsquare"] = 13237;
				e["nwsquare"] = 13243;
				e["nyabengali"] = 2462;
				e["nyadeva"] = 2334;
				e["nyagujarati"] = 2718;
				e["nyagurmukhi"] = 2590;
				e["o"] = 111;
				e["oacute"] = 243;
				e["oangthai"] = 3629;
				e["obarred"] = 629;
				e["obarredcyrillic"] = 1257;
				e["obarreddieresiscyrillic"] = 1259;
				e["obengali"] = 2451;
				e["obopomofo"] = 12571;
				e["obreve"] = 335;
				e["ocandradeva"] = 2321;
				e["ocandragujarati"] = 2705;
				e["ocandravowelsigndeva"] = 2377;
				e["ocandravowelsigngujarati"] = 2761;
				e["ocaron"] = 466;
				e["ocircle"] = 9438;
				e["ocircumflex"] = 244;
				e["ocircumflexacute"] = 7889;
				e["ocircumflexdotbelow"] = 7897;
				e["ocircumflexgrave"] = 7891;
				e["ocircumflexhookabove"] = 7893;
				e["ocircumflextilde"] = 7895;
				e["ocyrillic"] = 1086;
				e["odblacute"] = 337;
				e["odblgrave"] = 525;
				e["odeva"] = 2323;
				e["odieresis"] = 246;
				e["odieresiscyrillic"] = 1255;
				e["odotbelow"] = 7885;
				e["oe"] = 339;
				e["oekorean"] = 12634;
				e["ogonek"] = 731;
				e["ogonekcmb"] = 808;
				e["ograve"] = 242;
				e["ogujarati"] = 2707;
				e["oharmenian"] = 1413;
				e["ohiragana"] = 12362;
				e["ohookabove"] = 7887;
				e["ohorn"] = 417;
				e["ohornacute"] = 7899;
				e["ohorndotbelow"] = 7907;
				e["ohorngrave"] = 7901;
				e["ohornhookabove"] = 7903;
				e["ohorntilde"] = 7905;
				e["ohungarumlaut"] = 337;
				e["oi"] = 419;
				e["oinvertedbreve"] = 527;
				e["okatakana"] = 12458;
				e["okatakanahalfwidth"] = 65397;
				e["okorean"] = 12631;
				e["olehebrew"] = 1451;
				e["omacron"] = 333;
				e["omacronacute"] = 7763;
				e["omacrongrave"] = 7761;
				e["omdeva"] = 2384;
				e["omega"] = 969;
				e["omega1"] = 982;
				e["omegacyrillic"] = 1121;
				e["omegalatinclosed"] = 631;
				e["omegaroundcyrillic"] = 1147;
				e["omegatitlocyrillic"] = 1149;
				e["omegatonos"] = 974;
				e["omgujarati"] = 2768;
				e["omicron"] = 959;
				e["omicrontonos"] = 972;
				e["omonospace"] = 65359;
				e["one"] = 49;
				e["onearabic"] = 1633;
				e["onebengali"] = 2535;
				e["onecircle"] = 9312;
				e["onecircleinversesansserif"] = 10122;
				e["onedeva"] = 2407;
				e["onedotenleader"] = 8228;
				e["oneeighth"] = 8539;
				e["onefitted"] = 63196;
				e["onegujarati"] = 2791;
				e["onegurmukhi"] = 2663;
				e["onehackarabic"] = 1633;
				e["onehalf"] = 189;
				e["onehangzhou"] = 12321;
				e["oneideographicparen"] = 12832;
				e["oneinferior"] = 8321;
				e["onemonospace"] = 65297;
				e["onenumeratorbengali"] = 2548;
				e["oneoldstyle"] = 63281;
				e["oneparen"] = 9332;
				e["oneperiod"] = 9352;
				e["onepersian"] = 1777;
				e["onequarter"] = 188;
				e["oneroman"] = 8560;
				e["onesuperior"] = 185;
				e["onethai"] = 3665;
				e["onethird"] = 8531;
				e["oogonek"] = 491;
				e["oogonekmacron"] = 493;
				e["oogurmukhi"] = 2579;
				e["oomatragurmukhi"] = 2635;
				e["oopen"] = 596;
				e["oparen"] = 9386;
				e["openbullet"] = 9702;
				e["option"] = 8997;
				e["ordfeminine"] = 170;
				e["ordmasculine"] = 186;
				e["orthogonal"] = 8735;
				e["oshortdeva"] = 2322;
				e["oshortvowelsigndeva"] = 2378;
				e["oslash"] = 248;
				e["oslashacute"] = 511;
				e["osmallhiragana"] = 12361;
				e["osmallkatakana"] = 12457;
				e["osmallkatakanahalfwidth"] = 65387;
				e["ostrokeacute"] = 511;
				e["osuperior"] = 63216;
				e["otcyrillic"] = 1151;
				e["otilde"] = 245;
				e["otildeacute"] = 7757;
				e["otildedieresis"] = 7759;
				e["oubopomofo"] = 12577;
				e["overline"] = 8254;
				e["overlinecenterline"] = 65098;
				e["overlinecmb"] = 773;
				e["overlinedashed"] = 65097;
				e["overlinedblwavy"] = 65100;
				e["overlinewavy"] = 65099;
				e["overscore"] = 175;
				e["ovowelsignbengali"] = 2507;
				e["ovowelsigndeva"] = 2379;
				e["ovowelsigngujarati"] = 2763;
				e["p"] = 112;
				e["paampssquare"] = 13184;
				e["paasentosquare"] = 13099;
				e["pabengali"] = 2474;
				e["pacute"] = 7765;
				e["padeva"] = 2346;
				e["pagedown"] = 8671;
				e["pageup"] = 8670;
				e["pagujarati"] = 2730;
				e["pagurmukhi"] = 2602;
				e["pahiragana"] = 12401;
				e["paiyannoithai"] = 3631;
				e["pakatakana"] = 12497;
				e["palatalizationcyrilliccmb"] = 1156;
				e["palochkacyrillic"] = 1216;
				e["pansioskorean"] = 12671;
				e["paragraph"] = 182;
				e["parallel"] = 8741;
				e["parenleft"] = 40;
				e["parenleftaltonearabic"] = 64830;
				e["parenleftbt"] = 63725;
				e["parenleftex"] = 63724;
				e["parenleftinferior"] = 8333;
				e["parenleftmonospace"] = 65288;
				e["parenleftsmall"] = 65113;
				e["parenleftsuperior"] = 8317;
				e["parenlefttp"] = 63723;
				e["parenleftvertical"] = 65077;
				e["parenright"] = 41;
				e["parenrightaltonearabic"] = 64831;
				e["parenrightbt"] = 63736;
				e["parenrightex"] = 63735;
				e["parenrightinferior"] = 8334;
				e["parenrightmonospace"] = 65289;
				e["parenrightsmall"] = 65114;
				e["parenrightsuperior"] = 8318;
				e["parenrighttp"] = 63734;
				e["parenrightvertical"] = 65078;
				e["partialdiff"] = 8706;
				e["paseqhebrew"] = 1472;
				e["pashtahebrew"] = 1433;
				e["pasquare"] = 13225;
				e["patah"] = 1463;
				e["patah11"] = 1463;
				e["patah1d"] = 1463;
				e["patah2a"] = 1463;
				e["patahhebrew"] = 1463;
				e["patahnarrowhebrew"] = 1463;
				e["patahquarterhebrew"] = 1463;
				e["patahwidehebrew"] = 1463;
				e["pazerhebrew"] = 1441;
				e["pbopomofo"] = 12550;
				e["pcircle"] = 9439;
				e["pdotaccent"] = 7767;
				e["pe"] = 1508;
				e["pecyrillic"] = 1087;
				e["pedagesh"] = 64324;
				e["pedageshhebrew"] = 64324;
				e["peezisquare"] = 13115;
				e["pefinaldageshhebrew"] = 64323;
				e["peharabic"] = 1662;
				e["peharmenian"] = 1402;
				e["pehebrew"] = 1508;
				e["pehfinalarabic"] = 64343;
				e["pehinitialarabic"] = 64344;
				e["pehiragana"] = 12410;
				e["pehmedialarabic"] = 64345;
				e["pekatakana"] = 12506;
				e["pemiddlehookcyrillic"] = 1191;
				e["perafehebrew"] = 64334;
				e["percent"] = 37;
				e["percentarabic"] = 1642;
				e["percentmonospace"] = 65285;
				e["percentsmall"] = 65130;
				e["period"] = 46;
				e["periodarmenian"] = 1417;
				e["periodcentered"] = 183;
				e["periodhalfwidth"] = 65377;
				e["periodinferior"] = 63207;
				e["periodmonospace"] = 65294;
				e["periodsmall"] = 65106;
				e["periodsuperior"] = 63208;
				e["perispomenigreekcmb"] = 834;
				e["perpendicular"] = 8869;
				e["perthousand"] = 8240;
				e["peseta"] = 8359;
				e["pfsquare"] = 13194;
				e["phabengali"] = 2475;
				e["phadeva"] = 2347;
				e["phagujarati"] = 2731;
				e["phagurmukhi"] = 2603;
				e["phi"] = 966;
				e["phi1"] = 981;
				e["phieuphacirclekorean"] = 12922;
				e["phieuphaparenkorean"] = 12826;
				e["phieuphcirclekorean"] = 12908;
				e["phieuphkorean"] = 12621;
				e["phieuphparenkorean"] = 12812;
				e["philatin"] = 632;
				e["phinthuthai"] = 3642;
				e["phisymbolgreek"] = 981;
				e["phook"] = 421;
				e["phophanthai"] = 3614;
				e["phophungthai"] = 3612;
				e["phosamphaothai"] = 3616;
				e["pi"] = 960;
				e["pieupacirclekorean"] = 12915;
				e["pieupaparenkorean"] = 12819;
				e["pieupcieuckorean"] = 12662;
				e["pieupcirclekorean"] = 12901;
				e["pieupkiyeokkorean"] = 12658;
				e["pieupkorean"] = 12610;
				e["pieupparenkorean"] = 12805;
				e["pieupsioskiyeokkorean"] = 12660;
				e["pieupsioskorean"] = 12612;
				e["pieupsiostikeutkorean"] = 12661;
				e["pieupthieuthkorean"] = 12663;
				e["pieuptikeutkorean"] = 12659;
				e["pihiragana"] = 12404;
				e["pikatakana"] = 12500;
				e["pisymbolgreek"] = 982;
				e["piwrarmenian"] = 1411;
				e["plus"] = 43;
				e["plusbelowcmb"] = 799;
				e["pluscircle"] = 8853;
				e["plusminus"] = 177;
				e["plusmod"] = 726;
				e["plusmonospace"] = 65291;
				e["plussmall"] = 65122;
				e["plussuperior"] = 8314;
				e["pmonospace"] = 65360;
				e["pmsquare"] = 13272;
				e["pohiragana"] = 12413;
				e["pointingindexdownwhite"] = 9759;
				e["pointingindexleftwhite"] = 9756;
				e["pointingindexrightwhite"] = 9758;
				e["pointingindexupwhite"] = 9757;
				e["pokatakana"] = 12509;
				e["poplathai"] = 3611;
				e["postalmark"] = 12306;
				e["postalmarkface"] = 12320;
				e["pparen"] = 9387;
				e["precedes"] = 8826;
				e["prescription"] = 8478;
				e["primemod"] = 697;
				e["primereversed"] = 8245;
				e["product"] = 8719;
				e["projective"] = 8965;
				e["prolongedkana"] = 12540;
				e["propellor"] = 8984;
				e["propersubset"] = 8834;
				e["propersuperset"] = 8835;
				e["proportion"] = 8759;
				e["proportional"] = 8733;
				e["psi"] = 968;
				e["psicyrillic"] = 1137;
				e["psilipneumatacyrilliccmb"] = 1158;
				e["pssquare"] = 13232;
				e["puhiragana"] = 12407;
				e["pukatakana"] = 12503;
				e["pvsquare"] = 13236;
				e["pwsquare"] = 13242;
				e["q"] = 113;
				e["qadeva"] = 2392;
				e["qadmahebrew"] = 1448;
				e["qafarabic"] = 1602;
				e["qaffinalarabic"] = 65238;
				e["qafinitialarabic"] = 65239;
				e["qafmedialarabic"] = 65240;
				e["qamats"] = 1464;
				e["qamats10"] = 1464;
				e["qamats1a"] = 1464;
				e["qamats1c"] = 1464;
				e["qamats27"] = 1464;
				e["qamats29"] = 1464;
				e["qamats33"] = 1464;
				e["qamatsde"] = 1464;
				e["qamatshebrew"] = 1464;
				e["qamatsnarrowhebrew"] = 1464;
				e["qamatsqatanhebrew"] = 1464;
				e["qamatsqatannarrowhebrew"] = 1464;
				e["qamatsqatanquarterhebrew"] = 1464;
				e["qamatsqatanwidehebrew"] = 1464;
				e["qamatsquarterhebrew"] = 1464;
				e["qamatswidehebrew"] = 1464;
				e["qarneyparahebrew"] = 1439;
				e["qbopomofo"] = 12561;
				e["qcircle"] = 9440;
				e["qhook"] = 672;
				e["qmonospace"] = 65361;
				e["qof"] = 1511;
				e["qofdagesh"] = 64327;
				e["qofdageshhebrew"] = 64327;
				e["qofhebrew"] = 1511;
				e["qparen"] = 9388;
				e["quarternote"] = 9833;
				e["qubuts"] = 1467;
				e["qubuts18"] = 1467;
				e["qubuts25"] = 1467;
				e["qubuts31"] = 1467;
				e["qubutshebrew"] = 1467;
				e["qubutsnarrowhebrew"] = 1467;
				e["qubutsquarterhebrew"] = 1467;
				e["qubutswidehebrew"] = 1467;
				e["question"] = 63;
				e["questionarabic"] = 1567;
				e["questionarmenian"] = 1374;
				e["questiondown"] = 191;
				e["questiondownsmall"] = 63423;
				e["questiongreek"] = 894;
				e["questionmonospace"] = 65311;
				e["questionsmall"] = 63295;
				e["quotedbl"] = 34;
				e["quotedblbase"] = 8222;
				e["quotedblleft"] = 8220;
				e["quotedblmonospace"] = 65282;
				e["quotedblprime"] = 12318;
				e["quotedblprimereversed"] = 12317;
				e["quotedblright"] = 8221;
				e["quoteleft"] = 8216;
				e["quoteleftreversed"] = 8219;
				e["quotereversed"] = 8219;
				e["quoteright"] = 8217;
				e["quoterightn"] = 329;
				e["quotesinglbase"] = 8218;
				e["quotesingle"] = 39;
				e["quotesinglemonospace"] = 65287;
				e["r"] = 114;
				e["raarmenian"] = 1404;
				e["rabengali"] = 2480;
				e["racute"] = 341;
				e["radeva"] = 2352;
				e["radical"] = 8730;
				e["radicalex"] = 63717;
				e["radoverssquare"] = 13230;
				e["radoverssquaredsquare"] = 13231;
				e["radsquare"] = 13229;
				e["rafe"] = 1471;
				e["rafehebrew"] = 1471;
				e["ragujarati"] = 2736;
				e["ragurmukhi"] = 2608;
				e["rahiragana"] = 12425;
				e["rakatakana"] = 12521;
				e["rakatakanahalfwidth"] = 65431;
				e["ralowerdiagonalbengali"] = 2545;
				e["ramiddlediagonalbengali"] = 2544;
				e["ramshorn"] = 612;
				e["ratio"] = 8758;
				e["rbopomofo"] = 12566;
				e["rcaron"] = 345;
				e["rcedilla"] = 343;
				e["rcircle"] = 9441;
				e["rcommaaccent"] = 343;
				e["rdblgrave"] = 529;
				e["rdotaccent"] = 7769;
				e["rdotbelow"] = 7771;
				e["rdotbelowmacron"] = 7773;
				e["referencemark"] = 8251;
				e["reflexsubset"] = 8838;
				e["reflexsuperset"] = 8839;
				e["registered"] = 174;
				e["registersans"] = 63720;
				e["registerserif"] = 63194;
				e["reharabic"] = 1585;
				e["reharmenian"] = 1408;
				e["rehfinalarabic"] = 65198;
				e["rehiragana"] = 12428;
				e["rekatakana"] = 12524;
				e["rekatakanahalfwidth"] = 65434;
				e["resh"] = 1512;
				e["reshdageshhebrew"] = 64328;
				e["reshhebrew"] = 1512;
				e["reversedtilde"] = 8765;
				e["reviahebrew"] = 1431;
				e["reviamugrashhebrew"] = 1431;
				e["revlogicalnot"] = 8976;
				e["rfishhook"] = 638;
				e["rfishhookreversed"] = 639;
				e["rhabengali"] = 2525;
				e["rhadeva"] = 2397;
				e["rho"] = 961;
				e["rhook"] = 637;
				e["rhookturned"] = 635;
				e["rhookturnedsuperior"] = 693;
				e["rhosymbolgreek"] = 1009;
				e["rhotichookmod"] = 734;
				e["rieulacirclekorean"] = 12913;
				e["rieulaparenkorean"] = 12817;
				e["rieulcirclekorean"] = 12899;
				e["rieulhieuhkorean"] = 12608;
				e["rieulkiyeokkorean"] = 12602;
				e["rieulkiyeoksioskorean"] = 12649;
				e["rieulkorean"] = 12601;
				e["rieulmieumkorean"] = 12603;
				e["rieulpansioskorean"] = 12652;
				e["rieulparenkorean"] = 12803;
				e["rieulphieuphkorean"] = 12607;
				e["rieulpieupkorean"] = 12604;
				e["rieulpieupsioskorean"] = 12651;
				e["rieulsioskorean"] = 12605;
				e["rieulthieuthkorean"] = 12606;
				e["rieultikeutkorean"] = 12650;
				e["rieulyeorinhieuhkorean"] = 12653;
				e["rightangle"] = 8735;
				e["righttackbelowcmb"] = 793;
				e["righttriangle"] = 8895;
				e["rihiragana"] = 12426;
				e["rikatakana"] = 12522;
				e["rikatakanahalfwidth"] = 65432;
				e["ring"] = 730;
				e["ringbelowcmb"] = 805;
				e["ringcmb"] = 778;
				e["ringhalfleft"] = 703;
				e["ringhalfleftarmenian"] = 1369;
				e["ringhalfleftbelowcmb"] = 796;
				e["ringhalfleftcentered"] = 723;
				e["ringhalfright"] = 702;
				e["ringhalfrightbelowcmb"] = 825;
				e["ringhalfrightcentered"] = 722;
				e["rinvertedbreve"] = 531;
				e["rittorusquare"] = 13137;
				e["rlinebelow"] = 7775;
				e["rlongleg"] = 636;
				e["rlonglegturned"] = 634;
				e["rmonospace"] = 65362;
				e["rohiragana"] = 12429;
				e["rokatakana"] = 12525;
				e["rokatakanahalfwidth"] = 65435;
				e["roruathai"] = 3619;
				e["rparen"] = 9389;
				e["rrabengali"] = 2524;
				e["rradeva"] = 2353;
				e["rragurmukhi"] = 2652;
				e["rreharabic"] = 1681;
				e["rrehfinalarabic"] = 64397;
				e["rrvocalicbengali"] = 2528;
				e["rrvocalicdeva"] = 2400;
				e["rrvocalicgujarati"] = 2784;
				e["rrvocalicvowelsignbengali"] = 2500;
				e["rrvocalicvowelsigndeva"] = 2372;
				e["rrvocalicvowelsigngujarati"] = 2756;
				e["rsuperior"] = 63217;
				e["rtblock"] = 9616;
				e["rturned"] = 633;
				e["rturnedsuperior"] = 692;
				e["ruhiragana"] = 12427;
				e["rukatakana"] = 12523;
				e["rukatakanahalfwidth"] = 65433;
				e["rupeemarkbengali"] = 2546;
				e["rupeesignbengali"] = 2547;
				e["rupiah"] = 63197;
				e["ruthai"] = 3620;
				e["rvocalicbengali"] = 2443;
				e["rvocalicdeva"] = 2315;
				e["rvocalicgujarati"] = 2699;
				e["rvocalicvowelsignbengali"] = 2499;
				e["rvocalicvowelsigndeva"] = 2371;
				e["rvocalicvowelsigngujarati"] = 2755;
				e["s"] = 115;
				e["sabengali"] = 2488;
				e["sacute"] = 347;
				e["sacutedotaccent"] = 7781;
				e["sadarabic"] = 1589;
				e["sadeva"] = 2360;
				e["sadfinalarabic"] = 65210;
				e["sadinitialarabic"] = 65211;
				e["sadmedialarabic"] = 65212;
				e["sagujarati"] = 2744;
				e["sagurmukhi"] = 2616;
				e["sahiragana"] = 12373;
				e["sakatakana"] = 12469;
				e["sakatakanahalfwidth"] = 65403;
				e["sallallahoualayhewasallamarabic"] = 65018;
				e["samekh"] = 1505;
				e["samekhdagesh"] = 64321;
				e["samekhdageshhebrew"] = 64321;
				e["samekhhebrew"] = 1505;
				e["saraaathai"] = 3634;
				e["saraaethai"] = 3649;
				e["saraaimaimalaithai"] = 3652;
				e["saraaimaimuanthai"] = 3651;
				e["saraamthai"] = 3635;
				e["saraathai"] = 3632;
				e["saraethai"] = 3648;
				e["saraiileftthai"] = 63622;
				e["saraiithai"] = 3637;
				e["saraileftthai"] = 63621;
				e["saraithai"] = 3636;
				e["saraothai"] = 3650;
				e["saraueeleftthai"] = 63624;
				e["saraueethai"] = 3639;
				e["saraueleftthai"] = 63623;
				e["sarauethai"] = 3638;
				e["sarauthai"] = 3640;
				e["sarauuthai"] = 3641;
				e["sbopomofo"] = 12569;
				e["scaron"] = 353;
				e["scarondotaccent"] = 7783;
				e["scedilla"] = 351;
				e["schwa"] = 601;
				e["schwacyrillic"] = 1241;
				e["schwadieresiscyrillic"] = 1243;
				e["schwahook"] = 602;
				e["scircle"] = 9442;
				e["scircumflex"] = 349;
				e["scommaaccent"] = 537;
				e["sdotaccent"] = 7777;
				e["sdotbelow"] = 7779;
				e["sdotbelowdotaccent"] = 7785;
				e["seagullbelowcmb"] = 828;
				e["second"] = 8243;
				e["secondtonechinese"] = 714;
				e["section"] = 167;
				e["seenarabic"] = 1587;
				e["seenfinalarabic"] = 65202;
				e["seeninitialarabic"] = 65203;
				e["seenmedialarabic"] = 65204;
				e["segol"] = 1462;
				e["segol13"] = 1462;
				e["segol1f"] = 1462;
				e["segol2c"] = 1462;
				e["segolhebrew"] = 1462;
				e["segolnarrowhebrew"] = 1462;
				e["segolquarterhebrew"] = 1462;
				e["segoltahebrew"] = 1426;
				e["segolwidehebrew"] = 1462;
				e["seharmenian"] = 1405;
				e["sehiragana"] = 12379;
				e["sekatakana"] = 12475;
				e["sekatakanahalfwidth"] = 65406;
				e["semicolon"] = 59;
				e["semicolonarabic"] = 1563;
				e["semicolonmonospace"] = 65307;
				e["semicolonsmall"] = 65108;
				e["semivoicedmarkkana"] = 12444;
				e["semivoicedmarkkanahalfwidth"] = 65439;
				e["sentisquare"] = 13090;
				e["sentosquare"] = 13091;
				e["seven"] = 55;
				e["sevenarabic"] = 1639;
				e["sevenbengali"] = 2541;
				e["sevencircle"] = 9318;
				e["sevencircleinversesansserif"] = 10128;
				e["sevendeva"] = 2413;
				e["seveneighths"] = 8542;
				e["sevengujarati"] = 2797;
				e["sevengurmukhi"] = 2669;
				e["sevenhackarabic"] = 1639;
				e["sevenhangzhou"] = 12327;
				e["sevenideographicparen"] = 12838;
				e["seveninferior"] = 8327;
				e["sevenmonospace"] = 65303;
				e["sevenoldstyle"] = 63287;
				e["sevenparen"] = 9338;
				e["sevenperiod"] = 9358;
				e["sevenpersian"] = 1783;
				e["sevenroman"] = 8566;
				e["sevensuperior"] = 8311;
				e["seventeencircle"] = 9328;
				e["seventeenparen"] = 9348;
				e["seventeenperiod"] = 9368;
				e["seventhai"] = 3671;
				e["sfthyphen"] = 173;
				e["shaarmenian"] = 1399;
				e["shabengali"] = 2486;
				e["shacyrillic"] = 1096;
				e["shaddaarabic"] = 1617;
				e["shaddadammaarabic"] = 64609;
				e["shaddadammatanarabic"] = 64606;
				e["shaddafathaarabic"] = 64608;
				e["shaddakasraarabic"] = 64610;
				e["shaddakasratanarabic"] = 64607;
				e["shade"] = 9618;
				e["shadedark"] = 9619;
				e["shadelight"] = 9617;
				e["shademedium"] = 9618;
				e["shadeva"] = 2358;
				e["shagujarati"] = 2742;
				e["shagurmukhi"] = 2614;
				e["shalshelethebrew"] = 1427;
				e["shbopomofo"] = 12565;
				e["shchacyrillic"] = 1097;
				e["sheenarabic"] = 1588;
				e["sheenfinalarabic"] = 65206;
				e["sheeninitialarabic"] = 65207;
				e["sheenmedialarabic"] = 65208;
				e["sheicoptic"] = 995;
				e["sheqel"] = 8362;
				e["sheqelhebrew"] = 8362;
				e["sheva"] = 1456;
				e["sheva115"] = 1456;
				e["sheva15"] = 1456;
				e["sheva22"] = 1456;
				e["sheva2e"] = 1456;
				e["shevahebrew"] = 1456;
				e["shevanarrowhebrew"] = 1456;
				e["shevaquarterhebrew"] = 1456;
				e["shevawidehebrew"] = 1456;
				e["shhacyrillic"] = 1211;
				e["shimacoptic"] = 1005;
				e["shin"] = 1513;
				e["shindagesh"] = 64329;
				e["shindageshhebrew"] = 64329;
				e["shindageshshindot"] = 64300;
				e["shindageshshindothebrew"] = 64300;
				e["shindageshsindot"] = 64301;
				e["shindageshsindothebrew"] = 64301;
				e["shindothebrew"] = 1473;
				e["shinhebrew"] = 1513;
				e["shinshindot"] = 64298;
				e["shinshindothebrew"] = 64298;
				e["shinsindot"] = 64299;
				e["shinsindothebrew"] = 64299;
				e["shook"] = 642;
				e["sigma"] = 963;
				e["sigma1"] = 962;
				e["sigmafinal"] = 962;
				e["sigmalunatesymbolgreek"] = 1010;
				e["sihiragana"] = 12375;
				e["sikatakana"] = 12471;
				e["sikatakanahalfwidth"] = 65404;
				e["siluqhebrew"] = 1469;
				e["siluqlefthebrew"] = 1469;
				e["similar"] = 8764;
				e["sindothebrew"] = 1474;
				e["siosacirclekorean"] = 12916;
				e["siosaparenkorean"] = 12820;
				e["sioscieuckorean"] = 12670;
				e["sioscirclekorean"] = 12902;
				e["sioskiyeokkorean"] = 12666;
				e["sioskorean"] = 12613;
				e["siosnieunkorean"] = 12667;
				e["siosparenkorean"] = 12806;
				e["siospieupkorean"] = 12669;
				e["siostikeutkorean"] = 12668;
				e["six"] = 54;
				e["sixarabic"] = 1638;
				e["sixbengali"] = 2540;
				e["sixcircle"] = 9317;
				e["sixcircleinversesansserif"] = 10127;
				e["sixdeva"] = 2412;
				e["sixgujarati"] = 2796;
				e["sixgurmukhi"] = 2668;
				e["sixhackarabic"] = 1638;
				e["sixhangzhou"] = 12326;
				e["sixideographicparen"] = 12837;
				e["sixinferior"] = 8326;
				e["sixmonospace"] = 65302;
				e["sixoldstyle"] = 63286;
				e["sixparen"] = 9337;
				e["sixperiod"] = 9357;
				e["sixpersian"] = 1782;
				e["sixroman"] = 8565;
				e["sixsuperior"] = 8310;
				e["sixteencircle"] = 9327;
				e["sixteencurrencydenominatorbengali"] = 2553;
				e["sixteenparen"] = 9347;
				e["sixteenperiod"] = 9367;
				e["sixthai"] = 3670;
				e["slash"] = 47;
				e["slashmonospace"] = 65295;
				e["slong"] = 383;
				e["slongdotaccent"] = 7835;
				e["smileface"] = 9786;
				e["smonospace"] = 65363;
				e["sofpasuqhebrew"] = 1475;
				e["softhyphen"] = 173;
				e["softsigncyrillic"] = 1100;
				e["sohiragana"] = 12381;
				e["sokatakana"] = 12477;
				e["sokatakanahalfwidth"] = 65407;
				e["soliduslongoverlaycmb"] = 824;
				e["solidusshortoverlaycmb"] = 823;
				e["sorusithai"] = 3625;
				e["sosalathai"] = 3624;
				e["sosothai"] = 3595;
				e["sosuathai"] = 3626;
				e["space"] = 32;
				e["spacehackarabic"] = 32;
				e["spade"] = 9824;
				e["spadesuitblack"] = 9824;
				e["spadesuitwhite"] = 9828;
				e["sparen"] = 9390;
				e["squarebelowcmb"] = 827;
				e["squarecc"] = 13252;
				e["squarecm"] = 13213;
				e["squarediagonalcrosshatchfill"] = 9641;
				e["squarehorizontalfill"] = 9636;
				e["squarekg"] = 13199;
				e["squarekm"] = 13214;
				e["squarekmcapital"] = 13262;
				e["squareln"] = 13265;
				e["squarelog"] = 13266;
				e["squaremg"] = 13198;
				e["squaremil"] = 13269;
				e["squaremm"] = 13212;
				e["squaremsquared"] = 13217;
				e["squareorthogonalcrosshatchfill"] = 9638;
				e["squareupperlefttolowerrightfill"] = 9639;
				e["squareupperrighttolowerleftfill"] = 9640;
				e["squareverticalfill"] = 9637;
				e["squarewhitewithsmallblack"] = 9635;
				e["srsquare"] = 13275;
				e["ssabengali"] = 2487;
				e["ssadeva"] = 2359;
				e["ssagujarati"] = 2743;
				e["ssangcieuckorean"] = 12617;
				e["ssanghieuhkorean"] = 12677;
				e["ssangieungkorean"] = 12672;
				e["ssangkiyeokkorean"] = 12594;
				e["ssangnieunkorean"] = 12645;
				e["ssangpieupkorean"] = 12611;
				e["ssangsioskorean"] = 12614;
				e["ssangtikeutkorean"] = 12600;
				e["ssuperior"] = 63218;
				e["sterling"] = 163;
				e["sterlingmonospace"] = 65505;
				e["strokelongoverlaycmb"] = 822;
				e["strokeshortoverlaycmb"] = 821;
				e["subset"] = 8834;
				e["subsetnotequal"] = 8842;
				e["subsetorequal"] = 8838;
				e["succeeds"] = 8827;
				e["suchthat"] = 8715;
				e["suhiragana"] = 12377;
				e["sukatakana"] = 12473;
				e["sukatakanahalfwidth"] = 65405;
				e["sukunarabic"] = 1618;
				e["summation"] = 8721;
				e["sun"] = 9788;
				e["superset"] = 8835;
				e["supersetnotequal"] = 8843;
				e["supersetorequal"] = 8839;
				e["svsquare"] = 13276;
				e["syouwaerasquare"] = 13180;
				e["t"] = 116;
				e["tabengali"] = 2468;
				e["tackdown"] = 8868;
				e["tackleft"] = 8867;
				e["tadeva"] = 2340;
				e["tagujarati"] = 2724;
				e["tagurmukhi"] = 2596;
				e["taharabic"] = 1591;
				e["tahfinalarabic"] = 65218;
				e["tahinitialarabic"] = 65219;
				e["tahiragana"] = 12383;
				e["tahmedialarabic"] = 65220;
				e["taisyouerasquare"] = 13181;
				e["takatakana"] = 12479;
				e["takatakanahalfwidth"] = 65408;
				e["tatweelarabic"] = 1600;
				e["tau"] = 964;
				e["tav"] = 1514;
				e["tavdages"] = 64330;
				e["tavdagesh"] = 64330;
				e["tavdageshhebrew"] = 64330;
				e["tavhebrew"] = 1514;
				e["tbar"] = 359;
				e["tbopomofo"] = 12554;
				e["tcaron"] = 357;
				e["tccurl"] = 680;
				e["tcedilla"] = 355;
				e["tcheharabic"] = 1670;
				e["tchehfinalarabic"] = 64379;
				e["tchehinitialarabic"] = 64380;
				e["tchehmedialarabic"] = 64381;
				e["tcircle"] = 9443;
				e["tcircumflexbelow"] = 7793;
				e["tcommaaccent"] = 355;
				e["tdieresis"] = 7831;
				e["tdotaccent"] = 7787;
				e["tdotbelow"] = 7789;
				e["tecyrillic"] = 1090;
				e["tedescendercyrillic"] = 1197;
				e["teharabic"] = 1578;
				e["tehfinalarabic"] = 65174;
				e["tehhahinitialarabic"] = 64674;
				e["tehhahisolatedarabic"] = 64524;
				e["tehinitialarabic"] = 65175;
				e["tehiragana"] = 12390;
				e["tehjeeminitialarabic"] = 64673;
				e["tehjeemisolatedarabic"] = 64523;
				e["tehmarbutaarabic"] = 1577;
				e["tehmarbutafinalarabic"] = 65172;
				e["tehmedialarabic"] = 65176;
				e["tehmeeminitialarabic"] = 64676;
				e["tehmeemisolatedarabic"] = 64526;
				e["tehnoonfinalarabic"] = 64627;
				e["tekatakana"] = 12486;
				e["tekatakanahalfwidth"] = 65411;
				e["telephone"] = 8481;
				e["telephoneblack"] = 9742;
				e["telishagedolahebrew"] = 1440;
				e["telishaqetanahebrew"] = 1449;
				e["tencircle"] = 9321;
				e["tenideographicparen"] = 12841;
				e["tenparen"] = 9341;
				e["tenperiod"] = 9361;
				e["tenroman"] = 8569;
				e["tesh"] = 679;
				e["tet"] = 1496;
				e["tetdagesh"] = 64312;
				e["tetdageshhebrew"] = 64312;
				e["tethebrew"] = 1496;
				e["tetsecyrillic"] = 1205;
				e["tevirhebrew"] = 1435;
				e["tevirlefthebrew"] = 1435;
				e["thabengali"] = 2469;
				e["thadeva"] = 2341;
				e["thagujarati"] = 2725;
				e["thagurmukhi"] = 2597;
				e["thalarabic"] = 1584;
				e["thalfinalarabic"] = 65196;
				e["thanthakhatlowleftthai"] = 63640;
				e["thanthakhatlowrightthai"] = 63639;
				e["thanthakhatthai"] = 3660;
				e["thanthakhatupperleftthai"] = 63638;
				e["theharabic"] = 1579;
				e["thehfinalarabic"] = 65178;
				e["thehinitialarabic"] = 65179;
				e["thehmedialarabic"] = 65180;
				e["thereexists"] = 8707;
				e["therefore"] = 8756;
				e["theta"] = 952;
				e["theta1"] = 977;
				e["thetasymbolgreek"] = 977;
				e["thieuthacirclekorean"] = 12921;
				e["thieuthaparenkorean"] = 12825;
				e["thieuthcirclekorean"] = 12907;
				e["thieuthkorean"] = 12620;
				e["thieuthparenkorean"] = 12811;
				e["thirteencircle"] = 9324;
				e["thirteenparen"] = 9344;
				e["thirteenperiod"] = 9364;
				e["thonangmonthothai"] = 3601;
				e["thook"] = 429;
				e["thophuthaothai"] = 3602;
				e["thorn"] = 254;
				e["thothahanthai"] = 3607;
				e["thothanthai"] = 3600;
				e["thothongthai"] = 3608;
				e["thothungthai"] = 3606;
				e["thousandcyrillic"] = 1154;
				e["thousandsseparatorarabic"] = 1644;
				e["thousandsseparatorpersian"] = 1644;
				e["three"] = 51;
				e["threearabic"] = 1635;
				e["threebengali"] = 2537;
				e["threecircle"] = 9314;
				e["threecircleinversesansserif"] = 10124;
				e["threedeva"] = 2409;
				e["threeeighths"] = 8540;
				e["threegujarati"] = 2793;
				e["threegurmukhi"] = 2665;
				e["threehackarabic"] = 1635;
				e["threehangzhou"] = 12323;
				e["threeideographicparen"] = 12834;
				e["threeinferior"] = 8323;
				e["threemonospace"] = 65299;
				e["threenumeratorbengali"] = 2550;
				e["threeoldstyle"] = 63283;
				e["threeparen"] = 9334;
				e["threeperiod"] = 9354;
				e["threepersian"] = 1779;
				e["threequarters"] = 190;
				e["threequartersemdash"] = 63198;
				e["threeroman"] = 8562;
				e["threesuperior"] = 179;
				e["threethai"] = 3667;
				e["thzsquare"] = 13204;
				e["tihiragana"] = 12385;
				e["tikatakana"] = 12481;
				e["tikatakanahalfwidth"] = 65409;
				e["tikeutacirclekorean"] = 12912;
				e["tikeutaparenkorean"] = 12816;
				e["tikeutcirclekorean"] = 12898;
				e["tikeutkorean"] = 12599;
				e["tikeutparenkorean"] = 12802;
				e["tilde"] = 732;
				e["tildebelowcmb"] = 816;
				e["tildecmb"] = 771;
				e["tildecomb"] = 771;
				e["tildedoublecmb"] = 864;
				e["tildeoperator"] = 8764;
				e["tildeoverlaycmb"] = 820;
				e["tildeverticalcmb"] = 830;
				e["timescircle"] = 8855;
				e["tipehahebrew"] = 1430;
				e["tipehalefthebrew"] = 1430;
				e["tippigurmukhi"] = 2672;
				e["titlocyrilliccmb"] = 1155;
				e["tiwnarmenian"] = 1407;
				e["tlinebelow"] = 7791;
				e["tmonospace"] = 65364;
				e["toarmenian"] = 1385;
				e["tohiragana"] = 12392;
				e["tokatakana"] = 12488;
				e["tokatakanahalfwidth"] = 65412;
				e["tonebarextrahighmod"] = 741;
				e["tonebarextralowmod"] = 745;
				e["tonebarhighmod"] = 742;
				e["tonebarlowmod"] = 744;
				e["tonebarmidmod"] = 743;
				e["tonefive"] = 445;
				e["tonesix"] = 389;
				e["tonetwo"] = 424;
				e["tonos"] = 900;
				e["tonsquare"] = 13095;
				e["topatakthai"] = 3599;
				e["tortoiseshellbracketleft"] = 12308;
				e["tortoiseshellbracketleftsmall"] = 65117;
				e["tortoiseshellbracketleftvertical"] = 65081;
				e["tortoiseshellbracketright"] = 12309;
				e["tortoiseshellbracketrightsmall"] = 65118;
				e["tortoiseshellbracketrightvertical"] = 65082;
				e["totaothai"] = 3605;
				e["tpalatalhook"] = 427;
				e["tparen"] = 9391;
				e["trademark"] = 8482;
				e["trademarksans"] = 63722;
				e["trademarkserif"] = 63195;
				e["tretroflexhook"] = 648;
				e["triagdn"] = 9660;
				e["triaglf"] = 9668;
				e["triagrt"] = 9658;
				e["triagup"] = 9650;
				e["ts"] = 678;
				e["tsadi"] = 1510;
				e["tsadidagesh"] = 64326;
				e["tsadidageshhebrew"] = 64326;
				e["tsadihebrew"] = 1510;
				e["tsecyrillic"] = 1094;
				e["tsere"] = 1461;
				e["tsere12"] = 1461;
				e["tsere1e"] = 1461;
				e["tsere2b"] = 1461;
				e["tserehebrew"] = 1461;
				e["tserenarrowhebrew"] = 1461;
				e["tserequarterhebrew"] = 1461;
				e["tserewidehebrew"] = 1461;
				e["tshecyrillic"] = 1115;
				e["tsuperior"] = 63219;
				e["ttabengali"] = 2463;
				e["ttadeva"] = 2335;
				e["ttagujarati"] = 2719;
				e["ttagurmukhi"] = 2591;
				e["tteharabic"] = 1657;
				e["ttehfinalarabic"] = 64359;
				e["ttehinitialarabic"] = 64360;
				e["ttehmedialarabic"] = 64361;
				e["tthabengali"] = 2464;
				e["tthadeva"] = 2336;
				e["tthagujarati"] = 2720;
				e["tthagurmukhi"] = 2592;
				e["tturned"] = 647;
				e["tuhiragana"] = 12388;
				e["tukatakana"] = 12484;
				e["tukatakanahalfwidth"] = 65410;
				e["tusmallhiragana"] = 12387;
				e["tusmallkatakana"] = 12483;
				e["tusmallkatakanahalfwidth"] = 65391;
				e["twelvecircle"] = 9323;
				e["twelveparen"] = 9343;
				e["twelveperiod"] = 9363;
				e["twelveroman"] = 8571;
				e["twentycircle"] = 9331;
				e["twentyhangzhou"] = 21316;
				e["twentyparen"] = 9351;
				e["twentyperiod"] = 9371;
				e["two"] = 50;
				e["twoarabic"] = 1634;
				e["twobengali"] = 2536;
				e["twocircle"] = 9313;
				e["twocircleinversesansserif"] = 10123;
				e["twodeva"] = 2408;
				e["twodotenleader"] = 8229;
				e["twodotleader"] = 8229;
				e["twodotleadervertical"] = 65072;
				e["twogujarati"] = 2792;
				e["twogurmukhi"] = 2664;
				e["twohackarabic"] = 1634;
				e["twohangzhou"] = 12322;
				e["twoideographicparen"] = 12833;
				e["twoinferior"] = 8322;
				e["twomonospace"] = 65298;
				e["twonumeratorbengali"] = 2549;
				e["twooldstyle"] = 63282;
				e["twoparen"] = 9333;
				e["twoperiod"] = 9353;
				e["twopersian"] = 1778;
				e["tworoman"] = 8561;
				e["twostroke"] = 443;
				e["twosuperior"] = 178;
				e["twothai"] = 3666;
				e["twothirds"] = 8532;
				e["u"] = 117;
				e["uacute"] = 250;
				e["ubar"] = 649;
				e["ubengali"] = 2441;
				e["ubopomofo"] = 12584;
				e["ubreve"] = 365;
				e["ucaron"] = 468;
				e["ucircle"] = 9444;
				e["ucircumflex"] = 251;
				e["ucircumflexbelow"] = 7799;
				e["ucyrillic"] = 1091;
				e["udattadeva"] = 2385;
				e["udblacute"] = 369;
				e["udblgrave"] = 533;
				e["udeva"] = 2313;
				e["udieresis"] = 252;
				e["udieresisacute"] = 472;
				e["udieresisbelow"] = 7795;
				e["udieresiscaron"] = 474;
				e["udieresiscyrillic"] = 1265;
				e["udieresisgrave"] = 476;
				e["udieresismacron"] = 470;
				e["udotbelow"] = 7909;
				e["ugrave"] = 249;
				e["ugujarati"] = 2697;
				e["ugurmukhi"] = 2569;
				e["uhiragana"] = 12358;
				e["uhookabove"] = 7911;
				e["uhorn"] = 432;
				e["uhornacute"] = 7913;
				e["uhorndotbelow"] = 7921;
				e["uhorngrave"] = 7915;
				e["uhornhookabove"] = 7917;
				e["uhorntilde"] = 7919;
				e["uhungarumlaut"] = 369;
				e["uhungarumlautcyrillic"] = 1267;
				e["uinvertedbreve"] = 535;
				e["ukatakana"] = 12454;
				e["ukatakanahalfwidth"] = 65395;
				e["ukcyrillic"] = 1145;
				e["ukorean"] = 12636;
				e["umacron"] = 363;
				e["umacroncyrillic"] = 1263;
				e["umacrondieresis"] = 7803;
				e["umatragurmukhi"] = 2625;
				e["umonospace"] = 65365;
				e["underscore"] = 95;
				e["underscoredbl"] = 8215;
				e["underscoremonospace"] = 65343;
				e["underscorevertical"] = 65075;
				e["underscorewavy"] = 65103;
				e["union"] = 8746;
				e["universal"] = 8704;
				e["uogonek"] = 371;
				e["uparen"] = 9392;
				e["upblock"] = 9600;
				e["upperdothebrew"] = 1476;
				e["upsilon"] = 965;
				e["upsilondieresis"] = 971;
				e["upsilondieresistonos"] = 944;
				e["upsilonlatin"] = 650;
				e["upsilontonos"] = 973;
				e["uptackbelowcmb"] = 797;
				e["uptackmod"] = 724;
				e["uragurmukhi"] = 2675;
				e["uring"] = 367;
				e["ushortcyrillic"] = 1118;
				e["usmallhiragana"] = 12357;
				e["usmallkatakana"] = 12453;
				e["usmallkatakanahalfwidth"] = 65385;
				e["ustraightcyrillic"] = 1199;
				e["ustraightstrokecyrillic"] = 1201;
				e["utilde"] = 361;
				e["utildeacute"] = 7801;
				e["utildebelow"] = 7797;
				e["uubengali"] = 2442;
				e["uudeva"] = 2314;
				e["uugujarati"] = 2698;
				e["uugurmukhi"] = 2570;
				e["uumatragurmukhi"] = 2626;
				e["uuvowelsignbengali"] = 2498;
				e["uuvowelsigndeva"] = 2370;
				e["uuvowelsigngujarati"] = 2754;
				e["uvowelsignbengali"] = 2497;
				e["uvowelsigndeva"] = 2369;
				e["uvowelsigngujarati"] = 2753;
				e["v"] = 118;
				e["vadeva"] = 2357;
				e["vagujarati"] = 2741;
				e["vagurmukhi"] = 2613;
				e["vakatakana"] = 12535;
				e["vav"] = 1493;
				e["vavdagesh"] = 64309;
				e["vavdagesh65"] = 64309;
				e["vavdageshhebrew"] = 64309;
				e["vavhebrew"] = 1493;
				e["vavholam"] = 64331;
				e["vavholamhebrew"] = 64331;
				e["vavvavhebrew"] = 1520;
				e["vavyodhebrew"] = 1521;
				e["vcircle"] = 9445;
				e["vdotbelow"] = 7807;
				e["vecyrillic"] = 1074;
				e["veharabic"] = 1700;
				e["vehfinalarabic"] = 64363;
				e["vehinitialarabic"] = 64364;
				e["vehmedialarabic"] = 64365;
				e["vekatakana"] = 12537;
				e["venus"] = 9792;
				e["verticalbar"] = 124;
				e["verticallineabovecmb"] = 781;
				e["verticallinebelowcmb"] = 809;
				e["verticallinelowmod"] = 716;
				e["verticallinemod"] = 712;
				e["vewarmenian"] = 1406;
				e["vhook"] = 651;
				e["vikatakana"] = 12536;
				e["viramabengali"] = 2509;
				e["viramadeva"] = 2381;
				e["viramagujarati"] = 2765;
				e["visargabengali"] = 2435;
				e["visargadeva"] = 2307;
				e["visargagujarati"] = 2691;
				e["vmonospace"] = 65366;
				e["voarmenian"] = 1400;
				e["voicediterationhiragana"] = 12446;
				e["voicediterationkatakana"] = 12542;
				e["voicedmarkkana"] = 12443;
				e["voicedmarkkanahalfwidth"] = 65438;
				e["vokatakana"] = 12538;
				e["vparen"] = 9393;
				e["vtilde"] = 7805;
				e["vturned"] = 652;
				e["vuhiragana"] = 12436;
				e["vukatakana"] = 12532;
				e["w"] = 119;
				e["wacute"] = 7811;
				e["waekorean"] = 12633;
				e["wahiragana"] = 12431;
				e["wakatakana"] = 12527;
				e["wakatakanahalfwidth"] = 65436;
				e["wakorean"] = 12632;
				e["wasmallhiragana"] = 12430;
				e["wasmallkatakana"] = 12526;
				e["wattosquare"] = 13143;
				e["wavedash"] = 12316;
				e["wavyunderscorevertical"] = 65076;
				e["wawarabic"] = 1608;
				e["wawfinalarabic"] = 65262;
				e["wawhamzaabovearabic"] = 1572;
				e["wawhamzaabovefinalarabic"] = 65158;
				e["wbsquare"] = 13277;
				e["wcircle"] = 9446;
				e["wcircumflex"] = 373;
				e["wdieresis"] = 7813;
				e["wdotaccent"] = 7815;
				e["wdotbelow"] = 7817;
				e["wehiragana"] = 12433;
				e["weierstrass"] = 8472;
				e["wekatakana"] = 12529;
				e["wekorean"] = 12638;
				e["weokorean"] = 12637;
				e["wgrave"] = 7809;
				e["whitebullet"] = 9702;
				e["whitecircle"] = 9675;
				e["whitecircleinverse"] = 9689;
				e["whitecornerbracketleft"] = 12302;
				e["whitecornerbracketleftvertical"] = 65091;
				e["whitecornerbracketright"] = 12303;
				e["whitecornerbracketrightvertical"] = 65092;
				e["whitediamond"] = 9671;
				e["whitediamondcontainingblacksmalldiamond"] = 9672;
				e["whitedownpointingsmalltriangle"] = 9663;
				e["whitedownpointingtriangle"] = 9661;
				e["whiteleftpointingsmalltriangle"] = 9667;
				e["whiteleftpointingtriangle"] = 9665;
				e["whitelenticularbracketleft"] = 12310;
				e["whitelenticularbracketright"] = 12311;
				e["whiterightpointingsmalltriangle"] = 9657;
				e["whiterightpointingtriangle"] = 9655;
				e["whitesmallsquare"] = 9643;
				e["whitesmilingface"] = 9786;
				e["whitesquare"] = 9633;
				e["whitestar"] = 9734;
				e["whitetelephone"] = 9743;
				e["whitetortoiseshellbracketleft"] = 12312;
				e["whitetortoiseshellbracketright"] = 12313;
				e["whiteuppointingsmalltriangle"] = 9653;
				e["whiteuppointingtriangle"] = 9651;
				e["wihiragana"] = 12432;
				e["wikatakana"] = 12528;
				e["wikorean"] = 12639;
				e["wmonospace"] = 65367;
				e["wohiragana"] = 12434;
				e["wokatakana"] = 12530;
				e["wokatakanahalfwidth"] = 65382;
				e["won"] = 8361;
				e["wonmonospace"] = 65510;
				e["wowaenthai"] = 3623;
				e["wparen"] = 9394;
				e["wring"] = 7832;
				e["wsuperior"] = 695;
				e["wturned"] = 653;
				e["wynn"] = 447;
				e["x"] = 120;
				e["xabovecmb"] = 829;
				e["xbopomofo"] = 12562;
				e["xcircle"] = 9447;
				e["xdieresis"] = 7821;
				e["xdotaccent"] = 7819;
				e["xeharmenian"] = 1389;
				e["xi"] = 958;
				e["xmonospace"] = 65368;
				e["xparen"] = 9395;
				e["xsuperior"] = 739;
				e["y"] = 121;
				e["yaadosquare"] = 13134;
				e["yabengali"] = 2479;
				e["yacute"] = 253;
				e["yadeva"] = 2351;
				e["yaekorean"] = 12626;
				e["yagujarati"] = 2735;
				e["yagurmukhi"] = 2607;
				e["yahiragana"] = 12420;
				e["yakatakana"] = 12516;
				e["yakatakanahalfwidth"] = 65428;
				e["yakorean"] = 12625;
				e["yamakkanthai"] = 3662;
				e["yasmallhiragana"] = 12419;
				e["yasmallkatakana"] = 12515;
				e["yasmallkatakanahalfwidth"] = 65388;
				e["yatcyrillic"] = 1123;
				e["ycircle"] = 9448;
				e["ycircumflex"] = 375;
				e["ydieresis"] = 255;
				e["ydotaccent"] = 7823;
				e["ydotbelow"] = 7925;
				e["yeharabic"] = 1610;
				e["yehbarreearabic"] = 1746;
				e["yehbarreefinalarabic"] = 64431;
				e["yehfinalarabic"] = 65266;
				e["yehhamzaabovearabic"] = 1574;
				e["yehhamzaabovefinalarabic"] = 65162;
				e["yehhamzaaboveinitialarabic"] = 65163;
				e["yehhamzaabovemedialarabic"] = 65164;
				e["yehinitialarabic"] = 65267;
				e["yehmedialarabic"] = 65268;
				e["yehmeeminitialarabic"] = 64733;
				e["yehmeemisolatedarabic"] = 64600;
				e["yehnoonfinalarabic"] = 64660;
				e["yehthreedotsbelowarabic"] = 1745;
				e["yekorean"] = 12630;
				e["yen"] = 165;
				e["yenmonospace"] = 65509;
				e["yeokorean"] = 12629;
				e["yeorinhieuhkorean"] = 12678;
				e["yerahbenyomohebrew"] = 1450;
				e["yerahbenyomolefthebrew"] = 1450;
				e["yericyrillic"] = 1099;
				e["yerudieresiscyrillic"] = 1273;
				e["yesieungkorean"] = 12673;
				e["yesieungpansioskorean"] = 12675;
				e["yesieungsioskorean"] = 12674;
				e["yetivhebrew"] = 1434;
				e["ygrave"] = 7923;
				e["yhook"] = 436;
				e["yhookabove"] = 7927;
				e["yiarmenian"] = 1397;
				e["yicyrillic"] = 1111;
				e["yikorean"] = 12642;
				e["yinyang"] = 9775;
				e["yiwnarmenian"] = 1410;
				e["ymonospace"] = 65369;
				e["yod"] = 1497;
				e["yoddagesh"] = 64313;
				e["yoddageshhebrew"] = 64313;
				e["yodhebrew"] = 1497;
				e["yodyodhebrew"] = 1522;
				e["yodyodpatahhebrew"] = 64287;
				e["yohiragana"] = 12424;
				e["yoikorean"] = 12681;
				e["yokatakana"] = 12520;
				e["yokatakanahalfwidth"] = 65430;
				e["yokorean"] = 12635;
				e["yosmallhiragana"] = 12423;
				e["yosmallkatakana"] = 12519;
				e["yosmallkatakanahalfwidth"] = 65390;
				e["yotgreek"] = 1011;
				e["yoyaekorean"] = 12680;
				e["yoyakorean"] = 12679;
				e["yoyakthai"] = 3618;
				e["yoyingthai"] = 3597;
				e["yparen"] = 9396;
				e["ypogegrammeni"] = 890;
				e["ypogegrammenigreekcmb"] = 837;
				e["yr"] = 422;
				e["yring"] = 7833;
				e["ysuperior"] = 696;
				e["ytilde"] = 7929;
				e["yturned"] = 654;
				e["yuhiragana"] = 12422;
				e["yuikorean"] = 12684;
				e["yukatakana"] = 12518;
				e["yukatakanahalfwidth"] = 65429;
				e["yukorean"] = 12640;
				e["yusbigcyrillic"] = 1131;
				e["yusbigiotifiedcyrillic"] = 1133;
				e["yuslittlecyrillic"] = 1127;
				e["yuslittleiotifiedcyrillic"] = 1129;
				e["yusmallhiragana"] = 12421;
				e["yusmallkatakana"] = 12517;
				e["yusmallkatakanahalfwidth"] = 65389;
				e["yuyekorean"] = 12683;
				e["yuyeokorean"] = 12682;
				e["yyabengali"] = 2527;
				e["yyadeva"] = 2399;
				e["z"] = 122;
				e["zaarmenian"] = 1382;
				e["zacute"] = 378;
				e["zadeva"] = 2395;
				e["zagurmukhi"] = 2651;
				e["zaharabic"] = 1592;
				e["zahfinalarabic"] = 65222;
				e["zahinitialarabic"] = 65223;
				e["zahiragana"] = 12374;
				e["zahmedialarabic"] = 65224;
				e["zainarabic"] = 1586;
				e["zainfinalarabic"] = 65200;
				e["zakatakana"] = 12470;
				e["zaqefgadolhebrew"] = 1429;
				e["zaqefqatanhebrew"] = 1428;
				e["zarqahebrew"] = 1432;
				e["zayin"] = 1494;
				e["zayindagesh"] = 64310;
				e["zayindageshhebrew"] = 64310;
				e["zayinhebrew"] = 1494;
				e["zbopomofo"] = 12567;
				e["zcaron"] = 382;
				e["zcircle"] = 9449;
				e["zcircumflex"] = 7825;
				e["zcurl"] = 657;
				e["zdot"] = 380;
				e["zdotaccent"] = 380;
				e["zdotbelow"] = 7827;
				e["zecyrillic"] = 1079;
				e["zedescendercyrillic"] = 1177;
				e["zedieresiscyrillic"] = 1247;
				e["zehiragana"] = 12380;
				e["zekatakana"] = 12476;
				e["zero"] = 48;
				e["zeroarabic"] = 1632;
				e["zerobengali"] = 2534;
				e["zerodeva"] = 2406;
				e["zerogujarati"] = 2790;
				e["zerogurmukhi"] = 2662;
				e["zerohackarabic"] = 1632;
				e["zeroinferior"] = 8320;
				e["zeromonospace"] = 65296;
				e["zerooldstyle"] = 63280;
				e["zeropersian"] = 1776;
				e["zerosuperior"] = 8304;
				e["zerothai"] = 3664;
				e["zerowidthjoiner"] = 65279;
				e["zerowidthnonjoiner"] = 8204;
				e["zerowidthspace"] = 8203;
				e["zeta"] = 950;
				e["zhbopomofo"] = 12563;
				e["zhearmenian"] = 1386;
				e["zhebrevecyrillic"] = 1218;
				e["zhecyrillic"] = 1078;
				e["zhedescendercyrillic"] = 1175;
				e["zhedieresiscyrillic"] = 1245;
				e["zihiragana"] = 12376;
				e["zikatakana"] = 12472;
				e["zinorhebrew"] = 1454;
				e["zlinebelow"] = 7829;
				e["zmonospace"] = 65370;
				e["zohiragana"] = 12382;
				e["zokatakana"] = 12478;
				e["zparen"] = 9397;
				e["zretroflexhook"] = 656;
				e["zstroke"] = 438;
				e["zuhiragana"] = 12378;
				e["zukatakana"] = 12474;
				e[".notdef"] = 0;
				e["angbracketleftbig"] = 9001;
				e["angbracketleftBig"] = 9001;
				e["angbracketleftbigg"] = 9001;
				e["angbracketleftBigg"] = 9001;
				e["angbracketrightBig"] = 9002;
				e["angbracketrightbig"] = 9002;
				e["angbracketrightBigg"] = 9002;
				e["angbracketrightbigg"] = 9002;
				e["arrowhookleft"] = 8618;
				e["arrowhookright"] = 8617;
				e["arrowlefttophalf"] = 8636;
				e["arrowleftbothalf"] = 8637;
				e["arrownortheast"] = 8599;
				e["arrownorthwest"] = 8598;
				e["arrowrighttophalf"] = 8640;
				e["arrowrightbothalf"] = 8641;
				e["arrowsoutheast"] = 8600;
				e["arrowsouthwest"] = 8601;
				e["backslashbig"] = 8726;
				e["backslashBig"] = 8726;
				e["backslashBigg"] = 8726;
				e["backslashbigg"] = 8726;
				e["bardbl"] = 8214;
				e["bracehtipdownleft"] = 65079;
				e["bracehtipdownright"] = 65079;
				e["bracehtipupleft"] = 65080;
				e["bracehtipupright"] = 65080;
				e["braceleftBig"] = 123;
				e["braceleftbig"] = 123;
				e["braceleftbigg"] = 123;
				e["braceleftBigg"] = 123;
				e["bracerightBig"] = 125;
				e["bracerightbig"] = 125;
				e["bracerightbigg"] = 125;
				e["bracerightBigg"] = 125;
				e["bracketleftbig"] = 91;
				e["bracketleftBig"] = 91;
				e["bracketleftbigg"] = 91;
				e["bracketleftBigg"] = 91;
				e["bracketrightBig"] = 93;
				e["bracketrightbig"] = 93;
				e["bracketrightbigg"] = 93;
				e["bracketrightBigg"] = 93;
				e["ceilingleftbig"] = 8968;
				e["ceilingleftBig"] = 8968;
				e["ceilingleftBigg"] = 8968;
				e["ceilingleftbigg"] = 8968;
				e["ceilingrightbig"] = 8969;
				e["ceilingrightBig"] = 8969;
				e["ceilingrightbigg"] = 8969;
				e["ceilingrightBigg"] = 8969;
				e["circledotdisplay"] = 8857;
				e["circledottext"] = 8857;
				e["circlemultiplydisplay"] = 8855;
				e["circlemultiplytext"] = 8855;
				e["circleplusdisplay"] = 8853;
				e["circleplustext"] = 8853;
				e["contintegraldisplay"] = 8750;
				e["contintegraltext"] = 8750;
				e["coproductdisplay"] = 8720;
				e["coproducttext"] = 8720;
				e["floorleftBig"] = 8970;
				e["floorleftbig"] = 8970;
				e["floorleftbigg"] = 8970;
				e["floorleftBigg"] = 8970;
				e["floorrightbig"] = 8971;
				e["floorrightBig"] = 8971;
				e["floorrightBigg"] = 8971;
				e["floorrightbigg"] = 8971;
				e["hatwide"] = 770;
				e["hatwider"] = 770;
				e["hatwidest"] = 770;
				e["intercal"] = 7488;
				e["integraldisplay"] = 8747;
				e["integraltext"] = 8747;
				e["intersectiondisplay"] = 8898;
				e["intersectiontext"] = 8898;
				e["logicalanddisplay"] = 8743;
				e["logicalandtext"] = 8743;
				e["logicalordisplay"] = 8744;
				e["logicalortext"] = 8744;
				e["parenleftBig"] = 40;
				e["parenleftbig"] = 40;
				e["parenleftBigg"] = 40;
				e["parenleftbigg"] = 40;
				e["parenrightBig"] = 41;
				e["parenrightbig"] = 41;
				e["parenrightBigg"] = 41;
				e["parenrightbigg"] = 41;
				e["prime"] = 8242;
				e["productdisplay"] = 8719;
				e["producttext"] = 8719;
				e["radicalbig"] = 8730;
				e["radicalBig"] = 8730;
				e["radicalBigg"] = 8730;
				e["radicalbigg"] = 8730;
				e["radicalbt"] = 8730;
				e["radicaltp"] = 8730;
				e["radicalvertex"] = 8730;
				e["slashbig"] = 47;
				e["slashBig"] = 47;
				e["slashBigg"] = 47;
				e["slashbigg"] = 47;
				e["summationdisplay"] = 8721;
				e["summationtext"] = 8721;
				e["tildewide"] = 732;
				e["tildewider"] = 732;
				e["tildewidest"] = 732;
				e["uniondisplay"] = 8899;
				e["unionmultidisplay"] = 8846;
				e["unionmultitext"] = 8846;
				e["unionsqdisplay"] = 8852;
				e["unionsqtext"] = 8852;
				e["uniontext"] = 8899;
				e["vextenddouble"] = 8741;
				e["vextendsingle"] = 8739
			});
			var i = r(function (e) {
				e["space"] = 32;
				e["a1"] = 9985;
				e["a2"] = 9986;
				e["a202"] = 9987;
				e["a3"] = 9988;
				e["a4"] = 9742;
				e["a5"] = 9990;
				e["a119"] = 9991;
				e["a118"] = 9992;
				e["a117"] = 9993;
				e["a11"] = 9755;
				e["a12"] = 9758;
				e["a13"] = 9996;
				e["a14"] = 9997;
				e["a15"] = 9998;
				e["a16"] = 9999;
				e["a105"] = 1e4;
				e["a17"] = 10001;
				e["a18"] = 10002;
				e["a19"] = 10003;
				e["a20"] = 10004;
				e["a21"] = 10005;
				e["a22"] = 10006;
				e["a23"] = 10007;
				e["a24"] = 10008;
				e["a25"] = 10009;
				e["a26"] = 10010;
				e["a27"] = 10011;
				e["a28"] = 10012;
				e["a6"] = 10013;
				e["a7"] = 10014;
				e["a8"] = 10015;
				e["a9"] = 10016;
				e["a10"] = 10017;
				e["a29"] = 10018;
				e["a30"] = 10019;
				e["a31"] = 10020;
				e["a32"] = 10021;
				e["a33"] = 10022;
				e["a34"] = 10023;
				e["a35"] = 9733;
				e["a36"] = 10025;
				e["a37"] = 10026;
				e["a38"] = 10027;
				e["a39"] = 10028;
				e["a40"] = 10029;
				e["a41"] = 10030;
				e["a42"] = 10031;
				e["a43"] = 10032;
				e["a44"] = 10033;
				e["a45"] = 10034;
				e["a46"] = 10035;
				e["a47"] = 10036;
				e["a48"] = 10037;
				e["a49"] = 10038;
				e["a50"] = 10039;
				e["a51"] = 10040;
				e["a52"] = 10041;
				e["a53"] = 10042;
				e["a54"] = 10043;
				e["a55"] = 10044;
				e["a56"] = 10045;
				e["a57"] = 10046;
				e["a58"] = 10047;
				e["a59"] = 10048;
				e["a60"] = 10049;
				e["a61"] = 10050;
				e["a62"] = 10051;
				e["a63"] = 10052;
				e["a64"] = 10053;
				e["a65"] = 10054;
				e["a66"] = 10055;
				e["a67"] = 10056;
				e["a68"] = 10057;
				e["a69"] = 10058;
				e["a70"] = 10059;
				e["a71"] = 9679;
				e["a72"] = 10061;
				e["a73"] = 9632;
				e["a74"] = 10063;
				e["a203"] = 10064;
				e["a75"] = 10065;
				e["a204"] = 10066;
				e["a76"] = 9650;
				e["a77"] = 9660;
				e["a78"] = 9670;
				e["a79"] = 10070;
				e["a81"] = 9687;
				e["a82"] = 10072;
				e["a83"] = 10073;
				e["a84"] = 10074;
				e["a97"] = 10075;
				e["a98"] = 10076;
				e["a99"] = 10077;
				e["a100"] = 10078;
				e["a101"] = 10081;
				e["a102"] = 10082;
				e["a103"] = 10083;
				e["a104"] = 10084;
				e["a106"] = 10085;
				e["a107"] = 10086;
				e["a108"] = 10087;
				e["a112"] = 9827;
				e["a111"] = 9830;
				e["a110"] = 9829;
				e["a109"] = 9824;
				e["a120"] = 9312;
				e["a121"] = 9313;
				e["a122"] = 9314;
				e["a123"] = 9315;
				e["a124"] = 9316;
				e["a125"] = 9317;
				e["a126"] = 9318;
				e["a127"] = 9319;
				e["a128"] = 9320;
				e["a129"] = 9321;
				e["a130"] = 10102;
				e["a131"] = 10103;
				e["a132"] = 10104;
				e["a133"] = 10105;
				e["a134"] = 10106;
				e["a135"] = 10107;
				e["a136"] = 10108;
				e["a137"] = 10109;
				e["a138"] = 10110;
				e["a139"] = 10111;
				e["a140"] = 10112;
				e["a141"] = 10113;
				e["a142"] = 10114;
				e["a143"] = 10115;
				e["a144"] = 10116;
				e["a145"] = 10117;
				e["a146"] = 10118;
				e["a147"] = 10119;
				e["a148"] = 10120;
				e["a149"] = 10121;
				e["a150"] = 10122;
				e["a151"] = 10123;
				e["a152"] = 10124;
				e["a153"] = 10125;
				e["a154"] = 10126;
				e["a155"] = 10127;
				e["a156"] = 10128;
				e["a157"] = 10129;
				e["a158"] = 10130;
				e["a159"] = 10131;
				e["a160"] = 10132;
				e["a161"] = 8594;
				e["a163"] = 8596;
				e["a164"] = 8597;
				e["a196"] = 10136;
				e["a165"] = 10137;
				e["a192"] = 10138;
				e["a166"] = 10139;
				e["a167"] = 10140;
				e["a168"] = 10141;
				e["a169"] = 10142;
				e["a170"] = 10143;
				e["a171"] = 10144;
				e["a172"] = 10145;
				e["a173"] = 10146;
				e["a162"] = 10147;
				e["a174"] = 10148;
				e["a175"] = 10149;
				e["a176"] = 10150;
				e["a177"] = 10151;
				e["a178"] = 10152;
				e["a179"] = 10153;
				e["a193"] = 10154;
				e["a180"] = 10155;
				e["a199"] = 10156;
				e["a181"] = 10157;
				e["a200"] = 10158;
				e["a182"] = 10159;
				e["a201"] = 10161;
				e["a183"] = 10162;
				e["a184"] = 10163;
				e["a197"] = 10164;
				e["a185"] = 10165;
				e["a194"] = 10166;
				e["a198"] = 10167;
				e["a186"] = 10168;
				e["a195"] = 10169;
				e["a187"] = 10170;
				e["a188"] = 10171;
				e["a189"] = 10172;
				e["a190"] = 10173;
				e["a191"] = 10174;
				e["a89"] = 10088;
				e["a90"] = 10089;
				e["a93"] = 10090;
				e["a94"] = 10091;
				e["a91"] = 10092;
				e["a92"] = 10093;
				e["a205"] = 10094;
				e["a85"] = 10095;
				e["a206"] = 10096;
				e["a86"] = 10097;
				e["a87"] = 10098;
				e["a88"] = 10099;
				e["a95"] = 10100;
				e["a96"] = 10101;
				e[".notdef"] = 0
			});
			e.getGlyphsUnicode = a;
			e.getDingbatsGlyphsUnicode = i
		});
		(function (e, t) {
			t(e.pdfjsCoreJbig2 = {}, e.pdfjsSharedUtil, e.pdfjsCoreArithmeticDecoder)
		})(this, function (e, t, r) {
			var a = t.error;
			var i = t.log2;
			var n = t.readInt8;
			var s = t.readUint16;
			var o = t.readUint32;
			var l = t.shadow;
			var c = r.ArithmeticDecoder;
			var h = function e() {
				function t() {}
				t.prototype = {
					getContexts: function (e) {
						if (e in this) {
							return this[e]
						}
						return this[e] = new Int8Array(1 << 16)
					}
				};

				function r(e, t, r) {
					this.data = e;
					this.start = t;
					this.end = r
				}
				r.prototype = {
					get decoder() {
						var e = new c(this.data, this.start, this.end);
						return l(this, "decoder", e)
					},
					get contextCache() {
						var e = new t;
						return l(this, "contextCache", e)
					}
				};

				function h(e, t, r) {
					var a = e.getContexts(t);
					var i = 1;

					function n(e) {
						var t = 0;
						for (var n = 0; n < e; n++) {
							var s = r.readBit(a, i);
							i = i < 256 ? i << 1 | s : (i << 1 | s) & 511 | 256;
							t = t << 1 | s
						}
						return t >>> 0
					}
					var s = n(1);
					var o = n(1) ? n(1) ? n(1) ? n(1) ? n(1) ? n(32) + 4436 : n(12) + 340 : n(8) + 84 : n(6) + 20 : n(4) + 4 : n(2);
					return s === 0 ? o : o > 0 ? -o : null
				}

				function u(e, t, r) {
					var a = e.getContexts("IAID");
					var i = 1;
					for (var n = 0; n < r; n++) {
						var s = t.readBit(a, i);
						i = i << 1 | s
					}
					if (r < 31) {
						return i & (1 << r) - 1
					}
					return i & 2147483647
				}
				var f = ["SymbolDictionary", null, null, null, "IntermediateTextRegion", null, "ImmediateTextRegion", "ImmediateLosslessTextRegion", null, null, null, null, null, null, null, null, "patternDictionary", null, null, null, "IntermediateHalftoneRegion", null, "ImmediateHalftoneRegion", "ImmediateLosslessHalftoneRegion", null, null, null, null, null, null, null, null, null, null, null, null, "IntermediateGenericRegion", null, "ImmediateGenericRegion", "ImmediateLosslessGenericRegion", "IntermediateGenericRefinementRegion", null, "ImmediateGenericRefinementRegion", "ImmediateLosslessGenericRefinementRegion", null, null, null, null, "PageInformation", "EndOfPage", "EndOfStripe", "EndOfFile", "Profiles", "Tables", null, null, null, null, null, null, null, null, "Extension"];
				var d = [
					[{
						x: -1,
						y: -2
					}, {
						x: 0,
						y: -2
					}, {
						x: 1,
						y: -2
					}, {
						x: -2,
						y: -1
					}, {
						x: -1,
						y: -1
					}, {
						x: 0,
						y: -1
					}, {
						x: 1,
						y: -1
					}, {
						x: 2,
						y: -1
					}, {
						x: -4,
						y: 0
					}, {
						x: -3,
						y: 0
					}, {
						x: -2,
						y: 0
					}, {
						x: -1,
						y: 0
					}],
					[{
						x: -1,
						y: -2
					}, {
						x: 0,
						y: -2
					}, {
						x: 1,
						y: -2
					}, {
						x: 2,
						y: -2
					}, {
						x: -2,
						y: -1
					}, {
						x: -1,
						y: -1
					}, {
						x: 0,
						y: -1
					}, {
						x: 1,
						y: -1
					}, {
						x: 2,
						y: -1
					}, {
						x: -3,
						y: 0
					}, {
						x: -2,
						y: 0
					}, {
						x: -1,
						y: 0
					}],
					[{
						x: -1,
						y: -2
					}, {
						x: 0,
						y: -2
					}, {
						x: 1,
						y: -2
					}, {
						x: -2,
						y: -1
					}, {
						x: -1,
						y: -1
					}, {
						x: 0,
						y: -1
					}, {
						x: 1,
						y: -1
					}, {
						x: -2,
						y: 0
					}, {
						x: -1,
						y: 0
					}],
					[{
						x: -3,
						y: -1
					}, {
						x: -2,
						y: -1
					}, {
						x: -1,
						y: -1
					}, {
						x: 0,
						y: -1
					}, {
						x: 1,
						y: -1
					}, {
						x: -4,
						y: 0
					}, {
						x: -3,
						y: 0
					}, {
						x: -2,
						y: 0
					}, {
						x: -1,
						y: 0
					}]
				];
				var g = [{
					coding: [{
						x: 0,
						y: -1
					}, {
						x: 1,
						y: -1
					}, {
						x: -1,
						y: 0
					}],
					reference: [{
						x: 0,
						y: -1
					}, {
						x: 1,
						y: -1
					}, {
						x: -1,
						y: 0
					}, {
						x: 0,
						y: 0
					}, {
						x: 1,
						y: 0
					}, {
						x: -1,
						y: 1
					}, {
						x: 0,
						y: 1
					}, {
						x: 1,
						y: 1
					}]
				}, {
					coding: [{
						x: -1,
						y: -1
					}, {
						x: 0,
						y: -1
					}, {
						x: 1,
						y: -1
					}, {
						x: -1,
						y: 0
					}],
					reference: [{
						x: 0,
						y: -1
					}, {
						x: -1,
						y: 0
					}, {
						x: 0,
						y: 0
					}, {
						x: 1,
						y: 0
					}, {
						x: 0,
						y: 1
					}, {
						x: 1,
						y: 1
					}]
				}];
				var v = [39717, 1941, 229, 405];
				var p = [32, 8];

				function m(e, t, r) {
					var a = r.decoder;
					var i = r.contextCache.getContexts("GB");
					var n, s, o, l, c, h, u, f = [];
					var d = 31735;
					for (s = 0; s < t; s++) {
						c = f[s] = new Uint8Array(e);
						h = s < 1 ? c : f[s - 1];
						u = s < 2 ? c : f[s - 2];
						n = u[0] << 13 | u[1] << 12 | u[2] << 11 | h[0] << 7 | h[1] << 6 | h[2] << 5 | h[3] << 4;
						for (o = 0; o < e; o++) {
							c[o] = l = a.readBit(i, n);
							n = (n & d) << 1 | (o + 3 < e ? u[o + 3] << 11 : 0) | (o + 4 < e ? h[o + 4] << 4 : 0) | l
						}
					}
					return f
				}

				function b(e, t, r, i, n, s, o, l) {
					if (e) {
						a("JBIG2 error: MMR encoding is not supported")
					}
					if (i === 0 && !s && !n && o.length === 4 && o[0].x === 3 && o[0].y === -1 && o[1].x === -3 && o[1].y === -1 && o[2].x === 2 && o[2].y === -2 && o[3].x === -2 && o[3].y === -2) {
						return m(t, r, l)
					}
					var c = !!s;
					var h = d[i].concat(o);
					h.sort(function (e, t) {
						return e.y - t.y || e.x - t.x
					});
					var u = h.length;
					var f = new Int8Array(u);
					var g = new Int8Array(u);
					var p = [];
					var b = 0,
						y = 0,
						k = 0,
						w = 0;
					var C, x;
					for (x = 0; x < u; x++) {
						f[x] = h[x].x;
						g[x] = h[x].y;
						y = Math.min(y, h[x].x);
						k = Math.max(k, h[x].x);
						w = Math.min(w, h[x].y);
						if (x < u - 1 && h[x].y === h[x + 1].y && h[x].x === h[x + 1].x - 1) {
							b |= 1 << u - 1 - x
						} else {
							p.push(x)
						}
					}
					var S = p.length;
					var A = new Int8Array(S);
					var I = new Int8Array(S);
					var B = new Uint16Array(S);
					for (C = 0; C < S; C++) {
						x = p[C];
						A[C] = h[x].x;
						I[C] = h[x].y;
						B[C] = 1 << u - 1 - x
					}
					var R = -y;
					var T = -w;
					var O = t - k;
					var P = v[i];
					var E = new Uint8Array(t);
					var M = [];
					var L = l.decoder;
					var D = l.contextCache.getContexts("GB");
					var F = 0,
						U, j, q, N = 0,
						_, z;
					for (var H = 0; H < r; H++) {
						if (n) {
							var G = L.readBit(D, P);
							F ^= G;
							if (F) {
								M.push(E);
								continue
							}
						}
						E = new Uint8Array(E);
						M.push(E);
						for (U = 0; U < t; U++) {
							if (c && s[H][U]) {
								E[U] = 0;
								continue
							}
							if (U >= R && U < O && H >= T) {
								N = N << 1 & b;
								for (x = 0; x < S; x++) {
									j = H + I[x];
									q = U + A[x];
									_ = M[j][q];
									if (_) {
										_ = B[x];
										N |= _
									}
								}
							} else {
								N = 0;
								z = u - 1;
								for (x = 0; x < u; x++, z--) {
									q = U + f[x];
									if (q >= 0 && q < t) {
										j = H + g[x];
										if (j >= 0) {
											_ = M[j][q];
											if (_) {
												N |= _ << z
											}
										}
									}
								}
							}
							var X = L.readBit(D, N);
							E[U] = X
						}
					}
					return M
				}

				function y(e, t, r, i, n, s, o, l, c) {
					var h = g[r].coding;
					if (r === 0) {
						h = h.concat([l[0]])
					}
					var u = h.length;
					var f = new Int32Array(u);
					var d = new Int32Array(u);
					var v;
					for (v = 0; v < u; v++) {
						f[v] = h[v].x;
						d[v] = h[v].y
					}
					var m = g[r].reference;
					if (r === 0) {
						m = m.concat([l[1]])
					}
					var b = m.length;
					var y = new Int32Array(b);
					var k = new Int32Array(b);
					for (v = 0; v < b; v++) {
						y[v] = m[v].x;
						k[v] = m[v].y
					}
					var w = i[0].length;
					var C = i.length;
					var x = p[r];
					var S = [];
					var A = c.decoder;
					var I = c.contextCache.getContexts("GR");
					var B = 0;
					for (var R = 0; R < t; R++) {
						if (o) {
							var T = A.readBit(I, x);
							B ^= T;
							if (B) {
								a("JBIG2 error: prediction is not supported")
							}
						}
						var O = new Uint8Array(e);
						S.push(O);
						for (var P = 0; P < e; P++) {
							var E, M;
							var L = 0;
							for (v = 0; v < u; v++) {
								E = R + d[v];
								M = P + f[v];
								if (E < 0 || M < 0 || M >= e) {
									L <<= 1
								} else {
									L = L << 1 | S[E][M]
								}
							}
							for (v = 0; v < b; v++) {
								E = R + k[v] + s;
								M = P + y[v] + n;
								if (E < 0 || E >= C || M < 0 || M >= w) {
									L <<= 1
								} else {
									L = L << 1 | i[E][M]
								}
							}
							var D = A.readBit(I, L);
							O[P] = D
						}
					}
					return S
				}

				function k(e, t, r, n, s, o, l, c, f, d, g) {
					if (e) {
						a("JBIG2 error: huffman is not supported")
					}
					var v = [];
					var p = 0;
					var m = i(r.length + n);
					var k = g.decoder;
					var C = g.contextCache;
					while (v.length < n) {
						var x = h(C, "IADH", k);
						p += x;
						var S = 0;
						var A = 0;
						while (true) {
							var I = h(C, "IADW", k);
							if (I === null) {
								break
							}
							S += I;
							A += S;
							var B;
							if (t) {
								var R = h(C, "IAAI", k);
								if (R > 1) {
									B = w(e, t, S, p, 0, R, 1, r.concat(v), m, 0, 0, 1, 0, o, f, d, g)
								} else {
									var T = u(C, k, m);
									var O = h(C, "IARDX", k);
									var P = h(C, "IARDY", k);
									var E = T < r.length ? r[T] : v[T - r.length];
									B = y(S, p, f, E, O, P, false, d, g)
								}
							} else {
								B = b(false, S, p, l, false, null, c, g)
							}
							v.push(B)
						}
					}
					var M = [];
					var L = [],
						D = false;
					var F = r.length + n;
					while (L.length < F) {
						var U = h(C, "IAEX", k);
						while (U--) {
							L.push(D)
						}
						D = !D
					}
					for (var j = 0, q = r.length; j < q; j++) {
						if (L[j]) {
							M.push(r[j])
						}
					}
					for (var N = 0; N < n; j++, N++) {
						if (L[j]) {
							M.push(v[N])
						}
					}
					return M
				}

				function w(e, t, r, i, n, s, o, l, c, f, d, g, v, p, m, b, k) {
					if (e) {
						a("JBIG2 error: huffman is not supported")
					}
					var w = [];
					var C, x;
					for (C = 0; C < i; C++) {
						x = new Uint8Array(r);
						if (n) {
							for (var S = 0; S < r; S++) {
								x[S] = n
							}
						}
						w.push(x)
					}
					var A = k.decoder;
					var I = k.contextCache;
					var B = -h(I, "IADT", A);
					var R = 0;
					C = 0;
					while (C < s) {
						var T = h(I, "IADT", A);
						B += T;
						var O = h(I, "IAFS", A);
						R += O;
						var P = R;
						do {
							var E = o === 1 ? 0 : h(I, "IAIT", A);
							var M = o * B + E;
							var L = u(I, A, c);
							var D = t && h(I, "IARI", A);
							var F = l[L];
							var U = F[0].length;
							var j = F.length;
							if (D) {
								var q = h(I, "IARDW", A);
								var N = h(I, "IARDH", A);
								var _ = h(I, "IARDX", A);
								var z = h(I, "IARDY", A);
								U += q;
								j += N;
								F = y(U, j, m, F, (q >> 1) + _, (N >> 1) + z, false, b, k)
							}
							var H = M - (g & 1 ? 0 : j);
							var G = P - (g & 2 ? U : 0);
							var X, W, V;
							if (f) {
								for (X = 0; X < j; X++) {
									x = w[G + X];
									if (!x) {
										continue
									}
									V = F[X];
									var K = Math.min(r - H, U);
									switch (v) {
										case 0:
											for (W = 0; W < K; W++) {
												x[H + W] |= V[W]
											}
											break;
										case 2:
											for (W = 0; W < K; W++) {
												x[H + W] ^= V[W]
											}
											break;
										default:
											a("JBIG2 error: operator " + v + " is not supported")
									}
								}
								P += j - 1
							} else {
								for (W = 0; W < j; W++) {
									x = w[H + W];
									if (!x) {
										continue
									}
									V = F[W];
									switch (v) {
										case 0:
											for (X = 0; X < U; X++) {
												x[G + X] |= V[X]
											}
											break;
										case 2:
											for (X = 0; X < U; X++) {
												x[G + X] ^= V[X]
											}
											break;
										default:
											a("JBIG2 error: operator " + v + " is not supported")
									}
								}
								P += U - 1
							}
							C++;
							var Y = h(I, "IADS", A);
							if (Y === null) {
								break
							}
							P += Y + d
						} while (true)
					}
					return w
				}

				function C(e, t) {
					var r = {};
					r.number = o(e, t);
					var i = e[t + 4];
					var n = i & 63;
					if (!f[n]) {
						a("JBIG2 error: invalid segment type: " + n)
					}
					r.type = n;
					r.typeName = f[n];
					r.deferredNonRetain = !!(i & 128);
					var l = !!(i & 64);
					var c = e[t + 5];
					var h = c >> 5 & 7;
					var u = [c & 31];
					var d = t + 6;
					if (c === 7) {
						h = o(e, d - 1) & 536870911;
						d += 3;
						var g = h + 7 >> 3;
						u[0] = e[d++];
						while (--g > 0) {
							u.push(e[d++])
						}
					} else if (c === 5 || c === 6) {
						a("JBIG2 error: invalid referred-to flags")
					}
					r.retainBits = u;
					var v = r.number <= 256 ? 1 : r.number <= 65536 ? 2 : 4;
					var p = [];
					var m, b;
					for (m = 0; m < h; m++) {
						var y = v === 1 ? e[d] : v === 2 ? s(e, d) : o(e, d);
						p.push(y);
						d += v
					}
					r.referredTo = p;
					if (!l) {
						r.pageAssociation = e[d++]
					} else {
						r.pageAssociation = o(e, d);
						d += 4
					}
					r.length = o(e, d);
					d += 4;
					if (r.length === 4294967295) {
						if (n === 38) {
							var k = S(e, d);
							var w = e[d + A];
							var C = !!(w & 1);
							var x = 6;
							var I = new Uint8Array(x);
							if (!C) {
								I[0] = 255;
								I[1] = 172
							}
							I[2] = k.height >>> 24 & 255;
							I[3] = k.height >> 16 & 255;
							I[4] = k.height >> 8 & 255;
							I[5] = k.height & 255;
							for (m = d, b = e.length; m < b; m++) {
								var B = 0;
								while (B < x && I[B] === e[m + B]) {
									B++
								}
								if (B === x) {
									r.length = m + x;
									break
								}
							}
							if (r.length === 4294967295) {
								a("JBIG2 error: segment end was not found")
							}
						} else {
							a("JBIG2 error: invalid unknown segment length")
						}
					}
					r.headerEnd = d;
					return r
				}

				function x(e, t, r, a) {
					var i = [];
					var n = r;
					while (n < a) {
						var s = C(t, n);
						n = s.headerEnd;
						var o = {
							header: s,
							data: t
						};
						if (!e.randomAccess) {
							o.start = n;
							n += s.length;
							o.end = n
						}
						i.push(o);
						if (s.type === 51) {
							break
						}
					}
					if (e.randomAccess) {
						for (var l = 0, c = i.length; l < c; l++) {
							i[l].start = n;
							n += i[l].header.length;
							i[l].end = n
						}
					}
					return i
				}

				function S(e, t) {
					return {
						width: o(e, t),
						height: o(e, t + 4),
						x: o(e, t + 8),
						y: o(e, t + 12),
						combinationOperator: e[t + 16] & 7
					}
				}
				var A = 17;

				function I(e, t) {
					var r = e.header;
					var i = e.data,
						l = e.start,
						c = e.end;
					var h, u, f, d;
					switch (r.type) {
						case 0:
							var g = {};
							var v = s(i, l);
							g.huffman = !!(v & 1);
							g.refinement = !!(v & 2);
							g.huffmanDHSelector = v >> 2 & 3;
							g.huffmanDWSelector = v >> 4 & 3;
							g.bitmapSizeSelector = v >> 6 & 1;
							g.aggregationInstancesSelector = v >> 7 & 1;
							g.bitmapCodingContextUsed = !!(v & 256);
							g.bitmapCodingContextRetained = !!(v & 512);
							g.template = v >> 10 & 3;
							g.refinementTemplate = v >> 12 & 1;
							l += 2;
							if (!g.huffman) {
								d = g.template === 0 ? 4 : 1;
								u = [];
								for (f = 0; f < d; f++) {
									u.push({
										x: n(i, l),
										y: n(i, l + 1)
									});
									l += 2
								}
								g.at = u
							}
							if (g.refinement && !g.refinementTemplate) {
								u = [];
								for (f = 0; f < 2; f++) {
									u.push({
										x: n(i, l),
										y: n(i, l + 1)
									});
									l += 2
								}
								g.refinementAt = u
							}
							g.numberOfExportedSymbols = o(i, l);
							l += 4;
							g.numberOfNewSymbols = o(i, l);
							l += 4;
							h = [g, r.number, r.referredTo, i, l, c];
							break;
						case 6:
						case 7:
							var p = {};
							p.info = S(i, l);
							l += A;
							var m = s(i, l);
							l += 2;
							p.huffman = !!(m & 1);
							p.refinement = !!(m & 2);
							p.stripSize = 1 << (m >> 2 & 3);
							p.referenceCorner = m >> 4 & 3;
							p.transposed = !!(m & 64);
							p.combinationOperator = m >> 7 & 3;
							p.defaultPixelValue = m >> 9 & 1;
							p.dsOffset = m << 17 >> 27;
							p.refinementTemplate = m >> 15 & 1;
							if (p.huffman) {
								var b = s(i, l);
								l += 2;
								p.huffmanFS = b & 3;
								p.huffmanDS = b >> 2 & 3;
								p.huffmanDT = b >> 4 & 3;
								p.huffmanRefinementDW = b >> 6 & 3;
								p.huffmanRefinementDH = b >> 8 & 3;
								p.huffmanRefinementDX = b >> 10 & 3;
								p.huffmanRefinementDY = b >> 12 & 3;
								p.huffmanRefinementSizeSelector = !!(b & 14)
							}
							if (p.refinement && !p.refinementTemplate) {
								u = [];
								for (f = 0; f < 2; f++) {
									u.push({
										x: n(i, l),
										y: n(i, l + 1)
									});
									l += 2
								}
								p.refinementAt = u
							}
							p.numberOfSymbolInstances = o(i, l);
							l += 4;
							if (p.huffman) {
								a("JBIG2 error: huffman is not supported")
							}
							h = [p, r.referredTo, i, l, c];
							break;
						case 38:
						case 39:
							var y = {};
							y.info = S(i, l);
							l += A;
							var k = i[l++];
							y.mmr = !!(k & 1);
							y.template = k >> 1 & 3;
							y.prediction = !!(k & 8);
							if (!y.mmr) {
								d = y.template === 0 ? 4 : 1;
								u = [];
								for (f = 0; f < d; f++) {
									u.push({
										x: n(i, l),
										y: n(i, l + 1)
									});
									l += 2
								}
								y.at = u
							}
							h = [y, i, l, c];
							break;
						case 48:
							var w = {
								width: o(i, l),
								height: o(i, l + 4),
								resolutionX: o(i, l + 8),
								resolutionY: o(i, l + 12)
							};
							if (w.height === 4294967295) {
								delete w.height
							}
							var C = i[l + 16];
							var x = s(i, l + 17);
							w.lossless = !!(C & 1);
							w.refinement = !!(C & 2);
							w.defaultPixelValue = C >> 2 & 1;
							w.combinationOperator = C >> 3 & 3;
							w.requiresBuffer = !!(C & 32);
							w.combinationOperatorOverride = !!(C & 64);
							h = [w];
							break;
						case 49:
							break;
						case 50:
							break;
						case 51:
							break;
						case 62:
							break;
						default:
							a("JBIG2 error: segment type " + r.typeName + "(" + r.type + ") is not implemented")
					}
					var I = "on" + r.typeName;
					if (I in t) {
						t[I].apply(t, h)
					}
				}

				function B(e, t) {
					for (var r = 0, a = e.length; r < a; r++) {
						I(e[r], t)
					}
				}

				function R(e, t, r) {
					var i = t;
					if (e[i] !== 151 || e[i + 1] !== 74 || e[i + 2] !== 66 || e[i + 3] !== 50 || e[i + 4] !== 13 || e[i + 5] !== 10 || e[i + 6] !== 26 || e[i + 7] !== 10) {
						a("JBIG2 error: invalid header")
					}
					var n = {};
					i += 8;
					var s = e[i++];
					n.randomAccess = !(s & 1);
					if (!(s & 2)) {
						n.numberOfPages = o(e, i);
						i += 4
					}
					var l = x(n, e, i, r);
					a("Not implemented")
				}

				function T(e) {
					var t = new O;
					for (var r = 0, a = e.length; r < a; r++) {
						var i = e[r];
						var n = x({}, i.data, i.start, i.end);
						B(n, t)
					}
					return t.buffer
				}

				function O() {}
				O.prototype = {
					onPageInformation: function e(t) {
						this.currentPageInfo = t;
						var r = t.width + 7 >> 3;
						var a = new Uint8Array(r * t.height);
						if (t.defaultPixelValue) {
							for (var i = 0, n = a.length; i < n; i++) {
								a[i] = 255
							}
						}
						this.buffer = a
					},
					drawBitmap: function e(t, r) {
						var i = this.currentPageInfo;
						var n = t.width,
							s = t.height;
						var o = i.width + 7 >> 3;
						var l = i.combinationOperatorOverride ? t.combinationOperator : i.combinationOperator;
						var c = this.buffer;
						var h = 128 >> (t.x & 7);
						var u = t.y * o + (t.x >> 3);
						var f, d, g, v;
						switch (l) {
							case 0:
								for (f = 0; f < s; f++) {
									g = h;
									v = u;
									for (d = 0; d < n; d++) {
										if (r[f][d]) {
											c[v] |= g
										}
										g >>= 1;
										if (!g) {
											g = 128;
											v++
										}
									}
									u += o
								}
								break;
							case 2:
								for (f = 0; f < s; f++) {
									g = h;
									v = u;
									for (d = 0; d < n; d++) {
										if (r[f][d]) {
											c[v] ^= g
										}
										g >>= 1;
										if (!g) {
											g = 128;
											v++
										}
									}
									u += o
								}
								break;
							default:
								a("JBIG2 error: operator " + l + " is not supported")
						}
					},
					onImmediateGenericRegion: function e(t, a, i, n) {
						var s = t.info;
						var o = new r(a, i, n);
						var l = b(t.mmr, s.width, s.height, t.template, t.prediction, null, t.at, o);
						this.drawBitmap(s, l)
					},
					onImmediateLosslessGenericRegion: function e() {
						this.onImmediateGenericRegion.apply(this, arguments)
					},
					onSymbolDictionary: function e(t, i, n, s, o, l) {
						var c;
						if (t.huffman) {
							a("JBIG2 error: huffman is not supported")
						}
						var h = this.symbols;
						if (!h) {
							this.symbols = h = {}
						}
						var u = [];
						for (var f = 0, d = n.length; f < d; f++) {
							u = u.concat(h[n[f]])
						}
						var g = new r(s, o, l);
						h[i] = k(t.huffman, t.refinement, u, t.numberOfNewSymbols, t.numberOfExportedSymbols, c, t.template, t.at, t.refinementTemplate, t.refinementAt, g)
					},
					onImmediateTextRegion: function e(t, a, n, s, o) {
						var l = t.info;
						var c;
						var h = this.symbols;
						var u = [];
						for (var f = 0, d = a.length; f < d; f++) {
							u = u.concat(h[a[f]])
						}
						var g = i(u.length);
						var v = new r(n, s, o);
						var p = w(t.huffman, t.refinement, l.width, l.height, t.defaultPixelValue, t.numberOfSymbolInstances, t.stripSize, u, g, t.transposed, t.dsOffset, t.referenceCorner, t.combinationOperator, c, t.refinementTemplate, t.refinementAt, v);
						this.drawBitmap(l, p)
					},
					onImmediateLosslessTextRegion: function e() {
						this.onImmediateTextRegion.apply(this, arguments)
					}
				};

				function P() {}
				P.prototype = {
					parseChunks: function e(t) {
						return T(t)
					}
				};
				return P
			}();
			e.Jbig2Image = h
		});
		(function (e, t) {
			t(e.pdfjsCoreJpg = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.error;
			var a = function e() {
				var t = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
				var a = 4017;
				var i = 799;
				var n = 3406;
				var s = 2276;
				var o = 1567;
				var l = 3784;
				var c = 5793;
				var h = 2896;

				function u() {
					this.decodeTransform = null;
					this.colorTransform = -1
				}

				function f(e, t) {
					var r = 0,
						a = [],
						i, n, s = 16;
					while (s > 0 && !e[s - 1]) {
						s--
					}
					a.push({
						children: [],
						index: 0
					});
					var o = a[0],
						l;
					for (i = 0; i < s; i++) {
						for (n = 0; n < e[i]; n++) {
							o = a.pop();
							o.children[o.index] = t[r];
							while (o.index > 0) {
								o = a.pop()
							}
							o.index++;
							a.push(o);
							while (a.length <= i) {
								a.push(l = {
									children: [],
									index: 0
								});
								o.children[o.index] = l.children;
								o = l
							}
							r++
						}
						if (i + 1 < s) {
							a.push(l = {
								children: [],
								index: 0
							});
							o.children[o.index] = l.children;
							o = l
						}
					}
					return a[0].children
				}

				function d(e, t, r) {
					return 64 * ((e.blocksPerLine + 1) * t + r)
				}

				function g(e, a, i, n, s, o, l, c, h) {
					var u = i.mcusPerLine;
					var f = i.progressive;
					var g = a,
						v = 0,
						p = 0;

					function m() {
						if (p > 0) {
							p--;
							return v >> p & 1
						}
						v = e[a++];
						if (v === 255) {
							var t = e[a++];
							if (t) {
								r("JPEG error: unexpected marker " + (v << 8 | t).toString(16))
							}
						}
						p = 7;
						return v >>> 7
					}

					function b(e) {
						var t = e;
						while (true) {
							t = t[m()];
							if (typeof t === "number") {
								return t
							}
							if (typeof t !== "object") {
								r("JPEG error: invalid huffman sequence")
							}
						}
					}

					function y(e) {
						var t = 0;
						while (e > 0) {
							t = t << 1 | m();
							e--
						}
						return t
					}

					function k(e) {
						if (e === 1) {
							return m() === 1 ? 1 : -1
						}
						var t = y(e);
						if (t >= 1 << e - 1) {
							return t
						}
						return t + (-1 << e) + 1
					}

					function w(e, r) {
						var a = b(e.huffmanTableDC);
						var i = a === 0 ? 0 : k(a);
						e.blockData[r] = e.pred += i;
						var n = 1;
						while (n < 64) {
							var s = b(e.huffmanTableAC);
							var o = s & 15,
								l = s >> 4;
							if (o === 0) {
								if (l < 15) {
									break
								}
								n += 16;
								continue
							}
							n += l;
							var c = t[n];
							e.blockData[r + c] = k(o);
							n++
						}
					}

					function C(e, t) {
						var r = b(e.huffmanTableDC);
						var a = r === 0 ? 0 : k(r) << h;
						e.blockData[t] = e.pred += a
					}

					function x(e, t) {
						e.blockData[t] |= m() << h
					}
					var S = 0;

					function A(e, r) {
						if (S > 0) {
							S--;
							return
						}
						var a = o,
							i = l;
						while (a <= i) {
							var n = b(e.huffmanTableAC);
							var s = n & 15,
								c = n >> 4;
							if (s === 0) {
								if (c < 15) {
									S = y(c) + (1 << c) - 1;
									break
								}
								a += 16;
								continue
							}
							a += c;
							var u = t[a];
							e.blockData[r + u] = k(s) * (1 << h);
							a++
						}
					}
					var I = 0,
						B;

					function R(e, a) {
						var i = o;
						var n = l;
						var s = 0;
						var c;
						var u;
						while (i <= n) {
							var f = t[i];
							switch (I) {
								case 0:
									u = b(e.huffmanTableAC);
									c = u & 15;
									s = u >> 4;
									if (c === 0) {
										if (s < 15) {
											S = y(s) + (1 << s);
											I = 4
										} else {
											s = 16;
											I = 1
										}
									} else {
										if (c !== 1) {
											r("JPEG error: invalid ACn encoding")
										}
										B = k(c);
										I = s ? 2 : 3
									}
									continue;
								case 1:
								case 2:
									if (e.blockData[a + f]) {
										e.blockData[a + f] += m() << h
									} else {
										s--;
										if (s === 0) {
											I = I === 2 ? 3 : 0
										}
									}
									break;
								case 3:
									if (e.blockData[a + f]) {
										e.blockData[a + f] += m() << h
									} else {
										e.blockData[a + f] = B << h;
										I = 0
									}
									break;
								case 4:
									if (e.blockData[a + f]) {
										e.blockData[a + f] += m() << h
									}
									break
							}
							i++
						}
						if (I === 4) {
							S--;
							if (S === 0) {
								I = 0
							}
						}
					}

					function T(e, t, r, a, i) {
						var n = r / u | 0;
						var s = r % u;
						var o = n * e.v + a;
						var l = s * e.h + i;
						var c = d(e, o, l);
						t(e, c)
					}

					function O(e, t, r) {
						var a = r / e.blocksPerLine | 0;
						var i = r % e.blocksPerLine;
						var n = d(e, a, i);
						t(e, n)
					}
					var P = n.length;
					var E, M, L, D, F;
					var U;
					if (f) {
						if (o === 0) {
							U = c === 0 ? C : x
						} else {
							U = c === 0 ? A : R
						}
					} else {
						U = w
					}
					var j = 0,
						q;
					var N;
					if (P === 1) {
						N = n[0].blocksPerLine * n[0].blocksPerColumn
					} else {
						N = u * i.mcusPerColumn
					}
					if (!s) {
						s = N
					}
					var _, z;
					while (j < N) {
						for (M = 0; M < P; M++) {
							n[M].pred = 0
						}
						S = 0;
						if (P === 1) {
							E = n[0];
							for (F = 0; F < s; F++) {
								O(E, U, j);
								j++
							}
						} else {
							for (F = 0; F < s; F++) {
								for (M = 0; M < P; M++) {
									E = n[M];
									_ = E.h;
									z = E.v;
									for (L = 0; L < z; L++) {
										for (D = 0; D < _; D++) {
											T(E, U, j, L, D)
										}
									}
								}
								j++
							}
						}
						p = 0;
						q = e[a] << 8 | e[a + 1];
						while (e[a] === 0 && a < e.length - 1) {
							a++;
							q = e[a] << 8 | e[a + 1]
						}
						if (q <= 65280) {
							r("JPEG error: marker was not found")
						}
						if (q >= 65488 && q <= 65495) {
							a += 2
						} else {
							break
						}
					}
					return a - g
				}

				function v(e, t, u) {
					var f = e.quantizationTable,
						d = e.blockData;
					var g, v, p, m, b, y, k, w;
					var C, x, S, A, I, B, R, T;
					var O;
					if (!f) {
						r("JPEG error: missing required Quantization Table.")
					}
					for (var P = 0; P < 64; P += 8) {
						C = d[t + P];
						x = d[t + P + 1];
						S = d[t + P + 2];
						A = d[t + P + 3];
						I = d[t + P + 4];
						B = d[t + P + 5];
						R = d[t + P + 6];
						T = d[t + P + 7];
						C *= f[P];
						if ((x | S | A | I | B | R | T) === 0) {
							O = c * C + 512 >> 10;
							u[P] = O;
							u[P + 1] = O;
							u[P + 2] = O;
							u[P + 3] = O;
							u[P + 4] = O;
							u[P + 5] = O;
							u[P + 6] = O;
							u[P + 7] = O;
							continue
						}
						x *= f[P + 1];
						S *= f[P + 2];
						A *= f[P + 3];
						I *= f[P + 4];
						B *= f[P + 5];
						R *= f[P + 6];
						T *= f[P + 7];
						g = c * C + 128 >> 8;
						v = c * I + 128 >> 8;
						p = S;
						m = R;
						b = h * (x - T) + 128 >> 8;
						w = h * (x + T) + 128 >> 8;
						y = A << 4;
						k = B << 4;
						g = g + v + 1 >> 1;
						v = g - v;
						O = p * l + m * o + 128 >> 8;
						p = p * o - m * l + 128 >> 8;
						m = O;
						b = b + k + 1 >> 1;
						k = b - k;
						w = w + y + 1 >> 1;
						y = w - y;
						g = g + m + 1 >> 1;
						m = g - m;
						v = v + p + 1 >> 1;
						p = v - p;
						O = b * s + w * n + 2048 >> 12;
						b = b * n - w * s + 2048 >> 12;
						w = O;
						O = y * i + k * a + 2048 >> 12;
						y = y * a - k * i + 2048 >> 12;
						k = O;
						u[P] = g + w;
						u[P + 7] = g - w;
						u[P + 1] = v + k;
						u[P + 6] = v - k;
						u[P + 2] = p + y;
						u[P + 5] = p - y;
						u[P + 3] = m + b;
						u[P + 4] = m - b
					}
					for (var E = 0; E < 8; ++E) {
						C = u[E];
						x = u[E + 8];
						S = u[E + 16];
						A = u[E + 24];
						I = u[E + 32];
						B = u[E + 40];
						R = u[E + 48];
						T = u[E + 56];
						if ((x | S | A | I | B | R | T) === 0) {
							O = c * C + 8192 >> 14;
							O = O < -2040 ? 0 : O >= 2024 ? 255 : O + 2056 >> 4;
							d[t + E] = O;
							d[t + E + 8] = O;
							d[t + E + 16] = O;
							d[t + E + 24] = O;
							d[t + E + 32] = O;
							d[t + E + 40] = O;
							d[t + E + 48] = O;
							d[t + E + 56] = O;
							continue
						}
						g = c * C + 2048 >> 12;
						v = c * I + 2048 >> 12;
						p = S;
						m = R;
						b = h * (x - T) + 2048 >> 12;
						w = h * (x + T) + 2048 >> 12;
						y = A;
						k = B;
						g = (g + v + 1 >> 1) + 4112;
						v = g - v;
						O = p * l + m * o + 2048 >> 12;
						p = p * o - m * l + 2048 >> 12;
						m = O;
						b = b + k + 1 >> 1;
						k = b - k;
						w = w + y + 1 >> 1;
						y = w - y;
						g = g + m + 1 >> 1;
						m = g - m;
						v = v + p + 1 >> 1;
						p = v - p;
						O = b * s + w * n + 2048 >> 12;
						b = b * n - w * s + 2048 >> 12;
						w = O;
						O = y * i + k * a + 2048 >> 12;
						y = y * a - k * i + 2048 >> 12;
						k = O;
						C = g + w;
						T = g - w;
						x = v + k;
						R = v - k;
						S = p + y;
						B = p - y;
						A = m + b;
						I = m - b;
						C = C < 16 ? 0 : C >= 4080 ? 255 : C >> 4;
						x = x < 16 ? 0 : x >= 4080 ? 255 : x >> 4;
						S = S < 16 ? 0 : S >= 4080 ? 255 : S >> 4;
						A = A < 16 ? 0 : A >= 4080 ? 255 : A >> 4;
						I = I < 16 ? 0 : I >= 4080 ? 255 : I >> 4;
						B = B < 16 ? 0 : B >= 4080 ? 255 : B >> 4;
						R = R < 16 ? 0 : R >= 4080 ? 255 : R >> 4;
						T = T < 16 ? 0 : T >= 4080 ? 255 : T >> 4;
						d[t + E] = C;
						d[t + E + 8] = x;
						d[t + E + 16] = S;
						d[t + E + 24] = A;
						d[t + E + 32] = I;
						d[t + E + 40] = B;
						d[t + E + 48] = R;
						d[t + E + 56] = T
					}
				}

				function p(e, t) {
					var r = t.blocksPerLine;
					var a = t.blocksPerColumn;
					var i = new Int16Array(64);
					for (var n = 0; n < a; n++) {
						for (var s = 0; s < r; s++) {
							var o = d(t, n, s);
							v(t, o, i)
						}
					}
					return t.blockData
				}

				function m(e) {
					return e <= 0 ? 0 : e >= 255 ? 255 : e
				}
				u.prototype = {
					parse: function e(a) {
						function i() {
							var e = a[o] << 8 | a[o + 1];
							o += 2;
							return e
						}

						function n() {
							var e = i();
							var t = a.subarray(o, o + e - 2);
							o += t.length;
							return t
						}

						function s(e) {
							var t = Math.ceil(e.samplesPerLine / 8 / e.maxH);
							var r = Math.ceil(e.scanLines / 8 / e.maxV);
							for (var a = 0; a < e.components.length; a++) {
								H = e.components[a];
								var i = Math.ceil(Math.ceil(e.samplesPerLine / 8) * H.h / e.maxH);
								var n = Math.ceil(Math.ceil(e.scanLines / 8) * H.v / e.maxV);
								var s = t * H.h;
								var o = r * H.v;
								var l = 64 * o * (s + 1);
								H.blockData = new Int16Array(l);
								H.blocksPerLine = i;
								H.blocksPerColumn = n
							}
							e.mcusPerLine = t;
							e.mcusPerColumn = r
						}
						var o = 0;
						var l = null;
						var c = null;
						var h, u;
						var d = [];
						var v = [],
							m = [];
						var b = i();
						if (b !== 65496) {
							r("JPEG error: SOI not found")
						}
						b = i();
						while (b !== 65497) {
							var y, k, w;
							switch (b) {
								case 65504:
								case 65505:
								case 65506:
								case 65507:
								case 65508:
								case 65509:
								case 65510:
								case 65511:
								case 65512:
								case 65513:
								case 65514:
								case 65515:
								case 65516:
								case 65517:
								case 65518:
								case 65519:
								case 65534:
									var C = n();
									if (b === 65504) {
										if (C[0] === 74 && C[1] === 70 && C[2] === 73 && C[3] === 70 && C[4] === 0) {
											l = {
												version: {
													major: C[5],
													minor: C[6]
												},
												densityUnits: C[7],
												xDensity: C[8] << 8 | C[9],
												yDensity: C[10] << 8 | C[11],
												thumbWidth: C[12],
												thumbHeight: C[13],
												thumbData: C.subarray(14, 14 + 3 * C[12] * C[13])
											}
										}
									}
									if (b === 65518) {
										if (C[0] === 65 && C[1] === 100 && C[2] === 111 && C[3] === 98 && C[4] === 101) {
											c = {
												version: C[5] << 8 | C[6],
												flags0: C[7] << 8 | C[8],
												flags1: C[9] << 8 | C[10],
												transformCode: C[11]
											}
										}
									}
									break;
								case 65499:
									var x = i();
									var S = x + o - 2;
									var A;
									while (o < S) {
										var I = a[o++];
										var B = new Uint16Array(64);
										if (I >> 4 === 0) {
											for (k = 0; k < 64; k++) {
												A = t[k];
												B[A] = a[o++]
											}
										} else if (I >> 4 === 1) {
											for (k = 0; k < 64; k++) {
												A = t[k];
												B[A] = i()
											}
										} else {
											r("JPEG error: DQT - invalid table spec")
										}
										d[I & 15] = B
									}
									break;
								case 65472:
								case 65473:
								case 65474:
									if (h) {
										r("JPEG error: Only single frame JPEGs supported")
									}
									i();
									h = {};
									h.extended = b === 65473;
									h.progressive = b === 65474;
									h.precision = a[o++];
									h.scanLines = i();
									h.samplesPerLine = i();
									h.components = [];
									h.componentIds = {};
									var R = a[o++],
										T;
									var O = 0,
										P = 0;
									for (y = 0; y < R; y++) {
										T = a[o];
										var E = a[o + 1] >> 4;
										var M = a[o + 1] & 15;
										if (O < E) {
											O = E
										}
										if (P < M) {
											P = M
										}
										var L = a[o + 2];
										w = h.components.push({
											h: E,
											v: M,
											quantizationId: L,
											quantizationTable: null
										});
										h.componentIds[T] = w - 1;
										o += 3
									}
									h.maxH = O;
									h.maxV = P;
									s(h);
									break;
								case 65476:
									var D = i();
									for (y = 2; y < D;) {
										var F = a[o++];
										var U = new Uint8Array(16);
										var j = 0;
										for (k = 0; k < 16; k++, o++) {
											j += U[k] = a[o]
										}
										var q = new Uint8Array(j);
										for (k = 0; k < j; k++, o++) {
											q[k] = a[o]
										}
										y += 17 + j;
										(F >> 4 === 0 ? m : v)[F & 15] = f(U, q)
									}
									break;
								case 65501:
									i();
									u = i();
									break;
								case 65498:
									var N = i();
									var _ = a[o++];
									var z = [],
										H;
									for (y = 0; y < _; y++) {
										var G = h.componentIds[a[o++]];
										H = h.components[G];
										var X = a[o++];
										H.huffmanTableDC = m[X >> 4];
										H.huffmanTableAC = v[X & 15];
										z.push(H)
									}
									var W = a[o++];
									var V = a[o++];
									var K = a[o++];
									var Y = g(a, o, h, z, u, W, V, K >> 4, K & 15);
									o += Y;
									break;
								case 65535:
									if (a[o] !== 255) {
										o--
									}
									break;
								default:
									if (a[o - 3] === 255 && a[o - 2] >= 192 && a[o - 2] <= 254) {
										o -= 3;
										break
									}
									r("JPEG error: unknown marker " + b.toString(16))
							}
							b = i()
						}
						this.width = h.samplesPerLine;
						this.height = h.scanLines;
						this.jfif = l;
						this.adobe = c;
						this.components = [];
						for (y = 0; y < h.components.length; y++) {
							H = h.components[y];
							var J = d[H.quantizationId];
							if (J) {
								H.quantizationTable = J
							}
							this.components.push({
								output: p(h, H),
								scaleX: H.h / h.maxH,
								scaleY: H.v / h.maxV,
								blocksPerLine: H.blocksPerLine,
								blocksPerColumn: H.blocksPerColumn
							})
						}
						this.numComponents = this.components.length
					},
					_getLinearizedBlockData: function e(t, r) {
						var a = this.width / t,
							i = this.height / r;
						var n, s, o, l;
						var c, h, u, f, d;
						var g;
						var v = 0;
						var p;
						var m = this.components.length;
						var b = t * r * m;
						var y = new Uint8Array(b);
						var k = new Uint32Array(t);
						var w = 4294967288;
						for (u = 0; u < m; u++) {
							n = this.components[u];
							s = n.scaleX * a;
							o = n.scaleY * i;
							v = u;
							p = n.output;
							l = n.blocksPerLine + 1 << 3;
							for (c = 0; c < t; c++) {
								f = 0 | c * s;
								k[c] = (f & w) << 3 | f & 7
							}
							for (h = 0; h < r; h++) {
								f = 0 | h * o;
								g = l * (f & w) | (f & 7) << 3;
								for (c = 0; c < t; c++) {
									y[v] = p[g + k[c]];
									v += m
								}
							}
						}
						var C = this.decodeTransform;
						if (C) {
							for (u = 0; u < b;) {
								for (f = 0, d = 0; f < m; f++, u++, d += 2) {
									y[u] = (y[u] * C[d] >> 8) + C[d + 1]
								}
							}
						}
						return y
					},
					_isColorConversionNeeded: function e() {
						if (this.adobe && this.adobe.transformCode) {
							return true
						} else if (this.numComponents === 3) {
							if (!this.adobe && this.colorTransform === 0) {
								return false
							}
							return true
						}
						if (!this.adobe && this.colorTransform === 1) {
							return true
						}
						return false
					},
					_convertYccToRgb: function e(t) {
						var r, a, i;
						for (var n = 0, s = t.length; n < s; n += 3) {
							r = t[n];
							a = t[n + 1];
							i = t[n + 2];
							t[n] = m(r - 179.456 + 1.402 * i);
							t[n + 1] = m(r + 135.459 - .344 * a - .714 * i);
							t[n + 2] = m(r - 226.816 + 1.772 * a)
						}
						return t
					},
					_convertYcckToRgb: function e(t) {
						var r, a, i, n;
						var s = 0;
						for (var o = 0, l = t.length; o < l; o += 4) {
							r = t[o];
							a = t[o + 1];
							i = t[o + 2];
							n = t[o + 3];
							var c = -122.67195406894 + a * (-660635669420364e-19 * a + .000437130475926232 * i - 54080610064599e-18 * r + .00048449797120281 * n - .154362151871126) + i * (-.000957964378445773 * i + .000817076911346625 * r - .00477271405408747 * n + 1.53380253221734) + r * (.000961250184130688 * r - .00266257332283933 * n + .48357088451265) + n * (-.000336197177618394 * n + .484791561490776);
							var h = 107.268039397724 + a * (219927104525741e-19 * a - .000640992018297945 * i + .000659397001245577 * r + .000426105652938837 * n - .176491792462875) + i * (-.000778269941513683 * i + .00130872261408275 * r + .000770482631801132 * n - .151051492775562) + r * (.00126935368114843 * r - .00265090189010898 * n + .25802910206845) + n * (-.000318913117588328 * n - .213742400323665);
							var u = -20.810012546947 + a * (-.000570115196973677 * a - 263409051004589e-19 * i + .0020741088115012 * r - .00288260236853442 * n + .814272968359295) + i * (-153496057440975e-19 * i - .000132689043961446 * r + .000560833691242812 * n - .195152027534049) + r * (.00174418132927582 * r - .00255243321439347 * n + .116935020465145) + n * (-.000343531996510555 * n + .24165260232407);
							t[s++] = m(c);
							t[s++] = m(h);
							t[s++] = m(u)
						}
						return t
					},
					_convertYcckToCmyk: function e(t) {
						var r, a, i;
						for (var n = 0, s = t.length; n < s; n += 4) {
							r = t[n];
							a = t[n + 1];
							i = t[n + 2];
							t[n] = m(434.456 - r - 1.402 * i);
							t[n + 1] = m(119.541 - r + .344 * a + .714 * i);
							t[n + 2] = m(481.816 - r - 1.772 * a)
						}
						return t
					},
					_convertCmykToRgb: function e(t) {
						var r, a, i, n;
						var s = 0;
						var o = -255 * 255 * 255;
						var l = 1 / 255 / 255;
						for (var c = 0, h = t.length; c < h; c += 4) {
							r = t[c];
							a = t[c + 1];
							i = t[c + 2];
							n = t[c + 3];
							var u = r * (-4.387332384609988 * r + 54.48615194189176 * a + 18.82290502165302 * i + 212.25662451639585 * n - 72734.4411664936) + a * (1.7149763477362134 * a - 5.6096736904047315 * i - 17.873870861415444 * n - 1401.7366389350734) + i * (-2.5217340131683033 * i - 21.248923337353073 * n + 4465.541406466231) - n * (21.86122147463605 * n + 48317.86113160301);
							var f = r * (8.841041422036149 * r + 60.118027045597366 * a + 6.871425592049007 * i + 31.159100130055922 * n - 20220.756542821975) + a * (-15.310361306967817 * a + 17.575251261109482 * i + 131.35250912493976 * n - 48691.05921601825) + i * (4.444339102852739 * i + 9.8632861493405 * n - 6341.191035517494) - n * (20.737325471181034 * n + 47890.15695978492);
							var d = r * (.8842522430003296 * r + 8.078677503112928 * a + 30.89978309703729 * i - .23883238689178934 * n - 3616.812083916688) + a * (10.49593273432072 * a + 63.02378494754052 * i + 50.606957656360734 * n - 28620.90484698408) + i * (.03296041114873217 * i + 115.60384449646641 * n - 49363.43385999684) - n * (22.33816807309886 * n + 45932.16563550634);
							t[s++] = u >= 0 ? 255 : u <= o ? 0 : 255 + u * l | 0;
							t[s++] = f >= 0 ? 255 : f <= o ? 0 : 255 + f * l | 0;
							t[s++] = d >= 0 ? 255 : d <= o ? 0 : 255 + d * l | 0
						}
						return t
					},
					getData: function e(t, a, i) {
						if (this.numComponents > 4) {
							r("JPEG error: Unsupported color mode")
						}
						var n = this._getLinearizedBlockData(t, a);
						if (this.numComponents === 1 && i) {
							var s = n.length;
							var o = new Uint8Array(s * 3);
							var l = 0;
							for (var c = 0; c < s; c++) {
								var h = n[c];
								o[l++] = h;
								o[l++] = h;
								o[l++] = h
							}
							return o
						} else if (this.numComponents === 3 && this._isColorConversionNeeded()) {
							return this._convertYccToRgb(n)
						} else if (this.numComponents === 4) {
							if (this._isColorConversionNeeded()) {
								if (i) {
									return this._convertYcckToRgb(n)
								}
								return this._convertYcckToCmyk(n)
							} else if (i) {
								return this._convertCmykToRgb(n)
							}
						}
						return n
					}
				};
				return u
			}();
			e.JpegImage = a
		});
		(function (e, t) {
			t(e.pdfjsCoreJpx = {}, e.pdfjsSharedUtil, e.pdfjsCoreArithmeticDecoder)
		})(this, function (e, t, r) {
			var a = t.info;
			var i = t.warn;
			var n = t.error;
			var s = t.log2;
			var o = t.readUint16;
			var l = t.readUint32;
			var c = r.ArithmeticDecoder;
			var h = function e() {
				var t = {
					LL: 0,
					LH: 1,
					HL: 1,
					HH: 2
				};

				function r() {
					this.failOnCorruptedImage = false
				}
				r.prototype = {
					parse: function e(t) {
						var r = o(t, 0);
						if (r === 65359) {
							this.parseCodestream(t, 0, t.length);
							return
						}
						var s = 0,
							c = t.length;
						while (s < c) {
							var h = 8;
							var u = l(t, s);
							var f = l(t, s + 4);
							s += h;
							if (u === 1) {
								u = l(t, s) * 4294967296 + l(t, s + 4);
								s += 8;
								h += 8
							}
							if (u === 0) {
								u = c - s + h
							}
							if (u < h) {
								n("JPX Error: Invalid box field size")
							}
							var d = u - h;
							var g = true;
							switch (f) {
								case 1785737832:
									g = false;
									break;
								case 1668246642:
									var v = t[s];
									if (v === 1) {
										var p = l(t, s + 3);
										switch (p) {
											case 16:
											case 17:
											case 18:
												break;
											default:
												i("Unknown colorspace " + p);
												break
										}
									} else if (v === 2) {
										a("ICC profile not supported")
									}
									break;
								case 1785737827:
									this.parseCodestream(t, s, s + d);
									break;
								case 1783636e3:
									if (218793738 !== l(t, s)) {
										i("Invalid JP2 signature")
									}
									break;
								case 1783634458:
								case 1718909296:
								case 1920099697:
								case 1919251232:
								case 1768449138:
									break;
								default:
									var m = String.fromCharCode(f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255);
									i("Unsupported header type " + f + " (" + m + ")");
									break
							}
							if (g) {
								s += d
							}
						}
					},
					parseImageProperties: function e(t) {
						var r = t.getByte();
						while (r >= 0) {
							var a = r;
							r = t.getByte();
							var i = a << 8 | r;
							if (i === 65361) {
								t.skip(4);
								var s = t.getInt32() >>> 0;
								var o = t.getInt32() >>> 0;
								var l = t.getInt32() >>> 0;
								var c = t.getInt32() >>> 0;
								t.skip(16);
								var h = t.getUint16();
								this.width = s - l;
								this.height = o - c;
								this.componentsCount = h;
								this.bitsPerComponent = 8;
								return
							}
						}
						n("JPX Error: No size marker found in JPX stream")
					},
					parseCodestream: function e(t, r, a) {
						var s = {};
						var c = false;
						try {
							var f = r;
							while (f + 1 < a) {
								var d = o(t, f);
								f += 2;
								var g = 0,
									v, p, m, b, y, k;
								switch (d) {
									case 65359:
										s.mainHeader = true;
										break;
									case 65497:
										break;
									case 65361:
										g = o(t, f);
										var w = {};
										w.Xsiz = l(t, f + 4);
										w.Ysiz = l(t, f + 8);
										w.XOsiz = l(t, f + 12);
										w.YOsiz = l(t, f + 16);
										w.XTsiz = l(t, f + 20);
										w.YTsiz = l(t, f + 24);
										w.XTOsiz = l(t, f + 28);
										w.YTOsiz = l(t, f + 32);
										var C = o(t, f + 36);
										w.Csiz = C;
										var A = [];
										v = f + 38;
										for (var I = 0; I < C; I++) {
											var T = {
												precision: (t[v] & 127) + 1,
												isSigned: !!(t[v] & 128),
												XRsiz: t[v + 1],
												YRsiz: t[v + 1]
											};
											h(T, w);
											A.push(T)
										}
										s.SIZ = w;
										s.components = A;
										u(s, A);
										s.QCC = [];
										s.COC = [];
										break;
									case 65372:
										g = o(t, f);
										var O = {};
										v = f + 2;
										p = t[v++];
										switch (p & 31) {
											case 0:
												b = 8;
												y = true;
												break;
											case 1:
												b = 16;
												y = false;
												break;
											case 2:
												b = 16;
												y = true;
												break;
											default:
												throw new Error("Invalid SQcd value " + p)
										}
										O.noQuantization = b === 8;
										O.scalarExpounded = y;
										O.guardBits = p >> 5;
										m = [];
										while (v < g + f) {
											var P = {};
											if (b === 8) {
												P.epsilon = t[v++] >> 3;
												P.mu = 0
											} else {
												P.epsilon = t[v] >> 3;
												P.mu = (t[v] & 7) << 8 | t[v + 1];
												v += 2
											}
											m.push(P)
										}
										O.SPqcds = m;
										if (s.mainHeader) {
											s.QCD = O
										} else {
											s.currentTile.QCD = O;
											s.currentTile.QCC = []
										}
										break;
									case 65373:
										g = o(t, f);
										var E = {};
										v = f + 2;
										var M;
										if (s.SIZ.Csiz < 257) {
											M = t[v++]
										} else {
											M = o(t, v);
											v += 2
										}
										p = t[v++];
										switch (p & 31) {
											case 0:
												b = 8;
												y = true;
												break;
											case 1:
												b = 16;
												y = false;
												break;
											case 2:
												b = 16;
												y = true;
												break;
											default:
												throw new Error("Invalid SQcd value " + p)
										}
										E.noQuantization = b === 8;
										E.scalarExpounded = y;
										E.guardBits = p >> 5;
										m = [];
										while (v < g + f) {
											P = {};
											if (b === 8) {
												P.epsilon = t[v++] >> 3;
												P.mu = 0
											} else {
												P.epsilon = t[v] >> 3;
												P.mu = (t[v] & 7) << 8 | t[v + 1];
												v += 2
											}
											m.push(P)
										}
										E.SPqcds = m;
										if (s.mainHeader) {
											s.QCC[M] = E
										} else {
											s.currentTile.QCC[M] = E
										}
										break;
									case 65362:
										g = o(t, f);
										var L = {};
										v = f + 2;
										var D = t[v++];
										L.entropyCoderWithCustomPrecincts = !!(D & 1);
										L.sopMarkerUsed = !!(D & 2);
										L.ephMarkerUsed = !!(D & 4);
										L.progressionOrder = t[v++];
										L.layersCount = o(t, v);
										v += 2;
										L.multipleComponentTransform = t[v++];
										L.decompositionLevelsCount = t[v++];
										L.xcb = (t[v++] & 15) + 2;
										L.ycb = (t[v++] & 15) + 2;
										var F = t[v++];
										L.selectiveArithmeticCodingBypass = !!(F & 1);
										L.resetContextProbabilities = !!(F & 2);
										L.terminationOnEachCodingPass = !!(F & 4);
										L.verticalyStripe = !!(F & 8);
										L.predictableTermination = !!(F & 16);
										L.segmentationSymbolUsed = !!(F & 32);
										L.reversibleTransformation = t[v++];
										if (L.entropyCoderWithCustomPrecincts) {
											var U = [];
											while (v < g + f) {
												var j = t[v++];
												U.push({
													PPx: j & 15,
													PPy: j >> 4
												})
											}
											L.precinctsSizes = U
										}
										var q = [];
										if (L.selectiveArithmeticCodingBypass) {
											q.push("selectiveArithmeticCodingBypass")
										}
										if (L.resetContextProbabilities) {
											q.push("resetContextProbabilities")
										}
										if (L.terminationOnEachCodingPass) {
											q.push("terminationOnEachCodingPass")
										}
										if (L.verticalyStripe) {
											q.push("verticalyStripe")
										}
										if (L.predictableTermination) {
											q.push("predictableTermination")
										}
										if (q.length > 0) {
											c = true;
											throw new Error("Unsupported COD options (" + q.join(", ") + ")")
										}
										if (s.mainHeader) {
											s.COD = L
										} else {
											s.currentTile.COD = L;
											s.currentTile.COC = []
										}
										break;
									case 65424:
										g = o(t, f);
										k = {};
										k.index = o(t, f + 2);
										k.length = l(t, f + 4);
										k.dataEnd = k.length + f - 2;
										k.partIndex = t[f + 8];
										k.partsCount = t[f + 9];
										s.mainHeader = false;
										if (k.partIndex === 0) {
											k.COD = s.COD;
											k.COC = s.COC.slice(0);
											k.QCD = s.QCD;
											k.QCC = s.QCC.slice(0)
										}
										s.currentTile = k;
										break;
									case 65427:
										k = s.currentTile;
										if (k.partIndex === 0) {
											R(s, k.index);
											x(s)
										}
										g = k.dataEnd - f;
										S(s, t, f, g);
										break;
									case 65365:
									case 65367:
									case 65368:
									case 65380:
										g = o(t, f);
										break;
									case 65363:
										throw new Error("Codestream code 0xFF53 (COC) is " + "not implemented");
									default:
										throw new Error("Unknown codestream code: " + d.toString(16))
								}
								f += g
							}
						} catch (e) {
							if (c || this.failOnCorruptedImage) {
								n("JPX Error: " + e.message)
							} else {
								i("JPX: Trying to recover from: " + e.message)
							}
						}
						this.tiles = B(s);
						this.width = s.SIZ.Xsiz - s.SIZ.XOsiz;
						this.height = s.SIZ.Ysiz - s.SIZ.YOsiz;
						this.componentsCount = s.SIZ.Csiz
					}
				};

				function h(e, t) {
					e.x0 = Math.ceil(t.XOsiz / e.XRsiz);
					e.x1 = Math.ceil(t.Xsiz / e.XRsiz);
					e.y0 = Math.ceil(t.YOsiz / e.YRsiz);
					e.y1 = Math.ceil(t.Ysiz / e.YRsiz);
					e.width = e.x1 - e.x0;
					e.height = e.y1 - e.y0
				}

				function u(e, t) {
					var r = e.SIZ;
					var a, i = [];
					var n = Math.ceil((r.Xsiz - r.XTOsiz) / r.XTsiz);
					var s = Math.ceil((r.Ysiz - r.YTOsiz) / r.YTsiz);
					for (var o = 0; o < s; o++) {
						for (var l = 0; l < n; l++) {
							a = {};
							a.tx0 = Math.max(r.XTOsiz + l * r.XTsiz, r.XOsiz);
							a.ty0 = Math.max(r.YTOsiz + o * r.YTsiz, r.YOsiz);
							a.tx1 = Math.min(r.XTOsiz + (l + 1) * r.XTsiz, r.Xsiz);
							a.ty1 = Math.min(r.YTOsiz + (o + 1) * r.YTsiz, r.Ysiz);
							a.width = a.tx1 - a.tx0;
							a.height = a.ty1 - a.ty0;
							a.components = [];
							i.push(a)
						}
					}
					e.tiles = i;
					var c = r.Csiz;
					for (var h = 0, u = c; h < u; h++) {
						var f = t[h];
						for (var d = 0, g = i.length; d < g; d++) {
							var v = {};
							a = i[d];
							v.tcx0 = Math.ceil(a.tx0 / f.XRsiz);
							v.tcy0 = Math.ceil(a.ty0 / f.YRsiz);
							v.tcx1 = Math.ceil(a.tx1 / f.XRsiz);
							v.tcy1 = Math.ceil(a.ty1 / f.YRsiz);
							v.width = v.tcx1 - v.tcx0;
							v.height = v.tcy1 - v.tcy0;
							a.components[h] = v
						}
					}
				}

				function f(e, t, r) {
					var a = t.codingStyleParameters;
					var i = {};
					if (!a.entropyCoderWithCustomPrecincts) {
						i.PPx = 15;
						i.PPy = 15
					} else {
						i.PPx = a.precinctsSizes[r].PPx;
						i.PPy = a.precinctsSizes[r].PPy
					}
					i.xcb_ = r > 0 ? Math.min(a.xcb, i.PPx - 1) : Math.min(a.xcb, i.PPx);
					i.ycb_ = r > 0 ? Math.min(a.ycb, i.PPy - 1) : Math.min(a.ycb, i.PPy);
					return i
				}

				function d(e, t, r) {
					var a = 1 << r.PPx;
					var i = 1 << r.PPy;
					var n = t.resLevel === 0;
					var s = 1 << r.PPx + (n ? 0 : -1);
					var o = 1 << r.PPy + (n ? 0 : -1);
					var l = t.trx1 > t.trx0 ? Math.ceil(t.trx1 / a) - Math.floor(t.trx0 / a) : 0;
					var c = t.try1 > t.try0 ? Math.ceil(t.try1 / i) - Math.floor(t.try0 / i) : 0;
					var h = l * c;
					t.precinctParameters = {
						precinctWidth: a,
						precinctHeight: i,
						numprecinctswide: l,
						numprecinctshigh: c,
						numprecincts: h,
						precinctWidthInSubband: s,
						precinctHeightInSubband: o
					}
				}

				function g(e, t, r) {
					var a = r.xcb_;
					var i = r.ycb_;
					var n = 1 << a;
					var s = 1 << i;
					var o = t.tbx0 >> a;
					var l = t.tby0 >> i;
					var c = t.tbx1 + n - 1 >> a;
					var h = t.tby1 + s - 1 >> i;
					var u = t.resolution.precinctParameters;
					var f = [];
					var d = [];
					var g, v, p, m;
					for (v = l; v < h; v++) {
						for (g = o; g < c; g++) {
							p = {
								cbx: g,
								cby: v,
								tbx0: n * g,
								tby0: s * v,
								tbx1: n * (g + 1),
								tby1: s * (v + 1)
							};
							p.tbx0_ = Math.max(t.tbx0, p.tbx0);
							p.tby0_ = Math.max(t.tby0, p.tby0);
							p.tbx1_ = Math.min(t.tbx1, p.tbx1);
							p.tby1_ = Math.min(t.tby1, p.tby1);
							var b = Math.floor((p.tbx0_ - t.tbx0) / u.precinctWidthInSubband);
							var y = Math.floor((p.tby0_ - t.tby0) / u.precinctHeightInSubband);
							m = b + y * u.numprecinctswide;
							p.precinctNumber = m;
							p.subbandType = t.type;
							p.Lblock = 3;
							if (p.tbx1_ <= p.tbx0_ || p.tby1_ <= p.tby0_) {
								continue
							}
							f.push(p);
							var k = d[m];
							if (k !== undefined) {
								if (g < k.cbxMin) {
									k.cbxMin = g
								} else if (g > k.cbxMax) {
									k.cbxMax = g
								}
								if (v < k.cbyMin) {
									k.cbxMin = v
								} else if (v > k.cbyMax) {
									k.cbyMax = v
								}
							} else {
								d[m] = k = {
									cbxMin: g,
									cbyMin: v,
									cbxMax: g,
									cbyMax: v
								}
							}
							p.precinct = k
						}
					}
					t.codeblockParameters = {
						codeblockWidth: a,
						codeblockHeight: i,
						numcodeblockwide: c - o + 1,
						numcodeblockhigh: h - l + 1
					};
					t.codeblocks = f;
					t.precincts = d
				}

				function v(e, t, r) {
					var a = [];
					var i = e.subbands;
					for (var n = 0, s = i.length; n < s; n++) {
						var o = i[n];
						var l = o.codeblocks;
						for (var c = 0, h = l.length; c < h; c++) {
							var u = l[c];
							if (u.precinctNumber !== t) {
								continue
							}
							a.push(u)
						}
					}
					return {
						layerNumber: r,
						codeblocks: a
					}
				}

				function p(e) {
					var t = e.SIZ;
					var r = e.currentTile.index;
					var a = e.tiles[r];
					var i = a.codingStyleDefaultParameters.layersCount;
					var s = t.Csiz;
					var o = 0;
					for (var l = 0; l < s; l++) {
						o = Math.max(o, a.components[l].codingStyleParameters.decompositionLevelsCount)
					}
					var c = 0,
						h = 0,
						u = 0,
						f = 0;
					this.nextPacket = function e() {
						for (; c < i; c++) {
							for (; h <= o; h++) {
								for (; u < s; u++) {
									var t = a.components[u];
									if (h > t.codingStyleParameters.decompositionLevelsCount) {
										continue
									}
									var r = t.resolutions[h];
									var l = r.precinctParameters.numprecincts;
									for (; f < l;) {
										var d = v(r, f, c);
										f++;
										return d
									}
									f = 0
								}
								u = 0
							}
							h = 0
						}
						n("JPX Error: Out of packets")
					}
				}

				function m(e) {
					var t = e.SIZ;
					var r = e.currentTile.index;
					var a = e.tiles[r];
					var i = a.codingStyleDefaultParameters.layersCount;
					var s = t.Csiz;
					var o = 0;
					for (var l = 0; l < s; l++) {
						o = Math.max(o, a.components[l].codingStyleParameters.decompositionLevelsCount)
					}
					var c = 0,
						h = 0,
						u = 0,
						f = 0;
					this.nextPacket = function e() {
						for (; c <= o; c++) {
							for (; h < i; h++) {
								for (; u < s; u++) {
									var t = a.components[u];
									if (c > t.codingStyleParameters.decompositionLevelsCount) {
										continue
									}
									var r = t.resolutions[c];
									var l = r.precinctParameters.numprecincts;
									for (; f < l;) {
										var d = v(r, f, h);
										f++;
										return d
									}
									f = 0
								}
								u = 0
							}
							h = 0
						}
						n("JPX Error: Out of packets")
					}
				}

				function b(e) {
					var t = e.SIZ;
					var r = e.currentTile.index;
					var a = e.tiles[r];
					var i = a.codingStyleDefaultParameters.layersCount;
					var s = t.Csiz;
					var o, l, c, h;
					var u = 0;
					for (c = 0; c < s; c++) {
						var f = a.components[c];
						u = Math.max(u, f.codingStyleParameters.decompositionLevelsCount)
					}
					var d = new Int32Array(u + 1);
					for (l = 0; l <= u; ++l) {
						var g = 0;
						for (c = 0; c < s; ++c) {
							var p = a.components[c].resolutions;
							if (l < p.length) {
								g = Math.max(g, p[l].precinctParameters.numprecincts)
							}
						}
						d[l] = g
					}
					o = 0;
					l = 0;
					c = 0;
					h = 0;
					this.nextPacket = function e() {
						for (; l <= u; l++) {
							for (; h < d[l]; h++) {
								for (; c < s; c++) {
									var t = a.components[c];
									if (l > t.codingStyleParameters.decompositionLevelsCount) {
										continue
									}
									var r = t.resolutions[l];
									var f = r.precinctParameters.numprecincts;
									if (h >= f) {
										continue
									}
									for (; o < i;) {
										var g = v(r, h, o);
										o++;
										return g
									}
									o = 0
								}
								c = 0
							}
							h = 0
						}
						n("JPX Error: Out of packets")
					}
				}

				function y(e) {
					var t = e.SIZ;
					var r = e.currentTile.index;
					var a = e.tiles[r];
					var i = a.codingStyleDefaultParameters.layersCount;
					var s = t.Csiz;
					var o = C(a);
					var l = o;
					var c = 0,
						h = 0,
						u = 0,
						f = 0,
						d = 0;
					this.nextPacket = function e() {
						for (; d < l.maxNumHigh; d++) {
							for (; f < l.maxNumWide; f++) {
								for (; u < s; u++) {
									var t = a.components[u];
									var r = t.codingStyleParameters.decompositionLevelsCount;
									for (; h <= r; h++) {
										var g = t.resolutions[h];
										var p = o.components[u].resolutions[h];
										var m = w(f, d, p, l, g);
										if (m === null) {
											continue
										}
										for (; c < i;) {
											var b = v(g, m, c);
											c++;
											return b
										}
										c = 0
									}
									h = 0
								}
								u = 0
							}
							f = 0
						}
						n("JPX Error: Out of packets")
					}
				}

				function k(e) {
					var t = e.SIZ;
					var r = e.currentTile.index;
					var a = e.tiles[r];
					var i = a.codingStyleDefaultParameters.layersCount;
					var s = t.Csiz;
					var o = C(a);
					var l = 0,
						c = 0,
						h = 0,
						u = 0,
						f = 0;
					this.nextPacket = function e() {
						for (; h < s; ++h) {
							var t = a.components[h];
							var r = o.components[h];
							var d = t.codingStyleParameters.decompositionLevelsCount;
							for (; f < r.maxNumHigh; f++) {
								for (; u < r.maxNumWide; u++) {
									for (; c <= d; c++) {
										var g = t.resolutions[c];
										var p = r.resolutions[c];
										var m = w(u, f, p, r, g);
										if (m === null) {
											continue
										}
										for (; l < i;) {
											var b = v(g, m, l);
											l++;
											return b
										}
										l = 0
									}
									c = 0
								}
								u = 0
							}
							f = 0
						}
						n("JPX Error: Out of packets")
					}
				}

				function w(e, t, r, a, i) {
					var n = e * a.minWidth;
					var s = t * a.minHeight;
					if (n % r.width !== 0 || s % r.height !== 0) {
						return null
					}
					var o = s / r.width * i.precinctParameters.numprecinctswide;
					return n / r.height + o
				}

				function C(e) {
					var t = e.components.length;
					var r = Number.MAX_VALUE;
					var a = Number.MAX_VALUE;
					var i = 0;
					var n = 0;
					var s = new Array(t);
					for (var o = 0; o < t; o++) {
						var l = e.components[o];
						var c = l.codingStyleParameters.decompositionLevelsCount;
						var h = new Array(c + 1);
						var u = Number.MAX_VALUE;
						var f = Number.MAX_VALUE;
						var d = 0;
						var g = 0;
						var v = 1;
						for (var p = c; p >= 0; --p) {
							var m = l.resolutions[p];
							var b = v * m.precinctParameters.precinctWidth;
							var y = v * m.precinctParameters.precinctHeight;
							u = Math.min(u, b);
							f = Math.min(f, y);
							d = Math.max(d, m.precinctParameters.numprecinctswide);
							g = Math.max(g, m.precinctParameters.numprecinctshigh);
							h[p] = {
								width: b,
								height: y
							};
							v <<= 1
						}
						r = Math.min(r, u);
						a = Math.min(a, f);
						i = Math.max(i, d);
						n = Math.max(n, g);
						s[o] = {
							resolutions: h,
							minWidth: u,
							minHeight: f,
							maxNumWide: d,
							maxNumHigh: g
						}
					}
					return {
						components: s,
						minWidth: r,
						minHeight: a,
						maxNumWide: i,
						maxNumHigh: n
					}
				}

				function x(e) {
					var t = e.SIZ;
					var r = e.currentTile.index;
					var a = e.tiles[r];
					var i = t.Csiz;
					for (var s = 0; s < i; s++) {
						var o = a.components[s];
						var l = o.codingStyleParameters.decompositionLevelsCount;
						var c = [];
						var h = [];
						for (var u = 0; u <= l; u++) {
							var v = f(e, o, u);
							var w = {};
							var C = 1 << l - u;
							w.trx0 = Math.ceil(o.tcx0 / C);
							w.try0 = Math.ceil(o.tcy0 / C);
							w.trx1 = Math.ceil(o.tcx1 / C);
							w.try1 = Math.ceil(o.tcy1 / C);
							w.resLevel = u;
							d(e, w, v);
							c.push(w);
							var x;
							if (u === 0) {
								x = {};
								x.type = "LL";
								x.tbx0 = Math.ceil(o.tcx0 / C);
								x.tby0 = Math.ceil(o.tcy0 / C);
								x.tbx1 = Math.ceil(o.tcx1 / C);
								x.tby1 = Math.ceil(o.tcy1 / C);
								x.resolution = w;
								g(e, x, v);
								h.push(x);
								w.subbands = [x]
							} else {
								var S = 1 << l - u + 1;
								var A = [];
								x = {};
								x.type = "HL";
								x.tbx0 = Math.ceil(o.tcx0 / S - .5);
								x.tby0 = Math.ceil(o.tcy0 / S);
								x.tbx1 = Math.ceil(o.tcx1 / S - .5);
								x.tby1 = Math.ceil(o.tcy1 / S);
								x.resolution = w;
								g(e, x, v);
								h.push(x);
								A.push(x);
								x = {};
								x.type = "LH";
								x.tbx0 = Math.ceil(o.tcx0 / S);
								x.tby0 = Math.ceil(o.tcy0 / S - .5);
								x.tbx1 = Math.ceil(o.tcx1 / S);
								x.tby1 = Math.ceil(o.tcy1 / S - .5);
								x.resolution = w;
								g(e, x, v);
								h.push(x);
								A.push(x);
								x = {};
								x.type = "HH";
								x.tbx0 = Math.ceil(o.tcx0 / S - .5);
								x.tby0 = Math.ceil(o.tcy0 / S - .5);
								x.tbx1 = Math.ceil(o.tcx1 / S - .5);
								x.tby1 = Math.ceil(o.tcy1 / S - .5);
								x.resolution = w;
								g(e, x, v);
								h.push(x);
								A.push(x);
								w.subbands = A
							}
						}
						o.resolutions = c;
						o.subbands = h
					}
					var I = a.codingStyleDefaultParameters.progressionOrder;
					switch (I) {
						case 0:
							a.packetsIterator = new p(e);
							break;
						case 1:
							a.packetsIterator = new m(e);
							break;
						case 2:
							a.packetsIterator = new b(e);
							break;
						case 3:
							a.packetsIterator = new y(e);
							break;
						case 4:
							a.packetsIterator = new k(e);
							break;
						default:
							n("JPX Error: Unsupported progression order " + I)
					}
				}

				function S(e, t, r, a) {
					var i = 0;
					var n, o = 0,
						l = false;

					function c(e) {
						while (o < e) {
							var a = t[r + i];
							i++;
							if (l) {
								n = n << 7 | a;
								o += 7;
								l = false
							} else {
								n = n << 8 | a;
								o += 8
							}
							if (a === 255) {
								l = true
							}
						}
						o -= e;
						return n >>> o & (1 << e) - 1
					}

					function h(e) {
						if (t[r + i - 1] === 255 && t[r + i] === e) {
							u(1);
							return true
						} else if (t[r + i] === 255 && t[r + i + 1] === e) {
							u(2);
							return true
						}
						return false
					}

					function u(e) {
						i += e
					}

					function f() {
						o = 0;
						if (l) {
							i++;
							l = false
						}
					}

					function d() {
						if (c(1) === 0) {
							return 1
						}
						if (c(1) === 0) {
							return 2
						}
						var e = c(2);
						if (e < 3) {
							return e + 3
						}
						e = c(5);
						if (e < 31) {
							return e + 6
						}
						e = c(7);
						return e + 37
					}
					var g = e.currentTile.index;
					var v = e.tiles[g];
					var p = e.COD.sopMarkerUsed;
					var m = e.COD.ephMarkerUsed;
					var b = v.packetsIterator;
					while (i < a) {
						f();
						if (p && h(145)) {
							u(4)
						}
						var y = b.nextPacket();
						if (!c(1)) {
							continue
						}
						var k = y.layerNumber;
						var w = [],
							C;
						for (var x = 0, S = y.codeblocks.length; x < S; x++) {
							C = y.codeblocks[x];
							var A = C.precinct;
							var I = C.cbx - A.cbxMin;
							var B = C.cby - A.cbyMin;
							var R = false;
							var P = false;
							var E;
							if (C["included"] !== undefined) {
								R = !!c(1)
							} else {
								A = C.precinct;
								var M, L;
								if (A["inclusionTree"] !== undefined) {
									M = A.inclusionTree
								} else {
									var D = A.cbxMax - A.cbxMin + 1;
									var F = A.cbyMax - A.cbyMin + 1;
									M = new O(D, F, k);
									L = new T(D, F);
									A.inclusionTree = M;
									A.zeroBitPlanesTree = L
								}
								if (M.reset(I, B, k)) {
									while (true) {
										if (c(1)) {
											E = !M.nextLevel();
											if (E) {
												C.included = true;
												R = P = true;
												break
											}
										} else {
											M.incrementValue(k);
											break
										}
									}
								}
							}
							if (!R) {
								continue
							}
							if (P) {
								L = A.zeroBitPlanesTree;
								L.reset(I, B);
								while (true) {
									if (c(1)) {
										E = !L.nextLevel();
										if (E) {
											break
										}
									} else {
										L.incrementValue()
									}
								}
								C.zeroBitPlanes = L.value
							}
							var U = d();
							while (c(1)) {
								C.Lblock++
							}
							var j = s(U);
							var q = (U < 1 << j ? j - 1 : j) + C.Lblock;
							var N = c(q);
							w.push({
								codeblock: C,
								codingpasses: U,
								dataLength: N
							})
						}
						f();
						if (m) {
							h(146)
						}
						while (w.length > 0) {
							var _ = w.shift();
							C = _.codeblock;
							if (C["data"] === undefined) {
								C.data = []
							}
							C.data.push({
								data: t,
								start: r + i,
								end: r + i + _.dataLength,
								codingpasses: _.codingpasses
							});
							i += _.dataLength
						}
					}
					return i
				}

				function A(e, t, r, a, i, n, s, o) {
					var l = a.tbx0;
					var h = a.tby0;
					var u = a.tbx1 - a.tbx0;
					var f = a.codeblocks;
					var d = a.type.charAt(0) === "H" ? 1 : 0;
					var g = a.type.charAt(1) === "H" ? t : 0;
					for (var v = 0, p = f.length; v < p; ++v) {
						var m = f[v];
						var b = m.tbx1_ - m.tbx0_;
						var y = m.tby1_ - m.tby0_;
						if (b === 0 || y === 0) {
							continue
						}
						if (m["data"] === undefined) {
							continue
						}
						var k, w;
						k = new P(b, y, m.subbandType, m.zeroBitPlanes, n);
						w = 2;
						var C = m.data,
							x = 0,
							S = 0;
						var A, I, B;
						for (A = 0, I = C.length; A < I; A++) {
							B = C[A];
							x += B.end - B.start;
							S += B.codingpasses
						}
						var R = new Uint8Array(x);
						var T = 0;
						for (A = 0, I = C.length; A < I; A++) {
							B = C[A];
							var O = B.data.subarray(B.start, B.end);
							R.set(O, T);
							T += O.length
						}
						var E = new c(R, 0, x);
						k.setDecoder(E);
						for (A = 0; A < S; A++) {
							switch (w) {
								case 0:
									k.runSignificancePropagationPass();
									break;
								case 1:
									k.runMagnitudeRefinementPass();
									break;
								case 2:
									k.runCleanupPass();
									if (o) {
										k.checkSegmentationSymbol()
									}
									break
							}
							w = (w + 1) % 3
						}
						var M = m.tbx0_ - l + (m.tby0_ - h) * u;
						var L = k.coefficentsSign;
						var D = k.coefficentsMagnitude;
						var F = k.bitsDecoded;
						var U = s ? 0 : .5;
						var j, q, N;
						T = 0;
						var _ = a.type !== "LL";
						for (A = 0; A < y; A++) {
							var z = M / u | 0;
							var H = 2 * z * (t - u) + d + g;
							for (j = 0; j < b; j++) {
								q = D[T];
								if (q !== 0) {
									q = (q + U) * i;
									if (L[T] !== 0) {
										q = -q
									}
									N = F[T];
									var G = _ ? H + (M << 1) : M;
									if (s && N >= n) {
										e[G] = q
									} else {
										e[G] = q * (1 << n - N)
									}
								}
								M++;
								T++
							}
							M += u - b
						}
					}
				}

				function I(e, r, a) {
					var i = r.components[a];
					var n = i.codingStyleParameters;
					var s = i.quantizationParameters;
					var o = n.decompositionLevelsCount;
					var l = s.SPqcds;
					var c = s.scalarExpounded;
					var h = s.guardBits;
					var u = n.segmentationSymbolUsed;
					var f = e.components[a].precision;
					var d = n.reversibleTransformation;
					var g = d ? new L : new M;
					var v = [];
					var p = 0;
					for (var m = 0; m <= o; m++) {
						var b = i.resolutions[m];
						var y = b.trx1 - b.trx0;
						var k = b.try1 - b.try0;
						var w = new Float32Array(y * k);
						for (var C = 0, x = b.subbands.length; C < x; C++) {
							var S, I;
							if (!c) {
								S = l[0].mu;
								I = l[0].epsilon + (m > 0 ? 1 - m : 0)
							} else {
								S = l[p].mu;
								I = l[p].epsilon;
								p++
							}
							var B = b.subbands[C];
							var R = t[B.type];
							var T = d ? 1 : Math.pow(2, f + R - I) * (1 + S / 2048);
							var O = h + I - 1;
							A(w, y, k, B, T, O, d, u)
						}
						v.push({
							width: y,
							height: k,
							items: w
						})
					}
					var P = g.calculate(v, i.tcx0, i.tcy0);
					return {
						left: i.tcx0,
						top: i.tcy0,
						width: P.width,
						height: P.height,
						items: P.items
					}
				}

				function B(e) {
					var t = e.SIZ;
					var r = e.components;
					var a = t.Csiz;
					var i = [];
					for (var n = 0, s = e.tiles.length; n < s; n++) {
						var o = e.tiles[n];
						var l = [];
						var c;
						for (c = 0; c < a; c++) {
							l[c] = I(e, o, c)
						}
						var h = l[0];
						var u = new Uint8Array(h.items.length * a);
						var f = {
							left: h.left,
							top: h.top,
							width: h.width,
							height: h.height,
							items: u
						};
						var d, g, v, p, m;
						var b = 0,
							y, k, w, C, x, S, A, B, R, T;
						if (o.codingStyleDefaultParameters.multipleComponentTransform) {
							var O = a === 4;
							var P = l[0].items;
							var E = l[1].items;
							var M = l[2].items;
							var L = O ? l[3].items : null;
							d = r[0].precision - 8;
							g = (128 << d) + .5;
							v = 255 * (1 << d);
							m = v * .5;
							p = -m;
							var D = o.components[0];
							var F = a - 3;
							k = P.length;
							if (!D.codingStyleParameters.reversibleTransformation) {
								for (y = 0; y < k; y++, b += F) {
									w = P[y] + g;
									C = E[y];
									x = M[y];
									S = w + 1.402 * x;
									A = w - .34413 * C - .71414 * x;
									B = w + 1.772 * C;
									u[b++] = S <= 0 ? 0 : S >= v ? 255 : S >> d;
									u[b++] = A <= 0 ? 0 : A >= v ? 255 : A >> d;
									u[b++] = B <= 0 ? 0 : B >= v ? 255 : B >> d
								}
							} else {
								for (y = 0; y < k; y++, b += F) {
									w = P[y] + g;
									C = E[y];
									x = M[y];
									A = w - (x + C >> 2);
									S = A + x;
									B = A + C;
									u[b++] = S <= 0 ? 0 : S >= v ? 255 : S >> d;
									u[b++] = A <= 0 ? 0 : A >= v ? 255 : A >> d;
									u[b++] = B <= 0 ? 0 : B >= v ? 255 : B >> d
								}
							}
							if (O) {
								for (y = 0, b = 3; y < k; y++, b += 4) {
									R = L[y];
									u[b] = R <= p ? 0 : R >= m ? 255 : R + g >> d
								}
							}
						} else {
							for (c = 0; c < a; c++) {
								var U = l[c].items;
								d = r[c].precision - 8;
								g = (128 << d) + .5;
								v = 127.5 * (1 << d);
								p = -v;
								for (b = c, y = 0, k = U.length; y < k; y++) {
									T = U[y];
									u[b] = T <= p ? 0 : T >= v ? 255 : T + g >> d;
									b += a
								}
							}
						}
						i.push(f)
					}
					return i
				}

				function R(e, t) {
					var r = e.SIZ;
					var a = r.Csiz;
					var i = e.tiles[t];
					for (var n = 0; n < a; n++) {
						var s = i.components[n];
						var o = e.currentTile.QCC[n] !== undefined ? e.currentTile.QCC[n] : e.currentTile.QCD;
						s.quantizationParameters = o;
						var l = e.currentTile.COC[n] !== undefined ? e.currentTile.COC[n] : e.currentTile.COD;
						s.codingStyleParameters = l
					}
					i.codingStyleDefaultParameters = e.currentTile.COD
				}
				var T = function e() {
					function t(e, t) {
						var r = s(Math.max(e, t)) + 1;
						this.levels = [];
						for (var a = 0; a < r; a++) {
							var i = {
								width: e,
								height: t,
								items: []
							};
							this.levels.push(i);
							e = Math.ceil(e / 2);
							t = Math.ceil(t / 2)
						}
					}
					t.prototype = {
						reset: function e(t, r) {
							var a = 0,
								i = 0,
								n;
							while (a < this.levels.length) {
								n = this.levels[a];
								var s = t + r * n.width;
								if (n.items[s] !== undefined) {
									i = n.items[s];
									break
								}
								n.index = s;
								t >>= 1;
								r >>= 1;
								a++
							}
							a--;
							n = this.levels[a];
							n.items[n.index] = i;
							this.currentLevel = a;
							delete this.value
						},
						incrementValue: function e() {
							var t = this.levels[this.currentLevel];
							t.items[t.index]++
						},
						nextLevel: function e() {
							var t = this.currentLevel;
							var r = this.levels[t];
							var a = r.items[r.index];
							t--;
							if (t < 0) {
								this.value = a;
								return false
							}
							this.currentLevel = t;
							r = this.levels[t];
							r.items[r.index] = a;
							return true
						}
					};
					return t
				}();
				var O = function e() {
					function t(e, t, r) {
						var a = s(Math.max(e, t)) + 1;
						this.levels = [];
						for (var i = 0; i < a; i++) {
							var n = new Uint8Array(e * t);
							for (var o = 0, l = n.length; o < l; o++) {
								n[o] = r
							}
							var c = {
								width: e,
								height: t,
								items: n
							};
							this.levels.push(c);
							e = Math.ceil(e / 2);
							t = Math.ceil(t / 2)
						}
					}
					t.prototype = {
						reset: function e(t, r, a) {
							var i = 0;
							while (i < this.levels.length) {
								var n = this.levels[i];
								var s = t + r * n.width;
								n.index = s;
								var o = n.items[s];
								if (o === 255) {
									break
								}
								if (o > a) {
									this.currentLevel = i;
									this.propagateValues();
									return false
								}
								t >>= 1;
								r >>= 1;
								i++
							}
							this.currentLevel = i - 1;
							return true
						},
						incrementValue: function e(t) {
							var r = this.levels[this.currentLevel];
							r.items[r.index] = t + 1;
							this.propagateValues()
						},
						propagateValues: function e() {
							var t = this.currentLevel;
							var r = this.levels[t];
							var a = r.items[r.index];
							while (--t >= 0) {
								r = this.levels[t];
								r.items[r.index] = a
							}
						},
						nextLevel: function e() {
							var t = this.currentLevel;
							var r = this.levels[t];
							var a = r.items[r.index];
							r.items[r.index] = 255;
							t--;
							if (t < 0) {
								return false
							}
							this.currentLevel = t;
							r = this.levels[t];
							r.items[r.index] = a;
							return true
						}
					};
					return t
				}();
				var P = function e() {
					var t = 17;
					var r = 18;
					var a = new Uint8Array([0, 5, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 1, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8]);
					var i = new Uint8Array([0, 3, 4, 0, 5, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 1, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8]);
					var s = new Uint8Array([0, 1, 2, 0, 1, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 3, 4, 5, 0, 4, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 6, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8]);

					function o(e, t, r, n, o) {
						this.width = e;
						this.height = t;
						this.contextLabelTable = r === "HH" ? s : r === "HL" ? i : a;
						var l = e * t;
						this.neighborsSignificance = new Uint8Array(l);
						this.coefficentsSign = new Uint8Array(l);
						this.coefficentsMagnitude = o > 14 ? new Uint32Array(l) : o > 6 ? new Uint16Array(l) : new Uint8Array(l);
						this.processingFlags = new Uint8Array(l);
						var c = new Uint8Array(l);
						if (n !== 0) {
							for (var h = 0; h < l; h++) {
								c[h] = n
							}
						}
						this.bitsDecoded = c;
						this.reset()
					}
					o.prototype = {
						setDecoder: function e(t) {
							this.decoder = t
						},
						reset: function e() {
							this.contexts = new Int8Array(19);
							this.contexts[0] = 4 << 1 | 0;
							this.contexts[t] = 46 << 1 | 0;
							this.contexts[r] = 3 << 1 | 0
						},
						setNeighborsSignificance: function e(t, r, a) {
							var i = this.neighborsSignificance;
							var n = this.width,
								s = this.height;
							var o = r > 0;
							var l = r + 1 < n;
							var c;
							if (t > 0) {
								c = a - n;
								if (o) {
									i[c - 1] += 16
								}
								if (l) {
									i[c + 1] += 16
								}
								i[c] += 4
							}
							if (t + 1 < s) {
								c = a + n;
								if (o) {
									i[c - 1] += 16
								}
								if (l) {
									i[c + 1] += 16
								}
								i[c] += 4
							}
							if (o) {
								i[a - 1] += 1
							}
							if (l) {
								i[a + 1] += 1
							}
							i[a] |= 128
						},
						runSignificancePropagationPass: function e() {
							var t = this.decoder;
							var r = this.width,
								a = this.height;
							var i = this.coefficentsMagnitude;
							var n = this.coefficentsSign;
							var s = this.neighborsSignificance;
							var o = this.processingFlags;
							var l = this.contexts;
							var c = this.contextLabelTable;
							var h = this.bitsDecoded;
							var u = ~1;
							var f = 1;
							var d = 2;
							for (var g = 0; g < a; g += 4) {
								for (var v = 0; v < r; v++) {
									var p = g * r + v;
									for (var m = 0; m < 4; m++, p += r) {
										var b = g + m;
										if (b >= a) {
											break
										}
										o[p] &= u;
										if (i[p] || !s[p]) {
											continue
										}
										var y = c[s[p]];
										var k = t.readBit(l, y);
										if (k) {
											var w = this.decodeSignBit(b, v, p);
											n[p] = w;
											i[p] = 1;
											this.setNeighborsSignificance(b, v, p);
											o[p] |= d
										}
										h[p]++;
										o[p] |= f
									}
								}
							}
						},
						decodeSignBit: function e(t, r, a) {
							var i = this.width,
								n = this.height;
							var s = this.coefficentsMagnitude;
							var o = this.coefficentsSign;
							var l, c, h, u;
							var f, d;
							u = r > 0 && s[a - 1] !== 0;
							if (r + 1 < i && s[a + 1] !== 0) {
								h = o[a + 1];
								if (u) {
									c = o[a - 1];
									l = 1 - h - c
								} else {
									l = 1 - h - h
								}
							} else if (u) {
								c = o[a - 1];
								l = 1 - c - c
							} else {
								l = 0
							}
							var g = 3 * l;
							u = t > 0 && s[a - i] !== 0;
							if (t + 1 < n && s[a + i] !== 0) {
								h = o[a + i];
								if (u) {
									c = o[a - i];
									l = 1 - h - c + g
								} else {
									l = 1 - h - h + g
								}
							} else if (u) {
								c = o[a - i];
								l = 1 - c - c + g
							} else {
								l = g
							}
							if (l >= 0) {
								f = 9 + l;
								d = this.decoder.readBit(this.contexts, f)
							} else {
								f = 9 - l;
								d = this.decoder.readBit(this.contexts, f) ^ 1
							}
							return d
						},
						runMagnitudeRefinementPass: function e() {
							var t = this.decoder;
							var r = this.width,
								a = this.height;
							var i = this.coefficentsMagnitude;
							var n = this.neighborsSignificance;
							var s = this.contexts;
							var o = this.bitsDecoded;
							var l = this.processingFlags;
							var c = 1;
							var h = 2;
							var u = r * a;
							var f = r * 4;
							for (var d = 0, g; d < u; d = g) {
								g = Math.min(u, d + f);
								for (var v = 0; v < r; v++) {
									for (var p = d + v; p < g; p += r) {
										if (!i[p] || (l[p] & c) !== 0) {
											continue
										}
										var m = 16;
										if ((l[p] & h) !== 0) {
											l[p] ^= h;
											var b = n[p] & 127;
											m = b === 0 ? 15 : 14
										}
										var y = t.readBit(s, m);
										i[p] = i[p] << 1 | y;
										o[p]++;
										l[p] |= c
									}
								}
							}
						},
						runCleanupPass: function e() {
							var a = this.decoder;
							var i = this.width,
								n = this.height;
							var s = this.neighborsSignificance;
							var o = this.coefficentsMagnitude;
							var l = this.coefficentsSign;
							var c = this.contexts;
							var h = this.contextLabelTable;
							var u = this.bitsDecoded;
							var f = this.processingFlags;
							var d = 1;
							var g = 2;
							var v = i;
							var p = i * 2;
							var m = i * 3;
							var b;
							for (var y = 0; y < n; y = b) {
								b = Math.min(y + 4, n);
								var k = y * i;
								var w = y + 3 < n;
								for (var C = 0; C < i; C++) {
									var x = k + C;
									var S = w && f[x] === 0 && f[x + v] === 0 && f[x + p] === 0 && f[x + m] === 0 && s[x] === 0 && s[x + v] === 0 && s[x + p] === 0 && s[x + m] === 0;
									var A = 0,
										I = x;
									var B = y,
										R;
									if (S) {
										var T = a.readBit(c, r);
										if (!T) {
											u[x]++;
											u[x + v]++;
											u[x + p]++;
											u[x + m]++;
											continue
										}
										A = a.readBit(c, t) << 1 | a.readBit(c, t);
										if (A !== 0) {
											B = y + A;
											I += A * i
										}
										R = this.decodeSignBit(B, C, I);
										l[I] = R;
										o[I] = 1;
										this.setNeighborsSignificance(B, C, I);
										f[I] |= g;
										I = x;
										for (var O = y; O <= B; O++, I += i) {
											u[I]++
										}
										A++
									}
									for (B = y + A; B < b; B++, I += i) {
										if (o[I] || (f[I] & d) !== 0) {
											continue
										}
										var P = h[s[I]];
										var E = a.readBit(c, P);
										if (E === 1) {
											R = this.decodeSignBit(B, C, I);
											l[I] = R;
											o[I] = 1;
											this.setNeighborsSignificance(B, C, I);
											f[I] |= g
										}
										u[I]++
									}
								}
							}
						},
						checkSegmentationSymbol: function e() {
							var r = this.decoder;
							var a = this.contexts;
							var i = r.readBit(a, t) << 3 | r.readBit(a, t) << 2 | r.readBit(a, t) << 1 | r.readBit(a, t);
							if (i !== 10) {
								n("JPX Error: Invalid segmentation symbol")
							}
						}
					};
					return o
				}();
				var E = function e() {
					function t() {}
					t.prototype.calculate = function e(t, r, a) {
						var i = t[0];
						for (var n = 1, s = t.length; n < s; n++) {
							i = this.iterate(i, t[n], r, a)
						}
						return i
					};
					t.prototype.extend = function e(t, r, a) {
						var i = r - 1,
							n = r + 1;
						var s = r + a - 2,
							o = r + a;
						t[i--] = t[n++];
						t[o++] = t[s--];
						t[i--] = t[n++];
						t[o++] = t[s--];
						t[i--] = t[n++];
						t[o++] = t[s--];
						t[i] = t[n];
						t[o] = t[s]
					};
					t.prototype.iterate = function e(t, r, a, i) {
						var n = t.width,
							s = t.height,
							o = t.items;
						var l = r.width;
						var c = r.height;
						var h = r.items;
						var u, f, d, g, v, p;
						for (d = 0, u = 0; u < s; u++) {
							g = u * 2 * l;
							for (f = 0; f < n; f++, d++, g += 2) {
								h[g] = o[d]
							}
						}
						o = t.items = null;
						var m = 4;
						var b = new Float32Array(l + 2 * m);
						if (l === 1) {
							if ((a & 1) !== 0) {
								for (p = 0, d = 0; p < c; p++, d += l) {
									h[d] *= .5
								}
							}
						} else {
							for (p = 0, d = 0; p < c; p++, d += l) {
								b.set(h.subarray(d, d + l), m);
								this.extend(b, m, l);
								this.filter(b, m, l);
								h.set(b.subarray(m, m + l), d)
							}
						}
						var y = 16;
						var k = [];
						for (u = 0; u < y; u++) {
							k.push(new Float32Array(c + 2 * m))
						}
						var w, C = 0;
						t = m + c;
						if (c === 1) {
							if ((i & 1) !== 0) {
								for (v = 0; v < l; v++) {
									h[v] *= .5
								}
							}
						} else {
							for (v = 0; v < l; v++) {
								if (C === 0) {
									y = Math.min(l - v, y);
									for (d = v, g = m; g < t; d += l, g++) {
										for (w = 0; w < y; w++) {
											k[w][g] = h[d + w]
										}
									}
									C = y
								}
								C--;
								var x = k[C];
								this.extend(x, m, c);
								this.filter(x, m, c);
								if (C === 0) {
									d = v - y + 1;
									for (g = m; g < t; d += l, g++) {
										for (w = 0; w < y; w++) {
											h[d + w] = k[w][g]
										}
									}
								}
							}
						}
						return {
							width: l,
							height: c,
							items: h
						}
					};
					return t
				}();
				var M = function e() {
					function t() {
						E.call(this)
					}
					t.prototype = Object.create(E.prototype);
					t.prototype.filter = function e(t, r, a) {
						var i = a >> 1;
						r = r | 0;
						var n, s, o, l;
						var c = -1.586134342059924;
						var h = -.052980118572961;
						var u = .882911075530934;
						var f = .443506852043971;
						var d = 1.230174104914001;
						var g = 1 / d;
						n = r - 3;
						for (s = i + 4; s--; n += 2) {
							t[n] *= g
						}
						n = r - 2;
						o = f * t[n - 1];
						for (s = i + 3; s--; n += 2) {
							l = f * t[n + 1];
							t[n] = d * t[n] - o - l;
							if (s--) {
								n += 2;
								o = f * t[n + 1];
								t[n] = d * t[n] - o - l
							} else {
								break
							}
						}
						n = r - 1;
						o = u * t[n - 1];
						for (s = i + 2; s--; n += 2) {
							l = u * t[n + 1];
							t[n] -= o + l;
							if (s--) {
								n += 2;
								o = u * t[n + 1];
								t[n] -= o + l
							} else {
								break
							}
						}
						n = r;
						o = h * t[n - 1];
						for (s = i + 1; s--; n += 2) {
							l = h * t[n + 1];
							t[n] -= o + l;
							if (s--) {
								n += 2;
								o = h * t[n + 1];
								t[n] -= o + l
							} else {
								break
							}
						}
						if (i !== 0) {
							n = r + 1;
							o = c * t[n - 1];
							for (s = i; s--; n += 2) {
								l = c * t[n + 1];
								t[n] -= o + l;
								if (s--) {
									n += 2;
									o = c * t[n + 1];
									t[n] -= o + l
								} else {
									break
								}
							}
						}
					};
					return t
				}();
				var L = function e() {
					function t() {
						E.call(this)
					}
					t.prototype = Object.create(E.prototype);
					t.prototype.filter = function e(t, r, a) {
						var i = a >> 1;
						r = r | 0;
						var n, s;
						for (n = r, s = i + 1; s--; n += 2) {
							t[n] -= t[n - 1] + t[n + 1] + 2 >> 2
						}
						for (n = r + 1, s = i; s--; n += 2) {
							t[n] += t[n - 1] + t[n + 1] >> 1
						}
					};
					return t
				}();
				return r
			}();
			e.JpxImage = h
		});
		(function (e, t) {
			t(e.pdfjsCoreMetrics = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.getLookupTableFactory;
			var a = r(function (e) {
				e["Courier"] = 600;
				e["Courier-Bold"] = 600;
				e["Courier-BoldOblique"] = 600;
				e["Courier-Oblique"] = 600;
				e["Helvetica"] = r(function (e) {
					e["space"] = 278;
					e["exclam"] = 278;
					e["quotedbl"] = 355;
					e["numbersign"] = 556;
					e["dollar"] = 556;
					e["percent"] = 889;
					e["ampersand"] = 667;
					e["quoteright"] = 222;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asterisk"] = 389;
					e["plus"] = 584;
					e["comma"] = 278;
					e["hyphen"] = 333;
					e["period"] = 278;
					e["slash"] = 278;
					e["zero"] = 556;
					e["one"] = 556;
					e["two"] = 556;
					e["three"] = 556;
					e["four"] = 556;
					e["five"] = 556;
					e["six"] = 556;
					e["seven"] = 556;
					e["eight"] = 556;
					e["nine"] = 556;
					e["colon"] = 278;
					e["semicolon"] = 278;
					e["less"] = 584;
					e["equal"] = 584;
					e["greater"] = 584;
					e["question"] = 556;
					e["at"] = 1015;
					e["A"] = 667;
					e["B"] = 667;
					e["C"] = 722;
					e["D"] = 722;
					e["E"] = 667;
					e["F"] = 611;
					e["G"] = 778;
					e["H"] = 722;
					e["I"] = 278;
					e["J"] = 500;
					e["K"] = 667;
					e["L"] = 556;
					e["M"] = 833;
					e["N"] = 722;
					e["O"] = 778;
					e["P"] = 667;
					e["Q"] = 778;
					e["R"] = 722;
					e["S"] = 667;
					e["T"] = 611;
					e["U"] = 722;
					e["V"] = 667;
					e["W"] = 944;
					e["X"] = 667;
					e["Y"] = 667;
					e["Z"] = 611;
					e["bracketleft"] = 278;
					e["backslash"] = 278;
					e["bracketright"] = 278;
					e["asciicircum"] = 469;
					e["underscore"] = 556;
					e["quoteleft"] = 222;
					e["a"] = 556;
					e["b"] = 556;
					e["c"] = 500;
					e["d"] = 556;
					e["e"] = 556;
					e["f"] = 278;
					e["g"] = 556;
					e["h"] = 556;
					e["i"] = 222;
					e["j"] = 222;
					e["k"] = 500;
					e["l"] = 222;
					e["m"] = 833;
					e["n"] = 556;
					e["o"] = 556;
					e["p"] = 556;
					e["q"] = 556;
					e["r"] = 333;
					e["s"] = 500;
					e["t"] = 278;
					e["u"] = 556;
					e["v"] = 500;
					e["w"] = 722;
					e["x"] = 500;
					e["y"] = 500;
					e["z"] = 500;
					e["braceleft"] = 334;
					e["bar"] = 260;
					e["braceright"] = 334;
					e["asciitilde"] = 584;
					e["exclamdown"] = 333;
					e["cent"] = 556;
					e["sterling"] = 556;
					e["fraction"] = 167;
					e["yen"] = 556;
					e["florin"] = 556;
					e["section"] = 556;
					e["currency"] = 556;
					e["quotesingle"] = 191;
					e["quotedblleft"] = 333;
					e["guillemotleft"] = 556;
					e["guilsinglleft"] = 333;
					e["guilsinglright"] = 333;
					e["fi"] = 500;
					e["fl"] = 500;
					e["endash"] = 556;
					e["dagger"] = 556;
					e["daggerdbl"] = 556;
					e["periodcentered"] = 278;
					e["paragraph"] = 537;
					e["bullet"] = 350;
					e["quotesinglbase"] = 222;
					e["quotedblbase"] = 333;
					e["quotedblright"] = 333;
					e["guillemotright"] = 556;
					e["ellipsis"] = 1e3;
					e["perthousand"] = 1e3;
					e["questiondown"] = 611;
					e["grave"] = 333;
					e["acute"] = 333;
					e["circumflex"] = 333;
					e["tilde"] = 333;
					e["macron"] = 333;
					e["breve"] = 333;
					e["dotaccent"] = 333;
					e["dieresis"] = 333;
					e["ring"] = 333;
					e["cedilla"] = 333;
					e["hungarumlaut"] = 333;
					e["ogonek"] = 333;
					e["caron"] = 333;
					e["emdash"] = 1e3;
					e["AE"] = 1e3;
					e["ordfeminine"] = 370;
					e["Lslash"] = 556;
					e["Oslash"] = 778;
					e["OE"] = 1e3;
					e["ordmasculine"] = 365;
					e["ae"] = 889;
					e["dotlessi"] = 278;
					e["lslash"] = 222;
					e["oslash"] = 611;
					e["oe"] = 944;
					e["germandbls"] = 611;
					e["Idieresis"] = 278;
					e["eacute"] = 556;
					e["abreve"] = 556;
					e["uhungarumlaut"] = 556;
					e["ecaron"] = 556;
					e["Ydieresis"] = 667;
					e["divide"] = 584;
					e["Yacute"] = 667;
					e["Acircumflex"] = 667;
					e["aacute"] = 556;
					e["Ucircumflex"] = 722;
					e["yacute"] = 500;
					e["scommaaccent"] = 500;
					e["ecircumflex"] = 556;
					e["Uring"] = 722;
					e["Udieresis"] = 722;
					e["aogonek"] = 556;
					e["Uacute"] = 722;
					e["uogonek"] = 556;
					e["Edieresis"] = 667;
					e["Dcroat"] = 722;
					e["commaaccent"] = 250;
					e["copyright"] = 737;
					e["Emacron"] = 667;
					e["ccaron"] = 500;
					e["aring"] = 556;
					e["Ncommaaccent"] = 722;
					e["lacute"] = 222;
					e["agrave"] = 556;
					e["Tcommaaccent"] = 611;
					e["Cacute"] = 722;
					e["atilde"] = 556;
					e["Edotaccent"] = 667;
					e["scaron"] = 500;
					e["scedilla"] = 500;
					e["iacute"] = 278;
					e["lozenge"] = 471;
					e["Rcaron"] = 722;
					e["Gcommaaccent"] = 778;
					e["ucircumflex"] = 556;
					e["acircumflex"] = 556;
					e["Amacron"] = 667;
					e["rcaron"] = 333;
					e["ccedilla"] = 500;
					e["Zdotaccent"] = 611;
					e["Thorn"] = 667;
					e["Omacron"] = 778;
					e["Racute"] = 722;
					e["Sacute"] = 667;
					e["dcaron"] = 643;
					e["Umacron"] = 722;
					e["uring"] = 556;
					e["threesuperior"] = 333;
					e["Ograve"] = 778;
					e["Agrave"] = 667;
					e["Abreve"] = 667;
					e["multiply"] = 584;
					e["uacute"] = 556;
					e["Tcaron"] = 611;
					e["partialdiff"] = 476;
					e["ydieresis"] = 500;
					e["Nacute"] = 722;
					e["icircumflex"] = 278;
					e["Ecircumflex"] = 667;
					e["adieresis"] = 556;
					e["edieresis"] = 556;
					e["cacute"] = 500;
					e["nacute"] = 556;
					e["umacron"] = 556;
					e["Ncaron"] = 722;
					e["Iacute"] = 278;
					e["plusminus"] = 584;
					e["brokenbar"] = 260;
					e["registered"] = 737;
					e["Gbreve"] = 778;
					e["Idotaccent"] = 278;
					e["summation"] = 600;
					e["Egrave"] = 667;
					e["racute"] = 333;
					e["omacron"] = 556;
					e["Zacute"] = 611;
					e["Zcaron"] = 611;
					e["greaterequal"] = 549;
					e["Eth"] = 722;
					e["Ccedilla"] = 722;
					e["lcommaaccent"] = 222;
					e["tcaron"] = 317;
					e["eogonek"] = 556;
					e["Uogonek"] = 722;
					e["Aacute"] = 667;
					e["Adieresis"] = 667;
					e["egrave"] = 556;
					e["zacute"] = 500;
					e["iogonek"] = 222;
					e["Oacute"] = 778;
					e["oacute"] = 556;
					e["amacron"] = 556;
					e["sacute"] = 500;
					e["idieresis"] = 278;
					e["Ocircumflex"] = 778;
					e["Ugrave"] = 722;
					e["Delta"] = 612;
					e["thorn"] = 556;
					e["twosuperior"] = 333;
					e["Odieresis"] = 778;
					e["mu"] = 556;
					e["igrave"] = 278;
					e["ohungarumlaut"] = 556;
					e["Eogonek"] = 667;
					e["dcroat"] = 556;
					e["threequarters"] = 834;
					e["Scedilla"] = 667;
					e["lcaron"] = 299;
					e["Kcommaaccent"] = 667;
					e["Lacute"] = 556;
					e["trademark"] = 1e3;
					e["edotaccent"] = 556;
					e["Igrave"] = 278;
					e["Imacron"] = 278;
					e["Lcaron"] = 556;
					e["onehalf"] = 834;
					e["lessequal"] = 549;
					e["ocircumflex"] = 556;
					e["ntilde"] = 556;
					e["Uhungarumlaut"] = 722;
					e["Eacute"] = 667;
					e["emacron"] = 556;
					e["gbreve"] = 556;
					e["onequarter"] = 834;
					e["Scaron"] = 667;
					e["Scommaaccent"] = 667;
					e["Ohungarumlaut"] = 778;
					e["degree"] = 400;
					e["ograve"] = 556;
					e["Ccaron"] = 722;
					e["ugrave"] = 556;
					e["radical"] = 453;
					e["Dcaron"] = 722;
					e["rcommaaccent"] = 333;
					e["Ntilde"] = 722;
					e["otilde"] = 556;
					e["Rcommaaccent"] = 722;
					e["Lcommaaccent"] = 556;
					e["Atilde"] = 667;
					e["Aogonek"] = 667;
					e["Aring"] = 667;
					e["Otilde"] = 778;
					e["zdotaccent"] = 500;
					e["Ecaron"] = 667;
					e["Iogonek"] = 278;
					e["kcommaaccent"] = 500;
					e["minus"] = 584;
					e["Icircumflex"] = 278;
					e["ncaron"] = 556;
					e["tcommaaccent"] = 278;
					e["logicalnot"] = 584;
					e["odieresis"] = 556;
					e["udieresis"] = 556;
					e["notequal"] = 549;
					e["gcommaaccent"] = 556;
					e["eth"] = 556;
					e["zcaron"] = 500;
					e["ncommaaccent"] = 556;
					e["onesuperior"] = 333;
					e["imacron"] = 278;
					e["Euro"] = 556
				});
				e["Helvetica-Bold"] = r(function (e) {
					e["space"] = 278;
					e["exclam"] = 333;
					e["quotedbl"] = 474;
					e["numbersign"] = 556;
					e["dollar"] = 556;
					e["percent"] = 889;
					e["ampersand"] = 722;
					e["quoteright"] = 278;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asterisk"] = 389;
					e["plus"] = 584;
					e["comma"] = 278;
					e["hyphen"] = 333;
					e["period"] = 278;
					e["slash"] = 278;
					e["zero"] = 556;
					e["one"] = 556;
					e["two"] = 556;
					e["three"] = 556;
					e["four"] = 556;
					e["five"] = 556;
					e["six"] = 556;
					e["seven"] = 556;
					e["eight"] = 556;
					e["nine"] = 556;
					e["colon"] = 333;
					e["semicolon"] = 333;
					e["less"] = 584;
					e["equal"] = 584;
					e["greater"] = 584;
					e["question"] = 611;
					e["at"] = 975;
					e["A"] = 722;
					e["B"] = 722;
					e["C"] = 722;
					e["D"] = 722;
					e["E"] = 667;
					e["F"] = 611;
					e["G"] = 778;
					e["H"] = 722;
					e["I"] = 278;
					e["J"] = 556;
					e["K"] = 722;
					e["L"] = 611;
					e["M"] = 833;
					e["N"] = 722;
					e["O"] = 778;
					e["P"] = 667;
					e["Q"] = 778;
					e["R"] = 722;
					e["S"] = 667;
					e["T"] = 611;
					e["U"] = 722;
					e["V"] = 667;
					e["W"] = 944;
					e["X"] = 667;
					e["Y"] = 667;
					e["Z"] = 611;
					e["bracketleft"] = 333;
					e["backslash"] = 278;
					e["bracketright"] = 333;
					e["asciicircum"] = 584;
					e["underscore"] = 556;
					e["quoteleft"] = 278;
					e["a"] = 556;
					e["b"] = 611;
					e["c"] = 556;
					e["d"] = 611;
					e["e"] = 556;
					e["f"] = 333;
					e["g"] = 611;
					e["h"] = 611;
					e["i"] = 278;
					e["j"] = 278;
					e["k"] = 556;
					e["l"] = 278;
					e["m"] = 889;
					e["n"] = 611;
					e["o"] = 611;
					e["p"] = 611;
					e["q"] = 611;
					e["r"] = 389;
					e["s"] = 556;
					e["t"] = 333;
					e["u"] = 611;
					e["v"] = 556;
					e["w"] = 778;
					e["x"] = 556;
					e["y"] = 556;
					e["z"] = 500;
					e["braceleft"] = 389;
					e["bar"] = 280;
					e["braceright"] = 389;
					e["asciitilde"] = 584;
					e["exclamdown"] = 333;
					e["cent"] = 556;
					e["sterling"] = 556;
					e["fraction"] = 167;
					e["yen"] = 556;
					e["florin"] = 556;
					e["section"] = 556;
					e["currency"] = 556;
					e["quotesingle"] = 238;
					e["quotedblleft"] = 500;
					e["guillemotleft"] = 556;
					e["guilsinglleft"] = 333;
					e["guilsinglright"] = 333;
					e["fi"] = 611;
					e["fl"] = 611;
					e["endash"] = 556;
					e["dagger"] = 556;
					e["daggerdbl"] = 556;
					e["periodcentered"] = 278;
					e["paragraph"] = 556;
					e["bullet"] = 350;
					e["quotesinglbase"] = 278;
					e["quotedblbase"] = 500;
					e["quotedblright"] = 500;
					e["guillemotright"] = 556;
					e["ellipsis"] = 1e3;
					e["perthousand"] = 1e3;
					e["questiondown"] = 611;
					e["grave"] = 333;
					e["acute"] = 333;
					e["circumflex"] = 333;
					e["tilde"] = 333;
					e["macron"] = 333;
					e["breve"] = 333;
					e["dotaccent"] = 333;
					e["dieresis"] = 333;
					e["ring"] = 333;
					e["cedilla"] = 333;
					e["hungarumlaut"] = 333;
					e["ogonek"] = 333;
					e["caron"] = 333;
					e["emdash"] = 1e3;
					e["AE"] = 1e3;
					e["ordfeminine"] = 370;
					e["Lslash"] = 611;
					e["Oslash"] = 778;
					e["OE"] = 1e3;
					e["ordmasculine"] = 365;
					e["ae"] = 889;
					e["dotlessi"] = 278;
					e["lslash"] = 278;
					e["oslash"] = 611;
					e["oe"] = 944;
					e["germandbls"] = 611;
					e["Idieresis"] = 278;
					e["eacute"] = 556;
					e["abreve"] = 556;
					e["uhungarumlaut"] = 611;
					e["ecaron"] = 556;
					e["Ydieresis"] = 667;
					e["divide"] = 584;
					e["Yacute"] = 667;
					e["Acircumflex"] = 722;
					e["aacute"] = 556;
					e["Ucircumflex"] = 722;
					e["yacute"] = 556;
					e["scommaaccent"] = 556;
					e["ecircumflex"] = 556;
					e["Uring"] = 722;
					e["Udieresis"] = 722;
					e["aogonek"] = 556;
					e["Uacute"] = 722;
					e["uogonek"] = 611;
					e["Edieresis"] = 667;
					e["Dcroat"] = 722;
					e["commaaccent"] = 250;
					e["copyright"] = 737;
					e["Emacron"] = 667;
					e["ccaron"] = 556;
					e["aring"] = 556;
					e["Ncommaaccent"] = 722;
					e["lacute"] = 278;
					e["agrave"] = 556;
					e["Tcommaaccent"] = 611;
					e["Cacute"] = 722;
					e["atilde"] = 556;
					e["Edotaccent"] = 667;
					e["scaron"] = 556;
					e["scedilla"] = 556;
					e["iacute"] = 278;
					e["lozenge"] = 494;
					e["Rcaron"] = 722;
					e["Gcommaaccent"] = 778;
					e["ucircumflex"] = 611;
					e["acircumflex"] = 556;
					e["Amacron"] = 722;
					e["rcaron"] = 389;
					e["ccedilla"] = 556;
					e["Zdotaccent"] = 611;
					e["Thorn"] = 667;
					e["Omacron"] = 778;
					e["Racute"] = 722;
					e["Sacute"] = 667;
					e["dcaron"] = 743;
					e["Umacron"] = 722;
					e["uring"] = 611;
					e["threesuperior"] = 333;
					e["Ograve"] = 778;
					e["Agrave"] = 722;
					e["Abreve"] = 722;
					e["multiply"] = 584;
					e["uacute"] = 611;
					e["Tcaron"] = 611;
					e["partialdiff"] = 494;
					e["ydieresis"] = 556;
					e["Nacute"] = 722;
					e["icircumflex"] = 278;
					e["Ecircumflex"] = 667;
					e["adieresis"] = 556;
					e["edieresis"] = 556;
					e["cacute"] = 556;
					e["nacute"] = 611;
					e["umacron"] = 611;
					e["Ncaron"] = 722;
					e["Iacute"] = 278;
					e["plusminus"] = 584;
					e["brokenbar"] = 280;
					e["registered"] = 737;
					e["Gbreve"] = 778;
					e["Idotaccent"] = 278;
					e["summation"] = 600;
					e["Egrave"] = 667;
					e["racute"] = 389;
					e["omacron"] = 611;
					e["Zacute"] = 611;
					e["Zcaron"] = 611;
					e["greaterequal"] = 549;
					e["Eth"] = 722;
					e["Ccedilla"] = 722;
					e["lcommaaccent"] = 278;
					e["tcaron"] = 389;
					e["eogonek"] = 556;
					e["Uogonek"] = 722;
					e["Aacute"] = 722;
					e["Adieresis"] = 722;
					e["egrave"] = 556;
					e["zacute"] = 500;
					e["iogonek"] = 278;
					e["Oacute"] = 778;
					e["oacute"] = 611;
					e["amacron"] = 556;
					e["sacute"] = 556;
					e["idieresis"] = 278;
					e["Ocircumflex"] = 778;
					e["Ugrave"] = 722;
					e["Delta"] = 612;
					e["thorn"] = 611;
					e["twosuperior"] = 333;
					e["Odieresis"] = 778;
					e["mu"] = 611;
					e["igrave"] = 278;
					e["ohungarumlaut"] = 611;
					e["Eogonek"] = 667;
					e["dcroat"] = 611;
					e["threequarters"] = 834;
					e["Scedilla"] = 667;
					e["lcaron"] = 400;
					e["Kcommaaccent"] = 722;
					e["Lacute"] = 611;
					e["trademark"] = 1e3;
					e["edotaccent"] = 556;
					e["Igrave"] = 278;
					e["Imacron"] = 278;
					e["Lcaron"] = 611;
					e["onehalf"] = 834;
					e["lessequal"] = 549;
					e["ocircumflex"] = 611;
					e["ntilde"] = 611;
					e["Uhungarumlaut"] = 722;
					e["Eacute"] = 667;
					e["emacron"] = 556;
					e["gbreve"] = 611;
					e["onequarter"] = 834;
					e["Scaron"] = 667;
					e["Scommaaccent"] = 667;
					e["Ohungarumlaut"] = 778;
					e["degree"] = 400;
					e["ograve"] = 611;
					e["Ccaron"] = 722;
					e["ugrave"] = 611;
					e["radical"] = 549;
					e["Dcaron"] = 722;
					e["rcommaaccent"] = 389;
					e["Ntilde"] = 722;
					e["otilde"] = 611;
					e["Rcommaaccent"] = 722;
					e["Lcommaaccent"] = 611;
					e["Atilde"] = 722;
					e["Aogonek"] = 722;
					e["Aring"] = 722;
					e["Otilde"] = 778;
					e["zdotaccent"] = 500;
					e["Ecaron"] = 667;
					e["Iogonek"] = 278;
					e["kcommaaccent"] = 556;
					e["minus"] = 584;
					e["Icircumflex"] = 278;
					e["ncaron"] = 611;
					e["tcommaaccent"] = 333;
					e["logicalnot"] = 584;
					e["odieresis"] = 611;
					e["udieresis"] = 611;
					e["notequal"] = 549;
					e["gcommaaccent"] = 611;
					e["eth"] = 611;
					e["zcaron"] = 500;
					e["ncommaaccent"] = 611;
					e["onesuperior"] = 333;
					e["imacron"] = 278;
					e["Euro"] = 556
				});
				e["Helvetica-BoldOblique"] = r(function (e) {
					e["space"] = 278;
					e["exclam"] = 333;
					e["quotedbl"] = 474;
					e["numbersign"] = 556;
					e["dollar"] = 556;
					e["percent"] = 889;
					e["ampersand"] = 722;
					e["quoteright"] = 278;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asterisk"] = 389;
					e["plus"] = 584;
					e["comma"] = 278;
					e["hyphen"] = 333;
					e["period"] = 278;
					e["slash"] = 278;
					e["zero"] = 556;
					e["one"] = 556;
					e["two"] = 556;
					e["three"] = 556;
					e["four"] = 556;
					e["five"] = 556;
					e["six"] = 556;
					e["seven"] = 556;
					e["eight"] = 556;
					e["nine"] = 556;
					e["colon"] = 333;
					e["semicolon"] = 333;
					e["less"] = 584;
					e["equal"] = 584;
					e["greater"] = 584;
					e["question"] = 611;
					e["at"] = 975;
					e["A"] = 722;
					e["B"] = 722;
					e["C"] = 722;
					e["D"] = 722;
					e["E"] = 667;
					e["F"] = 611;
					e["G"] = 778;
					e["H"] = 722;
					e["I"] = 278;
					e["J"] = 556;
					e["K"] = 722;
					e["L"] = 611;
					e["M"] = 833;
					e["N"] = 722;
					e["O"] = 778;
					e["P"] = 667;
					e["Q"] = 778;
					e["R"] = 722;
					e["S"] = 667;
					e["T"] = 611;
					e["U"] = 722;
					e["V"] = 667;
					e["W"] = 944;
					e["X"] = 667;
					e["Y"] = 667;
					e["Z"] = 611;
					e["bracketleft"] = 333;
					e["backslash"] = 278;
					e["bracketright"] = 333;
					e["asciicircum"] = 584;
					e["underscore"] = 556;
					e["quoteleft"] = 278;
					e["a"] = 556;
					e["b"] = 611;
					e["c"] = 556;
					e["d"] = 611;
					e["e"] = 556;
					e["f"] = 333;
					e["g"] = 611;
					e["h"] = 611;
					e["i"] = 278;
					e["j"] = 278;
					e["k"] = 556;
					e["l"] = 278;
					e["m"] = 889;
					e["n"] = 611;
					e["o"] = 611;
					e["p"] = 611;
					e["q"] = 611;
					e["r"] = 389;
					e["s"] = 556;
					e["t"] = 333;
					e["u"] = 611;
					e["v"] = 556;
					e["w"] = 778;
					e["x"] = 556;
					e["y"] = 556;
					e["z"] = 500;
					e["braceleft"] = 389;
					e["bar"] = 280;
					e["braceright"] = 389;
					e["asciitilde"] = 584;
					e["exclamdown"] = 333;
					e["cent"] = 556;
					e["sterling"] = 556;
					e["fraction"] = 167;
					e["yen"] = 556;
					e["florin"] = 556;
					e["section"] = 556;
					e["currency"] = 556;
					e["quotesingle"] = 238;
					e["quotedblleft"] = 500;
					e["guillemotleft"] = 556;
					e["guilsinglleft"] = 333;
					e["guilsinglright"] = 333;
					e["fi"] = 611;
					e["fl"] = 611;
					e["endash"] = 556;
					e["dagger"] = 556;
					e["daggerdbl"] = 556;
					e["periodcentered"] = 278;
					e["paragraph"] = 556;
					e["bullet"] = 350;
					e["quotesinglbase"] = 278;
					e["quotedblbase"] = 500;
					e["quotedblright"] = 500;
					e["guillemotright"] = 556;
					e["ellipsis"] = 1e3;
					e["perthousand"] = 1e3;
					e["questiondown"] = 611;
					e["grave"] = 333;
					e["acute"] = 333;
					e["circumflex"] = 333;
					e["tilde"] = 333;
					e["macron"] = 333;
					e["breve"] = 333;
					e["dotaccent"] = 333;
					e["dieresis"] = 333;
					e["ring"] = 333;
					e["cedilla"] = 333;
					e["hungarumlaut"] = 333;
					e["ogonek"] = 333;
					e["caron"] = 333;
					e["emdash"] = 1e3;
					e["AE"] = 1e3;
					e["ordfeminine"] = 370;
					e["Lslash"] = 611;
					e["Oslash"] = 778;
					e["OE"] = 1e3;
					e["ordmasculine"] = 365;
					e["ae"] = 889;
					e["dotlessi"] = 278;
					e["lslash"] = 278;
					e["oslash"] = 611;
					e["oe"] = 944;
					e["germandbls"] = 611;
					e["Idieresis"] = 278;
					e["eacute"] = 556;
					e["abreve"] = 556;
					e["uhungarumlaut"] = 611;
					e["ecaron"] = 556;
					e["Ydieresis"] = 667;
					e["divide"] = 584;
					e["Yacute"] = 667;
					e["Acircumflex"] = 722;
					e["aacute"] = 556;
					e["Ucircumflex"] = 722;
					e["yacute"] = 556;
					e["scommaaccent"] = 556;
					e["ecircumflex"] = 556;
					e["Uring"] = 722;
					e["Udieresis"] = 722;
					e["aogonek"] = 556;
					e["Uacute"] = 722;
					e["uogonek"] = 611;
					e["Edieresis"] = 667;
					e["Dcroat"] = 722;
					e["commaaccent"] = 250;
					e["copyright"] = 737;
					e["Emacron"] = 667;
					e["ccaron"] = 556;
					e["aring"] = 556;
					e["Ncommaaccent"] = 722;
					e["lacute"] = 278;
					e["agrave"] = 556;
					e["Tcommaaccent"] = 611;
					e["Cacute"] = 722;
					e["atilde"] = 556;
					e["Edotaccent"] = 667;
					e["scaron"] = 556;
					e["scedilla"] = 556;
					e["iacute"] = 278;
					e["lozenge"] = 494;
					e["Rcaron"] = 722;
					e["Gcommaaccent"] = 778;
					e["ucircumflex"] = 611;
					e["acircumflex"] = 556;
					e["Amacron"] = 722;
					e["rcaron"] = 389;
					e["ccedilla"] = 556;
					e["Zdotaccent"] = 611;
					e["Thorn"] = 667;
					e["Omacron"] = 778;
					e["Racute"] = 722;
					e["Sacute"] = 667;
					e["dcaron"] = 743;
					e["Umacron"] = 722;
					e["uring"] = 611;
					e["threesuperior"] = 333;
					e["Ograve"] = 778;
					e["Agrave"] = 722;
					e["Abreve"] = 722;
					e["multiply"] = 584;
					e["uacute"] = 611;
					e["Tcaron"] = 611;
					e["partialdiff"] = 494;
					e["ydieresis"] = 556;
					e["Nacute"] = 722;
					e["icircumflex"] = 278;
					e["Ecircumflex"] = 667;
					e["adieresis"] = 556;
					e["edieresis"] = 556;
					e["cacute"] = 556;
					e["nacute"] = 611;
					e["umacron"] = 611;
					e["Ncaron"] = 722;
					e["Iacute"] = 278;
					e["plusminus"] = 584;
					e["brokenbar"] = 280;
					e["registered"] = 737;
					e["Gbreve"] = 778;
					e["Idotaccent"] = 278;
					e["summation"] = 600;
					e["Egrave"] = 667;
					e["racute"] = 389;
					e["omacron"] = 611;
					e["Zacute"] = 611;
					e["Zcaron"] = 611;
					e["greaterequal"] = 549;
					e["Eth"] = 722;
					e["Ccedilla"] = 722;
					e["lcommaaccent"] = 278;
					e["tcaron"] = 389;
					e["eogonek"] = 556;
					e["Uogonek"] = 722;
					e["Aacute"] = 722;
					e["Adieresis"] = 722;
					e["egrave"] = 556;
					e["zacute"] = 500;
					e["iogonek"] = 278;
					e["Oacute"] = 778;
					e["oacute"] = 611;
					e["amacron"] = 556;
					e["sacute"] = 556;
					e["idieresis"] = 278;
					e["Ocircumflex"] = 778;
					e["Ugrave"] = 722;
					e["Delta"] = 612;
					e["thorn"] = 611;
					e["twosuperior"] = 333;
					e["Odieresis"] = 778;
					e["mu"] = 611;
					e["igrave"] = 278;
					e["ohungarumlaut"] = 611;
					e["Eogonek"] = 667;
					e["dcroat"] = 611;
					e["threequarters"] = 834;
					e["Scedilla"] = 667;
					e["lcaron"] = 400;
					e["Kcommaaccent"] = 722;
					e["Lacute"] = 611;
					e["trademark"] = 1e3;
					e["edotaccent"] = 556;
					e["Igrave"] = 278;
					e["Imacron"] = 278;
					e["Lcaron"] = 611;
					e["onehalf"] = 834;
					e["lessequal"] = 549;
					e["ocircumflex"] = 611;
					e["ntilde"] = 611;
					e["Uhungarumlaut"] = 722;
					e["Eacute"] = 667;
					e["emacron"] = 556;
					e["gbreve"] = 611;
					e["onequarter"] = 834;
					e["Scaron"] = 667;
					e["Scommaaccent"] = 667;
					e["Ohungarumlaut"] = 778;
					e["degree"] = 400;
					e["ograve"] = 611;
					e["Ccaron"] = 722;
					e["ugrave"] = 611;
					e["radical"] = 549;
					e["Dcaron"] = 722;
					e["rcommaaccent"] = 389;
					e["Ntilde"] = 722;
					e["otilde"] = 611;
					e["Rcommaaccent"] = 722;
					e["Lcommaaccent"] = 611;
					e["Atilde"] = 722;
					e["Aogonek"] = 722;
					e["Aring"] = 722;
					e["Otilde"] = 778;
					e["zdotaccent"] = 500;
					e["Ecaron"] = 667;
					e["Iogonek"] = 278;
					e["kcommaaccent"] = 556;
					e["minus"] = 584;
					e["Icircumflex"] = 278;
					e["ncaron"] = 611;
					e["tcommaaccent"] = 333;
					e["logicalnot"] = 584;
					e["odieresis"] = 611;
					e["udieresis"] = 611;
					e["notequal"] = 549;
					e["gcommaaccent"] = 611;
					e["eth"] = 611;
					e["zcaron"] = 500;
					e["ncommaaccent"] = 611;
					e["onesuperior"] = 333;
					e["imacron"] = 278;
					e["Euro"] = 556
				});
				e["Helvetica-Oblique"] = r(function (e) {
					e["space"] = 278;
					e["exclam"] = 278;
					e["quotedbl"] = 355;
					e["numbersign"] = 556;
					e["dollar"] = 556;
					e["percent"] = 889;
					e["ampersand"] = 667;
					e["quoteright"] = 222;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asterisk"] = 389;
					e["plus"] = 584;
					e["comma"] = 278;
					e["hyphen"] = 333;
					e["period"] = 278;
					e["slash"] = 278;
					e["zero"] = 556;
					e["one"] = 556;
					e["two"] = 556;
					e["three"] = 556;
					e["four"] = 556;
					e["five"] = 556;
					e["six"] = 556;
					e["seven"] = 556;
					e["eight"] = 556;
					e["nine"] = 556;
					e["colon"] = 278;
					e["semicolon"] = 278;
					e["less"] = 584;
					e["equal"] = 584;
					e["greater"] = 584;
					e["question"] = 556;
					e["at"] = 1015;
					e["A"] = 667;
					e["B"] = 667;
					e["C"] = 722;
					e["D"] = 722;
					e["E"] = 667;
					e["F"] = 611;
					e["G"] = 778;
					e["H"] = 722;
					e["I"] = 278;
					e["J"] = 500;
					e["K"] = 667;
					e["L"] = 556;
					e["M"] = 833;
					e["N"] = 722;
					e["O"] = 778;
					e["P"] = 667;
					e["Q"] = 778;
					e["R"] = 722;
					e["S"] = 667;
					e["T"] = 611;
					e["U"] = 722;
					e["V"] = 667;
					e["W"] = 944;
					e["X"] = 667;
					e["Y"] = 667;
					e["Z"] = 611;
					e["bracketleft"] = 278;
					e["backslash"] = 278;
					e["bracketright"] = 278;
					e["asciicircum"] = 469;
					e["underscore"] = 556;
					e["quoteleft"] = 222;
					e["a"] = 556;
					e["b"] = 556;
					e["c"] = 500;
					e["d"] = 556;
					e["e"] = 556;
					e["f"] = 278;
					e["g"] = 556;
					e["h"] = 556;
					e["i"] = 222;
					e["j"] = 222;
					e["k"] = 500;
					e["l"] = 222;
					e["m"] = 833;
					e["n"] = 556;
					e["o"] = 556;
					e["p"] = 556;
					e["q"] = 556;
					e["r"] = 333;
					e["s"] = 500;
					e["t"] = 278;
					e["u"] = 556;
					e["v"] = 500;
					e["w"] = 722;
					e["x"] = 500;
					e["y"] = 500;
					e["z"] = 500;
					e["braceleft"] = 334;
					e["bar"] = 260;
					e["braceright"] = 334;
					e["asciitilde"] = 584;
					e["exclamdown"] = 333;
					e["cent"] = 556;
					e["sterling"] = 556;
					e["fraction"] = 167;
					e["yen"] = 556;
					e["florin"] = 556;
					e["section"] = 556;
					e["currency"] = 556;
					e["quotesingle"] = 191;
					e["quotedblleft"] = 333;
					e["guillemotleft"] = 556;
					e["guilsinglleft"] = 333;
					e["guilsinglright"] = 333;
					e["fi"] = 500;
					e["fl"] = 500;
					e["endash"] = 556;
					e["dagger"] = 556;
					e["daggerdbl"] = 556;
					e["periodcentered"] = 278;
					e["paragraph"] = 537;
					e["bullet"] = 350;
					e["quotesinglbase"] = 222;
					e["quotedblbase"] = 333;
					e["quotedblright"] = 333;
					e["guillemotright"] = 556;
					e["ellipsis"] = 1e3;
					e["perthousand"] = 1e3;
					e["questiondown"] = 611;
					e["grave"] = 333;
					e["acute"] = 333;
					e["circumflex"] = 333;
					e["tilde"] = 333;
					e["macron"] = 333;
					e["breve"] = 333;
					e["dotaccent"] = 333;
					e["dieresis"] = 333;
					e["ring"] = 333;
					e["cedilla"] = 333;
					e["hungarumlaut"] = 333;
					e["ogonek"] = 333;
					e["caron"] = 333;
					e["emdash"] = 1e3;
					e["AE"] = 1e3;
					e["ordfeminine"] = 370;
					e["Lslash"] = 556;
					e["Oslash"] = 778;
					e["OE"] = 1e3;
					e["ordmasculine"] = 365;
					e["ae"] = 889;
					e["dotlessi"] = 278;
					e["lslash"] = 222;
					e["oslash"] = 611;
					e["oe"] = 944;
					e["germandbls"] = 611;
					e["Idieresis"] = 278;
					e["eacute"] = 556;
					e["abreve"] = 556;
					e["uhungarumlaut"] = 556;
					e["ecaron"] = 556;
					e["Ydieresis"] = 667;
					e["divide"] = 584;
					e["Yacute"] = 667;
					e["Acircumflex"] = 667;
					e["aacute"] = 556;
					e["Ucircumflex"] = 722;
					e["yacute"] = 500;
					e["scommaaccent"] = 500;
					e["ecircumflex"] = 556;
					e["Uring"] = 722;
					e["Udieresis"] = 722;
					e["aogonek"] = 556;
					e["Uacute"] = 722;
					e["uogonek"] = 556;
					e["Edieresis"] = 667;
					e["Dcroat"] = 722;
					e["commaaccent"] = 250;
					e["copyright"] = 737;
					e["Emacron"] = 667;
					e["ccaron"] = 500;
					e["aring"] = 556;
					e["Ncommaaccent"] = 722;
					e["lacute"] = 222;
					e["agrave"] = 556;
					e["Tcommaaccent"] = 611;
					e["Cacute"] = 722;
					e["atilde"] = 556;
					e["Edotaccent"] = 667;
					e["scaron"] = 500;
					e["scedilla"] = 500;
					e["iacute"] = 278;
					e["lozenge"] = 471;
					e["Rcaron"] = 722;
					e["Gcommaaccent"] = 778;
					e["ucircumflex"] = 556;
					e["acircumflex"] = 556;
					e["Amacron"] = 667;
					e["rcaron"] = 333;
					e["ccedilla"] = 500;
					e["Zdotaccent"] = 611;
					e["Thorn"] = 667;
					e["Omacron"] = 778;
					e["Racute"] = 722;
					e["Sacute"] = 667;
					e["dcaron"] = 643;
					e["Umacron"] = 722;
					e["uring"] = 556;
					e["threesuperior"] = 333;
					e["Ograve"] = 778;
					e["Agrave"] = 667;
					e["Abreve"] = 667;
					e["multiply"] = 584;
					e["uacute"] = 556;
					e["Tcaron"] = 611;
					e["partialdiff"] = 476;
					e["ydieresis"] = 500;
					e["Nacute"] = 722;
					e["icircumflex"] = 278;
					e["Ecircumflex"] = 667;
					e["adieresis"] = 556;
					e["edieresis"] = 556;
					e["cacute"] = 500;
					e["nacute"] = 556;
					e["umacron"] = 556;
					e["Ncaron"] = 722;
					e["Iacute"] = 278;
					e["plusminus"] = 584;
					e["brokenbar"] = 260;
					e["registered"] = 737;
					e["Gbreve"] = 778;
					e["Idotaccent"] = 278;
					e["summation"] = 600;
					e["Egrave"] = 667;
					e["racute"] = 333;
					e["omacron"] = 556;
					e["Zacute"] = 611;
					e["Zcaron"] = 611;
					e["greaterequal"] = 549;
					e["Eth"] = 722;
					e["Ccedilla"] = 722;
					e["lcommaaccent"] = 222;
					e["tcaron"] = 317;
					e["eogonek"] = 556;
					e["Uogonek"] = 722;
					e["Aacute"] = 667;
					e["Adieresis"] = 667;
					e["egrave"] = 556;
					e["zacute"] = 500;
					e["iogonek"] = 222;
					e["Oacute"] = 778;
					e["oacute"] = 556;
					e["amacron"] = 556;
					e["sacute"] = 500;
					e["idieresis"] = 278;
					e["Ocircumflex"] = 778;
					e["Ugrave"] = 722;
					e["Delta"] = 612;
					e["thorn"] = 556;
					e["twosuperior"] = 333;
					e["Odieresis"] = 778;
					e["mu"] = 556;
					e["igrave"] = 278;
					e["ohungarumlaut"] = 556;
					e["Eogonek"] = 667;
					e["dcroat"] = 556;
					e["threequarters"] = 834;
					e["Scedilla"] = 667;
					e["lcaron"] = 299;
					e["Kcommaaccent"] = 667;
					e["Lacute"] = 556;
					e["trademark"] = 1e3;
					e["edotaccent"] = 556;
					e["Igrave"] = 278;
					e["Imacron"] = 278;
					e["Lcaron"] = 556;
					e["onehalf"] = 834;
					e["lessequal"] = 549;
					e["ocircumflex"] = 556;
					e["ntilde"] = 556;
					e["Uhungarumlaut"] = 722;
					e["Eacute"] = 667;
					e["emacron"] = 556;
					e["gbreve"] = 556;
					e["onequarter"] = 834;
					e["Scaron"] = 667;
					e["Scommaaccent"] = 667;
					e["Ohungarumlaut"] = 778;
					e["degree"] = 400;
					e["ograve"] = 556;
					e["Ccaron"] = 722;
					e["ugrave"] = 556;
					e["radical"] = 453;
					e["Dcaron"] = 722;
					e["rcommaaccent"] = 333;
					e["Ntilde"] = 722;
					e["otilde"] = 556;
					e["Rcommaaccent"] = 722;
					e["Lcommaaccent"] = 556;
					e["Atilde"] = 667;
					e["Aogonek"] = 667;
					e["Aring"] = 667;
					e["Otilde"] = 778;
					e["zdotaccent"] = 500;
					e["Ecaron"] = 667;
					e["Iogonek"] = 278;
					e["kcommaaccent"] = 500;
					e["minus"] = 584;
					e["Icircumflex"] = 278;
					e["ncaron"] = 556;
					e["tcommaaccent"] = 278;
					e["logicalnot"] = 584;
					e["odieresis"] = 556;
					e["udieresis"] = 556;
					e["notequal"] = 549;
					e["gcommaaccent"] = 556;
					e["eth"] = 556;
					e["zcaron"] = 500;
					e["ncommaaccent"] = 556;
					e["onesuperior"] = 333;
					e["imacron"] = 278;
					e["Euro"] = 556
				});
				e["Symbol"] = r(function (e) {
					e["space"] = 250;
					e["exclam"] = 333;
					e["universal"] = 713;
					e["numbersign"] = 500;
					e["existential"] = 549;
					e["percent"] = 833;
					e["ampersand"] = 778;
					e["suchthat"] = 439;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asteriskmath"] = 500;
					e["plus"] = 549;
					e["comma"] = 250;
					e["minus"] = 549;
					e["period"] = 250;
					e["slash"] = 278;
					e["zero"] = 500;
					e["one"] = 500;
					e["two"] = 500;
					e["three"] = 500;
					e["four"] = 500;
					e["five"] = 500;
					e["six"] = 500;
					e["seven"] = 500;
					e["eight"] = 500;
					e["nine"] = 500;
					e["colon"] = 278;
					e["semicolon"] = 278;
					e["less"] = 549;
					e["equal"] = 549;
					e["greater"] = 549;
					e["question"] = 444;
					e["congruent"] = 549;
					e["Alpha"] = 722;
					e["Beta"] = 667;
					e["Chi"] = 722;
					e["Delta"] = 612;
					e["Epsilon"] = 611;
					e["Phi"] = 763;
					e["Gamma"] = 603;
					e["Eta"] = 722;
					e["Iota"] = 333;
					e["theta1"] = 631;
					e["Kappa"] = 722;
					e["Lambda"] = 686;
					e["Mu"] = 889;
					e["Nu"] = 722;
					e["Omicron"] = 722;
					e["Pi"] = 768;
					e["Theta"] = 741;
					e["Rho"] = 556;
					e["Sigma"] = 592;
					e["Tau"] = 611;
					e["Upsilon"] = 690;
					e["sigma1"] = 439;
					e["Omega"] = 768;
					e["Xi"] = 645;
					e["Psi"] = 795;
					e["Zeta"] = 611;
					e["bracketleft"] = 333;
					e["therefore"] = 863;
					e["bracketright"] = 333;
					e["perpendicular"] = 658;
					e["underscore"] = 500;
					e["radicalex"] = 500;
					e["alpha"] = 631;
					e["beta"] = 549;
					e["chi"] = 549;
					e["delta"] = 494;
					e["epsilon"] = 439;
					e["phi"] = 521;
					e["gamma"] = 411;
					e["eta"] = 603;
					e["iota"] = 329;
					e["phi1"] = 603;
					e["kappa"] = 549;
					e["lambda"] = 549;
					e["mu"] = 576;
					e["nu"] = 521;
					e["omicron"] = 549;
					e["pi"] = 549;
					e["theta"] = 521;
					e["rho"] = 549;
					e["sigma"] = 603;
					e["tau"] = 439;
					e["upsilon"] = 576;
					e["omega1"] = 713;
					e["omega"] = 686;
					e["xi"] = 493;
					e["psi"] = 686;
					e["zeta"] = 494;
					e["braceleft"] = 480;
					e["bar"] = 200;
					e["braceright"] = 480;
					e["similar"] = 549;
					e["Euro"] = 750;
					e["Upsilon1"] = 620;
					e["minute"] = 247;
					e["lessequal"] = 549;
					e["fraction"] = 167;
					e["infinity"] = 713;
					e["florin"] = 500;
					e["club"] = 753;
					e["diamond"] = 753;
					e["heart"] = 753;
					e["spade"] = 753;
					e["arrowboth"] = 1042;
					e["arrowleft"] = 987;
					e["arrowup"] = 603;
					e["arrowright"] = 987;
					e["arrowdown"] = 603;
					e["degree"] = 400;
					e["plusminus"] = 549;
					e["second"] = 411;
					e["greaterequal"] = 549;
					e["multiply"] = 549;
					e["proportional"] = 713;
					e["partialdiff"] = 494;
					e["bullet"] = 460;
					e["divide"] = 549;
					e["notequal"] = 549;
					e["equivalence"] = 549;
					e["approxequal"] = 549;
					e["ellipsis"] = 1e3;
					e["arrowvertex"] = 603;
					e["arrowhorizex"] = 1e3;
					e["carriagereturn"] = 658;
					e["aleph"] = 823;
					e["Ifraktur"] = 686;
					e["Rfraktur"] = 795;
					e["weierstrass"] = 987;
					e["circlemultiply"] = 768;
					e["circleplus"] = 768;
					e["emptyset"] = 823;
					e["intersection"] = 768;
					e["union"] = 768;
					e["propersuperset"] = 713;
					e["reflexsuperset"] = 713;
					e["notsubset"] = 713;
					e["propersubset"] = 713;
					e["reflexsubset"] = 713;
					e["element"] = 713;
					e["notelement"] = 713;
					e["angle"] = 768;
					e["gradient"] = 713;
					e["registerserif"] = 790;
					e["copyrightserif"] = 790;
					e["trademarkserif"] = 890;
					e["product"] = 823;
					e["radical"] = 549;
					e["dotmath"] = 250;
					e["logicalnot"] = 713;
					e["logicaland"] = 603;
					e["logicalor"] = 603;
					e["arrowdblboth"] = 1042;
					e["arrowdblleft"] = 987;
					e["arrowdblup"] = 603;
					e["arrowdblright"] = 987;
					e["arrowdbldown"] = 603;
					e["lozenge"] = 494;
					e["angleleft"] = 329;
					e["registersans"] = 790;
					e["copyrightsans"] = 790;
					e["trademarksans"] = 786;
					e["summation"] = 713;
					e["parenlefttp"] = 384;
					e["parenleftex"] = 384;
					e["parenleftbt"] = 384;
					e["bracketlefttp"] = 384;
					e["bracketleftex"] = 384;
					e["bracketleftbt"] = 384;
					e["bracelefttp"] = 494;
					e["braceleftmid"] = 494;
					e["braceleftbt"] = 494;
					e["braceex"] = 494;
					e["angleright"] = 329;
					e["integral"] = 274;
					e["integraltp"] = 686;
					e["integralex"] = 686;
					e["integralbt"] = 686;
					e["parenrighttp"] = 384;
					e["parenrightex"] = 384;
					e["parenrightbt"] = 384;
					e["bracketrighttp"] = 384;
					e["bracketrightex"] = 384;
					e["bracketrightbt"] = 384;
					e["bracerighttp"] = 494;
					e["bracerightmid"] = 494;
					e["bracerightbt"] = 494;
					e["apple"] = 790
				});
				e["Times-Roman"] = r(function (e) {
					e["space"] = 250;
					e["exclam"] = 333;
					e["quotedbl"] = 408;
					e["numbersign"] = 500;
					e["dollar"] = 500;
					e["percent"] = 833;
					e["ampersand"] = 778;
					e["quoteright"] = 333;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asterisk"] = 500;
					e["plus"] = 564;
					e["comma"] = 250;
					e["hyphen"] = 333;
					e["period"] = 250;
					e["slash"] = 278;
					e["zero"] = 500;
					e["one"] = 500;
					e["two"] = 500;
					e["three"] = 500;
					e["four"] = 500;
					e["five"] = 500;
					e["six"] = 500;
					e["seven"] = 500;
					e["eight"] = 500;
					e["nine"] = 500;
					e["colon"] = 278;
					e["semicolon"] = 278;
					e["less"] = 564;
					e["equal"] = 564;
					e["greater"] = 564;
					e["question"] = 444;
					e["at"] = 921;
					e["A"] = 722;
					e["B"] = 667;
					e["C"] = 667;
					e["D"] = 722;
					e["E"] = 611;
					e["F"] = 556;
					e["G"] = 722;
					e["H"] = 722;
					e["I"] = 333;
					e["J"] = 389;
					e["K"] = 722;
					e["L"] = 611;
					e["M"] = 889;
					e["N"] = 722;
					e["O"] = 722;
					e["P"] = 556;
					e["Q"] = 722;
					e["R"] = 667;
					e["S"] = 556;
					e["T"] = 611;
					e["U"] = 722;
					e["V"] = 722;
					e["W"] = 944;
					e["X"] = 722;
					e["Y"] = 722;
					e["Z"] = 611;
					e["bracketleft"] = 333;
					e["backslash"] = 278;
					e["bracketright"] = 333;
					e["asciicircum"] = 469;
					e["underscore"] = 500;
					e["quoteleft"] = 333;
					e["a"] = 444;
					e["b"] = 500;
					e["c"] = 444;
					e["d"] = 500;
					e["e"] = 444;
					e["f"] = 333;
					e["g"] = 500;
					e["h"] = 500;
					e["i"] = 278;
					e["j"] = 278;
					e["k"] = 500;
					e["l"] = 278;
					e["m"] = 778;
					e["n"] = 500;
					e["o"] = 500;
					e["p"] = 500;
					e["q"] = 500;
					e["r"] = 333;
					e["s"] = 389;
					e["t"] = 278;
					e["u"] = 500;
					e["v"] = 500;
					e["w"] = 722;
					e["x"] = 500;
					e["y"] = 500;
					e["z"] = 444;
					e["braceleft"] = 480;
					e["bar"] = 200;
					e["braceright"] = 480;
					e["asciitilde"] = 541;
					e["exclamdown"] = 333;
					e["cent"] = 500;
					e["sterling"] = 500;
					e["fraction"] = 167;
					e["yen"] = 500;
					e["florin"] = 500;
					e["section"] = 500;
					e["currency"] = 500;
					e["quotesingle"] = 180;
					e["quotedblleft"] = 444;
					e["guillemotleft"] = 500;
					e["guilsinglleft"] = 333;
					e["guilsinglright"] = 333;
					e["fi"] = 556;
					e["fl"] = 556;
					e["endash"] = 500;
					e["dagger"] = 500;
					e["daggerdbl"] = 500;
					e["periodcentered"] = 250;
					e["paragraph"] = 453;
					e["bullet"] = 350;
					e["quotesinglbase"] = 333;
					e["quotedblbase"] = 444;
					e["quotedblright"] = 444;
					e["guillemotright"] = 500;
					e["ellipsis"] = 1e3;
					e["perthousand"] = 1e3;
					e["questiondown"] = 444;
					e["grave"] = 333;
					e["acute"] = 333;
					e["circumflex"] = 333;
					e["tilde"] = 333;
					e["macron"] = 333;
					e["breve"] = 333;
					e["dotaccent"] = 333;
					e["dieresis"] = 333;
					e["ring"] = 333;
					e["cedilla"] = 333;
					e["hungarumlaut"] = 333;
					e["ogonek"] = 333;
					e["caron"] = 333;
					e["emdash"] = 1e3;
					e["AE"] = 889;
					e["ordfeminine"] = 276;
					e["Lslash"] = 611;
					e["Oslash"] = 722;
					e["OE"] = 889;
					e["ordmasculine"] = 310;
					e["ae"] = 667;
					e["dotlessi"] = 278;
					e["lslash"] = 278;
					e["oslash"] = 500;
					e["oe"] = 722;
					e["germandbls"] = 500;
					e["Idieresis"] = 333;
					e["eacute"] = 444;
					e["abreve"] = 444;
					e["uhungarumlaut"] = 500;
					e["ecaron"] = 444;
					e["Ydieresis"] = 722;
					e["divide"] = 564;
					e["Yacute"] = 722;
					e["Acircumflex"] = 722;
					e["aacute"] = 444;
					e["Ucircumflex"] = 722;
					e["yacute"] = 500;
					e["scommaaccent"] = 389;
					e["ecircumflex"] = 444;
					e["Uring"] = 722;
					e["Udieresis"] = 722;
					e["aogonek"] = 444;
					e["Uacute"] = 722;
					e["uogonek"] = 500;
					e["Edieresis"] = 611;
					e["Dcroat"] = 722;
					e["commaaccent"] = 250;
					e["copyright"] = 760;
					e["Emacron"] = 611;
					e["ccaron"] = 444;
					e["aring"] = 444;
					e["Ncommaaccent"] = 722;
					e["lacute"] = 278;
					e["agrave"] = 444;
					e["Tcommaaccent"] = 611;
					e["Cacute"] = 667;
					e["atilde"] = 444;
					e["Edotaccent"] = 611;
					e["scaron"] = 389;
					e["scedilla"] = 389;
					e["iacute"] = 278;
					e["lozenge"] = 471;
					e["Rcaron"] = 667;
					e["Gcommaaccent"] = 722;
					e["ucircumflex"] = 500;
					e["acircumflex"] = 444;
					e["Amacron"] = 722;
					e["rcaron"] = 333;
					e["ccedilla"] = 444;
					e["Zdotaccent"] = 611;
					e["Thorn"] = 556;
					e["Omacron"] = 722;
					e["Racute"] = 667;
					e["Sacute"] = 556;
					e["dcaron"] = 588;
					e["Umacron"] = 722;
					e["uring"] = 500;
					e["threesuperior"] = 300;
					e["Ograve"] = 722;
					e["Agrave"] = 722;
					e["Abreve"] = 722;
					e["multiply"] = 564;
					e["uacute"] = 500;
					e["Tcaron"] = 611;
					e["partialdiff"] = 476;
					e["ydieresis"] = 500;
					e["Nacute"] = 722;
					e["icircumflex"] = 278;
					e["Ecircumflex"] = 611;
					e["adieresis"] = 444;
					e["edieresis"] = 444;
					e["cacute"] = 444;
					e["nacute"] = 500;
					e["umacron"] = 500;
					e["Ncaron"] = 722;
					e["Iacute"] = 333;
					e["plusminus"] = 564;
					e["brokenbar"] = 200;
					e["registered"] = 760;
					e["Gbreve"] = 722;
					e["Idotaccent"] = 333;
					e["summation"] = 600;
					e["Egrave"] = 611;
					e["racute"] = 333;
					e["omacron"] = 500;
					e["Zacute"] = 611;
					e["Zcaron"] = 611;
					e["greaterequal"] = 549;
					e["Eth"] = 722;
					e["Ccedilla"] = 667;
					e["lcommaaccent"] = 278;
					e["tcaron"] = 326;
					e["eogonek"] = 444;
					e["Uogonek"] = 722;
					e["Aacute"] = 722;
					e["Adieresis"] = 722;
					e["egrave"] = 444;
					e["zacute"] = 444;
					e["iogonek"] = 278;
					e["Oacute"] = 722;
					e["oacute"] = 500;
					e["amacron"] = 444;
					e["sacute"] = 389;
					e["idieresis"] = 278;
					e["Ocircumflex"] = 722;
					e["Ugrave"] = 722;
					e["Delta"] = 612;
					e["thorn"] = 500;
					e["twosuperior"] = 300;
					e["Odieresis"] = 722;
					e["mu"] = 500;
					e["igrave"] = 278;
					e["ohungarumlaut"] = 500;
					e["Eogonek"] = 611;
					e["dcroat"] = 500;
					e["threequarters"] = 750;
					e["Scedilla"] = 556;
					e["lcaron"] = 344;
					e["Kcommaaccent"] = 722;
					e["Lacute"] = 611;
					e["trademark"] = 980;
					e["edotaccent"] = 444;
					e["Igrave"] = 333;
					e["Imacron"] = 333;
					e["Lcaron"] = 611;
					e["onehalf"] = 750;
					e["lessequal"] = 549;
					e["ocircumflex"] = 500;
					e["ntilde"] = 500;
					e["Uhungarumlaut"] = 722;
					e["Eacute"] = 611;
					e["emacron"] = 444;
					e["gbreve"] = 500;
					e["onequarter"] = 750;
					e["Scaron"] = 556;
					e["Scommaaccent"] = 556;
					e["Ohungarumlaut"] = 722;
					e["degree"] = 400;
					e["ograve"] = 500;
					e["Ccaron"] = 667;
					e["ugrave"] = 500;
					e["radical"] = 453;
					e["Dcaron"] = 722;
					e["rcommaaccent"] = 333;
					e["Ntilde"] = 722;
					e["otilde"] = 500;
					e["Rcommaaccent"] = 667;
					e["Lcommaaccent"] = 611;
					e["Atilde"] = 722;
					e["Aogonek"] = 722;
					e["Aring"] = 722;
					e["Otilde"] = 722;
					e["zdotaccent"] = 444;
					e["Ecaron"] = 611;
					e["Iogonek"] = 333;
					e["kcommaaccent"] = 500;
					e["minus"] = 564;
					e["Icircumflex"] = 333;
					e["ncaron"] = 500;
					e["tcommaaccent"] = 278;
					e["logicalnot"] = 564;
					e["odieresis"] = 500;
					e["udieresis"] = 500;
					e["notequal"] = 549;
					e["gcommaaccent"] = 500;
					e["eth"] = 500;
					e["zcaron"] = 444;
					e["ncommaaccent"] = 500;
					e["onesuperior"] = 300;
					e["imacron"] = 278;
					e["Euro"] = 500
				});
				e["Times-Bold"] = r(function (e) {
					e["space"] = 250;
					e["exclam"] = 333;
					e["quotedbl"] = 555;
					e["numbersign"] = 500;
					e["dollar"] = 500;
					e["percent"] = 1e3;
					e["ampersand"] = 833;
					e["quoteright"] = 333;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asterisk"] = 500;
					e["plus"] = 570;
					e["comma"] = 250;
					e["hyphen"] = 333;
					e["period"] = 250;
					e["slash"] = 278;
					e["zero"] = 500;
					e["one"] = 500;
					e["two"] = 500;
					e["three"] = 500;
					e["four"] = 500;
					e["five"] = 500;
					e["six"] = 500;
					e["seven"] = 500;
					e["eight"] = 500;
					e["nine"] = 500;
					e["colon"] = 333;
					e["semicolon"] = 333;
					e["less"] = 570;
					e["equal"] = 570;
					e["greater"] = 570;
					e["question"] = 500;
					e["at"] = 930;
					e["A"] = 722;
					e["B"] = 667;
					e["C"] = 722;
					e["D"] = 722;
					e["E"] = 667;
					e["F"] = 611;
					e["G"] = 778;
					e["H"] = 778;
					e["I"] = 389;
					e["J"] = 500;
					e["K"] = 778;
					e["L"] = 667;
					e["M"] = 944;
					e["N"] = 722;
					e["O"] = 778;
					e["P"] = 611;
					e["Q"] = 778;
					e["R"] = 722;
					e["S"] = 556;
					e["T"] = 667;
					e["U"] = 722;
					e["V"] = 722;
					e["W"] = 1e3;
					e["X"] = 722;
					e["Y"] = 722;
					e["Z"] = 667;
					e["bracketleft"] = 333;
					e["backslash"] = 278;
					e["bracketright"] = 333;
					e["asciicircum"] = 581;
					e["underscore"] = 500;
					e["quoteleft"] = 333;
					e["a"] = 500;
					e["b"] = 556;
					e["c"] = 444;
					e["d"] = 556;
					e["e"] = 444;
					e["f"] = 333;
					e["g"] = 500;
					e["h"] = 556;
					e["i"] = 278;
					e["j"] = 333;
					e["k"] = 556;
					e["l"] = 278;
					e["m"] = 833;
					e["n"] = 556;
					e["o"] = 500;
					e["p"] = 556;
					e["q"] = 556;
					e["r"] = 444;
					e["s"] = 389;
					e["t"] = 333;
					e["u"] = 556;
					e["v"] = 500;
					e["w"] = 722;
					e["x"] = 500;
					e["y"] = 500;
					e["z"] = 444;
					e["braceleft"] = 394;
					e["bar"] = 220;
					e["braceright"] = 394;
					e["asciitilde"] = 520;
					e["exclamdown"] = 333;
					e["cent"] = 500;
					e["sterling"] = 500;
					e["fraction"] = 167;
					e["yen"] = 500;
					e["florin"] = 500;
					e["section"] = 500;
					e["currency"] = 500;
					e["quotesingle"] = 278;
					e["quotedblleft"] = 500;
					e["guillemotleft"] = 500;
					e["guilsinglleft"] = 333;
					e["guilsinglright"] = 333;
					e["fi"] = 556;
					e["fl"] = 556;
					e["endash"] = 500;
					e["dagger"] = 500;
					e["daggerdbl"] = 500;
					e["periodcentered"] = 250;
					e["paragraph"] = 540;
					e["bullet"] = 350;
					e["quotesinglbase"] = 333;
					e["quotedblbase"] = 500;
					e["quotedblright"] = 500;
					e["guillemotright"] = 500;
					e["ellipsis"] = 1e3;
					e["perthousand"] = 1e3;
					e["questiondown"] = 500;
					e["grave"] = 333;
					e["acute"] = 333;
					e["circumflex"] = 333;
					e["tilde"] = 333;
					e["macron"] = 333;
					e["breve"] = 333;
					e["dotaccent"] = 333;
					e["dieresis"] = 333;
					e["ring"] = 333;
					e["cedilla"] = 333;
					e["hungarumlaut"] = 333;
					e["ogonek"] = 333;
					e["caron"] = 333;
					e["emdash"] = 1e3;
					e["AE"] = 1e3;
					e["ordfeminine"] = 300;
					e["Lslash"] = 667;
					e["Oslash"] = 778;
					e["OE"] = 1e3;
					e["ordmasculine"] = 330;
					e["ae"] = 722;
					e["dotlessi"] = 278;
					e["lslash"] = 278;
					e["oslash"] = 500;
					e["oe"] = 722;
					e["germandbls"] = 556;
					e["Idieresis"] = 389;
					e["eacute"] = 444;
					e["abreve"] = 500;
					e["uhungarumlaut"] = 556;
					e["ecaron"] = 444;
					e["Ydieresis"] = 722;
					e["divide"] = 570;
					e["Yacute"] = 722;
					e["Acircumflex"] = 722;
					e["aacute"] = 500;
					e["Ucircumflex"] = 722;
					e["yacute"] = 500;
					e["scommaaccent"] = 389;
					e["ecircumflex"] = 444;
					e["Uring"] = 722;
					e["Udieresis"] = 722;
					e["aogonek"] = 500;
					e["Uacute"] = 722;
					e["uogonek"] = 556;
					e["Edieresis"] = 667;
					e["Dcroat"] = 722;
					e["commaaccent"] = 250;
					e["copyright"] = 747;
					e["Emacron"] = 667;
					e["ccaron"] = 444;
					e["aring"] = 500;
					e["Ncommaaccent"] = 722;
					e["lacute"] = 278;
					e["agrave"] = 500;
					e["Tcommaaccent"] = 667;
					e["Cacute"] = 722;
					e["atilde"] = 500;
					e["Edotaccent"] = 667;
					e["scaron"] = 389;
					e["scedilla"] = 389;
					e["iacute"] = 278;
					e["lozenge"] = 494;
					e["Rcaron"] = 722;
					e["Gcommaaccent"] = 778;
					e["ucircumflex"] = 556;
					e["acircumflex"] = 500;
					e["Amacron"] = 722;
					e["rcaron"] = 444;
					e["ccedilla"] = 444;
					e["Zdotaccent"] = 667;
					e["Thorn"] = 611;
					e["Omacron"] = 778;
					e["Racute"] = 722;
					e["Sacute"] = 556;
					e["dcaron"] = 672;
					e["Umacron"] = 722;
					e["uring"] = 556;
					e["threesuperior"] = 300;
					e["Ograve"] = 778;
					e["Agrave"] = 722;
					e["Abreve"] = 722;
					e["multiply"] = 570;
					e["uacute"] = 556;
					e["Tcaron"] = 667;
					e["partialdiff"] = 494;
					e["ydieresis"] = 500;
					e["Nacute"] = 722;
					e["icircumflex"] = 278;
					e["Ecircumflex"] = 667;
					e["adieresis"] = 500;
					e["edieresis"] = 444;
					e["cacute"] = 444;
					e["nacute"] = 556;
					e["umacron"] = 556;
					e["Ncaron"] = 722;
					e["Iacute"] = 389;
					e["plusminus"] = 570;
					e["brokenbar"] = 220;
					e["registered"] = 747;
					e["Gbreve"] = 778;
					e["Idotaccent"] = 389;
					e["summation"] = 600;
					e["Egrave"] = 667;
					e["racute"] = 444;
					e["omacron"] = 500;
					e["Zacute"] = 667;
					e["Zcaron"] = 667;
					e["greaterequal"] = 549;
					e["Eth"] = 722;
					e["Ccedilla"] = 722;
					e["lcommaaccent"] = 278;
					e["tcaron"] = 416;
					e["eogonek"] = 444;
					e["Uogonek"] = 722;
					e["Aacute"] = 722;
					e["Adieresis"] = 722;
					e["egrave"] = 444;
					e["zacute"] = 444;
					e["iogonek"] = 278;
					e["Oacute"] = 778;
					e["oacute"] = 500;
					e["amacron"] = 500;
					e["sacute"] = 389;
					e["idieresis"] = 278;
					e["Ocircumflex"] = 778;
					e["Ugrave"] = 722;
					e["Delta"] = 612;
					e["thorn"] = 556;
					e["twosuperior"] = 300;
					e["Odieresis"] = 778;
					e["mu"] = 556;
					e["igrave"] = 278;
					e["ohungarumlaut"] = 500;
					e["Eogonek"] = 667;
					e["dcroat"] = 556;
					e["threequarters"] = 750;
					e["Scedilla"] = 556;
					e["lcaron"] = 394;
					e["Kcommaaccent"] = 778;
					e["Lacute"] = 667;
					e["trademark"] = 1e3;
					e["edotaccent"] = 444;
					e["Igrave"] = 389;
					e["Imacron"] = 389;
					e["Lcaron"] = 667;
					e["onehalf"] = 750;
					e["lessequal"] = 549;
					e["ocircumflex"] = 500;
					e["ntilde"] = 556;
					e["Uhungarumlaut"] = 722;
					e["Eacute"] = 667;
					e["emacron"] = 444;
					e["gbreve"] = 500;
					e["onequarter"] = 750;
					e["Scaron"] = 556;
					e["Scommaaccent"] = 556;
					e["Ohungarumlaut"] = 778;
					e["degree"] = 400;
					e["ograve"] = 500;
					e["Ccaron"] = 722;
					e["ugrave"] = 556;
					e["radical"] = 549;
					e["Dcaron"] = 722;
					e["rcommaaccent"] = 444;
					e["Ntilde"] = 722;
					e["otilde"] = 500;
					e["Rcommaaccent"] = 722;
					e["Lcommaaccent"] = 667;
					e["Atilde"] = 722;
					e["Aogonek"] = 722;
					e["Aring"] = 722;
					e["Otilde"] = 778;
					e["zdotaccent"] = 444;
					e["Ecaron"] = 667;
					e["Iogonek"] = 389;
					e["kcommaaccent"] = 556;
					e["minus"] = 570;
					e["Icircumflex"] = 389;
					e["ncaron"] = 556;
					e["tcommaaccent"] = 333;
					e["logicalnot"] = 570;
					e["odieresis"] = 500;
					e["udieresis"] = 556;
					e["notequal"] = 549;
					e["gcommaaccent"] = 500;
					e["eth"] = 500;
					e["zcaron"] = 444;
					e["ncommaaccent"] = 556;
					e["onesuperior"] = 300;
					e["imacron"] = 278;
					e["Euro"] = 500
				});
				e["Times-BoldItalic"] = r(function (e) {
					e["space"] = 250;
					e["exclam"] = 389;
					e["quotedbl"] = 555;
					e["numbersign"] = 500;
					e["dollar"] = 500;
					e["percent"] = 833;
					e["ampersand"] = 778;
					e["quoteright"] = 333;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asterisk"] = 500;
					e["plus"] = 570;
					e["comma"] = 250;
					e["hyphen"] = 333;
					e["period"] = 250;
					e["slash"] = 278;
					e["zero"] = 500;
					e["one"] = 500;
					e["two"] = 500;
					e["three"] = 500;
					e["four"] = 500;
					e["five"] = 500;
					e["six"] = 500;
					e["seven"] = 500;
					e["eight"] = 500;
					e["nine"] = 500;
					e["colon"] = 333;
					e["semicolon"] = 333;
					e["less"] = 570;
					e["equal"] = 570;
					e["greater"] = 570;
					e["question"] = 500;
					e["at"] = 832;
					e["A"] = 667;
					e["B"] = 667;
					e["C"] = 667;
					e["D"] = 722;
					e["E"] = 667;
					e["F"] = 667;
					e["G"] = 722;
					e["H"] = 778;
					e["I"] = 389;
					e["J"] = 500;
					e["K"] = 667;
					e["L"] = 611;
					e["M"] = 889;
					e["N"] = 722;
					e["O"] = 722;
					e["P"] = 611;
					e["Q"] = 722;
					e["R"] = 667;
					e["S"] = 556;
					e["T"] = 611;
					e["U"] = 722;
					e["V"] = 667;
					e["W"] = 889;
					e["X"] = 667;
					e["Y"] = 611;
					e["Z"] = 611;
					e["bracketleft"] = 333;
					e["backslash"] = 278;
					e["bracketright"] = 333;
					e["asciicircum"] = 570;
					e["underscore"] = 500;
					e["quoteleft"] = 333;
					e["a"] = 500;
					e["b"] = 500;
					e["c"] = 444;
					e["d"] = 500;
					e["e"] = 444;
					e["f"] = 333;
					e["g"] = 500;
					e["h"] = 556;
					e["i"] = 278;
					e["j"] = 278;
					e["k"] = 500;
					e["l"] = 278;
					e["m"] = 778;
					e["n"] = 556;
					e["o"] = 500;
					e["p"] = 500;
					e["q"] = 500;
					e["r"] = 389;
					e["s"] = 389;
					e["t"] = 278;
					e["u"] = 556;
					e["v"] = 444;
					e["w"] = 667;
					e["x"] = 500;
					e["y"] = 444;
					e["z"] = 389;
					e["braceleft"] = 348;
					e["bar"] = 220;
					e["braceright"] = 348;
					e["asciitilde"] = 570;
					e["exclamdown"] = 389;
					e["cent"] = 500;
					e["sterling"] = 500;
					e["fraction"] = 167;
					e["yen"] = 500;
					e["florin"] = 500;
					e["section"] = 500;
					e["currency"] = 500;
					e["quotesingle"] = 278;
					e["quotedblleft"] = 500;
					e["guillemotleft"] = 500;
					e["guilsinglleft"] = 333;
					e["guilsinglright"] = 333;
					e["fi"] = 556;
					e["fl"] = 556;
					e["endash"] = 500;
					e["dagger"] = 500;
					e["daggerdbl"] = 500;
					e["periodcentered"] = 250;
					e["paragraph"] = 500;
					e["bullet"] = 350;
					e["quotesinglbase"] = 333;
					e["quotedblbase"] = 500;
					e["quotedblright"] = 500;
					e["guillemotright"] = 500;
					e["ellipsis"] = 1e3;
					e["perthousand"] = 1e3;
					e["questiondown"] = 500;
					e["grave"] = 333;
					e["acute"] = 333;
					e["circumflex"] = 333;
					e["tilde"] = 333;
					e["macron"] = 333;
					e["breve"] = 333;
					e["dotaccent"] = 333;
					e["dieresis"] = 333;
					e["ring"] = 333;
					e["cedilla"] = 333;
					e["hungarumlaut"] = 333;
					e["ogonek"] = 333;
					e["caron"] = 333;
					e["emdash"] = 1e3;
					e["AE"] = 944;
					e["ordfeminine"] = 266;
					e["Lslash"] = 611;
					e["Oslash"] = 722;
					e["OE"] = 944;
					e["ordmasculine"] = 300;
					e["ae"] = 722;
					e["dotlessi"] = 278;
					e["lslash"] = 278;
					e["oslash"] = 500;
					e["oe"] = 722;
					e["germandbls"] = 500;
					e["Idieresis"] = 389;
					e["eacute"] = 444;
					e["abreve"] = 500;
					e["uhungarumlaut"] = 556;
					e["ecaron"] = 444;
					e["Ydieresis"] = 611;
					e["divide"] = 570;
					e["Yacute"] = 611;
					e["Acircumflex"] = 667;
					e["aacute"] = 500;
					e["Ucircumflex"] = 722;
					e["yacute"] = 444;
					e["scommaaccent"] = 389;
					e["ecircumflex"] = 444;
					e["Uring"] = 722;
					e["Udieresis"] = 722;
					e["aogonek"] = 500;
					e["Uacute"] = 722;
					e["uogonek"] = 556;
					e["Edieresis"] = 667;
					e["Dcroat"] = 722;
					e["commaaccent"] = 250;
					e["copyright"] = 747;
					e["Emacron"] = 667;
					e["ccaron"] = 444;
					e["aring"] = 500;
					e["Ncommaaccent"] = 722;
					e["lacute"] = 278;
					e["agrave"] = 500;
					e["Tcommaaccent"] = 611;
					e["Cacute"] = 667;
					e["atilde"] = 500;
					e["Edotaccent"] = 667;
					e["scaron"] = 389;
					e["scedilla"] = 389;
					e["iacute"] = 278;
					e["lozenge"] = 494;
					e["Rcaron"] = 667;
					e["Gcommaaccent"] = 722;
					e["ucircumflex"] = 556;
					e["acircumflex"] = 500;
					e["Amacron"] = 667;
					e["rcaron"] = 389;
					e["ccedilla"] = 444;
					e["Zdotaccent"] = 611;
					e["Thorn"] = 611;
					e["Omacron"] = 722;
					e["Racute"] = 667;
					e["Sacute"] = 556;
					e["dcaron"] = 608;
					e["Umacron"] = 722;
					e["uring"] = 556;
					e["threesuperior"] = 300;
					e["Ograve"] = 722;
					e["Agrave"] = 667;
					e["Abreve"] = 667;
					e["multiply"] = 570;
					e["uacute"] = 556;
					e["Tcaron"] = 611;
					e["partialdiff"] = 494;
					e["ydieresis"] = 444;
					e["Nacute"] = 722;
					e["icircumflex"] = 278;
					e["Ecircumflex"] = 667;
					e["adieresis"] = 500;
					e["edieresis"] = 444;
					e["cacute"] = 444;
					e["nacute"] = 556;
					e["umacron"] = 556;
					e["Ncaron"] = 722;
					e["Iacute"] = 389;
					e["plusminus"] = 570;
					e["brokenbar"] = 220;
					e["registered"] = 747;
					e["Gbreve"] = 722;
					e["Idotaccent"] = 389;
					e["summation"] = 600;
					e["Egrave"] = 667;
					e["racute"] = 389;
					e["omacron"] = 500;
					e["Zacute"] = 611;
					e["Zcaron"] = 611;
					e["greaterequal"] = 549;
					e["Eth"] = 722;
					e["Ccedilla"] = 667;
					e["lcommaaccent"] = 278;
					e["tcaron"] = 366;
					e["eogonek"] = 444;
					e["Uogonek"] = 722;
					e["Aacute"] = 667;
					e["Adieresis"] = 667;
					e["egrave"] = 444;
					e["zacute"] = 389;
					e["iogonek"] = 278;
					e["Oacute"] = 722;
					e["oacute"] = 500;
					e["amacron"] = 500;
					e["sacute"] = 389;
					e["idieresis"] = 278;
					e["Ocircumflex"] = 722;
					e["Ugrave"] = 722;
					e["Delta"] = 612;
					e["thorn"] = 500;
					e["twosuperior"] = 300;
					e["Odieresis"] = 722;
					e["mu"] = 576;
					e["igrave"] = 278;
					e["ohungarumlaut"] = 500;
					e["Eogonek"] = 667;
					e["dcroat"] = 500;
					e["threequarters"] = 750;
					e["Scedilla"] = 556;
					e["lcaron"] = 382;
					e["Kcommaaccent"] = 667;
					e["Lacute"] = 611;
					e["trademark"] = 1e3;
					e["edotaccent"] = 444;
					e["Igrave"] = 389;
					e["Imacron"] = 389;
					e["Lcaron"] = 611;
					e["onehalf"] = 750;
					e["lessequal"] = 549;
					e["ocircumflex"] = 500;
					e["ntilde"] = 556;
					e["Uhungarumlaut"] = 722;
					e["Eacute"] = 667;
					e["emacron"] = 444;
					e["gbreve"] = 500;
					e["onequarter"] = 750;
					e["Scaron"] = 556;
					e["Scommaaccent"] = 556;
					e["Ohungarumlaut"] = 722;
					e["degree"] = 400;
					e["ograve"] = 500;
					e["Ccaron"] = 667;
					e["ugrave"] = 556;
					e["radical"] = 549;
					e["Dcaron"] = 722;
					e["rcommaaccent"] = 389;
					e["Ntilde"] = 722;
					e["otilde"] = 500;
					e["Rcommaaccent"] = 667;
					e["Lcommaaccent"] = 611;
					e["Atilde"] = 667;
					e["Aogonek"] = 667;
					e["Aring"] = 667;
					e["Otilde"] = 722;
					e["zdotaccent"] = 389;
					e["Ecaron"] = 667;
					e["Iogonek"] = 389;
					e["kcommaaccent"] = 500;
					e["minus"] = 606;
					e["Icircumflex"] = 389;
					e["ncaron"] = 556;
					e["tcommaaccent"] = 278;
					e["logicalnot"] = 606;
					e["odieresis"] = 500;
					e["udieresis"] = 556;
					e["notequal"] = 549;
					e["gcommaaccent"] = 500;
					e["eth"] = 500;
					e["zcaron"] = 389;
					e["ncommaaccent"] = 556;
					e["onesuperior"] = 300;
					e["imacron"] = 278;
					e["Euro"] = 500
				});
				e["Times-Italic"] = r(function (e) {
					e["space"] = 250;
					e["exclam"] = 333;
					e["quotedbl"] = 420;
					e["numbersign"] = 500;
					e["dollar"] = 500;
					e["percent"] = 833;
					e["ampersand"] = 778;
					e["quoteright"] = 333;
					e["parenleft"] = 333;
					e["parenright"] = 333;
					e["asterisk"] = 500;
					e["plus"] = 675;
					e["comma"] = 250;
					e["hyphen"] = 333;
					e["period"] = 250;
					e["slash"] = 278;
					e["zero"] = 500;
					e["one"] = 500;
					e["two"] = 500;
					e["three"] = 500;
					e["four"] = 500;
					e["five"] = 500;
					e["six"] = 500;
					e["seven"] = 500;
					e["eight"] = 500;
					e["nine"] = 500;
					e["colon"] = 333;
					e["semicolon"] = 333;
					e["less"] = 675;
					e["equal"] = 675;
					e["greater"] = 675;
					e["question"] = 500;
					e["at"] = 920;
					e["A"] = 611;
					e["B"] = 611;
					e["C"] = 667;
					e["D"] = 722;
					e["E"] = 611;
					e["F"] = 611;
					e["G"] = 722;
					e["H"] = 722;
					e["I"] = 333;
					e["J"] = 444;
					e["K"] = 667;
					e["L"] = 556;
					e["M"] = 833;
					e["N"] = 667;
					e["O"] = 722;
					e["P"] = 611;
					e["Q"] = 722;
					e["R"] = 611;
					e["S"] = 500;
					e["T"] = 556;
					e["U"] = 722;
					e["V"] = 611;
					e["W"] = 833;
					e["X"] = 611;
					e["Y"] = 556;
					e["Z"] = 556;
					e["bracketleft"] = 389;
					e["backslash"] = 278;
					e["bracketright"] = 389;
					e["asciicircum"] = 422;
					e["underscore"] = 500;
					e["quoteleft"] = 333;
					e["a"] = 500;
					e["b"] = 500;
					e["c"] = 444;
					e["d"] = 500;
					e["e"] = 444;
					e["f"] = 278;
					e["g"] = 500;
					e["h"] = 500;
					e["i"] = 278;
					e["j"] = 278;
					e["k"] = 444;
					e["l"] = 278;
					e["m"] = 722;
					e["n"] = 500;
					e["o"] = 500;
					e["p"] = 500;
					e["q"] = 500;
					e["r"] = 389;
					e["s"] = 389;
					e["t"] = 278;
					e["u"] = 500;
					e["v"] = 444;
					e["w"] = 667;
					e["x"] = 444;
					e["y"] = 444;
					e["z"] = 389;
					e["braceleft"] = 400;
					e["bar"] = 275;
					e["braceright"] = 400;
					e["asciitilde"] = 541;
					e["exclamdown"] = 389;
					e["cent"] = 500;
					e["sterling"] = 500;
					e["fraction"] = 167;
					e["yen"] = 500;
					e["florin"] = 500;
					e["section"] = 500;
					e["currency"] = 500;
					e["quotesingle"] = 214;
					e["quotedblleft"] = 556;
					e["guillemotleft"] = 500;
					e["guilsinglleft"] = 333;
					e["guilsinglright"] = 333;
					e["fi"] = 500;
					e["fl"] = 500;
					e["endash"] = 500;
					e["dagger"] = 500;
					e["daggerdbl"] = 500;
					e["periodcentered"] = 250;
					e["paragraph"] = 523;
					e["bullet"] = 350;
					e["quotesinglbase"] = 333;
					e["quotedblbase"] = 556;
					e["quotedblright"] = 556;
					e["guillemotright"] = 500;
					e["ellipsis"] = 889;
					e["perthousand"] = 1e3;
					e["questiondown"] = 500;
					e["grave"] = 333;
					e["acute"] = 333;
					e["circumflex"] = 333;
					e["tilde"] = 333;
					e["macron"] = 333;
					e["breve"] = 333;
					e["dotaccent"] = 333;
					e["dieresis"] = 333;
					e["ring"] = 333;
					e["cedilla"] = 333;
					e["hungarumlaut"] = 333;
					e["ogonek"] = 333;
					e["caron"] = 333;
					e["emdash"] = 889;
					e["AE"] = 889;
					e["ordfeminine"] = 276;
					e["Lslash"] = 556;
					e["Oslash"] = 722;
					e["OE"] = 944;
					e["ordmasculine"] = 310;
					e["ae"] = 667;
					e["dotlessi"] = 278;
					e["lslash"] = 278;
					e["oslash"] = 500;
					e["oe"] = 667;
					e["germandbls"] = 500;
					e["Idieresis"] = 333;
					e["eacute"] = 444;
					e["abreve"] = 500;
					e["uhungarumlaut"] = 500;
					e["ecaron"] = 444;
					e["Ydieresis"] = 556;
					e["divide"] = 675;
					e["Yacute"] = 556;
					e["Acircumflex"] = 611;
					e["aacute"] = 500;
					e["Ucircumflex"] = 722;
					e["yacute"] = 444;
					e["scommaaccent"] = 389;
					e["ecircumflex"] = 444;
					e["Uring"] = 722;
					e["Udieresis"] = 722;
					e["aogonek"] = 500;
					e["Uacute"] = 722;
					e["uogonek"] = 500;
					e["Edieresis"] = 611;
					e["Dcroat"] = 722;
					e["commaaccent"] = 250;
					e["copyright"] = 760;
					e["Emacron"] = 611;
					e["ccaron"] = 444;
					e["aring"] = 500;
					e["Ncommaaccent"] = 667;
					e["lacute"] = 278;
					e["agrave"] = 500;
					e["Tcommaaccent"] = 556;
					e["Cacute"] = 667;
					e["atilde"] = 500;
					e["Edotaccent"] = 611;
					e["scaron"] = 389;
					e["scedilla"] = 389;
					e["iacute"] = 278;
					e["lozenge"] = 471;
					e["Rcaron"] = 611;
					e["Gcommaaccent"] = 722;
					e["ucircumflex"] = 500;
					e["acircumflex"] = 500;
					e["Amacron"] = 611;
					e["rcaron"] = 389;
					e["ccedilla"] = 444;
					e["Zdotaccent"] = 556;
					e["Thorn"] = 611;
					e["Omacron"] = 722;
					e["Racute"] = 611;
					e["Sacute"] = 500;
					e["dcaron"] = 544;
					e["Umacron"] = 722;
					e["uring"] = 500;
					e["threesuperior"] = 300;
					e["Ograve"] = 722;
					e["Agrave"] = 611;
					e["Abreve"] = 611;
					e["multiply"] = 675;
					e["uacute"] = 500;
					e["Tcaron"] = 556;
					e["partialdiff"] = 476;
					e["ydieresis"] = 444;
					e["Nacute"] = 667;
					e["icircumflex"] = 278;
					e["Ecircumflex"] = 611;
					e["adieresis"] = 500;
					e["edieresis"] = 444;
					e["cacute"] = 444;
					e["nacute"] = 500;
					e["umacron"] = 500;
					e["Ncaron"] = 667;
					e["Iacute"] = 333;
					e["plusminus"] = 675;
					e["brokenbar"] = 275;
					e["registered"] = 760;
					e["Gbreve"] = 722;
					e["Idotaccent"] = 333;
					e["summation"] = 600;
					e["Egrave"] = 611;
					e["racute"] = 389;
					e["omacron"] = 500;
					e["Zacute"] = 556;
					e["Zcaron"] = 556;
					e["greaterequal"] = 549;
					e["Eth"] = 722;
					e["Ccedilla"] = 667;
					e["lcommaaccent"] = 278;
					e["tcaron"] = 300;
					e["eogonek"] = 444;
					e["Uogonek"] = 722;
					e["Aacute"] = 611;
					e["Adieresis"] = 611;
					e["egrave"] = 444;
					e["zacute"] = 389;
					e["iogonek"] = 278;
					e["Oacute"] = 722;
					e["oacute"] = 500;
					e["amacron"] = 500;
					e["sacute"] = 389;
					e["idieresis"] = 278;
					e["Ocircumflex"] = 722;
					e["Ugrave"] = 722;
					e["Delta"] = 612;
					e["thorn"] = 500;
					e["twosuperior"] = 300;
					e["Odieresis"] = 722;
					e["mu"] = 500;
					e["igrave"] = 278;
					e["ohungarumlaut"] = 500;
					e["Eogonek"] = 611;
					e["dcroat"] = 500;
					e["threequarters"] = 750;
					e["Scedilla"] = 500;
					e["lcaron"] = 300;
					e["Kcommaaccent"] = 667;
					e["Lacute"] = 556;
					e["trademark"] = 980;
					e["edotaccent"] = 444;
					e["Igrave"] = 333;
					e["Imacron"] = 333;
					e["Lcaron"] = 611;
					e["onehalf"] = 750;
					e["lessequal"] = 549;
					e["ocircumflex"] = 500;
					e["ntilde"] = 500;
					e["Uhungarumlaut"] = 722;
					e["Eacute"] = 611;
					e["emacron"] = 444;
					e["gbreve"] = 500;
					e["onequarter"] = 750;
					e["Scaron"] = 500;
					e["Scommaaccent"] = 500;
					e["Ohungarumlaut"] = 722;
					e["degree"] = 400;
					e["ograve"] = 500;
					e["Ccaron"] = 667;
					e["ugrave"] = 500;
					e["radical"] = 453;
					e["Dcaron"] = 722;
					e["rcommaaccent"] = 389;
					e["Ntilde"] = 667;
					e["otilde"] = 500;
					e["Rcommaaccent"] = 611;
					e["Lcommaaccent"] = 556;
					e["Atilde"] = 611;
					e["Aogonek"] = 611;
					e["Aring"] = 611;
					e["Otilde"] = 722;
					e["zdotaccent"] = 389;
					e["Ecaron"] = 611;
					e["Iogonek"] = 333;
					e["kcommaaccent"] = 444;
					e["minus"] = 675;
					e["Icircumflex"] = 333;
					e["ncaron"] = 500;
					e["tcommaaccent"] = 278;
					e["logicalnot"] = 675;
					e["odieresis"] = 500;
					e["udieresis"] = 500;
					e["notequal"] = 549;
					e["gcommaaccent"] = 500;
					e["eth"] = 500;
					e["zcaron"] = 389;
					e["ncommaaccent"] = 500;
					e["onesuperior"] = 300;
					e["imacron"] = 278;
					e["Euro"] = 500
				});
				e["ZapfDingbats"] = r(function (e) {
					e["space"] = 278;
					e["a1"] = 974;
					e["a2"] = 961;
					e["a202"] = 974;
					e["a3"] = 980;
					e["a4"] = 719;
					e["a5"] = 789;
					e["a119"] = 790;
					e["a118"] = 791;
					e["a117"] = 690;
					e["a11"] = 960;
					e["a12"] = 939;
					e["a13"] = 549;
					e["a14"] = 855;
					e["a15"] = 911;
					e["a16"] = 933;
					e["a105"] = 911;
					e["a17"] = 945;
					e["a18"] = 974;
					e["a19"] = 755;
					e["a20"] = 846;
					e["a21"] = 762;
					e["a22"] = 761;
					e["a23"] = 571;
					e["a24"] = 677;
					e["a25"] = 763;
					e["a26"] = 760;
					e["a27"] = 759;
					e["a28"] = 754;
					e["a6"] = 494;
					e["a7"] = 552;
					e["a8"] = 537;
					e["a9"] = 577;
					e["a10"] = 692;
					e["a29"] = 786;
					e["a30"] = 788;
					e["a31"] = 788;
					e["a32"] = 790;
					e["a33"] = 793;
					e["a34"] = 794;
					e["a35"] = 816;
					e["a36"] = 823;
					e["a37"] = 789;
					e["a38"] = 841;
					e["a39"] = 823;
					e["a40"] = 833;
					e["a41"] = 816;
					e["a42"] = 831;
					e["a43"] = 923;
					e["a44"] = 744;
					e["a45"] = 723;
					e["a46"] = 749;
					e["a47"] = 790;
					e["a48"] = 792;
					e["a49"] = 695;
					e["a50"] = 776;
					e["a51"] = 768;
					e["a52"] = 792;
					e["a53"] = 759;
					e["a54"] = 707;
					e["a55"] = 708;
					e["a56"] = 682;
					e["a57"] = 701;
					e["a58"] = 826;
					e["a59"] = 815;
					e["a60"] = 789;
					e["a61"] = 789;
					e["a62"] = 707;
					e["a63"] = 687;
					e["a64"] = 696;
					e["a65"] = 689;
					e["a66"] = 786;
					e["a67"] = 787;
					e["a68"] = 713;
					e["a69"] = 791;
					e["a70"] = 785;
					e["a71"] = 791;
					e["a72"] = 873;
					e["a73"] = 761;
					e["a74"] = 762;
					e["a203"] = 762;
					e["a75"] = 759;
					e["a204"] = 759;
					e["a76"] = 892;
					e["a77"] = 892;
					e["a78"] = 788;
					e["a79"] = 784;
					e["a81"] = 438;
					e["a82"] = 138;
					e["a83"] = 277;
					e["a84"] = 415;
					e["a97"] = 392;
					e["a98"] = 392;
					e["a99"] = 668;
					e["a100"] = 668;
					e["a89"] = 390;
					e["a90"] = 390;
					e["a93"] = 317;
					e["a94"] = 317;
					e["a91"] = 276;
					e["a92"] = 276;
					e["a205"] = 509;
					e["a85"] = 509;
					e["a206"] = 410;
					e["a86"] = 410;
					e["a87"] = 234;
					e["a88"] = 234;
					e["a95"] = 334;
					e["a96"] = 334;
					e["a101"] = 732;
					e["a102"] = 544;
					e["a103"] = 544;
					e["a104"] = 910;
					e["a106"] = 667;
					e["a107"] = 760;
					e["a108"] = 760;
					e["a112"] = 776;
					e["a111"] = 595;
					e["a110"] = 694;
					e["a109"] = 626;
					e["a120"] = 788;
					e["a121"] = 788;
					e["a122"] = 788;
					e["a123"] = 788;
					e["a124"] = 788;
					e["a125"] = 788;
					e["a126"] = 788;
					e["a127"] = 788;
					e["a128"] = 788;
					e["a129"] = 788;
					e["a130"] = 788;
					e["a131"] = 788;
					e["a132"] = 788;
					e["a133"] = 788;
					e["a134"] = 788;
					e["a135"] = 788;
					e["a136"] = 788;
					e["a137"] = 788;
					e["a138"] = 788;
					e["a139"] = 788;
					e["a140"] = 788;
					e["a141"] = 788;
					e["a142"] = 788;
					e["a143"] = 788;
					e["a144"] = 788;
					e["a145"] = 788;
					e["a146"] = 788;
					e["a147"] = 788;
					e["a148"] = 788;
					e["a149"] = 788;
					e["a150"] = 788;
					e["a151"] = 788;
					e["a152"] = 788;
					e["a153"] = 788;
					e["a154"] = 788;
					e["a155"] = 788;
					e["a156"] = 788;
					e["a157"] = 788;
					e["a158"] = 788;
					e["a159"] = 788;
					e["a160"] = 894;
					e["a161"] = 838;
					e["a163"] = 1016;
					e["a164"] = 458;
					e["a196"] = 748;
					e["a165"] = 924;
					e["a192"] = 748;
					e["a166"] = 918;
					e["a167"] = 927;
					e["a168"] = 928;
					e["a169"] = 928;
					e["a170"] = 834;
					e["a171"] = 873;
					e["a172"] = 828;
					e["a173"] = 924;
					e["a162"] = 924;
					e["a174"] = 917;
					e["a175"] = 930;
					e["a176"] = 931;
					e["a177"] = 463;
					e["a178"] = 883;
					e["a179"] = 836;
					e["a193"] = 836;
					e["a180"] = 867;
					e["a199"] = 867;
					e["a181"] = 696;
					e["a200"] = 696;
					e["a182"] = 874;
					e["a201"] = 874;
					e["a183"] = 760;
					e["a184"] = 946;
					e["a197"] = 771;
					e["a185"] = 865;
					e["a194"] = 771;
					e["a198"] = 888;
					e["a186"] = 967;
					e["a195"] = 888;
					e["a187"] = 831;
					e["a188"] = 873;
					e["a189"] = 927;
					e["a190"] = 970;
					e["a191"] = 918
				})
			});
			e.getMetrics = a
		});
		(function (e, t) {
			t(e.pdfjsCoreMurmurHash3 = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.Uint32ArrayView;
			var a = function e(t) {
				var a = 4294901760;
				var i = 65535;

				function n(e) {
					var t = 3285377520;
					this.h1 = e ? e & 4294967295 : t;
					this.h2 = e ? e & 4294967295 : t
				}
				var s = false;
				try {
					new Uint32Array(new Uint8Array(5).buffer, 0, 1)
				} catch (e) {
					s = true
				}
				n.prototype = {
					update: function e(t) {
						var n = s;
						var o;
						if (typeof t === "string") {
							var l = new Uint8Array(t.length * 2);
							var c = 0;
							for (o = 0; o < t.length; o++) {
								var h = t.charCodeAt(o);
								if (h <= 255) {
									l[c++] = h
								} else {
									l[c++] = h >>> 8;
									l[c++] = h & 255
								}
							}
						} else if (t instanceof Uint8Array) {
							l = t;
							c = l.length
						} else if (typeof t === "object" && "length" in t) {
							l = t;
							c = l.length;
							n = true
						} else {
							throw new Error("Wrong data format in MurmurHash3_64_update. " + "Input must be a string or array.")
						}
						var u = c >> 2;
						var f = c - u * 4;
						var d = n ? new r(l, u) : new Uint32Array(l.buffer, 0, u);
						var g = 0;
						var v = 0;
						var p = this.h1;
						var m = this.h2;
						var b = 3432918353;
						var y = 461845907;
						var k = b & i;
						var w = y & i;
						for (o = 0; o < u; o++) {
							if (o & 1) {
								g = d[o];
								g = g * b & a | g * k & i;
								g = g << 15 | g >>> 17;
								g = g * y & a | g * w & i;
								p ^= g;
								p = p << 13 | p >>> 19;
								p = p * 5 + 3864292196
							} else {
								v = d[o];
								v = v * b & a | v * k & i;
								v = v << 15 | v >>> 17;
								v = v * y & a | v * w & i;
								m ^= v;
								m = m << 13 | m >>> 19;
								m = m * 5 + 3864292196
							}
						}
						g = 0;
						switch (f) {
							case 3:
								g ^= l[u * 4 + 2] << 16;
							case 2:
								g ^= l[u * 4 + 1] << 8;
							case 1:
								g ^= l[u * 4];
								g = g * b & a | g * k & i;
								g = g << 15 | g >>> 17;
								g = g * y & a | g * w & i;
								if (u & 1) {
									p ^= g
								} else {
									m ^= g
								}
						}
						this.h1 = p;
						this.h2 = m;
						return this
					},
					hexdigest: function e() {
						var t = this.h1;
						var r = this.h2;
						t ^= r >>> 1;
						t = t * 3981806797 & a | t * 36045 & i;
						r = r * 4283543511 & a | ((r << 16 | t >>> 16) * 2950163797 & a) >>> 16;
						t ^= r >>> 1;
						t = t * 444984403 & a | t * 60499 & i;
						r = r * 3301882366 & a | ((r << 16 | t >>> 16) * 3120437893 & a) >>> 16;
						t ^= r >>> 1;
						for (var n = 0, s = [t, r], o = ""; n < s.length; n++) {
							var l = (s[n] >>> 0).toString(16);
							while (l.length < 8) {
								l = "0" + l
							}
							o += l
						}
						return o
					}
				};
				return n
			}();
			e.MurmurHash3_64 = a
		});
		(function (e, t) {
			t(e.pdfjsCorePrimitives = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.isArray;
			var a = function e() {
				function t(e) {
					this.name = e
				}
				t.prototype = {};
				var r = Object.create(null);
				t.get = function e(a) {
					var i = r[a];
					return i ? i : r[a] = new t(a)
				};
				return t
			}();
			var i = function e() {
				function t(e) {
					this.cmd = e
				}
				t.prototype = {};
				var r = Object.create(null);
				t.get = function e(a) {
					var i = r[a];
					return i ? i : r[a] = new t(a)
				};
				return t
			}();
			var n = function e() {
				var t = function e() {
					return t
				};

				function a(e) {
					this.map = Object.create(null);
					this.xref = e;
					this.objId = null;
					this.suppressEncryption = false;
					this.__nonSerializable__ = t
				}
				a.prototype = {
					assignXref: function e(t) {
						this.xref = t
					},
					get: function e(t, r, a) {
						var i;
						var n = this.xref,
							s = this.suppressEncryption;
						if (typeof (i = this.map[t]) !== "undefined" || t in this.map || typeof r === "undefined") {
							return n ? n.fetchIfRef(i, s) : i
						}
						if (typeof (i = this.map[r]) !== "undefined" || r in this.map || typeof a === "undefined") {
							return n ? n.fetchIfRef(i, s) : i
						}
						i = this.map[a] || null;
						return n ? n.fetchIfRef(i, s) : i
					},
					getAsync: function e(t, r, a) {
						var i;
						var n = this.xref,
							s = this.suppressEncryption;
						if (typeof (i = this.map[t]) !== "undefined" || t in this.map || typeof r === "undefined") {
							if (n) {
								return n.fetchIfRefAsync(i, s)
							}
							return Promise.resolve(i)
						}
						if (typeof (i = this.map[r]) !== "undefined" || r in this.map || typeof a === "undefined") {
							if (n) {
								return n.fetchIfRefAsync(i, s)
							}
							return Promise.resolve(i)
						}
						i = this.map[a] || null;
						if (n) {
							return n.fetchIfRefAsync(i, s)
						}
						return Promise.resolve(i)
					},
					getArray: function e(t, a, i) {
						var n = this.get(t, a, i);
						var s = this.xref,
							o = this.suppressEncryption;
						if (!r(n) || !s) {
							return n
						}
						n = n.slice();
						for (var l = 0, c = n.length; l < c; l++) {
							if (!f(n[l])) {
								continue
							}
							n[l] = s.fetch(n[l], o)
						}
						return n
					},
					getRaw: function e(t) {
						return this.map[t]
					},
					getKeys: function e() {
						return Object.keys(this.map)
					},
					set: function e(t, r) {
						this.map[t] = r
					},
					has: function e(t) {
						return t in this.map
					},
					forEach: function e(t) {
						for (var r in this.map) {
							t(r, this.get(r))
						}
					}
				};
				a.empty = new a(null);
				a.merge = function e(t, r) {
					var i = new a(t);
					for (var n = 0, s = r.length; n < s; n++) {
						var o = r[n];
						if (!u(o)) {
							continue
						}
						for (var l in o.map) {
							if (i.map[l]) {
								continue
							}
							i.map[l] = o.map[l]
						}
					}
					return i
				};
				return a
			}();
			var s = function e() {
				function t(e, t) {
					this.num = e;
					this.gen = t
				}
				t.prototype = {
					toString: function e() {
						var t = this.num + "R";
						if (this.gen !== 0) {
							t += this.gen
						}
						return t
					}
				};
				return t
			}();
			var o = function e() {
				function t() {
					this.dict = Object.create(null)
				}
				t.prototype = {
					has: function e(t) {
						return t.toString() in this.dict
					},
					put: function e(t) {
						this.dict[t.toString()] = true
					},
					remove: function e(t) {
						delete this.dict[t.toString()]
					}
				};
				return t
			}();
			var l = function e() {
				function t() {
					this.dict = Object.create(null)
				}
				t.prototype = {
					get: function e(t) {
						return this.dict[t.toString()]
					},
					has: function e(t) {
						return t.toString() in this.dict
					},
					put: function e(t, r) {
						this.dict[t.toString()] = r
					},
					putAlias: function e(t, r) {
						this.dict[t.toString()] = this.get(r)
					},
					forEach: function e(t, r) {
						for (var a in this.dict) {
							t.call(r, this.dict[a])
						}
					},
					clear: function e() {
						this.dict = Object.create(null)
					}
				};
				return t
			}();

			function c(e, t) {
				return e instanceof a && (t === undefined || e.name === t)
			}

			function h(e, t) {
				return e instanceof i && (t === undefined || e.cmd === t)
			}

			function u(e, t) {
				return e instanceof n && (t === undefined || c(e.get("Type"), t))
			}

			function f(e) {
				return e instanceof s
			}

			function d(e, t) {
				return e.num === t.num && e.gen === t.gen
			}

			function g(e) {
				return typeof e === "object" && e !== null && e.getBytes !== undefined
			}
			e.Cmd = i;
			e.Dict = n;
			e.Name = a;
			e.Ref = s;
			e.RefSet = o;
			e.RefSetCache = l;
			e.isCmd = h;
			e.isDict = u;
			e.isName = c;
			e.isRef = f;
			e.isRefsEqual = d;
			e.isStream = g
		});
		(function (e, t) {
			t(e.pdfjsCoreStandardFonts = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.getLookupTableFactory;
			var a = r(function (e) {
				e["ArialNarrow"] = "Helvetica";
				e["ArialNarrow-Bold"] = "Helvetica-Bold";
				e["ArialNarrow-BoldItalic"] = "Helvetica-BoldOblique";
				e["ArialNarrow-Italic"] = "Helvetica-Oblique";
				e["ArialBlack"] = "Helvetica";
				e["ArialBlack-Bold"] = "Helvetica-Bold";
				e["ArialBlack-BoldItalic"] = "Helvetica-BoldOblique";
				e["ArialBlack-Italic"] = "Helvetica-Oblique";
				e["Arial-Black"] = "Helvetica";
				e["Arial-Black-Bold"] = "Helvetica-Bold";
				e["Arial-Black-BoldItalic"] = "Helvetica-BoldOblique";
				e["Arial-Black-Italic"] = "Helvetica-Oblique";
				e["Arial"] = "Helvetica";
				e["Arial-Bold"] = "Helvetica-Bold";
				e["Arial-BoldItalic"] = "Helvetica-BoldOblique";
				e["Arial-Italic"] = "Helvetica-Oblique";
				e["Arial-BoldItalicMT"] = "Helvetica-BoldOblique";
				e["Arial-BoldMT"] = "Helvetica-Bold";
				e["Arial-ItalicMT"] = "Helvetica-Oblique";
				e["ArialMT"] = "Helvetica";
				e["Courier-Bold"] = "Courier-Bold";
				e["Courier-BoldItalic"] = "Courier-BoldOblique";
				e["Courier-Italic"] = "Courier-Oblique";
				e["CourierNew"] = "Courier";
				e["CourierNew-Bold"] = "Courier-Bold";
				e["CourierNew-BoldItalic"] = "Courier-BoldOblique";
				e["CourierNew-Italic"] = "Courier-Oblique";
				e["CourierNewPS-BoldItalicMT"] = "Courier-BoldOblique";
				e["CourierNewPS-BoldMT"] = "Courier-Bold";
				e["CourierNewPS-ItalicMT"] = "Courier-Oblique";
				e["CourierNewPSMT"] = "Courier";
				e["Helvetica"] = "Helvetica";
				e["Helvetica-Bold"] = "Helvetica-Bold";
				e["Helvetica-BoldItalic"] = "Helvetica-BoldOblique";
				e["Helvetica-BoldOblique"] = "Helvetica-BoldOblique";
				e["Helvetica-Italic"] = "Helvetica-Oblique";
				e["Helvetica-Oblique"] = "Helvetica-Oblique";
				e["Symbol-Bold"] = "Symbol";
				e["Symbol-BoldItalic"] = "Symbol";
				e["Symbol-Italic"] = "Symbol";
				e["TimesNewRoman"] = "Times-Roman";
				e["TimesNewRoman-Bold"] = "Times-Bold";
				e["TimesNewRoman-BoldItalic"] = "Times-BoldItalic";
				e["TimesNewRoman-Italic"] = "Times-Italic";
				e["TimesNewRomanPS"] = "Times-Roman";
				e["TimesNewRomanPS-Bold"] = "Times-Bold";
				e["TimesNewRomanPS-BoldItalic"] = "Times-BoldItalic";
				e["TimesNewRomanPS-BoldItalicMT"] = "Times-BoldItalic";
				e["TimesNewRomanPS-BoldMT"] = "Times-Bold";
				e["TimesNewRomanPS-Italic"] = "Times-Italic";
				e["TimesNewRomanPS-ItalicMT"] = "Times-Italic";
				e["TimesNewRomanPSMT"] = "Times-Roman";
				e["TimesNewRomanPSMT-Bold"] = "Times-Bold";
				e["TimesNewRomanPSMT-BoldItalic"] = "Times-BoldItalic";
				e["TimesNewRomanPSMT-Italic"] = "Times-Italic"
			});
			var i = r(function (e) {
				e["CenturyGothic"] = "Helvetica";
				e["CenturyGothic-Bold"] = "Helvetica-Bold";
				e["CenturyGothic-BoldItalic"] = "Helvetica-BoldOblique";
				e["CenturyGothic-Italic"] = "Helvetica-Oblique";
				e["ComicSansMS"] = "Comic Sans MS";
				e["ComicSansMS-Bold"] = "Comic Sans MS-Bold";
				e["ComicSansMS-BoldItalic"] = "Comic Sans MS-BoldItalic";
				e["ComicSansMS-Italic"] = "Comic Sans MS-Italic";
				e["LucidaConsole"] = "Courier";
				e["LucidaConsole-Bold"] = "Courier-Bold";
				e["LucidaConsole-BoldItalic"] = "Courier-BoldOblique";
				e["LucidaConsole-Italic"] = "Courier-Oblique";
				e["MS-Gothic"] = "MS Gothic";
				e["MS-Gothic-Bold"] = "MS Gothic-Bold";
				e["MS-Gothic-BoldItalic"] = "MS Gothic-BoldItalic";
				e["MS-Gothic-Italic"] = "MS Gothic-Italic";
				e["MS-Mincho"] = "MS Mincho";
				e["MS-Mincho-Bold"] = "MS Mincho-Bold";
				e["MS-Mincho-BoldItalic"] = "MS Mincho-BoldItalic";
				e["MS-Mincho-Italic"] = "MS Mincho-Italic";
				e["MS-PGothic"] = "MS PGothic";
				e["MS-PGothic-Bold"] = "MS PGothic-Bold";
				e["MS-PGothic-BoldItalic"] = "MS PGothic-BoldItalic";
				e["MS-PGothic-Italic"] = "MS PGothic-Italic";
				e["MS-PMincho"] = "MS PMincho";
				e["MS-PMincho-Bold"] = "MS PMincho-Bold";
				e["MS-PMincho-BoldItalic"] = "MS PMincho-BoldItalic";
				e["MS-PMincho-Italic"] = "MS PMincho-Italic";
				e["NuptialScript"] = "Times-Italic";
				e["Wingdings"] = "ZapfDingbats"
			});
			var n = r(function (e) {
				e["Adobe Jenson"] = true;
				e["Adobe Text"] = true;
				e["Albertus"] = true;
				e["Aldus"] = true;
				e["Alexandria"] = true;
				e["Algerian"] = true;
				e["American Typewriter"] = true;
				e["Antiqua"] = true;
				e["Apex"] = true;
				e["Arno"] = true;
				e["Aster"] = true;
				e["Aurora"] = true;
				e["Baskerville"] = true;
				e["Bell"] = true;
				e["Bembo"] = true;
				e["Bembo Schoolbook"] = true;
				e["Benguiat"] = true;
				e["Berkeley Old Style"] = true;
				e["Bernhard Modern"] = true;
				e["Berthold City"] = true;
				e["Bodoni"] = true;
				e["Bauer Bodoni"] = true;
				e["Book Antiqua"] = true;
				e["Bookman"] = true;
				e["Bordeaux Roman"] = true;
				e["Californian FB"] = true;
				e["Calisto"] = true;
				e["Calvert"] = true;
				e["Capitals"] = true;
				e["Cambria"] = true;
				e["Cartier"] = true;
				e["Caslon"] = true;
				e["Catull"] = true;
				e["Centaur"] = true;
				e["Century Old Style"] = true;
				e["Century Schoolbook"] = true;
				e["Chaparral"] = true;
				e["Charis SIL"] = true;
				e["Cheltenham"] = true;
				e["Cholla Slab"] = true;
				e["Clarendon"] = true;
				e["Clearface"] = true;
				e["Cochin"] = true;
				e["Colonna"] = true;
				e["Computer Modern"] = true;
				e["Concrete Roman"] = true;
				e["Constantia"] = true;
				e["Cooper Black"] = true;
				e["Corona"] = true;
				e["Ecotype"] = true;
				e["Egyptienne"] = true;
				e["Elephant"] = true;
				e["Excelsior"] = true;
				e["Fairfield"] = true;
				e["FF Scala"] = true;
				e["Folkard"] = true;
				e["Footlight"] = true;
				e["FreeSerif"] = true;
				e["Friz Quadrata"] = true;
				e["Garamond"] = true;
				e["Gentium"] = true;
				e["Georgia"] = true;
				e["Gloucester"] = true;
				e["Goudy Old Style"] = true;
				e["Goudy Schoolbook"] = true;
				e["Goudy Pro Font"] = true;
				e["Granjon"] = true;
				e["Guardian Egyptian"] = true;
				e["Heather"] = true;
				e["Hercules"] = true;
				e["High Tower Text"] = true;
				e["Hiroshige"] = true;
				e["Hoefler Text"] = true;
				e["Humana Serif"] = true;
				e["Imprint"] = true;
				e["Ionic No. 5"] = true;
				e["Janson"] = true;
				e["Joanna"] = true;
				e["Korinna"] = true;
				e["Lexicon"] = true;
				e["Liberation Serif"] = true;
				e["Linux Libertine"] = true;
				e["Literaturnaya"] = true;
				e["Lucida"] = true;
				e["Lucida Bright"] = true;
				e["Melior"] = true;
				e["Memphis"] = true;
				e["Miller"] = true;
				e["Minion"] = true;
				e["Modern"] = true;
				e["Mona Lisa"] = true;
				e["Mrs Eaves"] = true;
				e["MS Serif"] = true;
				e["Museo Slab"] = true;
				e["New York"] = true;
				e["Nimbus Roman"] = true;
				e["NPS Rawlinson Roadway"] = true;
				e["NuptialScript"] = true;
				e["Palatino"] = true;
				e["Perpetua"] = true;
				e["Plantin"] = true;
				e["Plantin Schoolbook"] = true;
				e["Playbill"] = true;
				e["Poor Richard"] = true;
				e["Rawlinson Roadway"] = true;
				e["Renault"] = true;
				e["Requiem"] = true;
				e["Rockwell"] = true;
				e["Roman"] = true;
				e["Rotis Serif"] = true;
				e["Sabon"] = true;
				e["Scala"] = true;
				e["Seagull"] = true;
				e["Sistina"] = true;
				e["Souvenir"] = true;
				e["STIX"] = true;
				e["Stone Informal"] = true;
				e["Stone Serif"] = true;
				e["Sylfaen"] = true;
				e["Times"] = true;
				e["Trajan"] = true;
				e["Trinité"] = true;
				e["Trump Mediaeval"] = true;
				e["Utopia"] = true;
				e["Vale Type"] = true;
				e["Bitstream Vera"] = true;
				e["Vera Serif"] = true;
				e["Versailles"] = true;
				e["Wanted"] = true;
				e["Weiss"] = true;
				e["Wide Latin"] = true;
				e["Windsor"] = true;
				e["XITS"] = true
			});
			var s = r(function (e) {
				e["Dingbats"] = true;
				e["Symbol"] = true;
				e["ZapfDingbats"] = true
			});
			var o = r(function (e) {
				e[2] = 10;
				e[3] = 32;
				e[4] = 33;
				e[5] = 34;
				e[6] = 35;
				e[7] = 36;
				e[8] = 37;
				e[9] = 38;
				e[10] = 39;
				e[11] = 40;
				e[12] = 41;
				e[13] = 42;
				e[14] = 43;
				e[15] = 44;
				e[16] = 45;
				e[17] = 46;
				e[18] = 47;
				e[19] = 48;
				e[20] = 49;
				e[21] = 50;
				e[22] = 51;
				e[23] = 52;
				e[24] = 53;
				e[25] = 54;
				e[26] = 55;
				e[27] = 56;
				e[28] = 57;
				e[29] = 58;
				e[30] = 894;
				e[31] = 60;
				e[32] = 61;
				e[33] = 62;
				e[34] = 63;
				e[35] = 64;
				e[36] = 65;
				e[37] = 66;
				e[38] = 67;
				e[39] = 68;
				e[40] = 69;
				e[41] = 70;
				e[42] = 71;
				e[43] = 72;
				e[44] = 73;
				e[45] = 74;
				e[46] = 75;
				e[47] = 76;
				e[48] = 77;
				e[49] = 78;
				e[50] = 79;
				e[51] = 80;
				e[52] = 81;
				e[53] = 82;
				e[54] = 83;
				e[55] = 84;
				e[56] = 85;
				e[57] = 86;
				e[58] = 87;
				e[59] = 88;
				e[60] = 89;
				e[61] = 90;
				e[62] = 91;
				e[63] = 92;
				e[64] = 93;
				e[65] = 94;
				e[66] = 95;
				e[67] = 96;
				e[68] = 97;
				e[69] = 98;
				e[70] = 99;
				e[71] = 100;
				e[72] = 101;
				e[73] = 102;
				e[74] = 103;
				e[75] = 104;
				e[76] = 105;
				e[77] = 106;
				e[78] = 107;
				e[79] = 108;
				e[80] = 109;
				e[81] = 110;
				e[82] = 111;
				e[83] = 112;
				e[84] = 113;
				e[85] = 114;
				e[86] = 115;
				e[87] = 116;
				e[88] = 117;
				e[89] = 118;
				e[90] = 119;
				e[91] = 120;
				e[92] = 121;
				e[93] = 122;
				e[94] = 123;
				e[95] = 124;
				e[96] = 125;
				e[97] = 126;
				e[98] = 196;
				e[99] = 197;
				e[100] = 199;
				e[101] = 201;
				e[102] = 209;
				e[103] = 214;
				e[104] = 220;
				e[105] = 225;
				e[106] = 224;
				e[107] = 226;
				e[108] = 228;
				e[109] = 227;
				e[110] = 229;
				e[111] = 231;
				e[112] = 233;
				e[113] = 232;
				e[114] = 234;
				e[115] = 235;
				e[116] = 237;
				e[117] = 236;
				e[118] = 238;
				e[119] = 239;
				e[120] = 241;
				e[121] = 243;
				e[122] = 242;
				e[123] = 244;
				e[124] = 246;
				e[125] = 245;
				e[126] = 250;
				e[127] = 249;
				e[128] = 251;
				e[129] = 252;
				e[130] = 8224;
				e[131] = 176;
				e[132] = 162;
				e[133] = 163;
				e[134] = 167;
				e[135] = 8226;
				e[136] = 182;
				e[137] = 223;
				e[138] = 174;
				e[139] = 169;
				e[140] = 8482;
				e[141] = 180;
				e[142] = 168;
				e[143] = 8800;
				e[144] = 198;
				e[145] = 216;
				e[146] = 8734;
				e[147] = 177;
				e[148] = 8804;
				e[149] = 8805;
				e[150] = 165;
				e[151] = 181;
				e[152] = 8706;
				e[153] = 8721;
				e[154] = 8719;
				e[156] = 8747;
				e[157] = 170;
				e[158] = 186;
				e[159] = 8486;
				e[160] = 230;
				e[161] = 248;
				e[162] = 191;
				e[163] = 161;
				e[164] = 172;
				e[165] = 8730;
				e[166] = 402;
				e[167] = 8776;
				e[168] = 8710;
				e[169] = 171;
				e[170] = 187;
				e[171] = 8230;
				e[210] = 218;
				e[223] = 711;
				e[224] = 321;
				e[225] = 322;
				e[227] = 353;
				e[229] = 382;
				e[234] = 253;
				e[252] = 263;
				e[253] = 268;
				e[254] = 269;
				e[258] = 258;
				e[260] = 260;
				e[261] = 261;
				e[265] = 280;
				e[266] = 281;
				e[268] = 283;
				e[269] = 313;
				e[275] = 323;
				e[276] = 324;
				e[278] = 328;
				e[284] = 345;
				e[285] = 346;
				e[286] = 347;
				e[292] = 367;
				e[295] = 377;
				e[296] = 378;
				e[298] = 380;
				e[305] = 963;
				e[306] = 964;
				e[307] = 966;
				e[308] = 8215;
				e[309] = 8252;
				e[310] = 8319;
				e[311] = 8359;
				e[312] = 8592;
				e[313] = 8593;
				e[337] = 9552;
				e[493] = 1039;
				e[494] = 1040;
				e[705] = 1524;
				e[706] = 8362;
				e[710] = 64288;
				e[711] = 64298;
				e[759] = 1617;
				e[761] = 1776;
				e[763] = 1778;
				e[775] = 1652;
				e[777] = 1764;
				e[778] = 1780;
				e[779] = 1781;
				e[780] = 1782;
				e[782] = 771;
				e[783] = 64726;
				e[786] = 8363;
				e[788] = 8532;
				e[790] = 768;
				e[791] = 769;
				e[792] = 768;
				e[795] = 803;
				e[797] = 64336;
				e[798] = 64337;
				e[799] = 64342;
				e[800] = 64343;
				e[801] = 64344;
				e[802] = 64345;
				e[803] = 64362;
				e[804] = 64363;
				e[805] = 64364;
				e[2424] = 7821;
				e[2425] = 7822;
				e[2426] = 7823;
				e[2427] = 7824;
				e[2428] = 7825;
				e[2429] = 7826;
				e[2430] = 7827;
				e[2433] = 7682;
				e[2678] = 8045;
				e[2679] = 8046;
				e[2830] = 1552;
				e[2838] = 686;
				e[2840] = 751;
				e[2842] = 753;
				e[2843] = 754;
				e[2844] = 755;
				e[2846] = 757;
				e[2856] = 767;
				e[2857] = 848;
				e[2858] = 849;
				e[2862] = 853;
				e[2863] = 854;
				e[2864] = 855;
				e[2865] = 861;
				e[2866] = 862;
				e[2906] = 7460;
				e[2908] = 7462;
				e[2909] = 7463;
				e[2910] = 7464;
				e[2912] = 7466;
				e[2913] = 7467;
				e[2914] = 7468;
				e[2916] = 7470;
				e[2917] = 7471;
				e[2918] = 7472;
				e[2920] = 7474;
				e[2921] = 7475;
				e[2922] = 7476;
				e[2924] = 7478;
				e[2925] = 7479;
				e[2926] = 7480;
				e[2928] = 7482;
				e[2929] = 7483;
				e[2930] = 7484;
				e[2932] = 7486;
				e[2933] = 7487;
				e[2934] = 7488;
				e[2936] = 7490;
				e[2937] = 7491;
				e[2938] = 7492;
				e[2940] = 7494;
				e[2941] = 7495;
				e[2942] = 7496;
				e[2944] = 7498;
				e[2946] = 7500;
				e[2948] = 7502;
				e[2950] = 7504;
				e[2951] = 7505;
				e[2952] = 7506;
				e[2954] = 7508;
				e[2955] = 7509;
				e[2956] = 7510;
				e[2958] = 7512;
				e[2959] = 7513;
				e[2960] = 7514;
				e[2962] = 7516;
				e[2963] = 7517;
				e[2964] = 7518;
				e[2966] = 7520;
				e[2967] = 7521;
				e[2968] = 7522;
				e[2970] = 7524;
				e[2971] = 7525;
				e[2972] = 7526;
				e[2974] = 7528;
				e[2975] = 7529;
				e[2976] = 7530;
				e[2978] = 1537;
				e[2979] = 1538;
				e[2980] = 1539;
				e[2982] = 1549;
				e[2983] = 1551;
				e[2984] = 1552;
				e[2986] = 1554;
				e[2987] = 1555;
				e[2988] = 1556;
				e[2990] = 1623;
				e[2991] = 1624;
				e[2995] = 1775;
				e[2999] = 1791;
				e[3002] = 64290;
				e[3003] = 64291;
				e[3004] = 64292;
				e[3006] = 64294;
				e[3007] = 64295;
				e[3008] = 64296;
				e[3011] = 1900;
				e[3014] = 8223;
				e[3015] = 8244;
				e[3017] = 7532;
				e[3018] = 7533;
				e[3019] = 7534;
				e[3075] = 7590;
				e[3076] = 7591;
				e[3079] = 7594;
				e[3080] = 7595;
				e[3083] = 7598;
				e[3084] = 7599;
				e[3087] = 7602;
				e[3088] = 7603;
				e[3091] = 7606;
				e[3092] = 7607;
				e[3095] = 7610;
				e[3096] = 7611;
				e[3099] = 7614;
				e[3100] = 7615;
				e[3103] = 7618;
				e[3104] = 7619;
				e[3107] = 8337;
				e[3108] = 8338;
				e[3116] = 1884;
				e[3119] = 1885;
				e[3120] = 1885;
				e[3123] = 1886;
				e[3124] = 1886;
				e[3127] = 1887;
				e[3128] = 1887;
				e[3131] = 1888;
				e[3132] = 1888;
				e[3135] = 1889;
				e[3136] = 1889;
				e[3139] = 1890;
				e[3140] = 1890;
				e[3143] = 1891;
				e[3144] = 1891;
				e[3147] = 1892;
				e[3148] = 1892;
				e[3153] = 580;
				e[3154] = 581;
				e[3157] = 584;
				e[3158] = 585;
				e[3161] = 588;
				e[3162] = 589;
				e[3165] = 891;
				e[3166] = 892;
				e[3169] = 1274;
				e[3170] = 1275;
				e[3173] = 1278;
				e[3174] = 1279;
				e[3181] = 7622;
				e[3182] = 7623;
				e[3282] = 11799;
				e[3316] = 578;
				e[3379] = 42785;
				e[3393] = 1159;
				e[3416] = 8377
			});
			var l = r(function (e) {
				e[227] = 322;
				e[264] = 261;
				e[291] = 346
			});
			e.getStdFontMap = a;
			e.getNonStdFontMap = i;
			e.getSerifFonts = n;
			e.getSymbolsFonts = s;
			e.getGlyphMapForStandardFonts = o;
			e.getSupplementalGlyphMapForArialBlack = l
		});
		(function (e, t) {
			t(e.pdfjsCoreUnicode = {}, e.pdfjsSharedUtil)
		})(this, function (e, t) {
			var r = t.getLookupTableFactory;
			var a = r(function (e) {
				e[63721] = 169;
				e[63193] = 169;
				e[63720] = 174;
				e[63194] = 174;
				e[63722] = 8482;
				e[63195] = 8482;
				e[63729] = 9127;
				e[63730] = 9128;
				e[63731] = 9129;
				e[63740] = 9131;
				e[63741] = 9132;
				e[63742] = 9133;
				e[63726] = 9121;
				e[63727] = 9122;
				e[63728] = 9123;
				e[63737] = 9124;
				e[63738] = 9125;
				e[63739] = 9126;
				e[63723] = 9115;
				e[63724] = 9116;
				e[63725] = 9117;
				e[63734] = 9118;
				e[63735] = 9119;
				e[63736] = 9120
			});

			function i(e) {
				if (e >= 65520 && e <= 65535) {
					return 0
				} else if (e >= 62976 && e <= 63743) {
					return a()[e] || e
				}
				return e
			}

			function n(e, t) {
				var r = t[e];
				if (r !== undefined) {
					return r
				}
				if (!e) {
					return -1
				}
				if (e[0] === "u") {
					var a = e.length,
						i;
					if (a === 7 && e[1] === "n" && e[2] === "i") {
						i = e.substr(3)
					} else if (a >= 5 && a <= 7) {
						i = e.substr(1)
					} else {
						return -1
					}
					if (i === i.toUpperCase()) {
						r = parseInt(i, 16);
						if (r >= 0) {
							return r
						}
					}
				}
				return -1
			}
			var s = [{
				begin: 0,
				end: 127
			}, {
				begin: 128,
				end: 255
			}, {
				begin: 256,
				end: 383
			}, {
				begin: 384,
				end: 591
			}, {
				begin: 592,
				end: 687
			}, {
				begin: 688,
				end: 767
			}, {
				begin: 768,
				end: 879
			}, {
				begin: 880,
				end: 1023
			}, {
				begin: 11392,
				end: 11519
			}, {
				begin: 1024,
				end: 1279
			}, {
				begin: 1328,
				end: 1423
			}, {
				begin: 1424,
				end: 1535
			}, {
				begin: 42240,
				end: 42559
			}, {
				begin: 1536,
				end: 1791
			}, {
				begin: 1984,
				end: 2047
			}, {
				begin: 2304,
				end: 2431
			}, {
				begin: 2432,
				end: 2559
			}, {
				begin: 2560,
				end: 2687
			}, {
				begin: 2688,
				end: 2815
			}, {
				begin: 2816,
				end: 2943
			}, {
				begin: 2944,
				end: 3071
			}, {
				begin: 3072,
				end: 3199
			}, {
				begin: 3200,
				end: 3327
			}, {
				begin: 3328,
				end: 3455
			}, {
				begin: 3584,
				end: 3711
			}, {
				begin: 3712,
				end: 3839
			}, {
				begin: 4256,
				end: 4351
			}, {
				begin: 6912,
				end: 7039
			}, {
				begin: 4352,
				end: 4607
			}, {
				begin: 7680,
				end: 7935
			}, {
				begin: 7936,
				end: 8191
			}, {
				begin: 8192,
				end: 8303
			}, {
				begin: 8304,
				end: 8351
			}, {
				begin: 8352,
				end: 8399
			}, {
				begin: 8400,
				end: 8447
			}, {
				begin: 8448,
				end: 8527
			}, {
				begin: 8528,
				end: 8591
			}, {
				begin: 8592,
				end: 8703
			}, {
				begin: 8704,
				end: 8959
			}, {
				begin: 8960,
				end: 9215
			}, {
				begin: 9216,
				end: 9279
			}, {
				begin: 9280,
				end: 9311
			}, {
				begin: 9312,
				end: 9471
			}, {
				begin: 9472,
				end: 9599
			}, {
				begin: 9600,
				end: 9631
			}, {
				begin: 9632,
				end: 9727
			}, {
				begin: 9728,
				end: 9983
			}, {
				begin: 9984,
				end: 10175
			}, {
				begin: 12288,
				end: 12351
			}, {
				begin: 12352,
				end: 12447
			}, {
				begin: 12448,
				end: 12543
			}, {
				begin: 12544,
				end: 12591
			}, {
				begin: 12592,
				end: 12687
			}, {
				begin: 43072,
				end: 43135
			}, {
				begin: 12800,
				end: 13055
			}, {
				begin: 13056,
				end: 13311
			}, {
				begin: 44032,
				end: 55215
			}, {
				begin: 55296,
				end: 57343
			}, {
				begin: 67840,
				end: 67871
			}, {
				begin: 19968,
				end: 40959
			}, {
				begin: 57344,
				end: 63743
			}, {
				begin: 12736,
				end: 12783
			}, {
				begin: 64256,
				end: 64335
			}, {
				begin: 64336,
				end: 65023
			}, {
				begin: 65056,
				end: 65071
			}, {
				begin: 65040,
				end: 65055
			}, {
				begin: 65104,
				end: 65135
			}, {
				begin: 65136,
				end: 65279
			}, {
				begin: 65280,
				end: 65519
			}, {
				begin: 65520,
				end: 65535
			}, {
				begin: 3840,
				end: 4095
			}, {
				begin: 1792,
				end: 1871
			}, {
				begin: 1920,
				end: 1983
			}, {
				begin: 3456,
				end: 3583
			}, {
				begin: 4096,
				end: 4255
			}, {
				begin: 4608,
				end: 4991
			}, {
				begin: 5024,
				end: 5119
			}, {
				begin: 5120,
				end: 5759
			}, {
				begin: 5760,
				end: 5791
			}, {
				begin: 5792,
				end: 5887
			}, {
				begin: 6016,
				end: 6143
			}, {
				begin: 6144,
				end: 6319
			}, {
				begin: 10240,
				end: 10495
			}, {
				begin: 40960,
				end: 42127
			}, {
				begin: 5888,
				end: 5919
			}, {
				begin: 66304,
				end: 66351
			}, {
				begin: 66352,
				end: 66383
			}, {
				begin: 66560,
				end: 66639
			}, {
				begin: 118784,
				end: 119039
			}, {
				begin: 119808,
				end: 120831
			}, {
				begin: 1044480,
				end: 1048573
			}, {
				begin: 65024,
				end: 65039
			}, {
				begin: 917504,
				end: 917631
			}, {
				begin: 6400,
				end: 6479
			}, {
				begin: 6480,
				end: 6527
			}, {
				begin: 6528,
				end: 6623
			}, {
				begin: 6656,
				end: 6687
			}, {
				begin: 11264,
				end: 11359
			}, {
				begin: 11568,
				end: 11647
			}, {
				begin: 19904,
				end: 19967
			}, {
				begin: 43008,
				end: 43055
			}, {
				begin: 65536,
				end: 65663
			}, {
				begin: 65856,
				end: 65935
			}, {
				begin: 66432,
				end: 66463
			}, {
				begin: 66464,
				end: 66527
			}, {
				begin: 66640,
				end: 66687
			}, {
				begin: 66688,
				end: 66735
			}, {
				begin: 67584,
				end: 67647
			}, {
				begin: 68096,
				end: 68191
			}, {
				begin: 119552,
				end: 119647
			}, {
				begin: 73728,
				end: 74751
			}, {
				begin: 119648,
				end: 119679
			}, {
				begin: 7040,
				end: 7103
			}, {
				begin: 7168,
				end: 7247
			}, {
				begin: 7248,
				end: 7295
			}, {
				begin: 43136,
				end: 43231
			}, {
				begin: 43264,
				end: 43311
			}, {
				begin: 43312,
				end: 43359
			}, {
				begin: 43520,
				end: 43615
			}, {
				begin: 65936,
				end: 65999
			}, {
				begin: 66e3,
				end: 66047
			}, {
				begin: 66208,
				end: 66271
			}, {
				begin: 127024,
				end: 127135
			}];

			function o(e) {
				for (var t = 0, r = s.length; t < r; t++) {
					var a = s[t];
					if (e >= a.begin && e < a.end) {
						return t
					}
				}
				return -1
			}

			function l(e) {
				var t = s[13];
				if (e >= t.begin && e < t.end) {
					return true
				}
				t = s[11];
				if (e >= t.begin && e < t.end) {
					return true
				}
				return false
			}
			var c = r(function (e) {
				e["¨"] = " ̈";
				e["¯"] = " ̄";
				e["´"] = " ́";
				e["µ"] = "μ";
				e["¸"] = " ̧";
				e["Ĳ"] = "IJ";
				e["ĳ"] = "ij";
				e["Ŀ"] = "L·";
				e["ŀ"] = "l·";
				e["ŉ"] = "ʼn";
				e["ſ"] = "s";
				e["Ǆ"] = "DŽ";
				e["ǅ"] = "Dž";
				e["ǆ"] = "dž";
				e["Ǉ"] = "LJ";
				e["ǈ"] = "Lj";
				e["ǉ"] = "lj";
				e["Ǌ"] = "NJ";
				e["ǋ"] = "Nj";
				e["ǌ"] = "nj";
				e["Ǳ"] = "DZ";
				e["ǲ"] = "Dz";
				e["ǳ"] = "dz";
				e["˘"] = " ̆";
				e["˙"] = " ̇";
				e["˚"] = " ̊";
				e["˛"] = " ̨";
				e["˜"] = " ̃";
				e["˝"] = " ̋";
				e["ͺ"] = " ͅ";
				e["΄"] = " ́";
				e["ϐ"] = "β";
				e["ϑ"] = "θ";
				e["ϒ"] = "Υ";
				e["ϕ"] = "φ";
				e["ϖ"] = "π";
				e["ϰ"] = "κ";
				e["ϱ"] = "ρ";
				e["ϲ"] = "ς";
				e["ϴ"] = "Θ";
				e["ϵ"] = "ε";
				e["Ϲ"] = "Σ";
				e["և"] = "եւ";
				e["ٵ"] = "اٴ";
				e["ٶ"] = "وٴ";
				e["ٷ"] = "ۇٴ";
				e["ٸ"] = "يٴ";
				e["ำ"] = "ํา";
				e["ຳ"] = "ໍາ";
				e["ໜ"] = "ຫນ";
				e["ໝ"] = "ຫມ";
				e["ཷ"] = "ྲཱྀ";
				e["ཹ"] = "ླཱྀ";
				e["ẚ"] = "aʾ";
				e["᾽"] = " ̓";
				e["᾿"] = " ̓";
				e["῀"] = " ͂";
				e["῾"] = " ̔";
				e[" "] = " ";
				e[" "] = " ";
				e[" "] = " ";
				e[" "] = " ";
				e[" "] = " ";
				e[" "] = " ";
				e[" "] = " ";
				e[" "] = " ";
				e["‗"] = " ̳";
				e["․"] = ".";
				e["‥"] = "..";
				e["…"] = "...";
				e["″"] = "′′";
				e["‴"] = "′′′";
				e["‶"] = "‵‵";
				e["‷"] = "‵‵‵";
				e["‼"] = "!!";
				e["‾"] = " ̅";
				e["⁇"] = "??";
				e["⁈"] = "?!";
				e["⁉"] = "!?";
				e["⁗"] = "′′′′";
				e[" "] = " ";
				e["₨"] = "Rs";
				e["℀"] = "a/c";
				e["℁"] = "a/s";
				e["℃"] = "°C";
				e["℅"] = "c/o";
				e["℆"] = "c/u";
				e["ℇ"] = "Ɛ";
				e["℉"] = "°F";
				e["№"] = "No";
				e["℡"] = "TEL";
				e["ℵ"] = "א";
				e["ℶ"] = "ב";
				e["ℷ"] = "ג";
				e["ℸ"] = "ד";
				e["℻"] = "FAX";
				e["Ⅰ"] = "I";
				e["Ⅱ"] = "II";
				e["Ⅲ"] = "III";
				e["Ⅳ"] = "IV";
				e["Ⅴ"] = "V";
				e["Ⅵ"] = "VI";
				e["Ⅶ"] = "VII";
				e["Ⅷ"] = "VIII";
				e["Ⅸ"] = "IX";
				e["Ⅹ"] = "X";
				e["Ⅺ"] = "XI";
				e["Ⅻ"] = "XII";
				e["Ⅼ"] = "L";
				e["Ⅽ"] = "C";
				e["Ⅾ"] = "D";
				e["Ⅿ"] = "M";
				e["ⅰ"] = "i";
				e["ⅱ"] = "ii";
				e["ⅲ"] = "iii";
				e["ⅳ"] = "iv";
				e["ⅴ"] = "v";
				e["ⅵ"] = "vi";
				e["ⅶ"] = "vii";
				e["ⅷ"] = "viii";
				e["ⅸ"] = "ix";
				e["ⅹ"] = "x";
				e["ⅺ"] = "xi";
				e["ⅻ"] = "xii";
				e["ⅼ"] = "l";
				e["ⅽ"] = "c";
				e["ⅾ"] = "d";
				e["ⅿ"] = "m";
				e["∬"] = "∫∫";
				e["∭"] = "∫∫∫";
				e["∯"] = "∮∮";
				e["∰"] = "∮∮∮";
				e["⑴"] = "(1)";
				e["⑵"] = "(2)";
				e["⑶"] = "(3)";
				e["⑷"] = "(4)";
				e["⑸"] = "(5)";
				e["⑹"] = "(6)";
				e["⑺"] = "(7)";
				e["⑻"] = "(8)";
				e["⑼"] = "(9)";
				e["⑽"] = "(10)";
				e["⑾"] = "(11)";
				e["⑿"] = "(12)";
				e["⒀"] = "(13)";
				e["⒁"] = "(14)";
				e["⒂"] = "(15)";
				e["⒃"] = "(16)";
				e["⒄"] = "(17)";
				e["⒅"] = "(18)";
				e["⒆"] = "(19)";
				e["⒇"] = "(20)";
				e["⒈"] = "1.";
				e["⒉"] = "2.";
				e["⒊"] = "3.";
				e["⒋"] = "4.";
				e["⒌"] = "5.";
				e["⒍"] = "6.";
				e["⒎"] = "7.";
				e["⒏"] = "8.";
				e["⒐"] = "9.";
				e["⒑"] = "10.";
				e["⒒"] = "11.";
				e["⒓"] = "12.";
				e["⒔"] = "13.";
				e["⒕"] = "14.";
				e["⒖"] = "15.";
				e["⒗"] = "16.";
				e["⒘"] = "17.";
				e["⒙"] = "18.";
				e["⒚"] = "19.";
				e["⒛"] = "20.";
				e["⒜"] = "(a)";
				e["⒝"] = "(b)";
				e["⒞"] = "(c)";
				e["⒟"] = "(d)";
				e["⒠"] = "(e)";
				e["⒡"] = "(f)";
				e["⒢"] = "(g)";
				e["⒣"] = "(h)";
				e["⒤"] = "(i)";
				e["⒥"] = "(j)";
				e["⒦"] = "(k)";
				e["⒧"] = "(l)";
				e["⒨"] = "(m)";
				e["⒩"] = "(n)";
				e["⒪"] = "(o)";
				e["⒫"] = "(p)";
				e["⒬"] = "(q)";
				e["⒭"] = "(r)";
				e["⒮"] = "(s)";
				e["⒯"] = "(t)";
				e["⒰"] = "(u)";
				e["⒱"] = "(v)";
				e["⒲"] = "(w)";
				e["⒳"] = "(x)";
				e["⒴"] = "(y)";
				e["⒵"] = "(z)";
				e["⨌"] = "∫∫∫∫";
				e["⩴"] = "::=";
				e["⩵"] = "==";
				e["⩶"] = "===";
				e["⺟"] = "母";
				e["⻳"] = "龟";
				e["⼀"] = "一";
				e["⼁"] = "丨";
				e["⼂"] = "丶";
				e["⼃"] = "丿";
				e["⼄"] = "乙";
				e["⼅"] = "亅";
				e["⼆"] = "二";
				e["⼇"] = "亠";
				e["⼈"] = "人";
				e["⼉"] = "儿";
				e["⼊"] = "入";
				e["⼋"] = "八";
				e["⼌"] = "冂";
				e["⼍"] = "冖";
				e["⼎"] = "冫";
				e["⼏"] = "几";
				e["⼐"] = "凵";
				e["⼑"] = "刀";
				e["⼒"] = "力";
				e["⼓"] = "勹";
				e["⼔"] = "匕";
				e["⼕"] = "匚";
				e["⼖"] = "匸";
				e["⼗"] = "十";
				e["⼘"] = "卜";
				e["⼙"] = "卩";
				e["⼚"] = "厂";
				e["⼛"] = "厶";
				e["⼜"] = "又";
				e["⼝"] = "口";
				e["⼞"] = "囗";
				e["⼟"] = "土";
				e["⼠"] = "士";
				e["⼡"] = "夂";
				e["⼢"] = "夊";
				e["⼣"] = "夕";
				e["⼤"] = "大";
				e["⼥"] = "女";
				e["⼦"] = "子";
				e["⼧"] = "宀";
				e["⼨"] = "寸";
				e["⼩"] = "小";
				e["⼪"] = "尢";
				e["⼫"] = "尸";
				e["⼬"] = "屮";
				e["⼭"] = "山";
				e["⼮"] = "巛";
				e["⼯"] = "工";
				e["⼰"] = "己";
				e["⼱"] = "巾";
				e["⼲"] = "干";
				e["⼳"] = "幺";
				e["⼴"] = "广";
				e["⼵"] = "廴";
				e["⼶"] = "廾";
				e["⼷"] = "弋";
				e["⼸"] = "弓";
				e["⼹"] = "彐";
				e["⼺"] = "彡";
				e["⼻"] = "彳";
				e["⼼"] = "心";
				e["⼽"] = "戈";
				e["⼾"] = "戶";
				e["⼿"] = "手";
				e["⽀"] = "支";
				e["⽁"] = "攴";
				e["⽂"] = "文";
				e["⽃"] = "斗";
				e["⽄"] = "斤";
				e["⽅"] = "方";
				e["⽆"] = "无";
				e["⽇"] = "日";
				e["⽈"] = "曰";
				e["⽉"] = "月";
				e["⽊"] = "木";
				e["⽋"] = "欠";
				e["⽌"] = "止";
				e["⽍"] = "歹";
				e["⽎"] = "殳";
				e["⽏"] = "毋";
				e["⽐"] = "比";
				e["⽑"] = "毛";
				e["⽒"] = "氏";
				e["⽓"] = "气";
				e["⽔"] = "水";
				e["⽕"] = "火";
				e["⽖"] = "爪";
				e["⽗"] = "父";
				e["⽘"] = "爻";
				e["⽙"] = "爿";
				e["⽚"] = "片";
				e["⽛"] = "牙";
				e["⽜"] = "牛";
				e["⽝"] = "犬";
				e["⽞"] = "玄";
				e["⽟"] = "玉";
				e["⽠"] = "瓜";
				e["⽡"] = "瓦";
				e["⽢"] = "甘";
				e["⽣"] = "生";
				e["⽤"] = "用";
				e["⽥"] = "田";
				e["⽦"] = "疋";
				e["⽧"] = "疒";
				e["⽨"] = "癶";
				e["⽩"] = "白";
				e["⽪"] = "皮";
				e["⽫"] = "皿";
				e["⽬"] = "目";
				e["⽭"] = "矛";
				e["⽮"] = "矢";
				e["⽯"] = "石";
				e["⽰"] = "示";
				e["⽱"] = "禸";
				e["⽲"] = "禾";
				e["⽳"] = "穴";
				e["⽴"] = "立";
				e["⽵"] = "竹";
				e["⽶"] = "米";
				e["⽷"] = "糸";
				e["⽸"] = "缶";
				e["⽹"] = "网";
				e["⽺"] = "羊";
				e["⽻"] = "羽";
				e["⽼"] = "老";
				e["⽽"] = "而";
				e["⽾"] = "耒";
				e["⽿"] = "耳";
				e["⾀"] = "聿";
				e["⾁"] = "肉";
				e["⾂"] = "臣";
				e["⾃"] = "自";
				e["⾄"] = "至";
				e["⾅"] = "臼";
				e["⾆"] = "舌";
				e["⾇"] = "舛";
				e["⾈"] = "舟";
				e["⾉"] = "艮";
				e["⾊"] = "色";
				e["⾋"] = "艸";
				e["⾌"] = "虍";
				e["⾍"] = "虫";
				e["⾎"] = "血";
				e["⾏"] = "行";
				e["⾐"] = "衣";
				e["⾑"] = "襾";
				e["⾒"] = "見";
				e["⾓"] = "角";
				e["⾔"] = "言";
				e["⾕"] = "谷";
				e["⾖"] = "豆";
				e["⾗"] = "豕";
				e["⾘"] = "豸";
				e["⾙"] = "貝";
				e["⾚"] = "赤";
				e["⾛"] = "走";
				e["⾜"] = "足";
				e["⾝"] = "身";
				e["⾞"] = "車";
				e["⾟"] = "辛";
				e["⾠"] = "辰";
				e["⾡"] = "辵";
				e["⾢"] = "邑";
				e["⾣"] = "酉";
				e["⾤"] = "釆";
				e["⾥"] = "里";
				e["⾦"] = "金";
				e["⾧"] = "長";
				e["⾨"] = "門";
				e["⾩"] = "阜";
				e["⾪"] = "隶";
				e["⾫"] = "隹";
				e["⾬"] = "雨";
				e["⾭"] = "靑";
				e["⾮"] = "非";
				e["⾯"] = "面";
				e["⾰"] = "革";
				e["⾱"] = "韋";
				e["⾲"] = "韭";
				e["⾳"] = "音";
				e["⾴"] = "頁";
				e["⾵"] = "風";
				e["⾶"] = "飛";
				e["⾷"] = "食";
				e["⾸"] = "首";
				e["⾹"] = "香";
				e["⾺"] = "馬";
				e["⾻"] = "骨";
				e["⾼"] = "高";
				e["⾽"] = "髟";
				e["⾾"] = "鬥";
				e["⾿"] = "鬯";
				e["⿀"] = "鬲";
				e["⿁"] = "鬼";
				e["⿂"] = "魚";
				e["⿃"] = "鳥";
				e["⿄"] = "鹵";
				e["⿅"] = "鹿";
				e["⿆"] = "麥";
				e["⿇"] = "麻";
				e["⿈"] = "黃";
				e["⿉"] = "黍";
				e["⿊"] = "黑";
				e["⿋"] = "黹";
				e["⿌"] = "黽";
				e["⿍"] = "鼎";
				e["⿎"] = "鼓";
				e["⿏"] = "鼠";
				e["⿐"] = "鼻";
				e["⿑"] = "齊";
				e["⿒"] = "齒";
				e["⿓"] = "龍";
				e["⿔"] = "龜";
				e["⿕"] = "龠";
				e["〶"] = "〒";
				e["〸"] = "十";
				e["〹"] = "卄";
				e["〺"] = "卅";
				e["゛"] = " ゙";
				e["゜"] = " ゚";
				e["ㄱ"] = "ᄀ";
				e["ㄲ"] = "ᄁ";
				e["ㄳ"] = "ᆪ";
				e["ㄴ"] = "ᄂ";
				e["ㄵ"] = "ᆬ";
				e["ㄶ"] = "ᆭ";
				e["ㄷ"] = "ᄃ";
				e["ㄸ"] = "ᄄ";
				e["ㄹ"] = "ᄅ";
				e["ㄺ"] = "ᆰ";
				e["ㄻ"] = "ᆱ";
				e["ㄼ"] = "ᆲ";
				e["ㄽ"] = "ᆳ";
				e["ㄾ"] = "ᆴ";
				e["ㄿ"] = "ᆵ";
				e["ㅀ"] = "ᄚ";
				e["ㅁ"] = "ᄆ";
				e["ㅂ"] = "ᄇ";
				e["ㅃ"] = "ᄈ";
				e["ㅄ"] = "ᄡ";
				e["ㅅ"] = "ᄉ";
				e["ㅆ"] = "ᄊ";
				e["ㅇ"] = "ᄋ";
				e["ㅈ"] = "ᄌ";
				e["ㅉ"] = "ᄍ";
				e["ㅊ"] = "ᄎ";
				e["ㅋ"] = "ᄏ";
				e["ㅌ"] = "ᄐ";
				e["ㅍ"] = "ᄑ";
				e["ㅎ"] = "ᄒ";
				e["ㅏ"] = "ᅡ";
				e["ㅐ"] = "ᅢ";
				e["ㅑ"] = "ᅣ";
				e["ㅒ"] = "ᅤ";
				e["ㅓ"] = "ᅥ";
				e["ㅔ"] = "ᅦ";
				e["ㅕ"] = "ᅧ";
				e["ㅖ"] = "ᅨ";
				e["ㅗ"] = "ᅩ";
				e["ㅘ"] = "ᅪ";
				e["ㅙ"] = "ᅫ";
				e["ㅚ"] = "ᅬ";
				e["ㅛ"] = "ᅭ";
				e["ㅜ"] = "ᅮ";
				e["ㅝ"] = "ᅯ";
				e["ㅞ"] = "ᅰ";
				e["ㅟ"] = "ᅱ";
				e["ㅠ"] = "ᅲ";
				e["ㅡ"] = "ᅳ";
				e["ㅢ"] = "ᅴ";
				e["ㅣ"] = "ᅵ";
				e["ㅤ"] = "ᅠ";
				e["ㅥ"] = "ᄔ";
				e["ㅦ"] = "ᄕ";
				e["ㅧ"] = "ᇇ";
				e["ㅨ"] = "ᇈ";
				e["ㅩ"] = "ᇌ";
				e["ㅪ"] = "ᇎ";
				e["ㅫ"] = "ᇓ";
				e["ㅬ"] = "ᇗ";
				e["ㅭ"] = "ᇙ";
				e["ㅮ"] = "ᄜ";
				e["ㅯ"] = "ᇝ";
				e["ㅰ"] = "ᇟ";
				e["ㅱ"] = "ᄝ";
				e["ㅲ"] = "ᄞ";
				e["ㅳ"] = "ᄠ";
				e["ㅴ"] = "ᄢ";
				e["ㅵ"] = "ᄣ";
				e["ㅶ"] = "ᄧ";
				e["ㅷ"] = "ᄩ";
				e["ㅸ"] = "ᄫ";
				e["ㅹ"] = "ᄬ";
				e["ㅺ"] = "ᄭ";
				e["ㅻ"] = "ᄮ";
				e["ㅼ"] = "ᄯ";
				e["ㅽ"] = "ᄲ";
				e["ㅾ"] = "ᄶ";
				e["ㅿ"] = "ᅀ";
				e["ㆀ"] = "ᅇ";
				e["ㆁ"] = "ᅌ";
				e["ㆂ"] = "ᇱ";
				e["ㆃ"] = "ᇲ";
				e["ㆄ"] = "ᅗ";
				e["ㆅ"] = "ᅘ";
				e["ㆆ"] = "ᅙ";
				e["ㆇ"] = "ᆄ";
				e["ㆈ"] = "ᆅ";
				e["ㆉ"] = "ᆈ";
				e["ㆊ"] = "ᆑ";
				e["ㆋ"] = "ᆒ";
				e["ㆌ"] = "ᆔ";
				e["ㆍ"] = "ᆞ";
				e["ㆎ"] = "ᆡ";
				e["㈀"] = "(ᄀ)";
				e["㈁"] = "(ᄂ)";
				e["㈂"] = "(ᄃ)";
				e["㈃"] = "(ᄅ)";
				e["㈄"] = "(ᄆ)";
				e["㈅"] = "(ᄇ)";
				e["㈆"] = "(ᄉ)";
				e["㈇"] = "(ᄋ)";
				e["㈈"] = "(ᄌ)";
				e["㈉"] = "(ᄎ)";
				e["㈊"] = "(ᄏ)";
				e["㈋"] = "(ᄐ)";
				e["㈌"] = "(ᄑ)";
				e["㈍"] = "(ᄒ)";
				e["㈎"] = "(가)";
				e["㈏"] = "(나)";
				e["㈐"] = "(다)";
				e["㈑"] = "(라)";
				e["㈒"] = "(마)";
				e["㈓"] = "(바)";
				e["㈔"] = "(사)";
				e["㈕"] = "(아)";
				e["㈖"] = "(자)";
				e["㈗"] = "(차)";
				e["㈘"] = "(카)";
				e["㈙"] = "(타)";
				e["㈚"] = "(파)";
				e["㈛"] = "(하)";
				e["㈜"] = "(주)";
				e["㈝"] = "(오전)";
				e["㈞"] = "(오후)";
				e["㈠"] = "(一)";
				e["㈡"] = "(二)";
				e["㈢"] = "(三)";
				e["㈣"] = "(四)";
				e["㈤"] = "(五)";
				e["㈥"] = "(六)";
				e["㈦"] = "(七)";
				e["㈧"] = "(八)";
				e["㈨"] = "(九)";
				e["㈩"] = "(十)";
				e["㈪"] = "(月)";
				e["㈫"] = "(火)";
				e["㈬"] = "(水)";
				e["㈭"] = "(木)";
				e["㈮"] = "(金)";
				e["㈯"] = "(土)";
				e["㈰"] = "(日)";
				e["㈱"] = "(株)";
				e["㈲"] = "(有)";
				e["㈳"] = "(社)";
				e["㈴"] = "(名)";
				e["㈵"] = "(特)";
				e["㈶"] = "(財)";
				e["㈷"] = "(祝)";
				e["㈸"] = "(労)";
				e["㈹"] = "(代)";
				e["㈺"] = "(呼)";
				e["㈻"] = "(学)";
				e["㈼"] = "(監)";
				e["㈽"] = "(企)";
				e["㈾"] = "(資)";
				e["㈿"] = "(協)";
				e["㉀"] = "(祭)";
				e["㉁"] = "(休)";
				e["㉂"] = "(自)";
				e["㉃"] = "(至)";
				e["㋀"] = "1月";
				e["㋁"] = "2月";
				e["㋂"] = "3月";
				e["㋃"] = "4月";
				e["㋄"] = "5月";
				e["㋅"] = "6月";
				e["㋆"] = "7月";
				e["㋇"] = "8月";
				e["㋈"] = "9月";
				e["㋉"] = "10月";
				e["㋊"] = "11月";
				e["㋋"] = "12月";
				e["㍘"] = "0点";
				e["㍙"] = "1点";
				e["㍚"] = "2点";
				e["㍛"] = "3点";
				e["㍜"] = "4点";
				e["㍝"] = "5点";
				e["㍞"] = "6点";
				e["㍟"] = "7点";
				e["㍠"] = "8点";
				e["㍡"] = "9点";
				e["㍢"] = "10点";
				e["㍣"] = "11点";
				e["㍤"] = "12点";
				e["㍥"] = "13点";
				e["㍦"] = "14点";
				e["㍧"] = "15点";
				e["㍨"] = "16点";
				e["㍩"] = "17点";
				e["㍪"] = "18点";
				e["㍫"] = "19点";
				e["㍬"] = "20点";
				e["㍭"] = "21点";
				e["㍮"] = "22点";
				e["㍯"] = "23点";
				e["㍰"] = "24点";
				e["㏠"] = "1日";
				e["㏡"] = "2日";
				e["㏢"] = "3日";
				e["㏣"] = "4日";
				e["㏤"] = "5日";
				e["㏥"] = "6日";
				e["㏦"] = "7日";
				e["㏧"] = "8日";
				e["㏨"] = "9日";
				e["㏩"] = "10日";
				e["㏪"] = "11日";
				e["㏫"] = "12日";
				e["㏬"] = "13日";
				e["㏭"] = "14日";
				e["㏮"] = "15日";
				e["㏯"] = "16日";
				e["㏰"] = "17日";
				e["㏱"] = "18日";
				e["㏲"] = "19日";
				e["㏳"] = "20日";
				e["㏴"] = "21日";
				e["㏵"] = "22日";
				e["㏶"] = "23日";
				e["㏷"] = "24日";
				e["㏸"] = "25日";
				e["㏹"] = "26日";
				e["㏺"] = "27日";
				e["㏻"] = "28日";
				e["㏼"] = "29日";
				e["㏽"] = "30日";
				e["㏾"] = "31日";
				e["ﬀ"] = "ff";
				e["ﬁ"] = "fi";
				e["ﬂ"] = "fl";
				e["ﬃ"] = "ffi";
				e["ﬄ"] = "ffl";
				e["ﬅ"] = "ſt";
				e["ﬆ"] = "st";
				e["ﬓ"] = "մն";
				e["ﬔ"] = "մե";
				e["ﬕ"] = "մի";
				e["ﬖ"] = "վն";
				e["ﬗ"] = "մխ";
				e["ﭏ"] = "אל";
				e["ﭐ"] = "ٱ";
				e["ﭑ"] = "ٱ";
				e["ﭒ"] = "ٻ";
				e["ﭓ"] = "ٻ";
				e["ﭔ"] = "ٻ";
				e["ﭕ"] = "ٻ";
				e["ﭖ"] = "پ";
				e["ﭗ"] = "پ";
				e["ﭘ"] = "پ";
				e["ﭙ"] = "پ";
				e["ﭚ"] = "ڀ";
				e["ﭛ"] = "ڀ";
				e["ﭜ"] = "ڀ";
				e["ﭝ"] = "ڀ";
				e["ﭞ"] = "ٺ";
				e["ﭟ"] = "ٺ";
				e["ﭠ"] = "ٺ";
				e["ﭡ"] = "ٺ";
				e["ﭢ"] = "ٿ";
				e["ﭣ"] = "ٿ";
				e["ﭤ"] = "ٿ";
				e["ﭥ"] = "ٿ";
				e["ﭦ"] = "ٹ";
				e["ﭧ"] = "ٹ";
				e["ﭨ"] = "ٹ";
				e["ﭩ"] = "ٹ";
				e["ﭪ"] = "ڤ";
				e["ﭫ"] = "ڤ";
				e["ﭬ"] = "ڤ";
				e["ﭭ"] = "ڤ";
				e["ﭮ"] = "ڦ";
				e["ﭯ"] = "ڦ";
				e["ﭰ"] = "ڦ";
				e["ﭱ"] = "ڦ";
				e["ﭲ"] = "ڄ";
				e["ﭳ"] = "ڄ";
				e["ﭴ"] = "ڄ";
				e["ﭵ"] = "ڄ";
				e["ﭶ"] = "ڃ";
				e["ﭷ"] = "ڃ";
				e["ﭸ"] = "ڃ";
				e["ﭹ"] = "ڃ";
				e["ﭺ"] = "چ";
				e["ﭻ"] = "چ";
				e["ﭼ"] = "چ";
				e["ﭽ"] = "چ";
				e["ﭾ"] = "ڇ";
				e["ﭿ"] = "ڇ";
				e["ﮀ"] = "ڇ";
				e["ﮁ"] = "ڇ";
				e["ﮂ"] = "ڍ";
				e["ﮃ"] = "ڍ";
				e["ﮄ"] = "ڌ";
				e["ﮅ"] = "ڌ";
				e["ﮆ"] = "ڎ";
				e["ﮇ"] = "ڎ";
				e["ﮈ"] = "ڈ";
				e["ﮉ"] = "ڈ";
				e["ﮊ"] = "ژ";
				e["ﮋ"] = "ژ";
				e["ﮌ"] = "ڑ";
				e["ﮍ"] = "ڑ";
				e["ﮎ"] = "ک";
				e["ﮏ"] = "ک";
				e["ﮐ"] = "ک";
				e["ﮑ"] = "ک";
				e["ﮒ"] = "گ";
				e["ﮓ"] = "گ";
				e["ﮔ"] = "گ";
				e["ﮕ"] = "گ";
				e["ﮖ"] = "ڳ";
				e["ﮗ"] = "ڳ";
				e["ﮘ"] = "ڳ";
				e["ﮙ"] = "ڳ";
				e["ﮚ"] = "ڱ";
				e["ﮛ"] = "ڱ";
				e["ﮜ"] = "ڱ";
				e["ﮝ"] = "ڱ";
				e["ﮞ"] = "ں";
				e["ﮟ"] = "ں";
				e["ﮠ"] = "ڻ";
				e["ﮡ"] = "ڻ";
				e["ﮢ"] = "ڻ";
				e["ﮣ"] = "ڻ";
				e["ﮤ"] = "ۀ";
				e["ﮥ"] = "ۀ";
				e["ﮦ"] = "ہ";
				e["ﮧ"] = "ہ";
				e["ﮨ"] = "ہ";
				e["ﮩ"] = "ہ";
				e["ﮪ"] = "ھ";
				e["ﮫ"] = "ھ";
				e["ﮬ"] = "ھ";
				e["ﮭ"] = "ھ";
				e["ﮮ"] = "ے";
				e["ﮯ"] = "ے";
				e["ﮰ"] = "ۓ";
				e["ﮱ"] = "ۓ";
				e["ﯓ"] = "ڭ";
				e["ﯔ"] = "ڭ";
				e["ﯕ"] = "ڭ";
				e["ﯖ"] = "ڭ";
				e["ﯗ"] = "ۇ";
				e["ﯘ"] = "ۇ";
				e["ﯙ"] = "ۆ";
				e["ﯚ"] = "ۆ";
				e["ﯛ"] = "ۈ";
				e["ﯜ"] = "ۈ";
				e["ﯝ"] = "ٷ";
				e["ﯞ"] = "ۋ";
				e["ﯟ"] = "ۋ";
				e["ﯠ"] = "ۅ";
				e["ﯡ"] = "ۅ";
				e["ﯢ"] = "ۉ";
				e["ﯣ"] = "ۉ";
				e["ﯤ"] = "ې";
				e["ﯥ"] = "ې";
				e["ﯦ"] = "ې";
				e["ﯧ"] = "ې";
				e["ﯨ"] = "ى";
				e["ﯩ"] = "ى";
				e["ﯪ"] = "ئا";
				e["ﯫ"] = "ئا";
				e["ﯬ"] = "ئە";
				e["ﯭ"] = "ئە";
				e["ﯮ"] = "ئو";
				e["ﯯ"] = "ئو";
				e["ﯰ"] = "ئۇ";
				e["ﯱ"] = "ئۇ";
				e["ﯲ"] = "ئۆ";
				e["ﯳ"] = "ئۆ";
				e["ﯴ"] = "ئۈ";
				e["ﯵ"] = "ئۈ";
				e["ﯶ"] = "ئې";
				e["ﯷ"] = "ئې";
				e["ﯸ"] = "ئې";
				e["ﯹ"] = "ئى";
				e["ﯺ"] = "ئى";
				e["ﯻ"] = "ئى";
				e["ﯼ"] = "ی";
				e["ﯽ"] = "ی";
				e["ﯾ"] = "ی";
				e["ﯿ"] = "ی";
				e["ﰀ"] = "ئج";
				e["ﰁ"] = "ئح";
				e["ﰂ"] = "ئم";
				e["ﰃ"] = "ئى";
				e["ﰄ"] = "ئي";
				e["ﰅ"] = "بج";
				e["ﰆ"] = "بح";
				e["ﰇ"] = "بخ";
				e["ﰈ"] = "بم";
				e["ﰉ"] = "بى";
				e["ﰊ"] = "بي";
				e["ﰋ"] = "تج";
				e["ﰌ"] = "تح";
				e["ﰍ"] = "تخ";
				e["ﰎ"] = "تم";
				e["ﰏ"] = "تى";
				e["ﰐ"] = "تي";
				e["ﰑ"] = "ثج";
				e["ﰒ"] = "ثم";
				e["ﰓ"] = "ثى";
				e["ﰔ"] = "ثي";
				e["ﰕ"] = "جح";
				e["ﰖ"] = "جم";
				e["ﰗ"] = "حج";
				e["ﰘ"] = "حم";
				e["ﰙ"] = "خج";
				e["ﰚ"] = "خح";
				e["ﰛ"] = "خم";
				e["ﰜ"] = "سج";
				e["ﰝ"] = "سح";
				e["ﰞ"] = "سخ";
				e["ﰟ"] = "سم";
				e["ﰠ"] = "صح";
				e["ﰡ"] = "صم";
				e["ﰢ"] = "ضج";
				e["ﰣ"] = "ضح";
				e["ﰤ"] = "ضخ";
				e["ﰥ"] = "ضم";
				e["ﰦ"] = "طح";
				e["ﰧ"] = "طم";
				e["ﰨ"] = "ظم";
				e["ﰩ"] = "عج";
				e["ﰪ"] = "عم";
				e["ﰫ"] = "غج";
				e["ﰬ"] = "غم";
				e["ﰭ"] = "فج";
				e["ﰮ"] = "فح";
				e["ﰯ"] = "فخ";
				e["ﰰ"] = "فم";
				e["ﰱ"] = "فى";
				e["ﰲ"] = "في";
				e["ﰳ"] = "قح";
				e["ﰴ"] = "قم";
				e["ﰵ"] = "قى";
				e["ﰶ"] = "قي";
				e["ﰷ"] = "كا";
				e["ﰸ"] = "كج";
				e["ﰹ"] = "كح";
				e["ﰺ"] = "كخ";
				e["ﰻ"] = "كل";
				e["ﰼ"] = "كم";
				e["ﰽ"] = "كى";
				e["ﰾ"] = "كي";
				e["ﰿ"] = "لج";
				e["ﱀ"] = "لح";
				e["ﱁ"] = "لخ";
				e["ﱂ"] = "لم";
				e["ﱃ"] = "لى";
				e["ﱄ"] = "لي";
				e["ﱅ"] = "مج";
				e["ﱆ"] = "مح";
				e["ﱇ"] = "مخ";
				e["ﱈ"] = "مم";
				e["ﱉ"] = "مى";
				e["ﱊ"] = "مي";
				e["ﱋ"] = "نج";
				e["ﱌ"] = "نح";
				e["ﱍ"] = "نخ";
				e["ﱎ"] = "نم";
				e["ﱏ"] = "نى";
				e["ﱐ"] = "ني";
				e["ﱑ"] = "هج";
				e["ﱒ"] = "هم";
				e["ﱓ"] = "هى";
				e["ﱔ"] = "هي";
				e["ﱕ"] = "يج";
				e["ﱖ"] = "يح";
				e["ﱗ"] = "يخ";
				e["ﱘ"] = "يم";
				e["ﱙ"] = "يى";
				e["ﱚ"] = "يي";
				e["ﱛ"] = "ذٰ";
				e["ﱜ"] = "رٰ";
				e["ﱝ"] = "ىٰ";
				e["ﱞ"] = " ٌّ";
				e["ﱟ"] = " ٍّ";
				e["ﱠ"] = " َّ";
				e["ﱡ"] = " ُّ";
				e["ﱢ"] = " ِّ";
				e["ﱣ"] = " ّٰ";
				e["ﱤ"] = "ئر";
				e["ﱥ"] = "ئز";
				e["ﱦ"] = "ئم";
				e["ﱧ"] = "ئن";
				e["ﱨ"] = "ئى";
				e["ﱩ"] = "ئي";
				e["ﱪ"] = "بر";
				e["ﱫ"] = "بز";
				e["ﱬ"] = "بم";
				e["ﱭ"] = "بن";
				e["ﱮ"] = "بى";
				e["ﱯ"] = "بي";
				e["ﱰ"] = "تر";
				e["ﱱ"] = "تز";
				e["ﱲ"] = "تم";
				e["ﱳ"] = "تن";
				e["ﱴ"] = "تى";
				e["ﱵ"] = "تي";
				e["ﱶ"] = "ثر";
				e["ﱷ"] = "ثز";
				e["ﱸ"] = "ثم";
				e["ﱹ"] = "ثن";
				e["ﱺ"] = "ثى";
				e["ﱻ"] = "ثي";
				e["ﱼ"] = "فى";
				e["ﱽ"] = "في";
				e["ﱾ"] = "قى";
				e["ﱿ"] = "قي";
				e["ﲀ"] = "كا";
				e["ﲁ"] = "كل";
				e["ﲂ"] = "كم";
				e["ﲃ"] = "كى";
				e["ﲄ"] = "كي";
				e["ﲅ"] = "لم";
				e["ﲆ"] = "لى";
				e["ﲇ"] = "لي";
				e["ﲈ"] = "ما";
				e["ﲉ"] = "مم";
				e["ﲊ"] = "نر";
				e["ﲋ"] = "نز";
				e["ﲌ"] = "نم";
				e["ﲍ"] = "نن";
				e["ﲎ"] = "نى";
				e["ﲏ"] = "ني";
				e["ﲐ"] = "ىٰ";
				e["ﲑ"] = "ير";
				e["ﲒ"] = "يز";
				e["ﲓ"] = "يم";
				e["ﲔ"] = "ين";
				e["ﲕ"] = "يى";
				e["ﲖ"] = "يي";
				e["ﲗ"] = "ئج";
				e["ﲘ"] = "ئح";
				e["ﲙ"] = "ئخ";
				e["ﲚ"] = "ئم";
				e["ﲛ"] = "ئه";
				e["ﲜ"] = "بج";
				e["ﲝ"] = "بح";
				e["ﲞ"] = "بخ";
				e["ﲟ"] = "بم";
				e["ﲠ"] = "به";
				e["ﲡ"] = "تج";
				e["ﲢ"] = "تح";
				e["ﲣ"] = "تخ";
				e["ﲤ"] = "تم";
				e["ﲥ"] = "ته";
				e["ﲦ"] = "ثم";
				e["ﲧ"] = "جح";
				e["ﲨ"] = "جم";
				e["ﲩ"] = "حج";
				e["ﲪ"] = "حم";
				e["ﲫ"] = "خج";
				e["ﲬ"] = "خم";
				e["ﲭ"] = "سج";
				e["ﲮ"] = "سح";
				e["ﲯ"] = "سخ";
				e["ﲰ"] = "سم";
				e["ﲱ"] = "صح";
				e["ﲲ"] = "صخ";
				e["ﲳ"] = "صم";
				e["ﲴ"] = "ضج";
				e["ﲵ"] = "ضح";
				e["ﲶ"] = "ضخ";
				e["ﲷ"] = "ضم";
				e["ﲸ"] = "طح";
				e["ﲹ"] = "ظم";
				e["ﲺ"] = "عج";
				e["ﲻ"] = "عم";
				e["ﲼ"] = "غج";
				e["ﲽ"] = "غم";
				e["ﲾ"] = "فج";
				e["ﲿ"] = "فح";
				e["ﳀ"] = "فخ";
				e["ﳁ"] = "فم";
				e["ﳂ"] = "قح";
				e["ﳃ"] = "قم";
				e["ﳄ"] = "كج";
				e["ﳅ"] = "كح";
				e["ﳆ"] = "كخ";
				e["ﳇ"] = "كل";
				e["ﳈ"] = "كم";
				e["ﳉ"] = "لج";
				e["ﳊ"] = "لح";
				e["ﳋ"] = "لخ";
				e["ﳌ"] = "لم";
				e["ﳍ"] = "له";
				e["ﳎ"] = "مج";
				e["ﳏ"] = "مح";
				e["ﳐ"] = "مخ";
				e["ﳑ"] = "مم";
				e["ﳒ"] = "نج";
				e["ﳓ"] = "نح";
				e["ﳔ"] = "نخ";
				e["ﳕ"] = "نم";
				e["ﳖ"] = "نه";
				e["ﳗ"] = "هج";
				e["ﳘ"] = "هم";
				e["ﳙ"] = "هٰ";
				e["ﳚ"] = "يج";
				e["ﳛ"] = "يح";
				e["ﳜ"] = "يخ";
				e["ﳝ"] = "يم";
				e["ﳞ"] = "يه";
				e["ﳟ"] = "ئم";
				e["ﳠ"] = "ئه";
				e["ﳡ"] = "بم";
				e["ﳢ"] = "به";
				e["ﳣ"] = "تم";
				e["ﳤ"] = "ته";
				e["ﳥ"] = "ثم";
				e["ﳦ"] = "ثه";
				e["ﳧ"] = "سم";
				e["ﳨ"] = "سه";
				e["ﳩ"] = "شم";
				e["ﳪ"] = "شه";
				e["ﳫ"] = "كل";
				e["ﳬ"] = "كم";
				e["ﳭ"] = "لم";
				e["ﳮ"] = "نم";
				e["ﳯ"] = "نه";
				e["ﳰ"] = "يم";
				e["ﳱ"] = "يه";
				e["ﳲ"] = "ـَّ";
				e["ﳳ"] = "ـُّ";
				e["ﳴ"] = "ـِّ";
				e["ﳵ"] = "طى";
				e["ﳶ"] = "طي";
				e["ﳷ"] = "عى";
				e["ﳸ"] = "عي";
				e["ﳹ"] = "غى";
				e["ﳺ"] = "غي";
				e["ﳻ"] = "سى";
				e["ﳼ"] = "سي";
				e["ﳽ"] = "شى";
				e["ﳾ"] = "شي";
				e["ﳿ"] = "حى";
				e["ﴀ"] = "حي";
				e["ﴁ"] = "جى";
				e["ﴂ"] = "جي";
				e["ﴃ"] = "خى";
				e["ﴄ"] = "خي";
				e["ﴅ"] = "صى";
				e["ﴆ"] = "صي";
				e["ﴇ"] = "ضى";
				e["ﴈ"] = "ضي";
				e["ﴉ"] = "شج";
				e["ﴊ"] = "شح";
				e["ﴋ"] = "شخ";
				e["ﴌ"] = "شم";
				e["ﴍ"] = "شر";
				e["ﴎ"] = "سر";
				e["ﴏ"] = "صر";
				e["ﴐ"] = "ضر";
				e["ﴑ"] = "طى";
				e["ﴒ"] = "طي";
				e["ﴓ"] = "عى";
				e["ﴔ"] = "عي";
				e["ﴕ"] = "غى";
				e["ﴖ"] = "غي";
				e["ﴗ"] = "سى";
				e["ﴘ"] = "سي";
				e["ﴙ"] = "شى";
				e["ﴚ"] = "شي";
				e["ﴛ"] = "حى";
				e["ﴜ"] = "حي";
				e["ﴝ"] = "جى";
				e["ﴞ"] = "جي";
				e["ﴟ"] = "خى";
				e["ﴠ"] = "خي";
				e["ﴡ"] = "صى";
				e["ﴢ"] = "صي";
				e["ﴣ"] = "ضى";
				e["ﴤ"] = "ضي";
				e["ﴥ"] = "شج";
				e["ﴦ"] = "شح";
				e["ﴧ"] = "شخ";
				e["ﴨ"] = "شم";
				e["ﴩ"] = "شر";
				e["ﴪ"] = "سر";
				e["ﴫ"] = "صر";
				e["ﴬ"] = "ضر";
				e["ﴭ"] = "شج";
				e["ﴮ"] = "شح";
				e["ﴯ"] = "شخ";
				e["ﴰ"] = "شم";
				e["ﴱ"] = "سه";
				e["ﴲ"] = "شه";
				e["ﴳ"] = "طم";
				e["ﴴ"] = "سج";
				e["ﴵ"] = "سح";
				e["ﴶ"] = "سخ";
				e["ﴷ"] = "شج";
				e["ﴸ"] = "شح";
				e["ﴹ"] = "شخ";
				e["ﴺ"] = "طم";
				e["ﴻ"] = "ظم";
				e["ﴼ"] = "اً";
				e["ﴽ"] = "اً";
				e["ﵐ"] = "تجم";
				e["ﵑ"] = "تحج";
				e["ﵒ"] = "تحج";
				e["ﵓ"] = "تحم";
				e["ﵔ"] = "تخم";
				e["ﵕ"] = "تمج";
				e["ﵖ"] = "تمح";
				e["ﵗ"] = "تمخ";
				e["ﵘ"] = "جمح";
				e["ﵙ"] = "جمح";
				e["ﵚ"] = "حمي";
				e["ﵛ"] = "حمى";
				e["ﵜ"] = "سحج";
				e["ﵝ"] = "سجح";
				e["ﵞ"] = "سجى";
				e["ﵟ"] = "سمح";
				e["ﵠ"] = "سمح";
				e["ﵡ"] = "سمج";
				e["ﵢ"] = "سمم";
				e["ﵣ"] = "سمم";
				e["ﵤ"] = "صحح";
				e["ﵥ"] = "صحح";
				e["ﵦ"] = "صمم";
				e["ﵧ"] = "شحم";
				e["ﵨ"] = "شحم";
				e["ﵩ"] = "شجي";
				e["ﵪ"] = "شمخ";
				e["ﵫ"] = "شمخ";
				e["ﵬ"] = "شمم";
				e["ﵭ"] = "شمم";
				e["ﵮ"] = "ضحى";
				e["ﵯ"] = "ضخم";
				e["ﵰ"] = "ضخم";
				e["ﵱ"] = "طمح";
				e["ﵲ"] = "طمح";
				e["ﵳ"] = "طمم";
				e["ﵴ"] = "طمي";
				e["ﵵ"] = "عجم";
				e["ﵶ"] = "عمم";
				e["ﵷ"] = "عمم";
				e["ﵸ"] = "عمى";
				e["ﵹ"] = "غمم";
				e["ﵺ"] = "غمي";
				e["ﵻ"] = "غمى";
				e["ﵼ"] = "فخم";
				e["ﵽ"] = "فخم";
				e["ﵾ"] = "قمح";
				e["ﵿ"] = "قمم";
				e["ﶀ"] = "لحم";
				e["ﶁ"] = "لحي";
				e["ﶂ"] = "لحى";
				e["ﶃ"] = "لجج";
				e["ﶄ"] = "لجج";
				e["ﶅ"] = "لخم";
				e["ﶆ"] = "لخم";
				e["ﶇ"] = "لمح";
				e["ﶈ"] = "لمح";
				e["ﶉ"] = "محج";
				e["ﶊ"] = "محم";
				e["ﶋ"] = "محي";
				e["ﶌ"] = "مجح";
				e["ﶍ"] = "مجم";
				e["ﶎ"] = "مخج";
				e["ﶏ"] = "مخم";
				e["ﶒ"] = "مجخ";
				e["ﶓ"] = "همج";
				e["ﶔ"] = "همم";
				e["ﶕ"] = "نحم";
				e["ﶖ"] = "نحى";
				e["ﶗ"] = "نجم";
				e["ﶘ"] = "نجم";
				e["ﶙ"] = "نجى";
				e["ﶚ"] = "نمي";
				e["ﶛ"] = "نمى";
				e["ﶜ"] = "يمم";
				e["ﶝ"] = "يمم";
				e["ﶞ"] = "بخي";
				e["ﶟ"] = "تجي";
				e["ﶠ"] = "تجى";
				e["ﶡ"] = "تخي";
				e["ﶢ"] = "تخى";
				e["ﶣ"] = "تمي";
				e["ﶤ"] = "تمى";
				e["ﶥ"] = "جمي";
				e["ﶦ"] = "جحى";
				e["ﶧ"] = "جمى";
				e["ﶨ"] = "سخى";
				e["ﶩ"] = "صحي";
				e["ﶪ"] = "شحي";
				e["ﶫ"] = "ضحي";
				e["ﶬ"] = "لجي";
				e["ﶭ"] = "لمي";
				e["ﶮ"] = "يحي";
				e["ﶯ"] = "يجي";
				e["ﶰ"] = "يمي";
				e["ﶱ"] = "ممي";
				e["ﶲ"] = "قمي";
				e["ﶳ"] = "نحي";
				e["ﶴ"] = "قمح";
				e["ﶵ"] = "لحم";
				e["ﶶ"] = "عمي";
				e["ﶷ"] = "كمي";
				e["ﶸ"] = "نجح";
				e["ﶹ"] = "مخي";
				e["ﶺ"] = "لجم";
				e["ﶻ"] = "كمم";
				e["ﶼ"] = "لجم";
				e["ﶽ"] = "نجح";
				e["ﶾ"] = "جحي";
				e["ﶿ"] = "حجي";
				e["ﷀ"] = "مجي";
				e["ﷁ"] = "فمي";
				e["ﷂ"] = "بحي";
				e["ﷃ"] = "كمم";
				e["ﷄ"] = "عجم";
				e["ﷅ"] = "صمم";
				e["ﷆ"] = "سخي";
				e["ﷇ"] = "نجي";
				e["﹉"] = "‾";
				e["﹊"] = "‾";
				e["﹋"] = "‾";
				e["﹌"] = "‾";
				e["﹍"] = "_";
				e["﹎"] = "_";
				e["﹏"] = "_";
				e["ﺀ"] = "ء";
				e["ﺁ"] = "آ";
				e["ﺂ"] = "آ";
				e["ﺃ"] = "أ";
				e["ﺄ"] = "أ";
				e["ﺅ"] = "ؤ";
				e["ﺆ"] = "ؤ";
				e["ﺇ"] = "إ";
				e["ﺈ"] = "إ";
				e["ﺉ"] = "ئ";
				e["ﺊ"] = "ئ";
				e["ﺋ"] = "ئ";
				e["ﺌ"] = "ئ";
				e["ﺍ"] = "ا";
				e["ﺎ"] = "ا";
				e["ﺏ"] = "ب";
				e["ﺐ"] = "ب";
				e["ﺑ"] = "ب";
				e["ﺒ"] = "ب";
				e["ﺓ"] = "ة";
				e["ﺔ"] = "ة";
				e["ﺕ"] = "ت";
				e["ﺖ"] = "ت";
				e["ﺗ"] = "ت";
				e["ﺘ"] = "ت";
				e["ﺙ"] = "ث";
				e["ﺚ"] = "ث";
				e["ﺛ"] = "ث";
				e["ﺜ"] = "ث";
				e["ﺝ"] = "ج";
				e["ﺞ"] = "ج";
				e["ﺟ"] = "ج";
				e["ﺠ"] = "ج";
				e["ﺡ"] = "ح";
				e["ﺢ"] = "ح";
				e["ﺣ"] = "ح";
				e["ﺤ"] = "ح";
				e["ﺥ"] = "خ";
				e["ﺦ"] = "خ";
				e["ﺧ"] = "خ";
				e["ﺨ"] = "خ";
				e["ﺩ"] = "د";
				e["ﺪ"] = "د";
				e["ﺫ"] = "ذ";
				e["ﺬ"] = "ذ";
				e["ﺭ"] = "ر";
				e["ﺮ"] = "ر";
				e["ﺯ"] = "ز";
				e["ﺰ"] = "ز";
				e["ﺱ"] = "س";
				e["ﺲ"] = "س";
				e["ﺳ"] = "س";
				e["ﺴ"] = "س";
				e["ﺵ"] = "ش";
				e["ﺶ"] = "ش";
				e["ﺷ"] = "ش";
				e["ﺸ"] = "ش";
				e["ﺹ"] = "ص";
				e["ﺺ"] = "ص";
				e["ﺻ"] = "ص";
				e["ﺼ"] = "ص";
				e["ﺽ"] = "ض";
				e["ﺾ"] = "ض";
				e["ﺿ"] = "ض";
				e["ﻀ"] = "ض";
				e["ﻁ"] = "ط";
				e["ﻂ"] = "ط";
				e["ﻃ"] = "ط";
				e["ﻄ"] = "ط";
				e["ﻅ"] = "ظ";
				e["ﻆ"] = "ظ";
				e["ﻇ"] = "ظ";
				e["ﻈ"] = "ظ";
				e["ﻉ"] = "ع";
				e["ﻊ"] = "ع";
				e["ﻋ"] = "ع";
				e["ﻌ"] = "ع";
				e["ﻍ"] = "غ";
				e["ﻎ"] = "غ";
				e["ﻏ"] = "غ";
				e["ﻐ"] = "غ";
				e["ﻑ"] = "ف";
				e["ﻒ"] = "ف";
				e["ﻓ"] = "ف";
				e["ﻔ"] = "ف";
				e["ﻕ"] = "ق";
				e["ﻖ"] = "ق";
				e["ﻗ"] = "ق";
				e["ﻘ"] = "ق";
				e["ﻙ"] = "ك";
				e["ﻚ"] = "ك";
				e["ﻛ"] = "ك";
				e["ﻜ"] = "ك";
				e["ﻝ"] = "ل";
				e["ﻞ"] = "ل";
				e["ﻟ"] = "ل";
				e["ﻠ"] = "ل";
				e["ﻡ"] = "م";
				e["ﻢ"] = "م";
				e["ﻣ"] = "م";
				e["ﻤ"] = "م";
				e["ﻥ"] = "ن";
				e["ﻦ"] = "ن";
				e["ﻧ"] = "ن";
				e["ﻨ"] = "ن";
				e["ﻩ"] = "ه";
				e["ﻪ"] = "ه";
				e["ﻫ"] = "ه";
				e["ﻬ"] = "ه";
				e["ﻭ"] = "و";
				e["ﻮ"] = "و";
				e["ﻯ"] = "ى";
				e["ﻰ"] = "ى";
				e["ﻱ"] = "ي";
				e["ﻲ"] = "ي";
				e["ﻳ"] = "ي";
				e["ﻴ"] = "ي";
				e["ﻵ"] = "لآ";
				e["ﻶ"] = "لآ";
				e["ﻷ"] = "لأ";
				e["ﻸ"] = "لأ";
				e["ﻹ"] = "لإ";
				e["ﻺ"] = "لإ";
				e["ﻻ"] = "لا";
				e["ﻼ"] = "لا"
			});

			function h(e) {
				var t = e.length;
				if (t <= 1 || !l(e.charCodeAt(0))) {
					return e
				}
				var r = "";
				for (var a = t - 1; a >= 0; a--) {
					r += e[a]
				}
				return r
			}
			e.mapSpecialUnicodeValues = i;
			e.reverseIfRtl = h;
			e.getUnicodeRangeFor = o;
			e.getNormalizedUnicodes = c;
			e.getUnicodeForGlyph = n
		});
		(function (e, t) {
			t(e.pdfjsCoreStream = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreJbig2, e.pdfjsCoreJpg, e.pdfjsCoreJpx)
		})(this, function (e, t, r, a, i, n) {
			var s = t.Util;
			var o = t.error;
			var l = t.info;
			var c = t.isInt;
			var h = t.isArray;
			var u = t.createObjectURL;
			var f = t.shadow;
			var d = t.warn;
			var g = t.isSpace;
			var v = r.Dict;
			var p = r.isDict;
			var m = r.isStream;
			var b = a.Jbig2Image;
			var y = i.JpegImage;
			var k = n.JpxImage;
			var w = function e() {
				function t(e, t, r, a) {
					this.bytes = e instanceof Uint8Array ? e : new Uint8Array(e);
					this.start = t || 0;
					this.pos = this.start;
					this.end = t + r || this.bytes.length;
					this.dict = a
				}
				t.prototype = {
					get length() {
						return this.end - this.start
					},
					get isEmpty() {
						return this.length === 0
					},
					getByte: function e() {
						if (this.pos >= this.end) {
							return -1
						}
						return this.bytes[this.pos++]
					},
					getUint16: function e() {
						var t = this.getByte();
						var r = this.getByte();
						if (t === -1 || r === -1) {
							return -1
						}
						return (t << 8) + r
					},
					getInt32: function e() {
						var t = this.getByte();
						var r = this.getByte();
						var a = this.getByte();
						var i = this.getByte();
						return (t << 24) + (r << 16) + (a << 8) + i
					},
					getBytes: function e(t) {
						var r = this.bytes;
						var a = this.pos;
						var i = this.end;
						if (!t) {
							return r.subarray(a, i)
						}
						var n = a + t;
						if (n > i) {
							n = i
						}
						this.pos = n;
						return r.subarray(a, n)
					},
					peekByte: function e() {
						var t = this.getByte();
						this.pos--;
						return t
					},
					peekBytes: function e(t) {
						var r = this.getBytes(t);
						this.pos -= r.length;
						return r
					},
					skip: function e(t) {
						if (!t) {
							t = 1
						}
						this.pos += t
					},
					reset: function e() {
						this.pos = this.start
					},
					moveStart: function e() {
						this.start = this.pos
					},
					makeSubStream: function e(r, a, i) {
						return new t(this.bytes.buffer, r, a, i)
					},
					isStream: true
				};
				return t
			}();
			var C = function e() {
				function t(e) {
					var t = e.length;
					var r = new Uint8Array(t);
					for (var a = 0; a < t; ++a) {
						r[a] = e.charCodeAt(a)
					}
					w.call(this, r)
				}
				t.prototype = w.prototype;
				return t
			}();
			var x = function e() {
				var t = new Uint8Array(0);

				function r(e) {
					this.pos = 0;
					this.bufferLength = 0;
					this.eof = false;
					this.buffer = t;
					this.minBufferLength = 512;
					if (e) {
						while (this.minBufferLength < e) {
							this.minBufferLength *= 2
						}
					}
				}
				r.prototype = {
					get isEmpty() {
						while (!this.eof && this.bufferLength === 0) {
							this.readBlock()
						}
						return this.bufferLength === 0
					},
					ensureBuffer: function e(t) {
						var r = this.buffer;
						if (t <= r.byteLength) {
							return r
						}
						var a = this.minBufferLength;
						while (a < t) {
							a *= 2
						}
						var i = new Uint8Array(a);
						i.set(r);
						return this.buffer = i
					},
					getByte: function e() {
						var t = this.pos;
						while (this.bufferLength <= t) {
							if (this.eof) {
								return -1
							}
							this.readBlock()
						}
						return this.buffer[this.pos++]
					},
					getUint16: function e() {
						var t = this.getByte();
						var r = this.getByte();
						if (t === -1 || r === -1) {
							return -1
						}
						return (t << 8) + r
					},
					getInt32: function e() {
						var t = this.getByte();
						var r = this.getByte();
						var a = this.getByte();
						var i = this.getByte();
						return (t << 24) + (r << 16) + (a << 8) + i
					},
					getBytes: function e(t) {
						var r, a = this.pos;
						if (t) {
							this.ensureBuffer(a + t);
							r = a + t;
							while (!this.eof && this.bufferLength < r) {
								this.readBlock()
							}
							var i = this.bufferLength;
							if (r > i) {
								r = i
							}
						} else {
							while (!this.eof) {
								this.readBlock()
							}
							r = this.bufferLength
						}
						this.pos = r;
						return this.buffer.subarray(a, r)
					},
					peekByte: function e() {
						var t = this.getByte();
						this.pos--;
						return t
					},
					peekBytes: function e(t) {
						var r = this.getBytes(t);
						this.pos -= r.length;
						return r
					},
					makeSubStream: function e(t, r, a) {
						var i = t + r;
						while (this.bufferLength <= i && !this.eof) {
							this.readBlock()
						}
						return new w(this.buffer, t, r, a)
					},
					skip: function e(t) {
						if (!t) {
							t = 1
						}
						this.pos += t
					},
					reset: function e() {
						this.pos = 0
					},
					getBaseStreams: function e() {
						if (this.str && this.str.getBaseStreams) {
							return this.str.getBaseStreams()
						}
						return []
					}
				};
				return r
			}();
			var S = function e() {
				function t(e) {
					this.streams = e;
					x.call(this, null)
				}
				t.prototype = Object.create(x.prototype);
				t.prototype.readBlock = function e() {
					var t = this.streams;
					if (t.length === 0) {
						this.eof = true;
						return
					}
					var r = t.shift();
					var a = r.getBytes();
					var i = this.bufferLength;
					var n = i + a.length;
					var s = this.ensureBuffer(n);
					s.set(a, i);
					this.bufferLength = n
				};
				t.prototype.getBaseStreams = function e() {
					var t = [];
					for (var r = 0, a = this.streams.length; r < a; r++) {
						var i = this.streams[r];
						if (i.getBaseStreams) {
							s.appendToArray(t, i.getBaseStreams())
						}
					}
					return t
				};
				return t
			}();
			var A = function e() {
				var t = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
				var r = new Int32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]);
				var a = new Int32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]);
				var i = [new Int32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9];
				var n = [new Int32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];

				function s(e, t) {
					this.str = e;
					this.dict = e.dict;
					var r = e.getByte();
					var a = e.getByte();
					if (r === -1 || a === -1) {
						o("Invalid header in flate stream: " + r + ", " + a)
					}
					if ((r & 15) !== 8) {
						o("Unknown compression method in flate stream: " + r + ", " + a)
					}
					if (((r << 8) + a) % 31 !== 0) {
						o("Bad FCHECK in flate stream: " + r + ", " + a)
					}
					if (a & 32) {
						o("FDICT bit set in flate stream: " + r + ", " + a)
					}
					this.codeSize = 0;
					this.codeBuf = 0;
					x.call(this, t)
				}
				s.prototype = Object.create(x.prototype);
				s.prototype.getBits = function e(t) {
					var r = this.str;
					var a = this.codeSize;
					var i = this.codeBuf;
					var n;
					while (a < t) {
						if ((n = r.getByte()) === -1) {
							o("Bad encoding in flate stream")
						}
						i |= n << a;
						a += 8
					}
					n = i & (1 << t) - 1;
					this.codeBuf = i >> t;
					this.codeSize = a -= t;
					return n
				};
				s.prototype.getCode = function e(t) {
					var r = this.str;
					var a = t[0];
					var i = t[1];
					var n = this.codeSize;
					var s = this.codeBuf;
					var l;
					while (n < i) {
						if ((l = r.getByte()) === -1) {
							break
						}
						s |= l << n;
						n += 8
					}
					var c = a[s & (1 << i) - 1];
					var h = c >> 16;
					var u = c & 65535;
					if (h < 1 || n < h) {
						o("Bad encoding in flate stream")
					}
					this.codeBuf = s >> h;
					this.codeSize = n - h;
					return u
				};
				s.prototype.generateHuffmanTable = function e(t) {
					var r = t.length;
					var a = 0;
					var i;
					for (i = 0; i < r; ++i) {
						if (t[i] > a) {
							a = t[i]
						}
					}
					var n = 1 << a;
					var s = new Int32Array(n);
					for (var o = 1, l = 0, c = 2; o <= a; ++o, l <<= 1, c <<= 1) {
						for (var h = 0; h < r; ++h) {
							if (t[h] === o) {
								var u = 0;
								var f = l;
								for (i = 0; i < o; ++i) {
									u = u << 1 | f & 1;
									f >>= 1
								}
								for (i = u; i < n; i += c) {
									s[i] = o << 16 | h
								}++l
							}
						}
					}
					return [s, a]
				};
				s.prototype.readBlock = function e() {
					var s, l;
					var c = this.str;
					var h = this.getBits(3);
					if (h & 1) {
						this.eof = true
					}
					h >>= 1;
					if (h === 0) {
						var u;
						if ((u = c.getByte()) === -1) {
							o("Bad block header in flate stream")
						}
						var f = u;
						if ((u = c.getByte()) === -1) {
							o("Bad block header in flate stream")
						}
						f |= u << 8;
						if ((u = c.getByte()) === -1) {
							o("Bad block header in flate stream")
						}
						var d = u;
						if ((u = c.getByte()) === -1) {
							o("Bad block header in flate stream")
						}
						d |= u << 8;
						if (d !== (~f & 65535) && (f !== 0 || d !== 0)) {
							o("Bad uncompressed block length in flate stream")
						}
						this.codeBuf = 0;
						this.codeSize = 0;
						var g = this.bufferLength;
						s = this.ensureBuffer(g + f);
						var v = g + f;
						this.bufferLength = v;
						if (f === 0) {
							if (c.peekByte() === -1) {
								this.eof = true
							}
						} else {
							for (var p = g; p < v; ++p) {
								if ((u = c.getByte()) === -1) {
									this.eof = true;
									break
								}
								s[p] = u
							}
						}
						return
					}
					var m;
					var b;
					if (h === 1) {
						m = i;
						b = n
					} else if (h === 2) {
						var y = this.getBits(5) + 257;
						var k = this.getBits(5) + 1;
						var w = this.getBits(4) + 4;
						var C = new Uint8Array(t.length);
						var x;
						for (x = 0; x < w; ++x) {
							C[t[x]] = this.getBits(3)
						}
						var S = this.generateHuffmanTable(C);
						l = 0;
						x = 0;
						var A = y + k;
						var I = new Uint8Array(A);
						var B, R, T;
						while (x < A) {
							var O = this.getCode(S);
							if (O === 16) {
								B = 2;
								R = 3;
								T = l
							} else if (O === 17) {
								B = 3;
								R = 3;
								T = l = 0
							} else if (O === 18) {
								B = 7;
								R = 11;
								T = l = 0
							} else {
								I[x++] = l = O;
								continue
							}
							var P = this.getBits(B) + R;
							while (P-- > 0) {
								I[x++] = T
							}
						}
						m = this.generateHuffmanTable(I.subarray(0, y));
						b = this.generateHuffmanTable(I.subarray(y, A))
					} else {
						o("Unknown block type in flate stream")
					}
					s = this.buffer;
					var E = s ? s.length : 0;
					var M = this.bufferLength;
					while (true) {
						var L = this.getCode(m);
						if (L < 256) {
							if (M + 1 >= E) {
								s = this.ensureBuffer(M + 1);
								E = s.length
							}
							s[M++] = L;
							continue
						}
						if (L === 256) {
							this.bufferLength = M;
							return
						}
						L -= 257;
						L = r[L];
						var D = L >> 16;
						if (D > 0) {
							D = this.getBits(D)
						}
						l = (L & 65535) + D;
						L = this.getCode(b);
						L = a[L];
						D = L >> 16;
						if (D > 0) {
							D = this.getBits(D)
						}
						var F = (L & 65535) + D;
						if (M + l >= E) {
							s = this.ensureBuffer(M + l);
							E = s.length
						}
						for (var U = 0; U < l; ++U, ++M) {
							s[M] = s[M - F]
						}
					}
				};
				return s
			}();
			var I = function e() {
				function t(e, t, r) {
					if (!p(r)) {
						return e
					}
					var a = this.predictor = r.get("Predictor") || 1;
					if (a <= 1) {
						return e
					}
					if (a !== 2 && (a < 10 || a > 15)) {
						o("Unsupported predictor: " + a)
					}
					if (a === 2) {
						this.readBlock = this.readBlockTiff
					} else {
						this.readBlock = this.readBlockPng
					}
					this.str = e;
					this.dict = e.dict;
					var i = this.colors = r.get("Colors") || 1;
					var n = this.bits = r.get("BitsPerComponent") || 8;
					var s = this.columns = r.get("Columns") || 1;
					this.pixBytes = i * n + 7 >> 3;
					this.rowBytes = s * i * n + 7 >> 3;
					x.call(this, t);
					return this
				}
				t.prototype = Object.create(x.prototype);
				t.prototype.readBlockTiff = function e() {
					var t = this.rowBytes;
					var r = this.bufferLength;
					var a = this.ensureBuffer(r + t);
					var i = this.bits;
					var n = this.colors;
					var s = this.str.getBytes(t);
					this.eof = !s.length;
					if (this.eof) {
						return
					}
					var o = 0,
						l = 0;
					var c = 0,
						h = 0;
					var u = r;
					var f;
					if (i === 1 && n === 1) {
						for (f = 0; f < t; ++f) {
							var d = s[f] ^ o;
							d ^= d >> 1;
							d ^= d >> 2;
							d ^= d >> 4;
							o = (d & 1) << 7;
							a[u++] = d
						}
					} else if (i === 8) {
						for (f = 0; f < n; ++f) {
							a[u++] = s[f]
						}
						for (; f < t; ++f) {
							a[u] = a[u - n] + s[f];
							u++
						}
					} else {
						var g = new Uint8Array(n + 1);
						var v = (1 << i) - 1;
						var p = 0,
							m = r;
						var b = this.columns;
						for (f = 0; f < b; ++f) {
							for (var y = 0; y < n; ++y) {
								if (c < i) {
									o = o << 8 | s[p++] & 255;
									c += 8
								}
								g[y] = g[y] + (o >> c - i) & v;
								c -= i;
								l = l << i | g[y];
								h += i;
								if (h >= 8) {
									a[m++] = l >> h - 8 & 255;
									h -= 8
								}
							}
						}
						if (h > 0) {
							a[m++] = (l << 8 - h) + (o & (1 << 8 - h) - 1)
						}
					}
					this.bufferLength += t
				};
				t.prototype.readBlockPng = function e() {
					var t = this.rowBytes;
					var r = this.pixBytes;
					var a = this.str.getByte();
					var i = this.str.getBytes(t);
					this.eof = !i.length;
					if (this.eof) {
						return
					}
					var n = this.bufferLength;
					var s = this.ensureBuffer(n + t);
					var l = s.subarray(n - t, n);
					if (l.length === 0) {
						l = new Uint8Array(t)
					}
					var c, h = n,
						u, f;
					switch (a) {
						case 0:
							for (c = 0; c < t; ++c) {
								s[h++] = i[c]
							}
							break;
						case 1:
							for (c = 0; c < r; ++c) {
								s[h++] = i[c]
							}
							for (; c < t; ++c) {
								s[h] = s[h - r] + i[c] & 255;
								h++
							}
							break;
						case 2:
							for (c = 0; c < t; ++c) {
								s[h++] = l[c] + i[c] & 255
							}
							break;
						case 3:
							for (c = 0; c < r; ++c) {
								s[h++] = (l[c] >> 1) + i[c]
							}
							for (; c < t; ++c) {
								s[h] = (l[c] + s[h - r] >> 1) + i[c] & 255;
								h++
							}
							break;
						case 4:
							for (c = 0; c < r; ++c) {
								u = l[c];
								f = i[c];
								s[h++] = u + f
							}
							for (; c < t; ++c) {
								u = l[c];
								var d = l[c - r];
								var g = s[h - r];
								var v = g + u - d;
								var p = v - g;
								if (p < 0) {
									p = -p
								}
								var m = v - u;
								if (m < 0) {
									m = -m
								}
								var b = v - d;
								if (b < 0) {
									b = -b
								}
								f = i[c];
								if (p <= m && p <= b) {
									s[h++] = g + f
								} else if (m <= b) {
									s[h++] = u + f
								} else {
									s[h++] = d + f
								}
							}
							break;
						default:
							o("Unsupported predictor: " + a)
					}
					this.bufferLength += t
				};
				return t
			}();
			var B = function e() {
				function t(e, t, r, a) {
					var i;
					while ((i = e.getByte()) !== -1) {
						if (i === 255) {
							e.skip(-1);
							break
						}
					}
					this.stream = e;
					this.maybeLength = t;
					this.dict = r;
					this.params = a;
					x.call(this, t)
				}
				t.prototype = Object.create(x.prototype);
				Object.defineProperty(t.prototype, "bytes", {
					get: function e() {
						return f(this, "bytes", this.stream.getBytes(this.maybeLength))
					},
					configurable: true
				});
				t.prototype.ensureBuffer = function e(t) {
					if (this.bufferLength) {
						return
					}
					var r = new y;
					var a = this.dict.getArray("Decode", "D");
					if (this.forceRGB && h(a)) {
						var i = this.dict.get("BitsPerComponent") || 8;
						var n = a.length;
						var s = new Int32Array(n);
						var o = false;
						var l = (1 << i) - 1;
						for (var u = 0; u < n; u += 2) {
							s[u] = (a[u + 1] - a[u]) * 256 | 0;
							s[u + 1] = a[u] * l | 0;
							if (s[u] !== 256 || s[u + 1] !== 0) {
								o = true
							}
						}
						if (o) {
							r.decodeTransform = s
						}
					}
					if (p(this.params)) {
						var f = this.params.get("ColorTransform");
						if (c(f)) {
							r.colorTransform = f
						}
					}
					r.parse(this.bytes);
					var d = r.getData(this.drawWidth, this.drawHeight, this.forceRGB);
					this.buffer = d;
					this.bufferLength = d.length;
					this.eof = true
				};
				t.prototype.getBytes = function e(t) {
					this.ensureBuffer();
					return this.buffer
				};
				t.prototype.getIR = function e(t) {
					return u(this.bytes, "image/jpeg", t)
				};
				return t
			}();
			var R = function e() {
				function t(e, t, r, a) {
					this.stream = e;
					this.maybeLength = t;
					this.dict = r;
					this.params = a;
					x.call(this, t)
				}
				t.prototype = Object.create(x.prototype);
				Object.defineProperty(t.prototype, "bytes", {
					get: function e() {
						return f(this, "bytes", this.stream.getBytes(this.maybeLength))
					},
					configurable: true
				});
				t.prototype.ensureBuffer = function e(t) {
					if (this.bufferLength) {
						return
					}
					var r = new k;
					r.parse(this.bytes);
					var a = r.width;
					var i = r.height;
					var n = r.componentsCount;
					var s = r.tiles.length;
					if (s === 1) {
						this.buffer = r.tiles[0].items
					} else {
						var o = new Uint8Array(a * i * n);
						for (var l = 0; l < s; l++) {
							var c = r.tiles[l];
							var h = c.width;
							var u = c.height;
							var f = c.left;
							var d = c.top;
							var g = c.items;
							var v = 0;
							var p = (a * d + f) * n;
							var m = a * n;
							var b = h * n;
							for (var y = 0; y < u; y++) {
								var w = g.subarray(v, v + b);
								o.set(w, p);
								v += b;
								p += m
							}
						}
						this.buffer = o
					}
					this.bufferLength = this.buffer.length;
					this.eof = true
				};
				return t
			}();
			var T = function e() {
				function t(e, t, r, a) {
					this.stream = e;
					this.maybeLength = t;
					this.dict = r;
					this.params = a;
					x.call(this, t)
				}
				t.prototype = Object.create(x.prototype);
				Object.defineProperty(t.prototype, "bytes", {
					get: function e() {
						return f(this, "bytes", this.stream.getBytes(this.maybeLength))
					},
					configurable: true
				});
				t.prototype.ensureBuffer = function e(t) {
					if (this.bufferLength) {
						return
					}
					var r = new b;
					var a = [];
					if (p(this.params)) {
						var i = this.params.get("JBIG2Globals");
						if (m(i)) {
							var n = i.getBytes();
							a.push({
								data: n,
								start: 0,
								end: n.length
							})
						}
					}
					a.push({
						data: this.bytes,
						start: 0,
						end: this.bytes.length
					});
					var s = r.parseChunks(a);
					var o = s.length;
					for (var l = 0; l < o; l++) {
						s[l] ^= 255
					}
					this.buffer = s;
					this.bufferLength = o;
					this.eof = true
				};
				return t
			}();
			var O = function e() {
				function t(e, t, r) {
					this.str = e;
					this.dict = e.dict;
					this.decrypt = r;
					this.nextChunk = null;
					this.initialized = false;
					x.call(this, t)
				}
				var r = 512;
				t.prototype = Object.create(x.prototype);
				t.prototype.readBlock = function e() {
					var t;
					if (this.initialized) {
						t = this.nextChunk
					} else {
						t = this.str.getBytes(r);
						this.initialized = true
					}
					if (!t || t.length === 0) {
						this.eof = true;
						return
					}
					this.nextChunk = this.str.getBytes(r);
					var a = this.nextChunk && this.nextChunk.length > 0;
					var i = this.decrypt;
					t = i(t, !a);
					var n = this.bufferLength;
					var s, o = t.length;
					var l = this.ensureBuffer(n + o);
					for (s = 0; s < o; s++) {
						l[n++] = t[s]
					}
					this.bufferLength = n
				};
				return t
			}();
			var P = function e() {
				function t(e, t) {
					this.str = e;
					this.dict = e.dict;
					this.input = new Uint8Array(5);
					if (t) {
						t = .8 * t
					}
					x.call(this, t)
				}
				t.prototype = Object.create(x.prototype);
				t.prototype.readBlock = function e() {
					var t = 126;
					var r = 122;
					var a = -1;
					var i = this.str;
					var n = i.getByte();
					while (g(n)) {
						n = i.getByte()
					}
					if (n === a || n === t) {
						this.eof = true;
						return
					}
					var s = this.bufferLength,
						o;
					var l;
					if (n === r) {
						o = this.ensureBuffer(s + 4);
						for (l = 0; l < 4; ++l) {
							o[s + l] = 0
						}
						this.bufferLength += 4
					} else {
						var c = this.input;
						c[0] = n;
						for (l = 1; l < 5; ++l) {
							n = i.getByte();
							while (g(n)) {
								n = i.getByte()
							}
							c[l] = n;
							if (n === a || n === t) {
								break
							}
						}
						o = this.ensureBuffer(s + l - 1);
						this.bufferLength += l - 1;
						if (l < 5) {
							for (; l < 5; ++l) {
								c[l] = 33 + 84
							}
							this.eof = true
						}
						var h = 0;
						for (l = 0; l < 5; ++l) {
							h = h * 85 + (c[l] - 33)
						}
						for (l = 3; l >= 0; --l) {
							o[s + l] = h & 255;
							h >>= 8
						}
					}
				};
				return t
			}();
			var E = function e() {
				function t(e, t) {
					this.str = e;
					this.dict = e.dict;
					this.firstDigit = -1;
					if (t) {
						t = .5 * t
					}
					x.call(this, t)
				}
				t.prototype = Object.create(x.prototype);
				t.prototype.readBlock = function e() {
					var t = 8e3;
					var r = this.str.getBytes(t);
					if (!r.length) {
						this.eof = true;
						return
					}
					var a = r.length + 1 >> 1;
					var i = this.ensureBuffer(this.bufferLength + a);
					var n = this.bufferLength;
					var s = this.firstDigit;
					for (var o = 0, l = r.length; o < l; o++) {
						var c = r[o],
							h;
						if (c >= 48 && c <= 57) {
							h = c & 15
						} else if (c >= 65 && c <= 70 || c >= 97 && c <= 102) {
							h = (c & 15) + 9
						} else if (c === 62) {
							this.eof = true;
							break
						} else {
							continue
						}
						if (s < 0) {
							s = h
						} else {
							i[n++] = s << 4 | h;
							s = -1
						}
					}
					if (s >= 0 && this.eof) {
						i[n++] = s << 4;
						s = -1
					}
					this.firstDigit = s;
					this.bufferLength = n
				};
				return t
			}();
			var M = function e() {
				function t(e, t) {
					this.str = e;
					this.dict = e.dict;
					x.call(this, t)
				}
				t.prototype = Object.create(x.prototype);
				t.prototype.readBlock = function e() {
					var t = this.str.getBytes(2);
					if (!t || t.length < 2 || t[0] === 128) {
						this.eof = true;
						return
					}
					var r;
					var a = this.bufferLength;
					var i = t[0];
					if (i < 128) {
						r = this.ensureBuffer(a + i + 1);
						r[a++] = t[1];
						if (i > 0) {
							var n = this.str.getBytes(i);
							r.set(n, a);
							a += i
						}
					} else {
						i = 257 - i;
						var s = t[1];
						r = this.ensureBuffer(a + i + 1);
						for (var o = 0; o < i; o++) {
							r[a++] = s
						}
					}
					this.bufferLength = a
				};
				return t
			}();
			var L = function e() {
				var t = -2;
				var r = -1;
				var a = 0;
				var i = 1;
				var n = 2;
				var s = 3;
				var o = 4;
				var c = 5;
				var h = 6;
				var u = 7;
				var f = 8;
				var d = [
					[-1, -1],
					[-1, -1],
					[7, f],
					[7, u],
					[6, h],
					[6, h],
					[6, c],
					[6, c],
					[4, a],
					[4, a],
					[4, a],
					[4, a],
					[4, a],
					[4, a],
					[4, a],
					[4, a],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, i],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, o],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[3, s],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n],
					[1, n]
				];
				var g = [
					[-1, -1],
					[12, t],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[11, 1792],
					[11, 1792],
					[12, 1984],
					[12, 2048],
					[12, 2112],
					[12, 2176],
					[12, 2240],
					[12, 2304],
					[11, 1856],
					[11, 1856],
					[11, 1920],
					[11, 1920],
					[12, 2368],
					[12, 2432],
					[12, 2496],
					[12, 2560]
				];
				var p = [
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[8, 29],
					[8, 29],
					[8, 30],
					[8, 30],
					[8, 45],
					[8, 45],
					[8, 46],
					[8, 46],
					[7, 22],
					[7, 22],
					[7, 22],
					[7, 22],
					[7, 23],
					[7, 23],
					[7, 23],
					[7, 23],
					[8, 47],
					[8, 47],
					[8, 48],
					[8, 48],
					[6, 13],
					[6, 13],
					[6, 13],
					[6, 13],
					[6, 13],
					[6, 13],
					[6, 13],
					[6, 13],
					[7, 20],
					[7, 20],
					[7, 20],
					[7, 20],
					[8, 33],
					[8, 33],
					[8, 34],
					[8, 34],
					[8, 35],
					[8, 35],
					[8, 36],
					[8, 36],
					[8, 37],
					[8, 37],
					[8, 38],
					[8, 38],
					[7, 19],
					[7, 19],
					[7, 19],
					[7, 19],
					[8, 31],
					[8, 31],
					[8, 32],
					[8, 32],
					[6, 1],
					[6, 1],
					[6, 1],
					[6, 1],
					[6, 1],
					[6, 1],
					[6, 1],
					[6, 1],
					[6, 12],
					[6, 12],
					[6, 12],
					[6, 12],
					[6, 12],
					[6, 12],
					[6, 12],
					[6, 12],
					[8, 53],
					[8, 53],
					[8, 54],
					[8, 54],
					[7, 26],
					[7, 26],
					[7, 26],
					[7, 26],
					[8, 39],
					[8, 39],
					[8, 40],
					[8, 40],
					[8, 41],
					[8, 41],
					[8, 42],
					[8, 42],
					[8, 43],
					[8, 43],
					[8, 44],
					[8, 44],
					[7, 21],
					[7, 21],
					[7, 21],
					[7, 21],
					[7, 28],
					[7, 28],
					[7, 28],
					[7, 28],
					[8, 61],
					[8, 61],
					[8, 62],
					[8, 62],
					[8, 63],
					[8, 63],
					[8, 0],
					[8, 0],
					[8, 320],
					[8, 320],
					[8, 384],
					[8, 384],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 10],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[5, 11],
					[7, 27],
					[7, 27],
					[7, 27],
					[7, 27],
					[8, 59],
					[8, 59],
					[8, 60],
					[8, 60],
					[9, 1472],
					[9, 1536],
					[9, 1600],
					[9, 1728],
					[7, 18],
					[7, 18],
					[7, 18],
					[7, 18],
					[7, 24],
					[7, 24],
					[7, 24],
					[7, 24],
					[8, 49],
					[8, 49],
					[8, 50],
					[8, 50],
					[8, 51],
					[8, 51],
					[8, 52],
					[8, 52],
					[7, 25],
					[7, 25],
					[7, 25],
					[7, 25],
					[8, 55],
					[8, 55],
					[8, 56],
					[8, 56],
					[8, 57],
					[8, 57],
					[8, 58],
					[8, 58],
					[6, 192],
					[6, 192],
					[6, 192],
					[6, 192],
					[6, 192],
					[6, 192],
					[6, 192],
					[6, 192],
					[6, 1664],
					[6, 1664],
					[6, 1664],
					[6, 1664],
					[6, 1664],
					[6, 1664],
					[6, 1664],
					[6, 1664],
					[8, 448],
					[8, 448],
					[8, 512],
					[8, 512],
					[9, 704],
					[9, 768],
					[8, 640],
					[8, 640],
					[8, 576],
					[8, 576],
					[9, 832],
					[9, 896],
					[9, 960],
					[9, 1024],
					[9, 1088],
					[9, 1152],
					[9, 1216],
					[9, 1280],
					[9, 1344],
					[9, 1408],
					[7, 256],
					[7, 256],
					[7, 256],
					[7, 256],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 2],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[4, 3],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 128],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 8],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[5, 9],
					[6, 16],
					[6, 16],
					[6, 16],
					[6, 16],
					[6, 16],
					[6, 16],
					[6, 16],
					[6, 16],
					[6, 17],
					[6, 17],
					[6, 17],
					[6, 17],
					[6, 17],
					[6, 17],
					[6, 17],
					[6, 17],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 4],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[6, 14],
					[6, 14],
					[6, 14],
					[6, 14],
					[6, 14],
					[6, 14],
					[6, 14],
					[6, 14],
					[6, 15],
					[6, 15],
					[6, 15],
					[6, 15],
					[6, 15],
					[6, 15],
					[6, 15],
					[6, 15],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[5, 64],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7],
					[4, 7]
				];
				var m = [
					[-1, -1],
					[-1, -1],
					[12, t],
					[12, t],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[11, 1792],
					[11, 1792],
					[11, 1792],
					[11, 1792],
					[12, 1984],
					[12, 1984],
					[12, 2048],
					[12, 2048],
					[12, 2112],
					[12, 2112],
					[12, 2176],
					[12, 2176],
					[12, 2240],
					[12, 2240],
					[12, 2304],
					[12, 2304],
					[11, 1856],
					[11, 1856],
					[11, 1856],
					[11, 1856],
					[11, 1920],
					[11, 1920],
					[11, 1920],
					[11, 1920],
					[12, 2368],
					[12, 2368],
					[12, 2432],
					[12, 2432],
					[12, 2496],
					[12, 2496],
					[12, 2560],
					[12, 2560],
					[10, 18],
					[10, 18],
					[10, 18],
					[10, 18],
					[10, 18],
					[10, 18],
					[10, 18],
					[10, 18],
					[12, 52],
					[12, 52],
					[13, 640],
					[13, 704],
					[13, 768],
					[13, 832],
					[12, 55],
					[12, 55],
					[12, 56],
					[12, 56],
					[13, 1280],
					[13, 1344],
					[13, 1408],
					[13, 1472],
					[12, 59],
					[12, 59],
					[12, 60],
					[12, 60],
					[13, 1536],
					[13, 1600],
					[11, 24],
					[11, 24],
					[11, 24],
					[11, 24],
					[11, 25],
					[11, 25],
					[11, 25],
					[11, 25],
					[13, 1664],
					[13, 1728],
					[12, 320],
					[12, 320],
					[12, 384],
					[12, 384],
					[12, 448],
					[12, 448],
					[13, 512],
					[13, 576],
					[12, 53],
					[12, 53],
					[12, 54],
					[12, 54],
					[13, 896],
					[13, 960],
					[13, 1024],
					[13, 1088],
					[13, 1152],
					[13, 1216],
					[10, 64],
					[10, 64],
					[10, 64],
					[10, 64],
					[10, 64],
					[10, 64],
					[10, 64],
					[10, 64]
				];
				var b = [
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[8, 13],
					[11, 23],
					[11, 23],
					[12, 50],
					[12, 51],
					[12, 44],
					[12, 45],
					[12, 46],
					[12, 47],
					[12, 57],
					[12, 58],
					[12, 61],
					[12, 256],
					[10, 16],
					[10, 16],
					[10, 16],
					[10, 16],
					[10, 17],
					[10, 17],
					[10, 17],
					[10, 17],
					[12, 48],
					[12, 49],
					[12, 62],
					[12, 63],
					[12, 30],
					[12, 31],
					[12, 32],
					[12, 33],
					[12, 40],
					[12, 41],
					[11, 22],
					[11, 22],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[8, 14],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 10],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[7, 11],
					[9, 15],
					[9, 15],
					[9, 15],
					[9, 15],
					[9, 15],
					[9, 15],
					[9, 15],
					[9, 15],
					[12, 128],
					[12, 192],
					[12, 26],
					[12, 27],
					[12, 28],
					[12, 29],
					[11, 19],
					[11, 19],
					[11, 20],
					[11, 20],
					[12, 34],
					[12, 35],
					[12, 36],
					[12, 37],
					[12, 38],
					[12, 39],
					[11, 21],
					[11, 21],
					[12, 42],
					[12, 43],
					[10, 0],
					[10, 0],
					[10, 0],
					[10, 0],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12],
					[7, 12]
				];
				var y = [
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[-1, -1],
					[6, 9],
					[6, 8],
					[5, 7],
					[5, 7],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 6],
					[4, 5],
					[4, 5],
					[4, 5],
					[4, 5],
					[3, 1],
					[3, 1],
					[3, 1],
					[3, 1],
					[3, 1],
					[3, 1],
					[3, 1],
					[3, 1],
					[3, 4],
					[3, 4],
					[3, 4],
					[3, 4],
					[3, 4],
					[3, 4],
					[3, 4],
					[3, 4],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 3],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2],
					[2, 2]
				];

				function k(e, t, r) {
					this.str = e;
					this.dict = e.dict;
					r = r || v.empty;
					this.encoding = r.get("K") || 0;
					this.eoline = r.get("EndOfLine") || false;
					this.byteAlign = r.get("EncodedByteAlign") || false;
					this.columns = r.get("Columns") || 1728;
					this.rows = r.get("Rows") || 0;
					var a = r.get("EndOfBlock");
					if (a === null || a === undefined) {
						a = true
					}
					this.eoblock = a;
					this.black = r.get("BlackIs1") || false;
					this.codingLine = new Uint32Array(this.columns + 1);
					this.refLine = new Uint32Array(this.columns + 2);
					this.codingLine[0] = this.columns;
					this.codingPos = 0;
					this.row = 0;
					this.nextLine2D = this.encoding < 0;
					this.inputBits = 0;
					this.inputBuf = 0;
					this.outputBits = 0;
					var i;
					while ((i = this.lookBits(12)) === 0) {
						this.eatBits(1)
					}
					if (i === 1) {
						this.eatBits(12)
					}
					if (this.encoding > 0) {
						this.nextLine2D = !this.lookBits(1);
						this.eatBits(1)
					}
					x.call(this, t)
				}
				k.prototype = Object.create(x.prototype);
				k.prototype.readBlock = function e() {
					while (!this.eof) {
						var t = this.lookChar();
						this.ensureBuffer(this.bufferLength + 1);
						this.buffer[this.bufferLength++] = t
					}
				};
				k.prototype.addPixels = function e(t, r) {
					var a = this.codingLine;
					var i = this.codingPos;
					if (t > a[i]) {
						if (t > this.columns) {
							l("row is wrong length");
							this.err = true;
							t = this.columns
						}
						if (i & 1 ^ r) {
							++i
						}
						a[i] = t
					}
					this.codingPos = i
				};
				k.prototype.addPixelsNeg = function e(t, r) {
					var a = this.codingLine;
					var i = this.codingPos;
					if (t > a[i]) {
						if (t > this.columns) {
							l("row is wrong length");
							this.err = true;
							t = this.columns
						}
						if (i & 1 ^ r) {
							++i
						}
						a[i] = t
					} else if (t < a[i]) {
						if (t < 0) {
							l("invalid code");
							this.err = true;
							t = 0
						}
						while (i > 0 && t < a[i - 1]) {
							--i
						}
						a[i] = t
					}
					this.codingPos = i
				};
				k.prototype.lookChar = function e() {
					var t = this.refLine;
					var d = this.codingLine;
					var g = this.columns;
					var v, p, m, b;
					if (this.outputBits === 0) {
						if (this.eof) {
							return null
						}
						this.err = false;
						var y, k, w;
						if (this.nextLine2D) {
							for (b = 0; d[b] < g; ++b) {
								t[b] = d[b]
							}
							t[b++] = g;
							t[b] = g;
							d[0] = 0;
							this.codingPos = 0;
							v = 0;
							p = 0;
							while (d[this.codingPos] < g) {
								y = this.getTwoDimCode();
								switch (y) {
									case a:
										this.addPixels(t[v + 1], p);
										if (t[v + 1] < g) {
											v += 2
										}
										break;
									case i:
										y = k = 0;
										if (p) {
											do {
												y += w = this.getBlackCode()
											} while (w >= 64);
											do {
												k += w = this.getWhiteCode()
											} while (w >= 64)
										} else {
											do {
												y += w = this.getWhiteCode()
											} while (w >= 64);
											do {
												k += w = this.getBlackCode()
											} while (w >= 64)
										}
										this.addPixels(d[this.codingPos] + y, p);
										if (d[this.codingPos] < g) {
											this.addPixels(d[this.codingPos] + k, p ^ 1)
										}
										while (t[v] <= d[this.codingPos] && t[v] < g) {
											v += 2
										}
										break;
									case u:
										this.addPixels(t[v] + 3, p);
										p ^= 1;
										if (d[this.codingPos] < g) {
											++v;
											while (t[v] <= d[this.codingPos] && t[v] < g) {
												v += 2
											}
										}
										break;
									case c:
										this.addPixels(t[v] + 2, p);
										p ^= 1;
										if (d[this.codingPos] < g) {
											++v;
											while (t[v] <= d[this.codingPos] && t[v] < g) {
												v += 2
											}
										}
										break;
									case s:
										this.addPixels(t[v] + 1, p);
										p ^= 1;
										if (d[this.codingPos] < g) {
											++v;
											while (t[v] <= d[this.codingPos] && t[v] < g) {
												v += 2
											}
										}
										break;
									case n:
										this.addPixels(t[v], p);
										p ^= 1;
										if (d[this.codingPos] < g) {
											++v;
											while (t[v] <= d[this.codingPos] && t[v] < g) {
												v += 2
											}
										}
										break;
									case f:
										this.addPixelsNeg(t[v] - 3, p);
										p ^= 1;
										if (d[this.codingPos] < g) {
											if (v > 0) {
												--v
											} else {
												++v
											}
											while (t[v] <= d[this.codingPos] && t[v] < g) {
												v += 2
											}
										}
										break;
									case h:
										this.addPixelsNeg(t[v] - 2, p);
										p ^= 1;
										if (d[this.codingPos] < g) {
											if (v > 0) {
												--v
											} else {
												++v
											}
											while (t[v] <= d[this.codingPos] && t[v] < g) {
												v += 2
											}
										}
										break;
									case o:
										this.addPixelsNeg(t[v] - 1, p);
										p ^= 1;
										if (d[this.codingPos] < g) {
											if (v > 0) {
												--v
											} else {
												++v
											}
											while (t[v] <= d[this.codingPos] && t[v] < g) {
												v += 2
											}
										}
										break;
									case r:
										this.addPixels(g, 0);
										this.eof = true;
										break;
									default:
										l("bad 2d code");
										this.addPixels(g, 0);
										this.err = true
								}
							}
						} else {
							d[0] = 0;
							this.codingPos = 0;
							p = 0;
							while (d[this.codingPos] < g) {
								y = 0;
								if (p) {
									do {
										y += w = this.getBlackCode()
									} while (w >= 64)
								} else {
									do {
										y += w = this.getWhiteCode()
									} while (w >= 64)
								}
								this.addPixels(d[this.codingPos] + y, p);
								p ^= 1
							}
						}
						var C = false;
						if (this.byteAlign) {
							this.inputBits &= ~7
						}
						if (!this.eoblock && this.row === this.rows - 1) {
							this.eof = true
						} else {
							y = this.lookBits(12);
							if (this.eoline) {
								while (y !== r && y !== 1) {
									this.eatBits(1);
									y = this.lookBits(12)
								}
							} else {
								while (y === 0) {
									this.eatBits(1);
									y = this.lookBits(12)
								}
							}
							if (y === 1) {
								this.eatBits(12);
								C = true
							} else if (y === r) {
								this.eof = true
							}
						}
						if (!this.eof && this.encoding > 0) {
							this.nextLine2D = !this.lookBits(1);
							this.eatBits(1)
						}
						if (this.eoblock && C && this.byteAlign) {
							y = this.lookBits(12);
							if (y === 1) {
								this.eatBits(12);
								if (this.encoding > 0) {
									this.lookBits(1);
									this.eatBits(1)
								}
								if (this.encoding >= 0) {
									for (b = 0; b < 4; ++b) {
										y = this.lookBits(12);
										if (y !== 1) {
											l("bad rtc code: " + y)
										}
										this.eatBits(12);
										if (this.encoding > 0) {
											this.lookBits(1);
											this.eatBits(1)
										}
									}
								}
								this.eof = true
							}
						} else if (this.err && this.eoline) {
							while (true) {
								y = this.lookBits(13);
								if (y === r) {
									this.eof = true;
									return null
								}
								if (y >> 1 === 1) {
									break
								}
								this.eatBits(1)
							}
							this.eatBits(12);
							if (this.encoding > 0) {
								this.eatBits(1);
								this.nextLine2D = !(y & 1)
							}
						}
						if (d[0] > 0) {
							this.outputBits = d[this.codingPos = 0]
						} else {
							this.outputBits = d[this.codingPos = 1]
						}
						this.row++
					}
					var x;
					if (this.outputBits >= 8) {
						x = this.codingPos & 1 ? 0 : 255;
						this.outputBits -= 8;
						if (this.outputBits === 0 && d[this.codingPos] < g) {
							this.codingPos++;
							this.outputBits = d[this.codingPos] - d[this.codingPos - 1]
						}
					} else {
						m = 8;
						x = 0;
						do {
							if (this.outputBits > m) {
								x <<= m;
								if (!(this.codingPos & 1)) {
									x |= 255 >> 8 - m
								}
								this.outputBits -= m;
								m = 0
							} else {
								x <<= this.outputBits;
								if (!(this.codingPos & 1)) {
									x |= 255 >> 8 - this.outputBits
								}
								m -= this.outputBits;
								this.outputBits = 0;
								if (d[this.codingPos] < g) {
									this.codingPos++;
									this.outputBits = d[this.codingPos] - d[this.codingPos - 1]
								} else if (m > 0) {
									x <<= m;
									m = 0
								}
							}
						} while (m)
					}
					if (this.black) {
						x ^= 255
					}
					return x
				};
				k.prototype.findTableCode = function e(t, a, i, n) {
					var s = n || 0;
					for (var o = t; o <= a; ++o) {
						var l = this.lookBits(o);
						if (l === r) {
							return [true, 1, false]
						}
						if (o < a) {
							l <<= a - o
						}
						if (!s || l >= s) {
							var c = i[l - s];
							if (c[0] === o) {
								this.eatBits(o);
								return [true, c[1], true]
							}
						}
					}
					return [false, 0, false]
				};
				k.prototype.getTwoDimCode = function e() {
					var t = 0;
					var a;
					if (this.eoblock) {
						t = this.lookBits(7);
						a = d[t];
						if (a && a[0] > 0) {
							this.eatBits(a[0]);
							return a[1]
						}
					} else {
						var i = this.findTableCode(1, 7, d);
						if (i[0] && i[2]) {
							return i[1]
						}
					}
					l("Bad two dim code");
					return r
				};
				k.prototype.getWhiteCode = function e() {
					var t = 0;
					var a;
					if (this.eoblock) {
						t = this.lookBits(12);
						if (t === r) {
							return 1
						}
						if (t >> 5 === 0) {
							a = g[t]
						} else {
							a = p[t >> 3]
						}
						if (a[0] > 0) {
							this.eatBits(a[0]);
							return a[1]
						}
					} else {
						var i = this.findTableCode(1, 9, p);
						if (i[0]) {
							return i[1]
						}
						i = this.findTableCode(11, 12, g);
						if (i[0]) {
							return i[1]
						}
					}
					l("bad white code");
					this.eatBits(1);
					return 1
				};
				k.prototype.getBlackCode = function e() {
					var t, a;
					if (this.eoblock) {
						t = this.lookBits(13);
						if (t === r) {
							return 1
						}
						if (t >> 7 === 0) {
							a = m[t]
						} else if (t >> 9 === 0 && t >> 7 !== 0) {
							a = b[(t >> 1) - 64]
						} else {
							a = y[t >> 7]
						}
						if (a[0] > 0) {
							this.eatBits(a[0]);
							return a[1]
						}
					} else {
						var i = this.findTableCode(2, 6, y);
						if (i[0]) {
							return i[1]
						}
						i = this.findTableCode(7, 12, b, 64);
						if (i[0]) {
							return i[1]
						}
						i = this.findTableCode(10, 13, m);
						if (i[0]) {
							return i[1]
						}
					}
					l("bad black code");
					this.eatBits(1);
					return 1
				};
				k.prototype.lookBits = function e(t) {
					var a;
					while (this.inputBits < t) {
						if ((a = this.str.getByte()) === -1) {
							if (this.inputBits === 0) {
								return r
							}
							return this.inputBuf << t - this.inputBits & 65535 >> 16 - t
						}
						this.inputBuf = this.inputBuf << 8 | a;
						this.inputBits += 8
					}
					return this.inputBuf >> this.inputBits - t & 65535 >> 16 - t
				};
				k.prototype.eatBits = function e(t) {
					if ((this.inputBits -= t) < 0) {
						this.inputBits = 0
					}
				};
				return k
			}();
			var D = function e() {
				function t(e, t, r) {
					this.str = e;
					this.dict = e.dict;
					this.cachedData = 0;
					this.bitsCached = 0;
					var a = 4096;
					var i = {
						earlyChange: r,
						codeLength: 9,
						nextCode: 258,
						dictionaryValues: new Uint8Array(a),
						dictionaryLengths: new Uint16Array(a),
						dictionaryPrevCodes: new Uint16Array(a),
						currentSequence: new Uint8Array(a),
						currentSequenceLength: 0
					};
					for (var n = 0; n < 256; ++n) {
						i.dictionaryValues[n] = n;
						i.dictionaryLengths[n] = 1
					}
					this.lzwState = i;
					x.call(this, t)
				}
				t.prototype = Object.create(x.prototype);
				t.prototype.readBits = function e(t) {
					var r = this.bitsCached;
					var a = this.cachedData;
					while (r < t) {
						var i = this.str.getByte();
						if (i === -1) {
							this.eof = true;
							return null
						}
						a = a << 8 | i;
						r += 8
					}
					this.bitsCached = r -= t;
					this.cachedData = a;
					this.lastCode = null;
					return a >>> r & (1 << t) - 1
				};
				t.prototype.readBlock = function e() {
					var t = 512;
					var r = t * 2,
						a = t;
					var i, n, s;
					var o = this.lzwState;
					if (!o) {
						return
					}
					var l = o.earlyChange;
					var c = o.nextCode;
					var h = o.dictionaryValues;
					var u = o.dictionaryLengths;
					var f = o.dictionaryPrevCodes;
					var d = o.codeLength;
					var g = o.prevCode;
					var v = o.currentSequence;
					var p = o.currentSequenceLength;
					var m = 0;
					var b = this.bufferLength;
					var y = this.ensureBuffer(this.bufferLength + r);
					for (i = 0; i < t; i++) {
						var k = this.readBits(d);
						var w = p > 0;
						if (k < 256) {
							v[0] = k;
							p = 1
						} else if (k >= 258) {
							if (k < c) {
								p = u[k];
								for (n = p - 1, s = k; n >= 0; n--) {
									v[n] = h[s];
									s = f[s]
								}
							} else {
								v[p++] = v[0]
							}
						} else if (k === 256) {
							d = 9;
							c = 258;
							p = 0;
							continue
						} else {
							this.eof = true;
							delete this.lzwState;
							break
						}
						if (w) {
							f[c] = g;
							u[c] = u[g] + 1;
							h[c] = v[0];
							c++;
							d = c + l & c + l - 1 ? d : Math.min(Math.log(c + l) / .6931471805599453 + 1, 12) | 0
						}
						g = k;
						m += p;
						if (r < m) {
							do {
								r += a
							} while (r < m);
							y = this.ensureBuffer(this.bufferLength + r)
						}
						for (n = 0; n < p; n++) {
							y[b++] = v[n]
						}
					}
					o.nextCode = c;
					o.codeLength = d;
					o.prevCode = g;
					o.currentSequenceLength = p;
					this.bufferLength = b
				};
				return t
			}();
			var F = function e() {
				function t() {
					w.call(this, new Uint8Array(0))
				}
				t.prototype = w.prototype;
				return t
			}();
			e.Ascii85Stream = P;
			e.AsciiHexStream = E;
			e.CCITTFaxStream = L;
			e.DecryptStream = O;
			e.DecodeStream = x;
			e.FlateStream = A;
			e.Jbig2Stream = T;
			e.JpegStream = B;
			e.JpxStream = R;
			e.NullStream = F;
			e.PredictorStream = I;
			e.RunLengthStream = M;
			e.Stream = w;
			e.StreamsSequenceStream = S;
			e.StringStream = C;
			e.LZWStream = D
		});
		(function (e, t) {
			t(e.pdfjsCoreCrypto = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreStream)
		})(this, function (e, t, r, a) {
			var i = t.PasswordException;
			var n = t.PasswordResponses;
			var s = t.bytesToString;
			var o = t.warn;
			var l = t.error;
			var c = t.assert;
			var h = t.isInt;
			var u = t.stringToBytes;
			var f = t.utf8StringToString;
			var d = r.Name;
			var g = r.isName;
			var v = r.isDict;
			var p = a.DecryptStream;
			var m = function e() {
				function t(e) {
					this.a = 0;
					this.b = 0;
					var t = new Uint8Array(256);
					var r, a = 0,
						i, n = e.length;
					for (r = 0; r < 256; ++r) {
						t[r] = r
					}
					for (r = 0; r < 256; ++r) {
						i = t[r];
						a = a + i + e[r % n] & 255;
						t[r] = t[a];
						t[a] = i
					}
					this.s = t
				}
				t.prototype = {
					encryptBlock: function e(t) {
						var r, a = t.length,
							i, n;
						var s = this.a,
							o = this.b,
							l = this.s;
						var c = new Uint8Array(a);
						for (r = 0; r < a; ++r) {
							s = s + 1 & 255;
							i = l[s];
							o = o + i & 255;
							n = l[o];
							l[s] = n;
							l[o] = i;
							c[r] = t[r] ^ l[i + n & 255]
						}
						this.a = s;
						this.b = o;
						return c
					}
				};
				t.prototype.decryptBlock = t.prototype.encryptBlock;
				return t
			}();
			var b = function e() {
				var t = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]);
				var r = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, -145523070, -1120210379, 718787259, -343485551]);

				function a(e, a, i) {
					var n = 1732584193,
						s = -271733879,
						o = -1732584194,
						l = 271733878;
					var c = i + 72 & ~63;
					var h = new Uint8Array(c);
					var u, f, d;
					for (u = 0; u < i; ++u) {
						h[u] = e[a++]
					}
					h[u++] = 128;
					d = c - 8;
					while (u < d) {
						h[u++] = 0
					}
					h[u++] = i << 3 & 255;
					h[u++] = i >> 5 & 255;
					h[u++] = i >> 13 & 255;
					h[u++] = i >> 21 & 255;
					h[u++] = i >>> 29 & 255;
					h[u++] = 0;
					h[u++] = 0;
					h[u++] = 0;
					var g = new Int32Array(16);
					for (u = 0; u < c;) {
						for (f = 0; f < 16; ++f, u += 4) {
							g[f] = h[u] | h[u + 1] << 8 | h[u + 2] << 16 | h[u + 3] << 24
						}
						var v = n,
							p = s,
							m = o,
							b = l,
							y, k;
						for (f = 0; f < 64; ++f) {
							if (f < 16) {
								y = p & m | ~p & b;
								k = f
							} else if (f < 32) {
								y = b & p | ~b & m;
								k = 5 * f + 1 & 15
							} else if (f < 48) {
								y = p ^ m ^ b;
								k = 3 * f + 5 & 15
							} else {
								y = m ^ (p | ~b);
								k = 7 * f & 15
							}
							var w = b,
								C = v + y + r[f] + g[k] | 0,
								x = t[f];
							b = m;
							m = p;
							p = p + (C << x | C >>> 32 - x) | 0;
							v = w
						}
						n = n + v | 0;
						s = s + p | 0;
						o = o + m | 0;
						l = l + b | 0
					}
					return new Uint8Array([n & 255, n >> 8 & 255, n >> 16 & 255, n >>> 24 & 255, s & 255, s >> 8 & 255, s >> 16 & 255, s >>> 24 & 255, o & 255, o >> 8 & 255, o >> 16 & 255, o >>> 24 & 255, l & 255, l >> 8 & 255, l >> 16 & 255, l >>> 24 & 255])
				}
				return a
			}();
			var y = function e() {
				function t(e, t) {
					this.high = e | 0;
					this.low = t | 0
				}
				t.prototype = {
					and: function e(t) {
						this.high &= t.high;
						this.low &= t.low
					},
					xor: function e(t) {
						this.high ^= t.high;
						this.low ^= t.low
					},
					or: function e(t) {
						this.high |= t.high;
						this.low |= t.low
					},
					shiftRight: function e(t) {
						if (t >= 32) {
							this.low = this.high >>> t - 32 | 0;
							this.high = 0
						} else {
							this.low = this.low >>> t | this.high << 32 - t;
							this.high = this.high >>> t | 0
						}
					},
					shiftLeft: function e(t) {
						if (t >= 32) {
							this.high = this.low << t - 32;
							this.low = 0
						} else {
							this.high = this.high << t | this.low >>> 32 - t;
							this.low = this.low << t
						}
					},
					rotateRight: function e(t) {
						var r, a;
						if (t & 32) {
							a = this.low;
							r = this.high
						} else {
							r = this.low;
							a = this.high
						}
						t &= 31;
						this.low = r >>> t | a << 32 - t;
						this.high = a >>> t | r << 32 - t
					},
					not: function e() {
						this.high = ~this.high;
						this.low = ~this.low
					},
					add: function e(t) {
						var r = (this.low >>> 0) + (t.low >>> 0);
						var a = (this.high >>> 0) + (t.high >>> 0);
						if (r > 4294967295) {
							a += 1
						}
						this.low = r | 0;
						this.high = a | 0
					},
					copyTo: function e(t, r) {
						t[r] = this.high >>> 24 & 255;
						t[r + 1] = this.high >> 16 & 255;
						t[r + 2] = this.high >> 8 & 255;
						t[r + 3] = this.high & 255;
						t[r + 4] = this.low >>> 24 & 255;
						t[r + 5] = this.low >> 16 & 255;
						t[r + 6] = this.low >> 8 & 255;
						t[r + 7] = this.low & 255
					},
					assign: function e(t) {
						this.high = t.high;
						this.low = t.low
					}
				};
				return t
			}();
			var k = function e() {
				function t(e, t) {
					return e >>> t | e << 32 - t
				}

				function r(e, t, r) {
					return e & t ^ ~e & r
				}

				function a(e, t, r) {
					return e & t ^ e & r ^ t & r
				}

				function i(e) {
					return t(e, 2) ^ t(e, 13) ^ t(e, 22)
				}

				function n(e) {
					return t(e, 6) ^ t(e, 11) ^ t(e, 25)
				}

				function s(e) {
					return t(e, 7) ^ t(e, 18) ^ e >>> 3
				}

				function o(e) {
					return t(e, 17) ^ t(e, 19) ^ e >>> 10
				}
				var l = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

				function c(e, t, c) {
					var h = 1779033703,
						u = 3144134277,
						f = 1013904242,
						d = 2773480762,
						g = 1359893119,
						v = 2600822924,
						p = 528734635,
						m = 1541459225;
					var b = Math.ceil((c + 9) / 64) * 64;
					var y = new Uint8Array(b);
					var k, w, C;
					for (k = 0; k < c; ++k) {
						y[k] = e[t++]
					}
					y[k++] = 128;
					C = b - 8;
					while (k < C) {
						y[k++] = 0
					}
					y[k++] = 0;
					y[k++] = 0;
					y[k++] = 0;
					y[k++] = c >>> 29 & 255;
					y[k++] = c >> 21 & 255;
					y[k++] = c >> 13 & 255;
					y[k++] = c >> 5 & 255;
					y[k++] = c << 3 & 255;
					var x = new Uint32Array(64);
					for (k = 0; k < b;) {
						for (w = 0; w < 16; ++w) {
							x[w] = y[k] << 24 | y[k + 1] << 16 | y[k + 2] << 8 | y[k + 3];
							k += 4
						}
						for (w = 16; w < 64; ++w) {
							x[w] = o(x[w - 2]) + x[w - 7] + s(x[w - 15]) + x[w - 16] | 0
						}
						var S = h,
							A = u,
							I = f,
							B = d,
							R = g,
							T = v,
							O = p,
							P = m,
							E, M;
						for (w = 0; w < 64; ++w) {
							E = P + n(R) + r(R, T, O) + l[w] + x[w];
							M = i(S) + a(S, A, I);
							P = O;
							O = T;
							T = R;
							R = B + E | 0;
							B = I;
							I = A;
							A = S;
							S = E + M | 0
						}
						h = h + S | 0;
						u = u + A | 0;
						f = f + I | 0;
						d = d + B | 0;
						g = g + R | 0;
						v = v + T | 0;
						p = p + O | 0;
						m = m + P | 0
					}
					return new Uint8Array([h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, h & 255, u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, u & 255, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255, d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255, g >> 24 & 255, g >> 16 & 255, g >> 8 & 255, g & 255, v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, v & 255, p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, p & 255, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, m & 255])
				}
				return c
			}();
			var w = function e() {
				function t(e, t, r, a, i) {
					e.assign(t);
					e.and(r);
					i.assign(t);
					i.not();
					i.and(a);
					e.xor(i)
				}

				function r(e, t, r, a, i) {
					e.assign(t);
					e.and(r);
					i.assign(t);
					i.and(a);
					e.xor(i);
					i.assign(r);
					i.and(a);
					e.xor(i)
				}

				function a(e, t, r) {
					e.assign(t);
					e.rotateRight(28);
					r.assign(t);
					r.rotateRight(34);
					e.xor(r);
					r.assign(t);
					r.rotateRight(39);
					e.xor(r)
				}

				function i(e, t, r) {
					e.assign(t);
					e.rotateRight(14);
					r.assign(t);
					r.rotateRight(18);
					e.xor(r);
					r.assign(t);
					r.rotateRight(41);
					e.xor(r)
				}

				function n(e, t, r) {
					e.assign(t);
					e.rotateRight(1);
					r.assign(t);
					r.rotateRight(8);
					e.xor(r);
					r.assign(t);
					r.shiftRight(7);
					e.xor(r)
				}

				function s(e, t, r) {
					e.assign(t);
					e.rotateRight(19);
					r.assign(t);
					r.rotateRight(61);
					e.xor(r);
					r.assign(t);
					r.shiftRight(6);
					e.xor(r)
				}
				var o = [new y(1116352408, 3609767458), new y(1899447441, 602891725), new y(3049323471, 3964484399), new y(3921009573, 2173295548), new y(961987163, 4081628472), new y(1508970993, 3053834265), new y(2453635748, 2937671579), new y(2870763221, 3664609560), new y(3624381080, 2734883394), new y(310598401, 1164996542), new y(607225278, 1323610764), new y(1426881987, 3590304994), new y(1925078388, 4068182383), new y(2162078206, 991336113), new y(2614888103, 633803317), new y(3248222580, 3479774868), new y(3835390401, 2666613458), new y(4022224774, 944711139), new y(264347078, 2341262773), new y(604807628, 2007800933), new y(770255983, 1495990901), new y(1249150122, 1856431235), new y(1555081692, 3175218132), new y(1996064986, 2198950837), new y(2554220882, 3999719339), new y(2821834349, 766784016), new y(2952996808, 2566594879), new y(3210313671, 3203337956), new y(3336571891, 1034457026), new y(3584528711, 2466948901), new y(113926993, 3758326383), new y(338241895, 168717936), new y(666307205, 1188179964), new y(773529912, 1546045734), new y(1294757372, 1522805485), new y(1396182291, 2643833823), new y(1695183700, 2343527390), new y(1986661051, 1014477480), new y(2177026350, 1206759142), new y(2456956037, 344077627), new y(2730485921, 1290863460), new y(2820302411, 3158454273), new y(3259730800, 3505952657), new y(3345764771, 106217008), new y(3516065817, 3606008344), new y(3600352804, 1432725776), new y(4094571909, 1467031594), new y(275423344, 851169720), new y(430227734, 3100823752), new y(506948616, 1363258195), new y(659060556, 3750685593), new y(883997877, 3785050280), new y(958139571, 3318307427), new y(1322822218, 3812723403), new y(1537002063, 2003034995), new y(1747873779, 3602036899), new y(1955562222, 1575990012), new y(2024104815, 1125592928), new y(2227730452, 2716904306), new y(2361852424, 442776044), new y(2428436474, 593698344), new y(2756734187, 3733110249), new y(3204031479, 2999351573), new y(3329325298, 3815920427), new y(3391569614, 3928383900), new y(3515267271, 566280711), new y(3940187606, 3454069534), new y(4118630271, 4000239992), new y(116418474, 1914138554), new y(174292421, 2731055270), new y(289380356, 3203993006), new y(460393269, 320620315), new y(685471733, 587496836), new y(852142971, 1086792851), new y(1017036298, 365543100), new y(1126000580, 2618297676), new y(1288033470, 3409855158), new y(1501505948, 4234509866), new y(1607167915, 987167468), new y(1816402316, 1246189591)];

				function l(e, l, c, h) {
					h = !!h;
					var u, f, d, g, v, p, m, b;
					if (!h) {
						u = new y(1779033703, 4089235720);
						f = new y(3144134277, 2227873595);
						d = new y(1013904242, 4271175723);
						g = new y(2773480762, 1595750129);
						v = new y(1359893119, 2917565137);
						p = new y(2600822924, 725511199);
						m = new y(528734635, 4215389547);
						b = new y(1541459225, 327033209)
					} else {
						u = new y(3418070365, 3238371032);
						f = new y(1654270250, 914150663);
						d = new y(2438529370, 812702999);
						g = new y(355462360, 4144912697);
						v = new y(1731405415, 4290775857);
						p = new y(2394180231, 1750603025);
						m = new y(3675008525, 1694076839);
						b = new y(1203062813, 3204075428)
					}
					var k = Math.ceil((c + 17) / 128) * 128;
					var w = new Uint8Array(k);
					var C, x, S;
					for (C = 0; C < c; ++C) {
						w[C] = e[l++]
					}
					w[C++] = 128;
					S = k - 16;
					while (C < S) {
						w[C++] = 0
					}
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = 0;
					w[C++] = c >>> 29 & 255;
					w[C++] = c >> 21 & 255;
					w[C++] = c >> 13 & 255;
					w[C++] = c >> 5 & 255;
					w[C++] = c << 3 & 255;
					var A = new Array(80);
					for (C = 0; C < 80; C++) {
						A[C] = new y(0, 0)
					}
					var I = new y(0, 0),
						B = new y(0, 0),
						R = new y(0, 0);
					var T = new y(0, 0),
						O = new y(0, 0),
						P = new y(0, 0);
					var E = new y(0, 0),
						M = new y(0, 0);
					var L = new y(0, 0),
						D = new y(0, 0);
					var F = new y(0, 0),
						U = new y(0, 0),
						j;
					for (C = 0; C < k;) {
						for (x = 0; x < 16; ++x) {
							A[x].high = w[C] << 24 | w[C + 1] << 16 | w[C + 2] << 8 | w[C + 3];
							A[x].low = w[C + 4] << 24 | w[C + 5] << 16 | w[C + 6] << 8 | w[C + 7];
							C += 8
						}
						for (x = 16; x < 80; ++x) {
							j = A[x];
							s(j, A[x - 2], U);
							j.add(A[x - 7]);
							n(F, A[x - 15], U);
							j.add(F);
							j.add(A[x - 16])
						}
						I.assign(u);
						B.assign(f);
						R.assign(d);
						T.assign(g);
						O.assign(v);
						P.assign(p);
						E.assign(m);
						M.assign(b);
						for (x = 0; x < 80; ++x) {
							L.assign(M);
							i(F, O, U);
							L.add(F);
							t(F, O, P, E, U);
							L.add(F);
							L.add(o[x]);
							L.add(A[x]);
							a(D, I, U);
							r(F, I, B, R, U);
							D.add(F);
							j = M;
							M = E;
							E = P;
							P = O;
							T.add(L);
							O = T;
							T = R;
							R = B;
							B = I;
							j.assign(L);
							j.add(D);
							I = j
						}
						u.add(I);
						f.add(B);
						d.add(R);
						g.add(T);
						v.add(O);
						p.add(P);
						m.add(E);
						b.add(M)
					}
					var q;
					if (!h) {
						q = new Uint8Array(64);
						u.copyTo(q, 0);
						f.copyTo(q, 8);
						d.copyTo(q, 16);
						g.copyTo(q, 24);
						v.copyTo(q, 32);
						p.copyTo(q, 40);
						m.copyTo(q, 48);
						b.copyTo(q, 56)
					} else {
						q = new Uint8Array(48);
						u.copyTo(q, 0);
						f.copyTo(q, 8);
						d.copyTo(q, 16);
						g.copyTo(q, 24);
						v.copyTo(q, 32);
						p.copyTo(q, 40)
					}
					return q
				}
				return l
			}();
			var C = function e() {
				function t(e, t, r) {
					return w(e, t, r, true)
				}
				return t
			}();
			var x = function e() {
				function t() {}
				t.prototype = {
					decryptBlock: function e(t) {
						return t
					}
				};
				return t
			}();
			var S = function e() {
				var t = new Uint8Array([141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141]);
				var r = new Uint8Array([99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22]);
				var a = new Uint8Array([82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125]);
				var i = new Uint8Array(256);
				for (var n = 0; n < 256; n++) {
					if (n < 128) {
						i[n] = n << 1
					} else {
						i[n] = n << 1 ^ 27
					}
				}
				var s = new Uint32Array([0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795]);

				function o(e) {
					var a = 176,
						i = new Uint8Array(a);
					i.set(e);
					for (var n = 16, s = 1; n < a; ++s) {
						var o = i[n - 3],
							l = i[n - 2],
							c = i[n - 1],
							h = i[n - 4];
						o = r[o];
						l = r[l];
						c = r[c];
						h = r[h];
						o = o ^ t[s];
						for (var u = 0; u < 4; ++u) {
							i[n] = o ^= i[n - 16];
							n++;
							i[n] = l ^= i[n - 16];
							n++;
							i[n] = c ^= i[n - 16];
							n++;
							i[n] = h ^= i[n - 16];
							n++
						}
					}
					return i
				}

				function l(e, t) {
					var r = new Uint8Array(16);
					r.set(e);
					var i, n, o;
					var l, c, h;
					for (n = 0, o = 160; n < 16; ++n, ++o) {
						r[n] ^= t[o]
					}
					for (i = 9; i >= 1; --i) {
						l = r[13];
						r[13] = r[9];
						r[9] = r[5];
						r[5] = r[1];
						r[1] = l;
						l = r[14];
						c = r[10];
						r[14] = r[6];
						r[10] = r[2];
						r[6] = l;
						r[2] = c;
						l = r[15];
						c = r[11];
						h = r[7];
						r[15] = r[3];
						r[11] = l;
						r[7] = c;
						r[3] = h;
						for (n = 0; n < 16; ++n) {
							r[n] = a[r[n]]
						}
						for (n = 0, o = i * 16; n < 16; ++n, ++o) {
							r[n] ^= t[o]
						}
						for (n = 0; n < 16; n += 4) {
							var u = s[r[n]],
								f = s[r[n + 1]],
								d = s[r[n + 2]],
								g = s[r[n + 3]];
							l = u ^ f >>> 8 ^ f << 24 ^ d >>> 16 ^ d << 16 ^ g >>> 24 ^ g << 8;
							r[n] = l >>> 24 & 255;
							r[n + 1] = l >> 16 & 255;
							r[n + 2] = l >> 8 & 255;
							r[n + 3] = l & 255
						}
					}
					l = r[13];
					r[13] = r[9];
					r[9] = r[5];
					r[5] = r[1];
					r[1] = l;
					l = r[14];
					c = r[10];
					r[14] = r[6];
					r[10] = r[2];
					r[6] = l;
					r[2] = c;
					l = r[15];
					c = r[11];
					h = r[7];
					r[15] = r[3];
					r[11] = l;
					r[7] = c;
					r[3] = h;
					for (n = 0; n < 16; ++n) {
						r[n] = a[r[n]];
						r[n] ^= t[n]
					}
					return r
				}

				function c(e, t) {
					var a, s, o, l;
					var c = new Uint8Array(16);
					c.set(e);
					for (h = 0; h < 16; ++h) {
						c[h] ^= t[h]
					}
					for (n = 1; n < 10; n++) {
						for (h = 0; h < 16; ++h) {
							c[h] = r[c[h]]
						}
						o = c[1];
						c[1] = c[5];
						c[5] = c[9];
						c[9] = c[13];
						c[13] = o;
						o = c[2];
						s = c[6];
						c[2] = c[10];
						c[6] = c[14];
						c[10] = o;
						c[14] = s;
						o = c[3];
						s = c[7];
						a = c[11];
						c[3] = c[15];
						c[7] = o;
						c[11] = s;
						c[15] = a;
						for (var h = 0; h < 16; h += 4) {
							var u = c[h + 0],
								f = c[h + 1];
							var d = c[h + 2],
								g = c[h + 3];
							a = u ^ f ^ d ^ g;
							c[h + 0] ^= a ^ i[u ^ f];
							c[h + 1] ^= a ^ i[f ^ d];
							c[h + 2] ^= a ^ i[d ^ g];
							c[h + 3] ^= a ^ i[g ^ u]
						}
						for (h = 0, l = n * 16; h < 16; ++h, ++l) {
							c[h] ^= t[l]
						}
					}
					for (h = 0; h < 16; ++h) {
						c[h] = r[c[h]]
					}
					o = c[1];
					c[1] = c[5];
					c[5] = c[9];
					c[9] = c[13];
					c[13] = o;
					o = c[2];
					s = c[6];
					c[2] = c[10];
					c[6] = c[14];
					c[10] = o;
					c[14] = s;
					o = c[3];
					s = c[7];
					a = c[11];
					c[3] = c[15];
					c[7] = o;
					c[11] = s;
					c[15] = a;
					for (h = 0, l = 160; h < 16; ++h, ++l) {
						c[h] ^= t[l]
					}
					return c
				}

				function h(e) {
					this.key = o(e);
					this.buffer = new Uint8Array(16);
					this.bufferPosition = 0
				}

				function u(e, t) {
					var r, a, i, n = e.length,
						s = this.buffer,
						o = this.bufferPosition,
						c = [],
						h = this.iv;
					for (r = 0; r < n; ++r) {
						s[o] = e[r];
						++o;
						if (o < 16) {
							continue
						}
						var u = l(s, this.key);
						for (a = 0; a < 16; ++a) {
							u[a] ^= h[a]
						}
						h = s;
						c.push(u);
						s = new Uint8Array(16);
						o = 0
					}
					this.buffer = s;
					this.bufferLength = o;
					this.iv = h;
					if (c.length === 0) {
						return new Uint8Array([])
					}
					var f = 16 * c.length;
					if (t) {
						var d = c[c.length - 1];
						var g = d[15];
						if (g <= 16) {
							for (r = 15, i = 16 - g; r >= i; --r) {
								if (d[r] !== g) {
									g = 0;
									break
								}
							}
							f -= g;
							c[c.length - 1] = d.subarray(0, 16 - g)
						}
					}
					var v = new Uint8Array(f);
					for (r = 0, a = 0, i = c.length; r < i; ++r, a += 16) {
						v.set(c[r], a)
					}
					return v
				}
				h.prototype = {
					decryptBlock: function e(t, r) {
						var a, i = t.length;
						var n = this.buffer,
							s = this.bufferPosition;
						for (a = 0; s < 16 && a < i; ++a, ++s) {
							n[s] = t[a]
						}
						if (s < 16) {
							this.bufferLength = s;
							return new Uint8Array([])
						}
						this.iv = n;
						this.buffer = new Uint8Array(16);
						this.bufferLength = 0;
						this.decryptBlock = u;
						return this.decryptBlock(t.subarray(16), r)
					},
					encrypt: function e(t, r) {
						var a, i, n, s = t.length,
							o = this.buffer,
							l = this.bufferPosition,
							h = [];
						if (!r) {
							r = new Uint8Array(16)
						}
						for (a = 0; a < s; ++a) {
							o[l] = t[a];
							++l;
							if (l < 16) {
								continue
							}
							for (i = 0; i < 16; ++i) {
								o[i] ^= r[i]
							}
							var u = c(o, this.key);
							r = u;
							h.push(u);
							o = new Uint8Array(16);
							l = 0
						}
						this.buffer = o;
						this.bufferLength = l;
						this.iv = r;
						if (h.length === 0) {
							return new Uint8Array([])
						}
						var f = 16 * h.length;
						var d = new Uint8Array(f);
						for (a = 0, i = 0, n = h.length; a < n; ++a, i += 16) {
							d.set(h[a], i)
						}
						return d
					}
				};
				return h
			}();
			var A = function e() {
				var t = new Uint8Array([141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145, 57, 114, 228, 211, 189, 97, 194, 159, 37, 74, 148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141]);
				var r = new Uint8Array([99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22]);
				var a = new Uint8Array([82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125]);
				var i = new Uint8Array(256);
				for (var n = 0; n < 256; n++) {
					if (n < 128) {
						i[n] = n << 1
					} else {
						i[n] = n << 1 ^ 27
					}
				}
				var s = new Uint32Array([0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795]);

				function o(e) {
					var t = 240,
						a = new Uint8Array(t);
					var i = 1;
					a.set(e);
					for (var n = 32, s = 1; n < t; ++s) {
						if (n % 32 === 16) {
							o = r[o];
							l = r[l];
							c = r[c];
							h = r[h]
						} else if (n % 32 === 0) {
							var o = a[n - 3],
								l = a[n - 2],
								c = a[n - 1],
								h = a[n - 4];
							o = r[o];
							l = r[l];
							c = r[c];
							h = r[h];
							o = o ^ i;
							if ((i <<= 1) >= 256) {
								i = (i ^ 27) & 255
							}
						}
						for (var u = 0; u < 4; ++u) {
							a[n] = o ^= a[n - 32];
							n++;
							a[n] = l ^= a[n - 32];
							n++;
							a[n] = c ^= a[n - 32];
							n++;
							a[n] = h ^= a[n - 32];
							n++
						}
					}
					return a
				}

				function l(e, t) {
					var r = new Uint8Array(16);
					r.set(e);
					var i, n, o;
					var l, c, h;
					for (n = 0, o = 224; n < 16; ++n, ++o) {
						r[n] ^= t[o]
					}
					for (i = 13; i >= 1; --i) {
						l = r[13];
						r[13] = r[9];
						r[9] = r[5];
						r[5] = r[1];
						r[1] = l;
						l = r[14];
						c = r[10];
						r[14] = r[6];
						r[10] = r[2];
						r[6] = l;
						r[2] = c;
						l = r[15];
						c = r[11];
						h = r[7];
						r[15] = r[3];
						r[11] = l;
						r[7] = c;
						r[3] = h;
						for (n = 0; n < 16; ++n) {
							r[n] = a[r[n]]
						}
						for (n = 0, o = i * 16; n < 16; ++n, ++o) {
							r[n] ^= t[o]
						}
						for (n = 0; n < 16; n += 4) {
							var u = s[r[n]],
								f = s[r[n + 1]],
								d = s[r[n + 2]],
								g = s[r[n + 3]];
							l = u ^ f >>> 8 ^ f << 24 ^ d >>> 16 ^ d << 16 ^ g >>> 24 ^ g << 8;
							r[n] = l >>> 24 & 255;
							r[n + 1] = l >> 16 & 255;
							r[n + 2] = l >> 8 & 255;
							r[n + 3] = l & 255
						}
					}
					l = r[13];
					r[13] = r[9];
					r[9] = r[5];
					r[5] = r[1];
					r[1] = l;
					l = r[14];
					c = r[10];
					r[14] = r[6];
					r[10] = r[2];
					r[6] = l;
					r[2] = c;
					l = r[15];
					c = r[11];
					h = r[7];
					r[15] = r[3];
					r[11] = l;
					r[7] = c;
					r[3] = h;
					for (n = 0; n < 16; ++n) {
						r[n] = a[r[n]];
						r[n] ^= t[n]
					}
					return r
				}

				function c(e, t) {
					var a, s, o, l;
					var c = new Uint8Array(16);
					c.set(e);
					for (h = 0; h < 16; ++h) {
						c[h] ^= t[h]
					}
					for (n = 1; n < 14; n++) {
						for (h = 0; h < 16; ++h) {
							c[h] = r[c[h]]
						}
						o = c[1];
						c[1] = c[5];
						c[5] = c[9];
						c[9] = c[13];
						c[13] = o;
						o = c[2];
						s = c[6];
						c[2] = c[10];
						c[6] = c[14];
						c[10] = o;
						c[14] = s;
						o = c[3];
						s = c[7];
						a = c[11];
						c[3] = c[15];
						c[7] = o;
						c[11] = s;
						c[15] = a;
						for (var h = 0; h < 16; h += 4) {
							var u = c[h + 0],
								f = c[h + 1];
							var d = c[h + 2],
								g = c[h + 3];
							a = u ^ f ^ d ^ g;
							c[h + 0] ^= a ^ i[u ^ f];
							c[h + 1] ^= a ^ i[f ^ d];
							c[h + 2] ^= a ^ i[d ^ g];
							c[h + 3] ^= a ^ i[g ^ u]
						}
						for (h = 0, l = n * 16; h < 16; ++h, ++l) {
							c[h] ^= t[l]
						}
					}
					for (h = 0; h < 16; ++h) {
						c[h] = r[c[h]]
					}
					o = c[1];
					c[1] = c[5];
					c[5] = c[9];
					c[9] = c[13];
					c[13] = o;
					o = c[2];
					s = c[6];
					c[2] = c[10];
					c[6] = c[14];
					c[10] = o;
					c[14] = s;
					o = c[3];
					s = c[7];
					a = c[11];
					c[3] = c[15];
					c[7] = o;
					c[11] = s;
					c[15] = a;
					for (h = 0, l = 224; h < 16; ++h, ++l) {
						c[h] ^= t[l]
					}
					return c
				}

				function h(e) {
					this.key = o(e);
					this.buffer = new Uint8Array(16);
					this.bufferPosition = 0
				}

				function u(e, t) {
					var r, a, i, n = e.length,
						s = this.buffer,
						o = this.bufferPosition,
						c = [],
						h = this.iv;
					for (r = 0; r < n; ++r) {
						s[o] = e[r];
						++o;
						if (o < 16) {
							continue
						}
						var u = l(s, this.key);
						for (a = 0; a < 16; ++a) {
							u[a] ^= h[a]
						}
						h = s;
						c.push(u);
						s = new Uint8Array(16);
						o = 0
					}
					this.buffer = s;
					this.bufferLength = o;
					this.iv = h;
					if (c.length === 0) {
						return new Uint8Array([])
					}
					var f = 16 * c.length;
					if (t) {
						var d = c[c.length - 1];
						var g = d[15];
						if (g <= 16) {
							for (r = 15, i = 16 - g; r >= i; --r) {
								if (d[r] !== g) {
									g = 0;
									break
								}
							}
							f -= g;
							c[c.length - 1] = d.subarray(0, 16 - g)
						}
					}
					var v = new Uint8Array(f);
					for (r = 0, a = 0, i = c.length; r < i; ++r, a += 16) {
						v.set(c[r], a)
					}
					return v
				}
				h.prototype = {
					decryptBlock: function e(t, r, a) {
						var i, n = t.length;
						var s = this.buffer,
							o = this.bufferPosition;
						if (a) {
							this.iv = a
						} else {
							for (i = 0; o < 16 && i < n; ++i, ++o) {
								s[o] = t[i]
							}
							if (o < 16) {
								this.bufferLength = o;
								return new Uint8Array([])
							}
							this.iv = s;
							t = t.subarray(16)
						}
						this.buffer = new Uint8Array(16);
						this.bufferLength = 0;
						this.decryptBlock = u;
						return this.decryptBlock(t, r)
					},
					encrypt: function e(t, r) {
						var a, i, n, s = t.length,
							o = this.buffer,
							l = this.bufferPosition,
							h = [];
						if (!r) {
							r = new Uint8Array(16)
						}
						for (a = 0; a < s; ++a) {
							o[l] = t[a];
							++l;
							if (l < 16) {
								continue
							}
							for (i = 0; i < 16; ++i) {
								o[i] ^= r[i]
							}
							var u = c(o, this.key);
							this.iv = u;
							h.push(u);
							o = new Uint8Array(16);
							l = 0
						}
						this.buffer = o;
						this.bufferLength = l;
						this.iv = r;
						if (h.length === 0) {
							return new Uint8Array([])
						}
						var f = 16 * h.length;
						var d = new Uint8Array(f);
						for (a = 0, i = 0, n = h.length; a < n; ++a, i += 16) {
							d.set(h[a], i)
						}
						return d
					}
				};
				return h
			}();
			var I = function e() {
				function t(e, t) {
					if (e.length !== t.length) {
						return false
					}
					for (var r = 0; r < e.length; r++) {
						if (e[r] !== t[r]) {
							return false
						}
					}
					return true
				}

				function r() {}
				r.prototype = {
					checkOwnerPassword: function e(r, a, i, n) {
						var s = new Uint8Array(r.length + 56);
						s.set(r, 0);
						s.set(a, r.length);
						s.set(i, r.length + a.length);
						var o = k(s, 0, s.length);
						return t(o, n)
					},
					checkUserPassword: function e(r, a, i) {
						var n = new Uint8Array(r.length + 8);
						n.set(r, 0);
						n.set(a, r.length);
						var s = k(n, 0, n.length);
						return t(s, i)
					},
					getOwnerKey: function e(t, r, a, i) {
						var n = new Uint8Array(t.length + 56);
						n.set(t, 0);
						n.set(r, t.length);
						n.set(a, t.length + r.length);
						var s = k(n, 0, n.length);
						var o = new A(s);
						return o.decryptBlock(i, false, new Uint8Array(16))
					},
					getUserKey: function e(t, r, a) {
						var i = new Uint8Array(t.length + 8);
						i.set(t, 0);
						i.set(r, t.length);
						var n = k(i, 0, i.length);
						var s = new A(n);
						return s.decryptBlock(a, false, new Uint8Array(16))
					}
				};
				return r
			}();
			var B = function e() {
				function t(e, t) {
					var r = new Uint8Array(e.length + t.length);
					r.set(e, 0);
					r.set(t, e.length);
					return r
				}

				function r(e, r, a) {
					var i = k(r, 0, r.length).subarray(0, 32);
					var n = [0];
					var s = 0;
					while (s < 64 || n[n.length - 1] > s - 32) {
						var o = e.length + i.length + a.length;
						var l = new Uint8Array(o * 64);
						var c = t(e, i);
						c = t(c, a);
						for (var h = 0, u = 0; h < 64; h++, u += o) {
							l.set(c, u)
						}
						var f = new S(i.subarray(0, 16));
						n = f.encrypt(l, i.subarray(16, 32));
						var d = 0;
						for (var g = 0; g < 16; g++) {
							d *= 256 % 3;
							d %= 3;
							d += (n[g] >>> 0) % 3;
							d %= 3
						}
						if (d === 0) {
							i = k(n, 0, n.length)
						} else if (d === 1) {
							i = C(n, 0, n.length)
						} else if (d === 2) {
							i = w(n, 0, n.length)
						}
						s++
					}
					return i.subarray(0, 32)
				}

				function a() {}

				function i(e, t) {
					if (e.length !== t.length) {
						return false
					}
					for (var r = 0; r < e.length; r++) {
						if (e[r] !== t[r]) {
							return false
						}
					}
					return true
				}
				a.prototype = {
					hash: function e(t, a, i) {
						return r(t, a, i)
					},
					checkOwnerPassword: function e(t, a, n, s) {
						var o = new Uint8Array(t.length + 56);
						o.set(t, 0);
						o.set(a, t.length);
						o.set(n, t.length + a.length);
						var l = r(t, o, n);
						return i(l, s)
					},
					checkUserPassword: function e(t, a, n) {
						var s = new Uint8Array(t.length + 8);
						s.set(t, 0);
						s.set(a, t.length);
						var o = r(t, s, []);
						return i(o, n)
					},
					getOwnerKey: function e(t, a, i, n) {
						var s = new Uint8Array(t.length + 56);
						s.set(t, 0);
						s.set(a, t.length);
						s.set(i, t.length + a.length);
						var o = r(t, s, i);
						var l = new A(o);
						return l.decryptBlock(n, false, new Uint8Array(16))
					},
					getUserKey: function e(t, a, i) {
						var n = new Uint8Array(t.length + 8);
						n.set(t, 0);
						n.set(a, t.length);
						var s = r(t, n, []);
						var o = new A(s);
						return o.decryptBlock(i, false, new Uint8Array(16))
					}
				};
				return a
			}();
			var R = function e() {
				function t(e, t) {
					this.StringCipherConstructor = e;
					this.StreamCipherConstructor = t
				}
				t.prototype = {
					createStream: function e(t, r) {
						var a = new this.StreamCipherConstructor;
						return new p(t, r, function e(t, r) {
							return a.decryptBlock(t, r)
						})
					},
					decryptString: function e(t) {
						var r = new this.StringCipherConstructor;
						var a = u(t);
						a = r.decryptBlock(a, true);
						return s(a)
					}
				};
				return t
			}();
			var T = function e() {
				var t = new Uint8Array([40, 191, 78, 94, 78, 117, 138, 65, 100, 0, 78, 86, 255, 250, 1, 8, 46, 46, 0, 182, 208, 104, 62, 128, 47, 12, 169, 254, 100, 83, 105, 122]);

				function r(e, t, r, a, i, n, s, o, l, c, h, u) {
					if (t) {
						var f = Math.min(127, t.length);
						t = t.subarray(0, f)
					} else {
						t = []
					}
					var d;
					if (e === 6) {
						d = new B
					} else {
						d = new I
					}
					if (d.checkUserPassword(t, o, s)) {
						return d.getUserKey(t, l, h)
					} else if (t.length && d.checkOwnerPassword(t, a, n, r)) {
						return d.getOwnerKey(t, i, n, c)
					}
					return null
				}

				function a(e, r, a, i, n, s, o, l) {
					var c = 40 + a.length + e.length;
					var h = new Uint8Array(c),
						u = 0,
						f, d;
					if (r) {
						d = Math.min(32, r.length);
						for (; u < d; ++u) {
							h[u] = r[u]
						}
					}
					f = 0;
					while (u < 32) {
						h[u++] = t[f++]
					}
					for (f = 0, d = a.length; f < d; ++f) {
						h[u++] = a[f]
					}
					h[u++] = n & 255;
					h[u++] = n >> 8 & 255;
					h[u++] = n >> 16 & 255;
					h[u++] = n >>> 24 & 255;
					for (f = 0, d = e.length; f < d; ++f) {
						h[u++] = e[f]
					}
					if (s >= 4 && !l) {
						h[u++] = 255;
						h[u++] = 255;
						h[u++] = 255;
						h[u++] = 255
					}
					var g = b(h, 0, u);
					var v = o >> 3;
					if (s >= 3) {
						for (f = 0; f < 50; ++f) {
							g = b(g, 0, v)
						}
					}
					var p = g.subarray(0, v);
					var y, k;
					if (s >= 3) {
						for (u = 0; u < 32; ++u) {
							h[u] = t[u]
						}
						for (f = 0, d = e.length; f < d; ++f) {
							h[u++] = e[f]
						}
						y = new m(p);
						k = y.encryptBlock(b(h, 0, u));
						d = p.length;
						var w = new Uint8Array(d),
							C;
						for (f = 1; f <= 19; ++f) {
							for (C = 0; C < d; ++C) {
								w[C] = p[C] ^ f
							}
							y = new m(w);
							k = y.encryptBlock(k)
						}
						for (f = 0, d = k.length; f < d; ++f) {
							if (i[f] !== k[f]) {
								return null
							}
						}
					} else {
						y = new m(p);
						k = y.encryptBlock(t);
						for (f = 0, d = k.length; f < d; ++f) {
							if (i[f] !== k[f]) {
								return null
							}
						}
					}
					return p
				}

				function s(e, r, a, i) {
					var n = new Uint8Array(32),
						s = 0,
						o, l;
					l = Math.min(32, e.length);
					for (; s < l; ++s) {
						n[s] = e[s]
					}
					o = 0;
					while (s < 32) {
						n[s++] = t[o++]
					}
					var c = b(n, 0, s);
					var h = i >> 3;
					if (a >= 3) {
						for (o = 0; o < 50; ++o) {
							c = b(c, 0, c.length)
						}
					}
					var u, f;
					if (a >= 3) {
						f = r;
						var d = new Uint8Array(h),
							g;
						for (o = 19; o >= 0; o--) {
							for (g = 0; g < h; ++g) {
								d[g] = c[g] ^ o
							}
							u = new m(d);
							f = u.encryptBlock(f)
						}
					} else {
						u = new m(c.subarray(0, h));
						f = u.encryptBlock(r)
					}
					return f
				}
				var p = d.get("Identity");

				function y(e, t, c) {
					var d = e.get("Filter");
					if (!g(d, "Standard")) {
						l("unknown encryption method")
					}
					this.dict = e;
					var m = e.get("V");
					if (!h(m) || m !== 1 && m !== 2 && m !== 4 && m !== 5) {
						l("unsupported encryption algorithm")
					}
					this.algorithm = m;
					var b = e.get("Length");
					if (!b) {
						if (m <= 3) {
							b = 40
						} else {
							var y = e.get("CF");
							var k = e.get("StmF");
							if (v(y) && g(k)) {
								y.suppressEncryption = true;
								var w = y.get(k.name);
								b = w && w.get("Length") || 128;
								if (b < 40) {
									b <<= 3
								}
							}
						}
					}
					if (!h(b) || b < 40 || b % 8 !== 0) {
						l("invalid key length")
					}
					var C = u(e.get("O")).subarray(0, 32);
					var x = u(e.get("U")).subarray(0, 32);
					var S = e.get("P");
					var A = e.get("R");
					var I = (m === 4 || m === 5) && e.get("EncryptMetadata") !== false;
					this.encryptMetadata = I;
					var B = u(t);
					var R;
					if (c) {
						if (A === 6) {
							try {
								c = f(c)
							} catch (e) {
								o("CipherTransformFactory: " + "Unable to convert UTF8 encoded password.")
							}
						}
						R = u(c)
					}
					var T;
					if (m !== 5) {
						T = a(B, R, C, x, S, A, b, I)
					} else {
						var O = u(e.get("O")).subarray(32, 40);
						var P = u(e.get("O")).subarray(40, 48);
						var E = u(e.get("U")).subarray(0, 48);
						var M = u(e.get("U")).subarray(32, 40);
						var L = u(e.get("U")).subarray(40, 48);
						var D = u(e.get("OE"));
						var F = u(e.get("UE"));
						var U = u(e.get("Perms"));
						T = r(A, R, C, O, P, E, x, M, L, D, F, U)
					}
					if (!T && !c) {
						throw new i("No password given", n.NEED_PASSWORD)
					} else if (!T && c) {
						var j = s(R, C, A, b);
						T = a(B, j, C, x, S, A, b, I)
					}
					if (!T) {
						throw new i("Incorrect Password", n.INCORRECT_PASSWORD)
					}
					this.encryptionKey = T;
					if (m >= 4) {
						var q = e.get("CF");
						if (v(q)) {
							q.suppressEncryption = true
						}
						this.cf = q;
						this.stmf = e.get("StmF") || p;
						this.strf = e.get("StrF") || p;
						this.eff = e.get("EFF") || this.stmf
					}
				}

				function k(e, t, r, a) {
					var i = new Uint8Array(r.length + 9),
						n, s;
					for (n = 0, s = r.length; n < s; ++n) {
						i[n] = r[n]
					}
					i[n++] = e & 255;
					i[n++] = e >> 8 & 255;
					i[n++] = e >> 16 & 255;
					i[n++] = t & 255;
					i[n++] = t >> 8 & 255;
					if (a) {
						i[n++] = 115;
						i[n++] = 65;
						i[n++] = 108;
						i[n++] = 84
					}
					var o = b(i, 0, n);
					return o.subarray(0, Math.min(r.length + 5, 16))
				}

				function w(e, t, r, a, i) {
					c(g(t), "Invalid crypt filter name.");
					var n = e.get(t.name);
					var s;
					if (n !== null && n !== undefined) {
						s = n.get("CFM")
					}
					if (!s || s.name === "None") {
						return function e() {
							return new x
						}
					}
					if (s.name === "V2") {
						return function e() {
							return new m(k(r, a, i, false))
						}
					}
					if (s.name === "AESV2") {
						return function e() {
							return new S(k(r, a, i, true))
						}
					}
					if (s.name === "AESV3") {
						return function e() {
							return new A(i)
						}
					}
					l("Unknown crypto method")
				}
				y.prototype = {
					createCipherTransform: function e(t, r) {
						if (this.algorithm === 4 || this.algorithm === 5) {
							return new R(w(this.cf, this.stmf, t, r, this.encryptionKey), w(this.cf, this.strf, t, r, this.encryptionKey))
						}
						var a = k(t, r, this.encryptionKey, false);
						var i = function e() {
							return new m(a)
						};
						return new R(i, i)
					}
				};
				return y
			}();
			e.AES128Cipher = S;
			e.AES256Cipher = A;
			e.ARCFourCipher = m;
			e.CipherTransformFactory = T;
			e.PDF17 = I;
			e.PDF20 = B;
			e.calculateMD5 = b;
			e.calculateSHA256 = k;
			e.calculateSHA384 = C;
			e.calculateSHA512 = w
		});
		(function (e, t) {
			t(e.pdfjsCoreFontRenderer = {}, e.pdfjsSharedUtil, e.pdfjsCoreStream, e.pdfjsCoreGlyphList, e.pdfjsCoreEncodings, e.pdfjsCoreCFFParser)
		})(this, function (e, t, r, a, i, n) {
			var s = t.Util;
			var o = t.bytesToString;
			var l = t.error;
			var c = r.Stream;
			var h = a.getGlyphsUnicode;
			var u = i.StandardEncoding;
			var f = n.CFFParser;
			var d = function e() {
				function t(e, t) {
					return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
				}

				function r(e, t) {
					return e[t] << 8 | e[t + 1]
				}

				function a(e, a, i) {
					var n = r(e, a + 2) === 1 ? t(e, a + 8) : t(e, a + 16);
					var s = r(e, a + n);
					var o, c, h, u;
					if (s === 4) {
						o = r(e, a + n + 2);
						var f = r(e, a + n + 6) >> 1;
						h = a + n + 14;
						c = [];
						for (u = 0; u < f; u++, h += 2) {
							c[u] = {
								end: r(e, h)
							}
						}
						h += 2;
						for (u = 0; u < f; u++, h += 2) {
							c[u].start = r(e, h)
						}
						for (u = 0; u < f; u++, h += 2) {
							c[u].idDelta = r(e, h)
						}
						for (u = 0; u < f; u++, h += 2) {
							var d = r(e, h);
							if (d === 0) {
								continue
							}
							c[u].ids = [];
							for (var g = 0, v = c[u].end - c[u].start + 1; g < v; g++) {
								c[u].ids[g] = r(e, h + d);
								d += 2
							}
						}
						return c
					} else if (s === 12) {
						o = t(e, a + n + 4);
						var p = t(e, a + n + 12);
						h = a + n + 16;
						c = [];
						for (u = 0; u < p; u++) {
							c.push({
								start: t(e, h),
								end: t(e, h + 4),
								idDelta: t(e, h + 8) - t(e, h)
							});
							h += 12
						}
						return c
					}
					l("not supported cmap: " + s)
				}

				function i(e, t, r, a) {
					var i = {};
					var n = new f(new c(e, t, r - t), i, a);
					var s = n.parse();
					return {
						glyphs: s.charStrings.objects,
						subrs: s.topDict.privateDict && s.topDict.privateDict.subrsIndex && s.topDict.privateDict.subrsIndex.objects,
						gsubrs: s.globalSubrIndex && s.globalSubrIndex.objects
					}
				}

				function n(e, t, r) {
					var a, i;
					if (r) {
						a = 4;
						i = function e(t, r) {
							return t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]
						}
					} else {
						a = 2;
						i = function e(t, r) {
							return t[r] << 9 | t[r + 1] << 1
						}
					}
					var n = [];
					var s = i(t, 0);
					for (var o = a; o < t.length; o += a) {
						var l = i(t, o);
						n.push(e.subarray(s, l));
						s = l
					}
					return n
				}

				function d(e, t) {
					var r = t.charCodeAt(0),
						a = 0;
					var i = 0,
						n = e.length - 1;
					while (i < n) {
						var s = i + n + 1 >> 1;
						if (r < e[s].start) {
							n = s - 1
						} else {
							i = s
						}
					}
					if (e[i].start <= r && r <= e[i].end) {
						a = e[i].idDelta + (e[i].ids ? e[i].ids[r - e[i].start] : r) & 65535
					}
					return {
						charCode: r,
						glyphId: a
					}
				}

				function g(e, t, r) {
					function a(e, r) {
						t.push({
							cmd: "moveTo",
							args: [e, r]
						})
					}

					function i(e, r) {
						t.push({
							cmd: "lineTo",
							args: [e, r]
						})
					}

					function n(e, r, a, i) {
						t.push({
							cmd: "quadraticCurveTo",
							args: [e, r, a, i]
						})
					}
					var s = 0;
					var o = (e[s] << 24 | e[s + 1] << 16) >> 16;
					var l;
					var c = 0,
						h = 0;
					s += 10;
					if (o < 0) {
						do {
							l = e[s] << 8 | e[s + 1];
							var u = e[s + 2] << 8 | e[s + 3];
							s += 4;
							var f, d;
							if (l & 1) {
								f = (e[s] << 24 | e[s + 1] << 16) >> 16;
								d = (e[s + 2] << 24 | e[s + 3] << 16) >> 16;
								s += 4
							} else {
								f = e[s++];
								d = e[s++]
							}
							if (l & 2) {
								c = f;
								h = d
							} else {
								c = 0;
								h = 0
							}
							var v = 1,
								p = 1,
								m = 0,
								b = 0;
							if (l & 8) {
								v = p = (e[s] << 24 | e[s + 1] << 16) / 1073741824;
								s += 2
							} else if (l & 64) {
								v = (e[s] << 24 | e[s + 1] << 16) / 1073741824;
								p = (e[s + 2] << 24 | e[s + 3] << 16) / 1073741824;
								s += 4
							} else if (l & 128) {
								v = (e[s] << 24 | e[s + 1] << 16) / 1073741824;
								m = (e[s + 2] << 24 | e[s + 3] << 16) / 1073741824;
								b = (e[s + 4] << 24 | e[s + 5] << 16) / 1073741824;
								p = (e[s + 6] << 24 | e[s + 7] << 16) / 1073741824;
								s += 8
							}
							var y = r.glyphs[u];
							if (y) {
								t.push({
									cmd: "save"
								});
								t.push({
									cmd: "transform",
									args: [v, m, b, p, c, h]
								});
								g(y, t, r);
								t.push({
									cmd: "restore"
								})
							}
						} while (l & 32)
					} else {
						var k = [];
						var w, C;
						for (w = 0; w < o; w++) {
							k.push(e[s] << 8 | e[s + 1]);
							s += 2
						}
						var x = e[s] << 8 | e[s + 1];
						s += 2 + x;
						var S = k[k.length - 1] + 1;
						var A = [];
						while (A.length < S) {
							l = e[s++];
							var I = 1;
							if (l & 8) {
								I += e[s++]
							}
							while (I-- > 0) {
								A.push({
									flags: l
								})
							}
						}
						for (w = 0; w < S; w++) {
							switch (A[w].flags & 18) {
								case 0:
									c += (e[s] << 24 | e[s + 1] << 16) >> 16;
									s += 2;
									break;
								case 2:
									c -= e[s++];
									break;
								case 18:
									c += e[s++];
									break
							}
							A[w].x = c
						}
						for (w = 0; w < S; w++) {
							switch (A[w].flags & 36) {
								case 0:
									h += (e[s] << 24 | e[s + 1] << 16) >> 16;
									s += 2;
									break;
								case 4:
									h -= e[s++];
									break;
								case 36:
									h += e[s++];
									break
							}
							A[w].y = h
						}
						var B = 0;
						for (s = 0; s < o; s++) {
							var R = k[s];
							var T = A.slice(B, R + 1);
							if (T[0].flags & 1) {
								T.push(T[0])
							} else if (T[T.length - 1].flags & 1) {
								T.unshift(T[T.length - 1])
							} else {
								var O = {
									flags: 1,
									x: (T[0].x + T[T.length - 1].x) / 2,
									y: (T[0].y + T[T.length - 1].y) / 2
								};
								T.unshift(O);
								T.push(O)
							}
							a(T[0].x, T[0].y);
							for (w = 1, C = T.length; w < C; w++) {
								if (T[w].flags & 1) {
									i(T[w].x, T[w].y)
								} else if (T[w + 1].flags & 1) {
									n(T[w].x, T[w].y, T[w + 1].x, T[w + 1].y);
									w++
								} else {
									n(T[w].x, T[w].y, (T[w].x + T[w + 1].x) / 2, (T[w].y + T[w + 1].y) / 2)
								}
							}
							B = R + 1
						}
					}
				}

				function v(e, t, r) {
					var a = [];
					var i = 0,
						n = 0;
					var s = 0;

					function o(e, r) {
						t.push({
							cmd: "moveTo",
							args: [e, r]
						})
					}

					function c(e, r) {
						t.push({
							cmd: "lineTo",
							args: [e, r]
						})
					}

					function h(e, r, a, i, n, s) {
						t.push({
							cmd: "bezierCurveTo",
							args: [e, r, a, i, n, s]
						})
					}

					function f(e) {
						var g = 0;
						while (g < e.length) {
							var p = false;
							var m = e[g++];
							var b, y, k, w, C, x, S, A, I;
							switch (m) {
								case 1:
									s += a.length >> 1;
									p = true;
									break;
								case 3:
									s += a.length >> 1;
									p = true;
									break;
								case 4:
									n += a.pop();
									o(i, n);
									p = true;
									break;
								case 5:
									while (a.length > 0) {
										i += a.shift();
										n += a.shift();
										c(i, n)
									}
									break;
								case 6:
									while (a.length > 0) {
										i += a.shift();
										c(i, n);
										if (a.length === 0) {
											break
										}
										n += a.shift();
										c(i, n)
									}
									break;
								case 7:
									while (a.length > 0) {
										n += a.shift();
										c(i, n);
										if (a.length === 0) {
											break
										}
										i += a.shift();
										c(i, n)
									}
									break;
								case 8:
									while (a.length > 0) {
										b = i + a.shift();
										k = n + a.shift();
										y = b + a.shift();
										w = k + a.shift();
										i = y + a.shift();
										n = w + a.shift();
										h(b, k, y, w, i, n)
									}
									break;
								case 10:
									A = a.pop() + r.subrsBias;
									I = r.subrs[A];
									if (I) {
										f(I)
									}
									break;
								case 11:
									return;
								case 12:
									m = e[g++];
									switch (m) {
										case 34:
											b = i + a.shift();
											y = b + a.shift();
											C = n + a.shift();
											i = y + a.shift();
											h(b, n, y, C, i, C);
											b = i + a.shift();
											y = b + a.shift();
											i = y + a.shift();
											h(b, C, y, n, i, n);
											break;
										case 35:
											b = i + a.shift();
											k = n + a.shift();
											y = b + a.shift();
											w = k + a.shift();
											i = y + a.shift();
											n = w + a.shift();
											h(b, k, y, w, i, n);
											b = i + a.shift();
											k = n + a.shift();
											y = b + a.shift();
											w = k + a.shift();
											i = y + a.shift();
											n = w + a.shift();
											h(b, k, y, w, i, n);
											a.pop();
											break;
										case 36:
											b = i + a.shift();
											C = n + a.shift();
											y = b + a.shift();
											x = C + a.shift();
											i = y + a.shift();
											h(b, C, y, x, i, x);
											b = i + a.shift();
											y = b + a.shift();
											S = x + a.shift();
											i = y + a.shift();
											h(b, x, y, S, i, n);
											break;
										case 37:
											var B = i,
												R = n;
											b = i + a.shift();
											k = n + a.shift();
											y = b + a.shift();
											w = k + a.shift();
											i = y + a.shift();
											n = w + a.shift();
											h(b, k, y, w, i, n);
											b = i + a.shift();
											k = n + a.shift();
											y = b + a.shift();
											w = k + a.shift();
											i = y;
											n = w;
											if (Math.abs(i - B) > Math.abs(n - R)) {
												i += a.shift()
											} else {
												n += a.shift()
											}
											h(b, k, y, w, i, n);
											break;
										default:
											l("unknown operator: 12 " + m)
									}
									break;
								case 14:
									if (a.length >= 4) {
										var T = a.pop();
										var O = a.pop();
										n = a.pop();
										i = a.pop();
										t.push({
											cmd: "save"
										});
										t.push({
											cmd: "translate",
											args: [i, n]
										});
										var P = d(r.cmap, String.fromCharCode(r.glyphNameMap[u[T]]));
										v(r.glyphs[P.glyphId], t, r);
										t.push({
											cmd: "restore"
										});
										P = d(r.cmap, String.fromCharCode(r.glyphNameMap[u[O]]));
										v(r.glyphs[P.glyphId], t, r)
									}
									return;
								case 18:
									s += a.length >> 1;
									p = true;
									break;
								case 19:
									s += a.length >> 1;
									g += s + 7 >> 3;
									p = true;
									break;
								case 20:
									s += a.length >> 1;
									g += s + 7 >> 3;
									p = true;
									break;
								case 21:
									n += a.pop();
									i += a.pop();
									o(i, n);
									p = true;
									break;
								case 22:
									i += a.pop();
									o(i, n);
									p = true;
									break;
								case 23:
									s += a.length >> 1;
									p = true;
									break;
								case 24:
									while (a.length > 2) {
										b = i + a.shift();
										k = n + a.shift();
										y = b + a.shift();
										w = k + a.shift();
										i = y + a.shift();
										n = w + a.shift();
										h(b, k, y, w, i, n)
									}
									i += a.shift();
									n += a.shift();
									c(i, n);
									break;
								case 25:
									while (a.length > 6) {
										i += a.shift();
										n += a.shift();
										c(i, n)
									}
									b = i + a.shift();
									k = n + a.shift();
									y = b + a.shift();
									w = k + a.shift();
									i = y + a.shift();
									n = w + a.shift();
									h(b, k, y, w, i, n);
									break;
								case 26:
									if (a.length % 2) {
										i += a.shift()
									}
									while (a.length > 0) {
										b = i;
										k = n + a.shift();
										y = b + a.shift();
										w = k + a.shift();
										i = y;
										n = w + a.shift();
										h(b, k, y, w, i, n)
									}
									break;
								case 27:
									if (a.length % 2) {
										n += a.shift()
									}
									while (a.length > 0) {
										b = i + a.shift();
										k = n;
										y = b + a.shift();
										w = k + a.shift();
										i = y + a.shift();
										n = w;
										h(b, k, y, w, i, n)
									}
									break;
								case 28:
									a.push((e[g] << 24 | e[g + 1] << 16) >> 16);
									g += 2;
									break;
								case 29:
									A = a.pop() + r.gsubrsBias;
									I = r.gsubrs[A];
									if (I) {
										f(I)
									}
									break;
								case 30:
									while (a.length > 0) {
										b = i;
										k = n + a.shift();
										y = b + a.shift();
										w = k + a.shift();
										i = y + a.shift();
										n = w + (a.length === 1 ? a.shift() : 0);
										h(b, k, y, w, i, n);
										if (a.length === 0) {
											break
										}
										b = i + a.shift();
										k = n;
										y = b + a.shift();
										w = k + a.shift();
										n = w + a.shift();
										i = y + (a.length === 1 ? a.shift() : 0);
										h(b, k, y, w, i, n)
									}
									break;
								case 31:
									while (a.length > 0) {
										b = i + a.shift();
										k = n;
										y = b + a.shift();
										w = k + a.shift();
										n = w + a.shift();
										i = y + (a.length === 1 ? a.shift() : 0);
										h(b, k, y, w, i, n);
										if (a.length === 0) {
											break
										}
										b = i;
										k = n + a.shift();
										y = b + a.shift();
										w = k + a.shift();
										i = y + a.shift();
										n = w + (a.length === 1 ? a.shift() : 0);
										h(b, k, y, w, i, n)
									}
									break;
								default:
									if (m < 32) {
										l("unknown operator: " + m)
									}
									if (m < 247) {
										a.push(m - 139)
									} else if (m < 251) {
										a.push((m - 247) * 256 + e[g++] + 108)
									} else if (m < 255) {
										a.push(-(m - 251) * 256 - e[g++] - 108)
									} else {
										a.push((e[g] << 24 | e[g + 1] << 16 | e[g + 2] << 8 | e[g + 3]) / 65536);
										g += 4
									}
									break
							}
							if (p) {
								a.length = 0
							}
						}
					}
					f(e)
				}
				var p = "";

				function m(e) {
					this.compiledGlyphs = Object.create(null);
					this.compiledCharCodeToGlyphId = Object.create(null);
					this.fontMatrix = e
				}
				m.prototype = {
					getPathJs: function (e) {
						var t = d(this.cmap, e);
						var r = this.compiledGlyphs[t.glyphId];
						if (!r) {
							r = this.compileGlyph(this.glyphs[t.glyphId]);
							this.compiledGlyphs[t.glyphId] = r
						}
						if (this.compiledCharCodeToGlyphId[t.charCode] === undefined) {
							this.compiledCharCodeToGlyphId[t.charCode] = t.glyphId
						}
						return r
					},
					compileGlyph: function (e) {
						if (!e || e.length === 0 || e[0] === 14) {
							return p
						}
						var t = [];
						t.push({
							cmd: "save"
						});
						t.push({
							cmd: "transform",
							args: this.fontMatrix.slice()
						});
						t.push({
							cmd: "scale",
							args: ["size", "-size"]
						});
						this.compileGlyphImpl(e, t);
						t.push({
							cmd: "restore"
						});
						return t
					},
					compileGlyphImpl: function () {
						l("Children classes should implement this.")
					},
					hasBuiltPath: function (e) {
						var t = d(this.cmap, e);
						return this.compiledGlyphs[t.glyphId] !== undefined && this.compiledCharCodeToGlyphId[t.charCode] !== undefined
					}
				};

				function b(e, t, r) {
					r = r || [488e-6, 0, 0, 488e-6, 0, 0];
					m.call(this, r);
					this.glyphs = e;
					this.cmap = t
				}
				s.inherit(b, m, {
					compileGlyphImpl: function (e, t) {
						g(e, t, this)
					}
				});

				function y(e, t, r, a) {
					r = r || [.001, 0, 0, .001, 0, 0];
					m.call(this, r);
					this.glyphs = e.glyphs;
					this.gsubrs = e.gsubrs || [];
					this.subrs = e.subrs || [];
					this.cmap = t;
					this.glyphNameMap = a || h();
					this.gsubrsBias = this.gsubrs.length < 1240 ? 107 : this.gsubrs.length < 33900 ? 1131 : 32768;
					this.subrsBias = this.subrs.length < 1240 ? 107 : this.subrs.length < 33900 ? 1131 : 32768
				}
				s.inherit(y, m, {
					compileGlyphImpl: function (e, t) {
						v(e, t, this)
					}
				});
				return {
					create: function e(s, l) {
						var c = new Uint8Array(s.data);
						var h, u, f, d, g, v;
						var p = r(c, 4);
						for (var m = 0, k = 12; m < p; m++, k += 16) {
							var w = o(c.subarray(k, k + 4));
							var C = t(c, k + 8);
							var x = t(c, k + 12);
							switch (w) {
								case "cmap":
									h = a(c, C, C + x);
									break;
								case "glyf":
									u = c.subarray(C, C + x);
									break;
								case "loca":
									f = c.subarray(C, C + x);
									break;
								case "head":
									v = r(c, C + 18);
									g = r(c, C + 50);
									break;
								case "CFF ":
									d = i(c, C, C + x, l);
									break
							}
						}
						if (u) {
							var S = !v ? s.fontMatrix : [1 / v, 0, 0, 1 / v, 0, 0];
							return new b(n(u, f, g), h, S)
						}
						return new y(d, h, s.fontMatrix, s.glyphNameMap)
					}
				}
			}();
			e.FontRendererFactory = d
		});
		(function (e, t) {
			t(e.pdfjsCoreParser = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreStream)
		})(this, function (e, t, r, a) {
			var i = t.MissingDataException;
			var n = t.StreamType;
			var s = t.assert;
			var o = t.error;
			var l = t.info;
			var c = t.isArray;
			var h = t.isInt;
			var u = t.isNum;
			var f = t.isString;
			var d = t.warn;
			var g = r.Cmd;
			var v = r.Dict;
			var p = r.Name;
			var m = r.Ref;
			var b = r.isCmd;
			var y = r.isDict;
			var k = r.isName;
			var w = a.Ascii85Stream;
			var C = a.AsciiHexStream;
			var x = a.CCITTFaxStream;
			var S = a.FlateStream;
			var A = a.Jbig2Stream;
			var I = a.JpegStream;
			var B = a.JpxStream;
			var R = a.LZWStream;
			var T = a.NullStream;
			var O = a.PredictorStream;
			var P = a.RunLengthStream;
			var E = {};

			function M(e) {
				return e === E
			}
			var L = 1e3;
			var D = function e() {
				function t(e, t, r, a) {
					this.lexer = e;
					this.allowStreams = t;
					this.xref = r;
					this.recoveryMode = a || false;
					this.imageCache = Object.create(null);
					this.refill()
				}
				t.prototype = {
					refill: function e() {
						this.buf1 = this.lexer.getObj();
						this.buf2 = this.lexer.getObj()
					},
					shift: function e() {
						if (b(this.buf2, "ID")) {
							this.buf1 = this.buf2;
							this.buf2 = null
						} else {
							this.buf1 = this.buf2;
							this.buf2 = this.lexer.getObj()
						}
					},
					tryShift: function e() {
						try {
							this.shift();
							return true
						} catch (e) {
							if (e instanceof i) {
								throw e
							}
							return false
						}
					},
					getObj: function e(t) {
						var r = this.buf1;
						this.shift();
						if (r instanceof g) {
							switch (r.cmd) {
								case "BI":
									return this.makeInlineImage(t);
								case "[":
									var a = [];
									while (!b(this.buf1, "]") && !M(this.buf1)) {
										a.push(this.getObj(t))
									}
									if (M(this.buf1)) {
										if (!this.recoveryMode) {
											o("End of file inside array")
										}
										return a
									}
									this.shift();
									return a;
								case "<<":
									var i = new v(this.xref);
									while (!b(this.buf1, ">>") && !M(this.buf1)) {
										if (!k(this.buf1)) {
											l("Malformed dictionary: key must be a name object");
											this.shift();
											continue
										}
										var n = this.buf1.name;
										this.shift();
										if (M(this.buf1)) {
											break
										}
										i.set(n, this.getObj(t))
									}
									if (M(this.buf1)) {
										if (!this.recoveryMode) {
											o("End of file inside dictionary")
										}
										return i
									}
									if (b(this.buf2, "stream")) {
										return this.allowStreams ? this.makeStream(i, t) : i
									}
									this.shift();
									return i;
								default:
									return r
							}
						}
						if (h(r)) {
							var s = r;
							if (h(this.buf1) && b(this.buf2, "R")) {
								var c = new m(s, this.buf1);
								this.shift();
								this.shift();
								return c
							}
							return s
						}
						if (f(r)) {
							var u = r;
							if (t) {
								u = t.decryptString(u)
							}
							return u
						}
						return r
					},
					findDefaultInlineStreamEnd: function e(t) {
						var r = 69,
							a = 73,
							i = 32,
							n = 10,
							o = 13;
						var l = t.pos,
							c = 0,
							h, u, f, d;
						while ((h = t.getByte()) !== -1) {
							if (c === 0) {
								c = h === r ? 1 : 0
							} else if (c === 1) {
								c = h === a ? 2 : 0
							} else {
								s(c === 2);
								if (h === i || h === n || h === o) {
									f = 5;
									d = t.peekBytes(f);
									for (u = 0; u < f; u++) {
										h = d[u];
										if (h !== n && h !== o && (h < i || h > 127)) {
											c = 0;
											break
										}
									}
									if (c === 2) {
										break
									}
								} else {
									c = 0
								}
							}
						}
						return t.pos - 4 - l
					},
					findDCTDecodeInlineStreamEnd: function e(t) {
						var r = t.pos,
							a = false,
							i, n, s;
						while ((i = t.getByte()) !== -1) {
							if (i !== 255) {
								continue
							}
							switch (t.getByte()) {
								case 0:
									break;
								case 255:
									t.skip(-1);
									break;
								case 217:
									a = true;
									break;
								case 192:
								case 193:
								case 194:
								case 195:
								case 197:
								case 198:
								case 199:
								case 201:
								case 202:
								case 203:
								case 205:
								case 206:
								case 207:
								case 196:
								case 204:
								case 218:
								case 219:
								case 220:
								case 221:
								case 222:
								case 223:
								case 224:
								case 225:
								case 226:
								case 227:
								case 228:
								case 229:
								case 230:
								case 231:
								case 232:
								case 233:
								case 234:
								case 235:
								case 236:
								case 237:
								case 238:
								case 239:
								case 254:
									n = t.getUint16();
									if (n > 2) {
										t.skip(n - 2)
									} else {
										t.skip(-2)
									}
									break
							}
							if (a) {
								break
							}
						}
						s = t.pos - r;
						if (i === -1) {
							d("Inline DCTDecode image stream: " + "EOI marker not found, searching for /EI/ instead.");
							t.skip(-s);
							return this.findDefaultInlineStreamEnd(t)
						}
						this.inlineStreamSkipEI(t);
						return s
					},
					findASCII85DecodeInlineStreamEnd: function e(t) {
						var r = 126,
							a = 62;
						var i = t.pos,
							n, s;
						while ((n = t.getByte()) !== -1) {
							if (n === r && t.peekByte() === a) {
								t.skip();
								break
							}
						}
						s = t.pos - i;
						if (n === -1) {
							d("Inline ASCII85Decode image stream: " + "EOD marker not found, searching for /EI/ instead.");
							t.skip(-s);
							return this.findDefaultInlineStreamEnd(t)
						}
						this.inlineStreamSkipEI(t);
						return s
					},
					findASCIIHexDecodeInlineStreamEnd: function e(t) {
						var r = 62;
						var a = t.pos,
							i, n;
						while ((i = t.getByte()) !== -1) {
							if (i === r) {
								break
							}
						}
						n = t.pos - a;
						if (i === -1) {
							d("Inline ASCIIHexDecode image stream: " + "EOD marker not found, searching for /EI/ instead.");
							t.skip(-n);
							return this.findDefaultInlineStreamEnd(t)
						}
						this.inlineStreamSkipEI(t);
						return n
					},
					inlineStreamSkipEI: function e(t) {
						var r = 69,
							a = 73;
						var i = 0,
							n;
						while ((n = t.getByte()) !== -1) {
							if (i === 0) {
								i = n === r ? 1 : 0
							} else if (i === 1) {
								i = n === a ? 2 : 0
							} else if (i === 2) {
								break
							}
						}
					},
					makeInlineImage: function e(t) {
						var r = this.lexer;
						var a = r.stream;
						var i = new v(this.xref);
						while (!b(this.buf1, "ID") && !M(this.buf1)) {
							if (!k(this.buf1)) {
								o("Dictionary key must be a name object")
							}
							var n = this.buf1.name;
							this.shift();
							if (M(this.buf1)) {
								break
							}
							i.set(n, this.getObj(t))
						}
						var s = i.get("Filter", "F"),
							l;
						if (k(s)) {
							l = s.name
						} else if (c(s)) {
							var h = this.xref.fetchIfRef(s[0]);
							if (k(h)) {
								l = h.name
							}
						}
						var u = a.pos,
							f, d, p;
						if (l === "DCTDecode" || l === "DCT") {
							f = this.findDCTDecodeInlineStreamEnd(a)
						} else if (l === "ASCII85Decide" || l === "A85") {
							f = this.findASCII85DecodeInlineStreamEnd(a)
						} else if (l === "ASCIIHexDecode" || l === "AHx") {
							f = this.findASCIIHexDecodeInlineStreamEnd(a)
						} else {
							f = this.findDefaultInlineStreamEnd(a)
						}
						var m = a.makeSubStream(u, f, i);
						var y;
						if (f < L) {
							var w = m.getBytes();
							m.reset();
							var C = 1;
							var x = 0;
							for (d = 0, p = w.length; d < p; ++d) {
								C += w[d] & 255;
								x += C
							}
							y = x % 65521 << 16 | C % 65521;
							if (this.imageCache.adler32 === y) {
								this.buf2 = g.get("EI");
								this.shift();
								this.imageCache[y].reset();
								return this.imageCache[y]
							}
						}
						if (t) {
							m = t.createStream(m, f)
						}
						m = this.filter(m, i, f);
						m.dict = i;
						if (y !== undefined) {
							m.cacheKey = "inline_" + f + "_" + y;
							this.imageCache[y] = m
						}
						this.buf2 = g.get("EI");
						this.shift();
						return m
					},
					makeStream: function e(t, r) {
						var a = this.lexer;
						var i = a.stream;
						a.skipToNextLine();
						var n = i.pos - 1;
						var s = t.get("Length");
						if (!h(s)) {
							l("Bad " + s + " attribute in stream");
							s = 0
						}
						i.pos = n + s;
						a.nextChar();
						if (this.tryShift() && b(this.buf2, "endstream")) {
							this.shift()
						} else {
							i.pos = n;
							var c = 2048;
							var u = 9;
							var f = [101, 110, 100, 115, 116, 114, 101, 97, 109];
							var d = 0,
								g = false,
								v, p;
							while (i.pos < i.end) {
								var m = i.peekBytes(c);
								var y = m.length - u;
								if (y <= 0) {
									break
								}
								g = false;
								v = 0;
								while (v < y) {
									p = 0;
									while (p < u && m[v + p] === f[p]) {
										p++
									}
									if (p >= u) {
										g = true;
										break
									}
									v++
								}
								if (g) {
									d += v;
									i.pos += v;
									break
								}
								d += y;
								i.pos += y
							}
							if (!g) {
								o("Missing endstream")
							}
							s = d;
							a.nextChar();
							this.shift();
							this.shift()
						}
						this.shift();
						i = i.makeSubStream(n, s, t);
						if (r) {
							i = r.createStream(i, s)
						}
						i = this.filter(i, t, s);
						i.dict = t;
						return i
					},
					filter: function e(t, r, a) {
						var i = r.get("Filter", "F");
						var n = r.get("DecodeParms", "DP");
						if (k(i)) {
							if (c(n)) {
								n = this.xref.fetchIfRef(n[0])
							}
							return this.makeFilter(t, i.name, a, n)
						}
						var s = a;
						if (c(i)) {
							var l = i;
							var h = n;
							for (var u = 0, f = l.length; u < f; ++u) {
								i = this.xref.fetchIfRef(l[u]);
								if (!k(i)) {
									o("Bad filter name: " + i)
								}
								n = null;
								if (c(h) && u in h) {
									n = this.xref.fetchIfRef(h[u])
								}
								t = this.makeFilter(t, i.name, s, n);
								s = null
							}
						}
						return t
					},
					makeFilter: function e(t, r, a, s) {
						if (a === 0) {
							d('Empty "' + r + '" stream.');
							return new T(t)
						}
						try {
							var o = this.xref.stats.streamTypes;
							if (r === "FlateDecode" || r === "Fl") {
								o[n.FLATE] = true;
								if (s) {
									return new O(new S(t, a), a, s)
								}
								return new S(t, a)
							}
							if (r === "LZWDecode" || r === "LZW") {
								o[n.LZW] = true;
								var l = 1;
								if (s) {
									if (s.has("EarlyChange")) {
										l = s.get("EarlyChange")
									}
									return new O(new R(t, a, l), a, s)
								}
								return new R(t, a, l)
							}
							if (r === "DCTDecode" || r === "DCT") {
								o[n.DCT] = true;
								return new I(t, a, t.dict, s)
							}
							if (r === "JPXDecode" || r === "JPX") {
								o[n.JPX] = true;
								return new B(t, a, t.dict, s)
							}
							if (r === "ASCII85Decode" || r === "A85") {
								o[n.A85] = true;
								return new w(t, a)
							}
							if (r === "ASCIIHexDecode" || r === "AHx") {
								o[n.AHX] = true;
								return new C(t, a)
							}
							if (r === "CCITTFaxDecode" || r === "CCF") {
								o[n.CCF] = true;
								return new x(t, a, s)
							}
							if (r === "RunLengthDecode" || r === "RL") {
								o[n.RL] = true;
								return new P(t, a)
							}
							if (r === "JBIG2Decode") {
								o[n.JBIG] = true;
								return new A(t, a, t.dict, s)
							}
							d('filter "' + r + '" not supported yet');
							return t
						} catch (e) {
							if (e instanceof i) {
								throw e
							}
							d('Invalid stream: "' + e + '"');
							return new T(t)
						}
					}
				};
				return t
			}();
			var F = function e() {
				function t(e, t) {
					this.stream = e;
					this.nextChar();
					this.strBuf = [];
					this.knownCommands = t
				}
				var r = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

				function a(e) {
					if (e >= 48 && e <= 57) {
						return e & 15
					}
					if (e >= 65 && e <= 70 || e >= 97 && e <= 102) {
						return (e & 15) + 9
					}
					return -1
				}
				t.prototype = {
					nextChar: function e() {
						return this.currentChar = this.stream.getByte()
					},
					peekChar: function e() {
						return this.stream.peekByte()
					},
					getNumber: function e() {
						var t = this.currentChar;
						var r = false;
						var a = 0;
						var i = 1;
						if (t === 45) {
							i = -1;
							t = this.nextChar();
							if (t === 45) {
								t = this.nextChar()
							}
						} else if (t === 43) {
							t = this.nextChar()
						}
						if (t === 46) {
							a = 10;
							t = this.nextChar()
						}
						if (t < 48 || t > 57) {
							o("Invalid number: " + String.fromCharCode(t));
							return 0
						}
						var n = t - 48;
						var s = 0;
						var l = 1;
						while ((t = this.nextChar()) >= 0) {
							if (48 <= t && t <= 57) {
								var c = t - 48;
								if (r) {
									s = s * 10 + c
								} else {
									if (a !== 0) {
										a *= 10
									}
									n = n * 10 + c
								}
							} else if (t === 46) {
								if (a === 0) {
									a = 1
								} else {
									break
								}
							} else if (t === 45) {
								d("Badly formatted number")
							} else if (t === 69 || t === 101) {
								t = this.peekChar();
								if (t === 43 || t === 45) {
									l = t === 45 ? -1 : 1;
									this.nextChar()
								} else if (t < 48 || t > 57) {
									break
								}
								r = true
							} else {
								break
							}
						}
						if (a !== 0) {
							n /= a
						}
						if (r) {
							n *= Math.pow(10, l * s)
						}
						return i * n
					},
					getString: function e() {
						var t = 1;
						var r = false;
						var a = this.strBuf;
						a.length = 0;
						var i = this.nextChar();
						while (true) {
							var n = false;
							switch (i | 0) {
								case -1:
									d("Unterminated string");
									r = true;
									break;
								case 40:
									++t;
									a.push("(");
									break;
								case 41:
									if (--t === 0) {
										this.nextChar();
										r = true
									} else {
										a.push(")")
									}
									break;
								case 92:
									i = this.nextChar();
									switch (i) {
										case -1:
											d("Unterminated string");
											r = true;
											break;
										case 110:
											a.push("\n");
											break;
										case 114:
											a.push("\r");
											break;
										case 116:
											a.push("\t");
											break;
										case 98:
											a.push("\b");
											break;
										case 102:
											a.push("\f");
											break;
										case 92:
										case 40:
										case 41:
											a.push(String.fromCharCode(i));
											break;
										case 48:
										case 49:
										case 50:
										case 51:
										case 52:
										case 53:
										case 54:
										case 55:
											var s = i & 15;
											i = this.nextChar();
											n = true;
											if (i >= 48 && i <= 55) {
												s = (s << 3) + (i & 15);
												i = this.nextChar();
												if (i >= 48 && i <= 55) {
													n = false;
													s = (s << 3) + (i & 15)
												}
											}
											a.push(String.fromCharCode(s));
											break;
										case 13:
											if (this.peekChar() === 10) {
												this.nextChar()
											}
											break;
										case 10:
											break;
										default:
											a.push(String.fromCharCode(i));
											break
									}
									break;
								default:
									a.push(String.fromCharCode(i));
									break
							}
							if (r) {
								break
							}
							if (!n) {
								i = this.nextChar()
							}
						}
						return a.join("")
					},
					getName: function e() {
						var t, i;
						var n = this.strBuf;
						n.length = 0;
						while ((t = this.nextChar()) >= 0 && !r[t]) {
							if (t === 35) {
								t = this.nextChar();
								if (r[t]) {
									d("Lexer_getName: " + "NUMBER SIGN (#) should be followed by a hexadecimal number.");
									n.push("#");
									break
								}
								var s = a(t);
								if (s !== -1) {
									i = t;
									t = this.nextChar();
									var o = a(t);
									if (o === -1) {
										d("Lexer_getName: Illegal digit (" + String.fromCharCode(t) + ") in hexadecimal number.");
										n.push("#", String.fromCharCode(i));
										if (r[t]) {
											break
										}
										n.push(String.fromCharCode(t));
										continue
									}
									n.push(String.fromCharCode(s << 4 | o))
								} else {
									n.push("#", String.fromCharCode(t))
								}
							} else {
								n.push(String.fromCharCode(t))
							}
						}
						if (n.length > 127) {
							d("name token is longer than allowed by the spec: " + n.length)
						}
						return p.get(n.join(""))
					},
					getHexString: function e() {
						var t = this.strBuf;
						t.length = 0;
						var i = this.currentChar;
						var n = true;
						var s;
						var o;
						while (true) {
							if (i < 0) {
								d("Unterminated hex string");
								break
							} else if (i === 62) {
								this.nextChar();
								break
							} else if (r[i] === 1) {
								i = this.nextChar();
								continue
							} else {
								if (n) {
									s = a(i);
									if (s === -1) {
										d('Ignoring invalid character "' + i + '" in hex string');
										i = this.nextChar();
										continue
									}
								} else {
									o = a(i);
									if (o === -1) {
										d('Ignoring invalid character "' + i + '" in hex string');
										i = this.nextChar();
										continue
									}
									t.push(String.fromCharCode(s << 4 | o))
								}
								n = !n;
								i = this.nextChar()
							}
						}
						return t.join("")
					},
					getObj: function e() {
						var t = false;
						var a = this.currentChar;
						while (true) {
							if (a < 0) {
								return E
							}
							if (t) {
								if (a === 10 || a === 13) {
									t = false
								}
							} else if (a === 37) {
								t = true
							} else if (r[a] !== 1) {
								break
							}
							a = this.nextChar()
						}
						switch (a | 0) {
							case 48:
							case 49:
							case 50:
							case 51:
							case 52:
							case 53:
							case 54:
							case 55:
							case 56:
							case 57:
							case 43:
							case 45:
							case 46:
								return this.getNumber();
							case 40:
								return this.getString();
							case 47:
								return this.getName();
							case 91:
								this.nextChar();
								return g.get("[");
							case 93:
								this.nextChar();
								return g.get("]");
							case 60:
								a = this.nextChar();
								if (a === 60) {
									this.nextChar();
									return g.get("<<")
								}
								return this.getHexString();
							case 62:
								a = this.nextChar();
								if (a === 62) {
									this.nextChar();
									return g.get(">>")
								}
								return g.get(">");
							case 123:
								this.nextChar();
								return g.get("{");
							case 125:
								this.nextChar();
								return g.get("}");
							case 41:
								o("Illegal character: " + a);
								break
						}
						var i = String.fromCharCode(a);
						var n = this.knownCommands;
						var s = n && n[i] !== undefined;
						while ((a = this.nextChar()) >= 0 && !r[a]) {
							var l = i + String.fromCharCode(a);
							if (s && n[l] === undefined) {
								break
							}
							if (i.length === 128) {
								o("Command token too long: " + i.length)
							}
							i = l;
							s = n && n[i] !== undefined
						}
						if (i === "true") {
							return true
						}
						if (i === "false") {
							return false
						}
						if (i === "null") {
							return null
						}
						return g.get(i)
					},
					skipToNextLine: function e() {
						var t = this.currentChar;
						while (t >= 0) {
							if (t === 13) {
								t = this.nextChar();
								if (t === 10) {
									this.nextChar()
								}
								break
							} else if (t === 10) {
								this.nextChar();
								break
							}
							t = this.nextChar()
						}
					}
				};
				return t
			}();
			var U = {
				create: function e(t) {
					function r(e, t) {
						var r = l.get(e);
						if (h(r) && (t ? r >= 0 : r > 0)) {
							return r
						}
						throw new Error('The "' + e + '" parameter in the linearization ' + "dictionary is invalid.")
					}

					function a() {
						var e = l.get("H"),
							t, r;
						if (c(e) && ((t = e.length) === 2 || t === 4)) {
							for (var a = 0; a < t; a++) {
								if (!(h(r = e[a]) && r > 0)) {
									throw new Error("Hint (" + a + ") in the linearization dictionary is invalid.")
								}
							}
							return e
						}
						throw new Error("Hint array in the linearization dictionary is invalid.")
					}
					var i = new D(new F(t), false, null);
					var n = i.getObj();
					var s = i.getObj();
					var o = i.getObj();
					var l = i.getObj();
					var f, d;
					if (!(h(n) && h(s) && b(o, "obj") && y(l) && u(f = l.get("Linearized")) && f > 0)) {
						return null
					} else if ((d = r("L")) !== t.length) {
						throw new Error('The "L" parameter in the linearization dictionary ' + "does not equal the stream length.")
					}
					return {
						length: d,
						hints: a(),
						objectNumberFirst: r("O"),
						endFirst: r("E"),
						numPages: r("N"),
						mainXRefEntriesOffset: r("T"),
						pageFirst: l.has("P") ? r("P", true) : 0
					}
				}
			};
			e.EOF = E;
			e.Lexer = F;
			e.Linearization = U;
			e.Parser = D;
			e.isEOF = M
		});
		(function (e, t) {
			t(e.pdfjsCoreType1Parser = {}, e.pdfjsSharedUtil, e.pdfjsCoreStream, e.pdfjsCoreEncodings)
		})(this, function (e, t, r, a) {
			var i = t.warn;
			var n = t.isSpace;
			var s = r.Stream;
			var o = a.getEncoding;
			var l = false;
			var c = function e() {
				var t = {
					hstem: [1],
					vstem: [3],
					vmoveto: [4],
					rlineto: [5],
					hlineto: [6],
					vlineto: [7],
					rrcurveto: [8],
					callsubr: [10],
					flex: [12, 35],
					drop: [12, 18],
					endchar: [14],
					rmoveto: [21],
					hmoveto: [22],
					vhcurveto: [30],
					hvcurveto: [31]
				};

				function r() {
					this.width = 0;
					this.lsb = 0;
					this.flexing = false;
					this.output = [];
					this.stack = []
				}
				r.prototype = {
					convert: function e(r, a, n) {
						var s = r.length;
						var o = false;
						var c, h, u;
						for (var f = 0; f < s; f++) {
							var d = r[f];
							if (d < 32) {
								if (d === 12) {
									d = (d << 8) + r[++f]
								}
								switch (d) {
									case 1:
										if (!l) {
											this.stack = [];
											break
										}
										o = this.executeCommand(2, t.hstem);
										break;
									case 3:
										if (!l) {
											this.stack = [];
											break
										}
										o = this.executeCommand(2, t.vstem);
										break;
									case 4:
										if (this.flexing) {
											if (this.stack.length < 1) {
												o = true;
												break
											}
											var g = this.stack.pop();
											this.stack.push(0, g);
											break
										}
										o = this.executeCommand(1, t.vmoveto);
										break;
									case 5:
										o = this.executeCommand(2, t.rlineto);
										break;
									case 6:
										o = this.executeCommand(1, t.hlineto);
										break;
									case 7:
										o = this.executeCommand(1, t.vlineto);
										break;
									case 8:
										o = this.executeCommand(6, t.rrcurveto);
										break;
									case 9:
										this.stack = [];
										break;
									case 10:
										if (this.stack.length < 1) {
											o = true;
											break
										}
										u = this.stack.pop();
										o = this.convert(a[u], a, n);
										break;
									case 11:
										return o;
									case 13:
										if (this.stack.length < 2) {
											o = true;
											break
										}
										c = this.stack.pop();
										h = this.stack.pop();
										this.lsb = h;
										this.width = c;
										this.stack.push(c, h);
										o = this.executeCommand(2, t.hmoveto);
										break;
									case 14:
										this.output.push(t.endchar[0]);
										break;
									case 21:
										if (this.flexing) {
											break
										}
										o = this.executeCommand(2, t.rmoveto);
										break;
									case 22:
										if (this.flexing) {
											this.stack.push(0);
											break
										}
										o = this.executeCommand(1, t.hmoveto);
										break;
									case 30:
										o = this.executeCommand(4, t.vhcurveto);
										break;
									case 31:
										o = this.executeCommand(4, t.hvcurveto);
										break;
									case (12 << 8) + 0:
										this.stack = [];
										break;
									case (12 << 8) + 1:
										if (!l) {
											this.stack = [];
											break
										}
										o = this.executeCommand(2, t.vstem);
										break;
									case (12 << 8) + 2:
										if (!l) {
											this.stack = [];
											break
										}
										o = this.executeCommand(2, t.hstem);
										break;
									case (12 << 8) + 6:
										if (n) {
											this.seac = this.stack.splice(-4, 4);
											o = this.executeCommand(0, t.endchar)
										} else {
											o = this.executeCommand(4, t.endchar)
										}
										break;
									case (12 << 8) + 7:
										if (this.stack.length < 4) {
											o = true;
											break
										}
										var v = this.stack.pop();
										c = this.stack.pop();
										var p = this.stack.pop();
										h = this.stack.pop();
										this.lsb = h;
										this.width = c;
										this.stack.push(c, h, p);
										o = this.executeCommand(3, t.rmoveto);
										break;
									case (12 << 8) + 12:
										if (this.stack.length < 2) {
											o = true;
											break
										}
										var m = this.stack.pop();
										var b = this.stack.pop();
										this.stack.push(b / m);
										break;
									case (12 << 8) + 16:
										if (this.stack.length < 2) {
											o = true;
											break
										}
										u = this.stack.pop();
										var y = this.stack.pop();
										if (u === 0 && y === 3) {
											var k = this.stack.splice(this.stack.length - 17, 17);
											this.stack.push(k[2] + k[0], k[3] + k[1], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14]);
											o = this.executeCommand(13, t.flex, true);
											this.flexing = false;
											this.stack.push(k[15], k[16])
										} else if (u === 1 && y === 0) {
											this.flexing = true
										}
										break;
									case (12 << 8) + 17:
										break;
									case (12 << 8) + 33:
										this.stack = [];
										break;
									default:
										i('Unknown type 1 charstring command of "' + d + '"');
										break
								}
								if (o) {
									break
								}
								continue
							} else if (d <= 246) {
								d = d - 139
							} else if (d <= 250) {
								d = (d - 247) * 256 + r[++f] + 108
							} else if (d <= 254) {
								d = -((d - 251) * 256) - r[++f] - 108
							} else {
								d = (r[++f] & 255) << 24 | (r[++f] & 255) << 16 | (r[++f] & 255) << 8 | (r[++f] & 255) << 0
							}
							this.stack.push(d)
						}
						return o
					},
					executeCommand: function (e, t, r) {
						var a = this.stack.length;
						if (e > a) {
							return true
						}
						var i = a - e;
						for (var n = i; n < a; n++) {
							var s = this.stack[n];
							if (s === (s | 0)) {
								this.output.push(28, s >> 8 & 255, s & 255)
							} else {
								s = 65536 * s | 0;
								this.output.push(255, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, s & 255)
							}
						}
						this.output.push.apply(this.output, t);
						if (r) {
							this.stack.splice(i, e)
						} else {
							this.stack.length = 0
						}
						return false
					}
				};
				return r
			}();
			var h = function e() {
				var t = 55665;
				var r = 4330;

				function a(e) {
					return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
				}

				function i(e, t, r) {
					if (r >= e.length) {
						return new Uint8Array(0)
					}
					var a = t | 0,
						i = 52845,
						n = 22719,
						s, o;
					for (s = 0; s < r; s++) {
						a = (e[s] + a) * i + n & (1 << 16) - 1
					}
					var l = e.length - r;
					var c = new Uint8Array(l);
					for (s = r, o = 0; o < l; s++, o++) {
						var h = e[s];
						c[o] = h ^ a >> 8;
						a = (h + a) * i + n & (1 << 16) - 1
					}
					return c
				}

				function h(e, t, r) {
					var i = t | 0,
						n = 52845,
						s = 22719;
					var o = e.length,
						l = o >>> 1;
					var c = new Uint8Array(l);
					var h, u;
					for (h = 0, u = 0; h < o; h++) {
						var f = e[h];
						if (!a(f)) {
							continue
						}
						h++;
						var d;
						while (h < o && !a(d = e[h])) {
							h++
						}
						if (h < o) {
							var g = parseInt(String.fromCharCode(f, d), 16);
							c[u++] = g ^ i >> 8;
							i = (g + i) * n + s & (1 << 16) - 1
						}
					}
					return Array.prototype.slice.call(c, r, u)
				}

				function u(e) {
					return e === 47 || e === 91 || e === 93 || e === 123 || e === 125 || e === 40 || e === 41
				}

				function f(e, r, n) {
					if (r) {
						var o = e.getBytes();
						var l = !(a(o[0]) && a(o[1]) && a(o[2]) && a(o[3]));
						e = new s(l ? i(o, t, 4) : h(o, t, 4))
					}
					this.seacAnalysisEnabled = !!n;
					this.stream = e;
					this.nextChar()
				}
				f.prototype = {
					readNumberArray: function e() {
						this.getToken();
						var t = [];
						while (true) {
							var r = this.getToken();
							if (r === null || r === "]" || r === "}") {
								break
							}
							t.push(parseFloat(r || 0))
						}
						return t
					},
					readNumber: function e() {
						var t = this.getToken();
						return parseFloat(t || 0)
					},
					readInt: function e() {
						var t = this.getToken();
						return parseInt(t || 0, 10) | 0
					},
					readBoolean: function e() {
						var t = this.getToken();
						return t === "true" ? 1 : 0
					},
					nextChar: function e() {
						return this.currentChar = this.stream.getByte()
					},
					getToken: function e() {
						var t = false;
						var r = this.currentChar;
						while (true) {
							if (r === -1) {
								return null
							}
							if (t) {
								if (r === 10 || r === 13) {
									t = false
								}
							} else if (r === 37) {
								t = true
							} else if (!n(r)) {
								break
							}
							r = this.nextChar()
						}
						if (u(r)) {
							this.nextChar();
							return String.fromCharCode(r)
						}
						var a = "";
						do {
							a += String.fromCharCode(r);
							r = this.nextChar()
						} while (r >= 0 && !n(r) && !u(r));
						return a
					},
					extractFontProgram: function e() {
						var t = this.stream;
						var a = [],
							n = [];
						var s = Object.create(null);
						s["lenIV"] = 4;
						var o = {
							subrs: [],
							charstrings: [],
							properties: {
								privateData: s
							}
						};
						var h, u, f, d, g;
						while ((h = this.getToken()) !== null) {
							if (h !== "/") {
								continue
							}
							h = this.getToken();
							switch (h) {
								case "CharStrings":
									this.getToken();
									this.getToken();
									this.getToken();
									this.getToken();
									while (true) {
										h = this.getToken();
										if (h === null || h === "end") {
											break
										}
										if (h !== "/") {
											continue
										}
										var v = this.getToken();
										u = this.readInt();
										this.getToken();
										f = t.makeSubStream(t.pos, u);
										d = o.properties.privateData["lenIV"];
										g = i(f.getBytes(), r, d);
										t.skip(u);
										this.nextChar();
										h = this.getToken();
										if (h === "noaccess") {
											this.getToken()
										}
										n.push({
											glyph: v,
											encoded: g
										})
									}
									break;
								case "Subrs":
									var p = this.readInt();
									this.getToken();
									while ((h = this.getToken()) === "dup") {
										var m = this.readInt();
										u = this.readInt();
										this.getToken();
										f = t.makeSubStream(t.pos, u);
										d = o.properties.privateData["lenIV"];
										g = i(f.getBytes(), r, d);
										t.skip(u);
										this.nextChar();
										h = this.getToken();
										if (h === "noaccess") {
											this.getToken()
										}
										a[m] = g
									}
									break;
								case "BlueValues":
								case "OtherBlues":
								case "FamilyBlues":
								case "FamilyOtherBlues":
									var b = this.readNumberArray();
									if (b.length > 0 && b.length % 2 === 0 && l) {
										o.properties.privateData[h] = b
									}
									break;
								case "StemSnapH":
								case "StemSnapV":
									o.properties.privateData[h] = this.readNumberArray();
									break;
								case "StdHW":
								case "StdVW":
									o.properties.privateData[h] = this.readNumberArray()[0];
									break;
								case "BlueShift":
								case "lenIV":
								case "BlueFuzz":
								case "BlueScale":
								case "LanguageGroup":
								case "ExpansionFactor":
									o.properties.privateData[h] = this.readNumber();
									break;
								case "ForceBold":
									o.properties.privateData[h] = this.readBoolean();
									break
							}
						}
						for (var y = 0; y < n.length; y++) {
							v = n[y].glyph;
							g = n[y].encoded;
							var k = new c;
							var w = k.convert(g, a, this.seacAnalysisEnabled);
							var C = k.output;
							if (w) {
								C = [14]
							}
							o.charstrings.push({
								glyphName: v,
								charstring: C,
								width: k.width,
								lsb: k.lsb,
								seac: k.seac
							})
						}
						return o
					},
					extractFontHeader: function e(t) {
						var r;
						while ((r = this.getToken()) !== null) {
							if (r !== "/") {
								continue
							}
							r = this.getToken();
							switch (r) {
								case "FontMatrix":
									var a = this.readNumberArray();
									t.fontMatrix = a;
									break;
								case "Encoding":
									var i = this.getToken();
									var n;
									if (!/^\d+$/.test(i)) {
										n = o(i)
									} else {
										n = [];
										var s = parseInt(i, 10) | 0;
										this.getToken();
										for (var l = 0; l < s; l++) {
											r = this.getToken();
											while (r !== "dup" && r !== "def") {
												r = this.getToken();
												if (r === null) {
													return
												}
											}
											if (r === "def") {
												break
											}
											var c = this.readInt();
											this.getToken();
											var h = this.getToken();
											n[c] = h;
											this.getToken()
										}
									}
									t.builtInEncoding = n;
									break;
								case "FontBBox":
									var u = this.readNumberArray();
									t.ascent = u[3];
									t.descent = u[1];
									t.ascentScaled = true;
									break
							}
						}
					}
				};
				return f
			}();
			e.Type1Parser = h
		});
		(function (e, t) {
			t(e.pdfjsCoreCMap = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreStream, e.pdfjsCoreParser)
		})(this, function (e, t, r, a, i) {
			var n = t.Util;
			var s = t.assert;
			var o = t.warn;
			var l = t.error;
			var c = t.isInt;
			var h = t.isString;
			var u = t.MissingDataException;
			var f = r.isName;
			var d = r.isCmd;
			var g = r.isStream;
			var v = a.StringStream;
			var p = i.Lexer;
			var m = i.isEOF;
			var b = ["Adobe-GB1-UCS2", "Adobe-CNS1-UCS2", "Adobe-Japan1-UCS2", "Adobe-Korea1-UCS2", "78-EUC-H", "78-EUC-V", "78-H", "78-RKSJ-H", "78-RKSJ-V", "78-V", "78ms-RKSJ-H", "78ms-RKSJ-V", "83pv-RKSJ-H", "90ms-RKSJ-H", "90ms-RKSJ-V", "90msp-RKSJ-H", "90msp-RKSJ-V", "90pv-RKSJ-H", "90pv-RKSJ-V", "Add-H", "Add-RKSJ-H", "Add-RKSJ-V", "Add-V", "Adobe-CNS1-0", "Adobe-CNS1-1", "Adobe-CNS1-2", "Adobe-CNS1-3", "Adobe-CNS1-4", "Adobe-CNS1-5", "Adobe-CNS1-6", "Adobe-GB1-0", "Adobe-GB1-1", "Adobe-GB1-2", "Adobe-GB1-3", "Adobe-GB1-4", "Adobe-GB1-5", "Adobe-Japan1-0", "Adobe-Japan1-1", "Adobe-Japan1-2", "Adobe-Japan1-3", "Adobe-Japan1-4", "Adobe-Japan1-5", "Adobe-Japan1-6", "Adobe-Korea1-0", "Adobe-Korea1-1", "Adobe-Korea1-2", "B5-H", "B5-V", "B5pc-H", "B5pc-V", "CNS-EUC-H", "CNS-EUC-V", "CNS1-H", "CNS1-V", "CNS2-H", "CNS2-V", "ETHK-B5-H", "ETHK-B5-V", "ETen-B5-H", "ETen-B5-V", "ETenms-B5-H", "ETenms-B5-V", "EUC-H", "EUC-V", "Ext-H", "Ext-RKSJ-H", "Ext-RKSJ-V", "Ext-V", "GB-EUC-H", "GB-EUC-V", "GB-H", "GB-V", "GBK-EUC-H", "GBK-EUC-V", "GBK2K-H", "GBK2K-V", "GBKp-EUC-H", "GBKp-EUC-V", "GBT-EUC-H", "GBT-EUC-V", "GBT-H", "GBT-V", "GBTpc-EUC-H", "GBTpc-EUC-V", "GBpc-EUC-H", "GBpc-EUC-V", "H", "HKdla-B5-H", "HKdla-B5-V", "HKdlb-B5-H", "HKdlb-B5-V", "HKgccs-B5-H", "HKgccs-B5-V", "HKm314-B5-H", "HKm314-B5-V", "HKm471-B5-H", "HKm471-B5-V", "HKscs-B5-H", "HKscs-B5-V", "Hankaku", "Hiragana", "KSC-EUC-H", "KSC-EUC-V", "KSC-H", "KSC-Johab-H", "KSC-Johab-V", "KSC-V", "KSCms-UHC-H", "KSCms-UHC-HW-H", "KSCms-UHC-HW-V", "KSCms-UHC-V", "KSCpc-EUC-H", "KSCpc-EUC-V", "Katakana", "NWP-H", "NWP-V", "RKSJ-H", "RKSJ-V", "Roman", "UniCNS-UCS2-H", "UniCNS-UCS2-V", "UniCNS-UTF16-H", "UniCNS-UTF16-V", "UniCNS-UTF32-H", "UniCNS-UTF32-V", "UniCNS-UTF8-H", "UniCNS-UTF8-V", "UniGB-UCS2-H", "UniGB-UCS2-V", "UniGB-UTF16-H", "UniGB-UTF16-V", "UniGB-UTF32-H", "UniGB-UTF32-V", "UniGB-UTF8-H", "UniGB-UTF8-V", "UniJIS-UCS2-H", "UniJIS-UCS2-HW-H", "UniJIS-UCS2-HW-V", "UniJIS-UCS2-V", "UniJIS-UTF16-H", "UniJIS-UTF16-V", "UniJIS-UTF32-H", "UniJIS-UTF32-V", "UniJIS-UTF8-H", "UniJIS-UTF8-V", "UniJIS2004-UTF16-H", "UniJIS2004-UTF16-V", "UniJIS2004-UTF32-H", "UniJIS2004-UTF32-V", "UniJIS2004-UTF8-H", "UniJIS2004-UTF8-V", "UniJISPro-UCS2-HW-V", "UniJISPro-UCS2-V", "UniJISPro-UTF8-V", "UniJISX0213-UTF32-H", "UniJISX0213-UTF32-V", "UniJISX02132004-UTF32-H", "UniJISX02132004-UTF32-V", "UniKS-UCS2-H", "UniKS-UCS2-V", "UniKS-UTF16-H", "UniKS-UTF16-V", "UniKS-UTF32-H", "UniKS-UTF32-V", "UniKS-UTF8-H", "UniKS-UTF8-V", "V", "WP-Symbol"];
			var y = function e() {
				function t(e) {
					this.codespaceRanges = [
						[],
						[],
						[],
						[]
					];
					this.numCodespaceRanges = 0;
					this._map = [];
					this.name = "";
					this.vertical = false;
					this.useCMap = null;
					this.builtInCMap = e
				}
				t.prototype = {
					addCodespaceRange: function (e, t, r) {
						this.codespaceRanges[e - 1].push(t, r);
						this.numCodespaceRanges++
					},
					mapCidRange: function (e, t, r) {
						while (e <= t) {
							this._map[e++] = r++
						}
					},
					mapBfRange: function (e, t, r) {
						var a = r.length - 1;
						while (e <= t) {
							this._map[e++] = r;
							r = r.substr(0, a) + String.fromCharCode(r.charCodeAt(a) + 1)
						}
					},
					mapBfRangeToArray: function (e, t, r) {
						var a = 0,
							i = r.length;
						while (e <= t && a < i) {
							this._map[e] = r[a++];
							++e
						}
					},
					mapOne: function (e, t) {
						this._map[e] = t
					},
					lookup: function (e) {
						return this._map[e]
					},
					contains: function (e) {
						return this._map[e] !== undefined
					},
					forEach: function (e) {
						var t = this._map;
						var r = t.length;
						var a;
						if (r <= 65536) {
							for (a = 0; a < r; a++) {
								if (t[a] !== undefined) {
									e(a, t[a])
								}
							}
						} else {
							for (a in this._map) {
								e(a, t[a])
							}
						}
					},
					charCodeOf: function (e) {
						return this._map.indexOf(e)
					},
					getMap: function () {
						return this._map
					},
					readCharCode: function (e, t, r) {
						var a = 0;
						var i = this.codespaceRanges;
						var n = this.codespaceRanges.length;
						for (var s = 0; s < n; s++) {
							a = (a << 8 | e.charCodeAt(t + s)) >>> 0;
							var o = i[s];
							for (var l = 0, c = o.length; l < c;) {
								var h = o[l++];
								var u = o[l++];
								if (a >= h && a <= u) {
									r.charcode = a;
									r.length = s + 1;
									return
								}
							}
						}
						r.charcode = 0;
						r.length = 1
					},
					get length() {
						return this._map.length
					},
					get isIdentityCMap() {
						if (!(this.name === "Identity-H" || this.name === "Identity-V")) {
							return false
						}
						if (this._map.length !== 65536) {
							return false
						}
						for (var e = 0; e < 65536; e++) {
							if (this._map[e] !== e) {
								return false
							}
						}
						return true
					}
				};
				return t
			}();
			var k = function e() {
				function t(e, t) {
					y.call(this);
					this.vertical = e;
					this.addCodespaceRange(t, 0, 65535)
				}
				n.inherit(t, y, {});
				t.prototype = {
					addCodespaceRange: y.prototype.addCodespaceRange,
					mapCidRange: function (e, t, r) {
						l("should not call mapCidRange")
					},
					mapBfRange: function (e, t, r) {
						l("should not call mapBfRange")
					},
					mapBfRangeToArray: function (e, t, r) {
						l("should not call mapBfRangeToArray")
					},
					mapOne: function (e, t) {
						l("should not call mapCidOne")
					},
					lookup: function (e) {
						return c(e) && e <= 65535 ? e : undefined
					},
					contains: function (e) {
						return c(e) && e <= 65535
					},
					forEach: function (e) {
						for (var t = 0; t <= 65535; t++) {
							e(t, t)
						}
					},
					charCodeOf: function (e) {
						return c(e) && e <= 65535 ? e : -1
					},
					getMap: function () {
						var e = new Array(65536);
						for (var t = 0; t <= 65535; t++) {
							e[t] = t
						}
						return e
					},
					readCharCode: y.prototype.readCharCode,
					get length() {
						return 65536
					},
					get isIdentityCMap() {
						l("should not access .isIdentityCMap")
					}
				};
				return t
			}();
			var w = function e() {
				function t(e) {
					return new Promise(function (t, r) {
						var a = new XMLHttpRequest;
						a.open("GET", e, true);
						a.responseType = "arraybuffer";
						a.onreadystatechange = function () {
							if (a.readyState === XMLHttpRequest.DONE) {
								if (!a.response || a.status !== 200 && a.status !== 0) {
									r(new Error("Unable to get binary cMap at: " + e))
								} else {
									t(new Uint8Array(a.response))
								}
							}
						};
						a.send(null)
					})
				}

				function r(e, t) {
					var r = 0;
					for (var a = 0; a <= t; a++) {
						r = r << 8 | e[a]
					}
					return r >>> 0
				}

				function a(e, t) {
					if (t === 1) {
						return String.fromCharCode(e[0], e[1])
					}
					if (t === 3) {
						return String.fromCharCode(e[0], e[1], e[2], e[3])
					}
					return String.fromCharCode.apply(null, e.subarray(0, t + 1))
				}

				function i(e, t, r) {
					var a = 0;
					for (var i = r; i >= 0; i--) {
						a += e[i] + t[i];
						e[i] = a & 255;
						a >>= 8
					}
				}

				function n(e, t) {
					var r = 1;
					for (var a = t; a >= 0 && r > 0; a--) {
						r += e[a];
						e[a] = r & 255;
						r >>= 8
					}
				}
				var o = 16;
				var c = 19;

				function h(e) {
					this.buffer = e;
					this.pos = 0;
					this.end = e.length;
					this.tmpBuf = new Uint8Array(c)
				}
				h.prototype = {
					readByte: function () {
						if (this.pos >= this.end) {
							return -1
						}
						return this.buffer[this.pos++]
					},
					readNumber: function () {
						var e = 0;
						var t;
						do {
							var r = this.readByte();
							if (r < 0) {
								l("unexpected EOF in bcmap")
							}
							t = !(r & 128);
							e = e << 7 | r & 127
						} while (!t);
						return e
					},
					readSigned: function () {
						var e = this.readNumber();
						return e & 1 ? ~(e >>> 1) : e >>> 1
					},
					readHex: function (e, t) {
						e.set(this.buffer.subarray(this.pos, this.pos + t + 1));
						this.pos += t + 1
					},
					readHexNumber: function (e, t) {
						var r;
						var a = this.tmpBuf,
							i = 0;
						do {
							var n = this.readByte();
							if (n < 0) {
								l("unexpected EOF in bcmap")
							}
							r = !(n & 128);
							a[i++] = n & 127
						} while (!r);
						var s = t,
							o = 0,
							c = 0;
						while (s >= 0) {
							while (c < 8 && a.length > 0) {
								o = a[--i] << c | o;
								c += 7
							}
							e[s] = o & 255;
							s--;
							o >>= 8;
							c -= 8
						}
					},
					readHexSigned: function (e, t) {
						this.readHexNumber(e, t);
						var r = e[t] & 1 ? 255 : 0;
						var a = 0;
						for (var i = 0; i <= t; i++) {
							a = (a & 1) << 8 | e[i];
							e[i] = a >> 1 ^ r
						}
					},
					readString: function () {
						var e = this.readNumber();
						var t = "";
						for (var r = 0; r < e; r++) {
							t += String.fromCharCode(this.readNumber())
						}
						return t
					}
				};

				function u(e, c, u) {
					return t(e).then(function (e) {
						var t = new h(e);
						var f = t.readByte();
						c.vertical = !!(f & 1);
						var d = null;
						var g = new Uint8Array(o);
						var v = new Uint8Array(o);
						var p = new Uint8Array(o);
						var m = new Uint8Array(o);
						var b = new Uint8Array(o);
						var y;
						var k;
						while ((k = t.readByte()) >= 0) {
							var w = k >> 5;
							if (w === 7) {
								switch (k & 31) {
									case 0:
										t.readString();
										break;
									case 1:
										d = t.readString();
										break
								}
								continue
							}
							var C = !!(k & 16);
							var x = k & 15;
							s(x + 1 <= o);
							var S = 1;
							var A = t.readNumber();
							var I;
							switch (w) {
								case 0:
									t.readHex(g, x);
									t.readHexNumber(v, x);
									i(v, g, x);
									c.addCodespaceRange(x + 1, r(g, x), r(v, x));
									for (I = 1; I < A; I++) {
										n(v, x);
										t.readHexNumber(g, x);
										i(g, v, x);
										t.readHexNumber(v, x);
										i(v, g, x);
										c.addCodespaceRange(x + 1, r(g, x), r(v, x))
									}
									break;
								case 1:
									t.readHex(g, x);
									t.readHexNumber(v, x);
									i(v, g, x);
									y = t.readNumber();
									for (I = 1; I < A; I++) {
										n(v, x);
										t.readHexNumber(g, x);
										i(g, v, x);
										t.readHexNumber(v, x);
										i(v, g, x);
										y = t.readNumber()
									}
									break;
								case 2:
									t.readHex(p, x);
									y = t.readNumber();
									c.mapOne(r(p, x), y);
									for (I = 1; I < A; I++) {
										n(p, x);
										if (!C) {
											t.readHexNumber(b, x);
											i(p, b, x)
										}
										y = t.readSigned() + (y + 1);
										c.mapOne(r(p, x), y)
									}
									break;
								case 3:
									t.readHex(g, x);
									t.readHexNumber(v, x);
									i(v, g, x);
									y = t.readNumber();
									c.mapCidRange(r(g, x), r(v, x), y);
									for (I = 1; I < A; I++) {
										n(v, x);
										if (!C) {
											t.readHexNumber(g, x);
											i(g, v, x)
										} else {
											g.set(v)
										}
										t.readHexNumber(v, x);
										i(v, g, x);
										y = t.readNumber();
										c.mapCidRange(r(g, x), r(v, x), y)
									}
									break;
								case 4:
									t.readHex(p, S);
									t.readHex(m, x);
									c.mapOne(r(p, S), a(m, x));
									for (I = 1; I < A; I++) {
										n(p, S);
										if (!C) {
											t.readHexNumber(b, S);
											i(p, b, S)
										}
										n(m, x);
										t.readHexSigned(b, x);
										i(m, b, x);
										c.mapOne(r(p, S), a(m, x))
									}
									break;
								case 5:
									t.readHex(g, S);
									t.readHexNumber(v, S);
									i(v, g, S);
									t.readHex(m, x);
									c.mapBfRange(r(g, S), r(v, S), a(m, x));
									for (I = 1; I < A; I++) {
										n(v, S);
										if (!C) {
											t.readHexNumber(g, S);
											i(g, v, S)
										} else {
											g.set(v)
										}
										t.readHexNumber(v, S);
										i(v, g, S);
										t.readHex(m, x);
										c.mapBfRange(r(g, S), r(v, S), a(m, x))
									}
									break;
								default:
									l("Unknown type: " + w);
									break
							}
						}
						if (d) {
							return u(d)
						}
						return c
					})
				}

				function f() {}
				f.prototype = {
					read: u
				};
				return f
			}();
			var C = function e() {
				function t(e) {
					var t = 0;
					for (var r = 0; r < e.length; r++) {
						t = t << 8 | e.charCodeAt(r)
					}
					return t >>> 0
				}

				function r(e) {
					if (!h(e)) {
						l("Malformed CMap: expected string.")
					}
				}

				function a(e) {
					if (!c(e)) {
						l("Malformed CMap: expected int.")
					}
				}

				function i(e, a) {
					while (true) {
						var i = a.getObj();
						if (m(i)) {
							break
						}
						if (d(i, "endbfchar")) {
							return
						}
						r(i);
						var n = t(i);
						i = a.getObj();
						r(i);
						var s = i;
						e.mapOne(n, s)
					}
				}

				function n(e, a) {
					while (true) {
						var i = a.getObj();
						if (m(i)) {
							break
						}
						if (d(i, "endbfrange")) {
							return
						}
						r(i);
						var n = t(i);
						i = a.getObj();
						r(i);
						var s = t(i);
						i = a.getObj();
						if (c(i) || h(i)) {
							var o = c(i) ? String.fromCharCode(i) : i;
							e.mapBfRange(n, s, o)
						} else if (d(i, "[")) {
							i = a.getObj();
							var u = [];
							while (!d(i, "]") && !m(i)) {
								u.push(i);
								i = a.getObj()
							}
							e.mapBfRangeToArray(n, s, u)
						} else {
							break
						}
					}
					l("Invalid bf range.")
				}

				function C(e, i) {
					while (true) {
						var n = i.getObj();
						if (m(n)) {
							break
						}
						if (d(n, "endcidchar")) {
							return
						}
						r(n);
						var s = t(n);
						n = i.getObj();
						a(n);
						var o = n;
						e.mapOne(s, o)
					}
				}

				function x(e, i) {
					while (true) {
						var n = i.getObj();
						if (m(n)) {
							break
						}
						if (d(n, "endcidrange")) {
							return
						}
						r(n);
						var s = t(n);
						n = i.getObj();
						r(n);
						var o = t(n);
						n = i.getObj();
						a(n);
						var l = n;
						e.mapCidRange(s, o, l)
					}
				}

				function S(e, r) {
					while (true) {
						var a = r.getObj();
						if (m(a)) {
							break
						}
						if (d(a, "endcodespacerange")) {
							return
						}
						if (!h(a)) {
							break
						}
						var i = t(a);
						a = r.getObj();
						if (!h(a)) {
							break
						}
						var n = t(a);
						e.addCodespaceRange(a.length, i, n)
					}
					l("Invalid codespace range.")
				}

				function A(e, t) {
					var r = t.getObj();
					if (c(r)) {
						e.vertical = !!r
					}
				}

				function I(e, t) {
					var r = t.getObj();
					if (f(r) && h(r.name)) {
						e.name = r.name
					}
				}

				function B(e, t, r, a) {
					var s;
					var l;
					e: while (true) {
						try {
							var c = t.getObj();
							if (m(c)) {
								break
							} else if (f(c)) {
								if (c.name === "WMode") {
									A(e, t)
								} else if (c.name === "CMapName") {
									I(e, t)
								}
								s = c
							} else if (d(c)) {
								switch (c.cmd) {
									case "endcmap":
										break e;
									case "usecmap":
										if (f(s)) {
											l = s.name
										}
										break;
									case "begincodespacerange":
										S(e, t);
										break;
									case "beginbfchar":
										i(e, t);
										break;
									case "begincidchar":
										C(e, t);
										break;
									case "beginbfrange":
										n(e, t);
										break;
									case "begincidrange":
										x(e, t);
										break
								}
							}
						} catch (e) {
							if (e instanceof u) {
								throw e
							}
							o("Invalid cMap data: " + e);
							continue
						}
					}
					if (!a && l) {
						a = l
					}
					if (a) {
						return R(e, r, a)
					}
					return Promise.resolve(e)
				}

				function R(e, t, r) {
					return O(r, t).then(function (t) {
						e.useCMap = t;
						if (e.numCodespaceRanges === 0) {
							var r = e.useCMap.codespaceRanges;
							for (var a = 0; a < r.length; a++) {
								e.codespaceRanges[a] = r[a].slice()
							}
							e.numCodespaceRanges = e.useCMap.numCodespaceRanges
						}
						e.useCMap.forEach(function (t, r) {
							if (!e.contains(t)) {
								e.mapOne(t, e.useCMap.lookup(t))
							}
						});
						return e
					})
				}

				function T(e, t) {
					var r = t.url + e + ".bcmap";
					var a = new y(true);
					return (new w).read(r, a, function (e) {
						return R(a, t, e)
					})
				}

				function O(e, t) {
					if (e === "Identity-H") {
						return Promise.resolve(new k(false, 2))
					} else if (e === "Identity-V") {
						return Promise.resolve(new k(true, 2))
					}
					if (b.indexOf(e) === -1) {
						return Promise.reject(new Error("Unknown cMap name: " + e))
					}
					s(t, "built-in cMap parameters are not provided");
					if (t.packed) {
						return T(e, t)
					}
					return new Promise(function (r, a) {
						var i = t.url + e;
						var n = new XMLHttpRequest;
						n.onreadystatechange = function () {
							if (n.readyState === XMLHttpRequest.DONE) {
								if (n.status === 200 || n.status === 0) {
									var e = new y(true);
									var s = new p(new v(n.responseText));
									B(e, s, t, null).then(function (e) {
										r(e)
									})
								} else {
									a(new Error("Unable to get cMap at: " + i))
								}
							}
						};
						n.open("GET", i, true);
						n.send(null)
					})
				}
				return {
					create: function (e, t, r) {
						if (f(e)) {
							return O(e.name, t)
						} else if (g(e)) {
							var a = new y;
							var i = new p(e);
							return B(a, i, t, r).then(function (e) {
								if (e.isIdentityCMap) {
									return O(e.name, t)
								}
								return e
							})
						}
						return Promise.reject(new Error("Encoding required."))
					}
				}
			}();
			e.CMap = y;
			e.CMapFactory = C;
			e.IdentityCMap = k
		});
		(function (e, t) {
			t(e.pdfjsCoreFonts = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreStream, e.pdfjsCoreGlyphList, e.pdfjsCoreFontRenderer, e.pdfjsCoreEncodings, e.pdfjsCoreStandardFonts, e.pdfjsCoreUnicode, e.pdfjsCoreType1Parser, e.pdfjsCoreCFFParser)
		})(this, function (e, t, r, a, i, n, s, o, l, c, h) {
			var u = t.FONT_IDENTITY_MATRIX;
			var f = t.FontType;
			var d = t.assert;
			var g = t.bytesToString;
			var v = t.error;
			var p = t.info;
			var m = t.isArray;
			var b = t.isInt;
			var y = t.isNum;
			var k = t.readUint32;
			var w = t.shadow;
			var C = t.string32;
			var x = t.warn;
			var S = t.MissingDataException;
			var A = t.isSpace;
			var I = a.Stream;
			var B = i.getGlyphsUnicode;
			var R = i.getDingbatsGlyphsUnicode;
			var T = n.FontRendererFactory;
			var O = s.StandardEncoding;
			var P = s.MacRomanEncoding;
			var E = s.SymbolSetEncoding;
			var M = s.ZapfDingbatsEncoding;
			var L = s.getEncoding;
			var D = o.getStdFontMap;
			var F = o.getNonStdFontMap;
			var U = o.getGlyphMapForStandardFonts;
			var j = o.getSupplementalGlyphMapForArialBlack;
			var q = l.getUnicodeRangeFor;
			var N = l.mapSpecialUnicodeValues;
			var _ = l.getUnicodeForGlyph;
			var z = c.Type1Parser;
			var H = h.CFFStandardStrings;
			var G = h.CFFParser;
			var X = h.CFFCompiler;
			var W = h.CFF;
			var V = h.CFFHeader;
			var K = h.CFFTopDict;
			var Y = h.CFFPrivateDict;
			var J = h.CFFStrings;
			var Z = h.CFFIndex;
			var Q = h.CFFCharset;
			var $ = 57344;
			var ee = 63743;
			var te = false;
			var re = 1e3;
			var ae = false;
			var ie = {
				FixedPitch: 1,
				Serif: 2,
				Symbolic: 4,
				Script: 8,
				Nonsymbolic: 32,
				Italic: 64,
				AllCap: 65536,
				SmallCap: 131072,
				ForceBold: 262144
			};
			var ne = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];

			function se(e) {
				if (!e.fontMatrix) {
					return
				}
				if (e.fontMatrix[0] === u[0]) {
					return
				}
				var t = .001 / e.fontMatrix[0];
				var r = e.widths;
				for (var a in r) {
					r[a] *= t
				}
				e.defaultWidth *= t
			}

			function oe(e, t) {
				if (e.hasIncludedToUnicodeMap) {
					return
				}
				if (e.hasEncoding) {
					return
				}
				if (t === e.defaultEncoding) {
					return
				}
				if (e.toUnicode instanceof fe) {
					return
				}
				var r = [],
					a = B();
				for (var i in t) {
					var n = t[i];
					var s = _(n, a);
					if (s !== -1) {
						r[i] = String.fromCharCode(s)
					}
				}
				e.toUnicode.amend(r)
			}

			function le(e, t) {
				switch (e) {
					case "Type1":
						return t === "Type1C" ? f.TYPE1C : f.TYPE1;
					case "CIDFontType0":
						return t === "CIDFontType0C" ? f.CIDFONTTYPE0C : f.CIDFONTTYPE0;
					case "OpenType":
						return f.OPENTYPE;
					case "TrueType":
						return f.TRUETYPE;
					case "CIDFontType2":
						return f.CIDFONTTYPE2;
					case "MMType1":
						return f.MMTYPE1;
					case "Type0":
						return f.TYPE0;
					default:
						return f.UNKNOWN
				}
			}

			function ce(e, t) {
				if (t[e] !== undefined) {
					return e
				}
				var r = _(e, t);
				if (r !== -1) {
					for (var a in t) {
						if (t[a] === r) {
							return a
						}
					}
				}
				p("Unable to recover a standard glyph name for: " + e);
				return e
			}
			var he = function e() {
				function t(e, t, r, a, i, n, s, o) {
					this.fontChar = e;
					this.unicode = t;
					this.accent = r;
					this.width = a;
					this.vmetric = i;
					this.operatorListId = n;
					this.isSpace = s;
					this.isInFont = o
				}
				t.prototype.matchesForCache = function (e, t, r, a, i, n, s, o) {
					return this.fontChar === e && this.unicode === t && this.accent === r && this.width === a && this.vmetric === i && this.operatorListId === n && this.isSpace === s && this.isInFont === o
				};
				return t
			}();
			var ue = function e() {
				function t(e) {
					this._map = e
				}
				t.prototype = {
					get length() {
						return this._map.length
					},
					forEach: function (e) {
						for (var t in this._map) {
							e(t, this._map[t].charCodeAt(0))
						}
					},
					has: function (e) {
						return this._map[e] !== undefined
					},
					get: function (e) {
						return this._map[e]
					},
					charCodeOf: function (e) {
						return this._map.indexOf(e)
					},
					amend: function (e) {
						for (var t in e) {
							this._map[t] = e[t]
						}
					}
				};
				return t
			}();
			var fe = function e() {
				function t(e, t) {
					this.firstChar = e;
					this.lastChar = t
				}
				t.prototype = {
					get length() {
						return this.lastChar + 1 - this.firstChar
					},
					forEach: function (e) {
						for (var t = this.firstChar, r = this.lastChar; t <= r; t++) {
							e(t, t)
						}
					},
					has: function (e) {
						return this.firstChar <= e && e <= this.lastChar
					},
					get: function (e) {
						if (this.firstChar <= e && e <= this.lastChar) {
							return String.fromCharCode(e)
						}
						return undefined
					},
					charCodeOf: function (e) {
						return b(e) && e >= this.firstChar && e <= this.lastChar ? e : -1
					},
					amend: function (e) {
						v("Should not call amend()")
					}
				};
				return t
			}();
			var de = function e() {
				function t(e, t, r) {
					e[t] = r >> 8 & 255;
					e[t + 1] = r & 255
				}

				function r(e, t, r) {
					e[t] = r >> 24 & 255;
					e[t + 1] = r >> 16 & 255;
					e[t + 2] = r >> 8 & 255;
					e[t + 3] = r & 255
				}

				function a(e, t, r) {
					var a, i;
					if (r instanceof Uint8Array) {
						e.set(r, t)
					} else if (typeof r === "string") {
						for (a = 0, i = r.length; a < i; a++) {
							e[t++] = r.charCodeAt(a) & 255
						}
					} else {
						for (a = 0, i = r.length; a < i; a++) {
							e[t++] = r[a] & 255
						}
					}
				}

				function i(e) {
					this.sfnt = e;
					this.tables = Object.create(null)
				}
				i.getSearchParams = function e(t, r) {
					var a = 1,
						i = 0;
					while ((a ^ t) > a) {
						a <<= 1;
						i++
					}
					var n = a * r;
					return {
						range: n,
						entry: i,
						rangeShift: r * t - n
					}
				};
				var n = 12;
				var s = 16;
				i.prototype = {
					toArray: function e() {
						var o = this.sfnt;
						var l = this.tables;
						var c = Object.keys(l);
						c.sort();
						var h = c.length;
						var u, f, d, g, v;
						var p = n + h * s;
						var m = [p];
						for (u = 0; u < h; u++) {
							g = l[c[u]];
							var b = (g.length + 3 & ~3) >>> 0;
							p += b;
							m.push(p)
						}
						var y = new Uint8Array(p);
						for (u = 0; u < h; u++) {
							g = l[c[u]];
							a(y, m[u], g)
						}
						if (o === "true") {
							o = C(65536)
						}
						y[0] = o.charCodeAt(0) & 255;
						y[1] = o.charCodeAt(1) & 255;
						y[2] = o.charCodeAt(2) & 255;
						y[3] = o.charCodeAt(3) & 255;
						t(y, 4, h);
						var w = i.getSearchParams(h, 16);
						t(y, 6, w.range);
						t(y, 8, w.entry);
						t(y, 10, w.rangeShift);
						p = n;
						for (u = 0; u < h; u++) {
							v = c[u];
							y[p] = v.charCodeAt(0) & 255;
							y[p + 1] = v.charCodeAt(1) & 255;
							y[p + 2] = v.charCodeAt(2) & 255;
							y[p + 3] = v.charCodeAt(3) & 255;
							var x = 0;
							for (f = m[u], d = m[u + 1]; f < d; f += 4) {
								var S = k(y, f);
								x = x + S >>> 0
							}
							r(y, p + 4, x);
							r(y, p + 8, m[u]);
							r(y, p + 12, l[v].length);
							p += s
						}
						return y
					},
					addTable: function e(t, r) {
						if (t in this.tables) {
							throw new Error("Table " + t + " already exists")
						}
						this.tables[t] = r
					}
				};
				return i
			}();
			var ge = new Int32Array([0, 32, 127, 161, 173, 174, 1536, 1920, 2208, 4256, 6016, 6144, 7168, 7248, 8192, 8208, 8209, 8210, 8232, 8240, 8287, 8304, 9676, 9677, 12288, 12289, 43616, 43648, 65520, 65536]);
			var ve = function e() {
				function t(e, t, r) {
					var a, i, n;
					this.name = e;
					this.loadedName = r.loadedName;
					this.isType3Font = r.isType3Font;
					this.sizes = [];
					this.missingFile = false;
					this.glyphCache = Object.create(null);
					var s = e.split("+");
					s = s.length > 1 ? s[1] : s[0];
					s = s.split(/[-,_]/g)[0];
					this.isSerifFont = !!(r.flags & ie.Serif);
					this.isSymbolicFont = !!(r.flags & ie.Symbolic);
					this.isMonospace = !!(r.flags & ie.FixedPitch);
					var u = r.type;
					var d = r.subtype;
					this.type = u;
					this.fallbackName = this.isMonospace ? "monospace" : this.isSerifFont ? "serif" : "sans-serif";
					this.differences = r.differences;
					this.widths = r.widths;
					this.defaultWidth = r.defaultWidth;
					this.composite = r.composite;
					this.wideChars = r.wideChars;
					this.cMap = r.cMap;
					this.ascent = r.ascent / re;
					this.descent = r.descent / re;
					this.fontMatrix = r.fontMatrix;
					this.bbox = r.bbox;
					this.toUnicode = r.toUnicode;
					this.toFontChar = [];
					if (r.type === "Type3") {
						for (a = 0; a < 256; a++) {
							this.toFontChar[a] = this.differences[a] || r.defaultEncoding[a]
						}
						this.fontType = f.TYPE3;
						return
					}
					this.cidEncoding = r.cidEncoding;
					this.vertical = r.vertical;
					if (this.vertical) {
						this.vmetrics = r.vmetrics;
						this.defaultVMetrics = r.defaultVMetrics
					}
					var g;
					if (!t || t.isEmpty) {
						if (t) {
							x('Font file is empty in "' + e + '" (' + this.loadedName + ")")
						}
						this.missingFile = true;
						var m = e.replace(/[,_]/g, "-");
						var b = D(),
							y = F();
						var k = !!b[m] || !!(y[m] && b[y[m]]);
						m = b[m] || y[m] || m;
						this.bold = m.search(/bold/gi) !== -1;
						this.italic = m.search(/oblique/gi) !== -1 || m.search(/italic/gi) !== -1;
						this.black = e.search(/Black/g) !== -1;
						this.remeasure = Object.keys(this.widths).length > 0;
						if (k && u === "CIDFontType2" && r.cidEncoding.indexOf("Identity-") === 0) {
							var w = U();
							var C = [];
							for (a in w) {
								C[+a] = w[a]
							}
							if (/Arial-?Black/i.test(e)) {
								var S = j();
								for (a in S) {
									C[+a] = S[a]
								}
							}
							var A = this.toUnicode instanceof fe;
							if (!A) {
								this.toUnicode.forEach(function (e, t) {
									C[+e] = t
								})
							}
							this.toFontChar = C;
							this.toUnicode = new ue(C)
						} else if (/Symbol/i.test(m)) {
							this.toFontChar = h(E, B(), r.differences)
						} else if (/Dingbats/i.test(m)) {
							if (/Wingdings/i.test(e)) {
								x("Non-embedded Wingdings font, falling back to ZapfDingbats.")
							}
							this.toFontChar = h(M, R(), r.differences)
						} else if (k) {
							this.toFontChar = h(r.defaultEncoding, B(), r.differences)
						} else {
							g = B();
							this.toUnicode.forEach(function (e, t) {
								if (!this.composite) {
									i = r.differences[e] || r.defaultEncoding[e];
									n = _(i, g);
									if (n !== -1) {
										t = n
									}
								}
								this.toFontChar[e] = t
							}.bind(this))
						}
						this.loadedName = m.split("-")[0];
						this.loading = false;
						this.fontType = le(u, d);
						return
					}
					if (d === "Type1C") {
						if (u !== "Type1" && u !== "MMType1") {
							if (o(t)) {
								d = "TrueType"
							} else {
								u = "Type1"
							}
						} else if (l(t)) {
							u = d = "OpenType"
						}
					}
					if (d === "CIDFontType0C" && u !== "CIDFontType0") {
						u = "CIDFontType0"
					}
					if (d === "OpenType") {
						u = "OpenType"
					}
					if (u === "CIDFontType0") {
						if (c(t)) {
							d = "CIDFontType0"
						} else if (l(t)) {
							u = d = "OpenType"
						} else {
							d = "CIDFontType0C"
						}
					}
					var I;
					switch (u) {
						case "MMType1":
							p("MMType1 font (" + e + "), falling back to Type1.");
						case "Type1":
						case "CIDFontType0":
							this.mimetype = "font/opentype";
							var T = d === "Type1C" || d === "CIDFontType0C" ? new ye(t, r) : new be(e, t, r);
							se(r);
							I = this.convert(e, T, r);
							break;
						case "OpenType":
						case "TrueType":
						case "CIDFontType2":
							this.mimetype = "font/opentype";
							I = this.checkAndRepair(e, t, r);
							if (this.isOpenType) {
								se(r);
								u = "OpenType"
							}
							break;
						default:
							v("Font " + u + " is not supported");
							break
					}
					this.data = I;
					this.fontType = le(u, d);
					this.fontMatrix = r.fontMatrix;
					this.widths = r.widths;
					this.defaultWidth = r.defaultWidth;
					this.toUnicode = r.toUnicode;
					this.encoding = r.baseEncoding;
					this.seacMap = r.seacMap;
					this.loading = true
				}
				t.getFontID = function () {
					var e = 1;
					return function t() {
						return String(e++)
					}
				}();

				function r(e, t) {
					return (e << 8) + t
				}

				function a(e, t) {
					var r = (e << 8) + t;
					return r & 1 << 15 ? r - 65536 : r
				}

				function i(e, t, r, a) {
					return (e << 24) + (t << 16) + (r << 8) + a
				}

				function n(e) {
					return String.fromCharCode(e >> 8 & 255, e & 255)
				}

				function s(e) {
					e = e > 32767 ? 32767 : e < -32768 ? -32768 : e;
					return String.fromCharCode(e >> 8 & 255, e & 255)
				}

				function o(e) {
					var t = e.peekBytes(4);
					return k(t, 0) === 65536
				}

				function l(e) {
					var t = e.peekBytes(4);
					return g(t) === "OTTO"
				}

				function c(e) {
					var t = e.peekBytes(2);
					if (t[0] === 37 && t[1] === 33) {
						return true
					}
					if (t[0] === 128 && t[1] === 1) {
						return true
					}
					return false
				}

				function h(e, t, r) {
					var a = [],
						i;
					for (var n = 0, s = e.length; n < s; n++) {
						i = _(e[n], t);
						if (i !== -1) {
							a[n] = i
						}
					}
					for (var o in r) {
						i = _(r[o], t);
						if (i !== -1) {
							a[+o] = i
						}
					}
					return a
				}

				function m(e) {
					var t = 0,
						r = ge.length - 1;
					while (t < r) {
						var a = t + r + 1 >> 1;
						if (e < ge[a]) {
							r = a - 1
						} else {
							t = a
						}
					}
					return !(t & 1)
				}

				function b(e, t) {
					var r = t.toUnicode;
					var a = !!(t.flags & ie.Symbolic);
					var i = t.toUnicode instanceof fe;
					var n = Object.create(null);
					var s = [];
					var o = [];
					var l = $;
					for (var c in e) {
						c |= 0;
						var h = e[c];
						var u = c;
						var f = false;
						if (!i && r.has(c)) {
							f = true;
							var d = r.get(u);
							if (d.length === 1) {
								u = d.charCodeAt(0)
							}
						}
						if ((o[u] !== undefined || m(u) || a && !f) && l <= ee) {
							do {
								u = l++;
								if (te && u === 61440) {
									u = 61472;
									l = u + 1
								}
							} while (o[u] !== undefined && l <= ee)
						}
						n[u] = h;
						s[c] = u;
						o[u] = true
					}
					return {
						toFontChar: s,
						charCodeToGlyphId: n,
						nextAvailableFontCharCode: l
					}
				}

				function S(e, t) {
					var r = [];
					for (var a in e) {
						if (e[a] >= t) {
							continue
						}
						r.push({
							fontCharCode: a | 0,
							glyphId: e[a]
						})
					}
					r.sort(function e(t, r) {
						return t.fontCharCode - r.fontCharCode
					});
					var i = [];
					var n = r.length;
					for (var s = 0; s < n;) {
						var o = r[s].fontCharCode;
						var l = [r[s].glyphId];
						++s;
						var c = o;
						while (s < n && c + 1 === r[s].fontCharCode) {
							l.push(r[s].glyphId);
							++c;
							++s;
							if (c === 65535) {
								break
							}
						}
						i.push([o, c, l])
					}
					return i
				}

				function A(e, t) {
					var r = S(e, t);
					var a = r[r.length - 1][1] > 65535 ? 2 : 1;
					var i = "\0\0" + n(a) + "\0" + "\0" + C(4 + a * 8);
					var s, o, l, c;
					for (s = r.length - 1; s >= 0; --s) {
						if (r[s][0] <= 65535) {
							break
						}
					}
					var h = s + 1;
					if (r[s][0] < 65535 && r[s][1] === 65535) {
						r[s][1] = 65534
					}
					var u = r[s][1] < 65535 ? 1 : 0;
					var f = h + u;
					var d = de.getSearchParams(f, 2);
					var g = "";
					var v = "";
					var p = "";
					var m = "";
					var b = "";
					var y = 0;
					var k, w, x, A;
					for (s = 0, o = h; s < o; s++) {
						k = r[s];
						w = k[0];
						x = k[1];
						g += n(w);
						v += n(x);
						A = k[2];
						var I = true;
						for (l = 1, c = A.length; l < c; ++l) {
							if (A[l] !== A[l - 1] + 1) {
								I = false;
								break
							}
						}
						if (!I) {
							var B = (f - s) * 2 + y * 2;
							y += x - w + 1;
							p += n(0);
							m += n(B);
							for (l = 0, c = A.length; l < c; ++l) {
								b += n(A[l])
							}
						} else {
							var R = A[0];
							p += n(R - w & 65535);
							m += n(0)
						}
					}
					if (u > 0) {
						v += "ÿÿ";
						g += "ÿÿ";
						p += "\0";
						m += "\0\0"
					}
					var T = "\0\0" + n(2 * f) + n(d.range) + n(d.entry) + n(d.rangeShift) + v + "\0\0" + g + p + m + b;
					var O = "";
					var P = "";
					if (a > 1) {
						i += "\0" + "\0\n" + C(4 + a * 8 + 4 + T.length);
						O = "";
						for (s = 0, o = r.length; s < o; s++) {
							k = r[s];
							w = k[0];
							A = k[2];
							var E = A[0];
							for (l = 1, c = A.length; l < c; ++l) {
								if (A[l] !== A[l - 1] + 1) {
									x = k[0] + l - 1;
									O += C(w) + C(x) + C(E);
									w = x + 1;
									E = A[l]
								}
							}
							O += C(w) + C(k[1]) + C(E)
						}
						P = "\0\f" + "\0\0" + C(O.length + 16) + "\0\0\0\0" + C(O.length / 12)
					}
					return i + "\0" + n(T.length + 4) + T + P + O
				}

				function z(e) {
					var t = new I(e.data);
					var r = t.getUint16();
					t.getBytes(60);
					var a = t.getUint16();
					if (r < 4 && a & 768) {
						return false
					}
					var i = t.getUint16();
					var n = t.getUint16();
					if (i > n) {
						return false
					}
					t.getBytes(6);
					var s = t.getUint16();
					if (s === 0) {
						return false
					}
					e.data[8] = e.data[9] = 0;
					return true
				}

				function H(e, t, r) {
					r = r || {
						unitsPerEm: 0,
						yMax: 0,
						yMin: 0,
						ascent: 0,
						descent: 0
					};
					var a = 0;
					var i = 0;
					var s = 0;
					var o = 0;
					var l = null;
					var c = 0;
					if (t) {
						for (var h in t) {
							h |= 0;
							if (l > h || !l) {
								l = h
							}
							if (c < h) {
								c = h
							}
							var f = q(h);
							if (f < 32) {
								a |= 1 << f
							} else if (f < 64) {
								i |= 1 << f - 32
							} else if (f < 96) {
								s |= 1 << f - 64
							} else if (f < 123) {
								o |= 1 << f - 96
							} else {
								v("Unicode ranges Bits > 123 are reserved for internal usage")
							}
						}
					} else {
						l = 0;
						c = 255
					}
					var d = e.bbox || [0, 0, 0, 0];
					var g = r.unitsPerEm || 1 / (e.fontMatrix || u)[0];
					var p = e.ascentScaled ? 1 : g / re;
					var m = r.ascent || Math.round(p * (e.ascent || d[3]));
					var b = r.descent || Math.round(p * (e.descent || d[1]));
					if (b > 0 && e.descent > 0 && d[1] < 0) {
						b = -b
					}
					var y = r.yMax || m;
					var k = -r.yMin || -b;
					return "\0" + "$" + "ô" + "\0" + "\0\0" + "" + "»" + "\0\0" + "\0" + "" + "»" + "\0\0" + "ß" + "\x001" + "" + "\0\0" + "\0\0" + String.fromCharCode(e.fixedPitch ? 9 : 0) + "\0\0\0\0\0\0" + C(a) + C(i) + C(s) + C(o) + "*21*" + n(e.italicAngle ? 1 : 0) + n(l || e.firstChar) + n(c || e.lastChar) + n(m) + n(b) + "\0d" + n(y) + n(k) + "\0\0\0\0" + "\0\0\0\0" + n(e.xHeight) + n(e.capHeight) + n(0) + n(l || e.firstChar) + "\0"
				}

				function W(e) {
					var t = Math.floor(e.italicAngle * Math.pow(2, 16));
					return "\0\0\0" + C(t) + "\0\0" + "\0\0" + C(e.fixedPitch) + "\0\0\0\0" + "\0\0\0\0" + "\0\0\0\0" + "\0\0\0\0"
				}

				function V(e, t) {
					if (!t) {
						t = [
							[],
							[]
						]
					}
					var r = [t[0][0] || "Original licence", t[0][1] || e, t[0][2] || "Unknown", t[0][3] || "uniqueID", t[0][4] || e, t[0][5] || "Version 0.11", t[0][6] || "", t[0][7] || "Unknown", t[0][8] || "Unknown", t[0][9] || "Unknown"];
					var a = [];
					var i, s, o, l, c;
					for (i = 0, s = r.length; i < s; i++) {
						c = t[1][i] || r[i];
						var h = [];
						for (o = 0, l = c.length; o < l; o++) {
							h.push(n(c.charCodeAt(o)))
						}
						a.push(h.join(""))
					}
					var u = [r, a];
					var f = ["\0", "\0"];
					var d = ["\0\0", "\0"];
					var g = ["\0\0", "\t"];
					var v = r.length * f.length;
					var p = "\0\0" + n(v) + n(v * 12 + 6);
					var m = 0;
					for (i = 0, s = f.length; i < s; i++) {
						var b = u[i];
						for (o = 0, l = b.length; o < l; o++) {
							c = b[o];
							var y = f[i] + d[i] + g[i] + n(o) + n(c.length) + n(m);
							p += y;
							m += c.length
						}
					}
					p += r.join("") + a.join("");
					return p
				}
				t.prototype = {
					name: null,
					font: null,
					mimetype: null,
					encoding: null,
					get renderer() {
						var e = T.create(this, ae);
						return w(this, "renderer", e)
					},
					exportData: function e() {
						var t = {};
						for (var r in this) {
							if (this.hasOwnProperty(r)) {
								t[r] = this[r]
							}
						}
						return t
					},
					checkAndRepair: function e(t, n, s) {
						function o(e) {
							var t = g(e.getBytes(4));
							var r = e.getInt32() >>> 0;
							var a = e.getInt32() >>> 0;
							var i = e.getInt32() >>> 0;
							var n = e.pos;
							e.pos = e.start ? e.start : 0;
							e.skip(a);
							var s = e.getBytes(i);
							e.pos = n;
							if (t === "head") {
								s[8] = s[9] = s[10] = s[11] = 0;
								s[17] |= 32
							}
							return {
								tag: t,
								checksum: r,
								length: i,
								offset: a,
								data: s
							}
						}

						function l(e) {
							return {
								version: g(e.getBytes(4)),
								numTables: e.getUint16(),
								searchRange: e.getUint16(),
								entrySelector: e.getUint16(),
								rangeShift: e.getUint16()
							}
						}

						function c(e, t, r, a) {
							if (!e) {
								x("No cmap table available.");
								return {
									platformId: -1,
									encodingId: -1,
									mappings: [],
									hasShortCmap: false
								}
							}
							var i;
							var n = (t.start ? t.start : 0) + e.offset;
							t.pos = n;
							var s = t.getUint16();
							var o = t.getUint16();
							var l;
							var c = false;
							for (var h = 0; h < o; h++) {
								var u = t.getUint16();
								var f = t.getUint16();
								var d = t.getInt32() >>> 0;
								var g = false;
								if (u === 0 && f === 0) {
									g = true
								} else if (u === 1 && f === 0) {
									g = true
								} else if (u === 3 && f === 1 && (!r && a || !l)) {
									g = true;
									if (!r) {
										c = true
									}
								} else if (r && u === 3 && f === 0) {
									g = true;
									c = true
								}
								if (g) {
									l = {
										platformId: u,
										encodingId: f,
										offset: d
									}
								}
								if (c) {
									break
								}
							}
							if (l) {
								t.pos = n + l.offset
							}
							if (!l || t.peekByte() === -1) {
								x("Could not find a preferred cmap table.");
								return {
									platformId: -1,
									encodingId: -1,
									mappings: [],
									hasShortCmap: false
								}
							}
							var v = t.getUint16();
							var p = t.getUint16();
							var m = t.getUint16();
							var b = false;
							var y = [];
							var k, w;
							if (v === 0) {
								for (k = 0; k < 256; k++) {
									var C = t.getByte();
									if (!C) {
										continue
									}
									y.push({
										charCode: k,
										glyphId: C
									})
								}
								b = true
							} else if (v === 4) {
								var S = t.getUint16() >> 1;
								t.getBytes(6);
								var A, I = [];
								for (A = 0; A < S; A++) {
									I.push({
										end: t.getUint16()
									})
								}
								t.getUint16();
								for (A = 0; A < S; A++) {
									I[A].start = t.getUint16()
								}
								for (A = 0; A < S; A++) {
									I[A].delta = t.getUint16()
								}
								var B = 0;
								for (A = 0; A < S; A++) {
									i = I[A];
									var R = t.getUint16();
									if (!R) {
										i.offsetIndex = -1;
										continue
									}
									var T = (R >> 1) - (S - A);
									i.offsetIndex = T;
									B = Math.max(B, T + i.end - i.start + 1)
								}
								var O = [];
								for (k = 0; k < B; k++) {
									O.push(t.getUint16())
								}
								for (A = 0; A < S; A++) {
									i = I[A];
									n = i.start;
									var P = i.end;
									var E = i.delta;
									T = i.offsetIndex;
									for (k = n; k <= P; k++) {
										if (k === 65535) {
											continue
										}
										w = T < 0 ? k : O[T + k - n];
										w = w + E & 65535;
										if (w === 0) {
											continue
										}
										y.push({
											charCode: k,
											glyphId: w
										})
									}
								}
							} else if (v === 6) {
								var M = t.getUint16();
								var L = t.getUint16();
								for (k = 0; k < L; k++) {
									w = t.getUint16();
									var D = M + k;
									y.push({
										charCode: D,
										glyphId: w
									})
								}
							} else {
								x("cmap table has unsupported format: " + v);
								return {
									platformId: -1,
									encodingId: -1,
									mappings: [],
									hasShortCmap: false
								}
							}
							y.sort(function (e, t) {
								return e.charCode - t.charCode
							});
							for (h = 1; h < y.length; h++) {
								if (y[h - 1].charCode === y[h].charCode) {
									y.splice(h, 1);
									h--
								}
							}
							return {
								platformId: l.platformId,
								encodingId: l.encodingId,
								mappings: y,
								hasShortCmap: b
							}
						}

						function h(e, t, r, a) {
							if (!t) {
								if (r) {
									r.data = null
								}
								return
							}
							e.pos = (e.start ? e.start : 0) + t.offset;
							e.pos += t.length - 2;
							var i = e.getUint16();
							if (i > a) {
								p("The numOfMetrics (" + i + ") should not be " + "greater than the numGlyphs (" + a + ")");
								i = a;
								t.data[34] = (i & 65280) >> 8;
								t.data[35] = i & 255
							}
							var n = a - i;
							var s = n - (r.length - i * 4 >> 1);
							if (s > 0) {
								var o = new Uint8Array(r.length + s * 2);
								o.set(r.data);
								r.data = o
							}
						}

						function u(e, t, r, a, i, n) {
							if (r - t <= 12) {
								return 0
							}
							var s = e.subarray(t, r);
							var o = s[0] << 8 | s[1];
							if (o & 32768) {
								a.set(s, i);
								return s.length
							}
							var l, c = 10,
								h = 0;
							for (l = 0; l < o; l++) {
								var u = s[c] << 8 | s[c + 1];
								h = u + 1;
								c += 2
							}
							var f = c;
							var d = s[c] << 8 | s[c + 1];
							c += 2 + d;
							var g = c;
							var v = 0;
							for (l = 0; l < h; l++) {
								var p = s[c++];
								if (p & 192) {
									s[c - 1] = p & 63
								}
								var m = (p & 2 ? 1 : p & 16 ? 0 : 2) + (p & 4 ? 1 : p & 32 ? 0 : 2);
								v += m;
								if (p & 8) {
									var b = s[c++];
									l += b;
									v += b * m
								}
							}
							if (v === 0) {
								return 0
							}
							var y = c + v;
							if (y > s.length) {
								return 0
							}
							if (!n && d > 0) {
								a.set(s.subarray(0, f), i);
								a.set([0, 0], i + f);
								a.set(s.subarray(g, y), i + f + 2);
								y -= d;
								if (s.length - y > 3) {
									y = y + 3 & ~3
								}
								return y
							}
							if (s.length - y > 3) {
								y = y + 3 & ~3;
								a.set(s.subarray(0, y), i);
								return y
							}
							a.set(s, i);
							return s.length
						}

						function f(e, t, a) {
							var n = e.data;
							var s = i(n[0], n[1], n[2], n[3]);
							if (s >> 16 !== 1) {
								p("Attempting to fix invalid version in head table: " + s);
								n[0] = 0;
								n[1] = 1;
								n[2] = 0;
								n[3] = 0
							}
							var o = r(n[50], n[51]);
							if (o < 0 || o > 1) {
								p("Attempting to fix invalid indexToLocFormat in head table: " + o);
								var l = t + 1;
								if (a === l << 1) {
									n[50] = 0;
									n[51] = 0
								} else if (a === l << 2) {
									n[50] = 0;
									n[51] = 1
								} else {
									x("Could not fix indexToLocFormat: " + o)
								}
							}
						}

						function m(e, t, r, a, i, n) {
							var s, o, l;
							if (a) {
								s = 4;
								o = function e(t, r) {
									return t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]
								};
								l = function e(t, r, a) {
									t[r] = a >>> 24 & 255;
									t[r + 1] = a >> 16 & 255;
									t[r + 2] = a >> 8 & 255;
									t[r + 3] = a & 255
								}
							} else {
								s = 2;
								o = function e(t, r) {
									return t[r] << 9 | t[r + 1] << 1
								};
								l = function e(t, r, a) {
									t[r] = a >> 9 & 255;
									t[r + 1] = a >> 1 & 255
								}
							}
							var c = e.data;
							var h = s * (1 + r);
							if (c.length !== h) {
								c = new Uint8Array(h);
								c.set(e.data.subarray(0, h));
								e.data = c
							}
							var f = t.data;
							var d = f.length;
							var g = new Uint8Array(d);
							var v = o(c, 0);
							var p = 0;
							var m = Object.create(null);
							l(c, 0, p);
							var b, y;
							for (b = 0, y = s; b < r; b++, y += s) {
								var k = o(c, y);
								if (k > d && (d + 3 & ~3) === k) {
									k = d
								}
								if (k > d) {
									l(c, y, p);
									v = k;
									continue
								}
								if (v === k) {
									m[b] = true
								}
								var w = u(f, v, k, g, p, i);
								p += w;
								l(c, y, p);
								v = k
							}
							if (p === 0) {
								var C = new Uint8Array([0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0]);
								for (b = 0, y = s; b < r; b++, y += s) {
									l(c, y, C.length)
								}
								t.data = C;
								return m
							}
							if (n) {
								var x = o(c, s);
								if (g.length > x + p) {
									t.data = g.subarray(0, x + p)
								} else {
									t.data = new Uint8Array(x + p);
									t.data.set(g.subarray(0, p))
								}
								t.data.set(g.subarray(0, x), p);
								l(e.data, c.length - s, p + x)
							} else {
								t.data = g.subarray(0, p)
							}
							return m
						}

						function k(e, t, r) {
							var a = (n.start ? n.start : 0) + e.offset;
							n.pos = a;
							var i = e.length,
								s = a + i;
							var o = n.getInt32();
							n.getBytes(28);
							var l;
							var c = true;
							var h;
							switch (o) {
								case 65536:
									l = ne;
									break;
								case 131072:
									var u = n.getUint16();
									if (u !== r) {
										c = false;
										break
									}
									var f = [];
									for (h = 0; h < u; ++h) {
										var d = n.getUint16();
										if (d >= 32768) {
											c = false;
											break
										}
										f.push(d)
									}
									if (!c) {
										break
									}
									var g = [];
									var v = [];
									while (n.pos < s) {
										var p = n.getByte();
										v.length = p;
										for (h = 0; h < p; ++h) {
											v[h] = String.fromCharCode(n.getByte())
										}
										g.push(v.join(""))
									}
									l = [];
									for (h = 0; h < u; ++h) {
										var m = f[h];
										if (m < 258) {
											l.push(ne[m]);
											continue
										}
										l.push(g[m - 258])
									}
									break;
								case 196608:
									break;
								default:
									x("Unknown/unsupported post table version " + o);
									c = false;
									if (t.defaultEncoding) {
										l = t.defaultEncoding
									}
									break
							}
							t.glyphNames = l;
							return c
						}

						function w(e) {
							var t = (n.start ? n.start : 0) + e.offset;
							n.pos = t;
							var r = [
								[],
								[]
							];
							var a = e.length,
								i = t + a;
							var s = n.getUint16();
							var o = 6;
							if (s !== 0 || a < o) {
								return r
							}
							var l = n.getUint16();
							var c = n.getUint16();
							var h = [];
							var u = 12;
							var f, d;
							for (f = 0; f < l && n.pos + u <= i; f++) {
								var v = {
									platform: n.getUint16(),
									encoding: n.getUint16(),
									language: n.getUint16(),
									name: n.getUint16(),
									length: n.getUint16(),
									offset: n.getUint16()
								};
								if (v.platform === 1 && v.encoding === 0 && v.language === 0 || v.platform === 3 && v.encoding === 1 && v.language === 1033) {
									h.push(v)
								}
							}
							for (f = 0, d = h.length; f < d; f++) {
								var p = h[f];
								if (p.length <= 0) {
									continue
								}
								var m = t + c + p.offset;
								if (m + p.length > i) {
									continue
								}
								n.pos = m;
								var b = p.name;
								if (p.encoding) {
									var y = "";
									for (var k = 0, w = p.length; k < w; k += 2) {
										y += String.fromCharCode(n.getUint16())
									}
									r[1][b] = y
								} else {
									r[0][b] = g(n.getBytes(p.length))
								}
							}
							return r
						}
						var C = [0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, -2, 0, 0, -2, -5, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, 0, -1, -1, -1, -1, 1, -1, -999, 0, 1, 0, -1, -2, 0, -1, -2, -1, -1, 0, -1, -1, 0, 0, -999, -999, -1, -1, -1, -1, -2, -999, -2, -2, -999, 0, -2, -2, 0, 0, -2, 0, -2, 0, 0, 0, -2, -1, -1, 1, 1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, 0, -1, -1, 0, -999, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -999, -999, -999, -999, -999, -1, -1, -2, -2, 0, 0, 0, 0, -1, -1, -999, -2, -2, 0, 0, -1, -2, -2, 0, 0, 0, -1, -1, -1, -2];

						function S(e, t) {
							var r = e.data;
							var a = 0,
								i, n, s, o, l, c = 0,
								h = 0;
							var u = [];
							var f = [];
							var d = [];
							var g = t.tooComplexToFollowFunctions;
							var v = false,
								p = 0,
								m = 0;
							for (var b = r.length; a < b;) {
								var y = r[a++];
								if (y === 64) {
									n = r[a++];
									if (v || m) {
										a += n
									} else {
										for (i = 0; i < n; i++) {
											u.push(r[a++])
										}
									}
								} else if (y === 65) {
									n = r[a++];
									if (v || m) {
										a += n * 2
									} else {
										for (i = 0; i < n; i++) {
											s = r[a++];
											u.push(s << 8 | r[a++])
										}
									}
								} else if ((y & 248) === 176) {
									n = y - 176 + 1;
									if (v || m) {
										a += n
									} else {
										for (i = 0; i < n; i++) {
											u.push(r[a++])
										}
									}
								} else if ((y & 248) === 184) {
									n = y - 184 + 1;
									if (v || m) {
										a += n * 2
									} else {
										for (i = 0; i < n; i++) {
											s = r[a++];
											u.push(s << 8 | r[a++])
										}
									}
								} else if (y === 43 && !g) {
									if (!v && !m) {
										o = u[u.length - 1];
										t.functionsUsed[o] = true;
										if (o in t.functionsStackDeltas) {
											u.length += t.functionsStackDeltas[o]
										} else if (o in t.functionsDefined && d.indexOf(o) < 0) {
											f.push({
												data: r,
												i: a,
												stackTop: u.length - 1
											});
											d.push(o);
											l = t.functionsDefined[o];
											if (!l) {
												x("TT: CALL non-existent function");
												t.hintsValid = false;
												return
											}
											r = l.data;
											a = l.i
										}
									}
								} else if (y === 44 && !g) {
									if (v || m) {
										x("TT: nested FDEFs not allowed");
										g = true
									}
									v = true;
									h = a;
									o = u.pop();
									t.functionsDefined[o] = {
										data: r,
										i: a
									}
								} else if (y === 45) {
									if (v) {
										v = false;
										c = a
									} else {
										l = f.pop();
										if (!l) {
											x("TT: ENDF bad stack");
											t.hintsValid = false;
											return
										}
										o = d.pop();
										r = l.data;
										a = l.i;
										t.functionsStackDeltas[o] = u.length - l.stackTop
									}
								} else if (y === 137) {
									if (v || m) {
										x("TT: nested IDEFs not allowed");
										g = true
									}
									v = true;
									h = a
								} else if (y === 88) {
									++p
								} else if (y === 27) {
									m = p
								} else if (y === 89) {
									if (m === p) {
										m = 0
									}--p
								} else if (y === 28) {
									if (!v && !m) {
										var k = u[u.length - 1];
										if (k > 0) {
											a += k - 1
										}
									}
								}
								if (!v && !m) {
									var w = y <= 142 ? C[y] : y >= 192 && y <= 223 ? -1 : y >= 224 ? -2 : 0;
									if (y >= 113 && y <= 117) {
										n = u.pop();
										if (!isNaN(n)) {
											w = -n * 2
										}
									}
									while (w < 0 && u.length > 0) {
										u.pop();
										w++
									}
									while (w > 0) {
										u.push(NaN);
										w--
									}
								}
							}
							t.tooComplexToFollowFunctions = g;
							var S = [r];
							if (a > r.length) {
								S.push(new Uint8Array(a - r.length))
							}
							if (h > c) {
								x("TT: complementing a missing function tail");
								S.push(new Uint8Array([34, 45]))
							}
							T(e, S)
						}

						function R(e, t) {
							if (e.tooComplexToFollowFunctions) {
								return
							}
							if (e.functionsDefined.length > t) {
								x("TT: more functions defined than expected");
								e.hintsValid = false;
								return
							}
							for (var r = 0, a = e.functionsUsed.length; r < a; r++) {
								if (r > t) {
									x("TT: invalid function id: " + r);
									e.hintsValid = false;
									return
								}
								if (e.functionsUsed[r] && !e.functionsDefined[r]) {
									x("TT: undefined function: " + r);
									e.hintsValid = false;
									return
								}
							}
						}

						function T(e, t) {
							if (t.length > 1) {
								var r = 0;
								var a, i;
								for (a = 0, i = t.length; a < i; a++) {
									r += t[a].length
								}
								r = r + 3 & ~3;
								var n = new Uint8Array(r);
								var s = 0;
								for (a = 0, i = t.length; a < i; a++) {
									n.set(t[a], s);
									s += t[a].length
								}
								e.data = n;
								e.length = r
							}
						}

						function E(e, t, r, a) {
							var i = {
								functionsDefined: [],
								functionsUsed: [],
								functionsStackDeltas: [],
								tooComplexToFollowFunctions: false,
								hintsValid: true
							};
							if (e) {
								S(e, i)
							}
							if (t) {
								S(t, i)
							}
							if (e) {
								R(i, a)
							}
							if (r && r.length & 1) {
								var n = new Uint8Array(r.length + 1);
								n.set(r.data);
								r.data = n
							}
							return i.hintsValid
						}
						n = new I(new Uint8Array(n.getBytes()));
						var M = ["OS/2", "cmap", "head", "hhea", "hmtx", "maxp", "name", "post", "loca", "glyf", "fpgm", "prep", "cvt ", "CFF "];
						var D = l(n);
						var F = D.numTables;
						var U, j;
						var q = Object.create(null);
						q["OS/2"] = null;
						q["cmap"] = null;
						q["head"] = null;
						q["hhea"] = null;
						q["hmtx"] = null;
						q["maxp"] = null;
						q["name"] = null;
						q["post"] = null;
						var N;
						for (var _ = 0; _ < F; _++) {
							N = o(n);
							if (M.indexOf(N.tag) < 0) {
								continue
							}
							if (N.length === 0) {
								continue
							}
							q[N.tag] = N
						}
						var K = !q["CFF "];
						if (!K) {
							if (D.version === "OTTO" && !s.composite || !q["head"] || !q["hhea"] || !q["maxp"] || !q["post"]) {
								j = new I(q["CFF "].data);
								U = new ye(j, s);
								se(s);
								return this.convert(t, U, s)
							}
							delete q["glyf"];
							delete q["loca"];
							delete q["fpgm"];
							delete q["prep"];
							delete q["cvt "];
							this.isOpenType = true
						} else {
							if (!q["loca"]) {
								v('Required "loca" table is not found')
							}
							if (!q["glyf"]) {
								x('Required "glyf" table is not found -- trying to recover.');
								q["glyf"] = {
									tag: "glyf",
									data: new Uint8Array(0)
								}
							}
							this.isOpenType = false
						}
						if (!q["maxp"]) {
							v('Required "maxp" table is not found')
						}
						n.pos = (n.start || 0) + q["maxp"].offset;
						var Y = n.getInt32();
						var J = n.getUint16();
						var Z = 0;
						if (Y >= 65536 && q["maxp"].length >= 22) {
							n.pos += 8;
							var Q = n.getUint16();
							if (Q > 2) {
								q["maxp"].data[14] = 0;
								q["maxp"].data[15] = 2
							}
							n.pos += 4;
							Z = n.getUint16()
						}
						var $ = false;
						if (s.type === "CIDFontType2" && s.toUnicode && s.toUnicode.get(0) > "\0") {
							$ = true;
							J++;
							q["maxp"].data[4] = J >> 8;
							q["maxp"].data[5] = J & 255
						}
						var ee = E(q["fpgm"], q["prep"], q["cvt "], Z);
						if (!ee) {
							delete q["fpgm"];
							delete q["prep"];
							delete q["cvt "]
						}
						h(n, q["hhea"], q["hmtx"], J);
						if (!q["head"]) {
							v('Required "head" table is not found')
						}
						f(q["head"], J, K ? q["loca"].length : 0);
						var te = Object.create(null);
						if (K) {
							var re = r(q["head"].data[50], q["head"].data[51]);
							te = m(q["loca"], q["glyf"], J, re, ee, $)
						}
						if (!q["hhea"]) {
							v('Required "hhea" table is not found')
						}
						if (q["hhea"].data[10] === 0 && q["hhea"].data[11] === 0) {
							q["hhea"].data[10] = 255;
							q["hhea"].data[11] = 255
						}
						var ie = {
							unitsPerEm: r(q["head"].data[18], q["head"].data[19]),
							yMax: r(q["head"].data[42], q["head"].data[43]),
							yMin: a(q["head"].data[38], q["head"].data[39]),
							ascent: r(q["hhea"].data[4], q["hhea"].data[5]),
							descent: a(q["hhea"].data[6], q["hhea"].data[7])
						};
						this.ascent = ie.ascent / ie.unitsPerEm;
						this.descent = ie.descent / ie.unitsPerEm;
						if (q["post"]) {
							var oe = k(q["post"], s, J);
							if (!oe) {
								q["post"] = null
							}
						}
						var le = [],
							he;
						var ue = s.toUnicode,
							ge = s.widths;
						var ve = ue instanceof fe || ue.length === 65536;

						function pe(e, t, r) {
							if (!te[e]) {
								return true
							}
							if (!ve && t >= 0 && ue.has(t)) {
								return true
							}
							if (ge && r >= 0 && y(ge[r])) {
								return true
							}
							return false
						}
						if (s.composite) {
							var me = s.cidToGidMap || [];
							var be = me.length === 0;
							s.cMap.forEach(function (e, t) {
								d(t <= 65535, "Max size of CID is 65,535");
								var r = -1;
								if (be) {
									r = t
								} else if (me[t] !== undefined) {
									r = me[t]
								}
								if (r >= 0 && r < J && pe(r, e, t)) {
									le[e] = r
								}
							});
							if ($ && (be || !le[0])) {
								le[0] = J - 1
							}
						} else {
							var ke = c(q["cmap"], n, this.isSymbolicFont, s.hasEncoding);
							var we = ke.platformId;
							var Ce = ke.encodingId;
							var xe = ke.mappings;
							var Se = xe.length;
							if (s.hasEncoding && (we === 3 && Ce === 1 || we === 1 && Ce === 0) || we === -1 && Ce === -1 && !!L(s.baseEncodingName)) {
								var Ae = [];
								if (s.baseEncodingName === "MacRomanEncoding" || s.baseEncodingName === "WinAnsiEncoding") {
									Ae = L(s.baseEncodingName)
								}
								var Ie = B();
								for (he = 0; he < 256; he++) {
									var Be, Re;
									if (this.differences && he in this.differences) {
										Be = this.differences[he]
									} else if (he in Ae && Ae[he] !== "") {
										Be = Ae[he]
									} else {
										Be = O[he]
									}
									if (!Be) {
										continue
									}
									Re = ce(Be, Ie);
									var Te, Oe = false;
									if (we === 3 && Ce === 1) {
										Te = Ie[Re];
										Oe = true
									} else if (we === 1 && Ce === 0) {
										Te = P.indexOf(Re)
									}
									var Pe = false;
									for (_ = 0; _ < Se; ++_) {
										if (xe[_].charCode !== Te) {
											continue
										}
										var Ee = Oe ? he : Te;
										if (pe(xe[_].glyphId, Ee, -1)) {
											le[he] = xe[_].glyphId;
											Pe = true;
											break
										}
									}
									if (!Pe && s.glyphNames) {
										var Me = s.glyphNames.indexOf(Be);
										if (Me === -1 && Re !== Be) {
											Me = s.glyphNames.indexOf(Re)
										}
										if (Me > 0 && pe(Me, -1, -1)) {
											le[he] = Me;
											Pe = true
										}
									}
									if (!Pe) {
										le[he] = 0
									}
								}
							} else if (we === 0 && Ce === 0) {
								for (_ = 0; _ < Se; ++_) {
									le[xe[_].charCode] = xe[_].glyphId
								}
							} else {
								for (_ = 0; _ < Se; ++_) {
									he = xe[_].charCode & 255;
									le[he] = xe[_].glyphId
								}
							}
						}
						if (le.length === 0) {
							le[0] = 0
						}
						var Le = b(le, s);
						this.toFontChar = Le.toFontChar;
						q["cmap"] = {
							tag: "cmap",
							data: A(Le.charCodeToGlyphId, J)
						};
						if (!q["OS/2"] || !z(q["OS/2"])) {
							q["OS/2"] = {
								tag: "OS/2",
								data: H(s, Le.charCodeToGlyphId, ie)
							}
						}
						if (!q["post"]) {
							q["post"] = {
								tag: "post",
								data: W(s)
							}
						}
						if (!K) {
							try {
								j = new I(q["CFF "].data);
								var De = new G(j, s, ae);
								U = De.parse();
								var Fe = new X(U);
								q["CFF "].data = Fe.compile()
							} catch (e) {
								x("Failed to compile font " + s.loadedName)
							}
						}
						if (!q["name"]) {
							q["name"] = {
								tag: "name",
								data: V(this.name)
							}
						} else {
							var Ue = w(q["name"]);
							q["name"].data = V(t, Ue)
						}
						var je = new de(D.version);
						for (var qe in q) {
							je.addTable(qe, q[qe].data)
						}
						return je.toArray()
					},
					convert: function e(t, r, a) {
						a.fixedPitch = false;
						if (a.builtInEncoding) {
							oe(a, a.builtInEncoding)
						}
						var i = r.getGlyphMapping(a);
						var o = b(i, a);
						this.toFontChar = o.toFontChar;
						var l = r.numGlyphs;

						function c(e, t) {
							var r = null;
							for (var a in e) {
								if (t === e[a]) {
									if (!r) {
										r = []
									}
									r.push(a | 0)
								}
							}
							return r
						}

						function h(e, t) {
							for (var r in e) {
								if (t === e[r]) {
									return r | 0
								}
							}
							o.charCodeToGlyphId[o.nextAvailableFontCharCode] = t;
							return o.nextAvailableFontCharCode++
						}
						var f = r.seacs;
						if (ae && f && f.length) {
							var d = a.fontMatrix || u;
							var g = r.getCharset();
							var v = Object.create(null);
							for (var p in f) {
								p |= 0;
								var m = f[p];
								var y = O[m[2]];
								var k = O[m[3]];
								var w = g.indexOf(y);
								var C = g.indexOf(k);
								if (w < 0 || C < 0) {
									continue
								}
								var x = {
									x: m[0] * d[0] + m[1] * d[2] + d[4],
									y: m[0] * d[1] + m[1] * d[3] + d[5]
								};
								var S = c(i, p);
								if (!S) {
									continue
								}
								for (var I = 0, B = S.length; I < B; I++) {
									var R = S[I];
									var T = o.charCodeToGlyphId;
									var P = h(T, w);
									var E = h(T, C);
									v[R] = {
										baseFontCharCode: P,
										accentFontCharCode: E,
										accentOffset: x
									}
								}
							}
							a.seacMap = v
						}
						var M = 1 / (a.fontMatrix || u)[0];
						var L = new de("OTTO");
						L.addTable("CFF ", r.data);
						L.addTable("OS/2", H(a, o.charCodeToGlyphId));
						L.addTable("cmap", A(o.charCodeToGlyphId, l));
						L.addTable("head", "\0\0\0" + "\0\0\0" + "\0\0\0\0" + "_<õ" + "\0\0" + s(M) + "\0\0\0\0\v~'" + "\0\0\0\0\v~'" + "\0\0" + s(a.descent) + "ÿ" + s(a.ascent) + n(a.italicAngle ? 2 : 0) + "\0" + "\0\0" + "\0\0" + "\0\0");
						L.addTable("hhea", "\0\0\0" + s(a.ascent) + s(a.descent) + "\0\0" + "ÿÿ" + "\0\0" + "\0\0" + "\0\0" + s(a.capHeight) + s(Math.tan(a.italicAngle) * a.xHeight) + "\0\0" + "\0\0" + "\0\0" + "\0\0" + "\0\0" + "\0\0" + n(l));
						L.addTable("hmtx", function e() {
							var t = r.charstrings;
							var a = r.cff ? r.cff.widths : null;
							var i = "\0\0\0\0";
							for (var s = 1, o = l; s < o; s++) {
								var c = 0;
								if (t) {
									var h = t[s - 1];
									c = "width" in h ? h.width : 0
								} else if (a) {
									c = Math.ceil(a[s] || 0)
								}
								i += n(c) + n(0)
							}
							return i
						}());
						L.addTable("maxp", "\0\0P\0" + n(l));
						L.addTable("name", V(t));
						L.addTable("post", W(a));
						return L.toArray()
					},
					get spaceWidth() {
						if ("_shadowWidth" in this) {
							return this._shadowWidth
						}
						var e = ["space", "minus", "one", "i", "I"];
						var t;
						for (var r = 0, a = e.length; r < a; r++) {
							var i = e[r];
							if (i in this.widths) {
								t = this.widths[i];
								break
							}
							var n = B();
							var s = n[i];
							var o = 0;
							if (this.composite) {
								if (this.cMap.contains(s)) {
									o = this.cMap.lookup(s)
								}
							}
							if (!o && this.toUnicode) {
								o = this.toUnicode.charCodeOf(s)
							}
							if (o <= 0) {
								o = s
							}
							t = this.widths[o];
							if (t) {
								break
							}
						}
						t = t || this.defaultWidth;
						this._shadowWidth = t;
						return t
					},
					charToGlyph: function e(t, r) {
						var a, i, n;
						var s = t;
						if (this.cMap && this.cMap.contains(t)) {
							s = this.cMap.lookup(t)
						}
						i = this.widths[s];
						i = y(i) ? i : this.defaultWidth;
						var o = this.vmetrics && this.vmetrics[s];
						var l = this.toUnicode.get(t) || t;
						if (typeof l === "number") {
							l = String.fromCharCode(l)
						}
						var c = t in this.toFontChar;
						a = this.toFontChar[t] || t;
						if (this.missingFile) {
							a = N(a)
						}
						if (this.isType3Font) {
							n = a
						}
						var h = null;
						if (this.seacMap && this.seacMap[t]) {
							c = true;
							var u = this.seacMap[t];
							a = u.baseFontCharCode;
							h = {
								fontChar: String.fromCharCode(u.accentFontCharCode),
								offset: u.accentOffset
							}
						}
						var f = String.fromCharCode(a);
						var d = this.glyphCache[t];
						if (!d || !d.matchesForCache(f, l, h, i, o, n, r, c)) {
							d = new he(f, l, h, i, o, n, r, c);
							this.glyphCache[t] = d
						}
						return d
					},
					charsToGlyphs: function e(t) {
						var r = this.charsCache;
						var a, i, n;
						if (r) {
							a = r[t];
							if (a) {
								return a
							}
						}
						if (!r) {
							r = this.charsCache = Object.create(null)
						}
						a = [];
						var s = t;
						var o = 0,
							l;
						if (this.cMap) {
							var c = Object.create(null);
							while (o < t.length) {
								this.cMap.readCharCode(t, o, c);
								n = c.charcode;
								var h = c.length;
								o += h;
								var u = h === 1 && t.charCodeAt(o - 1) === 32;
								i = this.charToGlyph(n, u);
								a.push(i)
							}
						} else {
							for (o = 0, l = t.length; o < l; ++o) {
								n = t.charCodeAt(o);
								i = this.charToGlyph(n, n === 32);
								a.push(i)
							}
						}
						return r[s] = a
					}
				};
				return t
			}();
			var pe = function e() {
				function t(e) {
					this.error = e;
					this.loadedName = "g_font_error";
					this.loading = false
				}
				t.prototype = {
					charsToGlyphs: function e() {
						return []
					},
					exportData: function e() {
						return {
							error: this.error
						}
					}
				};
				return t
			}();

			function me(e, t, r) {
				var a = Object.create(null);
				var i, n, s;
				var o = !!(e.flags & ie.Symbolic);
				if (e.baseEncodingName) {
					s = L(e.baseEncodingName);
					for (n = 0; n < s.length; n++) {
						i = r.indexOf(s[n]);
						if (i >= 0) {
							a[n] = i
						} else {
							a[n] = 0
						}
					}
				} else if (o) {
					for (n in t) {
						a[n] = t[n]
					}
				} else {
					s = O;
					for (n = 0; n < s.length; n++) {
						i = r.indexOf(s[n]);
						if (i >= 0) {
							a[n] = i
						} else {
							a[n] = 0
						}
					}
				}
				var l = e.differences,
					c;
				if (l) {
					for (n in l) {
						var h = l[n];
						i = r.indexOf(h);
						if (i === -1) {
							if (!c) {
								c = B()
							}
							var u = ce(h, c);
							if (u !== h) {
								i = r.indexOf(u)
							}
						}
						if (i >= 0) {
							a[n] = i
						} else {
							a[n] = 0
						}
					}
				}
				return a
			}
			var be = function e() {
				function t(e, t, r) {
					var a = e.length;
					var i = t.length;
					var n = a - i;
					var s = r,
						o, l = false;
					while (s < n) {
						o = 0;
						while (o < i && e[s + o] === t[o]) {
							o++
						}
						if (o >= i) {
							s += o;
							while (s < a && A(e[s])) {
								s++
							}
							l = true;
							break
						}
						s++
					}
					return {
						found: l,
						length: s
					}
				}

				function r(e, r) {
					var a = [101, 101, 120, 101, 99];
					var i = e.pos;
					var n, s, o;
					try {
						n = e.getBytes(r);
						s = n.length
					} catch (e) {
						if (e instanceof S) {
							throw e
						}
					}
					if (s === r) {
						o = t(n, a, r - 2 * a.length);
						if (o.found && o.length === r) {
							return {
								stream: new I(n),
								length: r
							}
						}
					}
					x('Invalid "Length1" property in Type1 font -- trying to recover.');
					e.pos = i;
					var l = 2048;
					var c;
					while (true) {
						var h = e.peekBytes(l);
						o = t(h, a, 0);
						if (o.length === 0) {
							break
						}
						e.pos += o.length;
						if (o.found) {
							c = e.pos - i;
							break
						}
					}
					e.pos = i;
					if (c) {
						return {
							stream: new I(e.getBytes(c)),
							length: c
						}
					}
					x('Unable to recover "Length1" property in Type1 font -- using as is.');
					return {
						stream: new I(e.getBytes(r)),
						length: r
					}
				}

				function a(e, t) {
					var r = e.getBytes();
					return {
						stream: new I(r),
						length: r.length
					}
				}

				function i(e, t, i) {
					var n = 6;
					var s = i.length1;
					var o = i.length2;
					var l = t.peekBytes(n);
					var c = l[0] === 128 && l[1] === 1;
					if (c) {
						t.skip(n);
						s = l[5] << 24 | l[4] << 16 | l[3] << 8 | l[2]
					}
					var h = r(t, s);
					s = h.length;
					var u = new z(h.stream, false, ae);
					u.extractFontHeader(i);
					if (c) {
						l = t.getBytes(n);
						o = l[5] << 24 | l[4] << 16 | l[3] << 8 | l[2]
					}
					var f = a(t, o);
					o = f.length;
					var d = new z(f.stream, true, ae);
					var g = d.extractFontProgram();
					for (var v in g.properties) {
						i[v] = g.properties[v]
					}
					var p = g.charstrings;
					var m = this.getType2Charstrings(p);
					var b = this.getType2Subrs(g.subrs);
					this.charstrings = p;
					this.data = this.wrap(e, m, this.charstrings, b, i);
					this.seacs = this.getSeacs(g.charstrings)
				}
				i.prototype = {
					get numGlyphs() {
						return this.charstrings.length + 1
					},
					getCharset: function e() {
						var t = [".notdef"];
						var r = this.charstrings;
						for (var a = 0; a < r.length; a++) {
							t.push(r[a].glyphName)
						}
						return t
					},
					getGlyphMapping: function e(t) {
						var r = this.charstrings;
						var a = [".notdef"],
							i;
						for (i = 0; i < r.length; i++) {
							a.push(r[i].glyphName)
						}
						var n = t.builtInEncoding;
						if (n) {
							var s = Object.create(null);
							for (var o in n) {
								i = a.indexOf(n[o]);
								if (i >= 0) {
									s[o] = i
								}
							}
						}
						return me(t, s, a)
					},
					getSeacs: function e(t) {
						var r, a;
						var i = [];
						for (r = 0, a = t.length; r < a; r++) {
							var n = t[r];
							if (n.seac) {
								i[r + 1] = n.seac
							}
						}
						return i
					},
					getType2Charstrings: function e(t) {
						var r = [];
						for (var a = 0, i = t.length; a < i; a++) {
							r.push(t[a].charstring)
						}
						return r
					},
					getType2Subrs: function e(t) {
						var r = 0;
						var a = t.length;
						if (a < 1133) {
							r = 107
						} else if (a < 33769) {
							r = 1131
						} else {
							r = 32768
						}
						var i = [];
						var n;
						for (n = 0; n < r; n++) {
							i.push([11])
						}
						for (n = 0; n < a; n++) {
							i.push(t[n])
						}
						return i
					},
					wrap: function e(t, r, a, i, n) {
						var s = new W;
						s.header = new V(1, 0, 4, 4);
						s.names = [t];
						var o = new K;
						o.setByName("version", 391);
						o.setByName("Notice", 392);
						o.setByName("FullName", 393);
						o.setByName("FamilyName", 394);
						o.setByName("Weight", 395);
						o.setByName("Encoding", null);
						o.setByName("FontMatrix", n.fontMatrix);
						o.setByName("FontBBox", n.bbox);
						o.setByName("charset", null);
						o.setByName("CharStrings", null);
						o.setByName("Private", null);
						s.topDict = o;
						var l = new J;
						l.add("Version 0.11");
						l.add("See original notice");
						l.add(t);
						l.add(t);
						l.add("Medium");
						s.strings = l;
						s.globalSubrIndex = new Z;
						var c = r.length;
						var h = [0];
						var u, f;
						for (u = 0; u < c; u++) {
							var d = H.indexOf(a[u].glyphName);
							if (d === -1) {
								d = 0
							}
							h.push(d >> 8 & 255, d & 255)
						}
						s.charset = new Q(false, 0, [], h);
						var g = new Z;
						g.add([139, 14]);
						for (u = 0; u < c; u++) {
							var v = r[u];
							if (v.length === 0) {
								g.add([139, 14]);
								continue
							}
							g.add(v)
						}
						s.charStrings = g;
						var p = new Y;
						p.setByName("Subrs", null);
						var b = ["BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StemSnapH", "StemSnapV", "BlueShift", "BlueFuzz", "BlueScale", "LanguageGroup", "ExpansionFactor", "ForceBold", "StdHW", "StdVW"];
						for (u = 0, f = b.length; u < f; u++) {
							var y = b[u];
							if (!(y in n.privateData)) {
								continue
							}
							var k = n.privateData[y];
							if (m(k)) {
								for (var w = k.length - 1; w > 0; w--) {
									k[w] -= k[w - 1]
								}
							}
							p.setByName(y, k)
						}
						s.topDict.privateDict = p;
						var C = new Z;
						for (u = 0, f = i.length; u < f; u++) {
							C.add(i[u])
						}
						p.subrsIndex = C;
						var x = new X(s);
						return x.compile()
					}
				};
				return i
			}();
			var ye = function e() {
				function t(e, t) {
					this.properties = t;
					var r = new G(e, t, ae);
					this.cff = r.parse();
					var a = new X(this.cff);
					this.seacs = this.cff.seacs;
					try {
						this.data = a.compile()
					} catch (r) {
						x("Failed to compile font " + t.loadedName);
						this.data = e
					}
				}
				t.prototype = {
					get numGlyphs() {
						return this.cff.charStrings.count
					},
					getCharset: function e() {
						return this.cff.charset.charset
					},
					getGlyphMapping: function e() {
						var t = this.cff;
						var r = this.properties;
						var a = t.charset.charset;
						var i;
						var n;
						if (r.composite) {
							i = Object.create(null);
							if (t.isCIDFont) {
								for (n = 0; n < a.length; n++) {
									var s = a[n];
									var o = r.cMap.charCodeOf(s);
									i[o] = n
								}
							} else {
								for (n = 0; n < t.charStrings.count; n++) {
									i[n] = n
								}
							}
							return i
						}
						var l = t.encoding ? t.encoding.encoding : null;
						i = me(r, l, a);
						return i
					}
				};
				return t
			}();
			(function e() {
				if (typeof navigator !== "undefined" && /Windows/.test(navigator.userAgent)) {
					ae = true
				}
			})();
			(function e() {
				if (typeof navigator !== "undefined" && /Windows.*Chrome/.test(navigator.userAgent)) {
					te = true
				}
			})();
			e.ErrorFont = pe;
			e.Font = ve;
			e.FontFlags = ie;
			e.IdentityToUnicodeMap = fe;
			e.ToUnicodeMap = ue;
			e.getFontType = le
		});
		(function (e, t) {
			t(e.pdfjsCorePsParser = {}, e.pdfjsSharedUtil, e.pdfjsCoreParser)
		})(this, function (e, t, r) {
			var a = t.error;
			var i = t.isSpace;
			var n = r.EOF;
			var s = function e() {
				function t(e) {
					this.lexer = e;
					this.operators = [];
					this.token = null;
					this.prev = null
				}
				t.prototype = {
					nextToken: function e() {
						this.prev = this.token;
						this.token = this.lexer.getToken()
					},
					accept: function e(t) {
						if (this.token.type === t) {
							this.nextToken();
							return true
						}
						return false
					},
					expect: function e(t) {
						if (this.accept(t)) {
							return true
						}
						a("Unexpected symbol: found " + this.token.type + " expected " + t + ".")
					},
					parse: function e() {
						this.nextToken();
						this.expect(o.LBRACE);
						this.parseBlock();
						this.expect(o.RBRACE);
						return this.operators
					},
					parseBlock: function e() {
						while (true) {
							if (this.accept(o.NUMBER)) {
								this.operators.push(this.prev.value)
							} else if (this.accept(o.OPERATOR)) {
								this.operators.push(this.prev.value)
							} else if (this.accept(o.LBRACE)) {
								this.parseCondition()
							} else {
								return
							}
						}
					},
					parseCondition: function e() {
						var t = this.operators.length;
						this.operators.push(null, null);
						this.parseBlock();
						this.expect(o.RBRACE);
						if (this.accept(o.IF)) {
							this.operators[t] = this.operators.length;
							this.operators[t + 1] = "jz"
						} else if (this.accept(o.LBRACE)) {
							var r = this.operators.length;
							this.operators.push(null, null);
							var i = this.operators.length;
							this.parseBlock();
							this.expect(o.RBRACE);
							this.expect(o.IFELSE);
							this.operators[r] = this.operators.length;
							this.operators[r + 1] = "j";
							this.operators[t] = i;
							this.operators[t + 1] = "jz"
						} else {
							a("PS Function: error parsing conditional.")
						}
					}
				};
				return t
			}();
			var o = {
				LBRACE: 0,
				RBRACE: 1,
				NUMBER: 2,
				OPERATOR: 3,
				IF: 4,
				IFELSE: 5
			};
			var l = function e() {
				function t(e, t) {
					this.type = e;
					this.value = t
				}
				var r = Object.create(null);
				t.getOperator = function e(a) {
					var i = r[a];
					if (i) {
						return i
					}
					return r[a] = new t(o.OPERATOR, a)
				};
				t.LBRACE = new t(o.LBRACE, "{");
				t.RBRACE = new t(o.RBRACE, "}");
				t.IF = new t(o.IF, "IF");
				t.IFELSE = new t(o.IFELSE, "IFELSE");
				return t
			}();
			var c = function e() {
				function t(e) {
					this.stream = e;
					this.nextChar();
					this.strBuf = []
				}
				t.prototype = {
					nextChar: function e() {
						return this.currentChar = this.stream.getByte()
					},
					getToken: function e() {
						var t = false;
						var r = this.currentChar;
						while (true) {
							if (r < 0) {
								return n
							}
							if (t) {
								if (r === 10 || r === 13) {
									t = false
								}
							} else if (r === 37) {
								t = true
							} else if (!i(r)) {
								break
							}
							r = this.nextChar()
						}
						switch (r | 0) {
							case 48:
							case 49:
							case 50:
							case 51:
							case 52:
							case 53:
							case 54:
							case 55:
							case 56:
							case 57:
							case 43:
							case 45:
							case 46:
								return new l(o.NUMBER, this.getNumber());
							case 123:
								this.nextChar();
								return l.LBRACE;
							case 125:
								this.nextChar();
								return l.RBRACE
						}
						var a = this.strBuf;
						a.length = 0;
						a[0] = String.fromCharCode(r);
						while ((r = this.nextChar()) >= 0 && (r >= 65 && r <= 90 || r >= 97 && r <= 122)) {
							a.push(String.fromCharCode(r))
						}
						var s = a.join("");
						switch (s.toLowerCase()) {
							case "if":
								return l.IF;
							case "ifelse":
								return l.IFELSE;
							default:
								return l.getOperator(s)
						}
					},
					getNumber: function e() {
						var t = this.currentChar;
						var r = this.strBuf;
						r.length = 0;
						r[0] = String.fromCharCode(t);
						while ((t = this.nextChar()) >= 0) {
							if (t >= 48 && t <= 57 || t === 45 || t === 46) {
								r.push(String.fromCharCode(t))
							} else {
								break
							}
						}
						var i = parseFloat(r.join(""));
						if (isNaN(i)) {
							a("Invalid floating point number: " + i)
						}
						return i
					}
				};
				return t
			}();
			e.PostScriptLexer = c;
			e.PostScriptParser = s
		});
		(function (e, t) {
			t(e.pdfjsCoreFunction = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCorePsParser)
		})(this, function (e, t, r, a) {
			var i = t.error;
			var n = t.info;
			var s = t.isArray;
			var o = t.isBool;
			var l = r.isDict;
			var c = r.isStream;
			var h = a.PostScriptLexer;
			var u = a.PostScriptParser;
			var f = function e() {
				var t = 0;
				var r = 2;
				var a = 3;
				var o = 4;
				return {
					getSampleArray: function e(t, r, a, i) {
						var n, s;
						var o = 1;
						for (n = 0, s = t.length; n < s; n++) {
							o *= t[n]
						}
						o *= r;
						var l = new Array(o);
						var c = 0;
						var h = 0;
						var u = 1 / (Math.pow(2, a) - 1);
						var f = i.getBytes((o * a + 7) / 8);
						var d = 0;
						for (n = 0; n < o; n++) {
							while (c < a) {
								h <<= 8;
								h |= f[d++];
								c += 8
							}
							c -= a;
							l[n] = (h >> c) * u;
							h &= (1 << c) - 1
						}
						return l
					},
					getIR: function e(t, r) {
						var a = r.dict;
						if (!a) {
							a = r
						}
						var n = [this.constructSampled, null, this.constructInterpolated, this.constructStiched, this.constructPostScript];
						var s = a.get("FunctionType");
						var o = n[s];
						if (!o) {
							i("Unknown type of function")
						}
						return o.call(this, r, a, t)
					},
					fromIR: function e(i) {
						var n = i[0];
						switch (n) {
							case t:
								return this.constructSampledFromIR(i);
							case r:
								return this.constructInterpolatedFromIR(i);
							case a:
								return this.constructStichedFromIR(i);
							default:
								return this.constructPostScriptFromIR(i)
						}
					},
					parse: function e(t, r) {
						var a = this.getIR(t, r);
						return this.fromIR(a)
					},
					parseArray: function e(t, r) {
						if (!s(r)) {
							return this.parse(t, r)
						}
						var a = [];
						for (var i = 0, n = r.length; i < n; i++) {
							var o = t.fetchIfRef(r[i]);
							a.push(f.parse(t, o))
						}
						return function (e, t, r, i) {
							for (var n = 0, s = a.length; n < s; n++) {
								a[n](e, t, r, i + n)
							}
						}
					},
					constructSampled: function e(r, a) {
						function s(e) {
							var t = e.length;
							var r = [];
							var a = 0;
							for (var i = 0; i < t; i += 2) {
								r[a] = [e[i], e[i + 1]];
								++a
							}
							return r
						}
						var o = a.getArray("Domain");
						var l = a.getArray("Range");
						if (!o || !l) {
							i("No domain or range")
						}
						var c = o.length / 2;
						var h = l.length / 2;
						o = s(o);
						l = s(l);
						var u = a.get("Size");
						var f = a.get("BitsPerSample");
						var d = a.get("Order") || 1;
						if (d !== 1) {
							n("No support for cubic spline interpolation: " + d)
						}
						var g = a.getArray("Encode");
						if (!g) {
							g = [];
							for (var v = 0; v < c; ++v) {
								g.push(0);
								g.push(u[v] - 1)
							}
						}
						g = s(g);
						var p = a.getArray("Decode");
						if (!p) {
							p = l
						} else {
							p = s(p)
						}
						var m = this.getSampleArray(u, h, f, r);
						return [t, c, o, g, p, m, u, h, Math.pow(2, f) - 1, l]
					},
					constructSampledFromIR: function e(t) {
						function r(e, t, r, a, i) {
							return a + (e - t) * ((i - a) / (r - t))
						}
						return function e(a, i, n, s) {
							var o = t[1];
							var l = t[2];
							var c = t[3];
							var h = t[4];
							var u = t[5];
							var f = t[6];
							var d = t[7];
							var g = t[9];
							var v = 1 << o;
							var p = new Float64Array(v);
							var m = new Uint32Array(v);
							var b, y;
							for (y = 0; y < v; y++) {
								p[y] = 1
							}
							var k = d,
								w = 1;
							for (b = 0; b < o; ++b) {
								var C = l[b][0];
								var x = l[b][1];
								var S = Math.min(Math.max(a[i + b], C), x);
								var A = r(S, C, x, c[b][0], c[b][1]);
								var I = f[b];
								A = Math.min(Math.max(A, 0), I - 1);
								var B = A < I - 1 ? Math.floor(A) : A - 1;
								var R = B + 1 - A;
								var T = A - B;
								var O = B * k;
								var P = O + k;
								for (y = 0; y < v; y++) {
									if (y & w) {
										p[y] *= T;
										m[y] += P
									} else {
										p[y] *= R;
										m[y] += O
									}
								}
								k *= I;
								w <<= 1
							}
							for (y = 0; y < d; ++y) {
								var E = 0;
								for (b = 0; b < v; b++) {
									E += u[m[b] + y] * p[b]
								}
								E = r(E, 0, 1, h[y][0], h[y][1]);
								n[s + y] = Math.min(Math.max(E, g[y][0]), g[y][1])
							}
						}
					},
					constructInterpolated: function e(t, a) {
						var n = a.getArray("C0") || [0];
						var o = a.getArray("C1") || [1];
						var l = a.get("N");
						if (!s(n) || !s(o)) {
							i("Illegal dictionary for interpolated function")
						}
						var c = n.length;
						var h = [];
						for (var u = 0; u < c; ++u) {
							h.push(o[u] - n[u])
						}
						return [r, n, h, l]
					},
					constructInterpolatedFromIR: function e(t) {
						var r = t[1];
						var a = t[2];
						var i = t[3];
						var n = a.length;
						return function e(t, s, o, l) {
							var c = i === 1 ? t[s] : Math.pow(t[s], i);
							for (var h = 0; h < n; ++h) {
								o[l + h] = r[h] + c * a[h]
							}
						}
					},
					constructStiched: function e(t, r, n) {
						var s = r.getArray("Domain");
						if (!s) {
							i("No domain")
						}
						var o = s.length / 2;
						if (o !== 1) {
							i("Bad domain for stiched function")
						}
						var l = r.get("Functions");
						var c = [];
						for (var h = 0, u = l.length; h < u; ++h) {
							c.push(f.getIR(n, n.fetchIfRef(l[h])))
						}
						var d = r.getArray("Bounds");
						var g = r.getArray("Encode");
						return [a, s, d, g, c]
					},
					constructStichedFromIR: function e(t) {
						var r = t[1];
						var a = t[2];
						var i = t[3];
						var n = t[4];
						var s = [];
						var o = new Float32Array(1);
						for (var l = 0, c = n.length; l < c; l++) {
							s.push(f.fromIR(n[l]))
						}
						return function e(t, n, l, c) {
							var h = function e(t, r, a) {
								if (t > a) {
									t = a
								} else if (t < r) {
									t = r
								}
								return t
							};
							var u = h(t[n], r[0], r[1]);
							for (var f = 0, d = a.length; f < d; ++f) {
								if (u < a[f]) {
									break
								}
							}
							var g = r[0];
							if (f > 0) {
								g = a[f - 1]
							}
							var v = r[1];
							if (f < a.length) {
								v = a[f]
							}
							var p = i[2 * f];
							var m = i[2 * f + 1];
							o[0] = g === v ? p : p + (u - g) * (m - p) / (v - g);
							s[f](o, 0, l, c)
						}
					},
					constructPostScript: function e(t, r, a) {
						var n = r.getArray("Domain");
						var s = r.getArray("Range");
						if (!n) {
							i("No domain.")
						}
						if (!s) {
							i("No range.")
						}
						var l = new h(t);
						var c = new u(l);
						var f = c.parse();
						return [o, n, s, f]
					},
					constructPostScriptFromIR: function e(t) {
						var r = t[1];
						var a = t[2];
						var i = t[3];
						var s = (new p).compile(i, r, a);
						if (s) {
							return new Function("src", "srcOffset", "dest", "destOffset", s)
						}
						n("Unable to compile PS function");
						var o = a.length >> 1;
						var l = r.length >> 1;
						var c = new v(i);
						var h = Object.create(null);
						var u = 2048 * 4;
						var f = u;
						var d = new Float32Array(l);
						return function e(t, r, i, n) {
							var s, u;
							var g = "";
							var v = d;
							for (s = 0; s < l; s++) {
								u = t[r + s];
								v[s] = u;
								g += u + "_"
							}
							var p = h[g];
							if (p !== undefined) {
								i.set(p, n);
								return
							}
							var m = new Float32Array(o);
							var b = c.execute(v);
							var y = b.length - o;
							for (s = 0; s < o; s++) {
								u = b[y + s];
								var k = a[s * 2];
								if (u < k) {
									u = k
								} else {
									k = a[s * 2 + 1];
									if (u > k) {
										u = k
									}
								}
								m[s] = u
							}
							if (f > 0) {
								f--;
								h[g] = m
							}
							i.set(m, n)
						}
					}
				}
			}();

			function d(e) {
				var t;
				if (typeof e !== "object") {
					return false
				} else if (l(e)) {
					t = e
				} else if (c(e)) {
					t = e.dict
				} else {
					return false
				}
				return t.has("FunctionType")
			}
			var g = function e() {
				var t = 100;

				function r(e) {
					this.stack = !e ? [] : Array.prototype.slice.call(e, 0)
				}
				r.prototype = {
					push: function e(r) {
						if (this.stack.length >= t) {
							i("PostScript function stack overflow.")
						}
						this.stack.push(r)
					},
					pop: function e() {
						if (this.stack.length <= 0) {
							i("PostScript function stack underflow.")
						}
						return this.stack.pop()
					},
					copy: function e(r) {
						if (this.stack.length + r >= t) {
							i("PostScript function stack overflow.")
						}
						var a = this.stack;
						for (var n = a.length - r, s = r - 1; s >= 0; s--, n++) {
							a.push(a[n])
						}
					},
					index: function e(t) {
						this.push(this.stack[this.stack.length - t - 1])
					},
					roll: function e(t, r) {
						var a = this.stack;
						var i = a.length - t;
						var n = a.length - 1,
							s = i + (r - Math.floor(r / t) * t),
							o, l, c;
						for (o = i, l = n; o < l; o++, l--) {
							c = a[o];
							a[o] = a[l];
							a[l] = c
						}
						for (o = i, l = s - 1; o < l; o++, l--) {
							c = a[o];
							a[o] = a[l];
							a[l] = c
						}
						for (o = s, l = n; o < l; o++, l--) {
							c = a[o];
							a[o] = a[l];
							a[l] = c
						}
					}
				};
				return r
			}();
			var v = function e() {
				function t(e) {
					this.operators = e
				}
				t.prototype = {
					execute: function e(t) {
						var r = new g(t);
						var a = 0;
						var n = this.operators;
						var s = n.length;
						var l, c, h;
						while (a < s) {
							l = n[a++];
							if (typeof l === "number") {
								r.push(l);
								continue
							}
							switch (l) {
								case "jz":
									h = r.pop();
									c = r.pop();
									if (!c) {
										a = h
									}
									break;
								case "j":
									c = r.pop();
									a = c;
									break;
								case "abs":
									c = r.pop();
									r.push(Math.abs(c));
									break;
								case "add":
									h = r.pop();
									c = r.pop();
									r.push(c + h);
									break;
								case "and":
									h = r.pop();
									c = r.pop();
									if (o(c) && o(h)) {
										r.push(c && h)
									} else {
										r.push(c & h)
									}
									break;
								case "atan":
									c = r.pop();
									r.push(Math.atan(c));
									break;
								case "bitshift":
									h = r.pop();
									c = r.pop();
									if (c > 0) {
										r.push(c << h)
									} else {
										r.push(c >> h)
									}
									break;
								case "ceiling":
									c = r.pop();
									r.push(Math.ceil(c));
									break;
								case "copy":
									c = r.pop();
									r.copy(c);
									break;
								case "cos":
									c = r.pop();
									r.push(Math.cos(c));
									break;
								case "cvi":
									c = r.pop() | 0;
									r.push(c);
									break;
								case "cvr":
									break;
								case "div":
									h = r.pop();
									c = r.pop();
									r.push(c / h);
									break;
								case "dup":
									r.copy(1);
									break;
								case "eq":
									h = r.pop();
									c = r.pop();
									r.push(c === h);
									break;
								case "exch":
									r.roll(2, 1);
									break;
								case "exp":
									h = r.pop();
									c = r.pop();
									r.push(Math.pow(c, h));
									break;
								case "false":
									r.push(false);
									break;
								case "floor":
									c = r.pop();
									r.push(Math.floor(c));
									break;
								case "ge":
									h = r.pop();
									c = r.pop();
									r.push(c >= h);
									break;
								case "gt":
									h = r.pop();
									c = r.pop();
									r.push(c > h);
									break;
								case "idiv":
									h = r.pop();
									c = r.pop();
									r.push(c / h | 0);
									break;
								case "index":
									c = r.pop();
									r.index(c);
									break;
								case "le":
									h = r.pop();
									c = r.pop();
									r.push(c <= h);
									break;
								case "ln":
									c = r.pop();
									r.push(Math.log(c));
									break;
								case "log":
									c = r.pop();
									r.push(Math.log(c) / Math.LN10);
									break;
								case "lt":
									h = r.pop();
									c = r.pop();
									r.push(c < h);
									break;
								case "mod":
									h = r.pop();
									c = r.pop();
									r.push(c % h);
									break;
								case "mul":
									h = r.pop();
									c = r.pop();
									r.push(c * h);
									break;
								case "ne":
									h = r.pop();
									c = r.pop();
									r.push(c !== h);
									break;
								case "neg":
									c = r.pop();
									r.push(-c);
									break;
								case "not":
									c = r.pop();
									if (o(c)) {
										r.push(!c)
									} else {
										r.push(~c)
									}
									break;
								case "or":
									h = r.pop();
									c = r.pop();
									if (o(c) && o(h)) {
										r.push(c || h)
									} else {
										r.push(c | h)
									}
									break;
								case "pop":
									r.pop();
									break;
								case "roll":
									h = r.pop();
									c = r.pop();
									r.roll(c, h);
									break;
								case "round":
									c = r.pop();
									r.push(Math.round(c));
									break;
								case "sin":
									c = r.pop();
									r.push(Math.sin(c));
									break;
								case "sqrt":
									c = r.pop();
									r.push(Math.sqrt(c));
									break;
								case "sub":
									h = r.pop();
									c = r.pop();
									r.push(c - h);
									break;
								case "true":
									r.push(true);
									break;
								case "truncate":
									c = r.pop();
									c = c < 0 ? Math.ceil(c) : Math.floor(c);
									r.push(c);
									break;
								case "xor":
									h = r.pop();
									c = r.pop();
									if (o(c) && o(h)) {
										r.push(c !== h)
									} else {
										r.push(c ^ h)
									}
									break;
								default:
									i("Unknown operator " + l);
									break
							}
						}
						return r.stack
					}
				};
				return t
			}();
			var p = function e() {
				function t(e) {
					this.type = e
				}
				t.prototype.visit = function (e) {
					throw new Error("abstract method")
				};

				function r(e, r, a) {
					t.call(this, "args");
					this.index = e;
					this.min = r;
					this.max = a
				}
				r.prototype = Object.create(t.prototype);
				r.prototype.visit = function (e) {
					e.visitArgument(this)
				};

				function a(e) {
					t.call(this, "literal");
					this.number = e;
					this.min = e;
					this.max = e
				}
				a.prototype = Object.create(t.prototype);
				a.prototype.visit = function (e) {
					e.visitLiteral(this)
				};

				function i(e, r, a, i, n) {
					t.call(this, "binary");
					this.op = e;
					this.arg1 = r;
					this.arg2 = a;
					this.min = i;
					this.max = n
				}
				i.prototype = Object.create(t.prototype);
				i.prototype.visit = function (e) {
					e.visitBinaryOperation(this)
				};

				function n(e, r) {
					t.call(this, "max");
					this.arg = e;
					this.min = e.min;
					this.max = r
				}
				n.prototype = Object.create(t.prototype);
				n.prototype.visit = function (e) {
					e.visitMin(this)
				};

				function s(e, r, a) {
					t.call(this, "var");
					this.index = e;
					this.min = r;
					this.max = a
				}
				s.prototype = Object.create(t.prototype);
				s.prototype.visit = function (e) {
					e.visitVariable(this)
				};

				function o(e, r) {
					t.call(this, "definition");
					this.variable = e;
					this.arg = r
				}
				o.prototype = Object.create(t.prototype);
				o.prototype.visit = function (e) {
					e.visitVariableDefinition(this)
				};

				function l() {
					this.parts = []
				}
				l.prototype = {
					visitArgument: function (e) {
						this.parts.push("Math.max(", e.min, ", Math.min(", e.max, ", src[srcOffset + ", e.index, "]))")
					},
					visitVariable: function (e) {
						this.parts.push("v", e.index)
					},
					visitLiteral: function (e) {
						this.parts.push(e.number)
					},
					visitBinaryOperation: function (e) {
						this.parts.push("(");
						e.arg1.visit(this);
						this.parts.push(" ", e.op, " ");
						e.arg2.visit(this);
						this.parts.push(")")
					},
					visitVariableDefinition: function (e) {
						this.parts.push("var ");
						e.variable.visit(this);
						this.parts.push(" = ");
						e.arg.visit(this);
						this.parts.push(";")
					},
					visitMin: function (e) {
						this.parts.push("Math.min(");
						e.arg.visit(this);
						this.parts.push(", ", e.max, ")")
					},
					toString: function () {
						return this.parts.join("")
					}
				};

				function c(e, t) {
					if (t.type === "literal" && t.number === 0) {
						return e
					}
					if (e.type === "literal" && e.number === 0) {
						return t
					}
					if (t.type === "literal" && e.type === "literal") {
						return new a(e.number + t.number)
					}
					return new i("+", e, t, e.min + t.min, e.max + t.max)
				}

				function h(e, t) {
					if (t.type === "literal") {
						if (t.number === 0) {
							return new a(0)
						} else if (t.number === 1) {
							return e
						} else if (e.type === "literal") {
							return new a(e.number * t.number)
						}
					}
					if (e.type === "literal") {
						if (e.number === 0) {
							return new a(0)
						} else if (e.number === 1) {
							return t
						}
					}
					var r = Math.min(e.min * t.min, e.min * t.max, e.max * t.min, e.max * t.max);
					var n = Math.max(e.min * t.min, e.min * t.max, e.max * t.min, e.max * t.max);
					return new i("*", e, t, r, n)
				}

				function u(e, t) {
					if (t.type === "literal") {
						if (t.number === 0) {
							return e
						} else if (e.type === "literal") {
							return new a(e.number - t.number)
						}
					}
					if (t.type === "binary" && t.op === "-" && e.type === "literal" && e.number === 1 && t.arg1.type === "literal" && t.arg1.number === 1) {
						return t.arg2
					}
					return new i("-", e, t, e.min - t.max, e.max - t.min)
				}

				function f(e, t) {
					if (e.min >= t) {
						return new a(t)
					} else if (e.max <= t) {
						return e
					}
					return new n(e, t)
				}

				function d() {}
				d.prototype = {
					compile: function e(t, i, n) {
						var d = [];
						var g, v;
						var p = [];
						var m = i.length >> 1,
							b = n.length >> 1;
						var y = 0;
						var k, w;
						var C, x, S, A, I, B;
						for (g = 0; g < m; g++) {
							d.push(new r(g, i[g * 2], i[g * 2 + 1]))
						}
						for (g = 0, v = t.length; g < v; g++) {
							B = t[g];
							if (typeof B === "number") {
								d.push(new a(B));
								continue
							}
							switch (B) {
								case "add":
									if (d.length < 2) {
										return null
									}
									x = d.pop();
									C = d.pop();
									d.push(c(C, x));
									break;
								case "cvr":
									if (d.length < 1) {
										return null
									}
									break;
								case "mul":
									if (d.length < 2) {
										return null
									}
									x = d.pop();
									C = d.pop();
									d.push(h(C, x));
									break;
								case "sub":
									if (d.length < 2) {
										return null
									}
									x = d.pop();
									C = d.pop();
									d.push(u(C, x));
									break;
								case "exch":
									if (d.length < 2) {
										return null
									}
									S = d.pop();
									A = d.pop();
									d.push(S, A);
									break;
								case "pop":
									if (d.length < 1) {
										return null
									}
									d.pop();
									break;
								case "index":
									if (d.length < 1) {
										return null
									}
									C = d.pop();
									if (C.type !== "literal") {
										return null
									}
									k = C.number;
									if (k < 0 || (k | 0) !== k || d.length < k) {
										return null
									}
									S = d[d.length - k - 1];
									if (S.type === "literal" || S.type === "var") {
										d.push(S);
										break
									}
									I = new s(y++, S.min, S.max);
									d[d.length - k - 1] = I;
									d.push(I);
									p.push(new o(I, S));
									break;
								case "dup":
									if (d.length < 1) {
										return null
									}
									if (typeof t[g + 1] === "number" && t[g + 2] === "gt" && t[g + 3] === g + 7 && t[g + 4] === "jz" && t[g + 5] === "pop" && t[g + 6] === t[g + 1]) {
										C = d.pop();
										d.push(f(C, t[g + 1]));
										g += 6;
										break
									}
									S = d[d.length - 1];
									if (S.type === "literal" || S.type === "var") {
										d.push(S);
										break
									}
									I = new s(y++, S.min, S.max);
									d[d.length - 1] = I;
									d.push(I);
									p.push(new o(I, S));
									break;
								case "roll":
									if (d.length < 2) {
										return null
									}
									x = d.pop();
									C = d.pop();
									if (x.type !== "literal" || C.type !== "literal") {
										return null
									}
									w = x.number;
									k = C.number;
									if (k <= 0 || (k | 0) !== k || (w | 0) !== w || d.length < k) {
										return null
									}
									w = (w % k + k) % k;
									if (w === 0) {
										break
									}
									Array.prototype.push.apply(d, d.splice(d.length - k, k - w));
									break;
								default:
									return null
							}
						}
						if (d.length !== b) {
							return null
						}
						var R = [];
						p.forEach(function (e) {
							var t = new l;
							e.visit(t);
							R.push(t.toString())
						});
						d.forEach(function (e, t) {
							var r = new l;
							e.visit(r);
							var a = n[t * 2],
								i = n[t * 2 + 1];
							var s = [r.toString()];
							if (a > e.min) {
								s.unshift("Math.max(", a, ", ");
								s.push(")")
							}
							if (i < e.max) {
								s.unshift("Math.min(", i, ", ");
								s.push(")")
							}
							s.unshift("dest[destOffset + ", t, "] = ");
							s.push(";");
							R.push(s.join(""))
						});
						return R.join("\n")
					}
				};
				return d
			}();
			e.isPDFFunction = d;
			e.PDFFunction = f;
			e.PostScriptEvaluator = v;
			e.PostScriptCompiler = p
		});
		(function (e, t) {
			t(e.pdfjsCoreColorSpace = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreFunction)
		})(this, function (e, t, r, a) {
			var i = t.error;
			var n = t.info;
			var s = t.isArray;
			var o = t.isString;
			var l = t.shadow;
			var c = t.warn;
			var h = r.isDict;
			var u = r.isName;
			var f = r.isStream;
			var d = a.PDFFunction;
			var g = function e() {
				function t(e, t, r, a, i, n, s, o) {
					var l = 3;
					s = s !== 1 ? 0 : s;
					var c = r / i;
					var h = a / n;
					var u, f, d, g = 0,
						v;
					var p = new Uint16Array(i);
					var m = r * l;
					for (u = 0; u < i; u++) {
						p[u] = Math.floor(u * c) * l
					}
					for (u = 0; u < n; u++) {
						d = Math.floor(u * h) * m;
						for (f = 0; f < i; f++) {
							v = d + p[f];
							o[g++] = e[v++];
							o[g++] = e[v++];
							o[g++] = e[v++];
							g += s
						}
					}
				}

				function r() {
					i("should not call ColorSpace constructor")
				}
				r.prototype = {
					getRgb: function e(t, r) {
						var a = new Uint8Array(3);
						this.getRgbItem(t, r, a, 0);
						return a
					},
					getRgbItem: function e(t, r, a, n) {
						i("Should not call ColorSpace.getRgbItem")
					},
					getRgbBuffer: function e(t, r, a, n, s, o, l) {
						i("Should not call ColorSpace.getRgbBuffer")
					},
					getOutputLength: function e(t, r) {
						i("Should not call ColorSpace.getOutputLength")
					},
					isPassthrough: function e(t) {
						return false
					},
					fillRgb: function e(r, a, i, n, s, o, l, c, h) {
						var u = a * i;
						var f = null;
						var d = 1 << l;
						var g = i !== s || a !== n;
						var v, p;
						if (this.isPassthrough(l)) {
							f = c
						} else if (this.numComps === 1 && u > d && this.name !== "DeviceGray" && this.name !== "DeviceRGB") {
							var m = l <= 8 ? new Uint8Array(d) : new Uint16Array(d);
							var b;
							for (v = 0; v < d; v++) {
								m[v] = v
							}
							var y = new Uint8Array(d * 3);
							this.getRgbBuffer(m, 0, d, y, 0, l, 0);
							var k, w;
							if (!g) {
								k = 0;
								for (v = 0; v < u; ++v) {
									b = c[v] * 3;
									r[k++] = y[b];
									r[k++] = y[b + 1];
									r[k++] = y[b + 2];
									k += h
								}
							} else {
								f = new Uint8Array(u * 3);
								w = 0;
								for (v = 0; v < u; ++v) {
									b = c[v] * 3;
									f[w++] = y[b];
									f[w++] = y[b + 1];
									f[w++] = y[b + 2]
								}
							}
						} else {
							if (!g) {
								this.getRgbBuffer(c, 0, n * o, r, 0, l, h)
							} else {
								f = new Uint8Array(u * 3);
								this.getRgbBuffer(c, 0, u, f, 0, l, 0)
							}
						}
						if (f) {
							if (g) {
								t(f, l, a, i, n, s, h, r)
							} else {
								w = 0;
								k = 0;
								for (v = 0, p = n * o; v < p; v++) {
									r[k++] = f[w++];
									r[k++] = f[w++];
									r[k++] = f[w++];
									k += h
								}
							}
						}
					},
					usesZeroToOneRange: true
				};
				r.parse = function e(t, a, i) {
					var n = r.parseToIR(t, a, i);
					if (n instanceof v) {
						return n
					}
					return r.fromIR(n)
				};
				r.fromIR = function e(t) {
					var a = s(t) ? t[0] : t;
					var n, o, l;
					switch (a) {
						case "DeviceGrayCS":
							return this.singletons.gray;
						case "DeviceRgbCS":
							return this.singletons.rgb;
						case "DeviceCmykCS":
							return this.singletons.cmyk;
						case "CalGrayCS":
							n = t[1];
							o = t[2];
							l = t[3];
							return new w(n, o, l);
						case "CalRGBCS":
							n = t[1];
							o = t[2];
							l = t[3];
							var c = t[4];
							return new C(n, o, l, c);
						case "PatternCS":
							var h = t[1];
							if (h) {
								h = r.fromIR(h)
							}
							return new p(h);
						case "IndexedCS":
							var u = t[1];
							var f = t[2];
							var g = t[3];
							return new m(r.fromIR(u), f, g);
						case "AlternateCS":
							var b = t[1];
							var y = t[2];
							var k = t[3];
							return new v(b, r.fromIR(y), d.fromIR(k));
						case "LabCS":
							n = t[1];
							o = t[2];
							var S = t[3];
							return new x(n, o, S);
						default:
							i("Unknown name " + a)
					}
					return null
				};
				r.parseToIR = function e(t, a, n) {
					if (u(t)) {
						var o = n.get("ColorSpace");
						if (h(o)) {
							var l = o.get(t.name);
							if (l) {
								t = l
							}
						}
					}
					t = a.fetchIfRef(t);
					if (u(t)) {
						switch (t.name) {
							case "DeviceGray":
							case "G":
								return "DeviceGrayCS";
							case "DeviceRGB":
							case "RGB":
								return "DeviceRgbCS";
							case "DeviceCMYK":
							case "CMYK":
								return "DeviceCmykCS";
							case "Pattern":
								return ["PatternCS", null];
							default:
								i("unrecognized colorspace " + t.name)
						}
					} else if (s(t)) {
						var g = a.fetchIfRef(t[0]).name;
						var v, p, m, b, y, k;
						switch (g) {
							case "DeviceGray":
							case "G":
								return "DeviceGrayCS";
							case "DeviceRGB":
							case "RGB":
								return "DeviceRgbCS";
							case "DeviceCMYK":
							case "CMYK":
								return "DeviceCmykCS";
							case "CalGray":
								p = a.fetchIfRef(t[1]);
								b = p.getArray("WhitePoint");
								y = p.getArray("BlackPoint");
								k = p.get("Gamma");
								return ["CalGrayCS", b, y, k];
							case "CalRGB":
								p = a.fetchIfRef(t[1]);
								b = p.getArray("WhitePoint");
								y = p.getArray("BlackPoint");
								k = p.getArray("Gamma");
								var w = p.getArray("Matrix");
								return ["CalRGBCS", b, y, k, w];
							case "ICCBased":
								var C = a.fetchIfRef(t[1]);
								var x = C.dict;
								v = x.get("N");
								m = x.get("Alternate");
								if (m) {
									var S = r.parseToIR(m, a, n);
									var A = r.fromIR(S);
									if (A.numComps === v) {
										return S
									}
									c("ICCBased color space: Ignoring incorrect /Alternate entry.")
								}
								if (v === 1) {
									return "DeviceGrayCS"
								} else if (v === 3) {
									return "DeviceRgbCS"
								} else if (v === 4) {
									return "DeviceCmykCS"
								}
								break;
							case "Pattern":
								var I = t[1] || null;
								if (I) {
									I = r.parseToIR(I, a, n)
								}
								return ["PatternCS", I];
							case "Indexed":
							case "I":
								var B = r.parseToIR(t[1], a, n);
								var R = a.fetchIfRef(t[2]) + 1;
								var T = a.fetchIfRef(t[3]);
								if (f(T)) {
									T = T.getBytes()
								}
								return ["IndexedCS", B, R, T];
							case "Separation":
							case "DeviceN":
								var O = a.fetchIfRef(t[1]);
								v = s(O) ? O.length : 1;
								m = r.parseToIR(t[2], a, n);
								var P = d.getIR(a, a.fetchIfRef(t[3]));
								return ["AlternateCS", v, m, P];
							case "Lab":
								p = a.fetchIfRef(t[1]);
								b = p.getArray("WhitePoint");
								y = p.getArray("BlackPoint");
								var E = p.getArray("Range");
								return ["LabCS", b, y, E];
							default:
								i('unimplemented color space object "' + g + '"')
						}
					} else {
						i('unrecognized color space object: "' + t + '"')
					}
					return null
				};
				r.isDefaultDecode = function e(t, r) {
					if (!s(t)) {
						return true
					}
					if (r * 2 !== t.length) {
						c("The decode map is not the correct length");
						return true
					}
					for (var a = 0, i = t.length; a < i; a += 2) {
						if (t[a] !== 0 || t[a + 1] !== 1) {
							return false
						}
					}
					return true
				};
				r.singletons = {
					get gray() {
						return l(this, "gray", new b)
					},
					get rgb() {
						return l(this, "rgb", new y)
					},
					get cmyk() {
						return l(this, "cmyk", new k)
					}
				};
				return r
			}();
			var v = function e() {
				function t(e, t, r) {
					this.name = "Alternate";
					this.numComps = e;
					this.defaultColor = new Float32Array(e);
					for (var a = 0; a < e; ++a) {
						this.defaultColor[a] = 1
					}
					this.base = t;
					this.tintFn = r;
					this.tmpBuf = new Float32Array(t.numComps)
				}
				t.prototype = {
					getRgb: g.prototype.getRgb,
					getRgbItem: function e(t, r, a, i) {
						var n = this.tmpBuf;
						this.tintFn(t, r, n, 0);
						this.base.getRgbItem(n, 0, a, i)
					},
					getRgbBuffer: function e(t, r, a, i, n, s, o) {
						var l = this.tintFn;
						var c = this.base;
						var h = 1 / ((1 << s) - 1);
						var u = c.numComps;
						var f = c.usesZeroToOneRange;
						var d = (c.isPassthrough(8) || !f) && o === 0;
						var g = d ? n : 0;
						var v = d ? i : new Uint8Array(u * a);
						var p = this.numComps;
						var m = new Float32Array(p);
						var b = new Float32Array(u);
						var y, k;
						for (y = 0; y < a; y++) {
							for (k = 0; k < p; k++) {
								m[k] = t[r++] * h
							}
							l(m, 0, b, 0);
							if (f) {
								for (k = 0; k < u; k++) {
									v[g++] = b[k] * 255
								}
							} else {
								c.getRgbItem(b, 0, v, g);
								g += u
							}
						}
						if (!d) {
							c.getRgbBuffer(v, 0, a, i, n, 8, o)
						}
					},
					getOutputLength: function e(t, r) {
						return this.base.getOutputLength(t * this.base.numComps / this.numComps, r)
					},
					isPassthrough: g.prototype.isPassthrough,
					fillRgb: g.prototype.fillRgb,
					isDefaultDecode: function e(t) {
						return g.isDefaultDecode(t, this.numComps)
					},
					usesZeroToOneRange: true
				};
				return t
			}();
			var p = function e() {
				function t(e) {
					this.name = "Pattern";
					this.base = e
				}
				t.prototype = {};
				return t
			}();
			var m = function e() {
				function t(e, t, r) {
					this.name = "Indexed";
					this.numComps = 1;
					this.defaultColor = new Uint8Array(this.numComps);
					this.base = e;
					this.highVal = t;
					var a = e.numComps;
					var n = a * t;
					if (f(r)) {
						this.lookup = new Uint8Array(n);
						var s = r.getBytes(n);
						this.lookup.set(s)
					} else if (o(r)) {
						this.lookup = new Uint8Array(n);
						for (var l = 0; l < n; ++l) {
							this.lookup[l] = r.charCodeAt(l)
						}
					} else if (r instanceof Uint8Array || r instanceof Array) {
						this.lookup = r
					} else {
						i("Unrecognized lookup table: " + r)
					}
				}
				t.prototype = {
					getRgb: g.prototype.getRgb,
					getRgbItem: function e(t, r, a, i) {
						var n = this.base.numComps;
						var s = t[r] * n;
						this.base.getRgbItem(this.lookup, s, a, i)
					},
					getRgbBuffer: function e(t, r, a, i, n, s, o) {
						var l = this.base;
						var c = l.numComps;
						var h = l.getOutputLength(c, o);
						var u = this.lookup;
						for (var f = 0; f < a; ++f) {
							var d = t[r++] * c;
							l.getRgbBuffer(u, d, 1, i, n, 8, o);
							n += h
						}
					},
					getOutputLength: function e(t, r) {
						return this.base.getOutputLength(t * this.base.numComps, r)
					},
					isPassthrough: g.prototype.isPassthrough,
					fillRgb: g.prototype.fillRgb,
					isDefaultDecode: function e(t) {
						return true
					},
					usesZeroToOneRange: true
				};
				return t
			}();
			var b = function e() {
				function t() {
					this.name = "DeviceGray";
					this.numComps = 1;
					this.defaultColor = new Float32Array(this.numComps)
				}
				t.prototype = {
					getRgb: g.prototype.getRgb,
					getRgbItem: function e(t, r, a, i) {
						var n = t[r] * 255 | 0;
						n = n < 0 ? 0 : n > 255 ? 255 : n;
						a[i] = a[i + 1] = a[i + 2] = n
					},
					getRgbBuffer: function e(t, r, a, i, n, s, o) {
						var l = 255 / ((1 << s) - 1);
						var c = r,
							h = n;
						for (var u = 0; u < a; ++u) {
							var f = l * t[c++] | 0;
							i[h++] = f;
							i[h++] = f;
							i[h++] = f;
							h += o
						}
					},
					getOutputLength: function e(t, r) {
						return t * (3 + r)
					},
					isPassthrough: g.prototype.isPassthrough,
					fillRgb: g.prototype.fillRgb,
					isDefaultDecode: function e(t) {
						return g.isDefaultDecode(t, this.numComps)
					},
					usesZeroToOneRange: true
				};
				return t
			}();
			var y = function e() {
				function t() {
					this.name = "DeviceRGB";
					this.numComps = 3;
					this.defaultColor = new Float32Array(this.numComps)
				}
				t.prototype = {
					getRgb: g.prototype.getRgb,
					getRgbItem: function e(t, r, a, i) {
						var n = t[r] * 255 | 0;
						var s = t[r + 1] * 255 | 0;
						var o = t[r + 2] * 255 | 0;
						a[i] = n < 0 ? 0 : n > 255 ? 255 : n;
						a[i + 1] = s < 0 ? 0 : s > 255 ? 255 : s;
						a[i + 2] = o < 0 ? 0 : o > 255 ? 255 : o
					},
					getRgbBuffer: function e(t, r, a, i, n, s, o) {
						if (s === 8 && o === 0) {
							i.set(t.subarray(r, r + a * 3), n);
							return
						}
						var l = 255 / ((1 << s) - 1);
						var c = r,
							h = n;
						for (var u = 0; u < a; ++u) {
							i[h++] = l * t[c++] | 0;
							i[h++] = l * t[c++] | 0;
							i[h++] = l * t[c++] | 0;
							h += o
						}
					},
					getOutputLength: function e(t, r) {
						return t * (3 + r) / 3 | 0
					},
					isPassthrough: function e(t) {
						return t === 8
					},
					fillRgb: g.prototype.fillRgb,
					isDefaultDecode: function e(t) {
						return g.isDefaultDecode(t, this.numComps)
					},
					usesZeroToOneRange: true
				};
				return t
			}();
			var k = function e() {
				function t(e, t, r, a, i) {
					var n = e[t + 0] * r;
					var s = e[t + 1] * r;
					var o = e[t + 2] * r;
					var l = e[t + 3] * r;
					var c = n * (-4.387332384609988 * n + 54.48615194189176 * s + 18.82290502165302 * o + 212.25662451639585 * l + -285.2331026137004) + s * (1.7149763477362134 * s - 5.6096736904047315 * o + -17.873870861415444 * l - 5.497006427196366) + o * (-2.5217340131683033 * o - 21.248923337353073 * l + 17.5119270841813) + l * (-21.86122147463605 * l - 189.48180835922747) + 255 | 0;
					var h = n * (8.841041422036149 * n + 60.118027045597366 * s + 6.871425592049007 * o + 31.159100130055922 * l + -79.2970844816548) + s * (-15.310361306967817 * s + 17.575251261109482 * o + 131.35250912493976 * l - 190.9453302588951) + o * (4.444339102852739 * o + 9.8632861493405 * l - 24.86741582555878) + l * (-20.737325471181034 * l - 187.80453709719578) + 255 | 0;
					var u = n * (.8842522430003296 * n + 8.078677503112928 * s + 30.89978309703729 * o - .23883238689178934 * l + -14.183576799673286) + s * (10.49593273432072 * s + 63.02378494754052 * o + 50.606957656360734 * l - 112.23884253719248) + o * (.03296041114873217 * o + 115.60384449646641 * l + -193.58209356861505) + l * (-22.33816807309886 * l - 180.12613974708367) + 255 | 0;
					a[i] = c > 255 ? 255 : c < 0 ? 0 : c;
					a[i + 1] = h > 255 ? 255 : h < 0 ? 0 : h;
					a[i + 2] = u > 255 ? 255 : u < 0 ? 0 : u
				}

				function r() {
					this.name = "DeviceCMYK";
					this.numComps = 4;
					this.defaultColor = new Float32Array(this.numComps);
					this.defaultColor[3] = 1
				}
				r.prototype = {
					getRgb: g.prototype.getRgb,
					getRgbItem: function e(r, a, i, n) {
						t(r, a, 1, i, n)
					},
					getRgbBuffer: function e(r, a, i, n, s, o, l) {
						var c = 1 / ((1 << o) - 1);
						for (var h = 0; h < i; h++) {
							t(r, a, c, n, s);
							a += 4;
							s += 3 + l
						}
					},
					getOutputLength: function e(t, r) {
						return t / 4 * (3 + r) | 0
					},
					isPassthrough: g.prototype.isPassthrough,
					fillRgb: g.prototype.fillRgb,
					isDefaultDecode: function e(t) {
						return g.isDefaultDecode(t, this.numComps)
					},
					usesZeroToOneRange: true
				};
				return r
			}();
			var w = function e() {
				function t(e, t, r) {
					this.name = "CalGray";
					this.numComps = 1;
					this.defaultColor = new Float32Array(this.numComps);
					if (!e) {
						i("WhitePoint missing - required for color space CalGray")
					}
					t = t || [0, 0, 0];
					r = r || 1;
					this.XW = e[0];
					this.YW = e[1];
					this.ZW = e[2];
					this.XB = t[0];
					this.YB = t[1];
					this.ZB = t[2];
					this.G = r;
					if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
						i("Invalid WhitePoint components for " + this.name + ", no fallback available")
					}
					if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
						n("Invalid BlackPoint for " + this.name + ", falling back to default");
						this.XB = this.YB = this.ZB = 0
					}
					if (this.XB !== 0 || this.YB !== 0 || this.ZB !== 0) {
						c(this.name + ", BlackPoint: XB: " + this.XB + ", YB: " + this.YB + ", ZB: " + this.ZB + ", only default values are supported.")
					}
					if (this.G < 1) {
						n("Invalid Gamma: " + this.G + " for " + this.name + ", falling back to default");
						this.G = 1
					}
				}

				function r(e, t, r, a, i, n) {
					var s = t[r] * n;
					var o = Math.pow(s, e.G);
					var l = e.YW * o;
					var c = Math.max(295.8 * Math.pow(l, .3333333333333333) - 40.8, 0) | 0;
					a[i] = c;
					a[i + 1] = c;
					a[i + 2] = c
				}
				t.prototype = {
					getRgb: g.prototype.getRgb,
					getRgbItem: function e(t, a, i, n) {
						r(this, t, a, i, n, 1)
					},
					getRgbBuffer: function e(t, a, i, n, s, o, l) {
						var c = 1 / ((1 << o) - 1);
						for (var h = 0; h < i; ++h) {
							r(this, t, a, n, s, c);
							a += 1;
							s += 3 + l
						}
					},
					getOutputLength: function e(t, r) {
						return t * (3 + r)
					},
					isPassthrough: g.prototype.isPassthrough,
					fillRgb: g.prototype.fillRgb,
					isDefaultDecode: function e(t) {
						return g.isDefaultDecode(t, this.numComps)
					},
					usesZeroToOneRange: true
				};
				return t
			}();
			var C = function e() {
				var t = new Float32Array([.8951, .2664, -.1614, -.7502, 1.7135, .0367, .0389, -.0685, 1.0296]);
				var r = new Float32Array([.9869929, -.1470543, .1599627, .4323053, .5183603, .0492912, -.0085287, .0400428, .9684867]);
				var a = new Float32Array([3.2404542, -1.5371385, -.4985314, -.969266, 1.8760108, .041556, .0556434, -.2040259, 1.0572252]);
				var s = new Float32Array([1, 1, 1]);
				var o = new Float32Array(3);
				var l = new Float32Array(3);
				var c = new Float32Array(3);
				var h = Math.pow((8 + 16) / 116, 3) / 8;

				function u(e, t, r, a) {
					this.name = "CalRGB";
					this.numComps = 3;
					this.defaultColor = new Float32Array(this.numComps);
					if (!e) {
						i("WhitePoint missing - required for color space CalRGB")
					}
					t = t || new Float32Array(3);
					r = r || new Float32Array([1, 1, 1]);
					a = a || new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
					var s = e[0];
					var o = e[1];
					var l = e[2];
					this.whitePoint = e;
					var c = t[0];
					var h = t[1];
					var u = t[2];
					this.blackPoint = t;
					this.GR = r[0];
					this.GG = r[1];
					this.GB = r[2];
					this.MXA = a[0];
					this.MYA = a[1];
					this.MZA = a[2];
					this.MXB = a[3];
					this.MYB = a[4];
					this.MZB = a[5];
					this.MXC = a[6];
					this.MYC = a[7];
					this.MZC = a[8];
					if (s < 0 || l < 0 || o !== 1) {
						i("Invalid WhitePoint components for " + this.name + ", no fallback available")
					}
					if (c < 0 || h < 0 || u < 0) {
						n("Invalid BlackPoint for " + this.name + " [" + c + ", " + h + ", " + u + "], falling back to default");
						this.blackPoint = new Float32Array(3)
					}
					if (this.GR < 0 || this.GG < 0 || this.GB < 0) {
						n("Invalid Gamma [" + this.GR + ", " + this.GG + ", " + this.GB + "] for " + this.name + ", falling back to default");
						this.GR = this.GG = this.GB = 1
					}
					if (this.MXA < 0 || this.MYA < 0 || this.MZA < 0 || this.MXB < 0 || this.MYB < 0 || this.MZB < 0 || this.MXC < 0 || this.MYC < 0 || this.MZC < 0) {
						n("Invalid Matrix for " + this.name + " [" + this.MXA + ", " + this.MYA + ", " + this.MZA + this.MXB + ", " + this.MYB + ", " + this.MZB + this.MXC + ", " + this.MYC + ", " + this.MZC + "], falling back to default");
						this.MXA = this.MYB = this.MZC = 1;
						this.MXB = this.MYA = this.MZA = this.MXC = this.MYC = this.MZB = 0
					}
				}

				function f(e, t, r) {
					r[0] = e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
					r[1] = e[3] * t[0] + e[4] * t[1] + e[5] * t[2];
					r[2] = e[6] * t[0] + e[7] * t[1] + e[8] * t[2]
				}

				function d(e, t, r) {
					r[0] = t[0] * 1 / e[0];
					r[1] = t[1] * 1 / e[1];
					r[2] = t[2] * 1 / e[2]
				}

				function v(e, t, r) {
					var a = .95047;
					var i = 1;
					var n = 1.08883;
					r[0] = t[0] * a / e[0];
					r[1] = t[1] * i / e[1];
					r[2] = t[2] * n / e[2]
				}

				function p(e) {
					if (e <= .0031308) {
						return m(0, 1, 12.92 * e)
					}
					return m(0, 1, (1 + .055) * Math.pow(e, 1 / 2.4) - .055)
				}

				function m(e, t, r) {
					return Math.max(e, Math.min(t, r))
				}

				function b(e) {
					if (e < 0) {
						return -b(-e)
					}
					if (e > 8) {
						return Math.pow((e + 16) / 116, 3)
					}
					return e * h
				}

				function y(e, t, r) {
					if (e[0] === 0 && e[1] === 0 && e[2] === 0) {
						r[0] = t[0];
						r[1] = t[1];
						r[2] = t[2];
						return
					}
					var a = b(0);
					var i = a;
					var n = b(e[0]);
					var s = a;
					var o = b(e[1]);
					var l = a;
					var c = b(e[2]);
					var h = (1 - i) / (1 - n);
					var u = 1 - h;
					var f = (1 - s) / (1 - o);
					var d = 1 - f;
					var g = (1 - l) / (1 - c);
					var v = 1 - g;
					r[0] = t[0] * h + u;
					r[1] = t[1] * f + d;
					r[2] = t[2] * g + v
				}

				function k(e, a, i) {
					if (e[0] === 1 && e[2] === 1) {
						i[0] = a[0];
						i[1] = a[1];
						i[2] = a[2];
						return
					}
					var n = i;
					f(t, a, n);
					var s = o;
					d(e, n, s);
					f(r, s, i)
				}

				function w(e, a, i) {
					var n = i;
					f(t, a, n);
					var s = o;
					v(e, n, s);
					f(r, s, i)
				}

				function C(e, t, r, i, n, o) {
					var h = m(0, 1, t[r] * o);
					var u = m(0, 1, t[r + 1] * o);
					var d = m(0, 1, t[r + 2] * o);
					var g = Math.pow(h, e.GR);
					var v = Math.pow(u, e.GG);
					var b = Math.pow(d, e.GB);
					var C = e.MXA * g + e.MXB * v + e.MXC * b;
					var x = e.MYA * g + e.MYB * v + e.MYC * b;
					var S = e.MZA * g + e.MZB * v + e.MZC * b;
					var A = l;
					A[0] = C;
					A[1] = x;
					A[2] = S;
					var I = c;
					k(e.whitePoint, A, I);
					var B = l;
					y(e.blackPoint, I, B);
					var R = c;
					w(s, B, R);
					var T = l;
					f(a, R, T);
					var O = p(T[0]);
					var P = p(T[1]);
					var E = p(T[2]);
					i[n] = Math.round(O * 255);
					i[n + 1] = Math.round(P * 255);
					i[n + 2] = Math.round(E * 255)
				}
				u.prototype = {
					getRgb: function e(t, r) {
						var a = new Uint8Array(3);
						this.getRgbItem(t, r, a, 0);
						return a
					},
					getRgbItem: function e(t, r, a, i) {
						C(this, t, r, a, i, 1)
					},
					getRgbBuffer: function e(t, r, a, i, n, s, o) {
						var l = 1 / ((1 << s) - 1);
						for (var c = 0; c < a; ++c) {
							C(this, t, r, i, n, l);
							r += 3;
							n += 3 + o
						}
					},
					getOutputLength: function e(t, r) {
						return t * (3 + r) / 3 | 0
					},
					isPassthrough: g.prototype.isPassthrough,
					fillRgb: g.prototype.fillRgb,
					isDefaultDecode: function e(t) {
						return g.isDefaultDecode(t, this.numComps)
					},
					usesZeroToOneRange: true
				};
				return u
			}();
			var x = function e() {
				function t(e, t, r) {
					this.name = "Lab";
					this.numComps = 3;
					this.defaultColor = new Float32Array(this.numComps);
					if (!e) {
						i("WhitePoint missing - required for color space Lab")
					}
					t = t || [0, 0, 0];
					r = r || [-100, 100, -100, 100];
					this.XW = e[0];
					this.YW = e[1];
					this.ZW = e[2];
					this.amin = r[0];
					this.amax = r[1];
					this.bmin = r[2];
					this.bmax = r[3];
					this.XB = t[0];
					this.YB = t[1];
					this.ZB = t[2];
					if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
						i("Invalid WhitePoint components, no fallback available")
					}
					if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
						n("Invalid BlackPoint, falling back to default");
						this.XB = this.YB = this.ZB = 0
					}
					if (this.amin > this.amax || this.bmin > this.bmax) {
						n("Invalid Range, falling back to defaults");
						this.amin = -100;
						this.amax = 100;
						this.bmin = -100;
						this.bmax = 100
					}
				}

				function r(e) {
					var t;
					if (e >= 6 / 29) {
						t = e * e * e
					} else {
						t = 108 / 841 * (e - 4 / 29)
					}
					return t
				}

				function a(e, t, r, a) {
					return r + e * (a - r) / t
				}

				function s(e, t, i, n, s, o) {
					var l = t[i];
					var c = t[i + 1];
					var h = t[i + 2];
					if (n !== false) {
						l = a(l, n, 0, 100);
						c = a(c, n, e.amin, e.amax);
						h = a(h, n, e.bmin, e.bmax)
					}
					c = c > e.amax ? e.amax : c < e.amin ? e.amin : c;
					h = h > e.bmax ? e.bmax : h < e.bmin ? e.bmin : h;
					var u = (l + 16) / 116;
					var f = u + c / 500;
					var d = u - h / 200;
					var g = e.XW * r(f);
					var v = e.YW * r(u);
					var p = e.ZW * r(d);
					var m, b, y;
					if (e.ZW < 1) {
						m = g * 3.1339 + v * -1.617 + p * -.4906;
						b = g * -.9785 + v * 1.916 + p * .0333;
						y = g * .072 + v * -.229 + p * 1.4057
					} else {
						m = g * 3.2406 + v * -1.5372 + p * -.4986;
						b = g * -.9689 + v * 1.8758 + p * .0415;
						y = g * .0557 + v * -.204 + p * 1.057
					}
					s[o] = m <= 0 ? 0 : m >= 1 ? 255 : Math.sqrt(m) * 255 | 0;
					s[o + 1] = b <= 0 ? 0 : b >= 1 ? 255 : Math.sqrt(b) * 255 | 0;
					s[o + 2] = y <= 0 ? 0 : y >= 1 ? 255 : Math.sqrt(y) * 255 | 0
				}
				t.prototype = {
					getRgb: g.prototype.getRgb,
					getRgbItem: function e(t, r, a, i) {
						s(this, t, r, false, a, i)
					},
					getRgbBuffer: function e(t, r, a, i, n, o, l) {
						var c = (1 << o) - 1;
						for (var h = 0; h < a; h++) {
							s(this, t, r, c, i, n);
							r += 3;
							n += 3 + l
						}
					},
					getOutputLength: function e(t, r) {
						return t * (3 + r) / 3 | 0
					},
					isPassthrough: g.prototype.isPassthrough,
					fillRgb: g.prototype.fillRgb,
					isDefaultDecode: function e(t) {
						return true
					},
					usesZeroToOneRange: false
				};
				return t
			}();
			e.ColorSpace = g
		});
		(function (e, t) {
			t(e.pdfjsCoreImage = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreColorSpace, e.pdfjsCoreStream, e.pdfjsCoreJpx)
		})(this, function (e, t, r, a, i, n) {
			var s = t.ImageKind;
			var o = t.assert;
			var l = t.error;
			var c = t.info;
			var h = t.isArray;
			var u = t.warn;
			var f = r.Name;
			var d = r.isStream;
			var g = a.ColorSpace;
			var v = i.DecodeStream;
			var p = i.JpegStream;
			var m = n.JpxImage;
			var b = function e() {
				function t(e, t) {
					if (t && t.canDecode(e)) {
						return t.decode(e)
					}
					return Promise.resolve(e)
				}

				function r(e, t, r, a) {
					e = t + e * r;
					return e < 0 ? 0 : e > a ? a : e
				}

				function a(e, t, r, a, i, n) {
					var s = i * n;
					var o = t <= 8 ? new Uint8Array(s) : t <= 16 ? new Uint16Array(s) : new Uint32Array(s);
					var l = r / i;
					var c = a / n;
					var h, u, f, d = 0,
						g;
					var v = new Uint16Array(i);
					var p = r;
					for (h = 0; h < i; h++) {
						v[h] = Math.floor(h * l)
					}
					for (h = 0; h < n; h++) {
						f = Math.floor(h * c) * p;
						for (u = 0; u < i; u++) {
							g = f + v[u];
							o[d++] = e[g]
						}
					}
					return o
				}

				function i(e, t, r, a, n, s, o) {
					this.image = r;
					var h = r.dict;
					if (h.has("Filter")) {
						var v = h.get("Filter").name;
						if (v === "JPXDecode") {
							var p = new m;
							p.parseImageProperties(r.stream);
							r.stream.reset();
							r.bitsPerComponent = p.bitsPerComponent;
							r.numComps = p.componentsCount
						} else if (v === "JBIG2Decode") {
							r.bitsPerComponent = 1;
							r.numComps = 1
						}
					}
					this.width = h.get("Width", "W");
					this.height = h.get("Height", "H");
					if (this.width < 1 || this.height < 1) {
						l("Invalid image width: " + this.width + " or height: " + this.height)
					}
					this.interpolate = h.get("Interpolate", "I") || false;
					this.imageMask = h.get("ImageMask", "IM") || false;
					this.matte = h.get("Matte") || false;
					var b = r.bitsPerComponent;
					if (!b) {
						b = h.get("BitsPerComponent", "BPC");
						if (!b) {
							if (this.imageMask) {
								b = 1
							} else {
								l("Bits per component missing in image: " + this.imageMask)
							}
						}
					}
					this.bpc = b;
					if (!this.imageMask) {
						var y = h.get("ColorSpace", "CS");
						if (!y) {
							c("JPX images (which do not require color spaces)");
							switch (r.numComps) {
								case 1:
									y = f.get("DeviceGray");
									break;
								case 3:
									y = f.get("DeviceRGB");
									break;
								case 4:
									y = f.get("DeviceCMYK");
									break;
								default:
									l("JPX images with " + this.numComps + " color components not supported.")
							}
						}
						this.colorSpace = g.parse(y, e, t);
						this.numComps = this.colorSpace.numComps
					}
					this.decode = h.getArray("Decode", "D");
					this.needsDecode = false;
					if (this.decode && (this.colorSpace && !this.colorSpace.isDefaultDecode(this.decode) || o && !g.isDefaultDecode(this.decode, 1))) {
						this.needsDecode = true;
						var k = (1 << b) - 1;
						this.decodeCoefficients = [];
						this.decodeAddends = [];
						for (var w = 0, C = 0; w < this.decode.length; w += 2, ++C) {
							var x = this.decode[w];
							var S = this.decode[w + 1];
							this.decodeCoefficients[C] = S - x;
							this.decodeAddends[C] = k * x
						}
					}
					if (n) {
						this.smask = new i(e, t, n, false)
					} else if (s) {
						if (d(s)) {
							var A = s.dict,
								I = A.get("ImageMask", "IM");
							if (!I) {
								u("Ignoring /Mask in image without /ImageMask.")
							} else {
								this.mask = new i(e, t, s, false, null, null, true)
							}
						} else {
							this.mask = s
						}
					}
				}
				i.buildImage = function e(r, a, n, s, o, l) {
					var c = t(s, l);
					var f;
					var g;
					var v = s.dict.get("SMask");
					var p = s.dict.get("Mask");
					if (v) {
						f = t(v, l);
						g = Promise.resolve(null)
					} else {
						f = Promise.resolve(null);
						if (p) {
							if (d(p)) {
								g = t(p, l)
							} else if (h(p)) {
								g = Promise.resolve(p)
							} else {
								u("Unsupported mask format.");
								g = Promise.resolve(null)
							}
						} else {
							g = Promise.resolve(null)
						}
					}
					return Promise.all([c, f, g]).then(function (e) {
						var t = e[0];
						var r = e[1];
						var s = e[2];
						return new i(a, n, t, o, r, s)
					})
				};
				i.createMask = function e(t, r, a, i, n) {
					var s = (r + 7 >> 3) * a;
					var o = t.byteLength;
					var l = s === o;
					var c, h;
					if (i && (!n || l)) {
						c = t
					} else if (!n) {
						c = new Uint8Array(o);
						c.set(t)
					} else {
						c = new Uint8Array(s);
						c.set(t);
						for (h = o; h < s; h++) {
							c[h] = 255
						}
					}
					if (n) {
						for (h = 0; h < o; h++) {
							c[h] = ~c[h]
						}
					}
					return {
						data: c,
						width: r,
						height: a
					}
				};
				i.prototype = {
					get drawWidth() {
						return Math.max(this.width, this.smask && this.smask.width || 0, this.mask && this.mask.width || 0)
					},
					get drawHeight() {
						return Math.max(this.height, this.smask && this.smask.height || 0, this.mask && this.mask.height || 0)
					},
					decodeBuffer: function e(t) {
						var a = this.bpc;
						var i = this.numComps;
						var n = this.decodeAddends;
						var s = this.decodeCoefficients;
						var o = (1 << a) - 1;
						var l, c;
						if (a === 1) {
							for (l = 0, c = t.length; l < c; l++) {
								t[l] = +!t[l]
							}
							return
						}
						var h = 0;
						for (l = 0, c = this.width * this.height; l < c; l++) {
							for (var u = 0; u < i; u++) {
								t[h] = r(t[h], n[u], s[u], o);
								h++
							}
						}
					},
					getComponents: function e(t) {
						var r = this.bpc;
						if (r === 8) {
							return t
						}
						var a = this.width;
						var i = this.height;
						var n = this.numComps;
						var s = a * i * n;
						var o = 0;
						var l = r <= 8 ? new Uint8Array(s) : r <= 16 ? new Uint16Array(s) : new Uint32Array(s);
						var c = a * n;
						var h = (1 << r) - 1;
						var u = 0,
							f, d;
						if (r === 1) {
							var g, v, p;
							for (var m = 0; m < i; m++) {
								v = u + (c & ~7);
								p = u + c;
								while (u < v) {
									d = t[o++];
									l[u] = d >> 7 & 1;
									l[u + 1] = d >> 6 & 1;
									l[u + 2] = d >> 5 & 1;
									l[u + 3] = d >> 4 & 1;
									l[u + 4] = d >> 3 & 1;
									l[u + 5] = d >> 2 & 1;
									l[u + 6] = d >> 1 & 1;
									l[u + 7] = d & 1;
									u += 8
								}
								if (u < p) {
									d = t[o++];
									g = 128;
									while (u < p) {
										l[u++] = +!!(d & g);
										g >>= 1
									}
								}
							}
						} else {
							var b = 0;
							d = 0;
							for (u = 0, f = s; u < f; ++u) {
								if (u % c === 0) {
									d = 0;
									b = 0
								}
								while (b < r) {
									d = d << 8 | t[o++];
									b += 8
								}
								var y = b - r;
								var k = d >> y;
								l[u] = k < 0 ? 0 : k > h ? h : k;
								d = d & (1 << y) - 1;
								b = y
							}
						}
						return l
					},
					fillOpacity: function e(t, r, n, s, o) {
						var c = this.smask;
						var u = this.mask;
						var f, d, g, v, p, m;
						if (c) {
							d = c.width;
							g = c.height;
							f = new Uint8Array(d * g);
							c.fillGrayBuffer(f);
							if (d !== r || g !== n) {
								f = a(f, c.bpc, d, g, r, n)
							}
						} else if (u) {
							if (u instanceof i) {
								d = u.width;
								g = u.height;
								f = new Uint8Array(d * g);
								u.numComps = 1;
								u.fillGrayBuffer(f);
								for (v = 0, p = d * g; v < p; ++v) {
									f[v] = 255 - f[v]
								}
								if (d !== r || g !== n) {
									f = a(f, u.bpc, d, g, r, n)
								}
							} else if (h(u)) {
								f = new Uint8Array(r * n);
								var b = this.numComps;
								for (v = 0, p = r * n; v < p; ++v) {
									var y = 0;
									var k = v * b;
									for (m = 0; m < b; ++m) {
										var w = o[k + m];
										var C = m * 2;
										if (w < u[C] || w > u[C + 1]) {
											y = 255;
											break
										}
									}
									f[v] = y
								}
							} else {
								l("Unknown mask format.")
							}
						}
						if (f) {
							for (v = 0, m = 3, p = r * s; v < p; ++v, m += 4) {
								t[m] = f[v]
							}
						} else {
							for (v = 0, m = 3, p = r * s; v < p; ++v, m += 4) {
								t[m] = 255
							}
						}
					},
					undoPreblend: function e(t, r, a) {
						var i = this.smask && this.smask.matte;
						if (!i) {
							return
						}
						var n = this.colorSpace.getRgb(i, 0);
						var s = n[0];
						var o = n[1];
						var l = n[2];
						var c = r * a * 4;
						var h, u, f;
						for (var d = 0; d < c; d += 4) {
							var g = t[d + 3];
							if (g === 0) {
								t[d] = 255;
								t[d + 1] = 255;
								t[d + 2] = 255;
								continue
							}
							var v = 255 / g;
							h = (t[d] - s) * v + s;
							u = (t[d + 1] - o) * v + o;
							f = (t[d + 2] - l) * v + l;
							t[d] = h <= 0 ? 0 : h >= 255 ? 255 : h | 0;
							t[d + 1] = u <= 0 ? 0 : u >= 255 ? 255 : u | 0;
							t[d + 2] = f <= 0 ? 0 : f >= 255 ? 255 : f | 0
						}
					},
					createImageData: function e(t) {
						var r = this.drawWidth;
						var a = this.drawHeight;
						var i = {
							width: r,
							height: a
						};
						var n = this.numComps;
						var l = this.width;
						var c = this.height;
						var h = this.bpc;
						var u = l * n * h + 7 >> 3;
						var f;
						if (!t) {
							var d;
							if (this.colorSpace.name === "DeviceGray" && h === 1) {
								d = s.GRAYSCALE_1BPP
							} else if (this.colorSpace.name === "DeviceRGB" && h === 8 && !this.needsDecode) {
								d = s.RGB_24BPP
							}
							if (d && !this.smask && !this.mask && r === l && a === c) {
								i.kind = d;
								f = this.getImageBytes(c * u);
								if (this.image instanceof v) {
									i.data = f
								} else {
									var g = new Uint8Array(f.length);
									g.set(f);
									i.data = g
								}
								if (this.needsDecode) {
									o(d === s.GRAYSCALE_1BPP);
									var m = i.data;
									for (var b = 0, y = m.length; b < y; b++) {
										m[b] ^= 255
									}
								}
								return i
							}
							if (this.image instanceof p && !this.smask && !this.mask && (this.colorSpace.name === "DeviceGray" || this.colorSpace.name === "DeviceRGB" || this.colorSpace.name === "DeviceCMYK")) {
								i.kind = s.RGB_24BPP;
								i.data = this.getImageBytes(c * u, r, a, true);
								return i
							}
						}
						f = this.getImageBytes(c * u);
						var k = 0 | f.length / u * a / c;
						var w = this.getComponents(f);
						var C, x;
						if (!t && !this.smask && !this.mask) {
							i.kind = s.RGB_24BPP;
							i.data = new Uint8Array(r * a * 3);
							C = 0;
							x = false
						} else {
							i.kind = s.RGBA_32BPP;
							i.data = new Uint8Array(r * a * 4);
							C = 1;
							x = true;
							this.fillOpacity(i.data, r, a, k, w)
						}
						if (this.needsDecode) {
							this.decodeBuffer(w)
						}
						this.colorSpace.fillRgb(i.data, l, c, r, a, k, h, w, C);
						if (x) {
							this.undoPreblend(i.data, r, k)
						}
						return i
					},
					fillGrayBuffer: function e(t) {
						var r = this.numComps;
						if (r !== 1) {
							l("Reading gray scale from a color image: " + r)
						}
						var a = this.width;
						var i = this.height;
						var n = this.bpc;
						var s = a * r * n + 7 >> 3;
						var o = this.getImageBytes(i * s);
						var c = this.getComponents(o);
						var h, u;
						if (n === 1) {
							u = a * i;
							if (this.needsDecode) {
								for (h = 0; h < u; ++h) {
									t[h] = c[h] - 1 & 255
								}
							} else {
								for (h = 0; h < u; ++h) {
									t[h] = -c[h] & 255
								}
							}
							return
						}
						if (this.needsDecode) {
							this.decodeBuffer(c)
						}
						u = a * i;
						var f = 255 / ((1 << n) - 1);
						for (h = 0; h < u; ++h) {
							t[h] = f * c[h] | 0
						}
					},
					getImageBytes: function e(t, r, a, i) {
						this.image.reset();
						this.image.drawWidth = r || this.width;
						this.image.drawHeight = a || this.height;
						this.image.forceRGB = !!i;
						return this.image.getBytes(t)
					}
				};
				return i
			}();
			e.PDFImage = b
		});
		(function (e, t) {
			t(e.pdfjsCoreObj = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreCrypto, e.pdfjsCoreParser, e.pdfjsCoreChunkedStream, e.pdfjsCoreColorSpace)
		})(this, function (e, t, r, a, i, n, s) {
			var o = t.InvalidPDFException;
			var l = t.MissingDataException;
			var c = t.XRefParseException;
			var h = t.assert;
			var u = t.bytesToString;
			var f = t.createPromiseCapability;
			var d = t.error;
			var g = t.info;
			var v = t.isArray;
			var p = t.isBool;
			var m = t.isInt;
			var b = t.isString;
			var y = t.shadow;
			var k = t.stringToPDFString;
			var w = t.stringToUTF8String;
			var C = t.warn;
			var x = t.createValidAbsoluteUrl;
			var S = t.Util;
			var A = r.Ref;
			var I = r.RefSet;
			var B = r.RefSetCache;
			var R = r.isName;
			var T = r.isCmd;
			var O = r.isDict;
			var P = r.isRef;
			var E = r.isRefsEqual;
			var M = r.isStream;
			var L = a.CipherTransformFactory;
			var D = i.Lexer;
			var F = i.Parser;
			var U = n.ChunkedStream;
			var j = s.ColorSpace;
			var q = function e() {
				function t(e, t, r) {
					this.pdfManager = e;
					this.xref = t;
					this.catDict = t.getCatalogObj();
					this.fontCache = new B;
					h(O(this.catDict), "catalog object is not a dictionary");
					this.pageFactory = r;
					this.pagePromises = []
				}
				t.prototype = {
					get metadata() {
						var e = this.catDict.getRaw("Metadata");
						if (!P(e)) {
							return y(this, "metadata", null)
						}
						var t = !this.xref.encrypt ? false : this.xref.encrypt.encryptMetadata;
						var r = this.xref.fetch(e, !t);
						var a;
						if (r && O(r.dict)) {
							var i = r.dict.get("Type");
							var n = r.dict.get("Subtype");
							if (R(i, "Metadata") && R(n, "XML")) {
								try {
									a = w(u(r.getBytes()))
								} catch (e) {
									g("Skipping invalid metadata.")
								}
							}
						}
						return y(this, "metadata", a)
					},
					get toplevelPagesDict() {
						var e = this.catDict.get("Pages");
						h(O(e), "invalid top-level pages dictionary");
						return y(this, "toplevelPagesDict", e)
					},
					get documentOutline() {
						var e = null;
						try {
							e = this.readDocumentOutline()
						} catch (e) {
							if (e instanceof l) {
								throw e
							}
							C("Unable to read document outline")
						}
						return y(this, "documentOutline", e)
					},
					readDocumentOutline: function e() {
						var r = this.catDict.get("Outlines");
						if (!O(r)) {
							return null
						}
						r = r.getRaw("First");
						if (!P(r)) {
							return null
						}
						var a = {
							items: []
						};
						var i = [{
							obj: r,
							parent: a
						}];
						var n = new I;
						n.put(r);
						var s = this.xref,
							o = new Uint8Array(3);
						while (i.length > 0) {
							var l = i.shift();
							var c = s.fetchIfRef(l.obj);
							if (c === null) {
								continue
							}
							h(c.has("Title"), "Invalid outline item");
							var u = {
								url: null,
								dest: null
							};
							t.parseDestDictionary({
								destDict: c,
								resultObj: u,
								docBaseUrl: this.pdfManager.docBaseUrl
							});
							var f = c.get("Title");
							var d = c.get("F") || 0;
							var g = c.getArray("C"),
								p = o;
							if (v(g) && g.length === 3 && (g[0] !== 0 || g[1] !== 0 || g[2] !== 0)) {
								p = j.singletons.rgb.getRgb(g, 0)
							}
							var m = {
								dest: u.dest,
								url: u.url,
								unsafeUrl: u.unsafeUrl,
								newWindow: u.newWindow,
								title: k(f),
								color: p,
								count: c.get("Count"),
								bold: !!(d & 2),
								italic: !!(d & 1),
								items: []
							};
							l.parent.items.push(m);
							r = c.getRaw("First");
							if (P(r) && !n.has(r)) {
								i.push({
									obj: r,
									parent: m
								});
								n.put(r)
							}
							r = c.getRaw("Next");
							if (P(r) && !n.has(r)) {
								i.push({
									obj: r,
									parent: l.parent
								});
								n.put(r)
							}
						}
						return a.items.length > 0 ? a.items : null
					},
					get numPages() {
						var e = this.toplevelPagesDict.get("Count");
						h(m(e), "page count in top level pages object is not an integer");
						return y(this, "num", e)
					},
					get destinations() {
						function e(e) {
							return O(e) ? e.get("D") : e
						}
						var t = this.xref;
						var r = {},
							a, i;
						var n = this.catDict.get("Names");
						if (n && n.has("Dests")) {
							a = n.getRaw("Dests")
						} else if (this.catDict.has("Dests")) {
							i = this.catDict.get("Dests")
						}
						if (i) {
							n = i;
							n.forEach(function t(a, i) {
								if (!i) {
									return
								}
								r[a] = e(i)
							})
						}
						if (a) {
							var s = new z(a, t);
							var o = s.getAll();
							for (var l in o) {
								r[l] = e(o[l])
							}
						}
						return y(this, "destinations", r)
					},
					getDestination: function e(t) {
						function r(e) {
							return O(e) ? e.get("D") : e
						}
						var a = this.xref;
						var i = null,
							n, s;
						var o = this.catDict.get("Names");
						if (o && o.has("Dests")) {
							n = o.getRaw("Dests")
						} else if (this.catDict.has("Dests")) {
							s = this.catDict.get("Dests")
						}
						if (s) {
							var l = s.get(t);
							if (l) {
								i = r(l)
							}
						}
						if (n) {
							var c = new z(n, a);
							i = r(c.get(t))
						}
						return i
					},
					get pageLabels() {
						var e = null;
						try {
							e = this.readPageLabels()
						} catch (e) {
							if (e instanceof l) {
								throw e
							}
							C("Unable to read page labels.")
						}
						return y(this, "pageLabels", e)
					},
					readPageLabels: function e() {
						var t = this.catDict.getRaw("PageLabels");
						if (!t) {
							return null
						}
						var r = new Array(this.numPages);
						var a = null;
						var i = "";
						var n = new H(t, this.xref);
						var s = n.getAll();
						var o = "",
							l = 1;
						for (var c = 0, u = this.numPages; c < u; c++) {
							if (c in s) {
								var f = s[c];
								h(O(f), "The PageLabel is not a dictionary.");
								var d = f.get("Type");
								h(!d || R(d, "PageLabel"), "Invalid type in PageLabel dictionary.");
								var g = f.get("S");
								h(!g || R(g), "Invalid style in PageLabel dictionary.");
								a = g ? g.name : null;
								var v = f.get("P");
								h(!v || b(v), "Invalid prefix in PageLabel dictionary.");
								i = v ? k(v) : "";
								var p = f.get("St");
								h(!p || m(p) && p >= 1, "Invalid start in PageLabel dictionary.");
								l = p || 1
							}
							switch (a) {
								case "D":
									o = l;
									break;
								case "R":
								case "r":
									o = S.toRoman(l, a === "r");
									break;
								case "A":
								case "a":
									var y = 26;
									var w = 65,
										C = 97;
									var x = a === "a" ? C : w;
									var A = l - 1;
									var I = String.fromCharCode(x + A % y);
									var B = [];
									for (var T = 0, P = A / y | 0; T <= P; T++) {
										B.push(I)
									}
									o = B.join("");
									break;
								default:
									h(!a, 'Invalid style "' + a + '" in PageLabel dictionary.')
							}
							r[c] = i + o;
							o = "";
							l++
						}
						return r
					},
					get attachments() {
						var e = this.xref;
						var t = null,
							r;
						var a = this.catDict.get("Names");
						if (a) {
							r = a.getRaw("EmbeddedFiles")
						}
						if (r) {
							var i = new z(r, e);
							var n = i.getAll();
							for (var s in n) {
								var o = new G(n[s], e);
								if (!t) {
									t = Object.create(null)
								}
								t[k(s)] = o.serializable
							}
						}
						return y(this, "attachments", t)
					},
					get javaScript() {
						var e = this.xref;
						var t = this.catDict.get("Names");
						var r = [];

						function a(e) {
							var t = e.get("S");
							if (!R(t, "JavaScript")) {
								return
							}
							var a = e.get("JS");
							if (M(a)) {
								a = u(a.getBytes())
							} else if (!b(a)) {
								return
							}
							r.push(k(a))
						}
						if (t && t.has("JavaScript")) {
							var i = new z(t.getRaw("JavaScript"), e);
							var n = i.getAll();
							for (var s in n) {
								var o = n[s];
								if (O(o)) {
									a(o)
								}
							}
						}
						var l = this.catDict.get("OpenAction");
						if (O(l, "Action")) {
							var c = l.get("S");
							if (R(c, "Named")) {
								var h = l.get("N");
								if (R(h, "Print")) {
									r.push("print({});")
								}
							} else {
								a(l)
							}
						}
						return y(this, "javaScript", r)
					},
					cleanup: function e() {
						var t = [];
						this.fontCache.forEach(function (e) {
							t.push(e)
						});
						return Promise.all(t).then(function (e) {
							for (var t = 0, r = e.length; t < r; t++) {
								var a = e[t].dict;
								delete a.translated
							}
							this.fontCache.clear()
						}.bind(this))
					},
					getPage: function e(t) {
						if (!(t in this.pagePromises)) {
							this.pagePromises[t] = this.getPageDict(t).then(function (e) {
								var r = e[0];
								var a = e[1];
								return this.pageFactory.createPage(t, r, a, this.fontCache)
							}.bind(this))
						}
						return this.pagePromises[t]
					},
					getPageDict: function e(t) {
						var r = f();
						var a = [this.catDict.getRaw("Pages")];
						var i = 0;
						var n = this.xref;
						var s = false;

						function o() {
							while (a.length) {
								var e = a.pop();
								if (P(e)) {
									n.fetchAsync(e).then(function (n) {
										if (O(n, "Page") || O(n) && !n.has("Kids")) {
											if (t === i) {
												r.resolve([n, e])
											} else {
												i++;
												o()
											}
											return
										}
										a.push(n);
										o()
									}, r.reject);
									return
								}
								h(O(e), "page dictionary kid reference points to wrong type of object");
								var l = e.get("Count");
								if (l === 0) {
									s = true
								}
								if (i + l <= t) {
									i += l;
									continue
								}
								var c = e.get("Kids");
								h(v(c), "page dictionary kids object is not an array");
								if (!s && l === c.length) {
									a = [c[t - i]];
									i = t;
									continue
								} else {
									for (var u = c.length - 1; u >= 0; u--) {
										a.push(c[u])
									}
								}
							}
							r.reject("Page index " + t + " not found.")
						}
						o();
						return r.promise
					},
					getPageIndex: function e(t) {
						var r = this.xref;

						function a(e) {
							var a = 0;
							var i;
							return r.fetchAsync(e).then(function (r) {
								if (E(e, t) && !O(r, "Page") && !(O(r) && !r.has("Type") && r.has("Contents"))) {
									throw new Error("The reference does not point to a /Page Dict.")
								}
								if (!r) {
									return null
								}
								h(O(r), "node must be a Dict.");
								i = r.getRaw("Parent");
								return r.getAsync("Parent")
							}).then(function (e) {
								if (!e) {
									return null
								}
								h(O(e), "parent must be a Dict.");
								return e.getAsync("Kids")
							}).then(function (t) {
								if (!t) {
									return null
								}
								var n = [];
								var s = false;
								for (var o = 0; o < t.length; o++) {
									var l = t[o];
									h(P(l), "kid must be a Ref.");
									if (l.num === e.num) {
										s = true;
										break
									}
									n.push(r.fetchAsync(l).then(function (e) {
										if (e.has("Count")) {
											var t = e.get("Count");
											a += t
										} else {
											a++
										}
									}))
								}
								if (!s) {
									d("kid ref not found in parents kids")
								}
								return Promise.all(n).then(function () {
									return [a, i]
								})
							})
						}
						var i = 0;

						function n(e) {
							return a(e).then(function (e) {
								if (!e) {
									return i
								}
								var t = e[0];
								var r = e[1];
								i += t;
								return n(r)
							})
						}
						return n(t)
					}
				};
				t.parseDestDictionary = function e(t) {
					function r(e) {
						if (e.indexOf("www.") === 0) {
							return "http://" + e
						}
						return e
					}

					function a(e) {
						try {
							return w(e)
						} catch (t) {
							return e
						}
					}
					var i = t.destDict;
					if (!O(i)) {
						C('Catalog_parseDestDictionary: "destDict" must be a dictionary.');
						return
					}
					var n = t.resultObj;
					if (typeof n !== "object") {
						C('Catalog_parseDestDictionary: "resultObj" must be an object.');
						return
					}
					var s = t.docBaseUrl || null;
					var o = i.get("A"),
						l, c;
					if (O(o)) {
						var h = o.get("S").name;
						switch (h) {
							case "URI":
								l = o.get("URI");
								if (R(l)) {
									l = "/" + l.name
								} else if (b(l)) {
									l = r(l)
								}
								break;
							case "GoTo":
								c = o.get("D");
								break;
							case "Launch":
							case "GoToR":
								var f = o.get("F");
								if (O(f)) {
									l = f.get("F") || null
								} else if (b(f)) {
									l = f
								}
								var d = o.get("D");
								if (d) {
									if (R(d)) {
										d = d.name
									}
									if (b(l)) {
										var g = l.split("#")[0];
										if (b(d)) {
											l = g + "#" + (/^\d+$/.test(d) ? "nameddest=" : "") + d
										} else if (v(d)) {
											l = g + "#" + JSON.stringify(d)
										}
									}
								}
								var m = o.get("NewWindow");
								if (p(m)) {
									n.newWindow = m
								}
								break;
							case "Named":
								var y = o.get("N");
								if (R(y)) {
									n.action = y.name
								}
								break;
							case "JavaScript":
								var S = o.get("JS"),
									A;
								if (M(S)) {
									A = u(S.getBytes())
								} else if (b(S)) {
									A = S
								}
								if (A) {
									var I = ["app.launchURL", "window.open"];
									var B = new RegExp("^(?:" + I.join("|") + ")" + "\\((?:'|\")(\\S+)(?:'|\")(?:,|\\))");
									var T = B.exec(k(A), "i");
									if (T && T[1]) {
										l = T[1];
										break
									}
								}
							default:
								C('Catalog_parseDestDictionary: Unrecognized link type "' + h + '".');
								break
						}
					} else if (i.has("Dest")) {
						c = i.get("Dest")
					}
					if (b(l)) {
						l = a(l);
						var P = x(l, s);
						if (P) {
							n.url = P.href
						}
						n.unsafeUrl = l
					}
					if (c) {
						if (R(c)) {
							c = c.name
						}
						if (b(c) || v(c)) {
							n.dest = c
						}
					}
				};
				return t
			}();
			var N = function e() {
				function t(e, t) {
					this.stream = e;
					this.pdfManager = t;
					this.entries = [];
					this.xrefstms = Object.create(null);
					this.cache = [];
					this.stats = {
						streamTypes: [],
						fontTypes: []
					}
				}
				t.prototype = {
					setStartXRef: function e(t) {
						this.startXRefQueue = [t]
					},
					parse: function e(t) {
						var r;
						if (!t) {
							r = this.readXRef()
						} else {
							C("Indexing all PDF objects");
							r = this.indexObjects()
						}
						r.assignXref(this);
						this.trailer = r;
						var a = r.get("Encrypt");
						if (O(a)) {
							var i = r.get("ID");
							var n = i && i.length ? i[0] : "";
							a.suppressEncryption = true;
							this.encrypt = new L(a, n, this.pdfManager.password)
						}
						if (!(this.root = r.get("Root"))) {
							d("Invalid root reference")
						}
					},
					processXRefTable: function e(t) {
						if (!("tableState" in this)) {
							this.tableState = {
								entryNum: 0,
								streamPos: t.lexer.stream.pos,
								parserBuf1: t.buf1,
								parserBuf2: t.buf2
							}
						}
						var r = this.readXRefTable(t);
						if (!T(r, "trailer")) {
							d("Invalid XRef table: could not find trailer dictionary")
						}
						var a = t.getObj();
						if (!O(a) && a.dict) {
							a = a.dict
						}
						if (!O(a)) {
							d("Invalid XRef table: could not parse trailer dictionary")
						}
						delete this.tableState;
						return a
					},
					readXRefTable: function e(t) {
						var r = t.lexer.stream;
						var a = this.tableState;
						r.pos = a.streamPos;
						t.buf1 = a.parserBuf1;
						t.buf2 = a.parserBuf2;
						var i;
						while (true) {
							if (!("firstEntryNum" in a) || !("entryCount" in a)) {
								if (T(i = t.getObj(), "trailer")) {
									break
								}
								a.firstEntryNum = i;
								a.entryCount = t.getObj()
							}
							var n = a.firstEntryNum;
							var s = a.entryCount;
							if (!m(n) || !m(s)) {
								d("Invalid XRef table: wrong types in subsection header")
							}
							for (var o = a.entryNum; o < s; o++) {
								a.streamPos = r.pos;
								a.entryNum = o;
								a.parserBuf1 = t.buf1;
								a.parserBuf2 = t.buf2;
								var l = {};
								l.offset = t.getObj();
								l.gen = t.getObj();
								var c = t.getObj();
								if (T(c, "f")) {
									l.free = true
								} else if (T(c, "n")) {
									l.uncompressed = true
								}
								if (!m(l.offset) || !m(l.gen) || !(l.free || l.uncompressed)) {
									d("Invalid entry in XRef subsection: " + n + ", " + s)
								}
								if (o === 0 && l.free && n === 1) {
									n = 0
								}
								if (!this.entries[o + n]) {
									this.entries[o + n] = l
								}
							}
							a.entryNum = 0;
							a.streamPos = r.pos;
							a.parserBuf1 = t.buf1;
							a.parserBuf2 = t.buf2;
							delete a.firstEntryNum;
							delete a.entryCount
						}
						if (this.entries[0] && !this.entries[0].free) {
							d("Invalid XRef table: unexpected first object")
						}
						return i
					},
					processXRefStream: function e(t) {
						if (!("streamState" in this)) {
							var r = t.dict;
							var a = r.get("W");
							var i = r.get("Index");
							if (!i) {
								i = [0, r.get("Size")]
							}
							this.streamState = {
								entryRanges: i,
								byteWidths: a,
								entryNum: 0,
								streamPos: t.pos
							}
						}
						this.readXRefStream(t);
						delete this.streamState;
						return t.dict
					},
					readXRefStream: function e(t) {
						var r, a;
						var i = this.streamState;
						t.pos = i.streamPos;
						var n = i.byteWidths;
						var s = n[0];
						var o = n[1];
						var l = n[2];
						var c = i.entryRanges;
						while (c.length > 0) {
							var h = c[0];
							var u = c[1];
							if (!m(h) || !m(u)) {
								d("Invalid XRef range fields: " + h + ", " + u)
							}
							if (!m(s) || !m(o) || !m(l)) {
								d("Invalid XRef entry fields length: " + h + ", " + u)
							}
							for (r = i.entryNum; r < u; ++r) {
								i.entryNum = r;
								i.streamPos = t.pos;
								var f = 0,
									g = 0,
									v = 0;
								for (a = 0; a < s; ++a) {
									f = f << 8 | t.getByte()
								}
								if (s === 0) {
									f = 1
								}
								for (a = 0; a < o; ++a) {
									g = g << 8 | t.getByte()
								}
								for (a = 0; a < l; ++a) {
									v = v << 8 | t.getByte()
								}
								var p = {};
								p.offset = g;
								p.gen = v;
								switch (f) {
									case 0:
										p.free = true;
										break;
									case 1:
										p.uncompressed = true;
										break;
									case 2:
										break;
									default:
										d("Invalid XRef entry type: " + f)
								}
								if (!this.entries[h + r]) {
									this.entries[h + r] = p
								}
							}
							i.entryNum = 0;
							i.streamPos = t.pos;
							c.splice(0, 2)
						}
					},
					indexObjects: function e() {
						var t = 9,
							r = 10,
							a = 13,
							i = 32;
						var n = 37,
							s = 60;

						function l(e, t) {
							var i = "",
								n = e[t];
							while (n !== r && n !== a && n !== s) {
								if (++t >= e.length) {
									break
								}
								i += String.fromCharCode(n);
								n = e[t]
							}
							return i
						}

						function c(e, t, r) {
							var a = r.length,
								i = e.length;
							var n = 0;
							while (t < i) {
								var s = 0;
								while (s < a && e[t + s] === r[s]) {
									++s
								}
								if (s >= a) {
									break
								}
								t++;
								n++
							}
							return n
						}
						var h = /^(\d+)\s+(\d+)\s+obj\b/;
						var u = new Uint8Array([116, 114, 97, 105, 108, 101, 114]);
						var f = new Uint8Array([115, 116, 97, 114, 116, 120, 114, 101, 102]);
						var d = new Uint8Array([101, 110, 100, 111, 98, 106]);
						var g = new Uint8Array([47, 88, 82, 101, 102]);
						this.entries.length = 0;
						var v = this.stream;
						v.pos = 0;
						var p = v.getBytes();
						var m = v.start,
							b = p.length;
						var y = [],
							k = [];
						while (m < b) {
							var w = p[m];
							if (w === t || w === r || w === a || w === i) {
								++m;
								continue
							}
							if (w === n) {
								do {
									++m;
									if (m >= b) {
										break
									}
									w = p[m]
								} while (w !== r && w !== a);
								continue
							}
							var C = l(p, m);
							var x;
							if (C.indexOf("xref") === 0 && (C.length === 4 || /\s/.test(C[4]))) {
								m += c(p, m, u);
								y.push(m);
								m += c(p, m, f)
							} else if (x = h.exec(C)) {
								if (typeof this.entries[x[1]] === "undefined") {
									this.entries[x[1]] = {
										offset: m - v.start,
										gen: x[2] | 0,
										uncompressed: true
									}
								}
								var S = c(p, m, d) + 7;
								var A = p.subarray(m, m + S);
								var I = c(A, 0, g);
								if (I < S && A[I + 5] < 64) {
									k.push(m - v.start);
									this.xrefstms[m - v.start] = 1
								}
								m += S
							} else if (C.indexOf("trailer") === 0 && (C.length === 7 || /\s/.test(C[7]))) {
								y.push(m);
								m += c(p, m, f)
							} else {
								m += C.length + 1
							}
						}
						var B, R;
						for (B = 0, R = k.length; B < R; ++B) {
							this.startXRefQueue.push(k[B]);
							this.readXRef(true)
						}
						var P;
						for (B = 0, R = y.length; B < R; ++B) {
							v.pos = y[B];
							var E = new F(new D(v), true, this, true);
							var M = E.getObj();
							if (!T(M, "trailer")) {
								continue
							}
							P = E.getObj();
							if (!O(P)) {
								continue
							}
							if (P.has("ID")) {
								return P
							}
						}
						if (P) {
							return P
						}
						throw new o("Invalid PDF structure")
					},
					readXRef: function e(t) {
						var r = this.stream;
						try {
							while (this.startXRefQueue.length) {
								var a = this.startXRefQueue[0];
								r.pos = a + r.start;
								var i = new F(new D(r), true, this);
								var n = i.getObj();
								var s;
								if (T(n, "xref")) {
									s = this.processXRefTable(i);
									if (!this.topDict) {
										this.topDict = s
									}
									n = s.get("XRefStm");
									if (m(n)) {
										var o = n;
										if (!(o in this.xrefstms)) {
											this.xrefstms[o] = 1;
											this.startXRefQueue.push(o)
										}
									}
								} else if (m(n)) {
									if (!m(i.getObj()) || !T(i.getObj(), "obj") || !M(n = i.getObj())) {
										d("Invalid XRef stream")
									}
									s = this.processXRefStream(n);
									if (!this.topDict) {
										this.topDict = s
									}
									if (!s) {
										d("Failed to read XRef stream")
									}
								} else {
									d("Invalid XRef stream header")
								}
								n = s.get("Prev");
								if (m(n)) {
									this.startXRefQueue.push(n)
								} else if (P(n)) {
									this.startXRefQueue.push(n.num)
								}
								this.startXRefQueue.shift()
							}
							return this.topDict
						} catch (e) {
							if (e instanceof l) {
								throw e
							}
							g("(while reading XRef): " + e)
						}
						if (t) {
							return
						}
						throw new c
					},
					getEntry: function e(t) {
						var r = this.entries[t];
						if (r && !r.free && r.offset) {
							return r
						}
						return null
					},
					fetchIfRef: function e(t, r) {
						if (!P(t)) {
							return t
						}
						return this.fetch(t, r)
					},
					fetch: function e(t, r) {
						h(P(t), "ref object is not a reference");
						var a = t.num;
						if (a in this.cache) {
							var i = this.cache[a];
							return i
						}
						var n = this.getEntry(a);
						if (n === null) {
							return this.cache[a] = null
						}
						if (n.uncompressed) {
							n = this.fetchUncompressed(t, n, r)
						} else {
							n = this.fetchCompressed(n, r)
						}
						if (O(n)) {
							n.objId = t.toString()
						} else if (M(n)) {
							n.dict.objId = t.toString()
						}
						return n
					},
					fetchUncompressed: function e(t, r, a) {
						var i = t.gen;
						var n = t.num;
						if (r.gen !== i) {
							d("inconsistent generation in XRef")
						}
						var s = this.stream.makeSubStream(r.offset + this.stream.start);
						var o = new F(new D(s), true, this);
						var l = o.getObj();
						var c = o.getObj();
						var h = o.getObj();
						if (!m(l) || parseInt(l, 10) !== n || !m(c) || parseInt(c, 10) !== i || !T(h)) {
							d("bad XRef entry")
						}
						if (!T(h, "obj")) {
							if (h.cmd.indexOf("obj") === 0) {
								n = parseInt(h.cmd.substring(3), 10);
								if (!isNaN(n)) {
									return n
								}
							}
							d("bad XRef entry")
						}
						if (this.encrypt && !a) {
							r = o.getObj(this.encrypt.createCipherTransform(n, i))
						} else {
							r = o.getObj()
						}
						if (!M(r)) {
							this.cache[n] = r
						}
						return r
					},
					fetchCompressed: function e(t, r) {
						var a = t.offset;
						var i = this.fetch(new A(a, 0));
						if (!M(i)) {
							d("bad ObjStm stream")
						}
						var n = i.dict.get("First");
						var s = i.dict.get("N");
						if (!m(n) || !m(s)) {
							d("invalid first and n parameters for ObjStm stream")
						}
						var o = new F(new D(i), false, this);
						o.allowStreams = true;
						var l, c = [],
							h, u = [];
						for (l = 0; l < s; ++l) {
							h = o.getObj();
							if (!m(h)) {
								d("invalid object number in the ObjStm stream: " + h)
							}
							u.push(h);
							var f = o.getObj();
							if (!m(f)) {
								d("invalid object offset in the ObjStm stream: " + f)
							}
						}
						for (l = 0; l < s; ++l) {
							c.push(o.getObj());
							if (T(o.buf1, "endobj")) {
								o.shift()
							}
							h = u[l];
							var g = this.entries[h];
							if (g && g.offset === a && g.gen === l) {
								this.cache[h] = c[l]
							}
						}
						t = c[t.gen];
						if (t === undefined) {
							d("bad XRef entry for compressed object")
						}
						return t
					},
					fetchIfRefAsync: function e(t, r) {
						if (!P(t)) {
							return Promise.resolve(t)
						}
						return this.fetchAsync(t, r)
					},
					fetchAsync: function e(t, r) {
						var a = this.stream.manager;
						var i = this;
						return new Promise(function e(n, s) {
							try {
								n(i.fetch(t, r))
							} catch (t) {
								if (t instanceof l) {
									a.requestRange(t.begin, t.end).then(function () {
										e(n, s)
									}, s);
									return
								}
								s(t)
							}
						})
					},
					getCatalogObj: function e() {
						return this.root
					}
				};
				return t
			}();
			var _ = function e() {
				function t(e, t) {
					throw new Error("Cannot initialize NameOrNumberTree.")
				}
				t.prototype = {
					getAll: function e() {
						var t = Object.create(null);
						if (!this.root) {
							return t
						}
						var r = this.xref;
						var a = new I;
						a.put(this.root);
						var i = [this.root];
						while (i.length > 0) {
							var n, s;
							var o = r.fetchIfRef(i.shift());
							if (!O(o)) {
								continue
							}
							if (o.has("Kids")) {
								var l = o.get("Kids");
								for (n = 0, s = l.length; n < s; n++) {
									var c = l[n];
									h(!a.has(c), 'Duplicate entry in "' + this._type + '" tree.');
									i.push(c);
									a.put(c)
								}
								continue
							}
							var u = o.get(this._type);
							if (v(u)) {
								for (n = 0, s = u.length; n < s; n += 2) {
									t[r.fetchIfRef(u[n])] = r.fetchIfRef(u[n + 1])
								}
							}
						}
						return t
					},
					get: function e(t) {
						if (!this.root) {
							return null
						}
						var r = this.xref;
						var a = r.fetchIfRef(this.root);
						var i = 0;
						var n = 10;
						var s, o, l;
						while (a.has("Kids")) {
							if (++i > n) {
								C('Search depth limit reached for "' + this._type + '" tree.');
								return null
							}
							var c = a.get("Kids");
							if (!v(c)) {
								return null
							}
							s = 0;
							o = c.length - 1;
							while (s <= o) {
								l = s + o >> 1;
								var h = r.fetchIfRef(c[l]);
								var u = h.get("Limits");
								if (t < r.fetchIfRef(u[0])) {
									o = l - 1
								} else if (t > r.fetchIfRef(u[1])) {
									s = l + 1
								} else {
									a = r.fetchIfRef(c[l]);
									break
								}
							}
							if (s > o) {
								return null
							}
						}
						var f = a.get(this._type);
						if (v(f)) {
							s = 0;
							o = f.length - 2;
							while (s <= o) {
								l = s + o & ~1;
								var d = r.fetchIfRef(f[l]);
								if (t < d) {
									o = l - 2
								} else if (t > d) {
									s = l + 2
								} else {
									return r.fetchIfRef(f[l + 1])
								}
							}
						}
						return null
					}
				};
				return t
			}();
			var z = function e() {
				function t(e, t) {
					this.root = e;
					this.xref = t;
					this._type = "Names"
				}
				S.inherit(t, _, {});
				return t
			}();
			var H = function e() {
				function t(e, t) {
					this.root = e;
					this.xref = t;
					this._type = "Nums"
				}
				S.inherit(t, _, {});
				return t
			}();
			var G = function e() {
				function t(e, t) {
					if (!e || !O(e)) {
						return
					}
					this.xref = t;
					this.root = e;
					if (e.has("FS")) {
						this.fs = e.get("FS")
					}
					this.description = e.has("Desc") ? k(e.get("Desc")) : "";
					if (e.has("RF")) {
						C("Related file specifications are not supported")
					}
					this.contentAvailable = true;
					if (!e.has("EF")) {
						this.contentAvailable = false;
						C("Non-embedded file specifications are not supported")
					}
				}

				function r(e) {
					if (e.has("UF")) {
						return e.get("UF")
					} else if (e.has("F")) {
						return e.get("F")
					} else if (e.has("Unix")) {
						return e.get("Unix")
					} else if (e.has("Mac")) {
						return e.get("Mac")
					} else if (e.has("DOS")) {
						return e.get("DOS")
					}
					return null
				}
				t.prototype = {
					get filename() {
						if (!this._filename && this.root) {
							var e = r(this.root) || "unnamed";
							this._filename = k(e).replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\/g, "/")
						}
						return this._filename
					},
					get content() {
						if (!this.contentAvailable) {
							return null
						}
						if (!this.contentRef && this.root) {
							this.contentRef = r(this.root.get("EF"))
						}
						var e = null;
						if (this.contentRef) {
							var t = this.xref;
							var a = t.fetchIfRef(this.contentRef);
							if (a && M(a)) {
								e = a.getBytes()
							} else {
								C("Embedded file specification points to non-existing/invalid " + "content")
							}
						} else {
							C("Embedded file specification does not have a content")
						}
						return e
					},
					get serializable() {
						return {
							filename: this.filename,
							content: this.content
						}
					}
				};
				return t
			}();
			var X = function () {
				function e(e) {
					return P(e) || O(e) || v(e) || M(e)
				}

				function t(t, r) {
					var a;
					if (O(t) || M(t)) {
						var i;
						if (O(t)) {
							i = t.map
						} else {
							i = t.dict.map
						}
						for (var n in i) {
							a = i[n];
							if (e(a)) {
								r.push(a)
							}
						}
					} else if (v(t)) {
						for (var s = 0, o = t.length; s < o; s++) {
							a = t[s];
							if (e(a)) {
								r.push(a)
							}
						}
					}
				}

				function r(e, t, r) {
					this.obj = e;
					this.keys = t;
					this.xref = r;
					this.refSet = null;
					this.capability = null
				}
				r.prototype = {
					load: function e() {
						var t = this.keys;
						this.capability = f();
						if (!(this.xref.stream instanceof U) || this.xref.stream.getMissingChunks().length === 0) {
							this.capability.resolve();
							return this.capability.promise
						}
						this.refSet = new I;
						var r = [];
						for (var a = 0; a < t.length; a++) {
							r.push(this.obj[t[a]])
						}
						this._walk(r);
						return this.capability.promise
					},
					_walk: function e(r) {
						var a = [];
						var i = [];
						while (r.length) {
							var n = r.pop();
							if (P(n)) {
								if (this.refSet.has(n)) {
									continue
								}
								try {
									var s = n;
									this.refSet.put(s);
									n = this.xref.fetch(n)
								} catch (e) {
									if (!(e instanceof l)) {
										throw e
									}
									a.push(n);
									i.push({
										begin: e.begin,
										end: e.end
									})
								}
							}
							if (n && n.getBaseStreams) {
								var o = n.getBaseStreams();
								var c = false;
								for (var h = 0; h < o.length; h++) {
									var u = o[h];
									if (u.getMissingChunks && u.getMissingChunks().length) {
										c = true;
										i.push({
											begin: u.start,
											end: u.end
										})
									}
								}
								if (c) {
									a.push(n)
								}
							}
							t(n, r)
						}
						if (i.length) {
							this.xref.stream.manager.requestRanges(i).then(function e() {
								r = a;
								for (var t = 0; t < a.length; t++) {
									var i = a[t];
									if (P(i)) {
										this.refSet.remove(i)
									}
								}
								this._walk(r)
							}.bind(this), this.capability.reject);
							return
						}
						this.refSet = null;
						this.capability.resolve()
					}
				};
				return r
			}();
			e.Catalog = q;
			e.ObjectLoader = X;
			e.XRef = N;
			e.FileSpec = G
		});
		(function (e, t) {
			t(e.pdfjsCorePattern = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreFunction, e.pdfjsCoreColorSpace)
		})(this, function (e, t, r, a, i) {
			var n = t.UNSUPPORTED_FEATURES;
			var s = t.MissingDataException;
			var o = t.Util;
			var l = t.assert;
			var c = t.error;
			var h = t.info;
			var u = t.warn;
			var f = r.isStream;
			var d = a.PDFFunction;
			var g = i.ColorSpace;
			var v = {
				FUNCTION_BASED: 1,
				AXIAL: 2,
				RADIAL: 3,
				FREE_FORM_MESH: 4,
				LATTICE_FORM_MESH: 5,
				COONS_PATCH_MESH: 6,
				TENSOR_PATCH_MESH: 7
			};
			var p = function e() {
				function t() {
					c("should not call Pattern constructor")
				}
				t.prototype = {
					getPattern: function e(t) {
						c("Should not call Pattern.getStyle: " + t)
					}
				};
				t.parseShading = function e(t, r, a, i, o) {
					var l = f(t) ? t.dict : t;
					var c = l.get("ShadingType");
					try {
						switch (c) {
							case v.AXIAL:
							case v.RADIAL:
								return new m.RadialAxial(l, r, a, i);
							case v.FREE_FORM_MESH:
							case v.LATTICE_FORM_MESH:
							case v.COONS_PATCH_MESH:
							case v.TENSOR_PATCH_MESH:
								return new m.Mesh(t, r, a, i);
							default:
								throw new Error("Unsupported ShadingType: " + c)
						}
					} catch (e) {
						if (e instanceof s) {
							throw e
						}
						o.send("UnsupportedFeature", {
							featureId: n.shadingPattern
						});
						u(e);
						return new m.Dummy
					}
				};
				return t
			}();
			var m = {};
			m.SMALL_NUMBER = 1e-6;
			m.RadialAxial = function e() {
				function t(e, t, r, a) {
					this.matrix = t;
					this.coordsArr = e.getArray("Coords");
					this.shadingType = e.get("ShadingType");
					this.type = "Pattern";
					var i = e.get("ColorSpace", "CS");
					i = g.parse(i, r, a);
					this.cs = i;
					var n = 0,
						s = 1;
					if (e.has("Domain")) {
						var l = e.getArray("Domain");
						n = l[0];
						s = l[1]
					}
					var c = false,
						f = false;
					if (e.has("Extend")) {
						var p = e.getArray("Extend");
						c = p[0];
						f = p[1]
					}
					if (this.shadingType === v.RADIAL && (!c || !f)) {
						var b = this.coordsArr[0];
						var y = this.coordsArr[1];
						var k = this.coordsArr[2];
						var w = this.coordsArr[3];
						var C = this.coordsArr[4];
						var x = this.coordsArr[5];
						var S = Math.sqrt((b - w) * (b - w) + (y - C) * (y - C));
						if (k <= x + S && x <= k + S) {
							u("Unsupported radial gradient.")
						}
					}
					this.extendStart = c;
					this.extendEnd = f;
					var A = e.get("Function");
					var I = d.parseArray(r, A);
					var B = s - n;
					var R = B / 10;
					var T = this.colorStops = [];
					if (n >= s || R <= 0) {
						h("Bad shading domain.");
						return
					}
					var O = new Float32Array(i.numComps),
						P = new Float32Array(1);
					var E;
					for (var M = n; M <= s; M += R) {
						P[0] = M;
						I(P, 0, O, 0);
						E = i.getRgb(O, 0);
						var L = o.makeCssRgb(E[0], E[1], E[2]);
						T.push([(M - n) / B, L])
					}
					var D = "transparent";
					if (e.has("Background")) {
						E = i.getRgb(e.get("Background"), 0);
						D = o.makeCssRgb(E[0], E[1], E[2])
					}
					if (!c) {
						T.unshift([0, D]);
						T[1][0] += m.SMALL_NUMBER
					}
					if (!f) {
						T[T.length - 1][0] -= m.SMALL_NUMBER;
						T.push([1, D])
					}
					this.colorStops = T
				}
				t.prototype = {
					getIR: function e() {
						var t = this.coordsArr;
						var r = this.shadingType;
						var a, i, n, s, l;
						if (r === v.AXIAL) {
							i = [t[0], t[1]];
							n = [t[2], t[3]];
							s = null;
							l = null;
							a = "axial"
						} else if (r === v.RADIAL) {
							i = [t[0], t[1]];
							n = [t[3], t[4]];
							s = t[2];
							l = t[5];
							a = "radial"
						} else {
							c("getPattern type unknown: " + r)
						}
						var h = this.matrix;
						if (h) {
							i = o.applyTransform(i, h);
							n = o.applyTransform(n, h);
							if (r === v.RADIAL) {
								var u = o.singularValueDecompose2dScale(h);
								s *= u[0];
								l *= u[1]
							}
						}
						return ["RadialAxial", a, this.colorStops, i, n, s, l]
					}
				};
				return t
			}();
			m.Mesh = function e() {
				function t(e, t) {
					this.stream = e;
					this.context = t;
					this.buffer = 0;
					this.bufferLength = 0;
					var r = t.numComps;
					this.tmpCompsBuf = new Float32Array(r);
					var a = t.colorSpace.numComps;
					this.tmpCsCompsBuf = t.colorFn ? new Float32Array(a) : this.tmpCompsBuf
				}
				t.prototype = {
					get hasData() {
						if (this.stream.end) {
							return this.stream.pos < this.stream.end
						}
						if (this.bufferLength > 0) {
							return true
						}
						var e = this.stream.getByte();
						if (e < 0) {
							return false
						}
						this.buffer = e;
						this.bufferLength = 8;
						return true
					},
					readBits: function e(t) {
						var r = this.buffer;
						var a = this.bufferLength;
						if (t === 32) {
							if (a === 0) {
								return (this.stream.getByte() << 24 | this.stream.getByte() << 16 | this.stream.getByte() << 8 | this.stream.getByte()) >>> 0
							}
							r = r << 24 | this.stream.getByte() << 16 | this.stream.getByte() << 8 | this.stream.getByte();
							var i = this.stream.getByte();
							this.buffer = i & (1 << a) - 1;
							return (r << 8 - a | (i & 255) >> a) >>> 0
						}
						if (t === 8 && a === 0) {
							return this.stream.getByte()
						}
						while (a < t) {
							r = r << 8 | this.stream.getByte();
							a += 8
						}
						a -= t;
						this.bufferLength = a;
						this.buffer = r & (1 << a) - 1;
						return r >> a
					},
					align: function e() {
						this.buffer = 0;
						this.bufferLength = 0
					},
					readFlag: function e() {
						return this.readBits(this.context.bitsPerFlag)
					},
					readCoordinate: function e() {
						var t = this.context.bitsPerCoordinate;
						var r = this.readBits(t);
						var a = this.readBits(t);
						var i = this.context.decode;
						var n = t < 32 ? 1 / ((1 << t) - 1) : 2.3283064365386963e-10;
						return [r * n * (i[1] - i[0]) + i[0], a * n * (i[3] - i[2]) + i[2]]
					},
					readComponents: function e() {
						var t = this.context.numComps;
						var r = this.context.bitsPerComponent;
						var a = r < 32 ? 1 / ((1 << r) - 1) : 2.3283064365386963e-10;
						var i = this.context.decode;
						var n = this.tmpCompsBuf;
						for (var s = 0, o = 4; s < t; s++, o += 2) {
							var l = this.readBits(r);
							n[s] = l * a * (i[o + 1] - i[o]) + i[o]
						}
						var c = this.tmpCsCompsBuf;
						if (this.context.colorFn) {
							this.context.colorFn(n, 0, c, 0)
						}
						return this.context.colorSpace.getRgb(c, 0)
					}
				};

				function r(e, t) {
					var r = e.coords;
					var a = e.colors;
					var i = [];
					var n = [];
					var s = 0;
					while (t.hasData) {
						var o = t.readFlag();
						var c = t.readCoordinate();
						var h = t.readComponents();
						if (s === 0) {
							l(0 <= o && o <= 2, "Unknown type4 flag");
							switch (o) {
								case 0:
									s = 3;
									break;
								case 1:
									n.push(n[n.length - 2], n[n.length - 1]);
									s = 1;
									break;
								case 2:
									n.push(n[n.length - 3], n[n.length - 1]);
									s = 1;
									break
							}
							i.push(o)
						}
						n.push(r.length);
						r.push(c);
						a.push(h);
						s--;
						t.align()
					}
					e.figures.push({
						type: "triangles",
						coords: new Int32Array(n),
						colors: new Int32Array(n)
					})
				}

				function a(e, t, r) {
					var a = e.coords;
					var i = e.colors;
					var n = [];
					while (t.hasData) {
						var s = t.readCoordinate();
						var o = t.readComponents();
						n.push(a.length);
						a.push(s);
						i.push(o)
					}
					e.figures.push({
						type: "lattice",
						coords: new Int32Array(n),
						colors: new Int32Array(n),
						verticesPerRow: r
					})
				}
				var i = 3;
				var n = 20;
				var s = 20;
				var o = function e() {
					function t(e) {
						var t = [];
						for (var r = 0; r <= e; r++) {
							var a = r / e,
								i = 1 - a;
							t.push(new Float32Array([i * i * i, 3 * a * i * i, 3 * a * a * i, a * a * a]))
						}
						return t
					}
					var r = [];
					return function e(a) {
						if (!r[a]) {
							r[a] = t(a)
						}
						return r[a]
					}
				}();

				function h(e, t) {
					var r = e.figures[t];
					l(r.type === "patch", "Unexpected patch mesh figure");
					var a = e.coords,
						c = e.colors;
					var h = r.coords;
					var u = r.colors;
					var f = Math.min(a[h[0]][0], a[h[3]][0], a[h[12]][0], a[h[15]][0]);
					var d = Math.min(a[h[0]][1], a[h[3]][1], a[h[12]][1], a[h[15]][1]);
					var g = Math.max(a[h[0]][0], a[h[3]][0], a[h[12]][0], a[h[15]][0]);
					var v = Math.max(a[h[0]][1], a[h[3]][1], a[h[12]][1], a[h[15]][1]);
					var p = Math.ceil((g - f) * s / (e.bounds[2] - e.bounds[0]));
					p = Math.max(i, Math.min(n, p));
					var m = Math.ceil((v - d) * s / (e.bounds[3] - e.bounds[1]));
					m = Math.max(i, Math.min(n, m));
					var b = p + 1;
					var y = new Int32Array((m + 1) * b);
					var k = new Int32Array((m + 1) * b);
					var w = 0;
					var C = new Uint8Array(3),
						x = new Uint8Array(3);
					var S = c[u[0]],
						A = c[u[1]],
						I = c[u[2]],
						B = c[u[3]];
					var R = o(m),
						T = o(p);
					for (var O = 0; O <= m; O++) {
						C[0] = (S[0] * (m - O) + I[0] * O) / m | 0;
						C[1] = (S[1] * (m - O) + I[1] * O) / m | 0;
						C[2] = (S[2] * (m - O) + I[2] * O) / m | 0;
						x[0] = (A[0] * (m - O) + B[0] * O) / m | 0;
						x[1] = (A[1] * (m - O) + B[1] * O) / m | 0;
						x[2] = (A[2] * (m - O) + B[2] * O) / m | 0;
						for (var P = 0; P <= p; P++, w++) {
							if ((O === 0 || O === m) && (P === 0 || P === p)) {
								continue
							}
							var E = 0,
								M = 0;
							var L = 0;
							for (var D = 0; D <= 3; D++) {
								for (var F = 0; F <= 3; F++, L++) {
									var U = R[O][D] * T[P][F];
									E += a[h[L]][0] * U;
									M += a[h[L]][1] * U
								}
							}
							y[w] = a.length;
							a.push([E, M]);
							k[w] = c.length;
							var j = new Uint8Array(3);
							j[0] = (C[0] * (p - P) + x[0] * P) / p | 0;
							j[1] = (C[1] * (p - P) + x[1] * P) / p | 0;
							j[2] = (C[2] * (p - P) + x[2] * P) / p | 0;
							c.push(j)
						}
					}
					y[0] = h[0];
					k[0] = u[0];
					y[p] = h[3];
					k[p] = u[1];
					y[b * m] = h[12];
					k[b * m] = u[2];
					y[b * m + p] = h[15];
					k[b * m + p] = u[3];
					e.figures[t] = {
						type: "lattice",
						coords: y,
						colors: k,
						verticesPerRow: b
					}
				}

				function u(e, t) {
					var r = e.coords;
					var a = e.colors;
					var i = new Int32Array(16);
					var n = new Int32Array(4);
					while (t.hasData) {
						var s = t.readFlag();
						l(0 <= s && s <= 3, "Unknown type6 flag");
						var o, c;
						var h = r.length;
						for (o = 0, c = s !== 0 ? 8 : 12; o < c; o++) {
							r.push(t.readCoordinate())
						}
						var u = a.length;
						for (o = 0, c = s !== 0 ? 2 : 4; o < c; o++) {
							a.push(t.readComponents())
						}
						var f, d, g, v;
						switch (s) {
							case 0:
								i[12] = h + 3;
								i[13] = h + 4;
								i[14] = h + 5;
								i[15] = h + 6;
								i[8] = h + 2;
								i[11] = h + 7;
								i[4] = h + 1;
								i[7] = h + 8;
								i[0] = h;
								i[1] = h + 11;
								i[2] = h + 10;
								i[3] = h + 9;
								n[2] = u + 1;
								n[3] = u + 2;
								n[0] = u;
								n[1] = u + 3;
								break;
							case 1:
								f = i[12];
								d = i[13];
								g = i[14];
								v = i[15];
								i[12] = v;
								i[13] = h + 0;
								i[14] = h + 1;
								i[15] = h + 2;
								i[8] = g;
								i[11] = h + 3;
								i[4] = d;
								i[7] = h + 4;
								i[0] = f;
								i[1] = h + 7;
								i[2] = h + 6;
								i[3] = h + 5;
								f = n[2];
								d = n[3];
								n[2] = d;
								n[3] = u;
								n[0] = f;
								n[1] = u + 1;
								break;
							case 2:
								f = i[15];
								d = i[11];
								i[12] = i[3];
								i[13] = h + 0;
								i[14] = h + 1;
								i[15] = h + 2;
								i[8] = i[7];
								i[11] = h + 3;
								i[4] = d;
								i[7] = h + 4;
								i[0] = f;
								i[1] = h + 7;
								i[2] = h + 6;
								i[3] = h + 5;
								f = n[3];
								n[2] = n[1];
								n[3] = u;
								n[0] = f;
								n[1] = u + 1;
								break;
							case 3:
								i[12] = i[0];
								i[13] = h + 0;
								i[14] = h + 1;
								i[15] = h + 2;
								i[8] = i[1];
								i[11] = h + 3;
								i[4] = i[2];
								i[7] = h + 4;
								i[0] = i[3];
								i[1] = h + 7;
								i[2] = h + 6;
								i[3] = h + 5;
								n[2] = n[0];
								n[3] = u;
								n[0] = n[1];
								n[1] = u + 1;
								break
						}
						i[5] = r.length;
						r.push([(-4 * r[i[0]][0] - r[i[15]][0] + 6 * (r[i[4]][0] + r[i[1]][0]) - 2 * (r[i[12]][0] + r[i[3]][0]) + 3 * (r[i[13]][0] + r[i[7]][0])) / 9, (-4 * r[i[0]][1] - r[i[15]][1] + 6 * (r[i[4]][1] + r[i[1]][1]) - 2 * (r[i[12]][1] + r[i[3]][1]) + 3 * (r[i[13]][1] + r[i[7]][1])) / 9]);
						i[6] = r.length;
						r.push([(-4 * r[i[3]][0] - r[i[12]][0] + 6 * (r[i[2]][0] + r[i[7]][0]) - 2 * (r[i[0]][0] + r[i[15]][0]) + 3 * (r[i[4]][0] + r[i[14]][0])) / 9, (-4 * r[i[3]][1] - r[i[12]][1] + 6 * (r[i[2]][1] + r[i[7]][1]) - 2 * (r[i[0]][1] + r[i[15]][1]) + 3 * (r[i[4]][1] + r[i[14]][1])) / 9]);
						i[9] = r.length;
						r.push([(-4 * r[i[12]][0] - r[i[3]][0] + 6 * (r[i[8]][0] + r[i[13]][0]) - 2 * (r[i[0]][0] + r[i[15]][0]) + 3 * (r[i[11]][0] + r[i[1]][0])) / 9, (-4 * r[i[12]][1] - r[i[3]][1] + 6 * (r[i[8]][1] + r[i[13]][1]) - 2 * (r[i[0]][1] + r[i[15]][1]) + 3 * (r[i[11]][1] + r[i[1]][1])) / 9]);
						i[10] = r.length;
						r.push([(-4 * r[i[15]][0] - r[i[0]][0] + 6 * (r[i[11]][0] + r[i[14]][0]) - 2 * (r[i[12]][0] + r[i[3]][0]) + 3 * (r[i[2]][0] + r[i[8]][0])) / 9, (-4 * r[i[15]][1] - r[i[0]][1] + 6 * (r[i[11]][1] + r[i[14]][1]) - 2 * (r[i[12]][1] + r[i[3]][1]) + 3 * (r[i[2]][1] + r[i[8]][1])) / 9]);
						e.figures.push({
							type: "patch",
							coords: new Int32Array(i),
							colors: new Int32Array(n)
						})
					}
				}

				function p(e, t) {
					var r = e.coords;
					var a = e.colors;
					var i = new Int32Array(16);
					var n = new Int32Array(4);
					while (t.hasData) {
						var s = t.readFlag();
						l(0 <= s && s <= 3, "Unknown type7 flag");
						var o, c;
						var h = r.length;
						for (o = 0, c = s !== 0 ? 12 : 16; o < c; o++) {
							r.push(t.readCoordinate())
						}
						var u = a.length;
						for (o = 0, c = s !== 0 ? 2 : 4; o < c; o++) {
							a.push(t.readComponents())
						}
						var f, d, g, v;
						switch (s) {
							case 0:
								i[12] = h + 3;
								i[13] = h + 4;
								i[14] = h + 5;
								i[15] = h + 6;
								i[8] = h + 2;
								i[9] = h + 13;
								i[10] = h + 14;
								i[11] = h + 7;
								i[4] = h + 1;
								i[5] = h + 12;
								i[6] = h + 15;
								i[7] = h + 8;
								i[0] = h;
								i[1] = h + 11;
								i[2] = h + 10;
								i[3] = h + 9;
								n[2] = u + 1;
								n[3] = u + 2;
								n[0] = u;
								n[1] = u + 3;
								break;
							case 1:
								f = i[12];
								d = i[13];
								g = i[14];
								v = i[15];
								i[12] = v;
								i[13] = h + 0;
								i[14] = h + 1;
								i[15] = h + 2;
								i[8] = g;
								i[9] = h + 9;
								i[10] = h + 10;
								i[11] = h + 3;
								i[4] = d;
								i[5] = h + 8;
								i[6] = h + 11;
								i[7] = h + 4;
								i[0] = f;
								i[1] = h + 7;
								i[2] = h + 6;
								i[3] = h + 5;
								f = n[2];
								d = n[3];
								n[2] = d;
								n[3] = u;
								n[0] = f;
								n[1] = u + 1;
								break;
							case 2:
								f = i[15];
								d = i[11];
								i[12] = i[3];
								i[13] = h + 0;
								i[14] = h + 1;
								i[15] = h + 2;
								i[8] = i[7];
								i[9] = h + 9;
								i[10] = h + 10;
								i[11] = h + 3;
								i[4] = d;
								i[5] = h + 8;
								i[6] = h + 11;
								i[7] = h + 4;
								i[0] = f;
								i[1] = h + 7;
								i[2] = h + 6;
								i[3] = h + 5;
								f = n[3];
								n[2] = n[1];
								n[3] = u;
								n[0] = f;
								n[1] = u + 1;
								break;
							case 3:
								i[12] = i[0];
								i[13] = h + 0;
								i[14] = h + 1;
								i[15] = h + 2;
								i[8] = i[1];
								i[9] = h + 9;
								i[10] = h + 10;
								i[11] = h + 3;
								i[4] = i[2];
								i[5] = h + 8;
								i[6] = h + 11;
								i[7] = h + 4;
								i[0] = i[3];
								i[1] = h + 7;
								i[2] = h + 6;
								i[3] = h + 5;
								n[2] = n[0];
								n[3] = u;
								n[0] = n[1];
								n[1] = u + 1;
								break
						}
						e.figures.push({
							type: "patch",
							coords: new Int32Array(i),
							colors: new Int32Array(n)
						})
					}
				}

				function m(e) {
					var t = e.coords[0][0],
						r = e.coords[0][1],
						a = t,
						i = r;
					for (var n = 1, s = e.coords.length; n < s; n++) {
						var o = e.coords[n][0],
							l = e.coords[n][1];
						t = t > o ? o : t;
						r = r > l ? l : r;
						a = a < o ? o : a;
						i = i < l ? l : i
					}
					e.bounds = [t, r, a, i]
				}

				function b(e) {
					var t, r, a, i;
					var n = e.coords;
					var s = new Float32Array(n.length * 2);
					for (t = 0, a = 0, r = n.length; t < r; t++) {
						var o = n[t];
						s[a++] = o[0];
						s[a++] = o[1]
					}
					e.coords = s;
					var l = e.colors;
					var c = new Uint8Array(l.length * 3);
					for (t = 0, a = 0, r = l.length; t < r; t++) {
						var h = l[t];
						c[a++] = h[0];
						c[a++] = h[1];
						c[a++] = h[2]
					}
					e.colors = c;
					var u = e.figures;
					for (t = 0, r = u.length; t < r; t++) {
						var f = u[t],
							d = f.coords,
							g = f.colors;
						for (a = 0, i = d.length; a < i; a++) {
							d[a] *= 2;
							g[a] *= 3
						}
					}
				}

				function y(e, i, n, s) {
					l(f(e), "Mesh data is not a stream");
					var o = e.dict;
					this.matrix = i;
					this.shadingType = o.get("ShadingType");
					this.type = "Pattern";
					this.bbox = o.getArray("BBox");
					var y = o.get("ColorSpace", "CS");
					y = g.parse(y, n, s);
					this.cs = y;
					this.background = o.has("Background") ? y.getRgb(o.get("Background"), 0) : null;
					var k = o.get("Function");
					var w = k ? d.parseArray(n, k) : null;
					this.coords = [];
					this.colors = [];
					this.figures = [];
					var C = {
						bitsPerCoordinate: o.get("BitsPerCoordinate"),
						bitsPerComponent: o.get("BitsPerComponent"),
						bitsPerFlag: o.get("BitsPerFlag"),
						decode: o.getArray("Decode"),
						colorFn: w,
						colorSpace: y,
						numComps: w ? 1 : y.numComps
					};
					var x = new t(e, C);
					var S = false;
					switch (this.shadingType) {
						case v.FREE_FORM_MESH:
							r(this, x);
							break;
						case v.LATTICE_FORM_MESH:
							var A = o.get("VerticesPerRow") | 0;
							l(A >= 2, "Invalid VerticesPerRow");
							a(this, x, A);
							break;
						case v.COONS_PATCH_MESH:
							u(this, x);
							S = true;
							break;
						case v.TENSOR_PATCH_MESH:
							p(this, x);
							S = true;
							break;
						default:
							c("Unsupported mesh type.");
							break
					}
					if (S) {
						m(this);
						for (var I = 0, B = this.figures.length; I < B; I++) {
							h(this, I)
						}
					}
					m(this);
					b(this)
				}
				y.prototype = {
					getIR: function e() {
						return ["Mesh", this.shadingType, this.coords, this.colors, this.figures, this.bounds, this.matrix, this.bbox, this.background]
					}
				};
				return y
			}();
			m.Dummy = function e() {
				function t() {
					this.type = "Pattern"
				}
				t.prototype = {
					getIR: function e() {
						return ["Dummy"]
					}
				};
				return t
			}();

			function b(e, t, r) {
				var a = t.getArray("Matrix");
				var i = t.getArray("BBox");
				var n = t.get("XStep");
				var s = t.get("YStep");
				var o = t.get("PaintType");
				var l = t.get("TilingType");
				return ["TilingPattern", r, e, a, i, n, s, o, l]
			}
			e.Pattern = p;
			e.getTilingPatternIR = b
		});
		(function (e, t) {
			t(e.pdfjsCoreEvaluator = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreStream, e.pdfjsCoreParser, e.pdfjsCoreImage, e.pdfjsCoreColorSpace, e.pdfjsCoreMurmurHash3, e.pdfjsCoreFonts, e.pdfjsCoreFunction, e.pdfjsCorePattern, e.pdfjsCoreCMap, e.pdfjsCoreMetrics, e.pdfjsCoreBidi, e.pdfjsCoreEncodings, e.pdfjsCoreStandardFonts, e.pdfjsCoreUnicode, e.pdfjsCoreGlyphList)
		})(this, function (e, t, r, a, i, n, s, o, l, c, h, u, f, d, g, v, p, m) {
			var b = t.FONT_IDENTITY_MATRIX;
			var y = t.IDENTITY_MATRIX;
			var k = t.UNSUPPORTED_FEATURES;
			var w = t.ImageKind;
			var C = t.OPS;
			var x = t.TextRenderingMode;
			var S = t.Util;
			var A = t.assert;
			var I = t.createPromiseCapability;
			var B = t.error;
			var R = t.info;
			var T = t.isArray;
			var O = t.isNum;
			var P = t.isString;
			var E = t.getLookupTableFactory;
			var M = t.warn;
			var L = r.Dict;
			var D = r.Name;
			var F = r.isCmd;
			var U = r.isDict;
			var j = r.isName;
			var q = r.isRef;
			var N = r.isStream;
			var _ = a.DecodeStream;
			var z = a.JpegStream;
			var H = a.Stream;
			var G = i.Lexer;
			var X = i.Parser;
			var W = i.isEOF;
			var V = n.PDFImage;
			var K = s.ColorSpace;
			var Y = o.MurmurHash3_64;
			var J = l.ErrorFont;
			var Z = l.FontFlags;
			var Q = l.Font;
			var $ = l.IdentityToUnicodeMap;
			var ee = l.ToUnicodeMap;
			var te = l.getFontType;
			var re = c.isPDFFunction;
			var ae = c.PDFFunction;
			var ie = h.Pattern;
			var ne = h.getTilingPatternIR;
			var se = u.CMapFactory;
			var oe = u.IdentityCMap;
			var le = f.getMetrics;
			var ce = d.bidi;
			var he = g.WinAnsiEncoding;
			var ue = g.StandardEncoding;
			var fe = g.MacRomanEncoding;
			var de = g.SymbolSetEncoding;
			var ge = g.ZapfDingbatsEncoding;
			var ve = g.getEncoding;
			var pe = v.getStdFontMap;
			var me = v.getSerifFonts;
			var be = v.getSymbolsFonts;
			var ye = p.getNormalizedUnicodes;
			var ke = p.reverseIfRtl;
			var we = p.getUnicodeForGlyph;
			var Ce = m.getGlyphsUnicode;
			var xe = function e() {
				var t = {
					forceDataSchema: false,
					maxImageSize: -1,
					disableFontFace: false,
					cMapOptions: {
						url: null,
						packed: false
					}
				};

				function r(e, t, r, a) {
					this.xref = e;
					this.resources = t;
					this.handler = r;
					this.forceDataSchema = a
				}
				r.prototype = {
					canDecode: function (e) {
						return e instanceof z && r.isDecodable(e, this.xref, this.resources)
					},
					decode: function (e) {
						var t = e.dict;
						var r = t.get("ColorSpace", "CS");
						r = K.parse(r, this.xref, this.resources);
						var a = r.numComps;
						var i = this.handler.sendWithPromise("JpegDecode", [e.getIR(this.forceDataSchema), a]);
						return i.then(function (t) {
							var r = t.data;
							return new H(r, 0, r.length, e.dict)
						})
					}
				};
				r.isSupported = function e(t, r, a) {
					var i = t.dict;
					if (i.has("DecodeParms") || i.has("DP")) {
						return false
					}
					var n = K.parse(i.get("ColorSpace", "CS"), r, a);
					return (n.name === "DeviceGray" || n.name === "DeviceRGB") && n.isDefaultDecode(i.getArray("Decode", "D"))
				};
				r.isDecodable = function e(t, r, a) {
					var i = t.dict;
					if (i.has("DecodeParms") || i.has("DP")) {
						return false
					}
					var n = K.parse(i.get("ColorSpace", "CS"), r, a);
					return (n.numComps === 1 || n.numComps === 3) && n.isDefaultDecode(i.getArray("Decode", "D"))
				};

				function a(e, r, a, i, n, s, o) {
					this.pdfManager = e;
					this.xref = r;
					this.handler = a;
					this.pageIndex = i;
					this.idFactory = n;
					this.fontCache = s;
					this.options = o || t
				}
				var i = 20;
				var n = 100;

				function s() {
					this.reset()
				}
				s.prototype = {
					check: function e() {
						if (++this.checked < n) {
							return false
						}
						this.checked = 0;
						return this.endTime <= Date.now()
					},
					reset: function e() {
						this.endTime = Date.now() + i;
						this.checked = 0
					}
				};
				var o = Promise.resolve();
				var l = 1,
					c = 2;
				a.prototype = {
					hasBlendModes: function e(t) {
						if (!U(t)) {
							return false
						}
						var r = Object.create(null);
						if (t.objId) {
							r[t.objId] = true
						}
						var a = [t],
							i = this.xref;
						while (a.length) {
							var n, s, o;
							var l = a.shift();
							var c = l.get("ExtGState");
							if (U(c)) {
								var h = c.getKeys();
								for (s = 0, o = h.length; s < o; s++) {
									n = h[s];
									var u = c.get(n);
									var f = u.get("BM");
									if (j(f) && f.name !== "Normal") {
										return true
									}
								}
							}
							var d = l.get("XObject");
							if (!U(d)) {
								continue
							}
							var g = d.getKeys();
							for (s = 0, o = g.length; s < o; s++) {
								n = g[s];
								var v = d.getRaw(n);
								if (q(v)) {
									if (r[v.toString()]) {
										continue
									}
									v = i.fetch(v)
								}
								if (!N(v)) {
									continue
								}
								if (v.dict.objId) {
									if (r[v.dict.objId]) {
										continue
									}
									r[v.dict.objId] = true
								}
								var p = v.dict.get("Resources");
								if (U(p) && (!p.objId || !r[p.objId])) {
									a.push(p);
									if (p.objId) {
										r[p.objId] = true
									}
								}
							}
						}
						return false
					},
					buildFormXObject: function e(t, r, a, i, n, s) {
						var o = r.dict.getArray("Matrix");
						var l = r.dict.getArray("BBox");
						var c = r.dict.get("Group");
						if (c) {
							var h = {
								matrix: o,
								bbox: l,
								smask: a,
								isolated: false,
								knockout: false
							};
							var u = c.get("S");
							var f;
							if (j(u, "Transparency")) {
								h.isolated = c.get("I") || false;
								h.knockout = c.get("K") || false;
								f = c.has("CS") ? K.parse(c.get("CS"), this.xref, t) : null
							}
							if (a && a.backdrop) {
								f = f || K.singletons.rgb;
								a.backdrop = f.getRgb(a.backdrop, 0)
							}
							i.addOp(C.beginGroup, [h])
						}
						i.addOp(C.paintFormXObjectBegin, [o, l]);
						return this.getOperatorList(r, n, r.dict.get("Resources") || t, i, s).then(function () {
							i.addOp(C.paintFormXObjectEnd, []);
							if (c) {
								i.addOp(C.endGroup, [h])
							}
						})
					},
					buildPaintImageXObject: function e(t, a, i, n, s, o) {
						var l = this;
						var c = a.dict;
						var h = c.get("Width", "W");
						var u = c.get("Height", "H");
						if (!(h && O(h)) || !(u && O(u))) {
							M("Image dimensions are missing, or not numbers.");
							return
						}
						var f = this.options.maxImageSize;
						if (f !== -1 && h * u > f) {
							M("Image exceeded maximum allowed size and was removed.");
							return
						}
						var d = c.get("ImageMask", "IM") || false;
						var g, v;
						if (d) {
							var p = c.get("Width", "W");
							var m = c.get("Height", "H");
							var b = p + 7 >> 3;
							var y = a.getBytes(b * m);
							var k = c.getArray("Decode", "D");
							var w = !!k && k[0] > 0;
							g = V.createMask(y, p, m, a instanceof _, w);
							g.cached = true;
							v = [g];
							n.addOp(C.paintImageMaskXObject, v);
							if (s) {
								o[s] = {
									fn: C.paintImageMaskXObject,
									args: v
								}
							}
							return
						}
						var x = c.get("SMask", "SM") || false;
						var S = c.get("Mask") || false;
						var A = 200;
						if (i && !x && !S && !(a instanceof z) && h + u < A) {
							var I = new V(this.xref, t, a, i, null, null);
							g = I.createImageData(true);
							n.addOp(C.paintInlineImageXObject, [g]);
							return
						}
						var B = "img_" + this.idFactory.createObjId();
						n.addDependency(B);
						v = [B, h, u];
						if (!x && !S && a instanceof z && r.isSupported(a, this.xref, t)) {
							n.addOp(C.paintJpegXObject, v);
							this.handler.send("obj", [B, this.pageIndex, "JpegStream", a.getIR(this.options.forceDataSchema)]);
							return
						}
						var R = null;
						if (a instanceof z || S instanceof z || x instanceof z) {
							R = new r(l.xref, t, l.handler, l.options.forceDataSchema)
						}
						V.buildImage(l.handler, l.xref, t, a, i, R).then(function (e) {
							var t = e.createImageData(false);
							l.handler.send("obj", [B, l.pageIndex, "Image", t], [t.data.buffer])
						}).then(undefined, function (e) {
							M("Unable to decode image: " + e);
							l.handler.send("obj", [B, l.pageIndex, "Image", null])
						});
						n.addOp(C.paintImageXObject, v);
						if (s) {
							o[s] = {
								fn: C.paintImageXObject,
								args: v
							}
						}
					},
					handleSMask: function e(t, r, a, i, n) {
						var s = t.get("G");
						var o = {
							subtype: t.get("S").name,
							backdrop: t.get("BC")
						};
						var l = t.get("TR");
						if (re(l)) {
							var c = ae.parse(this.xref, l);
							var h = new Uint8Array(256);
							var u = new Float32Array(1);
							for (var f = 0; f < 256; f++) {
								u[0] = f / 255;
								c(u, 0, u, 0);
								h[f] = u[0] * 255 | 0
							}
							o.transferMap = h
						}
						return this.buildFormXObject(r, s, o, a, i, n.state.clone())
					},
					handleTilingType: function e(t, r, a, i, n, s, o) {
						var l = new Ae;
						var c = [n.get("Resources"), a];
						var h = L.merge(this.xref, c);
						return this.getOperatorList(i, o, h, l).then(function () {
							s.addDependencies(l.dependencies);
							s.addOp(t, ne({
								fnArray: l.fnArray,
								argsArray: l.argsArray
							}, n, r))
						})
					},
					handleSetFont: function e(t, r, a, i, n, s) {
						var o;
						if (r) {
							r = r.slice();
							o = r[0].name
						}
						var l = this;
						return this.loadFont(o, a, this.xref, t).then(function (e) {
							if (!e.font.isType3Font) {
								return e
							}
							return e.loadType3Data(l, t, i, n).then(function () {
								return e
							}, function (t) {
								l.handler.send("UnsupportedFeature", {
									featureId: k.font
								});
								return new Se("g_font_error", new J("Type3 font load error: " + t), e.font)
							})
						}).then(function (e) {
							s.font = e.font;
							e.send(l.handler);
							return e.loadedName
						})
					},
					handleText: function e(t, r) {
						var a = r.font;
						var i = a.charsToGlyphs(t);
						var n = !!(r.textRenderingMode & x.ADD_TO_PATH_FLAG);
						if (a.data && (n || this.options.disableFontFace)) {
							var s = function (e) {
								if (!a.renderer.hasBuiltPath(e)) {
									var t = a.renderer.getPathJs(e);
									this.handler.send("commonobj", [a.loadedName + "_path_" + e, "FontPath", t])
								}
							}.bind(this);
							for (var o = 0, l = i.length; o < l; o++) {
								var c = i[o];
								s(c.fontChar);
								var h = c.accent;
								if (h && h.fontChar) {
									s(h.fontChar)
								}
							}
						}
						return i
					},
					setGState: function e(t, r, a, i, n, s) {
						var o = [];
						var l = r.getKeys();
						var c = this;
						var h = Promise.resolve();
						for (var u = 0, f = l.length; u < f; u++) {
							var d = l[u];
							var g = r.get(d);
							switch (d) {
								case "Type":
									break;
								case "LW":
								case "LC":
								case "LJ":
								case "ML":
								case "D":
								case "RI":
								case "FL":
								case "CA":
								case "ca":
									o.push([d, g]);
									break;
								case "Font":
									h = h.then(function () {
										return c.handleSetFont(t, null, g[0], a, i, s.state).then(function (e) {
											a.addDependency(e);
											o.push([d, [e, g[1]]])
										})
									});
									break;
								case "BM":
									o.push([d, g]);
									break;
								case "SMask":
									if (j(g, "None")) {
										o.push([d, false]);
										break
									}
									if (U(g)) {
										h = h.then(function (e) {
											return c.handleSMask(e, t, a, i, s)
										}.bind(this, g));
										o.push([d, true])
									} else {
										M("Unsupported SMask type")
									}
									break;
								case "OP":
								case "op":
								case "OPM":
								case "BG":
								case "BG2":
								case "UCR":
								case "UCR2":
								case "TR":
								case "TR2":
								case "HT":
								case "SM":
								case "SA":
								case "AIS":
								case "TK":
									R("graphic state operator " + d);
									break;
								default:
									R("Unknown graphic state operator " + d);
									break
							}
						}
						return h.then(function () {
							if (o.length > 0) {
								a.addOp(C.setGState, [o])
							}
						})
					},
					loadFont: function e(t, r, a, i) {
						function n() {
							return Promise.resolve(new Se("g_font_error", new J("Font " + t + " is not available"), r))
						}
						var s;
						if (r) {
							A(q(r));
							s = r
						} else {
							var o = i.get("Font");
							if (o) {
								s = o.getRaw(t)
							} else {
								M("fontRes not available");
								return n()
							}
						}
						if (!s) {
							M("fontRef not available");
							return n()
						}
						if (this.fontCache.has(s)) {
							return this.fontCache.get(s)
						}
						r = a.fetchIfRef(s);
						if (!U(r)) {
							return n()
						}
						if (r.translated) {
							return r.translated
						}
						var l = I();
						var c = this.preEvaluateFont(r, a);
						var h = c.descriptor;
						var u = q(s),
							f;
						if (u) {
							f = s.toString()
						}
						if (U(h)) {
							if (!h.fontAliases) {
								h.fontAliases = Object.create(null)
							}
							var d = h.fontAliases;
							var g = c.hash;
							if (d[g]) {
								var v = d[g].aliasRef;
								if (u && v && this.fontCache.has(v)) {
									this.fontCache.putAlias(s, v);
									return this.fontCache.get(s)
								}
							} else {
								d[g] = {
									fontID: Q.getFontID()
								}
							}
							if (u) {
								d[g].aliasRef = s
							}
							f = d[g].fontID
						}
						if (u) {
							this.fontCache.put(s, l.promise)
						} else {
							if (!f) {
								f = this.idFactory.createObjId()
							}
							this.fontCache.put("id_" + f, l.promise)
						}
						A(f, 'The "fontID" must be defined.');
						r.loadedName = "g_" + this.pdfManager.docId + "_f" + f;
						r.translated = l.promise;
						var p;
						try {
							p = this.translateFont(c, a)
						} catch (e) {
							p = Promise.reject(e)
						}
						var m = this;
						p.then(function (e) {
							if (e.fontType !== undefined) {
								var t = a.stats.fontTypes;
								t[e.fontType] = true
							}
							l.resolve(new Se(r.loadedName, e, r))
						}, function (e) {
							m.handler.send("UnsupportedFeature", {
								featureId: k.font
							});
							try {
								var t = c.descriptor;
								var i = t && t.get("FontFile3");
								var n = i && i.get("Subtype");
								var s = te(c.type, n && n.name);
								var o = a.stats.fontTypes;
								o[s] = true
							} catch (e) {}
							l.resolve(new Se(r.loadedName, new J(e instanceof Error ? e.message : e), r))
						});
						return l.promise
					},
					buildPath: function e(t, r, a) {
						var i = t.length - 1;
						if (!a) {
							a = []
						}
						if (i < 0 || t.fnArray[i] !== C.constructPath) {
							t.addOp(C.constructPath, [
								[r], a
							])
						} else {
							var n = t.argsArray[i];
							n[0].push(r);
							Array.prototype.push.apply(n[1], a)
						}
					},
					handleColorN: function e(t, r, a, i, n, s, o, h) {
						var u = a[a.length - 1];
						var f;
						if (j(u) && (f = n.get(u.name))) {
							var d = N(f) ? f.dict : f;
							var g = d.get("PatternType");
							if (g === l) {
								var v = i.base ? i.base.getRgb(a, 0) : null;
								return this.handleTilingType(r, v, s, f, d, t, o)
							} else if (g === c) {
								var p = d.get("Shading");
								var m = d.getArray("Matrix");
								f = ie.parseShading(p, m, h, s, this.handler);
								t.addOp(r, f.getIR());
								return Promise.resolve()
							}
							return Promise.reject("Unknown PatternType: " + g)
						}
						t.addOp(r, a);
						return Promise.resolve()
					},
					getOperatorList: function e(t, r, a, i, n) {
						var l = this;
						var c = this.xref;
						var h = Object.create(null);
						A(i);
						a = a || L.empty;
						var u = a.get("XObject") || L.empty;
						var f = a.get("Pattern") || L.empty;
						var d = new Ie(n || new Re);
						var g = new Te(t, c, d);
						var v = new s;
						return new Promise(function e(t, n) {
							var s = function (r) {
								r.then(function () {
									try {
										e(t, n)
									} catch (e) {
										n(e)
									}
								}, n)
							};
							r.ensureNotTerminated();
							v.reset();
							var p, m = {},
								b, y, k;
							while (!(p = v.check())) {
								m.args = null;
								if (!g.read(m)) {
									break
								}
								var w = m.args;
								var x = m.fn;
								switch (x | 0) {
									case C.paintXObject:
										if (w[0].code) {
											break
										}
										var S = w[0].name;
										if (!S) {
											M("XObject must be referred to by name.");
											continue
										}
										if (h[S] !== undefined) {
											i.addOp(h[S].fn, h[S].args);
											w = null;
											continue
										}
										var I = u.get(S);
										if (I) {
											A(N(I), "XObject should be a stream");
											var T = I.dict.get("Subtype");
											A(j(T), "XObject should have a Name subtype");
											if (T.name === "Form") {
												d.save();
												s(l.buildFormXObject(a, I, null, i, r, d.state.clone()).then(function () {
													d.restore()
												}));
												return
											} else if (T.name === "Image") {
												l.buildPaintImageXObject(a, I, false, i, S, h);
												w = null;
												continue
											} else if (T.name === "PS") {
												R("Ignored XObject subtype PS");
												continue
											} else {
												B("Unhandled XObject subtype " + T.name)
											}
										}
										break;
									case C.setFont:
										var E = w[1];
										s(l.handleSetFont(a, w, null, i, r, d.state).then(function (e) {
											i.addDependency(e);
											i.addOp(C.setFont, [e, E])
										}));
										return;
									case C.endInlineImage:
										var D = w[0].cacheKey;
										if (D) {
											var F = h[D];
											if (F !== undefined) {
												i.addOp(F.fn, F.args);
												w = null;
												continue
											}
										}
										l.buildPaintImageXObject(a, w[0], true, i, D, h);
										w = null;
										continue;
									case C.showText:
										w[0] = l.handleText(w[0], d.state);
										break;
									case C.showSpacedText:
										var q = w[0];
										var _ = [];
										var z = q.length;
										var H = d.state;
										for (b = 0; b < z; ++b) {
											var G = q[b];
											if (P(G)) {
												Array.prototype.push.apply(_, l.handleText(G, H))
											} else if (O(G)) {
												_.push(G)
											}
										}
										w[0] = _;
										x = C.showText;
										break;
									case C.nextLineShowText:
										i.addOp(C.nextLine);
										w[0] = l.handleText(w[0], d.state);
										x = C.showText;
										break;
									case C.nextLineSetSpacingShowText:
										i.addOp(C.nextLine);
										i.addOp(C.setWordSpacing, [w.shift()]);
										i.addOp(C.setCharSpacing, [w.shift()]);
										w[0] = l.handleText(w[0], d.state);
										x = C.showText;
										break;
									case C.setTextRenderingMode:
										d.state.textRenderingMode = w[0];
										break;
									case C.setFillColorSpace:
										d.state.fillColorSpace = K.parse(w[0], c, a);
										continue;
									case C.setStrokeColorSpace:
										d.state.strokeColorSpace = K.parse(w[0], c, a);
										continue;
									case C.setFillColor:
										k = d.state.fillColorSpace;
										w = k.getRgb(w, 0);
										x = C.setFillRGBColor;
										break;
									case C.setStrokeColor:
										k = d.state.strokeColorSpace;
										w = k.getRgb(w, 0);
										x = C.setStrokeRGBColor;
										break;
									case C.setFillGray:
										d.state.fillColorSpace = K.singletons.gray;
										w = K.singletons.gray.getRgb(w, 0);
										x = C.setFillRGBColor;
										break;
									case C.setStrokeGray:
										d.state.strokeColorSpace = K.singletons.gray;
										w = K.singletons.gray.getRgb(w, 0);
										x = C.setStrokeRGBColor;
										break;
									case C.setFillCMYKColor:
										d.state.fillColorSpace = K.singletons.cmyk;
										w = K.singletons.cmyk.getRgb(w, 0);
										x = C.setFillRGBColor;
										break;
									case C.setStrokeCMYKColor:
										d.state.strokeColorSpace = K.singletons.cmyk;
										w = K.singletons.cmyk.getRgb(w, 0);
										x = C.setStrokeRGBColor;
										break;
									case C.setFillRGBColor:
										d.state.fillColorSpace = K.singletons.rgb;
										w = K.singletons.rgb.getRgb(w, 0);
										break;
									case C.setStrokeRGBColor:
										d.state.strokeColorSpace = K.singletons.rgb;
										w = K.singletons.rgb.getRgb(w, 0);
										break;
									case C.setFillColorN:
										k = d.state.fillColorSpace;
										if (k.name === "Pattern") {
											s(l.handleColorN(i, C.setFillColorN, w, k, f, a, r, c));
											return
										}
										w = k.getRgb(w, 0);
										x = C.setFillRGBColor;
										break;
									case C.setStrokeColorN:
										k = d.state.strokeColorSpace;
										if (k.name === "Pattern") {
											s(l.handleColorN(i, C.setStrokeColorN, w, k, f, a, r, c));
											return
										}
										w = k.getRgb(w, 0);
										x = C.setStrokeRGBColor;
										break;
									case C.shadingFill:
										var X = a.get("Shading");
										if (!X) {
											B("No shading resource found")
										}
										var W = X.get(w[0].name);
										if (!W) {
											B("No shading object found")
										}
										var V = ie.parseShading(W, null, c, a, l.handler);
										var Y = V.getIR();
										w = [Y];
										x = C.shadingFill;
										break;
									case C.setGState:
										var J = w[0];
										var Z = a.get("ExtGState");
										if (!U(Z) || !Z.has(J.name)) {
											break
										}
										var Q = Z.get(J.name);
										s(l.setGState(a, Q, i, r, c, d));
										return;
									case C.moveTo:
									case C.lineTo:
									case C.curveTo:
									case C.curveTo2:
									case C.curveTo3:
									case C.closePath:
										l.buildPath(i, x, w);
										continue;
									case C.rectangle:
										l.buildPath(i, x, w);
										continue;
									case C.markPoint:
									case C.markPointProps:
									case C.beginMarkedContent:
									case C.beginMarkedContentProps:
									case C.endMarkedContent:
									case C.beginCompat:
									case C.endCompat:
										continue;
									default:
										if (w !== null) {
											for (b = 0, y = w.length; b < y; b++) {
												if (w[b] instanceof L) {
													break
												}
											}
											if (b < y) {
												M("getOperatorList - ignoring operator: " + x);
												continue
											}
										}
								}
								i.addOp(x, w)
							}
							if (p) {
								s(o);
								return
							}
							for (b = 0, y = g.savedStatesDepth; b < y; b++) {
								i.addOp(C.restore, [])
							}
							t()
						})
					},
					getTextContent: function e(t, r, a, i, n, l) {
						i = i || new Ie(new Be);
						var c = /\s/g;
						var h = {
							items: [],
							styles: Object.create(null)
						};
						var u = {
							initialized: false,
							str: [],
							width: 0,
							height: 0,
							vertical: false,
							lastAdvanceWidth: 0,
							lastAdvanceHeight: 0,
							textAdvanceScale: 0,
							spaceWidth: 0,
							fakeSpaceMin: Infinity,
							fakeMultiSpaceMin: Infinity,
							fakeMultiSpaceMax: -0,
							textRunBreakAllowed: false,
							transform: null,
							fontName: null
						};
						var f = .3;
						var d = 1.5;
						var g = 4;
						var v = this;
						var p = this.xref;
						a = p.fetchIfRef(a) || L.empty;
						var m = null;
						var k = Object.create(null);
						var w = new Te(t, p, i);
						var x;

						function I() {
							if (u.initialized) {
								return u
							}
							var e = x.font;
							if (!(e.loadedName in h.styles)) {
								h.styles[e.loadedName] = {
									fontFamily: e.fallbackName,
									ascent: e.ascent,
									descent: e.descent,
									vertical: e.vertical
								}
							}
							u.fontName = e.loadedName;
							var t = [x.fontSize * x.textHScale, 0, 0, x.fontSize, 0, x.textRise];
							if (e.isType3Font && x.fontMatrix !== b && x.fontSize === 1) {
								var r = e.bbox[3] - e.bbox[1];
								if (r > 0) {
									r = r * x.fontMatrix[3];
									t[3] *= r
								}
							}
							var a = S.transform(x.ctm, S.transform(x.textMatrix, t));
							u.transform = a;
							if (!e.vertical) {
								u.width = 0;
								u.height = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
								u.vertical = false
							} else {
								u.width = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
								u.height = 0;
								u.vertical = true
							}
							var i = x.textLineMatrix[0];
							var n = x.textLineMatrix[1];
							var s = Math.sqrt(i * i + n * n);
							i = x.ctm[0];
							n = x.ctm[1];
							var o = Math.sqrt(i * i + n * n);
							u.textAdvanceScale = o * s;
							u.lastAdvanceWidth = 0;
							u.lastAdvanceHeight = 0;
							var l = e.spaceWidth / 1e3 * x.fontSize;
							if (l) {
								u.spaceWidth = l;
								u.fakeSpaceMin = l * f;
								u.fakeMultiSpaceMin = l * d;
								u.fakeMultiSpaceMax = l * g;
								u.textRunBreakAllowed = !e.isMonospace
							} else {
								u.spaceWidth = 0;
								u.fakeSpaceMin = Infinity;
								u.fakeMultiSpaceMin = Infinity;
								u.fakeMultiSpaceMax = 0;
								u.textRunBreakAllowed = false
							}
							u.initialized = true;
							return u
						}

						function B(e) {
							var t = 0,
								r = e.length,
								a;
							while (t < r && (a = e.charCodeAt(t)) >= 32 && a <= 127) {
								t++
							}
							return t < r ? e.replace(c, " ") : e
						}

						function R(e) {
							var t = e.str.join("");
							var r = ce(t, -1, e.vertical);
							return {
								str: n ? B(r.str) : r.str,
								dir: r.dir,
								width: e.width,
								height: e.height,
								transform: e.transform,
								fontName: e.fontName
							}
						}

						function P(e, t) {
							return v.loadFont(e, t, p, a).then(function (e) {
								x.font = e.font;
								x.fontMatrix = e.font.fontMatrix || b
							})
						}

						function E(e) {
							var t = x.font;
							var r = I();
							var a = 0;
							var i = 0;
							var n = t.charsToGlyphs(e);
							var s = t.defaultVMetrics;
							for (var o = 0; o < n.length; o++) {
								var l = n[o];
								var c = null;
								var h = null;
								var u = null;
								if (t.vertical) {
									if (l.vmetric) {
										u = l.vmetric[0];
										c = l.vmetric[1];
										h = l.vmetric[2]
									} else {
										u = l.width;
										c = l.width * .5;
										h = s[2]
									}
								} else {
									u = l.width
								}
								var f = l.unicode;
								var d = ye();
								if (d[f] !== undefined) {
									f = d[f]
								}
								f = ke(f);
								var g = x.charSpacing;
								if (l.isSpace) {
									var v = x.wordSpacing;
									g += v;
									if (v > 0) {
										M(v, r.str)
									}
								}
								var p = 0;
								var m = 0;
								if (!t.vertical) {
									var b = u * x.fontMatrix[0];
									p = (b * x.fontSize + g) * x.textHScale;
									a += p
								} else {
									var y = u * x.fontMatrix[0];
									m = y * x.fontSize + g;
									i += m
								}
								x.translateTextMatrix(p, m);
								r.str.push(f)
							}
							if (!t.vertical) {
								r.lastAdvanceWidth = a;
								r.width += a
							} else {
								r.lastAdvanceHeight = i;
								r.height += Math.abs(i)
							}
							return r
						}

						function M(e, t) {
							if (e < u.fakeSpaceMin) {
								return
							}
							if (e < u.fakeMultiSpaceMin) {
								t.push(" ");
								return
							}
							var r = Math.round(e / u.spaceWidth);
							while (r-- > 0) {
								t.push(" ")
							}
						}

						function D() {
							if (!u.initialized) {
								return
							}
							u.width *= u.textAdvanceScale;
							u.height *= u.textAdvanceScale;
							h.items.push(R(u));
							u.initialized = false;
							u.str.length = 0
						}
						var F = new s;
						return new Promise(function e(t, s) {
							var c = function (r) {
								r.then(function () {
									try {
										e(t, s)
									} catch (e) {
										s(e)
									}
								}, s)
							};
							r.ensureNotTerminated();
							F.reset();
							var f, d = {},
								g = [];
							while (!(f = F.check())) {
								g.length = 0;
								d.args = g;
								if (!w.read(d)) {
									break
								}
								x = i.state;
								var p = d.fn;
								g = d.args;
								var b, B;
								switch (p | 0) {
									case C.setFont:
										var R = g[0].name,
											q = g[1];
										if (x.font && R === x.fontName && q === x.fontSize) {
											break
										}
										D();
										x.fontName = R;
										x.fontSize = q;
										c(P(R, null));
										return;
									case C.setTextRise:
										D();
										x.textRise = g[0];
										break;
									case C.setHScale:
										D();
										x.textHScale = g[0] / 100;
										break;
									case C.setLeading:
										D();
										x.leading = g[0];
										break;
									case C.moveText:
										var _ = !x.font ? false : (x.font.vertical ? g[0] : g[1]) === 0;
										b = g[0] - g[1];
										if (l && _ && u.initialized && b > 0 && b <= u.fakeMultiSpaceMax) {
											x.translateTextLineMatrix(g[0], g[1]);
											u.width += g[0] - u.lastAdvanceWidth;
											u.height += g[1] - u.lastAdvanceHeight;
											B = g[0] - u.lastAdvanceWidth - (g[1] - u.lastAdvanceHeight);
											M(B, u.str);
											break
										}
										D();
										x.translateTextLineMatrix(g[0], g[1]);
										x.textMatrix = x.textLineMatrix.slice();
										break;
									case C.setLeadingMoveText:
										D();
										x.leading = -g[1];
										x.translateTextLineMatrix(g[0], g[1]);
										x.textMatrix = x.textLineMatrix.slice();
										break;
									case C.nextLine:
										D();
										x.carriageReturn();
										break;
									case C.setTextMatrix:
										b = x.calcTextLineMatrixAdvance(g[0], g[1], g[2], g[3], g[4], g[5]);
										if (l && b !== null && u.initialized && b.value > 0 && b.value <= u.fakeMultiSpaceMax) {
											x.translateTextLineMatrix(b.width, b.height);
											u.width += b.width - u.lastAdvanceWidth;
											u.height += b.height - u.lastAdvanceHeight;
											B = b.width - u.lastAdvanceWidth - (b.height - u.lastAdvanceHeight);
											M(B, u.str);
											break
										}
										D();
										x.setTextMatrix(g[0], g[1], g[2], g[3], g[4], g[5]);
										x.setTextLineMatrix(g[0], g[1], g[2], g[3], g[4], g[5]);
										break;
									case C.setCharSpacing:
										x.charSpacing = g[0];
										break;
									case C.setWordSpacing:
										x.wordSpacing = g[0];
										break;
									case C.beginText:
										D();
										x.textMatrix = y.slice();
										x.textLineMatrix = y.slice();
										break;
									case C.showSpacedText:
										var z = g[0];
										var H;
										for (var G = 0, X = z.length; G < X; G++) {
											if (typeof z[G] === "string") {
												E(z[G])
											} else if (O(z[G])) {
												I();
												b = z[G] * x.fontSize / 1e3;
												var W = false;
												if (x.font.vertical) {
													H = b;
													x.translateTextMatrix(0, H);
													W = u.textRunBreakAllowed && b > u.fakeMultiSpaceMax;
													if (!W) {
														u.height += H
													}
												} else {
													b = -b;
													H = b * x.textHScale;
													x.translateTextMatrix(H, 0);
													W = u.textRunBreakAllowed && b > u.fakeMultiSpaceMax;
													if (!W) {
														u.width += H
													}
												}
												if (W) {
													D()
												} else if (b > 0) {
													M(b, u.str)
												}
											}
										}
										break;
									case C.showText:
										E(g[0]);
										break;
									case C.nextLineShowText:
										D();
										x.carriageReturn();
										E(g[0]);
										break;
									case C.nextLineSetSpacingShowText:
										D();
										x.wordSpacing = g[0];
										x.charSpacing = g[1];
										x.carriageReturn();
										E(g[2]);
										break;
									case C.paintXObject:
										D();
										if (g[0].code) {
											break
										}
										if (!m) {
											m = a.get("XObject") || L.empty
										}
										var V = g[0].name;
										if (k.key === V) {
											if (k.texts) {
												S.appendToArray(h.items, k.texts.items);
												S.extendObj(h.styles, k.texts.styles)
											}
											break
										}
										var K = m.get(V);
										if (!K) {
											break
										}
										A(N(K), "XObject should be a stream");
										var Y = K.dict.get("Subtype");
										A(j(Y), "XObject should have a Name subtype");
										if ("Form" !== Y.name) {
											k.key = V;
											k.texts = null;
											break
										}
										i.save();
										var J = K.dict.getArray("Matrix");
										if (T(J) && J.length === 6) {
											i.transform(J)
										}
										c(v.getTextContent(K, r, K.dict.get("Resources") || a, i, n, l).then(function (e) {
											S.appendToArray(h.items, e.items);
											S.extendObj(h.styles, e.styles);
											i.restore();
											k.key = V;
											k.texts = e
										}));
										return;
									case C.setGState:
										D();
										var Z = g[0];
										var Q = a.get("ExtGState");
										if (!U(Q) || !j(Z)) {
											break
										}
										var $ = Q.get(Z.name);
										if (!U($)) {
											break
										}
										var ee = $.get("Font");
										if (ee) {
											x.fontName = null;
											x.fontSize = ee[1];
											c(P(null, ee[0]));
											return
										}
										break
								}
							}
							if (f) {
								c(o);
								return
							}
							D();
							t(h)
						})
					},
					extractDataStructures: function e(t, r, a, i) {
						var n = t.get("ToUnicode") || r.get("ToUnicode");
						var s = n ? this.readToUnicode(n) : Promise.resolve(undefined);
						if (i.composite) {
							var o = t.get("CIDSystemInfo");
							if (U(o)) {
								i.cidSystemInfo = {
									registry: o.get("Registry"),
									ordering: o.get("Ordering"),
									supplement: o.get("Supplement")
								}
							}
							var l = t.get("CIDToGIDMap");
							if (N(l)) {
								i.cidToGidMap = this.readCidToGidMap(l)
							}
						}
						var c = [];
						var h = null;
						var u;
						if (t.has("Encoding")) {
							u = t.get("Encoding");
							if (U(u)) {
								h = u.get("BaseEncoding");
								h = j(h) ? h.name : null;
								if (u.has("Differences")) {
									var f = u.get("Differences");
									var d = 0;
									for (var g = 0, v = f.length; g < v; g++) {
										var p = a.fetchIfRef(f[g]);
										if (O(p)) {
											d = p
										} else if (j(p)) {
											c[d++] = p.name
										} else {
											B("Invalid entry in 'Differences' array: " + p)
										}
									}
								}
							} else if (j(u)) {
								h = u.name
							} else {
								B("Encoding is not a Name nor a Dict")
							}
							if (h !== "MacRomanEncoding" && h !== "MacExpertEncoding" && h !== "WinAnsiEncoding") {
								h = null
							}
						}
						if (h) {
							i.defaultEncoding = ve(h).slice()
						} else {
							var m = !!(i.flags & Z.Symbolic);
							var b = !!(i.flags & Z.Nonsymbolic);
							u = ue;
							if (i.type === "TrueType" && !b) {
								u = he
							}
							if (m) {
								u = fe;
								if (!i.file) {
									if (/Symbol/i.test(i.name)) {
										u = de
									} else if (/Dingbats/i.test(i.name)) {
										u = ge
									}
								}
							}
							i.defaultEncoding = u
						}
						i.differences = c;
						i.baseEncodingName = h;
						i.hasEncoding = !!h || c.length > 0;
						i.dict = t;
						return s.then(function (e) {
							i.toUnicode = e;
							return this.buildToUnicode(i)
						}.bind(this)).then(function (e) {
							i.toUnicode = e;
							return i
						})
					},
					buildToUnicode: function e(t) {
						t.hasIncludedToUnicodeMap = !!t.toUnicode && t.toUnicode.length > 0;
						if (t.hasIncludedToUnicodeMap) {
							return Promise.resolve(t.toUnicode)
						}
						var r, a, i;
						if (!t.composite) {
							r = [];
							var n = t.defaultEncoding.slice();
							var s = t.baseEncodingName;
							var o = t.differences;
							for (a in o) {
								i = o[a];
								if (i === ".notdef") {
									continue
								}
								n[a] = i
							}
							var l = Ce();
							for (a in n) {
								i = n[a];
								if (i === "") {
									continue
								} else if (l[i] === undefined) {
									var c = 0;
									switch (i[0]) {
										case "G":
											if (i.length === 3) {
												c = parseInt(i.substr(1), 16)
											}
											break;
										case "g":
											if (i.length === 5) {
												c = parseInt(i.substr(1), 16)
											}
											break;
										case "C":
										case "c":
											if (i.length >= 3) {
												c = +i.substr(1)
											}
											break;
										default:
											var h = we(i, l);
											if (h !== -1) {
												c = h
											}
									}
									if (c) {
										if (s && c === +a) {
											var u = ve(s);
											if (u && (i = u[a])) {
												r[a] = String.fromCharCode(l[i]);
												continue
											}
										}
										r[a] = String.fromCharCode(c)
									}
									continue
								}
								r[a] = String.fromCharCode(l[i])
							}
							return Promise.resolve(new ee(r))
						}
						if (t.composite && (t.cMap.builtInCMap && !(t.cMap instanceof oe) || t.cidSystemInfo.registry === "Adobe" && (t.cidSystemInfo.ordering === "GB1" || t.cidSystemInfo.ordering === "CNS1" || t.cidSystemInfo.ordering === "Japan1" || t.cidSystemInfo.ordering === "Korea1"))) {
							var f = t.cidSystemInfo.registry;
							var d = t.cidSystemInfo.ordering;
							var g = D.get(f + "-" + d + "-UCS2");
							return se.create(g, this.options.cMapOptions, null).then(function (e) {
								var a = t.cMap;
								r = [];
								a.forEach(function (t, a) {
									A(a <= 65535, "Max size of CID is 65,535");
									var i = e.lookup(a);
									if (i) {
										r[t] = String.fromCharCode((i.charCodeAt(0) << 8) + i.charCodeAt(1))
									}
								});
								return new ee(r)
							})
						}
						return Promise.resolve(new $(t.firstChar, t.lastChar))
					},
					readToUnicode: function e(t) {
						var r = t;
						if (j(r)) {
							return se.create(r, this.options.cMapOptions, null).then(function (e) {
								if (e instanceof oe) {
									return new $(0, 65535)
								}
								return new ee(e.getMap())
							})
						} else if (N(r)) {
							return se.create(r, this.options.cMapOptions, null).then(function (e) {
								if (e instanceof oe) {
									return new $(0, 65535)
								}
								var t = new Array(e.length);
								e.forEach(function (e, r) {
									var a = [];
									for (var i = 0; i < r.length; i += 2) {
										var n = r.charCodeAt(i) << 8 | r.charCodeAt(i + 1);
										if ((n & 63488) !== 55296) {
											a.push(n);
											continue
										}
										i += 2;
										var s = r.charCodeAt(i) << 8 | r.charCodeAt(i + 1);
										a.push(((n & 1023) << 10) + (s & 1023) + 65536)
									}
									t[e] = String.fromCharCode.apply(String, a)
								});
								return new ee(t)
							})
						}
						return Promise.resolve(null)
					},
					readCidToGidMap: function e(t) {
						var r = t.getBytes();
						var a = [];
						for (var i = 0, n = r.length; i < n; i++) {
							var s = r[i++] << 8 | r[i];
							if (s === 0) {
								continue
							}
							var o = i >> 1;
							a[o] = s
						}
						return a
					},
					extractWidths: function e(t, r, a, i) {
						var n = [];
						var s = 0;
						var o = [];
						var l;
						var c, h, u, f, d, g, v;
						if (i.composite) {
							s = t.get("DW") || 1e3;
							v = t.get("W");
							if (v) {
								for (c = 0, h = v.length; c < h; c++) {
									d = r.fetchIfRef(v[c++]);
									g = r.fetchIfRef(v[c]);
									if (T(g)) {
										for (u = 0, f = g.length; u < f; u++) {
											n[d++] = r.fetchIfRef(g[u])
										}
									} else {
										var p = r.fetchIfRef(v[++c]);
										for (u = d; u <= g; u++) {
											n[u] = p
										}
									}
								}
							}
							if (i.vertical) {
								var m = t.getArray("DW2") || [880, -1e3];
								l = [m[1], s * .5, m[0]];
								m = t.get("W2");
								if (m) {
									for (c = 0, h = m.length; c < h; c++) {
										d = r.fetchIfRef(m[c++]);
										g = r.fetchIfRef(m[c]);
										if (T(g)) {
											for (u = 0, f = g.length; u < f; u++) {
												o[d++] = [r.fetchIfRef(g[u++]), r.fetchIfRef(g[u++]), r.fetchIfRef(g[u])]
											}
										} else {
											var b = [r.fetchIfRef(m[++c]), r.fetchIfRef(m[++c]), r.fetchIfRef(m[++c])];
											for (u = d; u <= g; u++) {
												o[u] = b
											}
										}
									}
								}
							}
						} else {
							var y = i.firstChar;
							v = t.get("Widths");
							if (v) {
								u = y;
								for (c = 0, h = v.length; c < h; c++) {
									n[u++] = r.fetchIfRef(v[c])
								}
								s = parseFloat(a.get("MissingWidth")) || 0
							} else {
								var k = t.get("BaseFont");
								if (j(k)) {
									var w = this.getBaseFontMetrics(k.name);
									n = this.buildCharCodeToWidth(w.widths, i);
									s = w.defaultWidth
								}
							}
						}
						var C = true;
						var x = s;
						for (var S in n) {
							var A = n[S];
							if (!A) {
								continue
							}
							if (!x) {
								x = A;
								continue
							}
							if (x !== A) {
								C = false;
								break
							}
						}
						if (C) {
							i.flags |= Z.FixedPitch
						}
						i.defaultWidth = s;
						i.widths = n;
						i.defaultVMetrics = l;
						i.vmetrics = o
					},
					isSerifFont: function e(t) {
						var r = t.split("-")[0];
						return r in me() || r.search(/serif/gi) !== -1
					},
					getBaseFontMetrics: function e(t) {
						var r = 0;
						var a = [];
						var i = false;
						var n = pe();
						var s = n[t] || t;
						var o = le();
						if (!(s in o)) {
							if (this.isSerifFont(t)) {
								s = "Times-Roman"
							} else {
								s = "Helvetica"
							}
						}
						var l = o[s];
						if (O(l)) {
							r = l;
							i = true
						} else {
							a = l()
						}
						return {
							defaultWidth: r,
							monospace: i,
							widths: a
						}
					},
					buildCharCodeToWidth: function e(t, r) {
						var a = Object.create(null);
						var i = r.differences;
						var n = r.defaultEncoding;
						for (var s = 0; s < 256; s++) {
							if (s in i && t[i[s]]) {
								a[s] = t[i[s]];
								continue
							}
							if (s in n && t[n[s]]) {
								a[s] = t[n[s]];
								continue
							}
						}
						return a
					},
					preEvaluateFont: function e(t, r) {
						var a = t;
						var i = t.get("Subtype");
						A(j(i), "invalid font Subtype");
						var n = false;
						var s;
						if (i.name === "Type0") {
							var o = t.get("DescendantFonts");
							if (!o) {
								B("Descendant fonts are not specified")
							}
							t = T(o) ? r.fetchIfRef(o[0]) : o;
							i = t.get("Subtype");
							A(j(i), "invalid font Subtype");
							n = true
						}
						var l = t.get("FontDescriptor");
						if (l) {
							var c = new Y;
							var h = a.getRaw("Encoding");
							if (j(h)) {
								c.update(h.name)
							} else if (q(h)) {
								c.update(h.toString())
							} else if (U(h)) {
								var u = h.getKeys();
								for (var f = 0, d = u.length; f < d; f++) {
									var g = h.getRaw(u[f]);
									if (j(g)) {
										c.update(g.name)
									} else if (q(g)) {
										c.update(g.toString())
									} else if (T(g)) {
										var v = g.length,
											p = new Array(v);
										for (var m = 0; m < v; m++) {
											var b = g[m];
											if (j(b)) {
												p[m] = b.name
											} else if (O(b) || q(b)) {
												p[m] = b.toString()
											}
										}
										c.update(p.join())
									}
								}
							}
							var y = t.get("ToUnicode") || a.get("ToUnicode");
							if (N(y)) {
								var k = y.str || y;
								s = k.buffer ? new Uint8Array(k.buffer.buffer, 0, k.bufferLength) : new Uint8Array(k.bytes.buffer, k.start, k.end - k.start);
								c.update(s)
							} else if (j(y)) {
								c.update(y.name)
							}
							var w = t.get("Widths") || a.get("Widths");
							if (w) {
								s = new Uint8Array(new Uint32Array(w).buffer);
								c.update(s)
							}
						}
						return {
							descriptor: l,
							dict: t,
							baseDict: a,
							composite: n,
							type: i.name,
							hash: c ? c.hexdigest() : ""
						}
					},
					translateFont: function e(t, r) {
						var a = t.baseDict;
						var i = t.dict;
						var n = t.composite;
						var s = t.descriptor;
						var o = t.type;
						var l = n ? 65535 : 255;
						var c = this.options.cMapOptions;
						var h;
						if (!s) {
							if (o === "Type3") {
								s = new L(null);
								s.set("FontName", D.get(o));
								s.set("FontBBox", i.getArray("FontBBox"))
							} else {
								var u = i.get("BaseFont");
								if (!j(u)) {
									B("Base font is not specified")
								}
								u = u.name.replace(/[,_]/g, "-");
								var f = this.getBaseFontMetrics(u);
								var d = u.split("-")[0];
								var g = (this.isSerifFont(d) ? Z.Serif : 0) | (f.monospace ? Z.FixedPitch : 0) | (be()[d] ? Z.Symbolic : Z.Nonsymbolic);
								h = {
									type: o,
									name: u,
									widths: f.widths,
									defaultWidth: f.defaultWidth,
									flags: g,
									firstChar: 0,
									lastChar: l
								};
								return this.extractDataStructures(i, i, r, h).then(function (e) {
									e.widths = this.buildCharCodeToWidth(f.widths, e);
									return new Q(u, null, e)
								}.bind(this))
							}
						}
						var v = i.get("FirstChar") || 0;
						var p = i.get("LastChar") || l;
						var m = s.get("FontName");
						var y = i.get("BaseFont");
						if (P(m)) {
							m = D.get(m)
						}
						if (P(y)) {
							y = D.get(y)
						}
						if (o !== "Type3") {
							var k = m && m.name;
							var w = y && y.name;
							if (k !== w) {
								R("The FontDescriptor's FontName is \"" + k + '" but should be the same as the Font\'s BaseFont "' + w + '"');
								if (k && w && w.indexOf(k) === 0) {
									m = y
								}
							}
						}
						m = m || y;
						A(j(m), "invalid font name");
						var C = s.get("FontFile", "FontFile2", "FontFile3");
						if (C) {
							if (C.dict) {
								var x = C.dict.get("Subtype");
								if (x) {
									x = x.name
								}
								var S = C.dict.get("Length1");
								var I = C.dict.get("Length2");
								var T = C.dict.get("Length3")
							}
						}
						h = {
							type: o,
							name: m.name,
							subtype: x,
							file: C,
							length1: S,
							length2: I,
							length3: T,
							loadedName: a.loadedName,
							composite: n,
							wideChars: n,
							fixedPitch: false,
							fontMatrix: i.getArray("FontMatrix") || b,
							firstChar: v || 0,
							lastChar: p || l,
							bbox: s.getArray("FontBBox"),
							ascent: s.get("Ascent"),
							descent: s.get("Descent"),
							xHeight: s.get("XHeight"),
							capHeight: s.get("CapHeight"),
							flags: s.get("Flags"),
							italicAngle: s.get("ItalicAngle"),
							coded: false
						};
						var O;
						if (n) {
							var E = a.get("Encoding");
							if (j(E)) {
								h.cidEncoding = E.name
							}
							O = se.create(E, c, null).then(function (e) {
								h.cMap = e;
								h.vertical = h.cMap.vertical
							})
						} else {
							O = Promise.resolve(undefined)
						}
						return O.then(function () {
							return this.extractDataStructures(i, a, r, h)
						}.bind(this)).then(function (e) {
							this.extractWidths(i, r, s, e);
							if (o === "Type3") {
								e.isType3Font = true
							}
							return new Q(m.name, C, e)
						}.bind(this))
					}
				};
				return a
			}();
			var Se = function e() {
				function t(e, t, r) {
					this.loadedName = e;
					this.font = t;
					this.dict = r;
					this.type3Loaded = null;
					this.sent = false
				}
				t.prototype = {
					send: function (e) {
						if (this.sent) {
							return
						}
						var t = this.font.exportData();
						e.send("commonobj", [this.loadedName, "Font", t]);
						this.sent = true
					},
					loadType3Data: function (e, t, r, a) {
						A(this.font.isType3Font);
						if (this.type3Loaded) {
							return this.type3Loaded
						}
						var i = this.font;
						var n = Promise.resolve();
						var s = this.dict.get("CharProcs");
						var o = this.dict.get("Resources") || t;
						var l = s.getKeys();
						var c = Object.create(null);
						for (var h = 0, u = l.length; h < u; ++h) {
							n = n.then(function (t) {
								var i = s.get(t);
								var n = new Ae;
								return e.getOperatorList(i, a, o, n).then(function () {
									c[t] = n.getIR();
									r.addDependencies(n.dependencies)
								}, function (e) {
									M('Type3 font resource "' + t + '" is not available');
									var r = new Ae;
									c[t] = r.getIR()
								})
							}.bind(this, l[h]))
						}
						this.type3Loaded = n.then(function () {
							i.charProcOperatorList = c
						});
						return this.type3Loaded
					}
				};
				return t
			}();
			var Ae = function e() {
				var t = 1e3;
				var r = t - 5;

				function a(e) {
					var t = [];
					var r = e.fnArray,
						a = e.argsArray;
					for (var i = 0, n = e.length; i < n; i++) {
						switch (r[i]) {
							case C.paintInlineImageXObject:
							case C.paintInlineImageXObjectGroup:
							case C.paintImageMaskXObject:
								var s = a[i][0];
								if (!s.cached) {
									t.push(s.data.buffer)
								}
								break
						}
					}
					return t
				}

				function i(e, t, r) {
					this.messageHandler = t;
					this.fnArray = [];
					this.argsArray = [];
					this.dependencies = Object.create(null);
					this._totalLength = 0;
					this.pageIndex = r;
					this.intent = e
				}
				i.prototype = {
					get length() {
						return this.argsArray.length
					},
					get totalLength() {
						return this._totalLength + this.length
					},
					addOp: function (e, a) {
						this.fnArray.push(e);
						this.argsArray.push(a);
						if (this.messageHandler) {
							if (this.fnArray.length >= t) {
								this.flush()
							} else if (this.fnArray.length >= r && (e === C.restore || e === C.endText)) {
								this.flush()
							}
						}
					},
					addDependency: function (e) {
						if (e in this.dependencies) {
							return
						}
						this.dependencies[e] = true;
						this.addOp(C.dependency, [e])
					},
					addDependencies: function (e) {
						for (var t in e) {
							this.addDependency(t)
						}
					},
					addOpList: function (e) {
						S.extendObj(this.dependencies, e.dependencies);
						for (var t = 0, r = e.length; t < r; t++) {
							this.addOp(e.fnArray[t], e.argsArray[t])
						}
					},
					getIR: function () {
						return {
							fnArray: this.fnArray,
							argsArray: this.argsArray,
							length: this.length
						}
					},
					flush: function (e) {
						if (this.intent !== "oplist") {
							(new Oe).optimize(this)
						}
						var t = a(this);
						var r = this.length;
						this._totalLength += r;
						this.messageHandler.send("RenderPageChunk", {
							operatorList: {
								fnArray: this.fnArray,
								argsArray: this.argsArray,
								lastChunk: e,
								length: r
							},
							pageIndex: this.pageIndex,
							intent: this.intent
						}, t);
						this.dependencies = Object.create(null);
						this.fnArray.length = 0;
						this.argsArray.length = 0
					}
				};
				return i
			}();
			var Ie = function e() {
				function t(e) {
					this.state = e;
					this.stateStack = []
				}
				t.prototype = {
					save: function () {
						var e = this.state;
						this.stateStack.push(this.state);
						this.state = e.clone()
					},
					restore: function () {
						var e = this.stateStack.pop();
						if (e) {
							this.state = e
						}
					},
					transform: function (e) {
						this.state.ctm = S.transform(this.state.ctm, e)
					}
				};
				return t
			}();
			var Be = function e() {
				function t() {
					this.ctm = new Float32Array(y);
					this.fontName = null;
					this.fontSize = 0;
					this.font = null;
					this.fontMatrix = b;
					this.textMatrix = y.slice();
					this.textLineMatrix = y.slice();
					this.charSpacing = 0;
					this.wordSpacing = 0;
					this.leading = 0;
					this.textHScale = 1;
					this.textRise = 0
				}
				t.prototype = {
					setTextMatrix: function e(t, r, a, i, n, s) {
						var o = this.textMatrix;
						o[0] = t;
						o[1] = r;
						o[2] = a;
						o[3] = i;
						o[4] = n;
						o[5] = s
					},
					setTextLineMatrix: function e(t, r, a, i, n, s) {
						var o = this.textLineMatrix;
						o[0] = t;
						o[1] = r;
						o[2] = a;
						o[3] = i;
						o[4] = n;
						o[5] = s
					},
					translateTextMatrix: function e(t, r) {
						var a = this.textMatrix;
						a[4] = a[0] * t + a[2] * r + a[4];
						a[5] = a[1] * t + a[3] * r + a[5]
					},
					translateTextLineMatrix: function e(t, r) {
						var a = this.textLineMatrix;
						a[4] = a[0] * t + a[2] * r + a[4];
						a[5] = a[1] * t + a[3] * r + a[5]
					},
					calcTextLineMatrixAdvance: function e(t, r, a, i, n, s) {
						var o = this.font;
						if (!o) {
							return null
						}
						var l = this.textLineMatrix;
						if (!(t === l[0] && r === l[1] && a === l[2] && i === l[3])) {
							return null
						}
						var c = n - l[4],
							h = s - l[5];
						if (o.vertical && c !== 0 || !o.vertical && h !== 0) {
							return null
						}
						var u, f, d = t * i - r * a;
						if (o.vertical) {
							u = -h * a / d;
							f = h * t / d
						} else {
							u = c * i / d;
							f = -c * r / d
						}
						return {
							width: u,
							height: f,
							value: o.vertical ? f : u
						}
					},
					calcRenderMatrix: function e(t) {
						var r = [this.fontSize * this.textHScale, 0, 0, this.fontSize, 0, this.textRise];
						return S.transform(t, S.transform(this.textMatrix, r))
					},
					carriageReturn: function e() {
						this.translateTextLineMatrix(0, -this.leading);
						this.textMatrix = this.textLineMatrix.slice()
					},
					clone: function e() {
						var t = Object.create(this);
						t.textMatrix = this.textMatrix.slice();
						t.textLineMatrix = this.textLineMatrix.slice();
						t.fontMatrix = this.fontMatrix.slice();
						return t
					}
				};
				return t
			}();
			var Re = function e() {
				function t() {
					this.ctm = new Float32Array(y);
					this.font = null;
					this.textRenderingMode = x.FILL;
					this.fillColorSpace = K.singletons.gray;
					this.strokeColorSpace = K.singletons.gray
				}
				t.prototype = {
					clone: function e() {
						return Object.create(this)
					}
				};
				return t
			}();
			var Te = function e() {
				var t = E(function (e) {
					e["w"] = {
						id: C.setLineWidth,
						numArgs: 1,
						variableArgs: false
					};
					e["J"] = {
						id: C.setLineCap,
						numArgs: 1,
						variableArgs: false
					};
					e["j"] = {
						id: C.setLineJoin,
						numArgs: 1,
						variableArgs: false
					};
					e["M"] = {
						id: C.setMiterLimit,
						numArgs: 1,
						variableArgs: false
					};
					e["d"] = {
						id: C.setDash,
						numArgs: 2,
						variableArgs: false
					};
					e["ri"] = {
						id: C.setRenderingIntent,
						numArgs: 1,
						variableArgs: false
					};
					e["i"] = {
						id: C.setFlatness,
						numArgs: 1,
						variableArgs: false
					};
					e["gs"] = {
						id: C.setGState,
						numArgs: 1,
						variableArgs: false
					};
					e["q"] = {
						id: C.save,
						numArgs: 0,
						variableArgs: false
					};
					e["Q"] = {
						id: C.restore,
						numArgs: 0,
						variableArgs: false
					};
					e["cm"] = {
						id: C.transform,
						numArgs: 6,
						variableArgs: false
					};
					e["m"] = {
						id: C.moveTo,
						numArgs: 2,
						variableArgs: false
					};
					e["l"] = {
						id: C.lineTo,
						numArgs: 2,
						variableArgs: false
					};
					e["c"] = {
						id: C.curveTo,
						numArgs: 6,
						variableArgs: false
					};
					e["v"] = {
						id: C.curveTo2,
						numArgs: 4,
						variableArgs: false
					};
					e["y"] = {
						id: C.curveTo3,
						numArgs: 4,
						variableArgs: false
					};
					e["h"] = {
						id: C.closePath,
						numArgs: 0,
						variableArgs: false
					};
					e["re"] = {
						id: C.rectangle,
						numArgs: 4,
						variableArgs: false
					};
					e["S"] = {
						id: C.stroke,
						numArgs: 0,
						variableArgs: false
					};
					e["s"] = {
						id: C.closeStroke,
						numArgs: 0,
						variableArgs: false
					};
					e["f"] = {
						id: C.fill,
						numArgs: 0,
						variableArgs: false
					};
					e["F"] = {
						id: C.fill,
						numArgs: 0,
						variableArgs: false
					};
					e["f*"] = {
						id: C.eoFill,
						numArgs: 0,
						variableArgs: false
					};
					e["B"] = {
						id: C.fillStroke,
						numArgs: 0,
						variableArgs: false
					};
					e["B*"] = {
						id: C.eoFillStroke,
						numArgs: 0,
						variableArgs: false
					};
					e["b"] = {
						id: C.closeFillStroke,
						numArgs: 0,
						variableArgs: false
					};
					e["b*"] = {
						id: C.closeEOFillStroke,
						numArgs: 0,
						variableArgs: false
					};
					e["n"] = {
						id: C.endPath,
						numArgs: 0,
						variableArgs: false
					};
					e["W"] = {
						id: C.clip,
						numArgs: 0,
						variableArgs: false
					};
					e["W*"] = {
						id: C.eoClip,
						numArgs: 0,
						variableArgs: false
					};
					e["BT"] = {
						id: C.beginText,
						numArgs: 0,
						variableArgs: false
					};
					e["ET"] = {
						id: C.endText,
						numArgs: 0,
						variableArgs: false
					};
					e["Tc"] = {
						id: C.setCharSpacing,
						numArgs: 1,
						variableArgs: false
					};
					e["Tw"] = {
						id: C.setWordSpacing,
						numArgs: 1,
						variableArgs: false
					};
					e["Tz"] = {
						id: C.setHScale,
						numArgs: 1,
						variableArgs: false
					};
					e["TL"] = {
						id: C.setLeading,
						numArgs: 1,
						variableArgs: false
					};
					e["Tf"] = {
						id: C.setFont,
						numArgs: 2,
						variableArgs: false
					};
					e["Tr"] = {
						id: C.setTextRenderingMode,
						numArgs: 1,
						variableArgs: false
					};
					e["Ts"] = {
						id: C.setTextRise,
						numArgs: 1,
						variableArgs: false
					};
					e["Td"] = {
						id: C.moveText,
						numArgs: 2,
						variableArgs: false
					};
					e["TD"] = {
						id: C.setLeadingMoveText,
						numArgs: 2,
						variableArgs: false
					};
					e["Tm"] = {
						id: C.setTextMatrix,
						numArgs: 6,
						variableArgs: false
					};
					e["T*"] = {
						id: C.nextLine,
						numArgs: 0,
						variableArgs: false
					};
					e["Tj"] = {
						id: C.showText,
						numArgs: 1,
						variableArgs: false
					};
					e["TJ"] = {
						id: C.showSpacedText,
						numArgs: 1,
						variableArgs: false
					};
					e["'"] = {
						id: C.nextLineShowText,
						numArgs: 1,
						variableArgs: false
					};
					e['"'] = {
						id: C.nextLineSetSpacingShowText,
						numArgs: 3,
						variableArgs: false
					};
					e["d0"] = {
						id: C.setCharWidth,
						numArgs: 2,
						variableArgs: false
					};
					e["d1"] = {
						id: C.setCharWidthAndBounds,
						numArgs: 6,
						variableArgs: false
					};
					e["CS"] = {
						id: C.setStrokeColorSpace,
						numArgs: 1,
						variableArgs: false
					};
					e["cs"] = {
						id: C.setFillColorSpace,
						numArgs: 1,
						variableArgs: false
					};
					e["SC"] = {
						id: C.setStrokeColor,
						numArgs: 4,
						variableArgs: true
					};
					e["SCN"] = {
						id: C.setStrokeColorN,
						numArgs: 33,
						variableArgs: true
					};
					e["sc"] = {
						id: C.setFillColor,
						numArgs: 4,
						variableArgs: true
					};
					e["scn"] = {
						id: C.setFillColorN,
						numArgs: 33,
						variableArgs: true
					};
					e["G"] = {
						id: C.setStrokeGray,
						numArgs: 1,
						variableArgs: false
					};
					e["g"] = {
						id: C.setFillGray,
						numArgs: 1,
						variableArgs: false
					};
					e["RG"] = {
						id: C.setStrokeRGBColor,
						numArgs: 3,
						variableArgs: false
					};
					e["rg"] = {
						id: C.setFillRGBColor,
						numArgs: 3,
						variableArgs: false
					};
					e["K"] = {
						id: C.setStrokeCMYKColor,
						numArgs: 4,
						variableArgs: false
					};
					e["k"] = {
						id: C.setFillCMYKColor,
						numArgs: 4,
						variableArgs: false
					};
					e["sh"] = {
						id: C.shadingFill,
						numArgs: 1,
						variableArgs: false
					};
					e["BI"] = {
						id: C.beginInlineImage,
						numArgs: 0,
						variableArgs: false
					};
					e["ID"] = {
						id: C.beginImageData,
						numArgs: 0,
						variableArgs: false
					};
					e["EI"] = {
						id: C.endInlineImage,
						numArgs: 1,
						variableArgs: false
					};
					e["Do"] = {
						id: C.paintXObject,
						numArgs: 1,
						variableArgs: false
					};
					e["MP"] = {
						id: C.markPoint,
						numArgs: 1,
						variableArgs: false
					};
					e["DP"] = {
						id: C.markPointProps,
						numArgs: 2,
						variableArgs: false
					};
					e["BMC"] = {
						id: C.beginMarkedContent,
						numArgs: 1,
						variableArgs: false
					};
					e["BDC"] = {
						id: C.beginMarkedContentProps,
						numArgs: 2,
						variableArgs: false
					};
					e["EMC"] = {
						id: C.endMarkedContent,
						numArgs: 0,
						variableArgs: false
					};
					e["BX"] = {
						id: C.beginCompat,
						numArgs: 0,
						variableArgs: false
					};
					e["EX"] = {
						id: C.endCompat,
						numArgs: 0,
						variableArgs: false
					};
					e["BM"] = null;
					e["BD"] = null;
					e["true"] = null;
					e["fa"] = null;
					e["fal"] = null;
					e["fals"] = null;
					e["false"] = null;
					e["nu"] = null;
					e["nul"] = null;
					e["null"] = null
				});

				function r(e, r, a) {
					this.opMap = t();
					this.parser = new X(new G(e, this.opMap), false, r);
					this.stateManager = a;
					this.nonProcessedArgs = []
				}
				r.prototype = {
					get savedStatesDepth() {
						return this.stateManager.stateStack.length
					},
					read: function e(t) {
						var r = t.args;
						while (true) {
							var a = this.parser.getObj();
							if (F(a)) {
								var i = a.cmd;
								var n = this.opMap[i];
								if (!n) {
									M('Unknown command "' + i + '"');
									continue
								}
								var s = n.id;
								var o = n.numArgs;
								var l = r !== null ? r.length : 0;
								if (!n.variableArgs) {
									if (l !== o) {
										var c = this.nonProcessedArgs;
										while (l > o) {
											c.push(r.shift());
											l--
										}
										while (l < o && c.length !== 0) {
											if (r === null) {
												r = []
											}
											r.unshift(c.pop());
											l++
										}
									}
									if (l < o) {
										M("Skipping command " + s + ": expected " + o + " args, but received " + l + " args.");
										if (r !== null) {
											r.length = 0
										}
										continue
									}
								} else if (l > o) {
									R("Command " + s + ": expected [0," + o + "] args, but received " + l + " args.")
								}
								this.preprocessCommand(s, r);
								t.fn = s;
								t.args = r;
								return true
							}
							if (W(a)) {
								return false
							}
							if (a !== null) {
								if (r === null) {
									r = []
								}
								r.push(a);
								A(r.length <= 33, "Too many arguments")
							}
						}
					},
					preprocessCommand: function e(t, r) {
						switch (t | 0) {
							case C.save:
								this.stateManager.save();
								break;
							case C.restore:
								this.stateManager.restore();
								break;
							case C.transform:
								this.stateManager.transform(r);
								break
						}
					}
				};
				return r
			}();
			var Oe = function e() {
				function t(e, t, r) {
					var a = e;
					for (var i = 0, n = t.length - 1; i < n; i++) {
						var s = t[i];
						a = a[s] || (a[s] = [])
					}
					a[t[t.length - 1]] = r
				}

				function r(e, t, r, a) {
					var i = e + 2;
					for (var n = 0; n < t; n++) {
						var s = a[i + 4 * n];
						var o = s.length === 1 && s[0];
						if (o && o.width === 1 && o.height === 1 && (!o.data.length || o.data.length === 1 && o.data[0] === 0)) {
							r[i + 4 * n] = C.paintSolidColorImageMask;
							continue
						}
						break
					}
					return t - n
				}
				var a = [];
				t(a, [C.save, C.transform, C.paintInlineImageXObject, C.restore], function e(t) {
					var r = 10;
					var a = 200;
					var i = 1e3;
					var n = 1;
					var s = t.fnArray,
						o = t.argsArray;
					var l = t.iCurr;
					var c = l - 3;
					var h = l - 2;
					var u = l - 1;
					var f = c + 4;
					var d = s.length;
					while (f + 3 < d) {
						if (s[f] !== C.save || s[f + 1] !== C.transform || s[f + 2] !== C.paintInlineImageXObject || s[f + 3] !== C.restore) {
							break
						}
						f += 4
					}
					var g = Math.min((f - c) / 4, a);
					if (g < r) {
						return f
					}
					var v = 0;
					var p = [],
						m = 0;
					var b = n,
						y = n;
					var k;
					for (k = 0; k < g; k++) {
						var x = o[h + (k << 2)];
						var S = o[u + (k << 2)][0];
						if (b + S.width > i) {
							v = Math.max(v, b);
							y += m + 2 * n;
							b = 0;
							m = 0
						}
						p.push({
							transform: x,
							x: b,
							y: y,
							w: S.width,
							h: S.height
						});
						b += S.width + 2 * n;
						m = Math.max(m, S.height)
					}
					var A = Math.max(v, b) + n;
					var I = y + m + n;
					var B = new Uint8Array(A * I * 4);
					var R = A << 2;
					for (k = 0; k < g; k++) {
						var T = o[u + (k << 2)][0].data;
						var O = p[k].w << 2;
						var P = 0;
						var E = p[k].x + p[k].y * A << 2;
						B.set(T.subarray(0, O), E - R);
						for (var M = 0, L = p[k].h; M < L; M++) {
							B.set(T.subarray(P, P + O), E);
							P += O;
							E += R
						}
						B.set(T.subarray(P - O, P), E);
						while (E >= 0) {
							T[E - 4] = T[E];
							T[E - 3] = T[E + 1];
							T[E - 2] = T[E + 2];
							T[E - 1] = T[E + 3];
							T[E + O] = T[E + O - 4];
							T[E + O + 1] = T[E + O - 3];
							T[E + O + 2] = T[E + O - 2];
							T[E + O + 3] = T[E + O - 1];
							E -= R
						}
					}
					s.splice(c, g * 4, C.paintInlineImageXObjectGroup);
					o.splice(c, g * 4, [{
						width: A,
						height: I,
						kind: w.RGBA_32BPP,
						data: B
					}, p]);
					return c + 1
				});
				t(a, [C.save, C.transform, C.paintImageMaskXObject, C.restore], function e(t) {
					var a = 10;
					var i = 100;
					var n = 1e3;
					var s = t.fnArray,
						o = t.argsArray;
					var l = t.iCurr;
					var c = l - 3;
					var h = l - 2;
					var u = l - 1;
					var f = c + 4;
					var d = s.length;
					while (f + 3 < d) {
						if (s[f] !== C.save || s[f + 1] !== C.transform || s[f + 2] !== C.paintImageMaskXObject || s[f + 3] !== C.restore) {
							break
						}
						f += 4
					}
					var g = (f - c) / 4;
					g = r(c, g, s, o);
					if (g < a) {
						return f
					}
					var v;
					var p = false;
					var m, b;
					var y = o[u][0];
					if (o[h][1] === 0 && o[h][2] === 0) {
						p = true;
						var k = o[h][0];
						var w = o[h][3];
						m = h + 4;
						var x = u + 4;
						for (v = 1; v < g; v++, m += 4, x += 4) {
							b = o[m];
							if (o[x][0] !== y || b[0] !== k || b[1] !== 0 || b[2] !== 0 || b[3] !== w) {
								if (v < a) {
									p = false
								} else {
									g = v
								}
								break
							}
						}
					}
					if (p) {
						g = Math.min(g, n);
						var S = new Float32Array(g * 2);
						m = h;
						for (v = 0; v < g; v++, m += 4) {
							b = o[m];
							S[v << 1] = b[4];
							S[(v << 1) + 1] = b[5]
						}
						s.splice(c, g * 4, C.paintImageMaskXObjectRepeat);
						o.splice(c, g * 4, [y, k, w, S])
					} else {
						g = Math.min(g, i);
						var A = [];
						for (v = 0; v < g; v++) {
							b = o[h + (v << 2)];
							var I = o[u + (v << 2)][0];
							A.push({
								data: I.data,
								width: I.width,
								height: I.height,
								transform: b
							})
						}
						s.splice(c, g * 4, C.paintImageMaskXObjectGroup);
						o.splice(c, g * 4, [A])
					}
					return c + 1
				});
				t(a, [C.save, C.transform, C.paintImageXObject, C.restore], function (e) {
					var t = 3;
					var r = 1e3;
					var a = e.fnArray,
						i = e.argsArray;
					var n = e.iCurr;
					var s = n - 3;
					var o = n - 2;
					var l = n - 1;
					var c = n;
					if (i[o][1] !== 0 || i[o][2] !== 0) {
						return c + 1
					}
					var h = i[l][0];
					var u = i[o][0];
					var f = i[o][3];
					var d = s + 4;
					var g = a.length;
					while (d + 3 < g) {
						if (a[d] !== C.save || a[d + 1] !== C.transform || a[d + 2] !== C.paintImageXObject || a[d + 3] !== C.restore) {
							break
						}
						if (i[d + 1][0] !== u || i[d + 1][1] !== 0 || i[d + 1][2] !== 0 || i[d + 1][3] !== f) {
							break
						}
						if (i[d + 2][0] !== h) {
							break
						}
						d += 4
					}
					var v = Math.min((d - s) / 4, r);
					if (v < t) {
						return d
					}
					var p = new Float32Array(v * 2);
					var m = o;
					for (var b = 0; b < v; b++, m += 4) {
						var y = i[m];
						p[b << 1] = y[4];
						p[(b << 1) + 1] = y[5]
					}
					var k = [h, u, f, p];
					a.splice(s, v * 4, C.paintImageXObjectRepeat);
					i.splice(s, v * 4, k);
					return s + 1
				});
				t(a, [C.beginText, C.setFont, C.setTextMatrix, C.showText, C.endText], function (e) {
					var t = 3;
					var r = 1e3;
					var a = e.fnArray,
						i = e.argsArray;
					var n = e.iCurr;
					var s = n - 4;
					var o = n - 3;
					var l = n - 2;
					var c = n - 1;
					var h = n;
					var u = i[o][0];
					var f = i[o][1];
					var d = s + 5;
					var g = a.length;
					while (d + 4 < g) {
						if (a[d] !== C.beginText || a[d + 1] !== C.setFont || a[d + 2] !== C.setTextMatrix || a[d + 3] !== C.showText || a[d + 4] !== C.endText) {
							break
						}
						if (i[d + 1][0] !== u || i[d + 1][1] !== f) {
							break
						}
						d += 5
					}
					var v = Math.min((d - s) / 5, r);
					if (v < t) {
						return d
					}
					var p = s;
					if (s >= 4 && a[s - 4] === a[o] && a[s - 3] === a[l] && a[s - 2] === a[c] && a[s - 1] === a[h] && i[s - 4][0] === u && i[s - 4][1] === f) {
						v++;
						p -= 5
					}
					var m = p + 4;
					for (var b = 1; b < v; b++) {
						a.splice(m, 3);
						i.splice(m, 3);
						m += 2
					}
					return m + 1
				});

				function i() {}
				i.prototype = {
					optimize: function e(t) {
						var r = t.fnArray,
							i = t.argsArray;
						var n = {
							iCurr: 0,
							fnArray: r,
							argsArray: i
						};
						var s;
						var o = 0,
							l = r.length;
						while (o < l) {
							s = (s || a)[r[o]];
							if (typeof s === "function") {
								n.iCurr = o;
								o = s(n);
								s = undefined;
								l = n.fnArray.length
							} else {
								o++
							}
						}
					}
				};
				return i
			}();
			e.OperatorList = Ae;
			e.PartialEvaluator = xe
		});
		(function (e, t) {
			t(e.pdfjsCoreAnnotation = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreStream, e.pdfjsCoreColorSpace, e.pdfjsCoreObj, e.pdfjsCoreEvaluator)
		})(this, function (e, t, r, a, i, n, s) {
			var o = t.AnnotationBorderStyleType;
			var l = t.AnnotationFieldFlag;
			var c = t.AnnotationFlag;
			var h = t.AnnotationType;
			var u = t.OPS;
			var f = t.Util;
			var d = t.isString;
			var g = t.isArray;
			var v = t.isInt;
			var p = t.stringToBytes;
			var m = t.stringToPDFString;
			var b = t.warn;
			var y = r.Dict;
			var k = r.isDict;
			var w = r.isName;
			var C = r.isRef;
			var x = a.Stream;
			var S = i.ColorSpace;
			var A = n.Catalog;
			var I = n.ObjectLoader;
			var B = n.FileSpec;
			var R = s.OperatorList;

			function T() {}
			T.prototype = {
				create: function e(t, r, a, i) {
					var n = t.fetchIfRef(r);
					if (!k(n)) {
						return
					}
					var s = C(r) ? r.toString() : "annot_" + i.createObjId();
					var o = n.get("Subtype");
					o = w(o) ? o.name : null;
					var l = {
						xref: t,
						dict: n,
						ref: C(r) ? r : null,
						subtype: o,
						id: s,
						pdfManager: a
					};
					switch (o) {
						case "Link":
							return new U(l);
						case "Text":
							return new F(l);
						case "Widget":
							var c = f.getInheritableProperty(n, "FT");
							c = w(c) ? c.name : null;
							switch (c) {
								case "Tx":
									return new M(l);
								case "Btn":
									return new L(l);
								case "Ch":
									return new D(l)
							}
							b('Unimplemented widget field type "' + c + '", ' + "falling back to base field type.");
							return new E(l);
						case "Popup":
							return new j(l);
						case "Highlight":
							return new q(l);
						case "Underline":
							return new N(l);
						case "Squiggly":
							return new _(l);
						case "StrikeOut":
							return new z(l);
						case "FileAttachment":
							return new H(l);
						default:
							if (!o) {
								b("Annotation is missing the required /Subtype.")
							} else {
								b('Unimplemented annotation type "' + o + '", ' + "falling back to base annotation.")
							}
							return new O(l)
					}
				}
			};
			var O = function e() {
				function t(e, t, r) {
					var a = f.getAxialAlignedBoundingBox(t, r);
					var i = a[0];
					var n = a[1];
					var s = a[2];
					var o = a[3];
					if (i === s || n === o) {
						return [1, 0, 0, 1, e[0], e[1]]
					}
					var l = (e[2] - e[0]) / (s - i);
					var c = (e[3] - e[1]) / (o - n);
					return [l, 0, 0, c, e[0] - i * l, e[1] - n * c]
				}

				function r(e) {
					var t = e.get("AP");
					if (!k(t)) {
						return
					}
					var r;
					var a = t.get("N");
					if (k(a)) {
						var i = e.get("AS");
						if (i && a.has(i.name)) {
							r = a.get(i.name)
						}
					} else {
						r = a
					}
					return r
				}

				function a(e) {
					var t = e.dict;
					this.setFlags(t.get("F"));
					this.setRectangle(t.getArray("Rect"));
					this.setColor(t.getArray("C"));
					this.setBorderStyle(t);
					this.appearance = r(t);
					this.data = {};
					this.data.id = e.id;
					this.data.subtype = e.subtype;
					this.data.annotationFlags = this.flags;
					this.data.rect = this.rectangle;
					this.data.color = this.color;
					this.data.borderStyle = this.borderStyle;
					this.data.hasAppearance = !!this.appearance
				}
				a.prototype = {
					_hasFlag: function e(t, r) {
						return !!(t & r)
					},
					_isViewable: function e(t) {
						return !this._hasFlag(t, c.INVISIBLE) && !this._hasFlag(t, c.HIDDEN) && !this._hasFlag(t, c.NOVIEW)
					},
					_isPrintable: function e(t) {
						return this._hasFlag(t, c.PRINT) && !this._hasFlag(t, c.INVISIBLE) && !this._hasFlag(t, c.HIDDEN)
					},
					get viewable() {
						if (this.flags === 0) {
							return true
						}
						return this._isViewable(this.flags)
					},
					get printable() {
						if (this.flags === 0) {
							return false
						}
						return this._isPrintable(this.flags)
					},
					setFlags: function e(t) {
						this.flags = v(t) && t > 0 ? t : 0
					},
					hasFlag: function e(t) {
						return this._hasFlag(this.flags, t)
					},
					setRectangle: function e(t) {
						if (g(t) && t.length === 4) {
							this.rectangle = f.normalizeRect(t)
						} else {
							this.rectangle = [0, 0, 0, 0]
						}
					},
					setColor: function e(t) {
						var r = new Uint8Array(3);
						if (!g(t)) {
							this.color = r;
							return
						}
						switch (t.length) {
							case 0:
								this.color = null;
								break;
							case 1:
								S.singletons.gray.getRgbItem(t, 0, r, 0);
								this.color = r;
								break;
							case 3:
								S.singletons.rgb.getRgbItem(t, 0, r, 0);
								this.color = r;
								break;
							case 4:
								S.singletons.cmyk.getRgbItem(t, 0, r, 0);
								this.color = r;
								break;
							default:
								this.color = r;
								break
						}
					},
					setBorderStyle: function e(t) {
						this.borderStyle = new P;
						if (!k(t)) {
							return
						}
						if (t.has("BS")) {
							var r = t.get("BS");
							var a = r.get("Type");
							if (!a || w(a, "Border")) {
								this.borderStyle.setWidth(r.get("W"));
								this.borderStyle.setStyle(r.get("S"));
								this.borderStyle.setDashArray(r.getArray("D"))
							}
						} else if (t.has("Border")) {
							var i = t.getArray("Border");
							if (g(i) && i.length >= 3) {
								this.borderStyle.setHorizontalCornerRadius(i[0]);
								this.borderStyle.setVerticalCornerRadius(i[1]);
								this.borderStyle.setWidth(i[2]);
								if (i.length === 4) {
									this.borderStyle.setDashArray(i[3])
								}
							}
						} else {
							this.borderStyle.setWidth(0)
						}
					},
					_preparePopup: function e(t) {
						if (!t.has("C")) {
							this.data.color = null
						}
						this.data.hasPopup = t.has("Popup");
						this.data.title = m(t.get("T") || "");
						this.data.contents = m(t.get("Contents") || "")
					},
					loadResources: function e(t) {
						return new Promise(function (e, r) {
							this.appearance.dict.getAsync("Resources").then(function (a) {
								if (!a) {
									e();
									return
								}
								var i = new I(a.map, t, a.xref);
								i.load().then(function () {
									e(a)
								}, r)
							}, r)
						}.bind(this))
					},
					getOperatorList: function e(r, a, i) {
						if (!this.appearance) {
							return Promise.resolve(new R)
						}
						var n = this.data;
						var s = this.appearance.dict;
						var o = this.loadResources(["ExtGState", "ColorSpace", "Pattern", "Shading", "XObject", "Font"]);
						var l = s.getArray("BBox") || [0, 0, 1, 1];
						var c = s.getArray("Matrix") || [1, 0, 0, 1, 0, 0];
						var h = t(n.rect, l, c);
						var f = this;
						return o.then(function (e) {
							var t = new R;
							t.addOp(u.beginAnnotation, [n.rect, h, c]);
							return r.getOperatorList(f.appearance, a, e, t).then(function () {
								t.addOp(u.endAnnotation, []);
								f.appearance.reset();
								return t
							})
						})
					}
				};
				a.appendToOperatorList = function e(t, r, a, i, n, s) {
					var o = [];
					for (var l = 0, c = t.length; l < c; ++l) {
						if (n === "display" && t[l].viewable || n === "print" && t[l].printable) {
							o.push(t[l].getOperatorList(a, i, s))
						}
					}
					return Promise.all(o).then(function (e) {
						r.addOp(u.beginAnnotations, []);
						for (var t = 0, a = e.length; t < a; ++t) {
							r.addOpList(e[t])
						}
						r.addOp(u.endAnnotations, [])
					})
				};
				return a
			}();
			var P = function e() {
				function t() {
					this.width = 1;
					this.style = o.SOLID;
					this.dashArray = [3];
					this.horizontalCornerRadius = 0;
					this.verticalCornerRadius = 0
				}
				t.prototype = {
					setWidth: function e(t) {
						if (t === (t | 0)) {
							this.width = t
						}
					},
					setStyle: function e(t) {
						if (!t) {
							return
						}
						switch (t.name) {
							case "S":
								this.style = o.SOLID;
								break;
							case "D":
								this.style = o.DASHED;
								break;
							case "B":
								this.style = o.BEVELED;
								break;
							case "I":
								this.style = o.INSET;
								break;
							case "U":
								this.style = o.UNDERLINE;
								break;
							default:
								break
						}
					},
					setDashArray: function e(t) {
						if (g(t) && t.length > 0) {
							var r = true;
							var a = true;
							for (var i = 0, n = t.length; i < n; i++) {
								var s = t[i];
								var o = +s >= 0;
								if (!o) {
									r = false;
									break
								} else if (s > 0) {
									a = false
								}
							}
							if (r && !a) {
								this.dashArray = t
							} else {
								this.width = 0
							}
						} else if (t) {
							this.width = 0
						}
					},
					setHorizontalCornerRadius: function e(t) {
						if (t === (t | 0)) {
							this.horizontalCornerRadius = t
						}
					},
					setVerticalCornerRadius: function e(t) {
						if (t === (t | 0)) {
							this.verticalCornerRadius = t
						}
					}
				};
				return t
			}();
			var E = function e() {
				function t(e) {
					O.call(this, e);
					var t = e.dict;
					var r = this.data;
					r.annotationType = h.WIDGET;
					r.fieldName = this._constructFieldName(t);
					r.fieldValue = f.getInheritableProperty(t, "V", true);
					r.alternativeText = m(t.get("TU") || "");
					r.defaultAppearance = f.getInheritableProperty(t, "DA") || "";
					var a = f.getInheritableProperty(t, "FT");
					r.fieldType = w(a) ? a.name : null;
					this.fieldResources = f.getInheritableProperty(t, "DR") || y.empty;
					r.fieldFlags = f.getInheritableProperty(t, "Ff");
					if (!v(r.fieldFlags) || r.fieldFlags < 0) {
						r.fieldFlags = 0
					}
					r.readOnly = this.hasFieldFlag(l.READONLY);
					if (r.fieldType === "Sig") {
						this.setFlags(c.HIDDEN)
					}
				}
				f.inherit(t, O, {
					_constructFieldName: function e(t) {
						if (!t.has("T") && !t.has("Parent")) {
							b("Unknown field name, falling back to empty field name.");
							return ""
						}
						if (!t.has("Parent")) {
							return m(t.get("T"))
						}
						var r = [];
						if (t.has("T")) {
							r.unshift(m(t.get("T")))
						}
						var a = t;
						while (a.has("Parent")) {
							a = a.get("Parent");
							if (a.has("T")) {
								r.unshift(m(a.get("T")))
							}
						}
						return r.join(".")
					},
					hasFieldFlag: function e(t) {
						return !!(this.data.fieldFlags & t)
					}
				});
				return t
			}();
			var M = function e() {
				function t(e) {
					E.call(this, e);
					this.data.fieldValue = m(this.data.fieldValue || "");
					var t = f.getInheritableProperty(e.dict, "Q");
					if (!v(t) || t < 0 || t > 2) {
						t = null
					}
					this.data.textAlignment = t;
					var r = f.getInheritableProperty(e.dict, "MaxLen");
					if (!v(r) || r < 0) {
						r = null
					}
					this.data.maxLen = r;
					this.data.multiLine = this.hasFieldFlag(l.MULTILINE);
					this.data.comb = this.hasFieldFlag(l.COMB) && !this.hasFieldFlag(l.MULTILINE) && !this.hasFieldFlag(l.PASSWORD) && !this.hasFieldFlag(l.FILESELECT) && this.data.maxLen !== null
				}
				f.inherit(t, E, {
					getOperatorList: function e(t, r, a) {
						var i = new R;
						if (a) {
							return Promise.resolve(i)
						}
						if (this.appearance) {
							return O.prototype.getOperatorList.call(this, t, r, a)
						}
						if (!this.data.defaultAppearance) {
							return Promise.resolve(i)
						}
						var n = new x(p(this.data.defaultAppearance));
						return t.getOperatorList(n, r, this.fieldResources, i).then(function () {
							return i
						})
					}
				});
				return t
			}();
			var L = function e() {
				function t(e) {
					E.call(this, e);
					this.data.checkBox = !this.hasFieldFlag(l.RADIO) && !this.hasFieldFlag(l.PUSHBUTTON);
					if (this.data.checkBox) {
						if (!w(this.data.fieldValue)) {
							return
						}
						this.data.fieldValue = this.data.fieldValue.name
					}
					this.data.radioButton = this.hasFieldFlag(l.RADIO) && !this.hasFieldFlag(l.PUSHBUTTON);
					if (this.data.radioButton) {
						this.data.fieldValue = this.data.buttonValue = null;
						var t = e.dict.get("Parent");
						if (!k(t) || !t.has("V")) {
							return
						}
						var r = t.get("V");
						if (!w(r)) {
							return
						}
						this.data.fieldValue = r.name;
						var a = e.dict.get("AP");
						if (!k(a)) {
							return
						}
						var i = a.get("N");
						if (!k(i)) {
							return
						}
						var n = i.getKeys();
						for (var s = 0, o = n.length; s < o; s++) {
							if (n[s] !== "Off") {
								this.data.buttonValue = n[s];
								break
							}
						}
					}
				}
				f.inherit(t, E, {
					getOperatorList: function e(t, r, a) {
						var i = new R;
						if (a) {
							return Promise.resolve(i)
						}
						if (this.appearance) {
							return O.prototype.getOperatorList.call(this, t, r, a)
						}
						return Promise.resolve(i)
					}
				});
				return t
			}();
			var D = function e() {
				function t(e) {
					E.call(this, e);
					this.data.options = [];
					var t = e.dict.get("Opt");
					if (g(t)) {
						var r = e.xref;
						for (var a = 0, i = t.length; a < i; a++) {
							var n = r.fetchIfRef(t[a]);
							var s = g(n);
							this.data.options[a] = {
								exportValue: s ? r.fetchIfRef(n[0]) : n,
								displayValue: s ? r.fetchIfRef(n[1]) : n
							}
						}
					}
					if (!g(this.data.fieldValue)) {
						this.data.fieldValue = [this.data.fieldValue]
					}
					this.data.combo = this.hasFieldFlag(l.COMBO);
					this.data.multiSelect = this.hasFieldFlag(l.MULTISELECT)
				}
				f.inherit(t, E, {
					getOperatorList: function e(t, r, a) {
						var i = new R;
						if (a) {
							return Promise.resolve(i)
						}
						return O.prototype.getOperatorList.call(this, t, r, a)
					}
				});
				return t
			}();
			var F = function e() {
				var t = 22;

				function r(e) {
					O.call(this, e);
					this.data.annotationType = h.TEXT;
					if (this.data.hasAppearance) {
						this.data.name = "NoIcon"
					} else {
						this.data.rect[1] = this.data.rect[3] - t;
						this.data.rect[2] = this.data.rect[0] + t;
						this.data.name = e.dict.has("Name") ? e.dict.get("Name").name : "Note"
					}
					this._preparePopup(e.dict)
				}
				f.inherit(r, O, {});
				return r
			}();
			var U = function e() {
				function t(e) {
					O.call(this, e);
					var t = this.data;
					t.annotationType = h.LINK;
					A.parseDestDictionary({
						destDict: e.dict,
						resultObj: t,
						docBaseUrl: e.pdfManager.docBaseUrl
					})
				}
				f.inherit(t, O, {});
				return t
			}();
			var j = function e() {
				function t(e) {
					O.call(this, e);
					this.data.annotationType = h.POPUP;
					var t = e.dict;
					var r = t.get("Parent");
					if (!r) {
						b("Popup annotation has a missing or invalid parent annotation.");
						return
					}
					this.data.parentId = t.getRaw("Parent").toString();
					this.data.title = m(r.get("T") || "");
					this.data.contents = m(r.get("Contents") || "");
					if (!r.has("C")) {
						this.data.color = null
					} else {
						this.setColor(r.getArray("C"));
						this.data.color = this.color
					}
					if (!this.viewable) {
						var a = r.get("F");
						if (this._isViewable(a)) {
							this.setFlags(a)
						}
					}
				}
				f.inherit(t, O, {});
				return t
			}();
			var q = function e() {
				function t(e) {
					O.call(this, e);
					this.data.annotationType = h.HIGHLIGHT;
					this._preparePopup(e.dict);
					this.data.borderStyle.setWidth(0)
				}
				f.inherit(t, O, {});
				return t
			}();
			var N = function e() {
				function t(e) {
					O.call(this, e);
					this.data.annotationType = h.UNDERLINE;
					this._preparePopup(e.dict);
					this.data.borderStyle.setWidth(0)
				}
				f.inherit(t, O, {});
				return t
			}();
			var _ = function e() {
				function t(e) {
					O.call(this, e);
					this.data.annotationType = h.SQUIGGLY;
					this._preparePopup(e.dict);
					this.data.borderStyle.setWidth(0)
				}
				f.inherit(t, O, {});
				return t
			}();
			var z = function e() {
				function t(e) {
					O.call(this, e);
					this.data.annotationType = h.STRIKEOUT;
					this._preparePopup(e.dict);
					this.data.borderStyle.setWidth(0)
				}
				f.inherit(t, O, {});
				return t
			}();
			var H = function e() {
				function t(e) {
					O.call(this, e);
					var t = new B(e.dict.get("FS"), e.xref);
					this.data.annotationType = h.FILEATTACHMENT;
					this.data.file = t.serializable;
					this._preparePopup(e.dict)
				}
				f.inherit(t, O, {});
				return t
			}();
			e.Annotation = O;
			e.AnnotationBorderStyle = P;
			e.AnnotationFactory = T
		});
		(function (e, t) {
			t(e.pdfjsCoreDocument = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCoreStream, e.pdfjsCoreObj, e.pdfjsCoreParser, e.pdfjsCoreCrypto, e.pdfjsCoreEvaluator, e.pdfjsCoreAnnotation)
		})(this, function (e, t, r, a, i, n, s, o, l) {
			var c = t.MissingDataException;
			var h = t.Util;
			var u = t.assert;
			var f = t.error;
			var d = t.info;
			var g = t.isArray;
			var v = t.isArrayBuffer;
			var p = t.isNum;
			var m = t.isString;
			var b = t.shadow;
			var y = t.stringToBytes;
			var k = t.stringToPDFString;
			var w = t.warn;
			var C = t.isSpace;
			var x = r.Dict;
			var S = r.isDict;
			var A = r.isName;
			var I = r.isStream;
			var B = a.NullStream;
			var R = a.Stream;
			var T = a.StreamsSequenceStream;
			var O = i.Catalog;
			var P = i.ObjectLoader;
			var E = i.XRef;
			var M = n.Linearization;
			var L = s.calculateMD5;
			var D = o.OperatorList;
			var F = o.PartialEvaluator;
			var U = l.Annotation;
			var j = l.AnnotationFactory;
			var q = function e() {
				var t = 1;
				var r = [0, 0, 612, 792];

				function a(e, t, r, a, i, n) {
					this.pdfManager = e;
					this.pageIndex = r;
					this.pageDict = a;
					this.xref = t;
					this.ref = i;
					this.fontCache = n;
					this.evaluatorOptions = e.evaluatorOptions;
					this.resourcesPromise = null;
					var s = "p" + this.pageIndex + "_";
					var o = {
						obj: 0
					};
					this.idFactory = {
						createObjId: function () {
							return s + ++o.obj
						}
					}
				}
				a.prototype = {
					getPageProp: function e(t) {
						return this.pageDict.get(t)
					},
					getInheritedPageProp: function e(t, r) {
						var a = this.pageDict,
							i = null,
							n = 0;
						var s = 100;
						r = r || false;
						while (a) {
							var o = r ? a.getArray(t) : a.get(t);
							if (o) {
								if (!i) {
									i = []
								}
								i.push(o)
							}
							if (++n > s) {
								w("Page_getInheritedPageProp: maximum loop count exceeded.");
								break
							}
							a = a.get("Parent")
						}
						if (!i) {
							return x.empty
						}
						if (i.length === 1 || !S(i[0]) || n > s) {
							return i[0]
						}
						return x.merge(this.xref, i)
					},
					get content() {
						return this.getPageProp("Contents")
					},
					get resources() {
						return b(this, "resources", this.getInheritedPageProp("Resources"))
					},
					get mediaBox() {
						var e = this.getInheritedPageProp("MediaBox", true);
						if (!g(e) || e.length !== 4) {
							return b(this, "mediaBox", r)
						}
						return b(this, "mediaBox", e)
					},
					get cropBox() {
						var e = this.getInheritedPageProp("CropBox", true);
						if (!g(e) || e.length !== 4) {
							return b(this, "cropBox", this.mediaBox)
						}
						return b(this, "cropBox", e)
					},
					get userUnit() {
						var e = this.getPageProp("UserUnit");
						if (!p(e) || e <= 0) {
							e = t
						}
						return b(this, "userUnit", e)
					},
					get view() {
						var e = this.mediaBox,
							t = this.cropBox;
						if (e === t) {
							return b(this, "view", e)
						}
						var r = h.intersect(t, e);
						return b(this, "view", r || e)
					},
					get rotate() {
						var e = this.getInheritedPageProp("Rotate") || 0;
						if (e % 90 !== 0) {
							e = 0
						} else if (e >= 360) {
							e = e % 360
						} else if (e < 0) {
							e = (e % 360 + 360) % 360
						}
						return b(this, "rotate", e)
					},
					getContentStream: function e() {
						var t = this.content;
						var r;
						if (g(t)) {
							var a = this.xref;
							var i, n = t.length;
							var s = [];
							for (i = 0; i < n; ++i) {
								s.push(a.fetchIfRef(t[i]))
							}
							r = new T(s)
						} else if (I(t)) {
							r = t
						} else {
							r = new B
						}
						return r
					},
					loadResources: function e(t) {
						if (!this.resourcesPromise) {
							this.resourcesPromise = this.pdfManager.ensure(this, "resources")
						}
						return this.resourcesPromise.then(function e() {
							var r = new P(this.resources.map, t, this.xref);
							return r.load()
						}.bind(this))
					},
					getOperatorList: function e(t, r, a, i) {
						var n = this;
						var s = this.pdfManager;
						var o = s.ensure(this, "getContentStream", []);
						var l = this.loadResources(["ExtGState", "ColorSpace", "Pattern", "Shading", "XObject", "Font"]);
						var c = new F(s, this.xref, t, this.pageIndex, this.idFactory, this.fontCache, this.evaluatorOptions);
						var h = Promise.all([o, l]);
						var u = h.then(function (e) {
							var i = e[0];
							var s = new D(a, t, n.pageIndex);
							t.send("StartRenderPage", {
								transparency: c.hasBlendModes(n.resources),
								pageIndex: n.pageIndex,
								intent: a
							});
							return c.getOperatorList(i, r, n.resources, s).then(function () {
								return s
							})
						});
						var f = s.ensure(this, "annotations");
						return Promise.all([u, f]).then(function (e) {
							var t = e[0];
							var n = e[1];
							if (n.length === 0) {
								t.flush(true);
								return t
							}
							var s = U.appendToOperatorList(n, t, c, r, a, i);
							return s.then(function () {
								t.flush(true);
								return t
							})
						})
					},
					extractTextContent: function e(t, r, a) {
						var i = {
							on: function e() {},
							send: function e() {}
						};
						var n = this;
						var s = this.pdfManager;
						var o = s.ensure(this, "getContentStream", []);
						var l = this.loadResources(["ExtGState", "XObject", "Font"]);
						var c = Promise.all([o, l]);
						return c.then(function (e) {
							var o = e[0];
							var l = new F(s, n.xref, i, n.pageIndex, n.idFactory, n.fontCache, n.evaluatorOptions);
							return l.getTextContent(o, t, n.resources, null, r, a)
						})
					},
					getAnnotationsData: function e(t) {
						var r = this.annotations;
						var a = [];
						for (var i = 0, n = r.length; i < n; ++i) {
							if (t) {
								if (!(t === "display" && r[i].viewable) && !(t === "print" && r[i].printable)) {
									continue
								}
							}
							a.push(r[i].data)
						}
						return a
					},
					get annotations() {
						var e = [];
						var t = this.getInheritedPageProp("Annots") || [];
						var r = new j;
						for (var a = 0, i = t.length; a < i; ++a) {
							var n = t[a];
							var s = r.create(this.xref, n, this.pdfManager, this.idFactory);
							if (s) {
								e.push(s)
							}
						}
						return b(this, "annotations", e)
					}
				};
				return a
			}();
			var N = function e() {
				var t = 1024;
				var r = "\0\0\0\0\0\0\0" + "\0\0\0\0\0\0\0\0\0";

				function a(e, t) {
					var r;
					if (I(t)) {
						r = t
					} else if (v(t)) {
						r = new R(t)
					} else {
						f("PDFDocument: Unknown argument type")
					}
					u(r.length > 0, "stream must have data");
					this.pdfManager = e;
					this.stream = r;
					this.xref = new E(r, e)
				}

				function i(e, t, r, a) {
					var i = e.pos;
					var n = e.end;
					var s = [];
					if (i + r > n) {
						r = n - i
					}
					for (var o = 0; o < r; ++o) {
						s.push(String.fromCharCode(e.getByte()))
					}
					var l = s.join("");
					e.pos = i;
					var c = a ? l.lastIndexOf(t) : l.indexOf(t);
					if (c === -1) {
						return false
					}
					e.pos += c;
					return true
				}
				var n = {
					get entries() {
						return b(this, "entries", {
							Title: m,
							Author: m,
							Subject: m,
							Keywords: m,
							Creator: m,
							Producer: m,
							CreationDate: m,
							ModDate: m,
							Trapped: A
						})
					}
				};
				a.prototype = {
					parse: function e(t) {
						this.setup(t);
						var r = this.catalog.catDict.get("Version");
						if (A(r)) {
							this.pdfFormatVersion = r.name
						}
						try {
							this.acroForm = this.catalog.catDict.get("AcroForm");
							if (this.acroForm) {
								this.xfa = this.acroForm.get("XFA");
								var a = this.acroForm.get("Fields");
								if ((!a || !g(a) || a.length === 0) && !this.xfa) {
									this.acroForm = null
								}
							}
						} catch (e) {
							d("Something wrong with AcroForm entry");
							this.acroForm = null
						}
					},
					get linearization() {
						var e = null;
						if (this.stream.length) {
							try {
								e = M.create(this.stream)
							} catch (e) {
								if (e instanceof c) {
									throw e
								}
								d(e)
							}
						}
						return b(this, "linearization", e)
					},
					get startXRef() {
						var e = this.stream;
						var t = 0;
						var r = this.linearization;
						if (r) {
							e.reset();
							if (i(e, "endobj", 1024)) {
								t = e.pos + 6
							}
						} else {
							var a = 1024;
							var n = false,
								s = e.end;
							while (!n && s > 0) {
								s -= a - "startxref".length;
								if (s < 0) {
									s = 0
								}
								e.pos = s;
								n = i(e, "startxref", a, true)
							}
							if (n) {
								e.skip(9);
								var o;
								do {
									o = e.getByte()
								} while (C(o));
								var l = "";
								while (o >= 32 && o <= 57) {
									l += String.fromCharCode(o);
									o = e.getByte()
								}
								t = parseInt(l, 10);
								if (isNaN(t)) {
									t = 0
								}
							}
						}
						return b(this, "startXRef", t)
					},
					get mainXRefEntriesOffset() {
						var e = 0;
						var t = this.linearization;
						if (t) {
							e = t.mainXRefEntriesOffset
						}
						return b(this, "mainXRefEntriesOffset", e)
					},
					checkHeader: function e() {
						var t = this.stream;
						t.reset();
						if (i(t, "%PDF-", 1024)) {
							t.moveStart();
							var r = 12;
							var a = "",
								n;
							while ((n = t.getByte()) > 32) {
								if (a.length >= r) {
									break
								}
								a += String.fromCharCode(n)
							}
							if (!this.pdfFormatVersion) {
								this.pdfFormatVersion = a.substring(5)
							}
							return
						}
					},
					parseStartXRef: function e() {
						var t = this.startXRef;
						this.xref.setStartXRef(t)
					},
					setup: function e(t) {
						this.xref.parse(t);
						var r = this;
						var a = {
							createPage: function (e, t, a, i) {
								return new q(r.pdfManager, r.xref, e, t, a, i)
							}
						};
						this.catalog = new O(this.pdfManager, this.xref, a)
					},
					get numPages() {
						var e = this.linearization;
						var t = e ? e.numPages : this.catalog.numPages;
						return b(this, "numPages", t)
					},
					get documentInfo() {
						var e = {
							PDFFormatVersion: this.pdfFormatVersion,
							IsAcroFormPresent: !!this.acroForm,
							IsXFAPresent: !!this.xfa
						};
						var t;
						try {
							t = this.xref.trailer.get("Info")
						} catch (e) {
							d("The document information dictionary is invalid.")
						}
						if (t) {
							var r = n.entries;
							for (var a in r) {
								if (t.has(a)) {
									var i = t.get(a);
									if (r[a](i)) {
										e[a] = typeof i !== "string" ? i : k(i)
									} else {
										d('Bad value in document info for "' + a + '"')
									}
								}
							}
						}
						return b(this, "documentInfo", e)
					},
					get fingerprint() {
						var e = this.xref,
							a, i = "";
						var n = e.trailer.get("ID");
						if (n && g(n) && n[0] && m(n[0]) && n[0] !== r) {
							a = y(n[0])
						} else {
							if (this.stream.ensureRange) {
								this.stream.ensureRange(0, Math.min(t, this.stream.end))
							}
							a = L(this.stream.bytes.subarray(0, t), 0, t)
						}
						for (var s = 0, o = a.length; s < o; s++) {
							var l = a[s].toString(16);
							i += l.length === 1 ? "0" + l : l
						}
						return b(this, "fingerprint", i)
					},
					getPage: function e(t) {
						return this.catalog.getPage(t)
					},
					cleanup: function e() {
						return this.catalog.cleanup()
					}
				};
				return a
			}();
			e.Page = q;
			e.PDFDocument = N
		});
		(function (e, t) {
			t(e.pdfjsCorePdfManager = {}, e.pdfjsSharedUtil, e.pdfjsCoreStream, e.pdfjsCoreChunkedStream, e.pdfjsCoreDocument)
		})(this, function (e, t, r, a, i) {
			var n = t.warn;
			var s = t.createValidAbsoluteUrl;
			var o = t.shadow;
			var l = t.NotImplementedException;
			var c = t.MissingDataException;
			var h = t.createPromiseCapability;
			var u = t.Util;
			var f = r.Stream;
			var d = a.ChunkedStreamManager;
			var g = i.PDFDocument;
			var v = function e() {
				function t() {
					throw new Error("Cannot initialize BaseManagerManager")
				}
				t.prototype = {
					get docId() {
						return this._docId
					},
					get password() {
						return this._password
					},
					get docBaseUrl() {
						var e = null;
						if (this._docBaseUrl) {
							var t = s(this._docBaseUrl);
							if (t) {
								e = t.href
							} else {
								n('Invalid absolute docBaseUrl: "' + this._docBaseUrl + '".')
							}
						}
						return o(this, "docBaseUrl", e)
					},
					onLoadedStream: function e() {
						throw new l
					},
					ensureDoc: function e(t, r) {
						return this.ensure(this.pdfDocument, t, r)
					},
					ensureXRef: function e(t, r) {
						return this.ensure(this.pdfDocument.xref, t, r)
					},
					ensureCatalog: function e(t, r) {
						return this.ensure(this.pdfDocument.catalog, t, r)
					},
					getPage: function e(t) {
						return this.pdfDocument.getPage(t)
					},
					cleanup: function e() {
						return this.pdfDocument.cleanup()
					},
					ensure: function e(t, r, a) {
						return new l
					},
					requestRange: function e(t, r) {
						return new l
					},
					requestLoadedStream: function e() {
						return new l
					},
					sendProgressiveData: function e(t) {
						return new l
					},
					updatePassword: function e(t) {
						this._password = t
					},
					terminate: function e() {
						return new l
					}
				};
				return t
			}();
			var p = function e() {
				function t(e, t, r, a, i) {
					this._docId = e;
					this._password = r;
					this._docBaseUrl = i;
					this.evaluatorOptions = a;
					var n = new f(t);
					this.pdfDocument = new g(this, n);
					this._loadedStreamCapability = h();
					this._loadedStreamCapability.resolve(n)
				}
				u.inherit(t, v, {
					ensure: function e(t, r, a) {
						return new Promise(function (e, i) {
							try {
								var n = t[r];
								var s;
								if (typeof n === "function") {
									s = n.apply(t, a)
								} else {
									s = n
								}
								e(s)
							} catch (e) {
								i(e)
							}
						})
					},
					requestRange: function e(t, r) {
						return Promise.resolve()
					},
					requestLoadedStream: function e() {},
					onLoadedStream: function e() {
						return this._loadedStreamCapability.promise
					},
					terminate: function e() {}
				});
				return t
			}();
			var m = function e() {
				function t(e, t, r, a, i) {
					this._docId = e;
					this._password = r.password;
					this._docBaseUrl = i;
					this.msgHandler = r.msgHandler;
					this.evaluatorOptions = a;
					var n = {
						msgHandler: r.msgHandler,
						url: r.url,
						length: r.length,
						disableAutoFetch: r.disableAutoFetch,
						rangeChunkSize: r.rangeChunkSize
					};
					this.streamManager = new d(t, n);
					this.pdfDocument = new g(this, this.streamManager.getStream())
				}
				u.inherit(t, v, {
					ensure: function e(t, r, a) {
						var i = this;
						return new Promise(function (e, n) {
							function s() {
								try {
									var o;
									var l = t[r];
									if (typeof l === "function") {
										o = l.apply(t, a)
									} else {
										o = l
									}
									e(o)
								} catch (e) {
									if (!(e instanceof c)) {
										n(e);
										return
									}
									i.streamManager.requestRange(e.begin, e.end).then(s, n)
								}
							}
							s()
						})
					},
					requestRange: function e(t, r) {
						return this.streamManager.requestRange(t, r)
					},
					requestLoadedStream: function e() {
						this.streamManager.requestAllChunks()
					},
					sendProgressiveData: function e(t) {
						this.streamManager.onReceiveData({
							chunk: t
						})
					},
					onLoadedStream: function e() {
						return this.streamManager.onLoadedStream()
					},
					terminate: function e() {
						this.streamManager.abort()
					}
				});
				return t
			}();
			e.LocalPdfManager = p;
			e.NetworkPdfManager = m
		});
		(function (e, t) {
			t(e.pdfjsCoreWorker = {}, e.pdfjsSharedUtil, e.pdfjsCorePrimitives, e.pdfjsCorePdfManager)
		})(this, function (e, t, r, a) {
			var i = t.UNSUPPORTED_FEATURES;
			var n = t.InvalidPDFException;
			var s = t.MessageHandler;
			var o = t.MissingPDFException;
			var l = t.UnexpectedResponseException;
			var c = t.PasswordException;
			var h = t.PasswordResponses;
			var u = t.UnknownErrorException;
			var f = t.XRefParseException;
			var d = t.arrayByteLength;
			var g = t.arraysToBytes;
			var v = t.assert;
			var p = t.createPromiseCapability;
			var m = t.error;
			var b = t.info;
			var y = t.warn;
			var k = t.setVerbosityLevel;
			var w = r.Ref;
			var C = a.LocalPdfManager;
			var x = a.NetworkPdfManager;
			var S = t.globalScope;
			var A = function e() {
				function t(e) {
					this.name = e;
					this.terminated = false;
					this._capability = p()
				}
				t.prototype = {
					get finished() {
						return this._capability.promise
					},
					finish: function () {
						this._capability.resolve()
					},
					terminate: function () {
						this.terminated = true
					},
					ensureNotTerminated: function () {
						if (this.terminated) {
							throw new Error("Worker task was terminated")
						}
					}
				};
				return t
			}();
			var I = function e() {
				function t(e, t) {
					this._queuedChunks = [];
					var r = e.initialData;
					if (r && r.length > 0) {
						this._queuedChunks.push(r)
					}
					this._msgHandler = t;
					this._isRangeSupported = !e.disableRange;
					this._isStreamingSupported = !e.disableStream;
					this._contentLength = e.length;
					this._fullRequestReader = null;
					this._rangeReaders = [];
					t.on("OnDataRange", this._onReceiveData.bind(this));
					t.on("OnDataProgress", this._onProgress.bind(this))
				}
				t.prototype = {
					_onReceiveData: function e(t) {
						if (t.begin === undefined) {
							if (this._fullRequestReader) {
								this._fullRequestReader._enqueue(t.chunk)
							} else {
								this._queuedChunks.push(t.chunk)
							}
						} else {
							var r = this._rangeReaders.some(function (e) {
								if (e._begin !== t.begin) {
									return false
								}
								e._enqueue(t.chunk);
								return true
							});
							v(r)
						}
					},
					_onProgress: function e(t) {
						if (this._rangeReaders.length > 0) {
							var r = this._rangeReaders[0];
							if (r.onProgress) {
								r.onProgress({
									loaded: t.loaded
								})
							}
						}
					},
					_removeRangeReader: function e(t) {
						var r = this._rangeReaders.indexOf(t);
						if (r >= 0) {
							this._rangeReaders.splice(r, 1)
						}
					},
					getFullReader: function e() {
						v(!this._fullRequestReader);
						var t = this._queuedChunks;
						this._queuedChunks = null;
						return new r(this, t)
					},
					getRangeReader: function e(t, r) {
						var i = new a(this, t, r);
						this._msgHandler.send("RequestDataRange", {
							begin: t,
							end: r
						});
						this._rangeReaders.push(i);
						return i
					},
					cancelAllRequests: function e(t) {
						if (this._fullRequestReader) {
							this._fullRequestReader.cancel(t)
						}
						var r = this._rangeReaders.slice(0);
						r.forEach(function (e) {
							e.cancel(t)
						})
					}
				};

				function r(e, t) {
					this._stream = e;
					this._done = false;
					this._queuedChunks = t || [];
					this._requests = [];
					this._headersReady = Promise.resolve();
					e._fullRequestReader = this;
					this.onProgress = null
				}
				r.prototype = {
					_enqueue: function e(t) {
						if (this._done) {
							return
						}
						if (this._requests.length > 0) {
							var r = this._requests.shift();
							r.resolve({
								value: t,
								done: false
							});
							return
						}
						this._queuedChunks.push(t)
					},
					get headersReady() {
						return this._headersReady
					},
					get isRangeSupported() {
						return this._stream._isRangeSupported
					},
					get isStreamingSupported() {
						return this._stream._isStreamingSupported
					},
					get contentLength() {
						return this._stream._contentLength
					},
					read: function e() {
						if (this._queuedChunks.length > 0) {
							var t = this._queuedChunks.shift();
							return Promise.resolve({
								value: t,
								done: false
							})
						}
						if (this._done) {
							return Promise.resolve({
								value: undefined,
								done: true
							})
						}
						var r = p();
						this._requests.push(r);
						return r.promise
					},
					cancel: function e(t) {
						this._done = true;
						this._requests.forEach(function (e) {
							e.resolve({
								value: undefined,
								done: true
							})
						});
						this._requests = []
					}
				};

				function a(e, t, r) {
					this._stream = e;
					this._begin = t;
					this._end = r;
					this._queuedChunk = null;
					this._requests = [];
					this._done = false;
					this.onProgress = null
				}
				a.prototype = {
					_enqueue: function e(t) {
						if (this._done) {
							return
						}
						if (this._requests.length === 0) {
							this._queuedChunk = t
						} else {
							var r = this._requests.shift();
							r.resolve({
								value: t,
								done: false
							});
							this._requests.forEach(function (e) {
								e.resolve({
									value: undefined,
									done: true
								})
							});
							this._requests = []
						}
						this._done = true;
						this._stream._removeRangeReader(this)
					},
					get isStreamingSupported() {
						return false
					},
					read: function e() {
						if (this._queuedChunk) {
							return Promise.resolve({
								value: this._queuedChunk,
								done: false
							})
						}
						if (this._done) {
							return Promise.resolve({
								value: undefined,
								done: true
							})
						}
						var t = p();
						this._requests.push(t);
						return t.promise
					},
					cancel: function e(t) {
						this._done = true;
						this._requests.forEach(function (e) {
							e.resolve({
								value: undefined,
								done: true
							})
						});
						this._requests = [];
						this._stream._removeRangeReader(this)
					}
				};
				return t
			}();
			var B;

			function R(e) {
				B = e
			}
			var T = {
				setup: function e(t, r) {
					var a = false;
					t.on("test", function e(r) {
						if (a) {
							return
						}
						a = true;
						if (!(r instanceof Uint8Array)) {
							t.send("test", "main", false);
							return
						}
						var i = r[0] === 255;
						t.postMessageTransfers = i;
						var n = new XMLHttpRequest;
						var s = "response" in n;
						try {
							var o = n.responseType
						} catch (e) {
							s = false
						}
						if (!s) {
							t.send("test", false);
							return
						}
						t.send("test", {
							supportTypedArray: true,
							supportTransfers: i
						})
					});
					t.on("configure", function e(t) {
						k(t.verbosity)
					});
					t.on("GetDocRequest", function e(t) {
						return T.createDocumentHandler(t, r)
					})
				},
				createDocumentHandler: function e(t, r) {
					var a;
					var h = false;
					var m = null;
					var k = [];
					var S = t.docId;
					var R = t.docBaseUrl;
					var T = t.docId + "_worker";
					var O = new s(T, S, r);
					O.postMessageTransfers = t.postMessageTransfers;

					function P() {
						if (h) {
							throw new Error("Worker was terminated")
						}
					}

					function E(e) {
						k.push(e)
					}

					function M(e) {
						e.finish();
						var t = k.indexOf(e);
						k.splice(t, 1)
					}

					function L(e) {
						var t = p();
						var r = function e() {
							var r = a.ensureDoc("numPages");
							var n = a.ensureDoc("fingerprint");
							var s = a.ensureXRef("encrypt");
							Promise.all([r, n, s]).then(function e(r) {
								var a = {
									numPages: r[0],
									fingerprint: r[1],
									encrypted: !!r[2]
								};
								t.resolve(a)
							}, i)
						};
						var i = function e(r) {
							t.reject(r)
						};
						a.ensureDoc("checkHeader", []).then(function () {
							a.ensureDoc("parseStartXRef", []).then(function () {
								a.ensureDoc("parse", [e]).then(r, i)
							}, i)
						}, i);
						return t.promise
					}

					function D(e, t) {
						var r = p();
						var a;
						var i = e.source;
						if (i.data) {
							try {
								a = new C(S, i.data, i.password, t, R);
								r.resolve(a)
							} catch (e) {
								r.reject(e)
							}
							return r.promise
						}
						var n;
						try {
							if (i.chunkedViewerLoading) {
								n = new I(i, O)
							} else {
								v(B, "pdfjs/core/network module is not loaded");
								n = new B(e)
							}
						} catch (e) {
							r.reject(e);
							return r.promise
						}
						var s = n.getFullReader();
						s.headersReady.then(function () {
							if (!s.isStreamingSupported || !s.isRangeSupported) {
								s.onProgress = function (e) {
									O.send("DocProgress", {
										loaded: e.loaded,
										total: e.total
									})
								}
							}
							if (!s.isRangeSupported) {
								return
							}
							var e = i.disableAutoFetch || s.isStreamingSupported;
							a = new x(S, n, {
								msgHandler: O,
								url: i.url,
								password: i.password,
								length: s.contentLength,
								disableAutoFetch: e,
								rangeChunkSize: i.rangeChunkSize
							}, t, R);
							r.resolve(a);
							m = null
						}).catch(function (e) {
							r.reject(e);
							m = null
						});
						var o = [],
							l = 0;
						var c = function () {
							var e = g(o);
							if (i.length && e.length !== i.length) {
								y("reported HTTP length is different from actual")
							}
							try {
								a = new C(S, e, i.password, t, R);
								r.resolve(a)
							} catch (e) {
								r.reject(e)
							}
							o = []
						};
						var h = new Promise(function (e, t) {
							var r = function (e) {
								try {
									P();
									if (e.done) {
										if (!a) {
											c()
										}
										m = null;
										return
									}
									var i = e.value;
									l += d(i);
									if (!s.isStreamingSupported) {
										O.send("DocProgress", {
											loaded: l,
											total: Math.max(l, s.contentLength || 0)
										})
									}
									if (a) {
										a.sendProgressiveData(i)
									} else {
										o.push(i)
									}
									s.read().then(r, t)
								} catch (e) {
									t(e)
								}
							};
							s.read().then(r, t)
						});
						h.catch(function (e) {
							r.reject(e);
							m = null
						});
						m = function () {
							n.cancelAllRequests("abort")
						};
						return r.promise
					}

					function F(e) {
						function t(e) {
							P();
							O.send("GetDoc", {
								pdfInfo: e
							})
						}

						function r(e) {
							if (e instanceof c) {
								var t = new A("PasswordException: response " + e.code);
								E(t);
								O.sendWithPromise("PasswordRequest", e).then(function (e) {
									M(t);
									a.updatePassword(e.password);
									i()
								}).catch(function (e) {
									M(t);
									O.send("PasswordException", e)
								}.bind(null, e))
							} else if (e instanceof n) {
								O.send("InvalidPDF", e)
							} else if (e instanceof o) {
								O.send("MissingPDF", e)
							} else if (e instanceof l) {
								O.send("UnexpectedResponse", e)
							} else {
								O.send("UnknownError", new u(e.message, e.toString()))
							}
						}

						function i() {
							P();
							L(false).then(t, function e(i) {
								P();
								if (!(i instanceof f)) {
									r(i);
									return
								}
								a.requestLoadedStream();
								a.onLoadedStream().then(function () {
									P();
									L(true).then(t, r)
								})
							}, r)
						}
						P();
						var s = {
							url: e.cMapUrl === undefined ? null : e.cMapUrl,
							packed: e.cMapPacked === true
						};
						var d = {
							forceDataSchema: e.disableCreateObjectURL,
							maxImageSize: e.maxImageSize === undefined ? -1 : e.maxImageSize,
							disableFontFace: e.disableFontFace,
							cMapOptions: s
						};
						D(e, d).then(function (e) {
							if (h) {
								e.terminate();
								throw new Error("Worker was terminated")
							}
							a = e;
							O.send("PDFManagerReady", null);
							a.onLoadedStream().then(function (e) {
								O.send("DataLoaded", {
									length: e.bytes.byteLength
								})
							})
						}).then(i, r)
					}
					O.on("GetPage", function e(t) {
						return a.getPage(t.pageIndex).then(function (e) {
							var t = a.ensure(e, "rotate");
							var r = a.ensure(e, "ref");
							var i = a.ensure(e, "userUnit");
							var n = a.ensure(e, "view");
							return Promise.all([t, r, i, n]).then(function (e) {
								return {
									rotate: e[0],
									ref: e[1],
									userUnit: e[2],
									view: e[3]
								}
							})
						})
					});
					O.on("GetPageIndex", function e(t) {
						var r = new w(t.ref.num, t.ref.gen);
						var i = a.pdfDocument.catalog;
						return i.getPageIndex(r)
					});
					O.on("GetDestinations", function e(t) {
						return a.ensureCatalog("destinations")
					});
					O.on("GetDestination", function e(t) {
						return a.ensureCatalog("getDestination", [t.id])
					});
					O.on("GetPageLabels", function e(t) {
						return a.ensureCatalog("pageLabels")
					});
					O.on("GetAttachments", function e(t) {
						return a.ensureCatalog("attachments")
					});
					O.on("GetJavaScript", function e(t) {
						return a.ensureCatalog("javaScript")
					});
					O.on("GetOutline", function e(t) {
						return a.ensureCatalog("documentOutline")
					});
					O.on("GetMetadata", function e(t) {
						return Promise.all([a.ensureDoc("documentInfo"), a.ensureCatalog("metadata")])
					});
					O.on("GetData", function e(t) {
						a.requestLoadedStream();
						return a.onLoadedStream().then(function (e) {
							return e.bytes
						})
					});
					O.on("GetStats", function e(t) {
						return a.pdfDocument.xref.stats
					});
					O.on("GetAnnotations", function e(t) {
						return a.getPage(t.pageIndex).then(function (e) {
							return a.ensure(e, "getAnnotationsData", [t.intent])
						})
					});
					O.on("RenderPageRequest", function e(t) {
						var r = t.pageIndex;
						a.getPage(r).then(function (e) {
							var a = new A("RenderPageRequest: page " + r);
							E(a);
							var n = r + 1;
							var s = Date.now();
							e.getOperatorList(O, a, t.intent, t.renderInteractiveForms).then(function (e) {
								M(a);
								b("page=" + n + " - getOperatorList: time=" + (Date.now() - s) + "ms, len=" + e.totalLength)
							}, function (e) {
								M(a);
								if (a.terminated) {
									return
								}
								O.send("UnsupportedFeature", {
									featureId: i.unknown
								});
								var r = "worker.js: while trying to getPage() and getOperatorList()";
								var s;
								if (typeof e === "string") {
									s = {
										message: e,
										stack: r
									}
								} else if (typeof e === "object") {
									s = {
										message: e.message || e.toString(),
										stack: e.stack || r
									}
								} else {
									s = {
										message: "Unknown exception type: " + typeof e,
										stack: r
									}
								}
								O.send("PageError", {
									pageNum: n,
									error: s,
									intent: t.intent
								})
							})
						})
					}, this);
					O.on("GetTextContent", function e(t) {
						var r = t.pageIndex;
						var i = t.normalizeWhitespace;
						var n = t.combineTextItems;
						return a.getPage(r).then(function (e) {
							var t = new A("GetTextContent: page " + r);
							E(t);
							var a = r + 1;
							var s = Date.now();
							return e.extractTextContent(t, i, n).then(function (e) {
								M(t);
								b("text indexing: page=" + a + " - time=" + (Date.now() - s) + "ms");
								return e
							}, function (e) {
								M(t);
								if (t.terminated) {
									return
								}
								throw e
							})
						})
					});
					O.on("Cleanup", function e(t) {
						return a.cleanup()
					});
					O.on("Terminate", function e(t) {
						h = true;
						if (a) {
							a.terminate();
							a = null
						}
						if (m) {
							m()
						}
						var r = [];
						k.forEach(function (e) {
							r.push(e.finished);
							e.terminate()
						});
						return Promise.all(r).then(function () {
							O.destroy();
							O = null
						})
					});
					O.on("Ready", function e(r) {
						F(t);
						t = null
					});
					return T
				}
			};

			function O() {
				if (!("console" in S)) {
					var e = {};
					var t = {
						log: function e() {
							var t = Array.prototype.slice.call(arguments);
							S.postMessage({
								targetName: "main",
								action: "console_log",
								data: t
							})
						},
						error: function e() {
							var t = Array.prototype.slice.call(arguments);
							S.postMessage({
								targetName: "main",
								action: "console_error",
								data: t
							});
							throw "pdf.js execution error"
						},
						time: function t(r) {
							e[r] = Date.now()
						},
						timeEnd: function t(r) {
							var a = e[r];
							if (!a) {
								m("Unknown timer name " + r)
							}
							this.log("Timer:", r, Date.now() - a)
						}
					};
					S.console = t
				}
				var r = new s("worker", "main", self);
				T.setup(r, self);
				r.send("ready", null)
			}
			if (typeof window === "undefined" && !(typeof module !== "undefined" && module.require)) {
				O()
			}
			e.setPDFNetworkStreamClass = R;
			e.WorkerTask = A;
			e.WorkerMessageHandler = T
		});
		(function (e, t) {
			t(e.pdfjsCoreNetwork = {}, e.pdfjsSharedUtil, e.pdfjsCoreWorker)
		})(this, function (e, t, r) {
			var a = 200;
			var i = 206;

			function n(e, t) {
				this.url = e;
				t = t || {};
				this.isHttp = /^https?:/i.test(e);
				this.httpHeaders = this.isHttp && t.httpHeaders || {};
				this.withCredentials = t.withCredentials || false;
				this.getXhr = t.getXhr || function e() {
					return new XMLHttpRequest
				};
				this.currXhrId = 0;
				this.pendingRequests = Object.create(null);
				this.loadedRequests = Object.create(null)
			}

			function s(e) {
				var t = e.response;
				if (typeof t !== "string") {
					return t
				}
				var r = t.length;
				var a = new Uint8Array(r);
				for (var i = 0; i < r; i++) {
					a[i] = t.charCodeAt(i) & 255
				}
				return a.buffer
			}
			var o = function e() {
				try {
					var t = new XMLHttpRequest;
					t.open("GET", "https://example.com");
					t.responseType = "moz-chunked-arraybuffer";
					return t.responseType === "moz-chunked-arraybuffer"
				} catch (e) {
					return false
				}
			}();
			n.prototype = {
				requestRange: function e(t, r, a) {
					var i = {
						begin: t,
						end: r
					};
					for (var n in a) {
						i[n] = a[n]
					}
					return this.request(i)
				},
				requestFull: function e(t) {
					return this.request(t)
				},
				request: function e(t) {
					var r = this.getXhr();
					var a = this.currXhrId++;
					var i = this.pendingRequests[a] = {
						xhr: r
					};
					r.open("GET", this.url);
					r.withCredentials = this.withCredentials;
					for (var n in this.httpHeaders) {
						var s = this.httpHeaders[n];
						if (typeof s === "undefined") {
							continue
						}
						r.setRequestHeader(n, s)
					}
					if (this.isHttp && "begin" in t && "end" in t) {
						var l = t.begin + "-" + (t.end - 1);
						r.setRequestHeader("Range", "bytes=" + l);
						i.expectedStatus = 206
					} else {
						i.expectedStatus = 200
					}
					var c = o && !!t.onProgressiveData;
					if (c) {
						r.responseType = "moz-chunked-arraybuffer";
						i.onProgressiveData = t.onProgressiveData;
						i.mozChunked = true
					} else {
						r.responseType = "arraybuffer"
					}
					if (t.onError) {
						r.onerror = function (e) {
							t.onError(r.status)
						}
					}
					r.onreadystatechange = this.onStateChange.bind(this, a);
					r.onprogress = this.onProgress.bind(this, a);
					i.onHeadersReceived = t.onHeadersReceived;
					i.onDone = t.onDone;
					i.onError = t.onError;
					i.onProgress = t.onProgress;
					r.send(null);
					return a
				},
				onProgress: function e(t, r) {
					var a = this.pendingRequests[t];
					if (!a) {
						return
					}
					if (a.mozChunked) {
						var i = s(a.xhr);
						a.onProgressiveData(i)
					}
					var n = a.onProgress;
					if (n) {
						n(r)
					}
				},
				onStateChange: function e(t, r) {
					var n = this.pendingRequests[t];
					if (!n) {
						return
					}
					var o = n.xhr;
					if (o.readyState >= 2 && n.onHeadersReceived) {
						n.onHeadersReceived();
						delete n.onHeadersReceived
					}
					if (o.readyState !== 4) {
						return
					}
					if (!(t in this.pendingRequests)) {
						return
					}
					delete this.pendingRequests[t];
					if (o.status === 0 && this.isHttp) {
						if (n.onError) {
							n.onError(o.status)
						}
						return
					}
					var l = o.status || a;
					var c = l === a && n.expectedStatus === i;
					if (!c && l !== n.expectedStatus) {
						if (n.onError) {
							n.onError(o.status)
						}
						return
					}
					this.loadedRequests[t] = true;
					var h = s(o);
					if (l === i) {
						var u = o.getResponseHeader("Content-Range");
						var f = /bytes (\d+)-(\d+)\/(\d+)/.exec(u);
						var d = parseInt(f[1], 10);
						n.onDone({
							begin: d,
							chunk: h
						})
					} else if (n.onProgressiveData) {
						n.onDone(null)
					} else if (h) {
						n.onDone({
							begin: 0,
							chunk: h
						})
					} else if (n.onError) {
						n.onError(o.status)
					}
				},
				hasPendingRequests: function e() {
					for (var t in this.pendingRequests) {
						return true
					}
					return false
				},
				getRequestXhr: function e(t) {
					return this.pendingRequests[t].xhr
				},
				isStreamingRequest: function e(t) {
					return !!this.pendingRequests[t].onProgressiveData
				},
				isPendingRequest: function e(t) {
					return t in this.pendingRequests
				},
				isLoadedRequest: function e(t) {
					return t in this.loadedRequests
				},
				abortAllRequests: function e() {
					for (var t in this.pendingRequests) {
						this.abortRequest(t | 0)
					}
				},
				abortRequest: function e(t) {
					var r = this.pendingRequests[t].xhr;
					delete this.pendingRequests[t];
					r.abort()
				}
			};
			var l = t.assert;
			var c = t.createPromiseCapability;
			var h = t.isInt;
			var u = t.MissingPDFException;
			var f = t.UnexpectedResponseException;

			function d(e) {
				this._options = e;
				var t = e.source;
				this._manager = new n(t.url, {
					httpHeaders: t.httpHeaders,
					withCredentials: t.withCredentials
				});
				this._rangeChunkSize = t.rangeChunkSize;
				this._fullRequestReader = null;
				this._rangeRequestReaders = []
			}
			d.prototype = {
				_onRangeRequestReaderClosed: function e(t) {
					var r = this._rangeRequestReaders.indexOf(t);
					if (r >= 0) {
						this._rangeRequestReaders.splice(r, 1)
					}
				},
				getFullReader: function e() {
					l(!this._fullRequestReader);
					this._fullRequestReader = new g(this._manager, this._options);
					return this._fullRequestReader
				},
				getRangeReader: function e(t, r) {
					var a = new v(this._manager, t, r);
					a.onClosed = this._onRangeRequestReaderClosed.bind(this);
					this._rangeRequestReaders.push(a);
					return a
				},
				cancelAllRequests: function e(t) {
					if (this._fullRequestReader) {
						this._fullRequestReader.cancel(t)
					}
					var r = this._rangeRequestReaders.slice(0);
					r.forEach(function (e) {
						e.cancel(t)
					})
				}
			};

			function g(e, t) {
				this._manager = e;
				var r = t.source;
				var a = {
					onHeadersReceived: this._onHeadersReceived.bind(this),
					onProgressiveData: r.disableStream ? null : this._onProgressiveData.bind(this),
					onDone: this._onDone.bind(this),
					onError: this._onError.bind(this),
					onProgress: this._onProgress.bind(this)
				};
				this._url = r.url;
				this._fullRequestId = e.requestFull(a);
				this._headersReceivedCapability = c();
				this._disableRange = t.disableRange || false;
				this._contentLength = r.length;
				this._rangeChunkSize = r.rangeChunkSize;
				if (!this._rangeChunkSize && !this._disableRange) {
					this._disableRange = true
				}
				this._isStreamingSupported = false;
				this._isRangeSupported = false;
				this._cachedChunks = [];
				this._requests = [];
				this._done = false;
				this._storedError = undefined;
				this.onProgress = null
			}
			g.prototype = {
				_validateRangeRequestCapabilities: function e() {
					if (this._disableRange) {
						return false
					}
					var t = this._manager;
					if (!t.isHttp) {
						return false
					}
					var r = this._fullRequestId;
					var a = t.getRequestXhr(r);
					if (a.getResponseHeader("Accept-Ranges") !== "bytes") {
						return false
					}
					var i = a.getResponseHeader("Content-Encoding") || "identity";
					if (i !== "identity") {
						return false
					}
					var n = a.getResponseHeader("Content-Length");
					n = parseInt(n, 10);
					if (!h(n)) {
						return false
					}
					this._contentLength = n;
					if (n <= 2 * this._rangeChunkSize) {
						return false
					}
					return true
				},
				_onHeadersReceived: function e() {
					if (this._validateRangeRequestCapabilities()) {
						this._isRangeSupported = true
					}
					var t = this._manager;
					var r = this._fullRequestId;
					if (t.isStreamingRequest(r)) {
						this._isStreamingSupported = true
					} else if (this._isRangeSupported) {
						t.abortRequest(r)
					}
					this._headersReceivedCapability.resolve()
				},
				_onProgressiveData: function e(t) {
					if (this._requests.length > 0) {
						var r = this._requests.shift();
						r.resolve({
							value: t,
							done: false
						})
					} else {
						this._cachedChunks.push(t)
					}
				},
				_onDone: function e(t) {
					if (t) {
						this._onProgressiveData(t.chunk)
					}
					this._done = true;
					if (this._cachedChunks.length > 0) {
						return
					}
					this._requests.forEach(function (e) {
						e.resolve({
							value: undefined,
							done: true
						})
					});
					this._requests = []
				},
				_onError: function e(t) {
					var r = this._url;
					var a;
					if (t === 404 || t === 0 && /^file:/.test(r)) {
						a = new u('Missing PDF "' + r + '".')
					} else {
						a = new f("Unexpected server response (" + t + ') while retrieving PDF "' + r + '".', t)
					}
					this._storedError = a;
					this._headersReceivedCapability.reject(a);
					this._requests.forEach(function (e) {
						e.reject(a)
					});
					this._requests = [];
					this._cachedChunks = []
				},
				_onProgress: function e(t) {
					if (this.onProgress) {
						this.onProgress({
							loaded: t.loaded,
							total: t.lengthComputable ? t.total : this._contentLength
						})
					}
				},
				get isRangeSupported() {
					return this._isRangeSupported
				},
				get isStreamingSupported() {
					return this._isStreamingSupported
				},
				get contentLength() {
					return this._contentLength
				},
				get headersReady() {
					return this._headersReceivedCapability.promise
				},
				read: function e() {
					if (this._storedError) {
						return Promise.reject(this._storedError)
					}
					if (this._cachedChunks.length > 0) {
						var t = this._cachedChunks.shift();
						return Promise.resolve(t)
					}
					if (this._done) {
						return Promise.resolve({
							value: undefined,
							done: true
						})
					}
					var r = c();
					this._requests.push(r);
					return r.promise
				},
				cancel: function e(t) {
					this._done = true;
					this._headersReceivedCapability.reject(t);
					this._requests.forEach(function (e) {
						e.resolve({
							value: undefined,
							done: true
						})
					});
					this._requests = [];
					if (this._manager.isPendingRequest(this._fullRequestId)) {
						this._manager.abortRequest(this._fullRequestId)
					}
					this._fullRequestReader = null
				}
			};

			function v(e, t, r) {
				this._manager = e;
				var a = {
					onDone: this._onDone.bind(this),
					onProgress: this._onProgress.bind(this)
				};
				this._requestId = e.requestRange(t, r, a);
				this._requests = [];
				this._queuedChunk = null;
				this._done = false;
				this.onProgress = null;
				this.onClosed = null
			}
			v.prototype = {
				_close: function e() {
					if (this.onClosed) {
						this.onClosed(this)
					}
				},
				_onDone: function e(t) {
					var r = t.chunk;
					if (this._requests.length > 0) {
						var a = this._requests.shift();
						a.resolve({
							value: r,
							done: false
						})
					} else {
						this._queuedChunk = r
					}
					this._done = true;
					this._requests.forEach(function (e) {
						e.resolve({
							value: undefined,
							done: true
						})
					});
					this._requests = [];
					this._close()
				},
				_onProgress: function e(t) {
					if (!this.isStreamingSupported && this.onProgress) {
						this.onProgress({
							loaded: t.loaded
						})
					}
				},
				get isStreamingSupported() {
					return false
				},
				read: function e() {
					if (this._queuedChunk !== null) {
						var t = this._queuedChunk;
						this._queuedChunk = null;
						return Promise.resolve({
							value: t,
							done: false
						})
					}
					if (this._done) {
						return Promise.resolve({
							value: undefined,
							done: true
						})
					}
					var r = c();
					this._requests.push(r);
					return r.promise
				},
				cancel: function e(t) {
					this._done = true;
					this._requests.forEach(function (e) {
						e.resolve({
							value: undefined,
							done: true
						})
					});
					this._requests = [];
					if (this._manager.isPendingRequest(this._requestId)) {
						this._manager.abortRequest(this._requestId)
					}
					this._close()
				}
			};
			r.setPDFNetworkStreamClass(d);
			e.PDFNetworkStream = d;
			e.NetworkManager = n
		})
	}).call(i);
	e.WorkerMessageHandler = i.pdfjsCoreWorker.WorkerMessageHandler
});
