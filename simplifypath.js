//Objective is to simplify an absolute path to a canonical path

let path = "/a/./b/../../c/"


//O(n) solution where n is the length of the path
//We use a stack to keep track of only valid elements

let stack = []
let skipElements = ['..', '.', '']
let skip = new Set(skipElements)

for (let dir of path.split('/')) {

    //We move up a level, so pop out of most recent directory
    if (stack.length > 0 && dir == '..') {
        stack.pop()
    //As long as the directory isn't a '.' or empty, we go into the path
    } else if (!skip.has(dir)) {
        stack.push(dir)
    }
}

let result = ''
for (let dir of stack) {
    
    //No '/' at end of result
    result += '/' + dir
}

return result.length > 0 ? result : '/' 