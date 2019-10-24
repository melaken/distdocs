var contentstats_modules_to_update = new Array();

function contentstats_update_modules(date_in, date_out, time){
	if (typeof contentstats_modules_to_update !== 'undefined') {
		for (k = 0; k < contentstats_modules_to_update.length; k++) {

		    var functionName = "updateChart" + contentstats_modules_to_update[k];
		    if (typeof window[functionName] == 'function') {
			  	window[functionName]();
				}

				var varName = "cs_chart_" + contentstats_modules_to_update[k];
		    if (typeof window[varName] == 'object') {
				  window[varName].update(date_in, date_out, time);
				}

		}
	}
}
