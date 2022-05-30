// On clicking remove button the item should be removed from DOM as well as localstorage.

main()
function main()
{
    var coffee=JSON.parse(localStorage.getItem("coffee"))||[]

    append(coffee)
}

function append(data) {
    var container = document.querySelector("#bucket")
    container.innerHTML = null
    var total=0

    data.forEach(function (ele,index) {
        var div = document.createElement("div")

        var image = document.createElement("img")
        image.src = ele.image

        var name = document.createElement("p")
        name.innerText = ele.title

        var price = document.createElement("p")
        price.innerText = ele.price

        var btn = document.createElement("button")
        btn.innerText = "remove coffee"
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click",function()
        {
            removecoffee(ele,index)
        })

         total=total+ele.price
        
        div.append(image, name, price, btn)
        container.append(div)
    })

    document.querySelector("#total_amount").innerText=total
}

function removecoffee(ele,index)
{
    event.preventDefault()
    var coffee=JSON.parse(localStorage.getItem("coffee"))||[]

    coffee.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(coffee))
    append(coffee)

}