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
                // checks to see if file has a name.
                var isName = parts.slice(1).join(' ')
                if (!/^[A-Za-z0-9]+$/.test(isName)) {
                    name = 'Untitled'
                } else {
                    name = isName
                }
                break
            case 'facet':
                var normal = parts.slice(2).map(Number)
                faceCount.push(normal)
                break

            default:
            // skip for now
        }
    }
    return {
        faceCount: faceCount.length,
        name: name,
    }
}

export default asciiParser
