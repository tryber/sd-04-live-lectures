const ISS_BASE_API = 'http://api.open-notify.org';

export const getCurrentISSLocation = () => (
  fetch(`${ISS_BASE_API}/iss-now.json`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);


// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => next => action => {
//     if (typeof action === 'function') {
//       // se for assincrono executa a funcao
//       return action(dispatch, getState, extraArgument);
//     }

//     return next(action);
//     // Joga pro reducer ja que nao é assincrono
//   };
// }
