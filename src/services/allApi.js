import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//product add api
export const productAddApi=async(reqBody)=>{
return await commonApi('POST',`${serverUrl}/product`,reqBody)   
}

//product get api
export const productGetApi=async()=>{
    return await commonApi('GET',`${serverUrl}/product`,"")
}


//product delete api 
export const productDeleteApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/product/${id}`,{})
}

//product edit api
export const productEditApi=async(id)=>{
    return await commonApi('GET',`${serverUrl}/product/${id}`,"")
}

//product update api
export const productUpdateApi = async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}
