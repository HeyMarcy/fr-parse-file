const asciiParser = str => {
    let faceCount = []
    let name = ''

    if (typeof str !== 'string') {
        str = str.toString()
    }
    var lines = str.split('\n')

    for (var i = 0; i < lines.length; i++) {
        var parts = lines[i]
            .trim()
            .split(' ')
            .filter(function(part) {
                return part !== ''
            })

        switch (parts[0]) {
            case 'solid':
                name = parts.slice(1).join(' ')
                break
            case 'facet':
                var normal = parts.slice(2).map(Number)
                faceCount.push(normal)
                break

            default:
            // skip
        }
    }
    return {
        faceCount: faceCount.length,
        name: name,
    }
}

export default asciiParser
