import { useState, type ChangeEvent, type FormEvent } from "react";

interface LoginFormData {
  userType: string;
  email: string;
  password: string;
  rememberCredentials: boolean;
  retrievalEmail: string;
  newPassword: string;
  confirmPassword: string;
}

interface FormErrors {
  userType?: string;
  email?: string;
  password?: string;
  retrievalEmail?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const Login = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<LoginFormData>({
    userType: "",
    email: "",
    password: "",
    rememberCredentials: false,
    retrievalEmail: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [countdown, setCountdown] = useState<number>(60);
  const [loginError, setLoginError] = useState<string>("");

  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.userType) {
          newErrors.userType = "Please select a user type";
        }
        break;
      case 2:
        if (!formData.email) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
          newErrors.password = "Password is required";
        }
        break;
      case 3:
        if (!formData.retrievalEmail) {
          newErrors.retrievalEmail = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.retrievalEmail)) {
          newErrors.retrievalEmail = "Email is invalid";
        }
        break;
      case 5:
        if (!formData.newPassword) {
          newErrors.newPassword = "Password is required";
        } else if (formData.newPassword.length < 8) {
          newErrors.newPassword = "Password must be at least 8 characters";
        }
        if (formData.newPassword !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      console.log(`Step ${step} data:`, formData);

      if (step === 2) {
        // Simulate login validation
        if (formData.password === "wrongpassword") {
          setLoginError("Wrong password");
          return;
        } else {
          setLoginError("");
        }
      }

      if (step === 3) {
        // Start countdown timer for step 4
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }

      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    if (step === 4) {
      setCountdown(60);
    }
  };

  const handleResendEmail = () => {
    setCountdown(60);
    console.log("Resending email to:", formData.retrievalEmail);
    // Add your email resend logic here
  };

  const handleUserTypeSelect = (type: string) => {
    setFormData({ ...formData, userType: type });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className=" p-6 md:p-8 rounded-xl w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-6">
          RIT
        </h1>

        {/* Step 1: User Type Selection */}
        {step === 1 && (
          <form onSubmit={handleNext}>
            <h2 className="text-gray-800 font-semibold mb-6 text-center text-xl">
              LOGIN
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div
                className={`p-4 border rounded-lg text-center cursor-pointer transition-colors ${
                  formData.userType === "owner"
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleUserTypeSelect("owner")}
              >
                <div className="mb-2">🏠</div>
                <span>Property owner</span>
              </div>

              <div
                className={`p-4 border rounded-lg text-center cursor-pointer transition-colors ${
                  formData.userType === "tenant"
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleUserTypeSelect("tenant")}
              >
                <div className="mb-2">👤</div>
                <span>Tenant</span>
              </div>

              <div
                className={`p-4 border rounded-lg text-center cursor-pointer transition-colors ${
                  formData.userType === "manager"
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleUserTypeSelect("manager")}
              >
                <div className="mb-2">💼</div>
                <span>Community manager</span>
              </div>
            </div>

            {errors.userType && (
              <p className="text-red-500 text-sm mt-1 text-center mb-4">
                {errors.userType}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              CONTINUE
            </button>

            <p className="text-center text-sm mt-6">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Signup
              </a>
            </p>
            <p className="text-center text-xs text-gray-500 mt-3 cursor-pointer hover:text-gray-700">
              Help
            </p>
          </form>
        )}

        {/* Step 2: Login Form */}
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
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {loginError && (
              <p className="text-red-500 text-sm mt-1 text-center mb-4">
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
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Save my login credentials
                </label>
              </div>

              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setStep(3)}
              >
                I forgot my password
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
            >
              LOGIN
            </button>

            <p className="text-center text-sm mt-6">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Signup
              </a>
            </p>
            <p className="text-center text-xs text-gray-500 mt-3 cursor-pointer hover:text-gray-700">
              Help
            </p>
          </form>
        )}

        {/* Step 3: Forgot Password - Email Input */}
        {step === 3 && (
          <form onSubmit={handleNext}>
            <h2 className="text-gray-800 font-semibold mb-4 text-center">
              Insert your retrieval email address.
            </h2>

            <div className="mb-6">
              <input
                type="email"
                name="retrievalEmail"
                placeholder="Email"
                value={formData.retrievalEmail}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.retrievalEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.retrievalEmail}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
            >
              NEXT
            </button>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              BACK
            </button>

            <p className="text-center text-sm mt-6">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Signup
              </a>
            </p>
            <p className="text-center text-xs text-gray-500 mt-3 cursor-pointer hover:text-gray-700">
              Help
            </p>
          </form>
        )}

        {/* Step 4: Check Email */}
        {step === 4 && (
          <div>
            <h2 className="text-gray-800 font-semibold mb-4 text-center">
              Check your mail box
            </h2>

            <p className="text-gray-600 text-sm mb-6 text-center">
              We sent a password retrieval email to {formData.retrievalEmail}.
              This email is valid for 24 hours.
            </p>

            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 text-blue-800 rounded-full h-24 w-24 flex items-center justify-center">
                <span className="text-xl font-bold">{countdown}s</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <button
                type="button"
                className="text-blue-600 hover:underline text-sm"
                onClick={handleResendEmail}
                disabled={countdown > 0}
              >
                I have not received the email
              </button>
            </div>

            <button
              onClick={() => setStep(5)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
              disabled={countdown > 0}
            >
              {countdown > 0 ? `Wait ${countdown}s` : "CONTINUE"}
            </button>

            <button
              onClick={() => setStep(3)}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              BACK
            </button>

            <p className="text-center text-sm mt-6">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Signup
              </a>
            </p>
            <p className="text-center text-xs text-gray-500 mt-3 cursor-pointer hover:text-gray-700">
              Help
            </p>
          </div>
        )}

        {/* Step 5: New Password */}
        {step === 5 && (
          <form onSubmit={handleNext}>
            <h2 className="text-gray-800 font-semibold mb-4 text-center">
              Put a new password
            </h2>

            <p className="text-gray-600 text-sm mb-6">
              A strong password is a mix of uppercase letters, lowercase
              letters, numbers, and special characters.
            </p>

            <div className="mb-4">
              <input
                type="password"
                name="newPassword"
                placeholder="Type your password here"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div className="mb-6">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Retype the password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
            >
              NEXT
            </button>

            <button
              type="button"
              onClick={() => setStep(4)}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              BACK
            </button>

            <p className="text-center text-sm mt-6">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Signup
              </a>
            </p>
            <p className="text-center text-xs text-gray-500 mt-3 cursor-pointer hover:text-gray-700">
              Help
            </p>
          </form>
        )}

        {/* Step 6: Success */}
        {step === 6 && (
          <div className="text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-gray-800 font-semibold mb-4">
              Password Changed Successfully!
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Your password has been updated. You can now login with your new
              password.
            </p>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              LOGIN NOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
