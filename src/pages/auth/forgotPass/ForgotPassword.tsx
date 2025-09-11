import { useState, type ChangeEvent, type FormEvent } from "react";

interface ForgotFormData {
  retrievalEmail: string;
  newPassword: string;
  confirmPassword: string;
}

interface FormErrors {
  retrievalEmail?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const ForgotPassword = () => {
  const [step, setStep] = useState<number>(3);
  const [formData, setFormData] = useState<ForgotFormData>({
    retrievalEmail: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [countdown, setCountdown] = useState<number>(60);

  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};
    switch (step) {
      case 3:
        if (!formData.retrievalEmail)
          newErrors.retrievalEmail = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.retrievalEmail))
          newErrors.retrievalEmail = "Invalid email";
        break;
      case 5:
        if (!formData.newPassword)
          newErrors.newPassword = "Password is required";
        else if (formData.newPassword.length < 8)
          newErrors.newPassword = "Password must be at least 8 characters";
        if (formData.newPassword !== formData.confirmPassword)
          newErrors.confirmPassword = "Passwords do not match";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      console.log(`Step ${step} data:`, formData);

      if (step === 3) {
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

  const handleResendEmail = () => {
    setCountdown(60);
    console.log("Resending email to:", formData.retrievalEmail);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="p-6 md:p-8 rounded-xl w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-6">
          RIT
        </h1>

        {/* Step 3 */}
        {step === 3 && (
          <form onSubmit={handleNext}>
            <h2 className="text-gray-800 font-semibold mb-4 text-center">
              Insert your retrieval email address.
            </h2>
            <input
              type="email"
              name="retrievalEmail"
              placeholder="Email"
              value={formData.retrievalEmail}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 mb-3"
            />
            {errors.retrievalEmail && (
              <p className="text-red-500 text-sm">{errors.retrievalEmail}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              NEXT
            </button>
          </form>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <h2 className="text-gray-800 font-semibold mb-4 text-center">
              Check your mail box
            </h2>
            <p className="text-gray-600 text-sm mb-6 text-center">
              We sent a password retrieval email to {formData.retrievalEmail}.
            </p>
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 text-blue-800 rounded-full h-24 w-24 flex items-center justify-center">
                <span className="text-xl font-bold">{countdown}s</span>
              </div>
            </div>
            <button
              onClick={handleResendEmail}
              className="text-blue-600 hover:underline text-sm mb-6 block mx-auto"
              disabled={countdown > 0}
            >
              I have not received the email
            </button>
            <button
              onClick={() => setStep(5)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              disabled={countdown > 0}
            >
              CONTINUE
            </button>
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <form onSubmit={handleNext}>
            <h2 className="text-gray-800 font-semibold mb-4 text-center">
              Put a new password
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              A strong password is a mix of uppercase, lowercase, numbers, and
              special characters.
            </p>
            <input
              type="password"
              name="newPassword"
              placeholder="Type your password here"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 mb-3"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm">{errors.newPassword}</p>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype the password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 mb-3"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              NEXT
            </button>
          </form>
        )}

        {/* Step 6 */}
        {step === 6 && (
          <div className="text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-gray-800 font-semibold mb-4">
              Password Changed Successfully!
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              You can now login with your new password.
            </p>
            <a
              href="/login"
              className="w-full inline-block bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              LOGIN NOW
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
