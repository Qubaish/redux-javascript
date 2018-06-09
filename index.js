// Lib Code

function createStore(reducer){
	
	let state;
	let listerners = [];

	const getState = () => state;

	const subscribe = (listerner) => {
		listerners.push(listerner)
		return () => {
			listerners = listerners.filter((l) => l !== listerner)
		}
	}

	const dispatch = (action) => {
		let state = reducer(state, action)
		listerners.forEach((listerner) => listerner())
	}

	return {
		getState,
		subscribe,
		dispatch
	} 
}

// Constants

const ADD_TODO = 'ADD_TODO';

// Reducer

const todos = (state = [], action) => {
	switch(state.type){
		case ADD_TODO:
			return state.concat([action.todo])
	}
}

cons addTodoAction = (todo) => {
	return {
		type: ADD_TODO,
		todo
	}
}
