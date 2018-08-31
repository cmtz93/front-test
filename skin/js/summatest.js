$(document).ready(function() {
	$.ajax({
    url:   '/resources/data.php?getBoxes=what-we-do',
    type:  'get',
    success:  function (response) {
    	var resp = JSON.parse(response);
    	var box_list = '';
    	resp.forEach(item => {
    		box_list += `<div class="boxing" style="border-top-color:${item.color}"><h1>${item.title}</h1><p>${item.content}</p></div>`
    	})
    	$('#box-list').html(box_list);
    }
	});
})