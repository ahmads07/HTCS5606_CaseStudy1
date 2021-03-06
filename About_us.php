<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Us</title>
    <link rel="stylesheet" href="CSS/style.css">
    <script src="JS/script.js"></script>
</head>
<body onload="moveAd(), moveText(), invoice()">

<?php
include_once "header.php";
?>

<div id = "header">
    <img src="Image/pets-min.jpg">
    <div id="logo"><span id = "logoText"><strong><u>Pet Zone</u></strong></span></div>
</div>
<div id = "nav">
    <ul>
        <li><a href="index.php" >Home</a></li>
        <li><a href="Cat_Food.html">Cat</a></li>
        <li><a href="Dog_Food.html">Dog</a></li>
        <li><a href="Bird.html">Bird</a></li>
        <li><a href="Other_Pet.html">Pet Other</a></li>
        <li><a href="About_us.php">About us</a></li>
    </ul>
</div>
<div id = "Main">
    <table id = "maintable">
        <tr>
            <td id="leftside">
                <div id ="sideAdv">
                    <img src="Image/pets-mix.png" id="sideImage" height="500" width="200">
                    <p id = "text1"><strong>Pet Food</strong></p>
                    <p id = "text2"><strong>For the love of pets</strong></p>
                </div>
            </td>
            <td id="middlecontent">

                <h1>We are as passionate and excited about pet food like the pet themselves</h1>

                <p>We’ve dedicated ourselves to creating an awesome experience for people and their pets; to provide our customers with everything they need to become great pet parents, whether it is products; services and advice that they need. It’s what has made Pet Zone, New Zealand’s leading pet food retailer.</p>

                <p>To make your shopping experience easy and enjoyable, we’ve employed pet passionate staff and trained them to assist you in caring for your pet. You’ll find all your favourite brands both online and in store. Pet parents will find everything they need for their pets – high-quality food, animal medicines, flea treatments, fun and educational toys, kennels, hutches, cages & tanks, dog and cat grooming products, pet health supplements, pet shampoos and conditioners, and loads of good advice.</p>

                <p>In our eyes, the world is a better place with animals and the welfare of ALL animals is our top priority and so at Pet Zone, we pride ourselves on the commitment we’ve made to pets by actively supporting animal rescue charity pet adoptions and also helping those pets with special needs through the Pet Zone Angels initiative</p>

                <h2>Our Goal</h2>

                <p>We are passionate about providing the best pet supplies, pet products, pet care, advice and services for pets at our stores across New Zealand. Including dogs, puppies, cats, kittens, fish, birds, reptiles, rabbits and other small pets!</p>

                <p>We want to nourish and nurture your beloved pets with best brands of natural pet food manufactured to the highest standard in New Zealand. Our furry family deserve the very best.</p>

                <p>We provide peace of mind. You will never run out of pet food. They will be delivered on nominated days. You’ll have more time do things that matter to you and not in supermarkets and pet stores or lifting and carrying bags and boxes. We’ll do those for you. Also, as there is no contract you can chop and change brands, delivery date and intervals that suits you.</p>

                <p>We deliver your order on the same day, even in weekends, if your order is received by 1pm. At this stage same day delivery is only available for Auckland customers.</p>

                <h3>Career</h3>

                <p>We are a young and growing company. As we grow we need passionate people, people with drive, determination, courage and make-it-happen attitude. If you are one these people then we’d like to hear from you. Your CVs will be stored and as role arise you’ll be the first one we’ll get in touch with.</p>

            </td>

        </tr>
    </table>
</div>

<!-- The Voice Page -->
<div id="voicePage" class="voice">

    <!-- Modal content -->
    <div id="voice-content">
        <span class="close">&times;</span>
        <p>Please check your invoice</p>
    </div>

</div>

<?php
include_once "header.php";
?>

</body>
</html>