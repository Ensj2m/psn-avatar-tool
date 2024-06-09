type Props = {
  children: React.ReactNode;
  avatarSrc: string | null;
};
export default function FormWrapper({ children, avatarSrc }: Props) {
  return (
    <div
      className={`gap-4 sm:gap-8 flex-col w-full ${
        avatarSrc === null ? "flex" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}
