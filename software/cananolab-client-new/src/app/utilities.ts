/*
Copyright 2023, Institute for Systems Biology

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

export class Util {

    // Credit: "Fenton"
    // https://stackoverflow.com/questions/28150967/typescript-cloning-object
    //
    // WARNING!!! If <script> tags are in the input, you need to make sure that
    // these fields are headed for an Angular innerHTML context or an {} context.
    //
    // Strings coming over the wire in JSON objects contain HTML entities.
    // We want to copy the object so we can use it for editing, but
    // what was previously used (JSON.parse(JSON.stringify(file))) sent the
    // escapes directly into the textarea. If specified by the convert
    // argument, HTML entities will be converted during the copy.
    //
    // Empirically, a <script>alert('foo')</script> construct will
    // emerge as <script>alert('foo')</script> and appear as such, verbatim, in
    // an Angular template {{}} interpolation. If assigned to Angular
    // [innerHTML] in a div or span, nothing shows up at all. If assigned to
    // Angular [innerHTML] in a textarea for editing, it looks just like the
    // {{}} presentation: all tags are still there (but nothing is executed)
    // The console reports sanitizing is occurring.
    //

    // hat tip Rob W @ https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
    private static decodeHtml(html) {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

    //
    // Another way to convert a string to another string where html entities are converted.
    //
    private static htmlDecode(input: string): string {
        let doc = new DOMParser().parseFromString(input, 'text/html');
        return doc.documentElement.textContent;
    }

    //
    // Use for deep copies. Strings with HTML entities will be decoded if the second argument
    // is true. Currently (2/2023) strings coming from the server are decoded already and we
    // wish to retain formatting, so typically set convert to false.
    //
    static deepCopy(obj: any, convert: boolean): any {
        let copy: any;

        if (null == obj || 'object' !== typeof obj) {
            //
            // The server is now (2/2023) sending text that has been earmarked for sanitization
            // (and note that is only a subset of all the text being issued) and running it
            // through a sanitizer that removes e.g. <script> tags, but keeps safe tags
            // (e.g. <b>, <i>, <sup>, <sub>) intact. This allows the user to provide basic
            // formatting for the displayed text. However, that library insists on converting
            // Unicode to HTML entities, which is then what shows up in the editing textareas!
            // Thus, we take the sanitized text and fo the unescaping there, so Unicode comes
            // across the wire. With this new approach, we do not needs to do any decoding here
            // on the client. Thus, DO NOT use the convert option for most uses!
            //
            if (convert && (typeof obj) === 'string') {
                return Util.htmlDecode(obj)
            }
            return obj;
        }

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (let i = 0, len = obj.length; i < len; i++) {
                copy[i] = Util.deepCopy(obj[i], convert);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (let attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = Util.deepCopy(obj[attr], convert);
                }
            }
            return copy;
        }
        throw new Error('Unable to copy obj! Its type isn\'t supported.');
    }
}

