import { useQuery } from "react-query";

import axiosClient from "../lib/axios-client";

function useIphones() {
    return useQuery("iphones", () => {
      return axiosClient.get('/iphones')
        .then(response => {
          return response.data.data
        })
        .catch(error => {
          // Must be thrown to be catched by react-query
          throw {
            ...error.response,
            ...error.response.data
          }
        });
    });
}

export default useIphones;
