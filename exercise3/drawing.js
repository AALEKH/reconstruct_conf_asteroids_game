var draw_grid = function(ctx, minor, major, stroke, fill){
	minor = minor || 10;
	major = major || minor*5;
	stroke = stroke || "#00FF00";
	fill = fill = fill || "009900";
	ctx.save();
	ctx.strokeStyle = stroke;
	ctx.fillStyle = fill;
	let width = ctx.canvas.width, height = ctx.canvas.height;
	for(var x = 0; x < width; x += minor){
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x, height);
		ctx.lineWidth = (x%major == 0) ? 0.5: 0.25;
		ctx.stroke();
		if(x % major == 0){ctx.fillText(x, x, 10);}
	}
	for(var y = 0; y < height; y += minor){
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(width, y);
		ctx.lineWidth = (y % major ==0) ? 0.5: 0.25;
		ctx.stroke();
		if(y%major == 0){ctx.fillText(y, 0, y+10);}
	}
	ctx.restore();

}

var draw_pacman = function(ctx, x, y, radius, angle){
	ctx.beginPath();
	ctx.arc(x, y, radius, angle*Math.PI, 1.8*Math.PI) // From book: The context.arc method can optionally take a final Boolean parameter for drawing counterclockwise. This can be convenient when using arcs in more complicated paths.
	ctx.lineTo(x, y);
	ctx.fillStyle = "yellow"; // Fills up the entire arc as yellow with a set of boundaries
	ctx.fill();
}

var getRandom = function(min, max) {
	return Math.random()*(max-min);
}