import { useState, type ChangeEvent } from "react";

// Define types for our form data
interface FormData {
  userType: string;
  documentType: string;
  documentFile: File | null;
  firstName: string;
  middleName: string;
  givenName: string;
  dob: string;
  sex: string;
  city: string;
  profession: string;
  maritalStatus: string;
  address: string;
  phone: string;
  otp: string;
  email: string;
  emailOtp: string;
  username: string;
  password: string;
  confirmPassword: string;
}

// Define types for our form errors
interface FormErrors {
  userType?: string;
  documentType?: string;
  documentFile?: string;
  firstName?: string;
  givenName?: string;
  dob?: string;
  sex?: string;
  profession?: string;
  phone?: string;
  otp?: string;
  email?: string;
  emailOtp?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

const Signup = () => {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    userType: "",
    documentType: "",
    documentFile: null,
    firstName: "",
    middleName: "",
    givenName: "",
    dob: "",
    sex: "",
    city: "",
    profession: "",
    maritalStatus: "",
    address: "",
    phone: "",
    otp: "",
    email: "",
    emailOtp: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Validation per step
  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};
    switch (step) {
      case 0:
        if (!formData.userType) {
          newErrors.userType = "Please select a user type";
        }
        break;
      case 1:
        if (!formData.documentType)
          newErrors.documentType = "Select document type";
        if (!formData.documentFile)
          newErrors.documentFile = "Upload a document";
        break;
      case 2:
        if (!formData.firstName) newErrors.firstName = "First name required";
        if (!formData.givenName) newErrors.givenName = "Given name required";
        if (!formData.dob) newErrors.dob = "Date of birth required";
        if (!formData.sex) newErrors.sex = "Select sex";
        break;
      case 3:
        if (!formData.profession) newErrors.profession = "Profession required";
        if (!formData.phone) newErrors.phone = "Phone number required";
        if (!formData.otp) newErrors.otp = "OTP required";
        break;
      case 4:
        if (!formData.email) newErrors.email = "Email required";
        if (!formData.emailOtp) newErrors.emailOtp = "OTP required";
        break;
      case 5:
        if (!formData.username) newErrors.username = "Username required";
        if (!formData.password) newErrors.password = "Password required";
        if (formData.password !== formData.confirmPassword)
          newErrors.confirmPassword = "Passwords do not match";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      console.log("Step", step, "data:", formData);
      setStep(step + 1);
    }
  };

  //   const handleUserTypeSelect = (type: string) => {

  //     setFormData({ ...formData, userType: type });
  //   };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const progressDots = () => (
    <div className="flex justify-center space-x-2 mb-6">
      {[0, 1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-4 h-4 rounded-full ${
            step >= dot ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className=" p-6 rounded-xl w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-4">
          RIT
        </h1>
        {progressDots()}

        {/* Step 0: User Type Selection */}
        {step === 0 && (
          <div>
            <h2 className="text-gray-800 font-semibold mb-6 text-center text-xl">
              SIGN UP
            </h2>

            {/* User Type Selection */}
            <div className="flex flex-col space-y-3 mb-4">
              <label
                className={`flex items-center justify-center space-x-2 border p-3 rounded-lg cursor-pointer transition-colors ${
                  formData.userType === "owner"
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value="owner"
                  checked={formData.userType === "owner"}
                  onChange={handleChange}
                  className="hidden"
                />
                <span>🏠 Property Owner</span>
              </label>

              <label
                className={`flex items-center justify-center space-x-2 border p-3 rounded-lg cursor-pointer transition-colors ${
                  formData.userType === "tenant"
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value="tenant"
                  checked={formData.userType === "tenant"}
                  onChange={handleChange}
                  className="hidden"
                />
                <span>👤 Tenant</span>
              </label>

              <label
                className={`flex items-center justify-center space-x-2 border p-3 rounded-lg cursor-pointer transition-colors ${
                  formData.userType === "manager"
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value="manager"
                  checked={formData.userType === "manager"}
                  onChange={handleChange}
                  className="hidden"
                />
                <span>💼 Community Manager</span>
              </label>
            </div>

            {errors.userType && (
              <p className="text-red-500 text-sm text-center mb-3">
                {errors.userType}
              </p>
            )}

            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
            >
              CONTINUE
            </button>
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-blue-600 font-semibold mb-3">
              Upload your ID document
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              Supported format: JPG, PDF, JPEG
            </p>
            <div className="flex flex-col space-y-2 mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="documentType"
                  value="Local ID"
                  checked={formData.documentType === "Local ID"}
                  onChange={handleChange}
                />
                <span>Local ID</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="documentType"
                  value="Passport"
                  checked={formData.documentType === "Passport"}
                  onChange={handleChange}
                />
                <span>Passport</span>
              </label>
              {errors.documentType && (
                <p className="text-red-500 text-sm">{errors.documentType}</p>
              )}
            </div>
            <input
              type="file"
              name="documentFile"
              accept=".jpg,.jpeg,.pdf"
              onChange={handleChange}
              className="mb-2 w-full"
            />
            {errors.documentFile && (
              <p className="text-red-500 text-sm">{errors.documentFile}</p>
            )}
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
            >
              NEXT
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-blue-600 font-semibold mb-3">
              Check your information
            </h2>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
            <input
              type="text"
              name="middleName"
              placeholder="Middle name(s)"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="text"
              name="givenName"
              placeholder="Given name"
              value={formData.givenName}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.givenName && (
              <p className="text-red-500 text-sm">{errors.givenName}</p>
            )}
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            <div className="flex space-x-3 mb-2">
              {["M", "F"].map((sex) => (
                <label key={sex} className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="sex"
                    value={sex}
                    checked={formData.sex === sex}
                    onChange={handleChange}
                  />
                  <span>{sex}</span>
                </label>
              ))}
            </div>
            {errors.sex && <p className="text-red-500 text-sm">{errors.sex}</p>}
            <input
              type="text"
              name="city"
              placeholder="City of birth"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
            >
              NEXT
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.profession && (
              <p className="text-red-500 text-sm">{errors.profession}</p>
            )}
            <input
              type="text"
              name="maritalStatus"
              placeholder="Marital status"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Detailed address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="+243 Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
            <input
              type="text"
              name="otp"
              placeholder="Put the OTP here"
              value={formData.otp}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
            >
              NEXT
            </button>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <p className="mb-2 text-sm text-gray-600">
              Put a retrieval email (used in case you forget your password).
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <input
              type="text"
              name="emailOtp"
              placeholder="Put the OTP here"
              value={formData.emailOtp}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.emailOtp && (
              <p className="text-red-500 text-sm">{errors.emailOtp}</p>
            )}
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
            >
              NEXT
            </button>
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div>
            <p className="mb-2 text-sm text-gray-600">
              A strong password is a mix of uppercase, numbers, and special
              characters.
            </p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Type your password here"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype the password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
            <button
              onClick={() => {
                if (validateStep()) {
                  console.log("Final Data Submitted:", formData);
                  alert("Form Submitted! Check console.");
                }
              }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
            >
              NEXT
            </button>
          </div>
        )}

        <p className="text-center text-sm mt-3">
          I have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            LOGIN
          </a>
        </p>
        <p className="text-center text-xs text-gray-500 mt-2 cursor-pointer">
          Help
        </p>
      </div>
    </div>
  );
};

export default Signup;
