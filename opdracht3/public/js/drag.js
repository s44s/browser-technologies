if('draggable' in document.createElement('span')){
	function allowDrop(ev) {
	    ev.preventDefault();
	}

	function drag(ev) {
		if(ev.target.childNodes[1].checked == false){
			ev.dataTransfer.setData("value", ev.target.childNodes[1].value);
			ev.target.childNodes[1].checked = true;
		} else {
			ev.target.childNodes[1].checked = false;
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

				li.forEach(function(el){
					// console.log(self)
					if(self == el.innerHTML) {
						console.log(el)
						el.parentNode.removeChild(el)
					}
				})
			}
		})
	}
}
