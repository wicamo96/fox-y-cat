fetch('https://randomfox.ca/floof')
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src = convertedData.image
        }
    )

// Can be done without defining a function. Same functionality if you remove lines 11 and 17-19
const getTheCat = async () => {
    const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    const convertedData = await response.json()

    const catImgElement = document.querySelector("#cat")
    catImgElement.src = convertedData[0]
}

getTheCat()