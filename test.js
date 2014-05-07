describe("test::check input",function() {
	
	it("check checkSingleInt",function () {
		expect(checkSingleInt([2,3,4])).toEqual([2,3,4]);
		expect(checkSingleInt([2,2.2,4])).toEqual([]);
	})

	it("check checkUnique",function () {
		expect(checkUnique([2,3,4])).toEqual([2,3,4]);
		expect(checkUnique([2,2,4])).toEqual([]);
	})

	it("check checkArrayLeng",function () {
		expect(checkArrayLeng(3)([2,3,4])).toEqual([2,3,4]);
		expect(checkArrayLeng(3)([2,4])).toEqual([]);
	})
});

describe("test:: construct parameters",function () {
	var actualResult = constructPattern([2,3],["first","last"]);
	var expectedResult = [{num:2,description:"first"},{num:3,description:"last"}];

	it("return not empty arry, if pass not empty array",function () {
		expect(actualResult).toEqual(expectedResult);
	})

	actualResult = constructPattern([],["first","last"]);
	expectedResult = [];
	it("return empty arra, if pass empty array",function () {
		expect(actualResult).toEqual(expectedResult);
	})

});

describe("test:: game",function () {
	var pattern = [
		{num:2,description:"first"},
		{num:3,description:"second"},
		{num:5,description:"last"}
	];
	it("test - rule 5 如果数字中包含了第一个特殊数，那么忽略规则3和规则4",function () {
		expect(processRule5(24,pattern[0])).toBe("first");		
	});

	it("test - processRule3or4",function () {
		expect(processRule3or4(36,pattern)).toBe("firstsecond");
		expect(processRule3or4(22,pattern)).toBe("first");
		expect(processRule3or4(31,pattern)).toBe(31);	
		expect(processRule3or4("test",pattern)).toBe("test");	
	});
})