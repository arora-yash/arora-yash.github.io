var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if(this.readyState == 4 && this.status == 200){
		var obj = JSON.parse(this.responseText);
		
		for(var j = 0;j<obj.length;j++) {

			document.getElementById("ques").innerHTML= obj[j].title;

			var output = "<ul  class='margin0 padding0'>";
			for(var i =0; i<obj[j].actualTags.length; i++)
			{
				output+="<li>" + obj[j].actualTags[i];
			}
			output += "</ul>";
			document.getElementById("list").innerHTML= output;

			var visitt = obj[j].link;
			document.getElementById("visit").innerHTML= "<a href='"+visitt+"'>Visit</a>";

			var answer = "<ul class='margin0 padding0'>";
			for (var i = 0; i < obj[j].answer.length; i++) {
				if(obj[0].answer[i].isAccepted === "True")
					answer +="<a href='"+"https://stackoverflow.com/a/"+obj[j].answer[i].answerID+"'><li><button type='button' class='true inline'>Click to view the accepted answer <span class='votes'>"+obj[j].answer[i].maxVotes+" Votes"+"</span></button></li></a>";
				else
					answer +="<a href='"+"https://stackoverflow.com/a/"+obj[j].answer[i].answerID+"'><li><button type='button' class='true false inline'>Click to view the answer <span class='votes'>"+obj[j].answer[i].maxVotes+" Votes"+"</span></button></li></a>";
			}
			answer += "</ul>";
			document.getElementById("ans").innerHTML= answer;

		}
	}
};
xmlhttp.open("GET", "test.json", true);
xmlhttp.send();

