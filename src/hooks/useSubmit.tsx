import axios from "axios";
import { useState } from "react";

export default function useSubmit() {
  const [errorId, setErrorId] = useState<string | null>(null);
  const [errorToken, setErrorToken] = useState<string | null>(null);
  const [skuID, setSkuID] = useState("");
  const [skuIDPlaceholder, setSkuIDPlaceholder] = useState("ID");
  const [tokenPlaceholder, setTokenPlaceholder] = useState("Token");
  const [token, setToken] = useState("");
  const [region, setRegion] = useState("ar-SA");
  const [avatarSrc, setAvatarSrc] = useState<null | string>(null);
  const [submitStatus, setSubmitStatus] = useState<
    null | "successful" | "failed"
  >(null);

  const handleSelectChange = (e: any) => {
    setRegion(e.target.value); // Update the region state when the user selects a region
  };

  const handleAddToCart = async () => {
    setErrorId(null);
    setErrorToken(null);
    setSubmitStatus(null);

    if (skuID?.length === 0) {
      setErrorId("Empty ID");
      console.error(errorId);
    }
    if (token.length === 0) {
      setErrorToken("Empty Token");
      console.error(errorToken);
    }
    if (skuID.split("-").length !== 3) {
      setErrorId("Invalid ID");
      console.error(errorId);
    }
    try {
      if (skuID.split("-").length === 3 && token) {
        const response = await axios.post("/api/addToCart", {
          skuID,
          token,
          region,
        });
        if (response.data.isAddedToCart) {
          setAvatarSrc(`http://apollo2.dl.playstation.net${response.data.img}`);
          setSkuID("");
          setToken("");
          setRegion("ar-SA");
          setSubmitStatus("successful");
        } else {
          setSkuID("");
          setToken("");
          setRegion("ar-SA");
          setSkuIDPlaceholder("Ensure ID matches Region");
          setTokenPlaceholder("Ensure Token is Valid");
          setSubmitStatus("failed");
        }
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
      setSkuID("");
      setToken("");
      setRegion("ar-SA");
      setSkuIDPlaceholder("Ensure ID matches Region");
      setTokenPlaceholder("Ensure Token is Valid");
      setSubmitStatus("failed");
    }
  };

  return {
    errorId,
    setErrorId,
    errorToken,
    setErrorToken,
    skuID,
    setSkuID,
    skuIDPlaceholder,
    setSkuIDPlaceholder,
    tokenPlaceholder,
    setTokenPlaceholder,
    token,
    setToken,
    region,
    setRegion,
    avatarSrc,
    setAvatarSrc,
    submitStatus,
    setSubmitStatus,
    handleSelectChange,
    handleAddToCart,
  };
}
