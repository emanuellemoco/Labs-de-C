/*!
 * Lunr languages, `Swedish` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2014, Mihai Valentin
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */
!function(e,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():r()(e.lunr)}(this,function(){return function(e){if(void 0===e)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var m,c,r;e.sv=function(){this.pipeline.reset(),this.pipeline.add(e.sv.trimmer,e.sv.stopWordFilter,e.sv.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(e.sv.stemmer))},e.sv.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",e.sv.trimmer=e.trimmerSupport.generateTrimmer(e.sv.wordCharacters),e.Pipeline.registerFunction(e.sv.trimmer,"trimmer-sv"),e.sv.stemmer=(m=e.stemmerSupport.Among,c=e.stemmerSupport.SnowballProgram,r=new function(){var n,t,i=[new m("a",-1,1),new m("arna",0,1),new m("erna",0,1),new m("heterna",2,1),new m("orna",0,1),new m("ad",-1,1),new m("e",-1,1),new m("ade",6,1),new m("ande",6,1),new m("arne",6,1),new m("are",6,1),new m("aste",6,1),new m("en",-1,1),new m("anden",12,1),new m("aren",12,1),new m("heten",12,1),new m("ern",-1,1),new m("ar",-1,1),new m("er",-1,1),new m("heter",18,1),new m("or",-1,1),new m("s",-1,2),new m("as",21,1),new m("arnas",22,1),new m("ernas",22,1),new m("ornas",22,1),new m("es",21,1),new m("ades",26,1),new m("andes",26,1),new m("ens",21,1),new m("arens",29,1),new m("hetens",29,1),new m("erns",21,1),new m("at",-1,1),new m("andet",-1,1),new m("het",-1,1),new m("ast",-1,1)],r=[new m("dd",-1,-1),new m("gd",-1,-1),new m("nn",-1,-1),new m("dt",-1,-1),new m("gt",-1,-1),new m("kt",-1,-1),new m("tt",-1,-1)],s=[new m("ig",-1,1),new m("lig",0,1),new m("els",-1,1),new m("fullt",-1,3),new m("löst",-1,2)],a=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,24,0,32],o=[119,127,149],u=new c;this.setCurrent=function(e){u.setCurrent(e)},this.getCurrent=function(){return u.getCurrent()},this.stem=function(){var e=u.cursor;return function(){var e,r=u.cursor+3;if(t=u.limit,0<=r||r<=u.limit){for(n=r;;){if(e=u.cursor,u.in_grouping(a,97,246)){u.cursor=e;break}if(u.cursor=e,u.cursor>=u.limit)return;u.cursor++}for(;!u.out_grouping(a,97,246);){if(u.cursor>=u.limit)return;u.cursor++}(t=u.cursor)<n&&(t=n)}}(),u.limit_backward=e,u.cursor=u.limit,function(){var e,r=u.limit_backward;if(u.cursor>=t&&(u.limit_backward=t,u.cursor=u.limit,u.ket=u.cursor,e=u.find_among_b(i,37),u.limit_backward=r,e))switch(u.bra=u.cursor,e){case 1:u.slice_del();break;case 2:u.in_grouping_b(o,98,121)&&u.slice_del()}}(),u.cursor=u.limit,function(){var e=u.limit_backward;u.cursor>=t&&(u.limit_backward=t,u.cursor=u.limit,u.find_among_b(r,7)&&(u.cursor=u.limit,u.ket=u.cursor,u.cursor>u.limit_backward&&(u.bra=--u.cursor,u.slice_del())),u.limit_backward=e)}(),u.cursor=u.limit,function(){var e,r;if(u.cursor>=t){if(r=u.limit_backward,u.limit_backward=t,u.cursor=u.limit,u.ket=u.cursor,e=u.find_among_b(s,5))switch(u.bra=u.cursor,e){case 1:u.slice_del();break;case 2:u.slice_from("lös");break;case 3:u.slice_from("full")}u.limit_backward=r}}(),!0}},function(e){return"function"==typeof e.update?e.update(function(e){return r.setCurrent(e),r.stem(),r.getCurrent()}):(r.setCurrent(e),r.stem(),r.getCurrent())}),e.Pipeline.registerFunction(e.sv.stemmer,"stemmer-sv"),e.sv.stopWordFilter=e.generateStopWordFilter("alla allt att av blev bli blir blivit de dem den denna deras dess dessa det detta dig din dina ditt du där då efter ej eller en er era ert ett från för ha hade han hans har henne hennes hon honom hur här i icke ingen inom inte jag ju kan kunde man med mellan men mig min mina mitt mot mycket ni nu när någon något några och om oss på samma sedan sig sin sina sitta själv skulle som så sådan sådana sådant till under upp ut utan vad var vara varför varit varje vars vart vem vi vid vilka vilkas vilken vilket vår våra vårt än är åt över".split(" ")),e.Pipeline.registerFunction(e.sv.stopWordFilter,"stopWordFilter-sv")}});