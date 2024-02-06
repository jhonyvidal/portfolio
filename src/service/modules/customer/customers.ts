import { base } from "../../base-api/base";
import { handleSubModuleError } from "../../tools/apiError";
import { EMAIL, PASSWORD } from "../../tools/constans";
import { ApiResponse } from "../../tools/types";
import { postUserLogin } from "../users/users";
import { ResponseAuth, customerRequest } from "./types";

export const postCustomer = async (
  reqData: customerRequest
): Promise<ApiResponse<ResponseAuth>> => {
  try {
    const token = await postUserLogin({
      data: { email: EMAIL, password: PASSWORD },
    });

    const { data, status } = await base.post<ResponseAuth>(
      "/Leads/Lead",
      reqData,
      { headers: { Authorization: `Bearer ${token.response?.access_token}` } }
    );
    return {
      response: data,
      status: status,
      success: !!Object.keys(data).length,
    };
  } catch (error) {
    return handleSubModuleError(error);
  }
};
