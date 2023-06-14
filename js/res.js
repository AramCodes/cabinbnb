const properties = [
    {   id: 1,
        name: "Whispering Willows",
        desc: "This charming former schoolhouse from the mid-19th century has a separate sleeping cabin and bathroom just big enough for two people. There's a nice stone fireplace, vintage furniture, antique accent pieces, framed art, plus a large bucolic yard.",
        price: 214,
        image: "images/cabin1.jpg"
    },
    {   id: 2,
        name: "Slumbering Willows",
        desc: "Dubbed Slumbering Willows Cabin, the home has timber walls, cathedral ceilings, a rock fireplace, and skylights for natural light. A King-size bedroom is a treat, and modern touches include contemporary light fixtures, and midcentury furnishings.",
        price: 254,
        image: "images/cabin2.jpg" 
    },
    {   id: 3,
        name: "Whispering Meadows",
        desc: "A tiny house seems tailor-made for a Catskills getaway, and this sweet home feels especially idyllic. It's situated mere steps from a pond, wild mountain stream, and waterfall. Bring your pup to this pet-friendly CabinBnB and warm up by the antique wooden stove.",
        price: 467,
        image: "images/cabin6.avif" 
    },
    {   id: 4,
        name: "Slumbering Hollows",
        desc: "This CabinBnB also brings star power; it was featured on Netflix's \"Stay Here\" home renovation show. The studio space is a cornucopia of eclectic design, bold prints on pillows and throws with rustic mountain-inspired pieces like a farmhouse rocking chair.",
        price: 244,
        image: "images/cabin4.avif" 
    },
    {   id: 5,
        name: "Dancing Meadows",
        desc: "This cabin has everything you're likely to hope for when picturing a log home: a classic mahogany exterior, rich wood walls, beamed ceilings, and knotted pine fixtures. There's so much wood in fact, that a few white walls almost look misplaced.",
        price: 467,
        image: "images/cabin5.avif"
    },
    {   id: 6,
        name: "Sleeping Tranquility",
        desc: "Located on a compound of similar standalone cabins that may also be rented, this rural spot comes with excellent views of the Catskill mountains.Decorated in calming neutrals, the space features a sitting area with a couch, large windows, a mini-fridge, and a coffee machine.",
        price: 126,
        image: "images/cabin3.jpg"
    },
    {   id: 7,
        name: "Wintering Willows",
        desc: "This renovated 1920s fishing cottage on a creek has been reimagined as a dreamy modern getaway while maintaining original elements such as beautiful wood floors and a river rock fireplace. The towns of Phoenicia and Woodstock are close by.",
        price: 214,
        image: "images/cabin7.avif"
    },
    {   id: 8,
        name: "Slumbering Lakes",
        desc: "Nestled among towering pine trees on a one-acre property in the hamlet of Germantown, this cabin packs plenty of character starting with a bright red door that pops against the white exterior. Ideal for a couple or a solo traveler, this space is perfect for lake fishing.",
        price: 467,
        image: "images/cabin8.avif"

    },
    {   id: 9,
        name: "Winter's Landing",
        desc: "This studio is no-frills, perfect for the outdoor enthusiast who wants to disconnect in order to reconnect. There is a Queen-size bed, a gas stove to keep warm in winter, coffee maker, tea kettle, and organic coffee and tea are provided. Each cabin has an environmentally conscious bathroom with a walk-in shower and hot tub.",
        price: 159,
        image: "images/cabin9.avif"
    },
    {   id: 10,
        name: "Independence Rest Lakes",
        desc: "Unplug in this spacious home nestled within lush Catskills foliage. If you do manage to venture out, you'll find hiking trails and a hammock outside the doorstep. There are two bedrooms, each with a Queen-size bed, and two bathrooms with standup showers. When it's time to eat, make a meal in the well-equipped kitchen with a dishwasher.",
        price: 609,
        image: "images/cabin10.avif"
    },
    {   id: 11,
        name: "The Bourbon Hut",
        desc: "Situated on Papillon Lake, this octagon-shaped house is located near skiing in the winter, swimming and kayaking in the summer, and surrounded by sure-to-impress foliage in the fall. This CabinBnB is not called \"The Bourbon Hut\" for no reason comes stocked with 2 bottle of seasonal bourbon.",
        price: 467,
        image: "images/cabin11.avif"

    },
    {   id: 12,
        name: "Royal Magic Cottage",
        desc: "Great for families and groups, this CabinBnB cabin has 3 bedrooms and is located on 2.5 acres with spectacular views of nearby Hunter Mountain. It's also guaranteed to be a secluded stay since the closest neighbor is about a quarter-mile away. The house has two large decks, a wood-burning stove, a full kitchen, and a hot tub.",
        price: 314, 
        image: "images/cabin12.avif"
    }
]

//dropdown select and value
const propertySelect = document.getElementById("propertySelect");


//reservation image 
const reservationImage = document.getElementById("reservationImage");

//amount of days and value
const daySelect = document.getElementById("days");
const amountOfDays = daySelect.value;

//Total
let total = document.getElementById("dynamic");


//description
const descriptionSentence = document.querySelector(".descriptions");

//Info div to disappear if total is equal to falsy value
const info = document.getElementById("info");

//listens for change to select property and changes elements based on users selection

function handleSelect(ev){

    let propertySelection = ev.target.value;

    //console.log(propertySelection.value)
    switch(propertySelection) {
        case "Whispering Willows":
          reservationImage.src = properties[0].image;
          total.textContent = properties[0].price;
          descriptionSentence.textContent = properties[0].desc;
        break;

        case "Slumbering Willows":
          reservationImage.src = properties[1].image;
          total.textContent = properties[1].price;
          descriptionSentence.textContent = properties[1].desc;
        break;

        case "Whispering Meadows":
          reservationImage.src = properties[2].image;
          total.textContent = properties[2].price;
          descriptionSentence.textContent = properties[2].desc;
        break;

        case "Slumbering Hollows":
          reservationImage.src = properties[3].image;
          total.textContent = properties[3].price;
          descriptionSentence.textContent = properties[3].desc;
        break;

        case "Dancing Meadows":
          reservationImage.src = properties[4].image;
          total.textContent = properties[4].price;
          descriptionSentence.textContent = properties[4].desc;
        break;

        case "Sleeping Tranquility":
          reservationImage.src = properties[5].image;
          total.textContent = properties[5].price;
          descriptionSentence.textContent = properties[5].desc;
        break;

        case "Wintering Willows":
          reservationImage.src = properties[6].image;
          total.textContent = properties[6].price;
          descriptionSentence.textContent = properties[6].desc;
        break;

        case "Slumbering Lakes":
          reservationImage.src = properties[7].image;
          total.textContent = properties[7].price;
          descriptionSentence.textContent = properties[7].desc;
        break;

        case "Winter's Landing":
          reservationImage.src = properties[8].image;
          total.textContent = properties[8].price;
          descriptionSentence.textContent = properties[8].desc;
        break;

        case "Independence Rest Lakes":
          reservationImage.src = properties[9].image;
          total.textContent = properties[9].price;
          descriptionSentence.textContent = properties[9].desc;
        break;

        case "The Bourbon Hut":
          reservationImage.src = properties[10].image;
          total.textContent = properties[10].price;
          descriptionSentence.textContent = properties[10].desc;
        break;

        case "Royal Magic Cottage":
          reservationImage.src = properties[11].image;
          total.textContent = properties[11].price;
          descriptionSentence.textContent = properties[11].desc;
        break;

    }    
}

//listens for change in day and readjust total accordingly

propertySelect.addEventListener("input", handleSelect )

