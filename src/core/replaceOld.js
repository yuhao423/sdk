export function replaceOld(target,name,replacement,isForced){
    if(!target || target === undefined) return 
   if(name in target || isForced){
    let original = target[name]
    const wrapped = replacement(original)
    if(isForced || typeof wrapped === 'function'){
        target[name] = wrapped
    }
   }

}