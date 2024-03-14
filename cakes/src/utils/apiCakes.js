import { api } from "./api";



export const getCakes = () => {
  return api
  .get("/cakes")
  .then((res) => res.data)
  .catch((error) => {
    console.log(error)
    return[]
  })
}


// export const getCakeById = ({id}) => {
//   return api
//     .get(`/cakes/${id}`)
//     .then((res) => res.data)
//     .catch((error) => {
//       console.log(error);
//       return [];
//     });
  
// }


export const getCakeById = ({ queryKey }) => {
  return api
    .get(`/cakes/${queryKey[1]}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
};
