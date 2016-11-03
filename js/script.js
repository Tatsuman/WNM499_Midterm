// Get JSON
// referred: https://www.youtube.com/watch?v=j-S5MBs4y0Q
$.ajax({
	url: "data/data.json",
	dataType: "json",
	type: "get",
	cache: false,
	success: function(data){
			// referred: 
			// http://www.p-nt.com/technicblog/archives/58
			var sort = data.sort(function(val1,val2){
				return(val1.uploadDate > val2.uploadDate ? 1 : -1);
			})
			prependElements(data);
	}
})


function sortByDate(data){
	console.log(data);
}

function prependElements(data){
	var uploadDate = []
	var dataType = [];
	var dataIconSet = []
	for(var i = 0; i < data.length; i++){
		uploadDate.push(data[i].uploadDate.substr(0,10));
		console.log(data[i].dataType)
		switch (data[i].dataType){
			case "PDF":
				dataIconSet[i] = "pdf";
				break;
			case "PNG":
				dataIconSet[i] = "png";
				break;
			case "JPG":
				dataIconSet[i] = "jpg";
				break;
			case "SVG":
				dataIconSet[i] = "svg";
				break;
			case "ZIP":
				dataIconSet[i] = "zip";
				break;
			default:
				dataIconSet[i] = "unknown";

		}
		$("#main-content").prepend(
			"<div class='content'>"
				+"<div class='image'>"
					+"<img src=" +data[i].thumbnails+"/1.png>"
				+"</div>"
				+"<div class='info'>"
					+"<table>"
						+"<tr>"
							+"<th colspan='2'>"+data[i].event+"</th>"
							+"<td class='gIcon' style='background-image: url(\"images/"
								+data[i].eventFor+".svg\")'></td>"
						+"</tr>"
						+"<tr>"
							+"<td>"+data[i].type+"</td>"
							+"<td class='dataIcon' style='background-image: url(\"images/dataIcons/"+dataIconSet[i]+".svg\")'></td>"
							+"<td>"+uploadDate[i]+"<td>"
						+"</tr>"
					+"</table>"
					+"<form method='get' action='"+data[i].fileLocation+"'>"
						+"<button type='submit'>Download " + data[i].dataType + "</button>"
					+"</form>"
				+"</div>"
			+"</div>"
		)
		// $(".content").css("background","url("+data[i].thumbnails+"/1.png)")
	}
}


// "sort" reference
// http://qiita.com/PianoScoreJP/items/f0ff7345229871039672