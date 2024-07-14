const Home = () => {
  return (
    <main className="h-full flex flex-col gap-5 justify-center items-center">
      <h1 className="pt-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-rose-600">
        ScreenMate
      </h1>
      <p className="text-2xl font-semibold tracking-wider">
        Find Movies That Match Your Mood – Pick a Genre!
      </p>
      <select className="p-2 text-2xl bg-gray-700 rounded-lg ">
        <option value="">Select a Genre</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
      </select>
    </main>
  );
};

export default Home;
