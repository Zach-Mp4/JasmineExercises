describe('for helpers tests', () => {
    afterEach(() => {
        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt');

        billAmtInput.value = '';
        tipAmtInput.value = '';

        allPayments = {};
        document.getElementById("billTable").innerHTML = '';
        updateSummary();
        paymentId = 0;
    });

    it ('should properly calculate the total for the given value', () => {
        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt');

        billAmtInput.value = 100;
        tipAmtInput.value = 25;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(25);
    });

    it ('should properly convert the tip amount and bill amount into a percent', () => {
        expect(calculateTipPercent(100, 25)).toEqual(25);
        expect(calculateTipPercent(168, 32)).toEqual(19);
    });

    it ('should append a td to the tr given correctly', () => {
        const newTr = document.createElement('tr');

        appendTd(newTr, 400);

        expect(newTr.querySelector('TD').innerText).toBe('400');
    });
});