'use strict';
var app = angular.module('angularApp');
app.factory("utilsService", function(){

	return {
		popImage: function(imgSrc, imgId) {
			// pops up image and resizes window //

			var popImg = new Image();
			popImg.src = imgSrc;
			if (imgWindow != null && imgWindow.open) {
				imgWindow.close();
				// t = null;
			}
			var topPos = 50;
			var leftPos = 50;
			var maxWidth = 800;
			var maxHeight = 800;
			if (popImg.width > 0) {
				var width = popImg.width + 20;
				var height = popImg.height + 20;
				if (width > height) {
					if (width > maxWidth) {
						var ratio = maxWidth / width;
						width = maxWidth;
						height = ratio * height;
					}
				} else {
					if (height > maxHeight) {
						var ratio = maxHeight / height;
						height = maxHeight;
						width = ratio * width;
					}
				}
				imgWindow = window.open("", "charFileWindow", "width=" + width + ",height=" + height + ",left=" + leftPos + ",top=" + topPos);
				imgWindow.document.writeln("<html><head><title>Characterization File</title></head>");
				imgWindow.document.writeln("<body onLoad=\"self.focus();\" bgcolor=\"#FFFFFF\">");
				imgWindow.document.writeln("<img width='" + (width - 20) + "' height='" + (height - 20) + "' styleId='" + imgId + "' src='" + imgSrc + "'/>");
				imgWindow.document.writeln("</body></html>");
			} else {
				imgWindow = window.open("", "charFileWindow", "left=" + leftPos + ",top=" + topPos);
				imgWindow.document.writeln("<html><head><title>Characterization File</title></head>");
				imgWindow.document.writeln("<body onLoad=\"resizePopup();\" bgcolor=\"#FFFFFF\">");
				imgWindow.document.writeln("<img id='popImage' styleId='" + imgId + "' src='" + imgSrc + "'/>");
				imgWindow.document.writeln("</body></html>");
			}
		}
		,
		getParameterFromURL: function(name) {
			    // gets parameter from url and returns the value //
			    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			    results = regex.exec(location.search);
			    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},

		isHashEmpty: function(obj) {
			//checks to see if hash is empty //
			for (var key in obj)
				if(obj.hasOwnProperty(key))
			 		return false;
				return true;			
		},

		resultCount: function(params,length,pageLength) {
			// returns result count and displaying items x of y on results pages //
			if (params.page==1) {
				var html = length + ' items found, displaying ';
				html += 1 +'-'+ pageLength;
				return html;
			}
			else {
				var html = length + ' items found, displaying ';
				html += params.count*(params.page-1)+1;
				html +=' - ';
				html += ((params.page-1)*params.count+1)+pageLength-1;
				return html;
			}
		},

        /**
         * Builds the parameter String used when export JSON or XML is called from views/keywordSearch/keywordSearchResults.html
         *
         * @param data
         * @returns {string}
         */
        keyWordSampleIdListStrings: function (data) {
            let ids = '';
            for (let i = 0; i < data.length; i++) {
                if (data[i] !== undefined && data[i] !== null) {

                    // Make sure we can get an ID, other wise there is nothing we can do with this record.
                    if(
                        ( data[i].type !== 'publication' && data[i].id !== undefined && data[i].id !== null) ||
                        (data[i].pubmedId !== undefined && data[i].pubmedId !== null)) {

                        if (data[i].type === 'sample') {
                            if (data[i].id !== undefined && data[i].id !== null) {
                                if (!ids.includes(',' + data[i].id)) {
                                    ids += data[i].id +',';
                                }
                            }
                        } else if (data[i].type === 'publication') {
                            if (data[i].pubmedId !== undefined && data[i].pubmedId !== null) {
                                if (!ids.includes(',' + data[i].pubmedId.trim() + '_pubmed')) {
                                    ids += data[i].pubmedId.trim() + '_pubmed,';
                                }
                            }
                        } else if (data[i].type === 'protocol') {
                            if (data[i].id !== undefined && data[i].id !== null) {
                                if (!ids.includes(',' + data[i].id.trim() + '_protocol')) {
                                    ids += data[i].id.trim() + '_protocol,';
                                }
                            }
                        }
                    }
                }
            }
            // Pull off the trailing ','
            ids = ids.slice(0, -1);
            return ids;
        },


        /**
         * Builds the parameter String used when export JSON or XML is called from  views/sample/view/sampleResults.html
         *
         * @param data
         * @returns {string|string}
         */
		sampleIdListStrings( data ){
            let ids = '';
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i] !== undefined && data.data[i] !== null) {
                    if (!ids.includes(',' + data.data[i].sampleId)) {
                        if (i > 0) {
                            ids += ',';
                        }
                        ids += data.data[i].sampleId;
                    }
                }
            }
            return ids;
        }
	}
});
