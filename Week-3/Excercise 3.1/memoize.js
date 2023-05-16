function add(a,b){
    return a+b;
}

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        console.log(args)
        if(cache.has(args.toString())) {
            return cache.get(args.toString())
        }
        cache.set(args.toString(),fn(...args));
        return cache.get(args.toString());
    }
}


function computeTime(fn) {
    console.time();
    console.log(fn());
    console.timeEnd();
}

const addMemoised = memoize(add);
computeTime(()=>addMemoised(84934264264626,1414414414414));
computeTime(()=>addMemoised(84934264264626));
computeTime(()=>addMemoised(84934264264626,1414414414414));