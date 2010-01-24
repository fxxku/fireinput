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

var readerMainThread = FireinputXPC.getService("@mozilla.org/thread-manager;1").currentThread; 

var contextReader = {

    maxStep: 30000,
    maxPhraseLen: 20, 

    run: function(tab)
    {
       /* if it's disabled from config, just return */
       if(!fireinputPrefGetDefault("enableContextReader"))
          return; 

       /* only run contextReader when IME is SMART_PINYIN */
       var gs =  FireinputXPC.getService("@fireinput.com/fireinput;1", "nsIFireinput");
       if(gs.getChromeWindow().getFireinput().getCurrentIME().getIMEType() != SMART_PINYIN)
          return; 

       /*FIXME: do we need to use a different thread id ? */
       if(contextReader.validContext(tab)) 
          readerMainThread.dispatch(new workingThread(1, tab.defaultView.document.body.innerHTML), readerMainThread.DISPATCH_NORMAL);
    }, 
       
    validContext: function(tab)
    {
       var wintype = document.documentElement.getAttribute('windowtype');
       /* if and only if the current window is a browser window and it has a document with a character set
        */
       if (window && (wintype == "navigator:browser") && window.content && window.content.document)
       {
          var docCharset = tab.defaultView.content.document.characterSet.toUpperCase();
          if(docCharset == "UTF-8" || docCharset == "GB2312" || docCharset =="GB18030" ||
             /^(GBK|X-GBK)$/.test(docCharset) || docCharset == "HZ" || docCharset == "ISO-2022-CN" || 
             docCharset == "BIG5" || docCharset == "BIG5-HKSCS" || /^(EUC-TW|X-EUC-TW)$/.test(docCharset))
          {
             // valid charset. If the content length is too small, don't do any processing  
             if(tab.defaultView.document.body.innerHTML.length > 100)
                return true; 
          }
       }

       return false; 
    }, 

    start: function(str)
    {
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

var workingThread = function(threadID, context) {
    this.threadID = threadID;
    this.context = context; 
    this.result = "";
};

workingThread.prototype = {
    run: function() {
      try {
     
          // if the document is valid document we want to process, start the reader   
          this.result = contextReader.start(this.context);

          // When it's done, call back to the main thread to let it know
          // we're finished.
          readerMainThread.dispatch(new mainThread(this.threadID, this.result), readerMainThread.DISPATCH_NORMAL);

          // okay, we are almost done, check to see if there are pending events
          try { 
             if(this.hasPendingEvents())
                this.processNextEvent(); 
          } catch(e) {} 

      } catch(err) {
         Components.utils.reportError(err);
      }
    },
  
    QueryInterface: function(iid) {
      if (iid.equals(Components.interfaces.nsIRunnable) ||
          iid.equals(Components.interfaces.nsISupports)) {
            return this;
      }
      throw Components.results.NS_ERROR_NO_INTERFACE;
    }
};


var mainThread = function(threadID, result) {
    this.threadID = threadID;
    this.result = result;
};

mainThread.prototype = {
    run: function() {
      try {
         // we got data from the working thread.
         if(this.result.length <= 0)
            return; 

         // it's up to importer to handle it now 
         FireinputImporter.processPhraseFromRemoteOnDemand(this.result, this.result.length);

      } catch(err) {
         Components.utils.reportError(err);
      }
    },
  
    QueryInterface: function(iid) {
       if (iid.equals(Components.interfaces.nsIRunnable) ||
           iid.equals(Components.interfaces.nsISupports)) {
            return this;
       }
       throw Components.results.NS_ERROR_NO_INTERFACE;
    }
};


