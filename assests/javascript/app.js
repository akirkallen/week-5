$('#go').on('click',function(){
	clockMan.start();
})

var quizQuestion = [{
	question: "Who is the Front man for Parliment",
answer:["Mick Jagger", "Roy Rogers", "George Clinton", "Frank Sinatra", "Lionel Richie"],
	rightOne: "George Clinton"
},
{
question: "Who is the Front man for Rolling Stones",
answer:["Mick Jagger", "Roy Rogers", "George Clinton", "Frank Sinatra", "Lionel Richie"],
	rightOne: "Mick Jagger"
},
{
question: "Who is the Front man for the Commodores",
answer:["Mick Jagger", "Roy Rogers", "George Clinton", "Frank Sinatra", "Lionel Richie"],
	rightOne: "Lionel Richie"
}, 
{
question: "Who is the leader of Rat Pack",
answer:["Mick Jagger", "Roy Rogers", "George Clinton", "Frank Sinatra", "Lionel Richie"],
	rightOne: "Frank Sinatra"
}]; 

var clockMan = {
	wrong:0,
	right: 0,
	clicker: 20,
	countdown: function(){
		clockMan.clicker--;
		$('#clicker').html(clockMan.clicker);
		if(clockMan.clicker<=0){
			console.log("Outta Time!!");
			clockMan.done();
		}

	}, 
	start: function(){
		timer = setInterval(clockMan.countdown,1000);
		$('#boddy').prepend('<h2> Time Remaining: <span id="clicker">20</span> seconds</h2>');
$('#go').remove();
for(var i=0; i<quizQuestion.length;i++){
	$('#boddy').append('<h2>'+quizQuestion[i].question+'</h2>');
		for(var j=0;j<quizQuestion[i].answer.length;j++){
			$('#boddy').append("<input type='radio' name = 'question-"+i+"' value='"+quizQuestion[i].answer[j]+"'>"+quizQuestion[i].answer[j])
		}

}
	}, 
	done: function(){
		$.each($("input[name='question-0']:checked"),function(){
			if($(this).val()==quizQuestion[0].rightOne){
				clockMan.right++;
		} else {
			clockMan.wrong++;
		}

		});
		$.each($("input[name='question-1']:checked"),function(){
			if($(this).val()==quizQuestion[1].rightOne){
				clockMan.right++;
		} else {
			clockMan.wrong++;
		}

		});
		$.each($("input[name='question-2']:checked"),function(){
			if($(this).val()==quizQuestion[2].rightOne){
				clockMan.right++;
		} else {
			clockMan.wrong++;
		}

		});
		$.each($("input[name='question-3']:checked"),function(){
			if($(this).val()==quizQuestion[3].rightOne){
				clockMan.right++;
		} else {
			clockMan.wrong++;
		}

		});
		this.result();
			},
		result: function(){
			clearInterval(timer);
			$('#boddy h2').remove();
			$('#boddy').html("All Done");
			$('#boddy').append("Right Answers: "+this.right);
			$('#boddy').append("Wrong Answers: "+this.wrong);

		}
}