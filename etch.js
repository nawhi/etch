var DEFAULT_GRID_SIZE = 16;

$(document).ready(function() {
	// Get starting grid size
	var gs = getGridSize();
	makeGrid(gs);
});

function getGridSize() {
	var gs;
	while(true) {
		gs = prompt("Enter grid size");
		if (Number.isInteger(parseInt(gs)))
			return gs;
		else
			return DEFAULT_GRID_SIZE;
	}
}

function makeGrid(GRIDSIZE) {
	$('#container').empty();
	var w = parseInt($('#container').width()/GRIDSIZE);

	var $table = $('<table></table>');
	for(var i=0; i<GRIDSIZE; i++) {
		var $row = $('<tr class="gridrow" id="row'+i+'"></tr>');
		for(var j=0; j<GRIDSIZE; j++) {
			var $cell = $('<td class="gridsquare"></td>');
			$cell.height(w);
			$cell.width(w);
			$row.append($cell);
		}
		$table.append($row);
	}
	$('#container').append($table);
	$('.gridsquare').mouseenter(function(){
		// Shade it blacker each time
		var shade = parseFloat($(this).css('backgroundColor').match(/, ([\d\.]*)\)/)[1]);
		if (shade + 0.1 > 1)
			shade = 1;
		else 
			shade += 0.1;
		$(this).css({'background-color': 'rgba(0,0,0,' + shade + ')'});
	});
}