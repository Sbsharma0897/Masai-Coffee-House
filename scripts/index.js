// Add the coffee to local storage with key "coffee"

main()

async function main() {

    count()

    var res = getdata()

    var data = await res
    console.log(data)
    append(data)

}


async function getdata() {
    try {
        const url = `https://masai-mock-api.herokuapp.com/coffee/menu`

        let res = await fetch(url)

        let data = await res.json()



        return data.menu.data
    }
    catch (error) {
        console.log(error)
    }


}

function append(data) {
    var container = document.querySelector("#menu")
    container.innerHTML = null

    data.forEach(function (ele) {
        var div = document.createElement("div")

        var image = document.createElement("img")
        image.src = ele.image

        var name = document.createElement("p")
        name.innerText = ele.title

        var price = document.createElement("p")
        price.innerText = ele.price

        var btn = document.createElement("button")
        btn.innerText = "Add to Cart"
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click",function()
        {
            addcoffee(ele)
        })
        


        div.append(image, name, price, btn)
        container.append(div)


    })
}

function count()
{
    var array=JSON.parse(localStorage.getItem("coffee"))||[]
    document.querySelector("#coffee_count").innerText=array.length

}

function addcoffee(ele)
{
    var bucket=JSON.parse(localStorage.getItem("coffee"))||[]

    bucket.push(ele)
    localStorage.setItem("coffee",JSON.stringify(bucket))
    count()

}