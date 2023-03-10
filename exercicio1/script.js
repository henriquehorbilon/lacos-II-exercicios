const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

    for (let temporadas in array){
        temporadas = Number(temporadas)
        gols = [array[temporadas]]

        console.log(`Jogador ${temporadas + 1}: ${gols}`)
    }