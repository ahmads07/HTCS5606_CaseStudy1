function moveAd() {
    left = 0;
    setInterval(function() {
        image = document.getElementById("sideImage");
        image.style.left = left + "px";
        left--;
        if (left == -400) {
            left = 0;
        }
    }, 50);
}

function moveText() {
    top1 = -400;
    textNo = 1;
    setInterval(function() {
        if (textNo == 1) {
            text = document.getElementById("text1");
            text.style.display = "inline";
            text.style.top = top1 + "px";
            top1++;
            if (top1 == -100) {
                textNo = 2;
                top1 = -400;
                text.style.display = "none";
            }
        } else {
            text = document.getElementById("text2");
            text.style.display = "inline";
            text.style.top = top1 + "px";
            top1++;
            if (top1 == -100) {
                textNo = 1;
                top1 = -400;
                text.style.display = "none";
            }
        }

    }, 50);
}

function addToCart(e) {
    cart = document.getElementById("cartDiv");
    switch (e.id) {
        case "addZupreem":
            qty = document.getElementById("zupreemQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Zupreem: <input type="number" class="cartInput" id = "cartZupreem" pName = "Zupreem" price="3.2" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.2)
                    + '</p>');
            break;
        case "addHarrison":
            qty = document.getElementById("harrisonQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Harrison: <input type="number" class="cartInput" id = "cartHarrison" pName = "Harrison" price="2.9" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.9)
                    + '</p>');
            break;
        case "addRoudybush":
            qty = document.getElementById("roudybushQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>RoudyBush: <input type="number" class="cartInput" id = "cartRoudybush" pName = "RoudyBush" price="9" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 9)
                    + '</p>');
            break;
        case "addKiki":
            qty = document.getElementById("kikiQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Kiki: <input type="number" class="cartInput" id = "cartKiki" pName = "Kiki" price="4.5" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 4.5)
                    + '</p>');
            break;
        case "addRaff":
            qty = document.getElementById("raffQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Raff: <input type="number" class="cartInput" id = "cartRaff" pName = "Raff" price="2.32" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.32)
                    + '</p>');
            break;
        default:
        // code block
    }

}

function addToInvoice() {

}

/**
 * Show invoice page
 */
function invoice() {

    voicePage = document.getElementById("voicePage");
    //Get the button that opens the modal
    var btn = document.getElementById("showInvoiceBut");

    //Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //When the user clicks on the button, open the modal
    btn.onclick = function() {
        cart = document.getElementsByClassName("cartInput");
        voiceContent = document.getElementById("voice-content");
        Total = 0;
        var elems = document.getElementsByClassName("items");
        i = 0
        while (i<elems.length){
            elems[i].parentNode.removeChild(elems[i]);
        }


        i = 0;
        while (i < cart.length) {
            console.log(cart[i].id);
            qty = cart[i].value;
            switch (cart[i].id) {
                case "cartZupreem":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Zupreem: Qty:'+ qty +' Price:$' + (Number(qty) * 3.2)+ '</p>');
                    Total += (Number(qty) * 3.2);
                    break;
                case "cartHarrison":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Harrison: Qty:'+ qty +' Price:$' + (Number(qty) * 2.9)+ '</p>');
                    Total += (Number(qty) * 2.9);
                    break;
                case "cartRoudybush":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Roudybush: Qty:'+ qty +' Price:$' + (Number(qty) * 9)+ '</p>');
                    Total += (Number(qty) * 9);
                    break;
                case "cartKiki":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Kiki: Qty:'+ qty +' Price:$' + (Number(qty) * 4.5)+ '</p>');
                    Total += (Number(qty) * 4.5);
                    break;
                case "cartRaff":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Raff: Qty:'+ qty +' Price:$' + (Number(qty) * 2.32)+ '</p>');
                    Total += (Number(qty) * 2.32);
                    break;
                default:
                // code block
            }

            i++;

        }
        voiceContent.insertAdjacentHTML(
            'beforeend',
            '<p class = "items">Total: $'+ Total+'</p>');

        voicePage.style.display = "block";
    }

    //When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        voicePage.style.display = "none";
    }

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == voicePage) {
            voicePage.style.display = "none";
        }
    }
}