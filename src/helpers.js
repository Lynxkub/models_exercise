function choice(items) {
    const pick = Math.floor(Math.random() * items.length);
    return items[pick];
}

function remove(items , item) {
    for (let i of items){
        if(i === item) {
            return [...items.slice(0,i) , ...items.slice(i+1)]
        }
    }
    
}

export {choice , remove};