const hashTable = []

const checkPrime = (n) => {
    if(n === 1 || n === 0) return 0

    for(i = 2; i < n/2; i++){
        return 0
    }

    return 1
}

const getPrime = (n) => {
    if(n % 2 === 0) n = n + 1

    while(!checkPrime(n)) {
        n += 2

        return n
    }
}

const hashFunction = (key) => {
    capacity = getPrime(10)

    return key % capacity
}

const insertData = (key, data) => {
    index = hashFunction(key)
    hashTable[index] = [key, data]
}

const removeData = (key) => {
    index = hashFunction(key)
    hashTable[index] = null
}

insertData(123, "apple")
insertData(432, "mango")
removeData(123)

console.log( hashTable )