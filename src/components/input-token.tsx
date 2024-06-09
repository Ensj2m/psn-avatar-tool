type Props = {
  errorToken: string | null;
  setErrorToken: any;
  submitStatus: string | null;
  token: string;
  setToken: any;
  tokenPlaceholder: string;
};

export default function InputToken({
  errorToken,
  setErrorToken,
  submitStatus,
  token,
  setToken,
  tokenPlaceholder,
}: Props) {
  const handleChange = (e: any) => {
    setToken(e.target.value);
    setErrorToken(null);
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`relative w-full overflow-hidden rounded-md ring-1 ring-white/20 focus-within:ring-[#D16014]/50 focus-within:ring-2`}
      >
        <input
          value={token}
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          required
          minLength={20}
          placeholder={tokenPlaceholder}
          className={`bg-transparent text-white font-normal appearance-none h-full w-full py-2.5 px-2.5  autofill-selected:bg-black placeholder-white/40`}
        />
      </div>
      {submitStatus === "failed" && (
        <span className="text-red-600">{tokenPlaceholder}</span>
      )}
      {errorToken && <span className="text-red-600">{errorToken}</span>}
    </div>
  );
}
