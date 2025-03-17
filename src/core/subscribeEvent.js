

export const handlers = {}

export function subscribeEvent(handler ) {
//   if (!handler || getFlag(handler.type)) return false
//   setFlag(handler.type, true)
  handlers[handler.type] = handlers[handler.type] || []
  handlers[handler.type].push(handler.callback)
  return true
}