import "./App.css";

function App() {
  return (
    <div>
      <label
        htmlFor="about"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        About
      </label>
      <div className="mt-2">
        <textarea
          id="about"
          name="about"
          rows={3}
          className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        ></textarea>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Brief description for your profile. URLs are hyperlinked.
      </p>
    </div>
  );
}

export default App;
