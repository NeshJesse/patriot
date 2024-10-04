"use client"
import DataUsageCard from "@/components/Dataconsent";
import SignInButton from "./signClient";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-200 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Welcome to Protest Organizer
      </h1>
      <div className="mb-6 text-center">
        <p className="text-gray-600">
          Sign up to create and manage peaceful protests
        </p>
      </div>
      <SignInButton />
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          By signing up, you agree to our 
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a> and 
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default SignInPage;
