const changeTextByRandomInterval = (payload: { array: Array<string>}) => {
    const index = Math.floor(Math.random() * (payload.array.length - 0 + 1)) + 0;
    return payload.array[index]
}

export {changeTextByRandomInterval}