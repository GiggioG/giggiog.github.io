function min(...args){
    if(args.length <= 0){ return null; }
    let mn = args[0];
    args.forEach(e=>{
        if(e < mn){
            mn = e;
        }
    });
    return mn;
}

function max(...args){
    if(args.length <= 0){ return null; }
    let mx = args[0];
    args.forEach(e=>{
        if(e > mx){
            mx = e;
        }
    });
    return mx;
}