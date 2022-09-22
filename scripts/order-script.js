//  const val = document.querySelectorAll(".order-checkbox").some((checkbox) => {
//     return checkbox.checked = true;
// })

document.querySelectorAll(".order-checkbox").forEach(function (checkbox) {
	checkbox.addEventListener("change", function (event) {
		if (checkbox.checked === true) {
			document.querySelector(".interaction-container").style.display = "flex";
			document.querySelector(".amount-1").textContent = "250.00";
			return;
		}
		document.querySelector(".interaction-container").style.display = "none";
		document.querySelector(".amount-1").textContent = "0.00";
	});
});
//   Script for Countries DropDown
function myFunction(drpbtn) {
	console.log(drpbtn.parentElement.children[1]);
	const btn=drpbtn.parentElement.children[1];
	const alldrops=document.querySelectorAll(".dropdown-content").forEach((el)=>{
	  if(!el.classList.contains("hidden")){
		el.classList.toggle("hidden");
		el.classList.remove("active");
	  }
	 
	})
	btn.classList.add("active");
	if(btn.classList.contains("active")){
  btn.classList.toggle("hidden");
  }
	const arrow = document.querySelector(".arrow");
	const down = document.getElementById("myDropdown");
	if (!down.classList.contains("hidden")) {
	  arrow.classList.add("rotate-180");
	} else {
	  arrow.classList.remove("rotate-180");
	}
  }
  
  function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  }
  
  const options = document.querySelectorAll("#myDropdown a");
  options.forEach((item) => {
	item.classList.add("text-slate-600");
	item.addEventListener("click", () => {
	  options.forEach((inner) => {
		inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
	  });
	  document.querySelector(".dropbtnspan").textContent = item.textContent;
	  item.classList.remove("text-slate-600");
	  item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
	  document.querySelector("#myDropdown").classList.toggle("hidden");
	});
  });
  
  //   Script for Countries 2 DropDown
  function myFunction2(drpbtn) {
	const btn=drpbtn.parentElement.children[1];
	const alldrops=document.querySelectorAll(".dropdown-content").forEach((el)=>{
	  if(!el.classList.contains("hidden")){
		el.classList.toggle("hidden");
		el.classList.remove("active");
	  }
	 
	})
	btn.classList.add("active");
	if(btn.classList.contains("active")){
  btn.classList.toggle("hidden");
  }
	const arrow = document.querySelector(".arrow2");
	const down = document.getElementById("myDropdown2");

	if (!down.classList.contains("hidden")) {
	  arrow.classList.add("rotate-180");
	} else {
	  arrow.classList.remove("rotate-180");
	}
  }
  
  function filterFunction2() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput2");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown2");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  }
  
  const options2 = document.querySelectorAll("#myDropdown2 a");
  options2.forEach((item) => {
	item.classList.add("text-slate-600");
	item.addEventListener("click", () => {
	  options2.forEach((inner) => {
		inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
	  });
	  document.querySelector(".dropbtnspan2").textContent = item.textContent;
	  item.classList.remove("text-slate-600");
	  item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
	  document.querySelector("#myDropdown2").classList.toggle("hidden");
	});
  });

  //script for cities
function myCities(drpbtn) {
	const btn=drpbtn.parentElement.children[1];
	const alldrops=document.querySelectorAll(".dropdown-content").forEach((el)=>{
	  if(!el.classList.contains("hidden")){
		el.classList.toggle("hidden");
		el.classList.remove("active");
	  }
	 
	})
	btn.classList.add("active");
	if(btn.classList.contains("active")){
  btn.classList.toggle("hidden");
  }
	const arrow = document.querySelector(".city-arrow");
	const down = document.getElementById("cityDropdown");
	// document.getElementById("cityDropdown").classList.toggle("hidden");
	if (!down.classList.contains("hidden")) {
	  arrow.classList.add("rotate-180");
	} else {
	  arrow.classList.remove("rotate-180");
	}
  }
  
  function filterCities() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("cityInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("cityDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  }
  
  const cityoptions = document.querySelectorAll("#cityDropdown a");
  cityoptions.forEach((item) => {
	item.classList.add("text-slate-600");
	item.addEventListener("click", () => {
	  cityoptions.forEach((inner) => {
		inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
	  });
	  document.querySelector(".citydropbtnspan").textContent = item.textContent;
	  item.classList.remove("text-slate-600");
	  item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
	  document.querySelector("#cityDropdown").classList.toggle("hidden");
	});
  });
  
  //script for cities2
  function myCities2(drpbtn) {
	const btn=drpbtn.parentElement.children[1];
	const alldrops=document.querySelectorAll(".dropdown-content").forEach((el)=>{
	  if(!el.classList.contains("hidden")){
		el.classList.toggle("hidden");
		el.classList.remove("active");
	  }
	 
	})
	btn.classList.add("active");
	if(btn.classList.contains("active")){
  btn.classList.toggle("hidden");
  }
	const arrow = document.querySelector(".city-arrow2");
	const down = document.getElementById("cityDropdown2");
	
	if (!down.classList.contains("hidden")) {
	  arrow.classList.add("rotate-180");
	} else {
	  arrow.classList.remove("rotate-180");
	}
  }
  
  function filterCities2() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("cityInput2");
	filter = input.value.toUpperCase();
	div = document.getElementById("cityDropdown2");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  }
  
  const cityoptions2 = document.querySelectorAll("#cityDropdown2 a");
  cityoptions2.forEach((item) => {
	item.classList.add("text-slate-600");
	item.addEventListener("click", () => {
	  cityoptions2.forEach((inner) => {
		inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
	  });
	  document.querySelector(".citydropbtnspan2").textContent = item.textContent;
	  item.classList.remove("text-slate-600");
	  item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
	  document.querySelector("#cityDropdown2").classList.toggle("hidden");
	});
  });