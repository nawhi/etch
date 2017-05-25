$(document).ready(makeGrid);

var GRIDSIZE = 16;

function makeGrid() {
	console.log("Making grid");
	for(var i=0; i<GRIDSIZE*GRIDSIZE; i++)
	{
		// $newDiv.addTo($('#container'));
		var $newDiv = $("<div></div>");
		$newDiv.addClass("gridsquare");
		$newDiv.attr('id', 'row' + parseInt(i/GRIDSIZE));
		var w = parseInt($('#container').width()/GRIDSIZE) + 'px';
		console.log("setting width to " + w);
		$newDiv.width(w);
		$newDiv.height(w);
		$newDiv.attr('border-radius', parseInt(w/5));
		$('#container').append($newDiv);
	}
}