
describe('payments tests', () => {
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

    beforeEach(() => {
        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt');

        billAmtInput.value = 100;
        tipAmtInput.value = 25;
    });

    it('Should add a curpayment object to the allPayments object', function(){

        submitPaymentInfo();

        expect(+allPayments.payment1.billAmt).toEqual(100);
        expect(+allPayments.payment1.tipAmt).toEqual(25);

    
    });

    it ('should create curpayment object with correct amounts', () => {
        expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '25', tipPercent: 25});

    });

    it ('should append the correct row to the table', () => {

        submitPaymentInfo();

        expect(document.getElementById("payment1").innerHTML).toBe("<td>$100</td><td>$25</td><td>25%</td>");
    });

    it ('should update the shift summary to the correct values', () => {
        submitPaymentInfo();
        const sumTable = document.getElementById("sumTable");

        expect(sumTable.querySelectorAll("TD")[0].innerText).toBe('$100');
        expect(sumTable.querySelectorAll("TD")[1].innerText).toBe('$25');
        expect(sumTable.querySelectorAll("TD")[2].innerText).toBe('25%');

    });


});