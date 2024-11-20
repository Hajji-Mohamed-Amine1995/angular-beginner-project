import {DataType} from './type';

export default async function fetchData(url:string,method:"GET"|"POST"|"PUT"|"DELETE"|"PATCH",DataType:DataType){
  try{
    //setIsLoading(true);
    const request = await fetch(url+DataType,{
      method,
        headers:{
        'Content-Type': 'application/json'
      }
    });
    if(!request.ok){
      throw new Error('Network response was not ok');
    }
    return await request.json()
  }catch (e) {
    console.log(e);
    //setIsLoading(false);
  }finally {
    //setIsLoading(false);
  }
}
