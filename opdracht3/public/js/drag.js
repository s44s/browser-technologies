// function allowDrop(ev) {
//     ev.preventDefault();
// }
//
// function drag(ev) {
// 	console.log(ev.dataTransfer)
// 	ev.dataTransfer.setData("text", ev.target.id);
// 	console.log(ev.dataTransfer)
//
// }
//
// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
// 		console.log(ev.target)
//     ev.target.appendChild(document.getElementById(data));
// }

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
