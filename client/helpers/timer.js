timer = {
    start: function(time, clock) {
	
	var start = new Date().getTime();
	var setTimeLeft = this.setTimeLeft;
	setTimeLeft(time);
	time = time*1000;
	
	var minutes = parseInt(time/1000/ 60);
        var seconds = parseInt(time/1000 % 60);
	clock.innerHTML = timer.clockStyle(minutes) + ":" + timer.clockStyle(seconds);
	timer.interval = setInterval(function() {
            var now = time-(new Date().getTime()-start);
            if( now <= 0) {
		document.getElementById("sound").innerHTML="<embed src='/3timer6.wav' hidden=true autostart=true loop=false>";
		clearInterval(timer.interval);
		setTimeLeft(0);
		minutes = parseInt(now / 60);
		seconds = parseInt(now % 60);
		clock.innerHTML = timer.clockStyle(minutes) + ":" + timer.clockStyle(seconds);
            }
            else setTimeLeft(Math.floor(now/1000));
            minutes = parseInt(now /1000/ 60);
            seconds = parseInt(now /1000% 60);
            clock.innerHTML = timer.clockStyle(minutes) + ":" + timer.clockStyle(seconds);
	},100);
    },
    setTimeLeft: function(time) {
	timer.time = time;
    },
    
    getTimeLeft: function () {
	return timer.time;
    },
    
    clear: function() {
	timer.time = -1;
        clearInterval(timer.interval);
    },
    clockStyle: function(time) {
	if (time.toString().length == 1)
	    return "0" + time;
	else return time;
    }
}
