type Props = {
  errorId: string | null;
  setErrorId: any;
  submitStatus: string | null;
  skuID: string;
  setSkuID: any;
  skuIDPlaceholder: string;
};

export default function InputID({
  errorId,
  setErrorId,
  submitStatus,
  skuID,
  setSkuID,
  skuIDPlaceholder,
}: Props) {
  const handleChange = (e: any) => {
    setSkuID(e.target.value);
    setErrorId(null);
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`relative w-full overflow-hidden rounded-md ring-1 ring-white/20 focus-within:ring-[#D16014]/50 focus-within:ring-2`}
      >
        <input
          value={skuID}
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          required
          minLength={15}
          placeholder={skuIDPlaceholder}
          className={`bg-transparent text-white font-normal appearance-none h-full w-full py-2.5 px-2.5  autofill:bg-transparent placeholder-white/40`}
        />
      </div>
      {submitStatus === "failed" && (
        <span className="text-red-600">{skuIDPlaceholder}</span>
      )}
      {errorId && <span className="text-red-600">{errorId}</span>}
    </div>
  );
}
