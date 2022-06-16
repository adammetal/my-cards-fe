import { useMemo } from "react";
import wrapPromise from "../wrap-promise";

function useAsyncResource(callback) {
  const resource = useMemo(() => {
    return wrapPromise(callback());
  }, [callback]);

  return resource;
}

export default useAsyncResource;
