import { useQuery } from "react-query";

import axiosClient from "../lib/axios-client";

function useWatches() {
    return useQuery("watches", () => {
      return axiosClient.get('/watches')
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

export default useWatches;
