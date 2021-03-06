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

var contextReaderThread = {
    maxStep: 30000,
    maxPhraseLen: 20, 
    beginTime: 0, 

    start: function(str)
    {
       if(!str)
          return null; 

       var strLength = str.length;
       var phraseString = ""; 
       var phraseList = []; 
       var currentStep = 0; 

       for(var i=0; i< strLength && currentStep<this.maxStep; i++)
       {
          var charCode = str.charAt(i);
          if(charCode >= '\u4e00' && charCode < '\u9FFF')
          {
             // valid 
             phraseString += charCode; 
             // save it to list if it's too long 
             if(phraseString.length >= this.maxPhraseLen)
             {
                phraseList[phraseList.length++] = phraseString; 
                phraseString = "";  
             }

             // count how many chars we have processed 
             currentStep++; 
          }
          else
          {
             // discard any phrase less than 2 words 
             if(phraseString.length >= 2)
             {
                phraseList[phraseList.length++] = phraseString; 
             }

             // discard anything else 
             phraseString = "";              
          }
       }
       return phraseList; 
    }

}; 

onmessage = function(event) {  
    var context = event.data.context; 
    var tabId = event.data.tabId; 
    try {
     
        // if the document is valid document we want to process, start the reader   
        var result = contextReaderThread.start(context);

        // When it's done, call back to the main thread to let it know
        // we're finished.
        postMessage({'tabId': tabId, 'result': result}); 
    } catch(err) { }
}




