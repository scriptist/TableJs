/* ==========================
 *          Table.js
 * ==========================
 * 
 * Table.js helps generate tables using the bootstrap style
 * 
 * Created by: Michael Berman @ Corporate Interactive
 * Last modified: 03/07/2012
 */

var tableJs = {};

/* Create a table */
tableJs.create = function(options) {
	var defaults = {
		classes:'table table-striped table-bordered',
		additionalClasses: null,
		attributes: null,
		headRows: null,
		bodyRows: null
	}
	var settings = $.extend(defaults, options);
	
	var thead = tableJs.makeSection(settings.headRows, true);
	var tbody = tableJs.makeSection(settings.bodyRows, false);
	
	var table = $('<table>').append(thead, tbody);
	table = tableJs.addAttributes(table, settings);
	
	return table;
}

/* Make a section of rows */
tableJs.makeSection = function(rows, head) {
	if (head)
		var section = $('<thead>')
	else
		var section = $('<tbody>')
	$(rows).each( function() {
		section.append(tableJs.makeRow(this, head));
	});
	return section;
}

/* Make a row of cells */
tableJs.makeRow = function(items, head) {
	var row = $('<tr>');
	$(items).each( function(key, cell) {
		row.append(tableJs.makeCell(cell, head));
	});
	
	return row;
}

/* Make an individual cell */
tableJs.makeCell = function(settings, head) {
	if (head)
		var cell = $('<th>')
	else
		var cell = $('<td>')
	cell.html(settings.content);
	cell = tableJs.addAttributes(cell, settings);
	return cell;
}

/* Add attributes from settings to any element */
tableJs.addAttributes = function(element, settings) {
	element = $(element);
	element.addClass(settings.classes).addClass(settings.additionalClasses);
	if (settings.attributes) {
		$.each( settings.attributes, function(key, val) {
			element.attr(key, val);
		});
	}
	return element;
}