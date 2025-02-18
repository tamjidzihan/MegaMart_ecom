import React, { useState } from "react";
export const BillingForm: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState<"bank" | "cash">("bank");
    const [saveInfo, setSaveInfo] = useState(false);
    return (
        <form className="space-y-6">
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full p-3 bg-gray-50 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-3 bg-gray-50 rounded"
                />
                <input
                    type="text"
                    placeholder="Street Address*"
                    className="w-full p-3 bg-gray-50 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Apartment, floor, etc. (optional)"
                    className="w-full p-3 bg-gray-50 rounded"
                />
                <input
                    type="text"
                    placeholder="Town/City*"
                    className="w-full p-3 bg-gray-50 rounded"
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full p-3 bg-gray-50 rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full p-3 bg-gray-50 rounded"
                    required
                />
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            checked={paymentMethod === "bank"}
                            onChange={() => setPaymentMethod("bank")}
                            className="form-radio"
                        />
                        <span>Bank</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            checked={paymentMethod === "cash"}
                            onChange={() => setPaymentMethod("cash")}
                            className="form-radio"
                        />
                        <span>Cash on delivery</span>
                    </label>
                </div>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={saveInfo}
                        onChange={(e) => setSaveInfo(e.target.checked)}
                        className="form-checkbox"
                    />
                    <span>Save this information for faster check-out next time</span>
                </label>
            </div>
            <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"
            >
                Place Order
            </button>
        </form>
    );
};
