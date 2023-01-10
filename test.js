<!DOCTYPE html>
<html>
<head></head>
<body>
<h1>Demo: Current Date</h1>
<p id="p1"></p>
<script>
	var date = new Date();
    var review_date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "\t" + date.getHours() + ":" + date.getMinutes();

	document.getElementById("p1").innerHTML = review_time;
</script>
</body>
</html>