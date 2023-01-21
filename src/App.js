import { useState } from "react";

function App() {
	let [value, setValue] = useState("");
	let [todo, setTodos] = useState([
		{
			id: 1,
			title: "Read book",
			isComplate: false,
		},
		{
			id: 2,
			title: "Write code",
			isComplate: true,
		},
		{
			id: 3,
			title: "Do homework",
			isComplate: false,
		},
	]);

	function render(evt) {
		setValue(evt.target.value);
	}

	function submit(evt) {
		evt.preventDefault();

		const newTodos = {
			id: todo[todo.length - 1].id + 1,
			title: value,
			isComplate: false,
		};
		setTodos([...todo, newTodos]);
	}
	function edit(id) {
		const arr = [...todo];
		const item = arr.find((item) => item.id === id);
		const newPromtText = prompt("Edit your todo!");
		item.title = newPromtText;
		setTodos(arr);
	}
	function delet(id ,evt) {
		console.log(evt);
		const filterDel = todo.filter(item => item.id !== id)

		console.log(filterDel);
		setTodos(filterDel)
	}
	return (
		<section>
			<div className='container'>
				<h1 className='text-center text-primary'>Todos</h1>
				<form onSubmit={submit} className='d-flex'>
					<input onChange={render} className='form-control me-4' type='text' />
					<button className='btn btn-primary'>Add</button>
				</form>
				<h2>{value}</h2>
				<ul className='list-unstyled mt-5'>
					{todo.map((item) => (
						<li
							key={item.id}
							className='d-flex align-items-center justify-content-between border border-2 rounded-3 p-2 px-5'
						>
							<form>
								<input
									defaultChecked={item.isComplate}
									className='form-check-input'
									type='checkbox'
								/>
							</form>
							<p className='mb-0'>{item.title}</p>
							<div>
								<button
									onClick={() => {
										edit(item.id);
									}}
									data-tag={item.id}
									className='btn bg-success text-white  me-4'
								>
									Edit
								</button>
								<button
									onClick={() => {
										delet(item.id);
									}}
									className='btn btn-primary'
								>
									Delet
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default App;