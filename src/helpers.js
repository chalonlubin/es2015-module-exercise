
/** Returns a randomly selected item from array of items */

function choice(items) {

 return  items[Math.floor(Math.random()*items.length)]
}


/** Removes the first matching item from items,
 *  if item exists, and returns it.
 *
 *  Otherwise returns undefined.
 * */

function remove(items, item) {

  const idx = items.indexOf(item);

  return (idx === -1) ? undefined : items.splice(idx,1)[0]

}

export { choice, remove }