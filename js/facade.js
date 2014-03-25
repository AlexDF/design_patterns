//facade
function getEmployeeList() {
	$.getJSON("json/employees.json", function(employee) {
		$.each(employee, function() {
			$.each(this, function(key, value) {
				$("#employee_list").append(
					"First: " + value.firstname + "<br>" +
					"Last: " + value.lastname + "<br>" +
					"Phone: " + value.phone + "<br><br>"
				);
			});
		});
	});
}
