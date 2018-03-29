console.log(dataTransfer.prototype)
if('draggable' in document.createElement('span') && "setData" in dataTransfer.prototype){
	function allowDrop(ev) {
	    ev.preventDefault();
	}

	function drag(ev) {
		console.log(ev.target.parentElement.parentElement.firstElementChild)

		if(ev.target.firstElementChild.checked == false || ev.target.parentElement.parentElement.firstElementChild.checked == false){
			console.log(ev.target.firstElementChild)
			ev.dataTransfer.setData("value", ev.target.firstElementChild.value);
			ev.target.firstElementChild.checked = true;
		} else {
			ev.target.firstElementChild.checked = false;
		}
	}

	function drop(ev) {
	  ev.preventDefault();
	  var data = ev.dataTransfer.getData("value");

		if (!data) {
			console.log('leeg')
		} else {
			var li = document.createElement('li');
			li.innerHTML = data;
			ev.target.appendChild(li);
		}
	}
} else {
	var images = document.querySelectorAll('img');
	var sections = document.querySelectorAll('label');

	for(var i = 0; i < images.length; i++) {
		images[i].style.cursor = "auto";
		sections[i].style.cursor = "auto";
	}
}

if('querySelector' in document && 'querySelectorAll' in document) {
	var checkboxes = document.querySelectorAll('form section input');

	for(var i = 0; i < checkboxes.length; i++) {
		var submit = document.querySelector('button');
		submit.style.display = "none";

		checkboxes[i].addEventListener('change', function(el){
			if(el.target.checked == true){
				var value = this.value
				var ul = document.querySelector('ul');
				var li = document.createElement('li');
				li.innerHTML = value;
				ul.appendChild(li);
			}else{
				var li = document.querySelectorAll('aside ul li');
				var ul = document.querySelector('ul');
				var self = el.target.value

				for(var i = 0; i < li.length; i++) {
					if(self == li[i].innerHTML) {
						li[i].parentNode.removeChild(li[i])
					}
				}
			}
		})
	}
}
