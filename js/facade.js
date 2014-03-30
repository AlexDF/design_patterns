//facade
function getEmployeeList() {
	$.getJSON("json/employees.json", function(employee) {
		$.each(employee, function() {
			$.each(this, function(key, value) {
				$("#facade_output").append("<p>" +
					"First: " + value.firstname + "<br>" +
					"Last: " + value.lastname + "<br>" +
					"Phone: " + value.phone + "</p>"
				);
			});
		});
	});
}
