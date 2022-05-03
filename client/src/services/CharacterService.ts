export async function getAllCharacters(){
    try {
        const response = await fetch("http://localhost:9000/characters");
        return await response.json();
    } catch (error) {
        return []
    }
}