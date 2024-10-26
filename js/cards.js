const menuCards = document.querySelector('.cards-map')

const asyncData = async () => {
    try{
        const response = await fetch(' https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(element => {
            const card = document.createElement('div')
            card.innerHTML = `
                <div>${element.title}</div>
            `
            menuCards.append(card)
        });

    }catch(e){
        console.error(e);
        
    }
}
asyncData()