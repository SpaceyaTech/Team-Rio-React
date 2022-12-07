export default function BreakingNews() {
  return (
    <div className="relative ml-1 flex flex-row">
      <img
        className="w-40 h-40 object-cover"
        src="https://loremflickr.com/640/360"
        alt="image"
      />
      <div className="h-40 bg-black/60">
        <h3 className="text-white p-2">Global Tech Jobs</h3>
        <p className="text-white text-sm p-2">
          How to apply for remote tech jobs using our site
        </p>
        <p className="text-white text-xs p-2">
          2 hours ago, by <span className="text-green-800">Sharon</span>
        </p>
      </div>
    </div>
  );
}
