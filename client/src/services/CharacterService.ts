export async function getAllCharacters(page:number){
    try {
        const response = await fetch(`http://localhost:9000/characters?page=${page}`);
        return await response.json();
    } catch (error) {
        return []
    }
}