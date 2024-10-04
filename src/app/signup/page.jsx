"use client"
import DataUsageCard from "@/components/Dataconsent";
import SignInButton from "./signClient";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome to Voice Notes</h1>
        <div className="mb-6 text-center">
          <p className="text-gray-600">Sign in to access your account</p>
        </div>
        <SignInButton />
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By signing in, you agree to our
          <DataUsageCard/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
