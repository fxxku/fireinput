/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Initial Developer of the Original Code is Fireinput Inc.
 *
 * Portions created by the Initial Developer are Copyright (C) 2007
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *     Olly Ja <ollyja@gmail.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** 
 */
Fireinput.namespace("Fireinput.specialChar"); 

Fireinput.specialChar.monthNumber =["零","一,正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二,腊"]; 
Fireinput.specialChar.weekNumber = ["日,天", "一", "二", "三", "四", "五", "六"]; 


Fireinput.specialChar.chineseBigNumber =  ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"]; 

Fireinput.specialChar.symbolGroup  = ["\u2010","\u2013","\u2014","\u2015","\u2016","\u2018","\u2019","\u201C",
                      "\u201D","\u2025","\u2026","\u2030","\u2032","\u2033","\u2035","\u203B",
                      "\u20AC","\u2103","\u2105","\u2109","\u2116","\u2121","\u3001","\u3002",
                      "\u3003","\u3005","\u3006","\u3007","\u3008","\u3009","\u300A","\u300B",
                      "\u300C","\u300D","\u300E","\u300F","\u3010","\u3011","\u3012","\u3013",
                      "\u3014","\u3015","\u3016","\u3017","\u301D","\u301E","\u3021","\u3022",
                      "\u3023","\u3024","\u3025","\u3026","\u3027","\u3028","\u3029","\u303E",
                      "\uFE30","\uFE31","\uFE33","\uFE34","\uFE35","\uFE36","\uFE37","\uFE38",
                      "\uFE39","\uFE3A","\uFE3B","\uFE3C","\uFE3D","\uFE3E","\uFE3F","\uFE40",
                      "\uFE41","\uFE42","\uFE43","\uFE44","\uFE49","\uFE4A","\uFE4B","\uFE4C",
                      "\uFE4D","\uFE4E","\uFE4F","\uFE50","\uFE51","\uFE52","\uFE54","\uFE55",
                      "\uFE56","\uFE57","\uFE59","\uFE5A","\uFE5B","\uFE5C","\uFE5D","\uFE5E",
                      "\uFE5F","\uFE60","\uFE61","\uFE62","\uFE63","\uFE64","\uFE65","\uFE66",
                      "\uFE68","\uFE69","\uFE6A","\uFE6B","\uFF01","\uFF02","\uFF03","\uFF04",
                      "\uFF05","\uFF06","\uFF07","\uFF08","\uFF09","\uFF0A","\uFF0B","\uFF0C",
                      "\uFF0D","\uFF0E","\uFF0F","\uFF1A","\uFF1B","\uFF1C","\uFF1D","\uFF1E",
                      "\uFF1F","\uFF20","\uFF3B","\uFF3C","\uFF3D","\uFF3E","\uFF3F","\uFF40",
                      "\uFF5B","\uFF5C","\uFF5D","\uFF5E","\uFFE0","\uFFE1","\uFFE2","\uFFE3",
                      "\uFFE4","\uFFE5","\u00A7","\u00A8","\u00B0","\u00B1","\u00B7","\u00D7",
                      "\u00F7","\u3231","\u00AE","\u00BF","\u00BA","\u00BB"]; 

Fireinput.specialChar.specialNumber = ["\u2160","\u2161","\u2162","\u2163","\u2164","\u2165","\u2166","\u2167",
                       "\u2168","\u2169","\u216A","\u216B","\u2170","\u2171","\u2172","\u2173",
                       "\u2174","\u2175","\u2176","\u2177","\u2178","\u2179","\u2460","\u2461",
                       "\u2462","\u2463","\u2464","\u2465","\u2466","\u2467","\u2468","\u2469",
                       "\u2474","\u2475","\u2476","\u2477","\u2478","\u2479","\u247A","\u247B",
                       "\u247C","\u247D","\u247E","\u247F","\u2480","\u2481","\u2482","\u2483",
                       "\u2484","\u2485","\u2486","\u2487","\u2488","\u2489","\u248A","\u248B",
                       "\u248C","\u248D","\u248E","\u248F","\u2490","\u2491","\u2492","\u2493",
                       "\u2494","\u2495","\u2496","\u2497","\u2498","\u2499","\u249A","\u249B",
                       "\u3220","\u3221","\u3222","\u3223","\u3224","\u3225","\u3226","\u3227",
                       "\u3228","\u3229","\u00BC","\u00BD","\u00BE"]; 

Fireinput.specialChar.currencySymbol= ["\u5143","\u00A3","\u20AC","\uFF04","\uFFE0","\uFFE1","\uFFE5"]; 

Fireinput.specialChar.arrowSymbol =   ["\u2190","\u2191","\u2192","\u2193","\u2194","\u2195","\u2196","\u2197"]; 

Fireinput.specialChar.mathSymbol =    ["\u2200","\u2202","\u2203","\u2205","\u2206","\u2207","\u2208","\u2209",
                       "\u220B","\u220F","\u2211","\u2212","\u2215","\u2217","\u2219","\u221A",
                       "\u221D","\u221E","\u221F","\u2220","\u2223","\u2225","\u2227","\u2228",
                       "\u2229","\u222A","\u222B","\u222C","\u222E","\u2234","\u2235","\u2236",
                       "\u2237","\u223C","\u223D","\u2245","\u2248","\u224C","\u2252","\u2260",
                       "\u2261","\u2264","\u2265","\u2266","\u2267","\u226A","\u226B","\u226E",
                       "\u226F","\u2282","\u2283","\u2284","\u2286","\u2287","\u2295","\u2297",
                       "\u2299","\u22A5","\u22BF","\u22C5","\u2312","\u2320","\u2321","\u2329",
                       "\u232A","\u33D1","\u33D2","\u00B1","\u00D7","\u00F7"]; 

Fireinput.specialChar.latinSymbol =   ["\u0101","\u00E1","\u0103","\u00E0","\u00E8","\u00E9","\u00EA","\u00EC",
                       "\u00ED","\u00F2","\u00F3","\u00F9","\u00FA","\u00FC","\u0101","\u0113",
                       "\u011B","\u012B","\u0144","\u0148","\u014D","\u016B","\u01CE","\u01D0",
                       "\u01D2","\u01D4","\u01D6","\u01D8","\u01DA","\u01DC","\u01F9","\u0251",
                       "\u0261"]; 

Fireinput.specialChar.greekSymbol =   ["\u0391","\u0392","\u0393","\u0394","\u0395","\u0396","\u0397","\u0398",
                       "\u0399","\u039A","\u039B","\u039C","\u039D","\u039E","\u039F","\u03A0",
                       "\u03A1","\u03A3","\u03A4","\u03A5","\u03A6","\u03A7","\u03A8","\u03A9",
                       "\u03B1","\u03B2","\u03B3","\u03B4","\u03B5","\u03B6","\u03B7","\u03B8", 
                       "\u03B9","\u03BA","\u03BB","\u03BC","\u03BD","\u03BE","\u03BF","\u03C0", 
                       "\u03C1","\u03C2","\u03C3","\u03C4","\u03C5","\u03C6","\u03C7","\u03C8", 
                       "\u03C9","\u03D1","\u03D5"]; 

Fireinput.specialChar.tableSymbol =   ["\u2500","\u2501","\u2502","\u2503","\u2504","\u2505","\u2506","\u2507",
                       "\u2508","\u2509","\u250A","\u250B","\u250C","\u250D","\u250E","\u250F",
                       "\u2510","\u2511","\u2512","\u2513","\u2514","\u2515","\u2516","\u2517",
                       "\u2518","\u2519","\u251A","\u251B","\u251C","\u251D","\u251E","\u251F",
                       "\u2520","\u2521","\u2522","\u2523","\u2524","\u2525","\u2526","\u2527",
                       "\u2528","\u2529","\u252A","\u252B","\u252C","\u252D","\u252E","\u252F",
                       "\u2530","\u2531","\u2532","\u2533","\u2534","\u2535","\u2536","\u2537",
                       "\u2538","\u2539","\u253A","\u253B","\u253C","\u253D","\u253E","\u253F",
                       "\u2540","\u2541","\u2542","\u2543","\u2544","\u2545","\u2546","\u2547",
                       "\u2548","\u2549","\u254A","\u254B","\u2550","\u2551","\u2552","\u2553",
                       "\u2554","\u2555","\u2556","\u2557","\u2558","\u2559","\u255A","\u255B",
                       "\u255C","\u255D","\u255E","\u255F","\u2560","\u2561","\u2562","\u2563",
                       "\u2564","\u2565","\u2566","\u2567","\u2568","\u2569","\u256A","\u256B",
                       "\u256C","\u256D","\u256E","\u256F","\u2570","\u2571","\u2572","\u2573"]; 

Fireinput.specialChar.blockSymbol =   ["\u2581","\u2582","\u2583","\u2584","\u2585","\u2586","\u2587","\u2588",
                       "\u2589","\u258A","\u258B","\u258C","\u258D","\u258E","\u258F","\u2593",
                       "\u2594","\u2595"]; 

Fireinput.specialChar.geometrySymbol =    ["\u25A0","\u25A1","\u25B2","\u25B3","\u25BC","\u25BD","\u25E2","\u25E3",
                       "\u25E4","\u25E5","\u25C6","\u25C7","\u25CB","\u25CE","\u25CF","\u2605",
                       "\u2606","\u2609","\u2640","\u2641","\u2642"]; 

Fireinput.specialChar.sideSymbol =    ["\u2E81","\u2E84","\u2E88","\u2E8B","\u2E8C","\u2E97","\u2EA7","\u2EAA",
                       "\u2EAE","\u2EB3","\u2EB6","\u2EB7","\u2EBB","\u2ECA"]; 

Fireinput.specialChar.measureSymbol=  ["\u338E","\u338F","\u339C","\u339D","\u339E","\u33A1","\u33C4","\u33CE","\u33D5"]; 

Fireinput.specialChar.pinyinSymbol =  ["\u0101","\u00E1","\u01CE","\u00E0","\u0100","\u00C1","\u01CD","\u00C0","\u0113",
                       "\u00E9","\u011B","\u00E8","\u0112","\u00C9","\u011A","\u00C8","\u012B","\u00ED",
                       "\u01D0","\u00EC","\u012A","\u00CD","\u01CF","\u00CC","\u014D","\u00F3","\u01D2",
                       "\u00F2", "\u014C","\u00D3","\u01D1","\u00D2","\u016B","\u00FA","\u01D4","\u00F9",
                       "\u016A","\u00DA","\u01D3","\u00D9","\u01D6","\u01D8","\u01DA","\u01DC","\u00FC",
                       "\u01D5","\u01D7","\u01D9","\u01DB","\u00DC"]; 

Fireinput.specialChar.allSymbols = [ 
                     {group: "fireinput.measure.label", key: "danwei", symbol: Fireinput.specialChar.measureSymbol},
                     {group: "fireinput.geometry.label", key: "jihe", symbol: Fireinput.specialChar.geometrySymbol},
                     {group: "fireinput.block.label", key: "tu'an", symbol: Fireinput.specialChar.blockSymbol},
                     {group: "fireinput.table.label", key: "zhibiao", symbol: Fireinput.specialChar.tableSymbol},
                     {group: "fireinput.greek.label", key: "greek,xila", symbol: Fireinput.specialChar.greekSymbol},
                     {group: "fireinput.latin.label", key: "latin", symbol: Fireinput.specialChar.latinSymbol},
                     {group: "fireinput.math.label", key: "shuxue", symbol: Fireinput.specialChar.mathSymbol},
                     {group: "fireinput.arrow.label", key: "jiantou", symbol: Fireinput.specialChar.arrowSymbol},
                     {group: "fireinput.currency.label", key: "huobi", symbol: Fireinput.specialChar.currencySymbol},
                     {group: "fireinput.special.number.label", key: "shuzi", symbol: Fireinput.specialChar.specialNumber},
                     {group: "fireinput.normal.symbol.label", key: "fuhao", symbol: Fireinput.specialChar.symbolGroup},
                     {group: "fireinput.chinese.number.label", key: "shuzi", symbol: Fireinput.specialChar.chineseBigNumber}
                ]; 



Fireinput.specialChar = Fireinput.extend(Fireinput.specialChar, { 
    initialized: false, 

    load: function(forceLoad)
    {
       var doc = Fireinput.util.getDocument();
       if(!doc)
         return;

       if(!this.initialized || forceLoad)
       {
          var defaultLanguage = Fireinput.pref.getDefault("interfaceLanguage");
          var element = Fireinput.util.getElementById(doc, "toolbarbutton", "fireinputSpecialCharMenu"); 
          var label = Fireinput.util.getLocaleString("fireinput.special.char.label" + defaultLanguage);
          element.setAttribute("label", label);
          this.initialized = true;

          this.addGroup(); 
       }
    }, 

    refreshMenu: function()
    {
       var doc = Fireinput.util.getDocument();
       if(!doc)
         return;
       // get default language first 
       var defaultLanguage = Fireinput.pref.getDefault("interfaceLanguage");

       var element = Fireinput.util.getElementById(doc, "toolbarbutton", "fireinputSpecialCharMenu");
       var label = Fireinput.util.getLocaleString("fireinput.special.char.label" + defaultLanguage);
       element.setAttribute("label", label);

       for(var i=this.allSymbols.length-1; i>=0; i--)
       {
          var groupName = this.allSymbols[i].group;

          var menuID = Fireinput.util.getElementById(doc, "menu", this.allSymbols[i].group + "_menu");
          if(!menuID)
          {
             continue; 
          }
          var label = Fireinput.util.getLocaleString(groupName + defaultLanguage);
          menuID.setAttribute("label", label);
       }

       // refresh for date/time 
       var menuID = Fireinput.util.getElementById(doc, "menu", "fireinput.datetime.label" +"_menu");
       if(menuID)
       {
          var label = Fireinput.util.getLocaleString("fireinput.datetime.label" + defaultLanguage);
          menuID.setAttribute("label", label);
       }

    }, 

    addGroup: function()
    {
       var doc = Fireinput.util.getDocument();
       if(!doc)
         return;

       var menuElement = Fireinput.util.getElementById(doc, "menupopup", "fireinputSpecialCharMenuItems");

       // get default language first 
       var defaultLanguage = Fireinput.pref.getDefault("interfaceLanguage");

       // add date/time 
       var label = Fireinput.util.getLocaleString("fireinput.datetime.label" + defaultLanguage);
       var subMenu = document.createElement("menu");
       var subMenupopup = document.createElement("menupopup");
       subMenu.setAttribute("label", label);
       subMenu.setAttribute("id", "fireinput.datetime.label"+"_menu");
       var self = this; 

       subMenu.addEventListener("DOMMenuItemActive", function(event) { self.updateDateTime(event); }, true); 

       subMenupopup.setAttribute("id", "fireinput.datetime.label"); 

       subMenu.appendChild(subMenupopup);
       menuElement.appendChild(subMenu);
 
       for(var i=this.allSymbols.length-1; i>=0; i--)
       {
          var groupName = this.allSymbols[i].group;

          var menuID = Fireinput.util.getElementById(doc, "menupopup",  this.allSymbols[i].group); 
          if(!menuID)
          { 
             var label = Fireinput.util.getLocaleString(groupName + defaultLanguage);
             var subMenu = document.createElement("menu"); 
             var subMenupopup = document.createElement("menupopup"); 
             subMenu.setAttribute("label", label); 
             subMenu.setAttribute("id", this.allSymbols[i].group+"_menu"); 

             this.addGroupSymbol(subMenupopup, this.allSymbols[i].symbol); 
             subMenupopup.setAttribute("id", this.allSymbols[i].group); 

             subMenu.appendChild(subMenupopup); 
             menuElement.appendChild(subMenu); 

          }
          else 
          {
             this.addGroupSymbol(menuID, this.allSymbols[i].symbol); 
          }
       }
    },

    addGroupSymbol: function(menuItem, symbols)
    {
       var num = 5; 

       if(symbols.length > 50)
          num = 10; 
       for(var i=symbols.length-1; i>=0;)
       {
 
          var toolbar = document.createElement("toolbar"); 
          toolbar.setAttribute("class", "specialcharbar"); 
          var j=0; 
          for(j=0; j<num && (i-j) >=0; j++)
          {
             var text = symbols[i-j]; 

             var label = document.createElement("label"); 
             label.setAttribute("value", text); 
             label.setAttribute("tooltiptext", this.toUnicodeHex(text)); 
             label.setAttribute("class", "specialcharlabel");
             label.onclick=function(event) { Fireinput.main.insertSpecialCharAt(event); }; 
             toolbar.appendChild(label); 
          }
          i-= j; 
          
          menuItem.appendChild(toolbar); 
       }
    },

    updateDateTime: function(event)
    {
       var doc = Fireinput.util.getDocument();
       if(!doc)
         return;
       var subMenupopup = Fireinput.util.getElementById(doc, "menupopup", "fireinput.datetime.label"); 
       while(subMenupopup.hasChildNodes())
       {
          subMenupopup.removeChild(subMenupopup.lastChild);
       }

       this.addGroupSymbol(subMenupopup, this.getMonth());
       this.addGroupSymbol(subMenupopup, this.getWeek());
       this.addGroupSymbol(subMenupopup, this.getTime());

    },

    getMonth: function()
    {

       var current = new Date(); 
       var year  = current.getFullYear(); 
       var month = current.getMonth();
       var day =  current.getDate(); 
       var monthArray = new Array(); 

       var monthValue = this.monthNumber[month+1]; 
       var monthValueArray = monthValue.split(","); 
       // format: 2007年4月10日
       monthArray.push(year + "年" + (month+1) + "月" + day + "日"); 

       var year1= year; 
       var aYear = this.monthNumber[parseInt(year1/1000)].split(",")[0]; 
       year1 %= 1000; 
       aYear += this.monthNumber[parseInt(year1/100)].split(",")[0]; 
       year1 %= 100; 
       aYear += this.monthNumber[parseInt(year1/10)].split(",")[0]; 
       year1 %= 10; 
       aYear += this.monthNumber[year1].split(",")[0]; 

       var day1 = day; 
       var aDay = "";
       if(day1 < 10)
          aDay = this.monthNumber[day].split(",")[0];
       else
       {
          if(day1 >= 20)
             aDay = this.monthNumber[parseInt(day1/10)].split(",")[0];

          aDay += this.monthNumber[10].split(",")[0];
          if(day1 % 10)
             aDay += this.monthNumber[day % 10].split(",")[0];
       }

       // format: 二零零七年四月二十二日
       for(var i=0; i<monthValueArray.length; i++)
         monthArray.push(aYear + "年" + monthValueArray[i] + "月" + aDay + "日"); 

       var bigYear = this.chineseBigNumber[parseInt(year/1000)]; 
       year %= 1000; 
       bigYear += this.chineseBigNumber[parseInt(year/100)]; 
       year %= 100; 
       bigYear += this.chineseBigNumber[parseInt(year/10)]; 
       year %= 10; 
       bigYear += this.chineseBigNumber[year]; 

 
       var bigMonth = ""; 
       if(month < 10)
          bigMonth = this.chineseBigNumber[month+1];
       else 
       {
          bigMonth = this.chineseBigNumber[10]; 
          bigMonth += this.chineseBigNumber[month % 10 +1]; 
       }
   
       var bigDay = ""; 
       if(day < 10)
          bigDay = this.chineseBigNumber[day]; 
       else 
       {
          if(day >= 20)
             bigDay = this.chineseBigNumber[parseInt(day/10)]; 

          bigDay += this.chineseBigNumber[10]; 
          if(day % 10)
             bigDay += this.chineseBigNumber[day % 10]; 
       }
     
       // format 贰零零柒年肆月贰拾贰日
       monthArray.push(bigYear + "年" + bigMonth + "月" + bigDay + "日"); 

       return monthArray; 
    },

    getWeek: function()
    {
       var current = new Date();
       var day =  current.getDay(); 
       var weekArray = new Array(); 
       var weekValueArray = this.weekNumber[day].split(","); 
       for(var i=0; i<weekValueArray.length; i++)
       {  
          weekArray.push("星期" + weekValueArray[i]); 
          weekArray.push("礼拜" + weekValueArray[i]); 
       }

       return weekArray; 
    },

    getTime: function()
    {
       var current = new Date();
       var hour =  current.getHours(); 
       var minute =  current.getMinutes(); 
       var second =  current.getSeconds(); 

       var timeArray = new Array(); 
       timeArray.push(hour + "点" + minute + "分" + second + "秒"); 

       if(hour < 6)
          timeArray.push("凌晨" + hour + "点" + minute + "分" + second + "秒"); 
       else if(hour < 10)
          timeArray.push("早上" + hour + "点" + minute + "分" + second + "秒"); 
       else if(hour < 12)
          timeArray.push("上午" + hour + "点" + minute + "分" + second + "秒"); 
       else if (hour < 20)
          timeArray.push("下午" + (hour-12) + "点" + minute + "分" + second + "秒"); 
       else 
          timeArray.push("晚上" + (hour-12) + "点" + minute + "分" + second + "秒"); 

       return timeArray; 
    },

    toUnicodeHex: function(uniStr)
    {
       var uniHex = uniStr.charCodeAt(0).toString(16);
       while(uniHex.length<4)
       {
          uniHex = "0" + uniHex;
       }
       return uniHex.toUpperCase();
    }, 

    getIMode: function(key)
    {
       var ivalue = []; 

       if(!key || key.length <= 0)
          return ivalue; 
       for(var i = this.iMode.length-1; i>=0; i--)
       {
          var ikey = 'i' + this.iMode[i].key; 
          if(ikey.indexOf(key) == 0)
          {
              var list = []; 
              if((this.iMode[i].word).fn)
                 list = (this.iMode[i].word).fn.call(this); 
              else 
                 list = this.iMode[i].word; 

              for(var j = 0; list && j<list.length; j++)
              {
                 // put it in a format which the display engine can recognize 
                 ivalue[ivalue.length] = {key: ikey, word: Fireinput.util.unicode.convertFromUnicode(list[j]), ufreq: 'false'}; 
              }
          }
       }

       return ivalue; 
    }, 

    getZMode: function(key)
    {
       var ivalue = []; 

       if(!key || key.length <= 0)
          return ivalue; 

       for(var i = this.zMode.length-1; i>=0; i--)
       {
          var ikey = 'z' + this.zMode[i].key; 
          if(ikey.indexOf(key) == 0)
          {
              var list = []; 
              if((this.zMode[i].word).fn)
                 list = (this.zMode[i].word).fn.call(this); 
              else 
                 list = this.zMode[i].word; 

              for(var j = 0; list && j<list.length; j++)
              {
                 // put it in a format which the display engine can recognize 
                 ivalue[ivalue.length] = {key: ikey, word: Fireinput.util.unicode.convertFromUnicode(list[j]), ufreq: 'false'}; 
              }
          }
       }

       return ivalue; 
    }
});              

// short key for date, week, time 
Fireinput.specialChar.iMode = [
                {key: 'rq', word: { fn: Fireinput.specialChar.getMonth} },
                {key: 'month', word: { fn: Fireinput.specialChar.getMonth} },
                {key: 'sj', word: { fn: Fireinput.specialChar.getTime} },
                {key: 'time', word: { fn: Fireinput.specialChar.getTime} },
                {key: 'now', word: { fn: Fireinput.specialChar.getTime} },
                {key: 'xq', word: { fn: Fireinput.specialChar.getWeek} },
                {key: 'week', word: { fn: Fireinput.specialChar.getWeek} }
]; 

Fireinput.specialChar.zMode = [
                {key: 'rq', word: { fn: Fireinput.specialChar.getMonth} },
                {key: 'month', word: { fn: Fireinput.specialChar.getMonth} },
                {key: 'sj', word: { fn: Fireinput.specialChar.getTime} },
                {key: 'time', word: { fn: Fireinput.specialChar.getTime} },
                {key: 'now', word: { fn: Fireinput.specialChar.getTime} },
                {key: 'xq', word: { fn: Fireinput.specialChar.getWeek} }, 
                {key: 'week', word: { fn: Fireinput.specialChar.getWeek} }
]; 
