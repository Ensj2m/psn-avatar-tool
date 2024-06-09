export default function SubmitButton({
  handleAddToCart,
}: {
  handleAddToCart: any;
}) {
  return (
    <button
      onClick={() => handleAddToCart()}
      className="mt-4 sm:mt-0 bg-white text-black w-full sm:w-fit px-4 py-2 rounded-md"
    >
      Submit
    </button>
  );
}
