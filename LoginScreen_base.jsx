import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Simulate OTP sending
    setOtpSent(true);
  };

  const handleLogin = () => {
    // Handle login logic
    console.log('Logging in with OTP:', otp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-700">Welcome to DietBuddy</CardTitle>
          <CardDescription className="text-center text-gray-600">Your personal nutrition assistant</CardDescription>
        </CardHeader>
        <CardContent>
          {!otpSent ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="text-green-600" />
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-grow"
                />
              </div>
              <Button onClick={handleSendOtp} className="w-full bg-green-600 hover:bg-green-700">
                Send OTP
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button onClick={handleLogin} className="w-full bg-green-600 hover:bg-green-700">
                Login
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">Need help? Contact support</p>
        </CardFooter>
      </Card>
    </div>
  );
}