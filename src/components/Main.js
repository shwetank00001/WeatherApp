import React from 'react'

const Main = () => {

    const [city,setCity] = React.useState("")

    const [api, setApi] = React.useState()

    React.useEffect(function(){
        fetch(`http://api.weatherapi.com/v1/current.json?key=03c07ebfbe52409692a60044232702&q=${city}&aqi=no`)
        .then(function(res){
            return(res.json())
        })

        .then(item => setApi(item))
    },[city])


    return (
        <div>
            <input placeholder='Search a place...' type='text' value={city} onChange={event => setCity(event.target.value)} />
            <button>Search</button>
            <pre>{JSON.stringify(api,null,3)}</pre>
        </div>
    )
}

export default Main