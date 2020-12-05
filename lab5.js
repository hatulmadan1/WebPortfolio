var array = [];
for (var i = 0; i < 11; i++) {
    var num = Math.round(Math.random() * 100);
    array.push(num);
}
console.log(array);

function arrayMax(ar) {
    var maxVal = -Infinity;
    ar.forEach(element => {
        maxVal = Math.max(maxVal, element);
    });
    return maxVal;
}

function arrayMin(ar) {
    var minVal = Infinity;
    ar.forEach(element => {
        minVal = Math.min(minVal, element);
    });
    return minVal;
}

function arrayMed(ar) {
    ar = ar.sort(function(a, b){ return a - b; });
    var i = ar.length / 2;
    return i % 1 == 0 ? (ar[i - 1] + ar[i]) / 2 : ar[Math.floor(i)];
}

console.log('Max: ' + arrayMax(array));
console.log('Min: ' + arrayMin(array));
console.log('Median: ' + arrayMed(array));

function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

console.log(quickSort(array, 0, array.length - 1));

var tagList = Array.from(document.querySelectorAll('*'), x => x.nodeName);

var uniqueTags = tagList.filter(function(item, pos) {
    return tagList.indexOf(item) == pos;
});

uniqueTags.forEach(element => {
    var count = document.querySelectorAll(element).length;
    console.log('' + element + ' ' + count);
});