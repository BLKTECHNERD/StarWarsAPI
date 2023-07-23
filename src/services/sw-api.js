export async function getAllStarships() {
   try{const response = await fetch('https://swapi.dev/api/starships/');
   return response.json();} 
  catch(error){
    return[]
  }
}
  