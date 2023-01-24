/** @format */

export const frisby = require("frisby");
/*
it("should be from sankarchandradas027@gmail.com", function () {
	return frisby.get("https://63be6aa1585bedcb36acc7d4.mockapi.io/comment/8").expect("status", 200);
});

it("POST should return a status of 201 Created", function () {
	return frisby
		.post("https://63be6aa1585bedcb36acc7d4.mockapi.io/comment", {
			email: "tanusreedas@gmail.com",
			comment: "<p>A cool blog post!</p>",
		})
		.expect("status", 201);
});

it("8 should be updated", function () {
	return frisby
		.put("https://63be6aa1585bedcb36acc7d4.mockapi.io/comment/14", {
			email: "sanchita@gmail.com",
			comment: "<p>Some different content actually</p>",
		})

		.expect("status", 200);
});
*/

it("DELETE should delete duplicate comment of tithydas3@gmail.com", function () {
	return frisby.del("https://63be6aa1585bedcb36acc7d4.mockapi.io/comment/12").expect("status", 200);
});
