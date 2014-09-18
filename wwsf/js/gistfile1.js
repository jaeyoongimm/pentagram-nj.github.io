require(["lib/play-manager"], function(a) {
	// via http://stackoverflow.com/a/6274381
	//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	function shuf(o) { for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); }
	shuf(a.source.models);

	var c = a.getCurrentSound(), p = c ? c.isPaused() : false;
	a.playNext(); a.playPrev(); // poor man's refresh of current playing song
	if (p) a.pause(c); // preserve first-run state
});