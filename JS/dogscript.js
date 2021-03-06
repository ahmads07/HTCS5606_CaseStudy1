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
        case "addPedigree":
            qty = document.getElementById("pedigreeQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Pedigree: <input type="number" class="cartInput" id = "cartPedigree" pName = "Pedigree" price="3.2" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.2)
                    + '</p>');
            break;
        case "addPurina":
            qty = document.getElementById("purinaQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Purina: <input type="number" class="cartInput" id = "cartPurina" pName = "Purina" price="2.9" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.9)
                    + '</p>');
            break;
        case "addMydog":
            qty = document.getElementById("mydogQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>My Dog: <input type="number" class="cartInput" id = "cartMydog" pName = "MyDog" price="9" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 9)
                    + '</p>');
            break;
        case "addHills":
            qty = document.getElementById("hillsQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Hills: <input type="number" class="cartInput" id = "cartHills" pName = "Hills" price="4.5" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 4.5)
                    + '</p>');
            break;
        case "addIams":
            qty = document.getElementById("iamsQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Iams: <input type="number" class="cartInput" id = "cartIams" pName = "Iams" price="2.32" value="'
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
                case "cartPedigree":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Pedigree: Qty:'+ qty +' Price:$' + (Number(qty) * 3.2)+ '</p>');
                    Total += (Number(qty) * 3.2);
                    break;
                case "cartPurina":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Purina: Qty:'+ qty +' Price:$' + (Number(qty) * 2.9)+ '</p>');
                    Total += (Number(qty) * 2.9);
                    break;
                case "cartMydog":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">My Dog: Qty:'+ qty +' Price:$' + (Number(qty) * 9)+ '</p>');
                    Total += (Number(qty) * 9);
                    break;
                case "cartHills":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Hills: Qty:'+ qty +' Price:$' + (Number(qty) * 4.5)+ '</p>');
                    Total += (Number(qty) * 4.5);
                    break;
                case "cartIams":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Iams: Qty:'+ qty +' Price:$' + (Number(qty) * 2.32)+ '</p>');
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