import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signInAdmin, signInUser, signUpUser } from "services/auth.services";

export const useSignUpUser = () => {
  const navigate = useNavigate();
  return useMutation(signUpUser, {
    onSuccess: () => {
      navigate("/login");
    },
  });
};

export const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation(signInUser, {
    onSuccess: () => {
      navigate("/"); // Redirect to homepage
    },
  });
};

export const useAdminLogin = () => {
  const navigate = useNavigate();
  return useMutation(signInAdmin, {
    onSuccess: () => {
      navigate("/admin/manage-products"); // Redirect to homepage
    },
  });
};
