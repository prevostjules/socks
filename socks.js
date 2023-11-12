function calculateNumberOfSocksToPack (cleanSocks, dirtySocks, k) {
    let socksPairsToPackCount = 0
    const cleanSocksByColor = {}

    cleanSocks.forEach((sock) => {
        if(cleanSocksByColor[sock] === undefined) {
            cleanSocksByColor[sock] = 1
        } else if (cleanSocksByColor[sock] === 1) {
            socksPairsToPackCount += 1
            delete cleanSocksByColor[sock]
        }
    })

    const dirtySocksByColor = {}
    let socksToWash = 0

    for(let i = 0; i < dirtySocks.length && socksToWash < k; i++) {
        if(cleanSocksByColor[dirtySocks[i]] === undefined) {
            if(dirtySocksByColor[dirtySocks[i]] === undefined) {
                dirtySocksByColor[dirtySocks[i]] = 1
            } else {
                dirtySocksByColor[dirtySocks[i]] += 1
            }
        } else if(cleanSocksByColor[dirtySocks[i]] === 1) {
            socksToWash += 1
            socksPairsToPackCount += 1
        }
    }

    for (const [key, value] of Object.entries(dirtySocksByColor)) {
        if(socksToWash === k - 1 || socksToWash === k) {
            break;
        }
        if(value % 2 === 0) {
            socksToWash += value / 2
            socksPairsToPackCount += value / 2
        }
    }

    return socksPairsToPackCount
}

const cleanSocks = ['red', 'blue', 'blue', 'yellow']
const dirtySocks = ['red', 'orange', 'orange', 'blue', 'blue']
const k = 20
console.log(calculateNumberOfSocksToPack(cleanSocks, dirtySocks, k))
