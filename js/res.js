const swiper = new Swiper('.swiper', {
  
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const properties = [
    {   id: 0,
        name: "Whispering Willows",
        desc: "This charming former schoolhouse from the mid-19th century has a separate sleeping cabin and bathroom just big enough for two people. There's a nice stone fireplace, vintage furniture, antique accent pieces, framed art, plus a large bucolic yard.",
        price: 214,
        image: "images/cabin1.jpg",
        quantity: 0,
        inventory: 5
    },
    {   id: 1,
        name: "Slumbering Willows",
        desc: "Dubbed Slumbering Willows Cabin, the home has timber walls, cathedral ceilings, a rock fireplace, and skylights for natural light. A King-size bedroom is a treat, and modern touches include contemporary light fixtures, and midcentury furnishings.",
        price: 254,
        image: "images/cabin2.jpg",
        quantity: 0,
        inventory: 100
    },
    {   id: 2,
        name: "Whispering Meadows",
        desc: "A tiny house seems tailor-made for a Catskills getaway, and this sweet home feels especially idyllic. It's situated mere steps from a pond, wild mountain stream, and waterfall. Bring your pup to this pet-friendly CabinBnB and warm up by the antique wooden stove.",
        price: 467,
        image: "images/cabin6.avif", 
        quantity: 0,
        inventory: 2
    },
    {   id: 3,
        name: "Slumbering Hollows",
        desc: "This CabinBnB also brings star power; it was featured on Netflix's \"Stay Here\" home renovation show. The studio space is a cornucopia of eclectic design, bold prints on pillows and throws with rustic mountain-inspired pieces like a farmhouse rocking chair.",
        price: 244,
        image: "images/cabin4.avif",
        quantity: 0,
        inventory: 3
    },
    {   id: 4,
        name: "Dancing Meadows",
        desc: "This cabin has everything you're likely to hope for when picturing a log home: a classic mahogany exterior, rich wood walls, beamed ceilings, and knotted pine fixtures. There's so much wood in fact, that a few white walls almost look misplaced.",
        price: 467,
        image: "images/cabin5.avif",
        quantity: 0,
        inventory:0
    },
    {   id: 5,
        name: "Sleeping Tranquility",
        desc: "Located on a compound of similar standalone cabins that may also be rented, this rural spot comes with excellent views of the Catskill mountains.Decorated in calming neutrals, the space features a sitting area with a couch, large windows, a mini-fridge, and a coffee machine.",
        price: 126,
        image: "images/cabin3.jpg",
        quantity: 0,
        inventory: 999
    },
    {   id: 6,
        name: "Wintering Willows",
        desc: "This renovated 1920s fishing cottage on a creek has been reimagined as a dreamy modern getaway while maintaining original elements such as beautiful wood floors and a river rock fireplace. The towns of Phoenicia and Woodstock are close by.",
        price: 214,
        image: "images/cabin7.avif",
        quantity: 0,
        inventory: 5
    },
    {   id: 7,
        name: "Slumbering Lakes",
        desc: "Nestled among towering pine trees on a one-acre property in the hamlet of Germantown, this cabin packs plenty of character starting with a bright red door that pops against the white exterior. Ideal for a couple or a solo traveler, this space is perfect for lake fishing.",
        price: 467,
        image: "images/cabin8.avif",
        quantity: 0,
        inventory: 3

    },
    {   id: 8,
        name: "Winter's Landing",
        desc: "This studio is no-frills, perfect for the outdoor enthusiast who wants to disconnect in order to reconnect. There is a Queen-size bed, a gas stove to keep warm in winter, coffee maker, tea kettle, and organic coffee and tea are provided. Each cabin has an environmentally conscious bathroom with a walk-in shower and hot tub.",
        price: 159,
        image: "images/cabin9.avif",
        quantity: 0,
        inventory: 30
    },
    {   id: 9,
        name: "Independence Rest Lakes",
        desc: "Unplug in this spacious home nestled within lush Catskills foliage. If you do manage to venture out, you'll find hiking trails and a hammock outside the doorstep. There are two bedrooms, each with a Queen-size bed, and two bathrooms with standup showers. When it's time to eat, make a meal in the well-equipped kitchen with a dishwasher.",
        price: 609,
        image: "images/cabin10.avif",
        quantity: 0,
        inventory:2
    },
    {   id: 10,
        name: "The Bourbon Hut",
        desc: "Situated on Papillon Lake, this octagon-shaped house is located near skiing in the winter, swimming and kayaking in the summer, and surrounded by sure-to-impress foliage in the fall. This CabinBnB is not called \"The Bourbon Hut\" for no reason comes stocked with 2 bottle of seasonal bourbon.",
        price: 467,
        image: "images/cabin11.avif",
        quantity: 0,
        inventory: 10


    },
    {   id: 11,
        name: "Royal Magic Cottage",
        desc: "Great for families and groups, this CabinBnB cabin has 3 bedrooms and is located on 2.5 acres with spectacular views of nearby Hunter Mountain. It's also guaranteed to be a secluded stay since the closest neighbor is about a quarter-mile away. The house has two large decks, a wood-burning stove, a full kitchen, and a hot tub.",
        price: 314, 
        image: "images/cabin12.avif",
        quantity: 0,
        inventory: 5
    }
]

let cart = [];

function increaseQuantity(productId) {
  const targetShoeObj = cart.filter(property => {
      return property.id === productId
  })[0]

  if(targetShoeObj.inventory >= targetShoeObj.quantity) {
      targetShoeObj.quantity += 1
      cartTotal()
  }
  else if (targetShoeObj.inventory === 0){
    alert("No more days for this property")
  }
}

const description = document.getElementById("description");
const days = document.getElementById("days");

function addProductToCart(productId){   
  const targetShoeObj = properties.filter(property => {
      return property.id === productId
    })[0]

  if (!cart.find(o => o.name === targetShoeObj.name)){
      cart.push(targetShoeObj)
      cartTotal()
  }  

  increaseQuantity(targetShoeObj.id);
  displayCart()
  description.textContent = targetShoeObj.desc
  days.textContent = `${targetShoeObj.quantity} days`
}

const totalDisplay = document.getElementById("cartTotal");
const cartTotalDisplay = document.getElementById("total");

function cartTotal() {
  let orderTotal = 0;
  
  cart.forEach(orderItem => {
      return orderTotal += orderItem.price * orderItem.quantity
  })

  totalDisplay.textContent = "Cart Total: $ " + orderTotal
  
  cartTotalDisplay.textContent = orderTotal

  return orderTotal
}

const payBtn = document.getElementById("payBtn")
const closeBtn = document.getElementById("closeBtn")
const overlay = document.getElementById("overlay")
const credit = document.getElementById("close")
const popUp = document.getElementById('popup')
const secondDisplay = document.getElementById('cartTotal1')

function openPopUp() {
  if (cart.length > 0) {
  popUp.classList.add("open-popup");
  overlay.classList.add('active')
  secondDisplay.innerHTML = `Customer's Total: $<strong>${cartTotal()}</strong>`
  }
}

function creditPay(e) {
  //input field values
  const name = document.getElementById('name').value
  const cardNumber = document.getElementById('cardNumber').value
  const cvv = document.getElementById('cvv').value

  if (name === "" || name.length < 3 ) {
    alert("You need to enter a name")
  }
  else if (cardNumber === "" || cardNumber.length < 15) {
    alert("You need to enter a valid card")
  }
  else if (cvv === "" || cvv.length < 3) {
    alert("You need to enter a valid cvv")
  }
  else {
    setTimeout( ()=> {
      close(e);
  }, 3000);

  //once modal is closed make message appear
  
  popUp.innerHTML = `<div class="message">Thanks, ${name}! Your Itenenaray will be emailed to you soon!</div>` //fix form name into message
  }

}

function close(e) {
  e.preventDefault()
  popUp.classList.remove("open-popup");
  overlay.classList.remove('active')
}

credit.addEventListener('click', creditPay)
payBtn.addEventListener('click', openPopUp)
closeBtn.addEventListener('click', close)

function displayCart(a) {
  let j = 0;

  if(cart.length === 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty"
  }
  else {
    document.getElementById('cartItem').innerHTML = cart.map((properties) =>
    {
        let {image, name, price, quantity} = properties;
        return (
          `<div class ='cart-item'>
           <div class ='row-img'>
            <img class='rowimg' src=${image}>
           </div>
           <p class='product-title'>${name}</p>
           <p class='product-days'>${quantity} day/s</p>
           <h2 class='product-price'>$ ${price}.00</h2>` +
           "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
        );
    }).join('')
  }
}

function delElement(a) {
  cart.splice(a,1)
  displayCart()
  cartTotal()
}