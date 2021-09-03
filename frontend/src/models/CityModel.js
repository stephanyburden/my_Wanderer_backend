const url = "http://localhost:4000/api/city"
class CityModel{
    static all(){
        return fetch(url)
            .then((response)=>{
                return response.json()
            })
            .catch((err)=>{
                console.log(err)
            })
    }

}
export default CityModel