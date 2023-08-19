import EnvVars from "@src/constants/EnvVars";
import axios from "axios";

const uploadDocument = async (file: Express.Multer.File, fileName: string) => {
  try {
    const formData = new FormData();
    formData.append("file", file.buffer.toString("base64"));
    formData.append("collection", "AEKDVyJU");
    formData.append("workspace", "fUSZAVBB");
    formData.append("wait", "false");
    // formData.append("identifier", "");
    formData.append("fileName", fileName);
    // formData.append("expiryTime", file);
    // formData.append("language", "en");
    formData.append("rejectDuplicates", "false");
    // formData.append("regionBias", JSON.stringify({ country: "in" }));
    formData.append("lowPriority", "false");
    const { data } = await axios.post(EnvVars.API + "/documents", formData, {
      headers: {
        Authorization: "Bearer " + EnvVars.apiKey,
        "Content-Type": "multipart/form-data",
      },
    });

    return { data, status: 200, message: "Document uploaded" };
  } catch (error) {
    console.log("API error ", error.response.data);

    return {
      status: 400,
      message: error.message as string,
      data: null,
    };
  }
};

export default {
  uploadDocument,
};
