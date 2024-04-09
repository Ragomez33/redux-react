export const logger = (store) => (next) => (action) => {
  console.log("🚀 ~ logger ~ action:", action)
  next(action);
}
// Esta es una funcion que retorna otra funcion

// export const featuring = (store) => next => (actionInfo) => {
//   const featured = [{ name: 'eddie' }, ...actionInfo.action.payload]
//   const newAction = {
//     ...actionInfo,
//     action: { ...actionInfo.action, payload: featured }
//   };
//   next(newAction)
// }
