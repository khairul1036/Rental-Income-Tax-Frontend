import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";

interface LoginFormData {
  userType: string;
  email: string;
  password: string;
  rememberCredentials: boolean;
}

interface FormErrors {
  userType?: string;
  email?: string;
  password?: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<LoginFormData>({
    userType: "",
    email: "",
    password: "",
    rememberCredentials: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loginError, setLoginError] = useState<string>("");

  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};
    switch (step) {
      case 1:
        if (!formData.userType)
          newErrors.userType = "Please select a user type";
        break;
      case 2:
        if (!formData.email) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid";
        }
        if (!formData.password) newErrors.password = "Password is required";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      console.log(`Step ${step} data:`, formData);

      if (step === 1) {
        // check wrong password simulation
        if (formData.password === "wrongpassword") {
          setLoginError("Wrong password");
          return;
        } else {
          setLoginError("");
        }
        setStep(2); // go to user type select
      } else if (step === 2) {
        // final step → redirect role based
        if (formData.userType === "owner") {
          navigate("/dashboard/owner");
        } else if (formData.userType === "tenant") {
          navigate("/dashboard/tenant");
        } else if (formData.userType === "manager") {
          navigate("/dashboard/manager");
        }
      }
    }
  };

  const handleUserTypeSelect = (type: string) => {
    setFormData({ ...formData, userType: type });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="p-6 md:p-8 rounded-xl w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-6">
          RIT
        </h1>

        {/* Step 1 */}
        {step === 1 && (
          <form onSubmit={handleNext}>
            <h2 className="text-gray-800 font-semibold mb-6 text-center text-xl">
              LOGIN
            </h2>
            <div className="flex flex-col space-y-3 mb-4">
              {["owner", "tenant", "manager"].map((type) => (
                <div
                  key={type}
                  className={`p-4 border rounded-lg text-center cursor-pointer transition-colors ${
                    formData.userType === type
                      ? "bg-blue-100 border-blue-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleUserTypeSelect(type)}
                >
                  <span>
                    {type === "owner" && "🏠 Property Owner"}
                    {type === "tenant" && "👤 Tenant"}
                    {type === "manager" && "💼 Community Manager"}
                  </span>
                </div>
              ))}
            </div>
            {errors.userType && (
              <p className="text-red-500 text-sm text-center mb-4">
                {errors.userType}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              CONTINUE
            </button>
          </form>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={handleNext}>
            <h2 className="text-gray-800 font-semibold mb-6 text-center text-xl">
              LOGIN
            </h2>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {loginError && (
              <p className="text-red-500 text-sm text-center mb-4">
                {loginError}
              </p>
            )}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="rememberCredentials"
                  checked={formData.rememberCredentials}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-700"
                >
                  Save my login credentials
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                I forgot my password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              LOGIN
            </button>
          </form>
        )}

        <p className="text-center text-sm mt-3">
          I have an account?{" "}
          <a href="/signup" className="text-blue-600 font-semibold">
            SIGNUP
          </a>
        </p>
        <p className="text-center text-xs text-gray-500 mt-2 cursor-pointer">
          Help
        </p>
      </div>
    </div>
  );
};

export default Login;
