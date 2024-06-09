"use client";

import SelectRegion from "./select";
import SuccessPopup from "./success";
import InputID from "./input-id";
import InputToken from "./input-token";
import SubmitButton from "./button";
import FormWrapper from "./form-wrapper";
import useSubmit from "@/hooks/useSubmit";

export default function Form() {
  const {
    errorId,
    setErrorId,
    errorToken,
    setErrorToken,

    skuID,
    setSkuID,
    skuIDPlaceholder,
    tokenPlaceholder,
    token,
    setToken,
    region,
    avatarSrc,
    setAvatarSrc,
    submitStatus,
    handleSelectChange,
    handleAddToCart,
  } = useSubmit();

  return (
    <>
      {avatarSrc !== null ? (
        <SuccessPopup avatarSrc={avatarSrc} setAvatarSrc={setAvatarSrc} />
      ) : null}

      <FormWrapper avatarSrc={avatarSrc}>
        <InputID
          errorId={errorId}
          setErrorId={setErrorId}
          setSkuID={setSkuID}
          skuID={skuID}
          skuIDPlaceholder={skuIDPlaceholder}
          submitStatus={submitStatus}
        />
        <InputToken
          errorToken={errorToken}
          setErrorToken={setErrorToken}
          setToken={setToken}
          token={token}
          tokenPlaceholder={tokenPlaceholder}
          submitStatus={submitStatus}
        />
        <SelectRegion handleSelectChange={handleSelectChange} region={region} />
        <SubmitButton handleAddToCart={handleAddToCart} />
      </FormWrapper>
    </>
  );
}
