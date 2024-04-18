


import { apiConnector } from "../apiConnector"
import { setRegisterData } from "../../slices/registerSlice";




export function registercompany(
  companyName,
  ownerName,
  rollNo,
  ownerEmail,
  accessCode,

) {
  return async (dispatch) => {
    // const url = "http://20.244.56.144/test/register"
    console.log("data in regiser company", companyName,
      ownerName,
      rollNo,
      ownerEmail,
      accessCode,)
    try {
      const response = await apiConnector("POST","http://20.244.56.144/test/register",{
        companyName,
        ownerName,
        rollNo,
        ownerEmail,
        accessCode,
      })

      console.log("Register api response............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      dispatch(setRegisterData(response?.data))

    } catch (error) {
      console.log("Register API ERROR............", error)

    }
  }
}

