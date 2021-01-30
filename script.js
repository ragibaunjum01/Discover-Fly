// getTicketInput function
function getTicketInput(category){
    const TicketInput = document.getElementById(category+'TicketCount');
    const TicketCount = parseInt(TicketInput.value);
    return TicketCount;
}

// calculateTotal function
function calculateTotal(){
    const firstClassTicketCount = getTicketInput('firstClass');

    const economyTicketCount = getTicketInput('economy');

    const subTotal = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subTotal').innerText = '$' + subTotal;

    const tax = subTotal * 0.1;
    document.getElementById('tax').innerText = '$' + tax;

    const grandTotal = subTotal + tax;
    document.getElementById('grandTotal').innerText = '$' + grandTotal;

    document.getElementById('confirmTicketAmount').innerText = '$' + grandTotal;
}

// ticketQuantityHandler function
function ticketQuantityHandler(category, isAdd){
    const TicketInput = document.getElementById(category+'TicketCount');
    const TicketCount = parseInt(TicketInput.value);
    let TicketNewCount = TicketCount;
    if(isAdd == true){
         TicketNewCount = TicketCount + 1;
    }
    if(isAdd == false && TicketCount > 0){
         TicketNewCount = TicketCount - 1;
    }
    TicketInput.value = TicketNewCount;
    document.getElementById(category+'TicketCount').innerText = TicketInput.value;

    calculateTotal();
}

// firstClassTicket EventListener
document.getElementById('addFirstClass').addEventListener('click',function(){
    ticketQuantityHandler('firstClass', true);
})
document.getElementById('removeFirstClass').addEventListener('click',function(){
    ticketQuantityHandler('firstClass', false);
})
// economyTicket EventListener
document.getElementById('addEconomy').addEventListener('click',function(){
    ticketQuantityHandler('economy', true);
})
document.getElementById('removeEconomy').addEventListener('click',function(){
    ticketQuantityHandler('economy', false);
})
// bookNowButton EventListener
document.getElementById('bookButton').addEventListener('click',function(){
    document.getElementById('booking').style.display = "none";
    document.getElementById('confirmation').style.display = "block";

    // confirmTicketCount EventListener
    const confirmTicketInput = document.getElementById('confirmTicketCount');
    const confirmNewTicketCount = parseInt(document.getElementById('firstClassTicketCount').value) + parseInt(document.getElementById('economyTicketCount').value);
    document.getElementById('confirmTicketCount').innerText = confirmNewTicketCount;

    // confirmTotalAmount EventListener
    calculateTotal();
})
function confirmationButtonHandler(button){
    if(button == 'confirm-btn'){
        document.getElementById('booking').style.display = "none";
        document.getElementById('confirmation').style.display = "none";
        document.getElementById('booked').style.display = "block";
    }
    else if(button == 'cancel-btn'){
        document.getElementById('booking').style.display = "block";
        document.getElementById('confirmation').style.display = "none";
        document.getElementById('booked').style.display = "none";
    }
}
// confirmButton EventListener
document.getElementById('confirm-btn').addEventListener('click',function(){
    // document.getElementById('booking').style.display = "none";
    // document.getElementById('confirmation').style.display = "none";
    // document.getElementById('booked').style.display = "block";
    confirmationButtonHandler('confirm-btn');
})
// cancelButton EventListener
document.getElementById('cancel-btn').addEventListener('click',function(){
    // document.getElementById('booking').style.display = "block";
    // document.getElementById('confirmation').style.display = "none";
    // document.getElementById('booked').style.display = "none";
    confirmationButtonHandler('cancel-btn')
})




