import React from 'react'
import TodoList from './components/TodoList'
import UserList from './components/UserList'

const App = () => {
	return (
		<div style={{ background: '#eee' }}>
			<UserList />
			<hr />
			<TodoList />
		</div>
	)
}

export default App

/* 

У кого ошибка на 22.30 в useEffect сделайте  dispatch(fetchUsers() as any)

Круто объясняешь, спасибо за уроки
Но столкнулся с проблемой при вызовe fetchUsers() в useEffect выдает ошибку 
(Аргумент типа "(dispatch: Dispatch<UserAction>) => Promise<void>" нельзя назначить параметру типа "AnyAction")
пока не нашел решения и вроде бы код прошерстил уже на наличие ошибок.

Проблема решилась после создания хука useActions


Если у кого появляется проблема в UserList при dispatch(fetchUsers()) пишет 
"TS2345: Argument of type '(dispatch: Dispatch ) => Promise ' is not assignable to parameter of type 'AnyAction." - 
просто добавьте в импорт import type {} from 'redux-thunk/extend-redux';
Это скорее всего связано с тем что в useDispatch v8 вы уже не можете 'диспатчить' что угодно(в отличии от v7)

Как упростить написание export type TodoAction =
  | FetchTodoAction
  | FetchTodoErrorAction
  | FetchTodoSuccessAction
  | SetTodoPage;
Если бы было 10 и более, уже не окей


Так можно сделать чтобы убрать warning:  React Hook useEffect has missing dependencies
export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(ActionCreators, dispatch), [dispatch]);
};
И добавить в useEffect все необходимые зависимости ?


createStore устаревший и его надло заменить. но вероятно для этого придется использовать уже тулкит. 
и какой смысл лепить хук, не проще ли типизаровать сам стейт, например  useSelector((state: RootState)?


Нужна помощь, хэлп! 
21:25 начинается и 21:30 заканчивается. Пишем useEffect который диспатчим и вставляем fetchUsers(). 
Дело в том что у меня выбивает ошибку такого содержания: Argument of type '(dispatch: Dispatch<UserAction>) => 
Promise<void>' is not assignable to parameter of type 'AnyAction'.
Всё делал и писал буква в букву. Подскажите может кто то тоже с этим сталкивался.


да, материал устаревает с космической скоростью… У меня вот такой код прокатил  
useEffect(() => {
	 bindActionCreators(fetchUsers, dispatch)();
  }, []); 
Я потом переделал на хук 
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
}; как Тимур в видео делал.


Также столкнулся с ошибкой, на 22:30 в map : "Property 'map' does not exist on type 'never'" .
Если у кого-то будет подобная проблема, вот решение: 

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
	 street: string;
	 suite: string;
	 city: string;
	 zipcode: string;
	 geo: {
		lat: string;
		lng: string;
	 };
  };
};


{(users as User[]).map((user) => (
		  <div key={user.id}>{user.name}</div>
		))}



		Ребята, подскажите почему у меня такая ошибка: Expected 1 arguments, but got 2.
	 3 | import thunk from 'redux-thunk';
	 4 |
  > 5 | export const store = configureStore(applyMiddleware(thunk), { rootReducer }); В каком смысле ожидался 1 аргумент, а получилось 2, не пойму


  ошибка тут в том что configureStore({
  reducer,
  middleware: ... }) 

в аргументах ожидается объект в котором уже есть поле редьюсер и поле мидлвар 

я так понял, используется тулкит, а не то что в видео


Непонятно, почему ESLint ругается на эту конструкцию и просит включить в зависимости FetchUsers. Если включить, то всё приложение летит к чертям...

useEffect(() => {
	 fetchUsers();
  }, []);
*/