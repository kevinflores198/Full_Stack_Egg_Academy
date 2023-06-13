export const API_RM = {

    //base
    URL: "https://rickandmortyapi.com/api",


    //personajes
    CHARACTERS: function () {
        return `${this.URL}/character`
    },

    //personaje por id
    CHARACTER_BY_ID : function () {
        return `${this.URL}/character/${id}`
    }
}