import axiosInstance from "../services/axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../services/Toast";

const useApiClient = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async ({
      method = "GET",
      endpoint,
      body = null,
      redirectTo = "",
      showToast = true,
    }) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance({
          method,
          url: endpoint,
          data: body,
        });

        setData(response.data);

        if (showToast && response.data?.message)
          successToast(response.data.message);

        if (redirectTo) navigate(redirectTo);

        return response;
      } catch (error) {
        // console.error("API request error:", error);

        const errorMessage =
          error.response?.data?.message ||
          error.response?.data?.errors[0]?.msg ||
          "Server failed to respond";

        setError(errorMessage);

        if (showToast) errorToast(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useApiClient;
