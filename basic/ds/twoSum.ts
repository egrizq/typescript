function twoSum(list: number[], target: number): number[] {
    for (let i=0; i < list.length; i++) {
        for (let i2=1; i < list.length; i2++) {
            if (list[i] + list[i2] === target) {
                return [i, i2];
            }
        }
    }
    return []
}

const list: number[] = [2, 7, 11, 15]
console.log(twoSum(list, 9))