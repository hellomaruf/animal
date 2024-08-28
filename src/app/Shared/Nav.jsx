function Nav() {
  return (
    <div className="max-w-7xl mx-auto my-6 flex items-center justify-between">
      <div className=" space-x-4">
        <button className="border-2 border-red-600 py-2 px-3 rounded-full text-lg text-red-600">Land Animal</button>
        <button className="border-2 border-red-600 py-2 px-3 rounded-full text-lg text-red-600">Bird</button>
        <button className="border-2 border-red-600 py-2 px-3 rounded-full text-lg text-red-600">Fish</button>
        <button className="border-2 border-red-600 py-2 px-3 rounded-full text-lg text-red-600">Insect</button>
      </div>
          <div className=" space-x-4">
          <button className="border-2 py-2 px-3 rounded-full text-lg">Add </button>
          <button className="border-2 py-2 px-3 rounded-full text-lg">Add </button>
      </div>
    </div>
  );
}

export default Nav;
