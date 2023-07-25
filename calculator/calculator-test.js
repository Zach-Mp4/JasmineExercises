
it('should calculate the monthly rate correctly', function () {
  expect(+calculateMonthlyPayment({amount: 10000, years: 6, rate: 3})).toEqual(151.94);
});


it("should return a result with 2 decimal places", function() {
  expect(+calculateMonthlyPayment({amount: 10000, years: 6, rate: 3})).toMatch(/^\d+\.\d\d$/);
});

/// etc
